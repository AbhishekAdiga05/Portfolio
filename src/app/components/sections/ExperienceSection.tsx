import { motion } from "motion/react";
import { experiences } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function TimelineRow({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      variants={item}
      className={`grid md:grid-cols-[220px_1fr] gap-2 md:gap-10 ${index > 0 ? "mt-12 sm:mt-16" : ""}`}
    >
      {/* Left rail — org, dates, mono */}
      <div className="flex md:flex-col items-baseline md:items-start justify-between gap-2 md:gap-3">
        <p className="font-mono-label text-[11px] uppercase tracking-[0.18em] font-semibold leading-relaxed" style={{ color: "var(--primary)" }}>
          {exp.org}
        </p>
        <p className="font-mono-label text-xs whitespace-nowrap" style={{ color: "var(--foreground-muted)" }}>
          {exp.duration}
        </p>
      </div>

      {/* Right — role + bullets */}
      <div className="md:border-l md:border-white/[0.07] md:pl-10 md:pb-2">
        <div className="relative">
          <span
            className="hidden md:block absolute -left-[45px] top-2 w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--primary)", boxShadow: "0 0 0 4px rgba(124,108,244,0.12)" }}
            aria-hidden="true"
          />
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            {exp.role}
          </h3>
          <ul className="flex flex-col gap-3 mt-4">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-3 text-[15px] leading-[1.7]" style={{ color: "var(--foreground-secondary)" }}>
                <span className="mt-[9px] w-1.5 h-px shrink-0" style={{ background: "var(--primary)", opacity: 0.6 }} aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-5 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
<SectionHeading 
          title="Experience" 
          
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          className="mt-16 sm:mt-20"
        >
          {experiences.map((exp, index) => (
            <TimelineRow key={exp.org} exp={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}