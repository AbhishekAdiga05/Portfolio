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
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "LangChain": "https://cdn.simpleicons.org/langchain/ffffff",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "AWS": "https://cdn.simpleicons.org/amazonaws/ffffff",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  };
  return map[tech] || null;
};

function TechCard({ tech, index }: { tech: string; index: number }) {
  const iconUrl = getIconUrl(tech);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-surface border border-border-soft hover:border-primary/20 transition-all duration-200 cursor-default"
      style={{ minWidth: 0 }}
    >
      <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center overflow-hidden border border-border shadow-sm">
        {iconUrl && (
          <img src={iconUrl} alt={tech} className="w-6 h-6 object-contain" loading="lazy" />
        )}
      </div>
      <span className="text-[11px] font-medium text-foreground-muted text-center leading-tight">{tech}</span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-5 sm:px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Tech Arsenal"
          title="Skills & Tools"
          description="The technologies I use to build scalable, high-performance applications."
        />

        <div className="space-y-10 sm:space-y-12 mt-12">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: groupIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4">
                <h3 className="text-sm font-semibold tracking-wide text-foreground/50 uppercase px-1">
                  {group.label}
                </h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-3">
                {group.skills.map((tech, techIndex) => (
                  <TechCard key={tech} tech={tech} index={groupIndex * 10 + techIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
