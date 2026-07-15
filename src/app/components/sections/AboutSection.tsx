import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2, Monitor, Server, Bot, Braces, Lightbulb, GitBranch } from "lucide-react";
import { personalInfo, aboutInfo, contactInfo, resumeLink } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";

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

export function AboutSection() {
  const introParagraphs = aboutInfo.intro.split('\n\n');

  return (
    <section id="about" className="py-24 px-5 sm:px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] opacity-15" style={{ background: "var(--primary)" }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[120px] opacity-10" style={{ background: "var(--accent-secondary)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-14 lg:gap-20">
          {/* Left Side: Profile Image */}
          <div className="flex justify-center items-center lg:items-start lg:pt-8">
            <ScrollReveal delay={0.05}>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
              >
                {/* Pulsing glow ring */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(124,108,244,0.15), 0 0 60px rgba(124,108,244,0.05)",
                      "0 0 50px rgba(124,108,244,0.3), 0 0 80px rgba(92,149,255,0.1)",
                      "0 0 30px rgba(124,108,244,0.15), 0 0 60px rgba(124,108,244,0.05)",
                    ],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-[3px] rounded-full"
                  style={{
                    border: "1.5px solid rgba(124,108,244,0.2)",
                  }}
                />
                
                {/* Ambient glow behind */}
                <div className="absolute inset-0 rounded-full blur-[80px] opacity-40" style={{ background: "rgba(124,108,244,0.6)" }} />
                
                {/* Secondary glow layer */}
                <div className="absolute inset-4 rounded-full blur-[60px] opacity-20" style={{ background: "rgba(92,149,255,0.4)" }} />
                
                {/* Image container */}
                <div className="absolute inset-0 rounded-full overflow-hidden bg-black/50 backdrop-blur-sm border border-white/[0.06]">
                  <img 
                    src={personalInfo.profilePhoto} 
                    alt={personalInfo.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content Area (Wrapped in a box) */}
          <div 
            className="flex flex-col justify-center p-8 sm:p-10 rounded-[32px] relative overflow-hidden"
            style={{ 
              background: "var(--surface-elevated)", 
              border: "1px solid var(--border-soft)" 
            }}
          >
            {/* Subtle inner glow for the box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <ScrollReveal delay={0.05}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight" style={{ color: "var(--foreground)" }}>
                  About Me
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                {introParagraphs.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-[17px] sm:text-lg leading-relaxed mb-6 text-foreground-secondary" 
                  >
                    {paragraph}
                  </p>
                ))}
              </ScrollReveal>

              <div className="mt-12">
                <ScrollReveal delay={0.15}>
                  <h3 className="text-xl font-bold mb-5" style={{ color: "var(--foreground)" }}>What I Do</h3>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {aboutInfo.interests.map((interest) => (
                      <motion.div
                        key={interest}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 14 }}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-[14px] font-medium border transition-colors cursor-default"
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
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <h3 className="text-xl font-bold mb-5" style={{ color: "var(--foreground)" }}>Connect With Me</h3>
                  <div className="flex items-center gap-3 mb-10">
                    <motion.a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 border border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                      style={{ color: "var(--foreground)" }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 border border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                      style={{ color: "var(--foreground)" }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a 
                      href={`mailto:${contactInfo.email}`} 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 border border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                      style={{ color: "var(--foreground)" }}
                    >
                      <Mail size={18} />
                    </motion.a>
                    <motion.a 
                      href={contactInfo.leetcode} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 border border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                      style={{ color: "var(--foreground)" }}
                      title="LeetCode"
                    >
                      <Code2 size={18} />
                    </motion.a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="primary" href={resumeLink} target="_blank" rel="noreferrer">
                      View Resume
                    </Button>
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
