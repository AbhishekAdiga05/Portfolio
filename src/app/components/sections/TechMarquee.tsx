import { skillCategories } from "../../../data/portfolio-data";

// A quiet mono tech ticker under the hero. Runs on one seamless loop (the list
// is duplicated, so the -50% translate in .animate-marquee cycles cleanly) and
// pauses on hover. Purely decorative — aria-hidden.
export function TechMarquee() {
  const skills = skillCategories.flatMap((group) => group.skills);
  const loop = [...skills, ...skills];

  return (
    <section
      aria-hidden="true"
      className="relative py-7 overflow-hidden select-none"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="animate-marquee">
        {loop.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center shrink-0">
            <span
              className="font-mono-label text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--foreground-muted)" }}
            >
              {skill}
            </span>
            <span
              className="mx-8 text-[8px]"
              style={{ color: "var(--primary)", opacity: 0.6 }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}