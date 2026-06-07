import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, Terminal } from "lucide-react";
import { aboutInfo, personalInfo } from "../../../data/portfolio-data";

const G = "#22C55E";

const statCards = [
  {
    icon: GraduationCap,
    label: aboutInfo.degree,
    sub: `${aboutInfo.university}`,
    meta: `${aboutInfo.graduationYear} · ${aboutInfo.gpa}`,
  },
  {
    icon: MapPin,
    label: aboutInfo.location,
    sub: aboutInfo.locationDetail,
  },
  {
    icon: Code2,
    label: aboutInfo.yearsExperience,
    sub: aboutInfo.experienceDetail,
  },
];

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
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>About</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            About Me
          </h2>
          <p style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", maxWidth: "48ch", lineHeight: 1.6 }}>
            Who I am, what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT — Bio panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.07 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Terminal intro */}
            <div
              className="rounded-xl p-5 overflow-hidden relative"
              style={{ background: "#0a0a0a", border: "1px solid rgba(34,197,94,0.12)" }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
              />
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
                </div>
                <span style={{ color: "#555", fontSize: "0.6875rem", fontFamily: "'JetBrains Mono', monospace" }}>about.sh</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: G, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.875rem", lineHeight: 1.75, flexShrink: 0 }}>
                  ~$
                </span>
                <div>
                    <p style={{ color: "#e8e8e8", lineHeight: 1.8, fontSize: "1.0625rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>
                      {aboutInfo.intro}
                    </p>
                    <p style={{ color: "#ccc", lineHeight: 1.8, fontSize: "1rem", fontFamily: "'Geist', 'Inter', sans-serif", marginTop: "14px" }}>
                      {aboutInfo.secondary}
                    </p>
                </div>
              </div>
            </div>

            {/* Interests tag cloud */}
            <div
              className="rounded-xl p-5"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={12} style={{ color: G }} />
                <span style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.6875rem" }}>Interests</span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutInfo.interests.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
                    style={{ background: "rgba(34,197,94,0.08)", color: G, border: "1px solid rgba(34,197,94,0.15)", fontFamily: "'JetBrains Mono', monospace" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(34,197,94,0.15)";
                      el.style.boxShadow = "0 0 16px rgba(34,197,94,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(34,197,94,0.08)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.13 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {statCards.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                className="rounded-xl p-4 transition-all duration-200"
                style={{ background: "#0a0a0a", border: "1px solid rgba(34,197,94,0.1)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,197,94,0.25)";
                  el.style.boxShadow = "0 0 24px rgba(34,197,94,0.06)";
                  el.style.background = "#0d0d0d";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,197,94,0.1)";
                  el.style.boxShadow = "none";
                  el.style.background = "#0a0a0a";
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.15)" }}
                  >
                    <s.icon size={15} style={{ color: G }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold leading-snug" style={{ fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}>{s.label}</p>
                    <p style={{ color: "#b4b4b4", fontSize: "0.8125rem", lineHeight: 1.6, fontFamily: "'JetBrains Mono', monospace" }}>{s.sub}</p>
                    {"meta" in s && s.meta ? (
                      <p style={{ color: "#999", fontSize: "0.6875rem", marginTop: "2px", fontFamily: "'JetBrains Mono', monospace" }}>{s.meta}</p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Available badge */}
            {personalInfo.openToWork && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.4 }}
                className="rounded-xl p-3 flex items-center gap-3"
                style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: G, boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}
                />
                <div>
                  <span className="text-xs font-medium" style={{ color: G }}>Available for opportunities</span>
                  <p style={{ color: "#999", fontSize: "0.6875rem", fontFamily: "'JetBrains Mono', monospace" }}>Est. graduation {personalInfo.availabilityDate}</p>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
