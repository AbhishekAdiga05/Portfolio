import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";
import { certifications } from "../../../data/portfolio-data";

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SlideUp>
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Certifications</span>
            </div>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>Certifications</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
              Courses and credentials that support the way I build.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <SlideUp key={`${cert.name}-${cert.issuer}`} delay={i * 0.05}>
              <motion.div
                className="rounded-2xl p-6 group cursor-default"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                whileHover={{ y: -4, borderColor: "rgba(124,108,244,0.25)" }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(124,108,244,0.08)", border: "1px solid rgba(124,108,244,0.12)" }}
                >
                  <Award size={18} style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="font-semibold leading-snug mb-2" style={{ color: "var(--foreground)", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>{cert.name}</h3>
                <p className="text-sm mb-5" style={{ color: "var(--foreground-secondary)" }}>{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--foreground-muted)" }}>
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </motion.div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
