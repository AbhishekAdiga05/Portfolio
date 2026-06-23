import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { personalInfo, aboutInfo, contactInfo } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function AboutSection() {
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
            <ScrollReveal delay={0.1}>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--primary)" }}>
                ABOUT ME
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--foreground)" }}>
                {personalInfo.firstName} {personalInfo.lastName}
              </h2>
              <p className="text-sm font-medium mb-8 flex items-center gap-2" style={{ color: "var(--foreground-muted)" }}>
                <span>📍</span> {aboutInfo.location}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-lg leading-relaxed mb-10 whitespace-pre-line" style={{ color: "var(--foreground-secondary)", letterSpacing: "-0.01em" }}>
                {aboutInfo.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-12">
                {aboutInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 bg-white/5 cursor-default hover:border-[rgba(124,108,244,0.5)] hover:shadow-[0_0_15px_rgba(124,108,244,0.2)] hover:bg-white/10"
                    style={{ color: "var(--foreground)" }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex items-center gap-4">
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[rgba(124,108,244,0.5)] hover:shadow-[0_0_20px_rgba(124,108,244,0.2)] hover:bg-white/10"
                  style={{ color: "var(--foreground)" }}
                >
                  <Github size={20} />
                </a>
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[rgba(124,108,244,0.5)] hover:shadow-[0_0_20px_rgba(124,108,244,0.2)] hover:bg-white/10"
                  style={{ color: "var(--foreground)" }}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[rgba(124,108,244,0.5)] hover:shadow-[0_0_20px_rgba(124,108,244,0.2)] hover:bg-white/10"
                  style={{ color: "var(--foreground)" }}
                >
                  <Mail size={20} />
                </a>
                <a 
                  href={contactInfo.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[rgba(124,108,244,0.5)] hover:shadow-[0_0_20px_rgba(124,108,244,0.2)] hover:bg-white/10"
                  style={{ color: "var(--foreground)" }}
                  title="LeetCode"
                >
                  <Code2 size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
