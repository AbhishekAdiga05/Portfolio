import { motion } from "motion/react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

type Tech = {
  name: string;
  icon: string;
  invert?: boolean;
};

type Group = {
  label: string;
  color: string;
  bg: string;
  techs: Tech[];
};

const groups: Group[] = [
  {
    label: "Frontend",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.08)",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    label: "Backend",
    color: "#68A063",
    bg: "rgba(104,160,99,0.08)",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
  },
  {
    label: "Database",
    color: "#4DB8FF",
    bg: "rgba(77,184,255,0.08)",
    techs: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    label: "AI & APIs",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.08)",
    techs: [
      { name: "OpenRouter", icon: "https://cdn.simpleicons.org/openai/ffffff" },
      { name: "Judge0", icon: "https://cdn.simpleicons.org/codechef/ffffff" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ],
  },
  {
    label: "DevOps & Tools",
    color: "#FB923C",
    bg: "rgba(251,146,60,0.08)",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
    ],
  },
];

function TechIcon({ tech, index, accentColor }: { tech: Tech; index: number; accentColor: string }) {
  return (
    <motion.div
      title={tech.name}
      className="flex flex-col items-center gap-2 cursor-default select-none"
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = `${accentColor}14`;
          (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}55`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${accentColor}22`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          width={34}
          height={34}
          loading="lazy"
          style={{
            objectFit: "contain",
            filter: tech.invert ? "invert(1) brightness(0.85)" : "none",
            display: "block",
          }}
        />
      </div>
      <span
        className="text-[10px] font-medium text-center leading-none"
        style={{ color: "var(--foreground-muted)" }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

function GroupCard({ group, gi }: { group: Group; gi: number }) {
  return (
    <ScrollReveal delay={gi * 0.06}>
      <motion.div
        className="relative rounded-2xl overflow-hidden h-full"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
        whileHover={{
          borderColor: `${group.color}40`,
          boxShadow: `0 16px 48px rgba(0,0,0,0.35), 0 0 24px ${group.color}15`,
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Top gradient accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
          }}
        />

        <div className="p-5">
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: group.bg, border: `1px solid ${group.color}33` }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: group.color, boxShadow: `0 0 5px ${group.color}` }}
              />
            </div>
            <span
              className="text-[11px] font-bold tracking-[0.14em] uppercase"
              style={{ color: group.color }}
            >
              {group.label}
            </span>
          </div>

          {/* Icon grid */}
          <div className="flex flex-wrap gap-4">
            {group.techs.map((tech, ti) => (
              <TechIcon key={tech.name} tech={tech} index={ti} accentColor={group.color} />
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function TechArsenalSection() {
  return (
    <section id="skills" className="relative py-24 px-5 sm:px-6 overflow-hidden">
      <div
        className="absolute pointer-events-none inset-0"
        style={{
          background: "radial-gradient(800px circle at 50% 50%, rgba(124,108,246,0.05), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Tech Arsenal"
          title="Tech I've been using."
          description="A set of tools I've picked up building projects — still learning, but getting comfortable with each one."
        />

        {/* Row 1: Frontend (wide) + Backend */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="sm:col-span-2">
            <GroupCard group={groups[0]} gi={0} />
          </div>
          <div>
            <GroupCard group={groups[1]} gi={1} />
          </div>
        </div>

        {/* Row 2: Database + AI & APIs + DevOps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {groups.slice(2).map((group, i) => (
            <GroupCard key={group.label} group={group} gi={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
