import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { featuredProjects, otherProjects } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

// Showcase picks — the three strongest, most representative projects.
// Syncverse (AI collab), NeonChat (AI chat) and NexPrice (full-stack) show
// the range without repeating similar builds.
const SHOWCASE = ["Syncverse", "NeonChat", "NexPrice"] as const;

function EditorialRow({ p, i }: { p: (typeof featuredProjects)[0]; i: number }) {
  const reversed = i % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center border-t border-white/[0.06] pt-12 sm:pt-16`}
    >
      {/* Image */}
      <div className={`relative group ${reversed ? "md:order-2" : ""}`}>
        <span
          className="absolute -top-7 -left-2 z-0 pointer-events-none select-none font-mono-label text-[64px] sm:text-[84px] font-semibold leading-none"
          style={{ color: "var(--foreground)", opacity: 0.05 }}
          aria-hidden="true"
        >
          {p.number}
        </span>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] aspect-[16/10] bg-surface">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col items-start gap-4 ${reversed ? "md:order-1" : ""}`}>
        <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--primary)" }}>
          Featured — {String(i + 1).padStart(2, "0")}
        </p>

        <h3
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          style={{ color: "var(--foreground)", lineHeight: 1.08 }}
        >
          {p.title}
        </h3>

        <p className="text-base font-medium" style={{ color: "var(--accent-secondary)" }}>
          {p.subtitle}
        </p>

        <p className="text-[15px] sm:text-base leading-[1.7]" style={{ color: "var(--foreground-secondary)" }}>
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-mono-label text-[11px] px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.035)",
                color: "var(--foreground-muted)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          <Button variant="secondary" href={p.github} target="_blank" rel="noreferrer" icon={<Github size={14} />} className="text-[13px] h-11 px-5">
            Code
          </Button>
          <Button variant="primary" href={p.live} target="_blank" rel="noreferrer" icon={<ExternalLink size={14} />} className="text-[13px] h-11 px-5">
            Live Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const projects = [...featuredProjects, ...otherProjects];
  const showcase = SHOWCASE.map((title) => projects.find((p) => p.title === title)).filter(Boolean) as (typeof featuredProjects)[0][];

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            title="Projects"
            description="Some of the projects I've built while learning, experimenting, and trying out new technologies."
            className="mb-0"
            showRule
          />
          <Button
            variant="secondary"
            to="/projects"
            iconRight
            icon={<ArrowRight size={16} />}
            className="hidden sm:flex"
          >
            View All Projects
          </Button>
        </div>

        <div className="flex flex-col gap-12 sm:gap-20">
          {showcase.map((p, i) => (
            <EditorialRow key={p.title} p={p} i={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Button
            variant="secondary"
            to="/projects"
            iconRight
            icon={<ArrowRight size={16} />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}