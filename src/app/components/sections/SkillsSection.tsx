import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { skillCategories } from "../../../data/portfolio-data";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
}

function SkillGroup({ category, delay }: { category: typeof skillCategories[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, delay }}
      className="rounded-2xl p-6"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h3 className="mb-2" style={{ fontSize: "1.25rem", fontFamily: "Inter, sans-serif" }}>{category.label}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)", fontFamily: "Inter, sans-serif" }}>{category.capability}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "Inter, sans-serif" }}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)", fontFamily: "Inter, sans-serif" }}>Skills</span>
            </div>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "Inter, sans-serif" }}>Skills &amp; Tools</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "Inter, sans-serif" }}>
              A focused view of the technologies I use to move from product thinking to shipped software.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillGroup key={cat.label} category={cat} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
