import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, CalendarRange, Award } from "lucide-react";
import { education } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { gsap } from "../../lib/gsap";

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function EduIcon({ degree }: { degree: string }) {
  return degree.toLowerCase().includes("b.tech") ? (
    <GraduationCap size={20} />
  ) : (
    <BookOpen size={20} />
  );
}

export function EducationSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const listWrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // The timeline rail draws from top to bottom, scrubbed to the scroll position.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: listWrapRef.current,
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="education" ref={sectionRef} className="py-24 sm:py-32 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="My academic background and studies."
        />

        <div ref={listWrapRef} className="relative">
          {/* Scroll-drawn progress line along the icon rail */}
          <div
            ref={progressRef}
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, var(--primary), rgba(124,108,244,0.15))",
              boxShadow: "0 0 8px rgba(124,108,244,0.5)",
              transform: "scaleY(0)",
              transformOrigin: "top center",
            }}
            aria-hidden="true"
          />

          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-60px" }}
          >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              variants={listItem}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Rail */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                  style={{
                    background: "rgba(124,108,244,0.08)",
                    borderColor: "rgba(124,108,244,0.25)",
                    color: "var(--primary)",
                  }}
                >
                  <EduIcon degree={edu.degree} />
                </div>
                {i < education.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{
                      background: "linear-gradient(180deg, rgba(124,108,244,0.3), rgba(255,255,255,0.06))",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0 pt-1">
                <motion.div
                  className="rounded-2xl p-5 bg-white/[0.02] transition-all duration-300 hover:border-primary/25 hover:-translate-y-1"
                  style={{ border: "1px solid var(--border-soft)" }}
                  whileHover={{
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-bold leading-snug" style={{ fontSize: "1.15rem" }}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm mt-1 mb-4" style={{ color: "var(--foreground-secondary)" }}>
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
                      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "var(--foreground-secondary)" }}
                    >
                      <CalendarRange size={12} style={{ color: "var(--primary)" }} />
                      {edu.duration}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
                      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "var(--foreground-secondary)" }}
                    >
                      <Award size={12} style={{ color: "var(--primary)" }} />
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}