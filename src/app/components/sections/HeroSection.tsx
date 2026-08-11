import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { resumeLink } from "../../../data/portfolio-data";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { gsap, SplitText } from "../../lib/gsap";
import { Button } from "../ui/Button";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);

  // Scroll-scrubbed exit: the hero content drifts up and fades as you scroll past.
  // Desktop only — on mobile the full hero block moving on every scroll frame adds jank.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.to(contentRef.current, {
          yPercent: -18,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "90% top",
            scrub: true,
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Mouse Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (prefersReducedMotion) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, rgba(124, 108, 244, 0.05), transparent 80%)`;

  const roles = [
    "Full-Stack Developer",
    "AI Tools Enthusiast",
    "Open Source Contributor",
    "ISE Student"
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, roles.length]);

  // Refined char-by-char masked reveal for the hero name. Each name is split on
  // its own span (avoids per-char space collapse inside the masks) and the
  // chars rise out of a clipped mask in one smooth sequence. Waits for webfonts
  // so the split uses the final metrics — same pattern as SectionHeading.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = nameRef.current;
    const firstEl = firstNameRef.current;
    const lastEl = lastNameRef.current;
    if (!el || !firstEl || !lastEl) return;

    let splitFirst: ReturnType<typeof SplitText.create> | null = null;
    let splitLast: ReturnType<typeof SplitText.create> | null = null;
    let cancelled = false;

    const init = () => {
      if (cancelled) return;
      splitFirst = SplitText.create(firstEl, { type: "chars", mask: "chars" });
      splitLast = SplitText.create(lastEl, { type: "chars", mask: "chars" });
      const chars = [...splitFirst.chars, ...splitLast.chars];
      gsap.set(el, { opacity: 1 });
      gsap.from(chars, {
        yPercent: 115,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    };

    gsap.set(el, { opacity: 0 });
    if (document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      splitFirst?.revert();
      splitLast?.revert();
    };
  }, [prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "transparent" }}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Mouse Spotlight */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: spotlightBackground }}
        />
      )}

      {/* Subtle Purple Aurora Glow (desktop only for performance) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          className="w-[60vw] h-[40vh] rounded-full blur-[120px]"
          style={{ background: "var(--primary)", filter: "blur(120px)" }}
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(124,108,244,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,244,0.55) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full flex flex-col items-center justify-center flex-1 mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-center text-center"
        >
          {/* 1. Intro Text */}
          <motion.div variants={itemVariants} className="flex justify-center items-center mb-6">
            <p className="text-xl sm:text-2xl font-medium tracking-wide flex items-center gap-3" style={{ color: "var(--foreground-secondary)" }}>
              Hey There, I'm
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                className="inline-block origin-bottom-right text-2xl sm:text-3xl"
              >
                👋
              </motion.span>
            </p>
          </motion.div>

          {/* 2. Large Name with Refined Masked Reveal */}
          <div className="relative mb-6">
            <motion.div
              className="absolute inset-0 z-0 blur-[40px] rounded-full"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)", opacity: 0.16 }}
            />
            <h1
              ref={nameRef}
              className="relative z-10 hero-name"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              <span ref={firstNameRef}>Abhishek</span>
              <span aria-hidden="true">&nbsp;</span>
              <span ref={lastNameRef}>Adiga</span>
            </h1>
          </div>

          {/* 3. Animated Role Switcher */}
          <motion.div variants={itemVariants} className="h-10 sm:h-12 overflow-hidden flex justify-center items-center mb-14">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-medium"
                style={{ color: "var(--accent-secondary)", letterSpacing: "-0.01em" }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* 5. CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
            <Button variant="primary" href={resumeLink} target="_blank" rel="noreferrer" icon={<Download size={16} strokeWidth={2.5} />}>
              Get Resume
            </Button>
            <Button variant="secondary" to="/projects" iconRight icon={<ArrowRight size={15} />}>
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 6. Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 pb-8 mt-auto flex flex-col items-center justify-center opacity-60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-default select-none text-[13px] tracking-wide"
          style={{ color: "var(--foreground-secondary)" }}
        >
          Scroll to Explore
          <ChevronDown size={18} className="opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
