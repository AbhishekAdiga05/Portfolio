import { motion } from "motion/react";
import { personalInfo, aboutInfo } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.04]"
          style={{ background: "var(--primary)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Centered Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="About"
            title="Nice to Meet You"
            description={aboutInfo.intro}
            className="mx-auto"
          />
        </div>

        {/* Main Content - Single Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Left: Profile Image */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative mx-auto"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-[-16px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(124,108,244,0.2), transparent 65%)" }}
                animate={{ scale: [0.98, 1.05, 0.98], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image */}
              <div
                className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border-2"
                style={{
                  borderColor: "rgba(124,108,244,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
                }}
              >
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.firstName}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Info Cards */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              variants={listItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="col-span-2 p-6 rounded-2xl border backdrop-blur-sm"
              style={{
                background: "rgba(124,108,244,0.03)",
                borderColor: "rgba(124,108,244,0.15)"
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--primary)" }}>
                Current Status
              </p>
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                {aboutInfo.degree}
              </h3>
              <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                {aboutInfo.university}
              </p>
            </motion.div>

            <motion.div
              variants={listItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)"
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--foreground-muted)" }}>
                Location
              </p>
              <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                {aboutInfo.location}
              </p>
            </motion.div>

            <motion.div
              variants={listItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)"
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--foreground-muted)" }}>
                CGPA
              </p>
              <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                {aboutInfo.CGPA}
              </p>
            </motion.div>

            <motion.div
              variants={listItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)"
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--foreground-muted)" }}>
                Experience
              </p>
              <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                {aboutInfo.yearsExperience}
              </p>
            </motion.div>

            <motion.div
              variants={listItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)"
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--foreground-muted)" }}>
                Graduation
              </p>
              <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                {aboutInfo.graduationYear}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
