import { motion } from "motion/react";
import { Code2, Layout, Server, Bot } from "lucide-react";
import { skillCategories } from "../../../data/portfolio-data";
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
    "AWS": "https://cdn.simpleicons.org/amazonaws/ffffff",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.simpleicons.org/github/ffffff",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  };
  return map[tech] || null;
};

// Small lucide glyphs for each category header.
const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={16} />,
  Frontend: <Layout size={16} />,
  Backend: <Server size={16} />,
  "AI & DevOps": <Bot size={16} />,
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
// a top highlight, and a soft 3D tilt + glow on hover.
function TechBox({ tech, index, accent, className = "" }: { tech: string; index: number; accent: string; className?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const iconUrl = getIconUrl(tech);

  return (
    <motion.div
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
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 3px 0 rgba(0,0,0,0.45), 0 8px 18px rgba(0,0,0,0.25)",
      }}
      className={`group relative flex flex-col items-center justify-center gap-2 h-[104px] rounded-2xl cursor-default overflow-hidden ${className}`}
    >
      {/* Top highlight line that fades in on hover */}
      <span
        className="absolute inset-x-3 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
        className="relative z-10 text-[11px] sm:text-xs font-medium leading-tight text-center px-1"
        style={{ color: "var(--foreground-secondary)" }}
      >
        {tech}
      </span>
    </motion.div>
  );
}

function CategoryPanel({ group, groupIndex }: { group: { label: string; skills: string[] }; groupIndex: number }) {
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
        <div className="flex items-center gap-2.5">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: `${accent}1f`,
              border: `1px solid ${accent}40`,
              color: accent,
            }}
          >
            {categoryIcons[group.label]}
          </span>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--foreground)", fontFamily: "Instrument Sans" }}>
            {group.label}
          </h3>
        </div>
        <span
          className="text-[11px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
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
            className="flex-none w-[104px] snap-start sm:w-auto sm:flex-none sm:snap-none"
          />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
      {/* Animated background gradient (desktop only — large blur + infinite pulse on mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Skills"
            title="Tech Stack"
            description="Technologies I work with to build modern applications."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((group, groupIndex) => (
            <CategoryPanel key={group.label} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
