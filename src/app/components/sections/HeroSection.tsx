import { motion } from "motion/react";
import { Github, Linkedin, ArrowRight, MapPin, Download } from "lucide-react";
import { Link } from "react-router";
import { AnimatedText } from "../ui/AnimatedText";
import { usePrefersReducedMotion } from "../ui/ScrollReveal";
import { personalInfo, resumeLink, contactInfo } from "../../../data/portfolio-data";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const transition = { duration: prefersReducedMotion ? 0 : 0.2 };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="max-w-3xl"
          >
            {personalInfo.openToWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-7" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--foreground-secondary)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--success)" }} />
                Available for opportunities
              </div>
            )}

            <AnimatedText
              text={`${personalInfo.firstName} ${personalInfo.lastName}`}
              el="h1"
              className="mb-6 leading-[0.9] font-bold tracking-tight"
              style={{ fontSize: "clamp(3.75rem, 10vw, 5.5rem)", color: "var(--foreground)" }}
            />

            <p className="mb-5 flex items-center gap-2" style={{ color: "var(--accent-secondary)", fontWeight: 500, letterSpacing: "0.02em", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              <MapPin size={18} /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-secondary font-bold">{personalInfo.role}</span>
            </p>

            <p className="mb-8 max-w-xl" style={{ color: "var(--foreground-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>
              {personalInfo.heroBio}
              {personalInfo.heroContext && (
                <><br /><span style={{ color: "var(--foreground-muted)", fontSize: "0.85rem" }}>{personalInfo.heroContext}</span></>
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href={resumeLink}
                className="h-11 px-5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
                whileHover={{ y: -1 }}
                transition={transition}
              >
                <Download size={15} strokeWidth={2.5} /> Download Resume
              </motion.a>

              <motion.span style={{ display: "inline-block" }}>
                <Link
                  to="/projects"
                  className="h-11 px-5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ background: "transparent", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  View Projects <ArrowRight size={14} />
                </Link>
              </motion.span>

              <div className="flex items-center gap-2" aria-label="Social links">
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
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.08)" }}
                    whileHover={{ y: -1 }}
                    transition={transition}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)")}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{ width: "min(100%, 360px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="overflow-hidden bg-surface">
                <img
                  src={personalInfo.profilePhoto}
                  alt={`${personalInfo.firstName} ${personalInfo.lastName} — ${personalInfo.role}`}
                  loading="lazy"
                  width="360"
                  height="360"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4 bg-black/60 backdrop-blur-md border-t border-white/10"
              >
                <p className="text-sm font-semibold text-foreground">Full-Stack Developer</p>
                <p className="text-xs text-foreground-muted mt-0.5">B.Tech ISE · AI · DSA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
