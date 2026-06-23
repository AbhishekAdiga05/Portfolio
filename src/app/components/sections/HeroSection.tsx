import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { Github, Linkedin, ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { personalInfo, resumeLink, contactInfo } from "../../../data/portfolio-data";

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
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(124, 108, 244, 0.15), transparent 80%)`;

  const roles = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Open Source Contributor",
    "ISE Student"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      {/* Static Fallback Glow (for mobile/reduced motion) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div 
          className="w-[800px] h-[800px] rounded-full blur-[140px] opacity-15"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-32 w-full flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-center text-center"
        >
          {/* Eyebrow: Name & Status */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <span className="text-xl sm:text-2xl font-medium tracking-wide flex items-center gap-2" style={{ color: "var(--foreground-secondary)" }}>
              <motion.span 
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                style={{ transformOrigin: "bottom right" }}
                className="inline-block text-2xl"
              >
                👋
              </motion.span>
              Hi, I am
            </span>
            {personalInfo.openToWork && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", color: "var(--success)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--success)" }} />
                Available for opportunities
              </span>
            )}
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 font-bold tracking-tighter"
            style={{ 
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)", 
              lineHeight: 1.05 
            }}
          >
            <span className="text-white">{personalInfo.firstName} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
              {personalInfo.lastName}.
            </span>
          </motion.h1>

          {/* Role & Bio */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
            <div className="h-8 sm:h-10 overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-xl sm:text-2xl font-medium"
                  style={{ color: "var(--accent-secondary)", letterSpacing: "-0.01em" }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            {(personalInfo.heroBio || personalInfo.heroContext) && (
              <p className="text-base sm:text-lg leading-relaxed mt-4" style={{ color: "var(--foreground-secondary)" }}>
                {personalInfo.heroBio}
                {personalInfo.heroContext && (
                  <><br /><span className="opacity-70 text-sm mt-1 block">{personalInfo.heroContext}</span></>
                )}
              </p>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
            <motion.a
              href={resumeLink}
              className="h-12 px-6 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300"
              style={{ 
                background: "var(--button-primary)", 
                color: "var(--button-primary-text)",
                boxShadow: "0 8px 30px -8px rgba(124,108,244,0.6)"
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} strokeWidth={2.5} /> Download Resume
            </motion.a>

            <motion.span style={{ display: "inline-block" }}>
              <Link
                to="/projects"
                className="h-12 px-6 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 backdrop-blur-md"
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  color: "var(--foreground)", 
                  border: "1px solid rgba(255,255,255,0.12)" 
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                View Projects <ArrowRight size={15} />
              </Link>
            </motion.span>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:ml-2">
              {[
                { icon: Github, href: contactInfo.github, label: "GitHub" },
                { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    background: "rgba(255,255,255,0.035)", 
                    color: "var(--foreground-secondary)", 
                    border: "1px solid rgba(255,255,255,0.12)" 
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.035)";
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
