import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { otherProjects } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";

function ProjectCard({ p, i }: { p: typeof otherProjects[0]; i: number }) {
  return (
    <ScrollReveal delay={i * 0.06} className="h-full">
      <div className="group flex flex-col h-full">
        <div
          className="flex flex-col h-full rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="relative overflow-hidden aspect-[16/10]">
            <img src={p.image} alt={p.title} loading="lazy" decoding="async" width="400" height="250" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,6,8,0.72), transparent 55%)" }} />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <p className="text-xs font-medium mb-3" style={{ color: "var(--accent-secondary)", letterSpacing: "-0.01em" }}>{p.subtitle}</p>
            <h3 className="mb-3" style={{ fontSize: "1.5rem" }}>{p.title}</h3>
            <p className="mb-5 flex-1" style={{ color: "var(--foreground-secondary)", lineHeight: 1.75, fontSize: "0.9375rem" }}>{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-4 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Button 
                variant="ghost" 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                icon={<Github size={13} />}
                className="w-full text-xs h-10"
              >
                Code
              </Button>
              <Button 
                variant="secondary" 
                href={p.live} 
                target="_blank" 
                rel="noreferrer" 
                icon={<ExternalLink size={13} />}
                className="w-full text-xs h-10"
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function MoreProjectsSection() {
  if (otherProjects.length === 0) return null;

  return (
    <section className="pb-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="w-full h-px mb-12"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
