import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award } from "lucide-react";
import { certifications } from "../../../data/portfolio-data";

const G = "#22C55E";

export function CertificationsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Certifications</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Certifications
          </h2>
          <p style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", lineHeight: 1.6 }}>
            Courses and credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-20px" });
            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-xl overflow-hidden transition-all duration-200"
                style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(34,197,94,0.2)", boxShadow: "0 0 32px rgba(34,197,94,0.06)", y: -2 }}
                transition={{ duration: 0.25 }}
              >
                {/* Left accent bar on hover */}
                <div
                  className="h-1 w-full transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${G}66, transparent)`, opacity: 0.4 }}
                />

                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    {/* Icon with glow */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 relative"
                      style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.12)" }}
                    >
                      <span className="relative z-10">{cert.icon}</span>
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f5f5f5", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>
                        {cert.name}
                      </p>
                      <p style={{ color: "#bbb", fontSize: "0.8125rem", fontFamily: "'Geist', 'Inter', sans-serif", marginTop: "3px" }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className="flex items-center gap-1.5">
                    <Award size={12} style={{ color: G }} />
                    <span style={{ color: G, fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.02em" }}>
                      {cert.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
