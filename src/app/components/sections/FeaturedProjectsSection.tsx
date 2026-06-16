import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { featuredProjects } from "../../../data/portfolio-data";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
}

function ProjectCard({ p, i }: { p: typeof featuredProjects[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, delay: i * 0.06 }}
      className="group flex flex-col"
      whileHover={{ y: -4 }}
    >
      <div
        className="flex flex-col h-full rounded-[24px] overflow-hidden transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="relative overflow-hidden" style={{ height: 240 }}>
          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.015]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,6,8,0.72), transparent 55%)" }} />
          <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(5,6,8,0.62)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
            {p.number}
          </span>
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

          <div className="grid grid-cols-2 gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <motion.a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors duration-200"
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "var(--foreground-secondary)" }}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)")}
            >
              <Github size={13} /> Code
            </motion.a>
            <motion.a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="h-11 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors duration-200"
              style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
            >
              <ExternalLink size={13} /> Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section id="projects" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Projects</span>
              </div>
              <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Featured Projects</h2>
              <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
                Product-style case studies for the work I've designed, built, and shipped.
              </p>
            </div>

            <motion.span style={{ display: "inline-block" }}>
              <Link
                to="/projects"
                className="h-11 px-4 rounded-full flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
                style={{ background: "transparent", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.12)" }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                All projects <ArrowRight size={12} />
              </Link>
            </motion.span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
