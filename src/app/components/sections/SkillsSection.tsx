import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Server, Database, Cpu, Container, Wrench } from "lucide-react";
import { skillCategories } from "../../../data/portfolio-data";

const iconMap: Record<string, typeof Code2> = {
  Frontend: Code2, Backend: Server, Database, "AI / ML": Cpu, DevOps: Container, Tools: Wrench,
};

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

function SkillGroup({ category, delay }: { category: typeof skillCategories[0]; delay: number }) {
  const Icon = iconMap[category.label] || Code2;

  return (
    <SlideUp delay={delay}>
      <motion.div
        className="rounded-2xl p-6 group cursor-default"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        whileHover={{ y: -4, borderColor: "rgba(124,108,244,0.25)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(124,108,244,0.08)" }}>
            <Icon size={17} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <h3 className="font-semibold" style={{ fontSize: "1.05rem" }}>{category.label}</h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--foreground-secondary)" }}>{category.capability}</p>
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.03)", color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.06)" }}
              whileHover={{ scale: 1.05, background: "rgba(124,108,244,0.1)", color: "var(--primary)", borderColor: "rgba(124,108,244,0.2)" }}
              transition={{ duration: 0.15 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SlideUp>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SlideUp>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Skills</span>
            </div>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontFamily: "Archivo, sans-serif" }}>Skills &amp; Tools</h2>
            <p className="max-w-2xl" style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
              A focused view of the technologies I use to move from product thinking to shipped software.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillGroup key={cat.label} category={cat} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
