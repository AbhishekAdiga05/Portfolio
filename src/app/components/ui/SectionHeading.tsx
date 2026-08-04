import { motion } from "motion/react";
import { usePrefersReducedMotion } from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const line = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`mb-14 max-w-3xl ${className}`}>
        <div className="mb-5">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: "var(--primary)" }}>
            {eyebrow}
          </p>
        </div>
        <h2
          className="mb-4 text-foreground"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 650, letterSpacing: "-0.025em", lineHeight: 1.15 }}
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-foreground-secondary text-lg font-light leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <motion.div
      className={`mb-14 max-w-3xl ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "-60px" }}
    >
      <motion.div variants={line} className="mb-5">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: "var(--primary)" }}>
          {eyebrow}
        </p>
      </motion.div>
      <motion.h2
        variants={line}
        className="mb-4 text-foreground"
        style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 650, letterSpacing: "-0.025em", lineHeight: 1.15 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={line} className="max-w-2xl text-foreground-secondary text-lg font-light leading-relaxed">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
