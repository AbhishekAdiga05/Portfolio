import { motion } from "motion/react";
import { certifications } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function CertRow({ cert }: { cert: typeof certifications[0] }) {
  return (
    <motion.div variants={listItem} className="group">
      <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.04]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-background border border-border flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          <span className="text-xl leading-none">{cert.icon || "🎓"}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug truncate" style={{ color: "var(--foreground)" }}>
            {cert.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--foreground-muted)" }}>
            {cert.issuer}
          </p>
        </div>
        <span
          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] whitespace-nowrap"
          style={{ color: "var(--foreground-secondary)" }}
        >
          {cert.date}
        </span>
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Courses and certifications I've picked up along the way."
        />

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {certifications.map((cert) => (
            <CertRow key={`${cert.name}-${cert.issuer}`} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
