import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "./ScrollReveal";
import { gsap, SplitText } from "../../lib/gsap";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  showRule?: boolean;
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

export function SectionHeading({ eyebrow, title, description, className = "", showRule = false }: SectionHeadingProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Masked line-by-line reveal of the title (waits for webfonts so line breaks are correct).
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = titleRef.current;
    if (!el) return;

    let split: ReturnType<typeof SplitText.create> | null = null;
    const init = () => {
      split = SplitText.create(el, { type: "lines", mask: "lines" });
      gsap.from(split.lines, {
        yPercent: 110,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      split?.revert();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={`mb-14 max-w-3xl ${className}`}>
        {eyebrow ? (
          <div className="mb-5">
            <p className="font-mono-label text-[11px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap" style={{ color: "var(--primary)" }}>
              {eyebrow}
            </p>
          </div>
        ) : null}
        <h2
          className="mb-4 text-foreground"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05 }}
        >
          {title}
        </h2>
        {showRule && (
          <div
            className="h-px w-16 mb-5"
            style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }}
            aria-hidden="true"
          />
        )}
        {description ? (
          <p className="max-w-2xl text-foreground-secondary text-base sm:text-lg font-normal leading-[1.7] text-balance">
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
      {eyebrow ? (
        <motion.div variants={line} className="mb-5">
          <p className="font-mono-label text-[11px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap" style={{ color: "var(--primary)" }}>
            {eyebrow}
          </p>
        </motion.div>
      ) : null}
      <h2
        ref={titleRef}
        className="mb-4 text-foreground"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05 }}
      >
        {title}
      </h2>
      {showRule && (
        <motion.div
          variants={line}
          className="h-px w-16 mb-5"
          style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }}
          aria-hidden="true"
        />
      )}
      {description ? (
        <motion.p variants={line} className="max-w-2xl text-foreground-secondary text-base sm:text-lg font-normal leading-[1.7] text-balance">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
