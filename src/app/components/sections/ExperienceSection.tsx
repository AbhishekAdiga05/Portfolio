import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
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
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>
              Experience
            </span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Experience
          </h2>
          <p style={{ color: "#999", fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            Where I've contributed so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical spine */}
          <div
            className="absolute left-[6px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(34,197,94,0.55) 0%, rgba(34,197,94,0.04) 100%)" }}
          />

          <div className="flex flex-col gap-1">
            {experiences.map((exp, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-20px" });
              return (
                <motion.div
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.32, delay: i * 0.06 }}
                  className="relative pl-8 pb-5 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-[5px] w-[13px] h-[13px] rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: G, background: "#050505", boxShadow: "0 0 12px rgba(34,197,94,0.5)" }}
                    whileHover={{ boxShadow: "0 0 24px rgba(34,197,94,0.7)", scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[4px] h-[4px] rounded-full" style={{ background: G }} />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="rounded-xl p-4 transition-all duration-200"
                    style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
                    whileHover={{ borderColor: "rgba(34,197,94,0.3)", background: "#0e0e0e", boxShadow: "0 0 24px rgba(34,197,94,0.06)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-3">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 min-w-0">
                        <span className="text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9375rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                          {exp.role}
                        </span>
                        <span className="font-medium" style={{ color: G, fontSize: "0.8125rem" }}>@ {exp.org}</span>
                      </div>
                      <span className="flex-shrink-0" style={{ color: "#555", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.04em", marginTop: "2px" }}>
                        {exp.duration}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5" style={{ color: "#ccc", lineHeight: 1.8, fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif" }}>
                          <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "rgba(34,197,94,0.55)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
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