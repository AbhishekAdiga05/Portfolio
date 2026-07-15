import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { Calendar, ChevronRight } from "lucide-react";
import { experiences } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

function SpotlightExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, rgba(124, 108, 244, 0.08), transparent 80%)`;
  const spotlightBorder = useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, rgba(124, 108, 244, 0.3), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="relative group rounded-[24px] border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:-translate-y-1"
      initial="initial"
      whileHover="hover"
    >
      {/* Dynamic Background Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlightBackground }}
      />
      
      {/* Dynamic Border Spotlight via pseudo-element mask trick */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
        style={{ 
          background: spotlightBorder,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px" 
        }}
      />

      <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-6">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wide" style={{ color: "var(--foreground)" }}>
              {exp.role}
            </h3>
            <p className="text-[16px] font-medium mt-1" style={{ color: "var(--primary)" }}>
              {exp.org}
            </p>
          </div>
          
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap self-start"
            style={{ 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.06)", 
              color: "var(--foreground-muted)" 
            }}
          >
            <Calendar size={14} />
            {exp.duration}
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="flex flex-col gap-3 mt-2">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-4 text-[15px] leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
              <ChevronRight className="mt-1 flex-shrink-0" size={16} style={{ color: "var(--primary)" }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div
        className="absolute pointer-events-none inset-0 z-0"
        style={{
          background: "radial-gradient(800px circle at 50% 0%, rgba(124,108,246,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Experience"
          title="Work History"
          description="A look at the roles I've held and the work I've done so far."
        />

        <div className="flex flex-col gap-6 sm:gap-8 mt-16 sm:mt-20">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.org} delay={index * 0.1}>
              <SpotlightExperienceCard exp={exp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
