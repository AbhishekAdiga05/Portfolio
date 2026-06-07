import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education } from "../../../data/portfolio-data";

const G = "#22C55E";

export function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Education</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Education
          </h2>
          <p className="mb-10" style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", lineHeight: 1.6 }}>
            My background.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Left — Diploma card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-xl overflow-hidden transition-all duration-200 h-full"
                style={{ background: "#0a0a0a", border: "1px solid rgba(34,197,94,0.12)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,197,94,0.3)";
                  el.style.boxShadow = "0 0 40px rgba(34,197,94,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,197,94,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top decorative gradient bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: "linear-gradient(to right, #22C55E, #16a34a, #052e16)" }}
                />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                    >
                      <GraduationCap size={24} style={{ color: G }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f8f8f8", fontSize: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                        {education.degree}
                      </h3>
                      <p className="font-medium mb-3" style={{ color: G, fontSize: "0.9375rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>
                        {education.university}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <BookOpen size={13} style={{ color: "#aaa" }} />
                          <span style={{ color: "#bbb", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8125rem" }}>{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award size={12} style={{ color: G }} />
                          <span style={{ color: G, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>CGPA: {education.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Coursework grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.13 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-xl p-5 h-full"
                style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={13} style={{ color: G }} />
                  <span style={{ color: "#aaa", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.6875rem", fontWeight: 600 }}>
                    Coursework
                  </span>
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                  <span style={{ color: "#888", fontSize: "0.6875rem", fontFamily: "'JetBrains Mono', monospace" }}>
                    {education.coursework.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {education.coursework.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(34,197,94,0.2)";
                        el.style.background = "rgba(34,197,94,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(255,255,255,0.05)";
                        el.style.background = "rgba(255,255,255,0.03)";
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(34,197,94,0.5)" }} />
                      <span style={{ color: "#ddd", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
