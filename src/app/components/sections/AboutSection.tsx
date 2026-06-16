import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2 } from "lucide-react";
import { aboutInfo } from "../../../data/portfolio-data";

const statCards = [
  {
    icon: GraduationCap,
    label: aboutInfo.degree,
    sub: `${aboutInfo.university}`,
    meta: `${aboutInfo.graduationYear} · ${aboutInfo.CGPA}`,
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

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>About</span>
            </div>
            <h2 className="mb-5" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "Inter, sans-serif" }}>About Me</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "Inter, sans-serif" }}>
              A concise view of my background, focus areas, and the way I learn.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.75fr] gap-12 lg:gap-24">
          <FadeUp delay={0.06}>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed mb-8" style={{ color: "var(--foreground)", fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                {aboutInfo.intro}
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>
                {aboutInfo.secondary}
              </p>

              <div className="border-t" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>Interests</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {aboutInfo.interests.map((interest) => (
                    <span key={interest} className="text-sm" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="flex flex-col gap-0 divide-y" style={{ borderColor: "var(--border)" }}>
              {statCards.map((s, i) => (
                <div key={i} className="py-6 pr-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <s.icon size={17} style={{ color: "var(--foreground-secondary)" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold mb-1" style={{ color: "var(--foreground)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>{s.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>{s.sub}</p>
                    {"meta" in s && s.meta ? (
                      <p className="text-xs mt-2" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>{s.meta}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
