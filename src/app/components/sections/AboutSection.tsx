import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { aboutInfo } from "../../../data/portfolio-data";

const highlights = [
  { icon: GraduationCap, value: aboutInfo.degree, label: aboutInfo.university },
  { icon: MapPin, value: aboutInfo.location, label: aboutInfo.locationDetail },
  { icon: Code2, value: aboutInfo.yearsExperience, label: aboutInfo.experienceDetail },
];

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-5 sm:px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 0%, rgba(124,108,244,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <SlideUp>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[2px]" style={{ background: "var(--primary)" }} />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--foreground-muted)" }}>
              About
            </span>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-20">
          <div>
            <SlideUp delay={0.04}>
              <h2
                className="mb-7"
                style={{
                  fontSize: "clamp(2.75rem, 5.5vw, 4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.0,
                }}
              >
                About <span style={{ color: "var(--primary)" }}>Me</span>
              </h2>
            </SlideUp>

            <SlideUp delay={0.08}>
              <p className="text-xl lg:text-2xl leading-relaxed mb-10" style={{ color: "var(--foreground-secondary)", letterSpacing: "-0.02em", fontWeight: 450 }}>
                {aboutInfo.intro}
              </p>
            </SlideUp>

            <SlideUp delay={0.12}>
              <div className="grid grid-cols-3 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl p-5 group cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(124,108,244,0.1)" }}
                    >
                      <h.icon size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>
                      {h.value}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                      {h.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </SlideUp>
          </div>

          <div className="flex flex-col justify-center">
            <SlideUp delay={0.1}>
              <div
                className="rounded-2xl p-7 mb-5 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(145deg, rgba(124,108,244,0.06), rgba(10,12,20,0.6))",
                  border: "1px solid rgba(124,108,244,0.12)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 100% 0%, rgba(124,108,244,0.12), transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--primary)" }}>
                  Interests
                </p>

                <div className="flex flex-wrap gap-2">
                  {aboutInfo.interests.map((interest, i) => (
                    <motion.span
                      key={interest}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5"
                      style={{
                        background: "rgba(124,108,244,0.08)",
                        border: "1px solid rgba(124,108,244,0.15)",
                        color: "var(--primary)",
                      }}
                      whileHover={{ scale: 1.04, background: "rgba(124,108,244,0.14)" }}
                      transition={{ duration: 0.15 }}
                    >
                      {interest}
                      <ArrowUpRight size={10} strokeWidth={2.5} style={{ opacity: 0.5 }} />
                    </motion.span>
                  ))}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.14}>
              <div
                className="rounded-2xl p-5 flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--foreground-muted)" }}>
                    CGPA
                  </p>
                  <p className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                    {aboutInfo.CGPA}
                  </p>
                </div>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-right">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--foreground-muted)" }}>
                    Duration
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {aboutInfo.graduationYear}
                  </p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
