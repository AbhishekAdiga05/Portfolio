import { motion } from "motion/react";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { personalInfo, resumeLink, contactInfo } from "../../../data/portfolio-data";

const G = "#22C55E";

const PARTICLES = [
  { x: 72, y: 18, size: 2.5, dur: 4.2, delay: 0 },
  { x: 85, y: 45, size: 2, dur: 5.1, delay: 0.8 },
  { x: 92, y: 72, size: 2, dur: 3.8, delay: 1.4 },
  { x: 60, y: 88, size: 1.5, dur: 6.0, delay: 0.3 },
  { x: 78, y: 60, size: 3, dur: 4.7, delay: 1.0 },
  { x: 95, y: 30, size: 2, dur: 5.5, delay: 0.5 },
  { x: 65, y: 25, size: 2.5, dur: 4.0, delay: 1.8 },
  { x: 55, y: 78, size: 1.5, dur: 5.8, delay: 0.2 },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Green spotlight — clamped so it doesn't overflow on mobile */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none"
        style={{
          width: "clamp(300px, 50vw, 700px)",
          height: "clamp(300px, 50vw, 700px)",
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 60%)",
          transform: "translate(15%, -50%)",
          filter: "blur(20px)",
        }}
      />

      {/* Floating particles — hidden on mobile for perf */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ width: p.size, height: p.size, background: G, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-20 w-full">
        {/* Mobile: photo on top, text below. Desktop: side by side */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center gap-10">

          {/* Profile photo — shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ boxShadow: "0 0 32px rgba(34,197,94,0.3), 0 0 64px rgba(34,197,94,0.1)" }}
              />
              <div
                className="rounded-full p-[3px]"
                style={{
                  width: "clamp(160px, 42vw, 320px)",
                  height: "clamp(160px, 42vw, 320px)",
                  background: "conic-gradient(from 90deg, #22C55E 0%, #16a34a 30%, #052e16 55%, #22C55E 100%)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "#060606" }}>
                  <img
                    src={personalInfo.profilePhoto}
                    alt={`${personalInfo.firstName} ${personalInfo.lastName} — ${personalInfo.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating status badge */}
              {personalInfo.openToWork && (
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: "#0f0f0f",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: G,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.6), 0 0 20px rgba(34,197,94,0.15)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: G }}
                />
                Open to work
              </motion.div>
              )}
            </div>
          </motion.div>

          {/* Text — below photo on mobile, left on desktop */}
          <div className="lg:order-1 text-center lg:text-left w-full">
            {/* HELLO badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest mb-6"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: G, fontFamily: "'JetBrains Mono', monospace" }}
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: G }}
              />
              HELLO 👋
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-white leading-none mb-4"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                fontWeight: 750,
                letterSpacing: "-0.045em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #b8b8b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {personalInfo.firstName}
              </span>{" "}
              <span style={{ color: G, textShadow: "0 0 60px rgba(34,197,94,0.5)" }}>
                {personalInfo.lastName}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="font-medium mb-5 inline-block relative"
              style={{
                color: G,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.06em",
                fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
                textShadow: "0 0 30px rgba(34,197,94,0.3)",
              }}
            >
              {personalInfo.role}
              <motion.div
                animate={{ width: ["0%", "100%", "0%"], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-px mt-1.5 mx-auto"
                style={{ background: "linear-gradient(to right, transparent, #22C55E, transparent)" }}
              />
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leading-relaxed mb-8 mx-auto lg:mx-0"
              style={{
                color: "#ececec",
                lineHeight: 1.8,
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                fontFamily: "'Geist', 'Inter', sans-serif",
                maxWidth: "48ch",
              }}
            >
              {personalInfo.heroBio}
              <br /><br />
               <span style={{ color: "#bbb", fontSize: "0.875rem", fontFamily: "'Geist', 'Inter', sans-serif", lineHeight: 1.6 }}>{personalInfo.heroContext}</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={resumeLink}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: G, color: "#050505", boxShadow: "0 0 24px rgba(34,197,94,0.4)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 42px rgba(34,197,94,0.65)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <Download size={15} strokeWidth={2.5} /> Download Resume
              </a>
              <Link
                to="/projects"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: "transparent", color: G, border: "1px solid rgba(34,197,94,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; }}
              >
                View Projects <ArrowRight size={14} />
              </Link>

              {/* Social icons — 44×44 touch targets */}
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: contactInfo.github },
                  { icon: Linkedin, href: contactInfo.linkedin },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#d8d8d8", border: "1px solid rgba(255,255,255,0.1)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = G; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#d8d8d8"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}