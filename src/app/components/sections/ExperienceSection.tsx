import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar } from "lucide-react";
import { experiences } from "../../../data/portfolio-data";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
}

export function ExperienceSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section id="experience" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>Experience</span>
            </div>
            <h2 className="mb-5" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "Inter, sans-serif" }}>Experience</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "Inter, sans-serif" }}>
              Places where I've contributed, learned, and shipped with other developers.
            </p>
          </div>
        </FadeUp>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ background: "rgba(124,108,244,0.4)" }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <FadeUp key={`${exp.role}-${exp.org}`} delay={i * 0.08}>
                <div className="relative pl-10">
                  <div
                    className="absolute left-0 top-[10px] w-2 h-2 rounded-full"
                    style={{ background: "rgba(124,108,244,0.4)", boxShadow: "0 0 0 5px rgba(124,108,244,0.08)" }}
                  />

                  <motion.div
                    className="rounded-2xl p-6 transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="mb-1.5" style={{ fontSize: "1.5rem", fontFamily: "Inter, sans-serif" }}>{exp.role}</h3>
                        <p className="text-sm" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>{exp.org}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(124,108,244,0.45)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
