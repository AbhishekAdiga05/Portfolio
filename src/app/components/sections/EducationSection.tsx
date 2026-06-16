import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award, ChevronRight } from "lucide-react";
import { education } from "../../../data/portfolio-data";

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

function StatCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="rounded-xl p-4 group"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
      whileHover={{ y: -2, borderColor: "rgba(124,108,244,0.2)" }}
      transition={{ duration: 0.15 }}
    >
      <p className="text-xs mb-1.5" style={{ color: "var(--foreground-muted)" }}>{label}</p>
      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--foreground)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="education" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2 }}>
          <SlideUp>
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Education</span>
              </div>
              <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>Education</h2>
              <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
                Academic background and relevant coursework.
              </p>
            </div>
          </SlideUp>

          <motion.div
            className="max-w-4xl rounded-[24px] p-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.06 }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,108,244,0.1)", border: "1px solid rgba(124,108,244,0.18)" }}>
                <GraduationCap size={22} style={{ color: "var(--accent-secondary)" }} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1.5" style={{ fontSize: "1.35rem", fontWeight: 600 }}>{education.degree}</h3>
                <p className="mb-6 text-sm" style={{ color: "var(--foreground-secondary)" }}>{education.university}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                  <StatCard label="Duration">
                    <BookOpen size={14} style={{ color: "var(--primary)" }} /> {education.duration}
                  </StatCard>
                  <StatCard label="GPA">
                    <Award size={14} style={{ color: "var(--primary)" }} /> {education.gpa}
                  </StatCard>
                  <StatCard label="Focus">
                    <ChevronRight size={14} style={{ color: "var(--primary)" }} /> Information Science
                  </StatCard>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <motion.span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.03)", color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.06)" }}
                        whileHover={{ scale: 1.04, background: "rgba(124,108,244,0.08)", color: "var(--primary)", borderColor: "rgba(124,108,244,0.2)" }}
                        transition={{ duration: 0.15 }}
                      >
                        {course}
                      </motion.span>
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
