import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { skillCategories } from "../../../data/portfolio-data";

const G = "#22C55E";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

function FloatingIcon({ skill, i }: { skill: { name: string; logo: string; bg: string }; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 group"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: i * 0.05 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2.4 + i * 0.18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.25,
        }}
        whileHover={{ scale: 1.2, rotate: 6 }}
        className="relative w-12 h-12 rounded-xl flex items-center justify-center cursor-default"
        style={{
          background: `${skill.bg}18`,
          border: `1.5px solid ${skill.bg}40`,
          boxShadow: `0 4px 16px ${skill.bg}22`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = `${skill.bg}30`;
          (e.currentTarget as HTMLElement).style.borderColor = `${skill.bg}80`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${skill.bg}44`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = `${skill.bg}18`;
          (e.currentTarget as HTMLElement).style.borderColor = `${skill.bg}40`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${skill.bg}22`;
        }}
      >
        <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
      </motion.div>
      <span className="text-xs" style={{ color: "#c8c8c8", fontFamily: "'JetBrains Mono', monospace" }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryBox({ category, delay }: { category: typeof skillCategories[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{
        background: "#0c0c0c",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span
          className="w-2 h-2 rounded-sm flex-shrink-0"
          style={{ background: category.color, boxShadow: `0 0 8px ${category.color}88` }}
        />
        <h3
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: category.color, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 12px ${category.color}44` }}
        >
          {category.label}
        </h3>
        <div className="flex-1 h-px" style={{ background: `${category.color}18` }} />
        <span className="text-xs" style={{ color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>
          {category.skills.length}
        </span>
      </div>

      {/* Icons grid */}
      <div className="flex flex-wrap gap-4">
        {category.skills.map((skill, si) => (
          <FloatingIcon key={skill.name} skill={skill} i={si} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>Skills</span>
          </div>
          <h2
            className="text-white mb-3"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow: "0 0 40px rgba(34,197,94,0.15)",
            }}
          >
            Skills &amp; Tools
          </h2>
          <p className="mb-12" style={{ color: "#bbb", fontSize: "0.875rem", maxWidth: "44ch", lineHeight: 1.6, fontFamily: "'Geist', 'Inter', sans-serif" }}>
            My day-to-day dev stack.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {skillCategories.map((cat, i) => (
            <CategoryBox key={cat.label} category={cat} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}