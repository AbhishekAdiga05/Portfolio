import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
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
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Education
          </h2>
          <p className="mb-8" style={{ color: "#999", fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            My background.
          </p>

          <motion.div
            className="rounded-xl p-5 flex items-start gap-4 max-w-2xl"
            style={{ background: "#0c0c0c", border: "1px solid rgba(34,197,94,0.15)", boxShadow: "0 0 20px rgba(34,197,94,0.04)" }}
            whileHover={{ borderColor: "rgba(34,197,94,0.35)", boxShadow: "0 0 32px rgba(34,197,94,0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <GraduationCap size={22} style={{ color: G }} />
            </div>
            <div>
              <h3 className="font-bold mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f2f2f2", fontSize: "1rem", letterSpacing: "-0.01em" }}>
                {education.degree}
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: G }}>{education.university}</p>
              <p className="mb-3" style={{ color: "#909090", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>{education.duration} · CGPA: {education.gpa}</p>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded text-xs"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#c8c8c8", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}