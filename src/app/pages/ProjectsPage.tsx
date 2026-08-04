import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { featuredProjects, otherProjects } from "../../data/portfolio-data";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function ProjectModal({ project, onClose }: { project: typeof featuredProjects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ background: "rgba(5,6,8,0.92)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-3xl rounded-[24px] overflow-hidden"
        style={{ background: "rgba(10,12,20,0.96)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 90px rgba(0,0,0,0.65)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden">
          <img src={project.image} alt={project.title} loading="lazy" width="800" height="224" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,6,8,0.85), transparent 65%)" }} />
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
            style={{ background: "rgba(5,6,8,0.72)", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(5,6,8,0.72)")}
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs font-medium mb-2" style={{ color: "var(--accent-secondary)" }}>{project.subtitle}</p>
          <h2 className="mb-4" style={{ fontSize: "2rem" }}>{project.title}</h2>
          <p className="text-sm mb-6" style={{ color: "var(--foreground-secondary)", lineHeight: 1.8 }}>{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.07)" }}>{t}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={project.live} target="_blank" rel="noreferrer"
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer"
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ background: "transparent", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ p, i, onClick }: { p: typeof featuredProjects[0]; i: number; onClick: () => void }) {
  return (
    <ScrollReveal delay={i * 0.05} className="h-full">
      <div
        className="group relative rounded-[24px] overflow-hidden cursor-pointer flex flex-col h-full"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-[16/10]">
          <img src={p.image} alt={p.title} loading="lazy" decoding="async" width="400" height="210" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.015]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,6,8,0.78), transparent 60%)" }} />
          {p.number && (
            <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(5,6,8,0.62)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
              {p.number}
            </span>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs font-medium mb-2" style={{ color: "var(--accent-secondary)" }}>{p.subtitle}</p>
          <h3 className="mb-3" style={{ fontSize: "1.375rem" }}>{p.title}</h3>
          <p className="text-sm mb-4 flex-1" style={{ color: "var(--foreground-secondary)", lineHeight: 1.7 }}>{p.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {p.tags.slice(0, 4).map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {t}
              </span>
            ))}
            {p.tags.length > 4 && <span className="text-xs px-2.5 py-1 rounded-full" style={{ color: "var(--foreground-muted)" }}>+{p.tags.length - 4}</span>}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-4 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors duration-200"
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "var(--foreground-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Github size={13} /> Code
            </a>
            <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors duration-200"
              style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
            >
              <ExternalLink size={13} /> Demo
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-24 px-5 sm:px-6">
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Portfolio</span>
          </div>
          <h1 className="mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>Projects</h1>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--foreground-secondary)", lineHeight: 1.8 }}>
            A closer look at the projects I've built. Click any card to see details.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} onClick={() => setSelectedProject(p)} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {otherProjects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} onClick={() => setSelectedProject(p)} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
