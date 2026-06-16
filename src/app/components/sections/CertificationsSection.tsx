import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award } from "lucide-react";
import { certifications } from "../../../data/portfolio-data";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
}

export function CertificationsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>Certifications</span>
            </div>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "Inter, sans-serif" }}>Certifications</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "Inter, sans-serif" }}>
              Courses and credentials that support the way I build.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <FadeUp key={`${cert.name}-${cert.issuer}`} delay={i * 0.05}>
              <motion.div
                className="h-full rounded-2xl p-5 transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Award size={16} style={{ color: "var(--foreground-muted)" }} />
                </div>
                <p className="font-semibold leading-snug mb-3" style={{ color: "var(--foreground)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>{cert.name}</p>
                <p className="text-sm mb-4" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(124,108,244,0.45)" }} />
                  {cert.date}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
