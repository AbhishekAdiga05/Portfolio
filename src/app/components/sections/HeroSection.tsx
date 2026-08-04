import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { personalInfo, resumeLink } from "../../../data/portfolio-data";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

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
    "AI Enthusiast",
    "Open Source Contributor",
    "ISE Student"
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
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

  const nameVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
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
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full flex flex-col items-center justify-center flex-1 mt-16">
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

          {/* 2. Large Name with Blur Reveal (static glow — cheaper than animated) */}
          <motion.div variants={nameVariants} className="relative mb-6">
            <motion.div
              className="absolute inset-0 z-0 blur-[40px] rounded-full"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)", opacity: 0.16 }}
            />
            <h1 
              className="relative z-10 font-bold tracking-tighter"
              style={{ 
                fontSize: "clamp(3rem, 8vw, 6rem)", 
                lineHeight: 1.1 
              }}
            >
              <motion.span 
                className="inline-flex cursor-default text-white"
                whileHover="hover"
                initial="initial"
              >
                {"Abhishek".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { scale: 1, y: 0, color: "#ffffff" },
                      hover: {
                        scale: [1, 1.25, 1],
                        y: [0, -8, 0],
                        color: ["#ffffff", "var(--primary)", "#ffffff"],
                        transition: { duration: 0.4, delay: i * 0.04 }
                      }
                    }}
                    className="inline-block origin-bottom"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              <span className="text-white"> </span>
              <motion.span 
                className="inline-flex cursor-default text-white"
                whileHover="hover"
                initial="initial"
              >
                {"Adiga".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { scale: 1, y: 0, color: "#ffffff" },
                      hover: {
                        scale: [1, 1.25, 1],
                        y: [0, -8, 0],
                        color: ["#ffffff", "var(--primary)", "#ffffff"],
                        transition: { duration: 0.4, delay: i * 0.04 }
                      }
                    }}
                    className="inline-block origin-bottom"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </motion.div>

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
