import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { featuredProjects } from "../../../data/portfolio-data";

const G = "#22C55E";

export function FeaturedProjectsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-5 h-[2px]" style={{ background: G }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Projects</span>
            </div>
            <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
              Featured Projects
            </h2>
            <p style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", lineHeight: 1.6 }}>
              Things I've designed, built, and shipped.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200 px-3 py-1.5 rounded-lg"
            style={{ color: G, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.05)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.05)"; }}
          >
            All projects <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((p, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-30px" });
            return (
              <motion.div
                ref={ref}
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl overflow-hidden flex flex-col"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.07)" }}
                whileHover={{ borderColor: "rgba(34,197,94,0.3)", boxShadow: "0 0 0 1px rgba(34,197,94,0.1), 0 20px 48px rgba(0,0,0,0.6)", transition: { duration: 0.25 } }}
              >
                {/* Top green accent line on hover */}
                <div className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${G}, transparent)` }} />

                {/* Compact screenshot */}
                <div className="relative overflow-hidden" style={{ height: 130 }}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0c0c 5%, rgba(12,12,12,0.3) 60%, transparent)" }} />
                  <span
                    className="absolute top-2.5 left-2.5 text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: "rgba(5,5,5,0.85)", color: G, border: "1px solid rgba(34,197,94,0.25)", fontFamily: "'JetBrains Mono', monospace", backdropFilter: "blur(6px)", textShadow: "0 0 12px rgba(34,197,94,0.4)" }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs mb-1" style={{ color: "rgba(34,197,94,0.9)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.02em" }}>{p.subtitle}</p>
                  <h3 className="text-white font-semibold mb-2" style={{ fontSize: "1.0625rem", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.015em" }}>{p.title}</h3>
                  <p className="mb-3 flex-1" style={{ color: "#ddd", lineHeight: 1.75, fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(34,197,94,0.07)", color: "rgba(34,197,94,0.85)", border: "1px solid rgba(34,197,94,0.15)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.01em" }}>{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <a
                      href={p.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-2 transition-all duration-200 flex-1 justify-center"
                      style={{ color: "#d4d4d4", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.background = "rgba(255,255,255,0.12)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#d4d4d4"; el.style.background = "rgba(255,255,255,0.06)"; }}
                    >
                      <Github size={12} /> Code
                    </a>
                    <a
                      href={p.live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold rounded-lg px-3 py-2 transition-all duration-200 flex-1 justify-center"
                      style={{ color: "#050505", background: G, boxShadow: `0 0 14px rgba(34,197,94,0.4)` }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 24px rgba(34,197,94,0.65)"; el.style.filter = "brightness(1.08)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 14px rgba(34,197,94,0.4)"; el.style.filter = "brightness(1)"; }}
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}