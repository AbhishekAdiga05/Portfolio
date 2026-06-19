import { GraduationCap, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { aboutInfo } from "../../../data/portfolio-data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

const highlights = [
  { icon: GraduationCap, value: aboutInfo.degree, label: aboutInfo.university },
  { icon: MapPin, value: aboutInfo.location, label: aboutInfo.locationDetail },
  { icon: Code2, value: aboutInfo.yearsExperience, label: aboutInfo.experienceDetail },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-5 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-20">
          <div>
            <SectionHeading eyebrow="About" title="About Me" />

            <ScrollReveal delay={0.08}>
              <p className="text-xl lg:text-2xl leading-relaxed mb-10" style={{ color: "var(--foreground-secondary)", letterSpacing: "-0.02em", fontWeight: 450 }}>
                {aboutInfo.intro}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.value} delay={i * 0.06}>
                  <SpotlightCard className="p-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(124,108,244,0.1)" }}
                    >
                      <h.icon size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>
                      {h.value}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                      {h.label}
                    </p>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <SpotlightCard className="p-7 mb-5">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--primary)" }}>
                  Interests
                </p>

                <div className="flex flex-wrap gap-2">
                  {aboutInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-foreground transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      {interest}
                      <ArrowUpRight size={10} strokeWidth={2.5} className="opacity-50" />
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <SpotlightCard className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--foreground-muted)" }}>
                    CGPA
                  </p>
                  <p className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                    {aboutInfo.CGPA}
                  </p>
                </div>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-right">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--foreground-muted)" }}>
                    Duration
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {aboutInfo.graduationYear}
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
