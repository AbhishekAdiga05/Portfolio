import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar } from "lucide-react";
import { experiences } from "../../../data/portfolio-data";

const G = "#22C55E";

export function ExperienceSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>
              Experience
            </span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Experience
          </h2>
          <p style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", lineHeight: 1.6 }}>
            Where I've contributed so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical spine — gradient glow */}
          <div
            className="absolute left-[15px] top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, rgba(34,197,94,0.5) 0%, rgba(34,197,94,0.2) 40%, rgba(34,197,94,0.05) 100%)",
              boxShadow: "0 0 8px rgba(34,197,94,0.15)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-40px" });
              return (
                <motion.div
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Glowing node */}
                  <div
                    className="absolute left-[6px] top-[6px]"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="w-[18px] h-[18px] rounded-full border-[3px] flex items-center justify-center"
                      style={{ borderColor: G, background: "#050505", boxShadow: "0 0 16px rgba(34,197,94,0.5)" }}
                    >
                      <div className="w-[6px] h-[6px] rounded-full" style={{ background: G }} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className="rounded-xl overflow-hidden transition-all duration-200"
                    style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}
                    whileHover={{ borderColor: "rgba(34,197,94,0.25)", boxShadow: "0 0 32px rgba(34,197,94,0.06)" }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Top gradient accent */}
                    <div
                      className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(to right, transparent, ${G}, transparent)` }}
                    />

                    <div className="p-5">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", letterSpacing: "-0.015em", lineHeight: 1.3 }}>
                            {exp.role}
                          </h3>
                          <span className="font-medium" style={{ color: G, fontSize: "0.9375rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>
                            {exp.org}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <Calendar size={11} style={{ color: "#888" }} />
                          <span style={{ color: "#aaa", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-2.5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3" style={{ color: "#ddd", lineHeight: 1.75, fontSize: "0.9375rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>
                            <span className="mt-[7px] flex-shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: "rgba(34,197,94,0.5)", boxShadow: "0 0 6px rgba(34,197,94,0.2)" }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
