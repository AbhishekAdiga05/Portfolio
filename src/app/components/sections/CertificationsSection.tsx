import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { certifications } from "../../../data/portfolio-data";

const G = "#22C55E";

export function CertificationsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Certifications</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}>
            Certifications
          </h2>
          <p style={{ color: "#999", fontSize: "0.875rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            Courses and credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-20px" });
            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,197,94,0.22)";
                  el.style.background = "#0f0f0f";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.background = "#0c0c0c";
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.12)" }}>
                  {cert.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug truncate" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f0f0", fontSize: "0.875rem" }}>{cert.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs truncate" style={{ color: "#c0c0c0" }}>{cert.issuer}</p>
                    <span className="text-xs flex-shrink-0 px-1.5 py-0.5 rounded" style={{ background: "rgba(34,197,94,0.08)", color: G, fontFamily: "'JetBrains Mono', monospace" }}>{cert.date}</span>
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