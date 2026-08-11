import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "motion/react";
import { highlights } from "../../../data/portfolio-data";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { gsap } from "../../lib/gsap";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(prefersReducedMotion ? String(value) : "0");

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(String(value));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value, prefersReducedMotion]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);

  // The band's top hairline draws left → right, scrubbed to the scroll position.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        hairlineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} aria-label="Highlights" className="relative py-10 sm:py-14 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-40px" }}
          className="relative grid grid-cols-2 md:grid-cols-3 gap-px overflow-hidden rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Hairline top glow */}
          <div
            ref={hairlineRef}
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
              transform: "scaleX(0)",
              transformOrigin: "left center",
            }}
            aria-hidden="true"
          />

          {highlights.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="relative flex flex-col items-center justify-center gap-1.5 py-8 sm:py-10 px-4 text-center"
              style={{ background: "rgba(3,4,7,0.4)" }}
            >
              <p
                className="font-bold"
                style={{
                  fontFamily: "Archivo",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(120deg, var(--primary), var(--accent-secondary))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--foreground-secondary)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
