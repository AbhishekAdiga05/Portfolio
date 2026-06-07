import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2 } from "lucide-react";
import { aboutInfo, personalInfo } from "../../../data/portfolio-data";

const G = "#22C55E";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>About</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            About Me
          </h2>
          <p style={{ color: "#999", fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif", maxWidth: "48ch" }}>
            Who I am, what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT — Short intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.07 }}
            className="lg:col-span-3 flex flex-col justify-center gap-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ color: "#ddd", lineHeight: 1.8, maxWidth: "56ch", fontSize: "1rem", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {aboutInfo.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ color: "#aaa", lineHeight: 1.8, maxWidth: "52ch", fontSize: "0.9375rem", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {aboutInfo.secondary}
            </motion.p>
          </motion.div>

          {/* RIGHT — Profile info card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.13 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-xl p-5 transition-all duration-200"
              style={{
                background: "#0c0c0c",
                border: "1px solid rgba(34,197,94,0.18)",
                boxShadow: "0 0 24px rgba(34,197,94,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.32)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(34,197,94,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.18)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.04)";
              }}
            >
              <div className="flex flex-col gap-3 mb-4">
                {[
                  { icon: GraduationCap, label: aboutInfo.degree, sub: `${aboutInfo.university} · ${aboutInfo.graduationYear} · ${aboutInfo.gpa}` },
                  { icon: MapPin, label: aboutInfo.location, sub: aboutInfo.locationDetail },
                  { icon: Code2, label: aboutInfo.yearsExperience, sub: aboutInfo.experienceDetail },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.14)" }}
                    >
                      <Icon size={13} style={{ color: G }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold" style={{ fontSize: "0.8125rem", lineHeight: 1.4, fontFamily: "'Space Grotesk', sans-serif" }}>{label}</p>
                      <p style={{ color: "#909090", fontSize: "0.75rem", lineHeight: 1.5, fontFamily: "'JetBrains Mono', monospace" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="mb-2" style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.6875rem" }}>Interests</p>
                <div className="flex flex-wrap gap-1.5">
                  {aboutInfo.interests.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs transition-all duration-200 hover:scale-105"
                      style={{ background: "rgba(34,197,94,0.08)", color: G, border: "1px solid rgba(34,197,94,0.18)", fontFamily: "'JetBrains Mono', monospace", boxShadow: "0 0 12px rgba(34,197,94,0.06)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {personalInfo.openToWork && (
              <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
                <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: G }} />
                <span className="text-xs font-medium" style={{ color: G }}>Available · {personalInfo.availabilityDate}</span>
              </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}