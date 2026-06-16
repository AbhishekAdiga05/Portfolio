import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education } from "../../../data/portfolio-data";

export function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="education" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2 }}>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Education</span>
            </div>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "'Instrument Sans', sans-serif" }}>Education</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
              Academic background and relevant coursework.
            </p>
          </div>

          <motion.div
            className="max-w-4xl rounded-[24px] p-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.08 }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,108,244,0.08)", border: "1px solid rgba(124,108,244,0.18)" }}>
                <GraduationCap size={22} style={{ color: "var(--accent-secondary)" }} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2" style={{ fontSize: "1.5rem" }}>{education.degree}</h3>
                <p className="mb-5 text-sm" style={{ color: "var(--foreground-secondary)" }}>{education.university}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xs mb-1" style={{ color: "var(--foreground-muted)" }}>Duration</p>
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--foreground)" }}>
                      <BookOpen size={14} /> {education.duration}
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xs mb-1" style={{ color: "var(--foreground-muted)" }}>GPA</p>
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--foreground)" }}>
                      <Award size={14} /> {education.gpa}
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xs mb-1" style={{ color: "var(--foreground-muted)" }}>Focus</p>
                    <p className="text-sm" style={{ color: "var(--foreground)" }}>Information Science</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
