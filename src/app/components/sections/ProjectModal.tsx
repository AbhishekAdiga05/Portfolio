import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github, Layers3, Lightbulb, X } from "lucide-react";
import { Project } from "../../../data/portfolio-data";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function SectionBlock({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary">{icon}</span>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-foreground-secondary">{project.architecture.summary}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {project.architecture.nodes.map((node, index) => (
          <div key={node} className="relative">
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted mb-2">0{index + 1}</p>
              <p className="text-sm font-medium leading-snug">{node}</p>
            </div>
            {index < project.architecture.nodes.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 -right-3 z-10 text-primary">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 14, scale: 0.98 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-5xl rounded-[28px] overflow-hidden"
      style={{ background: "rgba(10,12,20,0.96)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 40px 120px rgba(0,0,0,0.72)", backdropFilter: "blur(20px)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy" width="1200" height="640" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,4,7,0.92), rgba(3,4,7,0.35) 58%, transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">{project.subtitle}</p>
          <h2 className="text-3xl sm:text-5xl mb-3">{project.title}</h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-foreground-secondary">{project.description}</p>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{ background: "rgba(5,6,8,0.72)", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
          aria-label="Close project details"
        >
          <X size={17} />
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            <SectionBlock title="Overview" icon={<Lightbulb size={16} />}>
              <p className="text-sm leading-relaxed text-foreground-secondary">{project.overview}</p>
            </SectionBlock>

            <SectionBlock title="Architecture Diagram" icon={<Layers3 size={16} />}>
              <ArchitectureDiagram project={project} />
            </SectionBlock>
          </div>

          <div className="space-y-5">
            <SectionBlock title="Key Features" icon={<Lightbulb size={16} />}>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2, delay: index * 0.04 }}
                    className="text-sm text-foreground-secondary flex gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock title="Challenges Solved" icon={<Layers3 size={16} />}>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={challenge}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2, delay: 0.08 + index * 0.04 }}
                    className="text-sm text-foreground-secondary flex gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-secondary flex-shrink-0" />
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/[0.03] text-foreground-secondary">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ background: "transparent", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
          >
            Live Demo <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
          style={{ background: "rgba(3,4,7,0.86)", backdropFilter: "blur(18px)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <ProjectModalContent project={project} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
