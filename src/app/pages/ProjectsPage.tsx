import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { featuredProjects } from "../../data/portfolio-data";

const G = "#22C55E";

function ProjectModal({ project, onClose }: { project: typeof featuredProjects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.24 }}
        className="w-full max-w-2xl rounded-xl overflow-hidden"
        style={{ background: "#0c0c0c", border: "1px solid rgba(34,197,94,0.2)", boxShadow: "0 0 0 1px rgba(34,197,94,0.06), 0 32px 80px rgba(0,0,0,0.85)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${G} 30%, ${G} 70%, transparent)` }} />

        <div className="relative h-44 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0c0c, transparent 55%)" }} />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(12,12,12,0.9)", color: "#888", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = G; (e.currentTarget as HTMLElement).style.color = "#050505"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(12,12,12,0.9)"; (e.currentTarget as HTMLElement).style.color = "#888"; }}
          >
            <X size={13} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs mb-0.5" style={{ color: "rgba(34,197,94,0.7)", fontFamily: "'JetBrains Mono', monospace" }}>{project.subtitle}</p>
          <h2 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.015em" }}>{project.title}</h2>
          <p className="text-sm mb-5" style={{ color: "#bbb", lineHeight: 1.8 }}>{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "rgba(34,197,94,0.07)", color: "rgba(34,197,94,0.85)", border: "1px solid rgba(34,197,94,0.2)", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
            ))}
          </div>

          <div className="flex gap-2.5">
            <a href={project.live} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: G, color: "#050505", boxShadow: "0 0 18px rgba(34,197,94,0.4)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(34,197,94,0.65)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(34,197,94,0.4)"; }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.05)", color: "#c0c0c0", border: "1px solid rgba(255,255,255,0.09)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = G; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#c0c0c0"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; }}
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ p, i, onClick }: { p: typeof featuredProjects[0]; i: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: i * 0.06 }}
      className="group relative rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-220"
      style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.07)" }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.22)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(34,197,94,0.07), 0 14px 36px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"
        style={{ background: `linear-gradient(to right, transparent, ${G}, transparent)` }} />

      <div className="relative overflow-hidden" style={{ height: 120 }}>
        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0c0c 8%, rgba(12,12,12,0.2) 65%, transparent)" }} />
        <span className="absolute top-2 left-2 text-xs font-bold px-1.5 py-0.5 rounded"
          style={{ background: "rgba(5,5,5,0.9)", color: G, border: "1px solid rgba(34,197,94,0.2)", fontFamily: "'JetBrains Mono', monospace", backdropFilter: "blur(6px)" }}>
          {p.number}
        </span>
      </div>

      <div className="p-3.5 flex flex-col flex-1">
        <p className="text-xs mb-0.5" style={{ color: "rgba(34,197,94,0.65)", fontFamily: "'JetBrains Mono', monospace" }}>{p.subtitle}</p>
        <h3 className="text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
        <p className="text-xs mb-3 flex-1" style={{ color: "#b0b0b0", lineHeight: 1.65 }}>{p.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {p.tags.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-1.5 py-0.5 rounded"
              style={{ background: "rgba(34,197,94,0.06)", color: "rgba(34,197,94,0.75)", border: "1px solid rgba(34,197,94,0.12)", fontFamily: "'JetBrains Mono', monospace" }}>
              {t}
            </span>
          ))}
          {p.tags.length > 4 && <span className="text-xs" style={{ color: "#555" }}>+{p.tags.length - 4}</span>}
        </div>

        <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 transition-all duration-200 flex-1 justify-center"
            style={{ color: "#c0c0c0", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#c0c0c0"; el.style.background = "rgba(255,255,255,0.05)"; }}
          >
            <Github size={11} /> Code
          </a>
          <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-bold rounded-lg px-3 py-1.5 transition-all duration-200 flex-1 justify-center"
            style={{ color: "#050505", background: G, boxShadow: "0 0 12px rgba(34,197,94,0.35)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(34,197,94,0.6)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(34,197,94,0.35)"; }}
          >
            <ExternalLink size={11} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen pt-20 pb-24 px-6">
      <div className="relative max-w-7xl mx-auto">
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Portfolio</span>
          </div>
          <h1 className="text-white mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}>
            Projects
          </h1>
          <p className="text-sm mb-8 max-w-lg" style={{ color: "#bbb", lineHeight: 1.8 }}>
            A closer look at the projects I've built. Click any card to see details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} onClick={() => setSelectedProject(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
