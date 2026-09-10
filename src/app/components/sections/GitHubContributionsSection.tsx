import { useCallback, useEffect, useState } from "react";
import { Github, ExternalLink, RotateCcw } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

const GITHUB_USERNAME = "abhishekadiga05";
// Public, CORS-enabled proxy of the GitHub contribution graph (same one react-github-calendar uses).
const GITHUB_API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

// level 0 → 4, tuned to the portfolio's purple theme (0 = faint, 4 = full primary).
const LEVEL_COLORS = [
  "rgba(74,222,128,0.08)",
  "rgba(74,222,128,0.22)",
  "rgba(74,222,128,0.45)",
  "rgba(74,222,128,0.72)",
  "#22C55E",
];

const CELL = 11;
const GAP = 3;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Day = { date: string; count: number; level: number };
type Week = (Day | null)[];
type Month = { index: number; label: string };

// Local-time ISO date (avoids the UTC shift that would corrupt day keys).
function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Chunks the day list into Sunday-aligned weeks and records month-label positions.
function buildWeeks(contributions: Day[]): { weeks: Week[]; months: Month[] } {
  if (contributions.length === 0) return { weeks: [], months: [] };

  const byDate = new Map(contributions.map((d) => [d.date, d]));
  const first = new Date(contributions[0].date + "T00:00:00");
  const last = new Date(contributions[contributions.length - 1].date + "T00:00:00");

  // Align the start to the preceding Sunday so the grid begins on a week boundary.
  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());

  const weeks: Week[] = [];
  const months: Month[] = [];
  let lastYearMonth = -1;

  const cursor = new Date(start);
  while (cursor <= last) {
    const key = cursor.getFullYear() * 12 + cursor.getMonth();
    if (key !== lastYearMonth) {
      months.push({ index: weeks.length, label: cursor.toLocaleString("en-US", { month: "short" }) });
      lastYearMonth = key;
    }

    const week: Week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(cursor);
      day.setDate(day.getDate() + i);
      week.push(byDate.get(toISO(day)) ?? null);
    }
    weeks.push(week);

    cursor.setDate(cursor.getDate() + 7);
  }

  return { weeks, months };
}

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; weeks: Week[]; months: Month[]; total: number };

function useContributions(): [State, () => void] {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    setState({ status: "loading" });

    async function load() {
      try {
        const res = await fetch(GITHUB_API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        const contributions: Day[] = (data.contributions ?? []).map((c: { date: string; count?: number; level?: number }) => ({
          date: c.date,
          count: c.count ?? 0,
          level: Math.min(4, Math.max(0, c.level ?? 0)),
        }));

        if (contributions.length === 0) throw new Error("No contribution data returned");

        const { weeks, months } = buildWeeks(contributions);
        const total = data.total?.lastYear ?? contributions.filter((c) => c.count > 0).length;

        setState({ status: "ready", weeks, months, total });
      } catch {
        if (!cancelled) setState({ status: "error" });
      }
    }

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return [state, retry];
}

function Heatmap({ weeks, months, total }: { weeks: Week[]; months: Month[]; total: number }) {
  return (
    <div className="relative">
      <div className="overscroll-x-contain pb-1 relative" aria-label={`GitHub contributions heatmap for ${GITHUB_USERNAME}, ${total} contributions in the last year`}>
        <div className="relative" style={{ width: "max-content" }}>
          {/* Month labels, aligned to the week columns */}
          <div className="relative h-[18px] mb-1">
            {months.map((m, i) => (
              <span
                key={i}
                className="absolute text-[10px] leading-[18px] whitespace-nowrap"
                style={{ left: m.index * (CELL + GAP) + GAP, color: "var(--foreground-muted)" }}
              >
                {m.label}
              </span>
            ))}
          </div>

          <div className="flex">
            {/* Weekday gutter — Mon / Wed / Fri, hidden on small screens */}
            <div className="hidden sm:flex flex-col shrink-0" style={{ gap: GAP, paddingRight: GAP }}>
              {WEEKDAYS.map((day, i) => (
                <div
                  key={day}
                  className="text-[10px]"
                  style={{ height: CELL, lineHeight: `${CELL}px`, color: "var(--foreground-muted)", visibility: i % 2 === 1 ? "visible" : "hidden" }}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="flex" style={{ gap: GAP }}>
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}` : "No contributions"}
                      style={{
                        width: CELL,
                        height: CELL,
                        borderRadius: 3,
                        background: LEVEL_COLORS[day?.level ?? 0],
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only hint that the heatmap scrolls horizontally */}
        <span
          className="sm:hidden block text-[11px] mt-3 select-none"
          style={{ color: "var(--foreground-muted)" }}
        >
          ← Scroll horizontally to see the full year →
        </span>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse" aria-busy="true" aria-label="Loading GitHub contributions">
      <div className="h-4 w-52 mb-5 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="h-40 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }} />
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <p className="text-[15px] max-w-md leading-[1.7]" style={{ color: "var(--foreground-secondary)" }}>
        Couldn't load contribution data from GitHub right now. Check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
        style={{ color: "var(--foreground)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <RotateCcw size={14} /> Try again
      </button>
    </div>
  );
}

export function GitHubContributionsSection() {
  const [state, retry] = useContributions();

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-6 relative" aria-label="GitHub contributions">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Contributions"
          description="Real activity from the last 12 months — pulled live from GitHub, nothing hardcoded."
        />

        <ScrollReveal>
          <div
            className="rounded-[28px] border p-5 sm:p-8 lg:p-10"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            {state.status === "loading" && <LoadingSkeleton />}
            {state.status === "error" && <ErrorState onRetry={retry} />}
            {state.status === "ready" && (
              <>
                <div className="mb-5">
                  <p className="text-sm sm:text-base font-semibold" style={{ color: "var(--foreground)" }}>
                    <span style={{ color: "var(--primary)" }}>{state.total.toLocaleString()}</span>{" "}
                    contributions in the last year
                  </p>
                </div>

                <Heatmap weeks={state.weeks} months={state.months} total={state.total} />

                {/* Legend */}
                <div className="flex items-center justify-end gap-1.5 mt-4 text-[11px]" style={{ color: "var(--foreground-muted)" }}>
                  <span>Less</span>
                  {LEVEL_COLORS.map((c) => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
                  ))}
                  <span>More</span>
                </div>
              </>
            )}
          </div>
        </ScrollReveal>

        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            icon={<Github size={16} />}
            iconRight={<ExternalLink size={15} />}
          >
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
