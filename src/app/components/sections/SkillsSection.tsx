import { Code2, Server, Database, Cpu, Container, Wrench } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { skillCategories } from "../../../data/portfolio-data";

const iconMap: Record<string, typeof Code2> = {
  Frontend: Code2, Backend: Server, Database, "AI / ML": Cpu, DevOps: Container, Tools: Wrench,
};

function SkillGroup({ category, delay }: { category: typeof skillCategories[0]; delay: number }) {
  const Icon = iconMap[category.label] || Code2;

  return (
    <ScrollReveal delay={delay}>
      <SpotlightCard className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
            <Icon size={17} className="text-foreground-secondary group-hover:text-foreground transition-colors" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground" style={{ fontSize: "1.05rem" }}>{category.label}</h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-5 text-foreground-secondary">{category.capability}</p>
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-foreground-secondary transition-colors group-hover:border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </ScrollReveal>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Tools"
          description="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillGroup key={cat.label} category={cat} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
