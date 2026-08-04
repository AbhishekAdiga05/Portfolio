import { motion } from "motion/react";
import { Monitor, Server, Bot, Braces, Lightbulb, GitBranch, GraduationCap, MapPin, CalendarRange, Sparkles } from "lucide-react";
import { personalInfo, aboutInfo } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

// Map interests to appropriate icons
const getInterestIcon = (interest: string) => {
  const normalized = interest.toLowerCase();
  if (normalized.includes("full-stack") || normalized.includes("frontend")) return <Monitor size={18} />;
  if (normalized.includes("backend")) return <Server size={18} />;
  if (normalized.includes("artificial intelligence") || normalized.includes("ai")) return <Bot size={18} />;
  if (normalized.includes("data structures") || normalized.includes("algorithms") || normalized.includes("dsa")) return <Braces size={18} />;
  if (normalized.includes("open source")) return <GitBranch size={18} />;
  return <Lightbulb size={18} />;
};

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function InfoCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      variants={listItem}
      className="group flex items-start gap-3.5 p-4 rounded-2xl border border-border-soft bg-background transition-colors duration-300 hover:border-primary/25"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{ background: "rgba(124,108,244,0.08)", color: "var(--primary)" }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
          {value}
        </p>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-5 sm:px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden lg:block absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] opacity-10" style={{ background: "var(--primary)" }} />
        <div className="hidden lg:block absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[120px] opacity-[0.06]" style={{ background: "var(--accent-secondary)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-14 lg:gap-20">
          {/* Left Side: Profile Image */}
          <div className="flex justify-center items-center lg:items-start lg:pt-8">
            <ScrollReveal delay={0.05}>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
              >
                {/* Image container — single ring with glowing animation */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden bg-black/50 backdrop-blur-sm border border-white/[0.1]"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(124,108,244,0)",
                      "0 0 30px rgba(124,108,244,0.35)",
                      "0 0 0px rgba(124,108,244,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.firstName}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="About"
              title="About Me"
              description={aboutInfo.intro}
              className="mb-8"
            />

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
            >
              <InfoCard
                icon={<GraduationCap size={18} />}
                value={aboutInfo.degree}
                label={aboutInfo.university}
              />
              <InfoCard
                icon={<MapPin size={18} />}
                value={aboutInfo.location}
                label={aboutInfo.locationDetail}
              />
              <InfoCard
                icon={<CalendarRange size={18} />}
                value={aboutInfo.graduationYear}
                label={`CGPA ${aboutInfo.CGPA}`}
              />
              <InfoCard
                icon={<Sparkles size={18} />}
                value={aboutInfo.yearsExperience}
                label={aboutInfo.experienceDetail}
              />
            </motion.div>

            <div className="mb-10">
              <motion.h3
                variants={listItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="text-lg font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                What I Do
              </motion.h3>
              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2.5"
              >
                {aboutInfo.interests.map((interest) => (
                  <motion.div
                    key={interest}
                    variants={listItem}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-colors cursor-default"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground-secondary)"
                    }}
                  >
                    <span className="transition-transform duration-300" style={{ color: "var(--primary)" }}>
                      {getInterestIcon(interest)}
                    </span>
                    {interest}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
