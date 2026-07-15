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
                {/* Ambient glow behind */}
                <div className="absolute inset-0 rounded-full blur-[80px] opacity-40" style={{ background: "rgba(124,108,244,0.6)" }} />
                
                {/* Image container */}
                <div className="absolute inset-0 rounded-full overflow-hidden bg-black/50 backdrop-blur-sm">
                  <img 
                    src={personalInfo.profilePhoto} 
                    alt={personalInfo.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content Area */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight" style={{ color: "var(--foreground)" }}>
                About Me
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              {introParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-[17px] sm:text-lg leading-relaxed mb-6" 
                  style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            <div className="mt-14">
              <ScrollReveal delay={0.15}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>What I Do</h3>
                <div className="flex flex-wrap gap-4 mb-14">
                  {aboutInfo.interests.map((interest) => (
                    <div
                      key={interest}
                      className="flex items-center gap-3 px-5 py-3 rounded-full text-[15px] font-medium border transition-colors"
                      style={{ 
                        backgroundColor: "rgba(255,255,255,0.03)", 
                        borderColor: "rgba(255,255,255,0.08)",
                        color: "var(--foreground-secondary)"
                      }}
                    >
                      <span style={{ color: "var(--primary)" }}>
                        {getInterestIcon(interest)}
                      </span>
                      {interest}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Connect With Me</h3>
                <div className="flex items-center gap-4 mb-12">
                  <a 
                    href={contactInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#222222]"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--foreground)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={contactInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#222222]"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--foreground)" }}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#222222]"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--foreground)" }}
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href={contactInfo.leetcode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#222222]"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--foreground)" }}
                    title="LeetCode"
                  >
                    <Code2 size={20} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <Button variant="primary" href={resumeLink} target="_blank" rel="noreferrer">
                  View Resume
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
