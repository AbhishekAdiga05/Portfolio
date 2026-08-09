import { motion } from "motion/react";
import { skillCategories } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";

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
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "AWS": "https://cdn.simpleicons.org/amazonaws/ffffff",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.simpleicons.org/github/ffffff",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  };
  return map[tech] || null;
};

function TechBadge({ tech, index }: { tech: string; index: number }) {
  const iconUrl = getIconUrl(tech);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.02,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -3,
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(124,108,244,0.15)"
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-default overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderColor: "rgba(255,255,255,0.08)"
      }}
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(124,108,244,0.08), transparent 60%)"
        }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10 w-6 h-6 flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={tech}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>
            {tech.slice(0, 2)}
          </span>
        )}
      </motion.div>

      {/* Label */}
      <span
        className="relative z-10 text-xs font-medium whitespace-nowrap"
        style={{ color: "var(--foreground-secondary)" }}
      >
        {tech}
      </span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Skills"
            title="Tech Stack"
            description="Technologies I work with to build modern applications."
            className="mx-auto"
          />
        </div>

        {/* Skills in flowing layout */}
        <div className="space-y-8">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Category label */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIndex * 0.1 + 0.1 }}
              >
                <div
                  className="h-[1px] w-8"
                  style={{ background: "var(--primary)" }}
                />
                <h3
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "var(--primary)" }}
                >
                  {group.label}
                </h3>
              </motion.div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((tech, techIndex) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    index={groupIndex * 5 + techIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
