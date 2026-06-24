import { motion } from "motion/react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

type Tech = {
  name: string;
  icon: string;
  invert?: boolean;
};

// Flattened list of all technologies for the unified square grid
const allTechs: Tech[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "OpenRouter", icon: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Judge0", icon: "https://cdn.simpleicons.org/codechef/ffffff" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
];

function SquareTechCard({ tech, index }: { tech: Tech; index: number }) {
  return (
    <motion.div
      title={tech.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: index * 0.05 
      }}
      whileHover="hover"
      className="relative aspect-square rounded-2xl flex flex-col items-center justify-center p-4 cursor-default select-none transition-colors duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
      variants={{
        hover: {
          y: -6,
          borderColor: "var(--primary)",
          backgroundColor: "rgba(124, 108, 244, 0.05)",
          boxShadow: "0 10px 30px -10px rgba(124, 108, 244, 0.3)",
        }
      }}
    >
      <motion.div 
        className="mb-3 relative"
        variants={{
          hover: { scale: 1.15 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
          loading="lazy"
          style={{
            filter: tech.invert ? "invert(1) brightness(0.9)" : "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
          }}
        />
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 z-[-1] rounded-full blur-[15px]"
          variants={{
            hover: { opacity: 0.6, background: "var(--primary)", scale: 1.5 },
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <span
        className="text-[12px] font-semibold tracking-wide text-center"
        style={{ color: "var(--foreground-muted)" }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

export function TechArsenalSection() {
  return (
    <section id="skills" className="relative py-24 px-5 sm:px-6 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute pointer-events-none inset-0 z-0"
        style={{
          background: "radial-gradient(800px circle at 50% 50%, rgba(124,108,246,0.03), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Tech Arsenal"
          title="Tools & Technologies"
          description="A set of tools I've picked up building projects — continually learning and refining my stack."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 mt-10">
          {allTechs.map((tech, i) => (
            <SquareTechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
