import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { skillCategories, featuredProjects, otherProjects } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";

const getIconUrl = (tech: string) => {
  const map: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.simpleicons.org/express/ffffff",
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Framer Motion": "https://cdn.simpleicons.org/framer/ffffff",
    "LangChain": "https://cdn.simpleicons.org/langchain/ffffff",
    "OpenRouter": "https://cdn.simpleicons.org/openrouter/ffffff",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.simpleicons.org/github/ffffff",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  };
  return map[tech] || null;
};

// One accent hue per category — breaks up the all-purple monotone and makes
// each group scannable at a glance.
const categoryAccents: Record<string, string> = {
  Languages: "#5C95FF",
  Frontend: "#7C6CF4",
  Backend: "#22C55E",
  "AI & DevOps": "#F59E0B",
};

// A single "2D box" tile — flat face with a solid bottom edge (box thickness),
// a top highlight, and a soft 3D tilt + glow on hover. Clickable: tapping a tile
// selects it and reveals which projects actually use that technology.
function TechBox({
  tech,
  index,
  accent,
  className = "",
  selected,
  onSelect,
}: {
  tech: string;
  index: number;
  accent: string;
  className?: string;
  selected: boolean;
  onSelect: (tech: string) => void;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const iconUrl = getIconUrl(tech);

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(tech)}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -5,
              rotateX: 7,
              rotateY: -7,
              scale: 1.05,
              borderColor: accent,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 0 3px 0 ${accent}80, 0 14px 30px ${accent}33`,
            }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      style={{
        transformPerspective: 700,
        background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: selected
          ? `inset 0 1px 0 rgba(255,255,255,0.1), 0 3px 0 ${accent}80, 0 10px 26px ${accent}40`
          : "inset 0 1px 0 rgba(255,255,255,0.08), 0 3px 0 rgba(0,0,0,0.45), 0 8px 18px rgba(0,0,0,0.25)",
        cursor: "pointer",
      }}
      className={`group relative flex flex-col items-center justify-center gap-2 h-[104px] rounded-2xl overflow-hidden text-left ${className}`}
    >
      {/* Top highlight line that shows on hover or when selected */}
      <span
        className={`absolute inset-x-3 top-0 h-px transition-opacity duration-300 pointer-events-none ${
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        aria-hidden="true"
      />

      {/* Icon */}
      <span className="h-7 w-7 flex items-center justify-center">
        {iconUrl ? (
          <img src={iconUrl} alt={tech} className="w-full h-full object-contain" loading="lazy" />
        ) : (
          <span className="text-sm font-bold" style={{ color: accent }}>
            {tech.slice(0, 2)}
          </span>
        )}
      </span>

      {/* Label */}
      <span
        className={`relative z-10 text-[11px] sm:text-xs font-medium leading-tight text-center px-1 transition-colors`}
        style={{ color: selected ? "var(--foreground)" : "var(--foreground-secondary)" }}
      >
        {tech}
      </span>

      {/* Selection affordance — a small corner tick */}
      <span
        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          background: selected ? accent : "transparent",
          boxShadow: selected ? `0 0 8px ${accent}` : "none",
        }}
        aria-hidden="true"
      />
    </motion.button>
  );
}

function CategoryPanel({
  group,
  groupIndex,
  selected,
  onSelect,
}: {
  group: { label: string; skills: string[] };
  groupIndex: number;
  selected: string | null;
  onSelect: (tech: string) => void;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const accent = categoryAccents[group.label] ?? "var(--primary)";

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border p-5 sm:p-7"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.008))",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 3px 0 rgba(0,0,0,0.35)",
      }}
    >
      {/* Category header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono-label text-[11px] font-semibold" style={{ color: accent }}>
            {String(groupIndex + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--foreground)", fontFamily: "Instrument Sans" }}>
            {group.label}
          </h3>
        </div>
        <span
          className="font-mono-label text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider"
          style={{
            color: accent,
            background: `${accent}14`,
            border: `1px solid ${accent}33`,
          }}
        >
          {group.skills.length} tools
        </span>
      </div>

      {/* Tool boxes — swipeable strip on mobile, grid from sm up */}
      <div className="flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto overscroll-x-contain -mx-1 px-1 pb-1 snap-x snap-mandatory sm:snap-none sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0">
        {group.skills.map((tech, techIndex) => (
          <TechBox
            key={tech}
            tech={tech}
            index={techIndex}
            accent={accent}
            selected={selected === tech}
            onSelect={onSelect}
            className="flex-none w-[104px] snap-start sm:w-auto sm:flex-none sm:snap-none"
          />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [selected, setSelected] = useState<string | null>(null);

  // Build a lookup from a technology → the projects that actually use it, so a
  // selected tile can show proof ("NexPrice & NeonChat" etc.) instead of a bare claim.
  const techProjects = useMemo(() => {
    const map = new Map<string, { title: string; live: string }[]>();
    const add = (p: (typeof featuredProjects)[0]) =>
      p.tags.forEach((t) => {
        const entry = { title: p.title, live: p.live };
        map.set(t, [...(map.get(t) ?? []), entry]);
      });
    featuredProjects.forEach(add);
    otherProjects.forEach(add);
    return map;
  }, []);

  const selectedProjects = selected ? techProjects.get(selected) ?? [] : [];

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 sm:mb-20">
<SectionHeading
          title={<>Tech <span className="font-serif-accent">Stack</span></>}
          description="Technologies I work with to build modern applications."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((group, groupIndex) => (
            <CategoryPanel
              key={group.label}
              group={group}
              groupIndex={groupIndex}
              selected={selected}
              onSelect={(tech) => setSelected((prev) => (prev === tech ? null : tech))}
            />
          ))}
        </div>

        {/* Provenance strip — appears under the grid when a tile is selected */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 rounded-3xl border p-6 sm:p-7"
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.008))",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="font-mono-label text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--primary)" }}>
                  {selected}
                  <span className="ml-3 text-[10px] tracking-[0.14em]" style={{ color: "var(--foreground-muted)" }}>
                    {selectedProjects.length > 0
                      ? `used in ${selectedProjects.length} project${selectedProjects.length === 1 ? "" : "s"}`
                      : "used everywhere across projects"}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground-muted)")}
                  aria-label={`Clear ${selected} selection`}
                >
                  <X size={14} />
                </button>
              </div>

              {selectedProjects.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedProjects.map((p) => (
                    <a
                      key={p.title}
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-3.5 h-9 rounded-full text-[13px] font-medium transition-colors duration-200"
                      style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.09)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                      }}
                    >
                      {p.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--primary)" }}>
                        <ExternalLink size={12} />
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-[1.7]" style={{ color: "var(--foreground-secondary)" }}>
                  A foundational tool in my workflow — used across coursework, open source, and production projects.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
