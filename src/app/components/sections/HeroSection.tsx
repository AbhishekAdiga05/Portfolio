import { motion } from "motion/react";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { personalInfo, resumeLink, contactInfo } from "../../../data/portfolio-data";

const transition = { duration: 0.2 };

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(124,108,244,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="max-w-3xl"
          >
            {personalInfo.openToWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-7" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--foreground-secondary)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--success)" }} />
                Available for opportunities
              </div>
            )}

            <h1
              className="mb-5"
              style={{
                fontSize: "clamp(3.75rem, 10vw, 5.5rem)",
                lineHeight: 0.9,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #A5B4FC 50%, #7C6CF4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {personalInfo.firstName}
              </span>{" "}
              <span
                style={{
                  background: "linear-gradient(180deg, #E5E7EB 0%, #94A3B8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {personalInfo.lastName}
              </span>
            </h1>

            <p className="mb-5" style={{ color: "var(--accent-secondary)", fontWeight: 500, letterSpacing: "0.02em", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              {personalInfo.role}
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              style={{ width: "min(100%, 360px)" }}
              whileHover={{ y: -2 }}
              transition={transition}
            >
              <div
                className="overflow-hidden rounded-[24px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
                }}
              >
                <img
                  src={personalInfo.profilePhoto}
                  alt={`${personalInfo.firstName} ${personalInfo.lastName} — ${personalInfo.role}`}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 left-6 right-6 rounded-2xl px-4 py-3"
                style={{ background: "rgba(10,12,20,0.88)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(14px)", boxShadow: "0 18px 60px rgba(0,0,0,0.35)" }}
              >
                <p className="text-xs font-medium" style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}>Full-Stack Developer</p>
                <p className="text-xs mt-1" style={{ color: "var(--foreground-muted)" }}>B.Tech ISE · AI · DSA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
