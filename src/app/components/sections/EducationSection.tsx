import { GraduationCap, BookOpen, Award, ChevronRight } from "lucide-react";
import { education } from "../../../data/portfolio-data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

function StatCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <SpotlightCard className="p-4">
      <p className="text-xs mb-1.5" style={{ color: "var(--foreground-muted)" }}>{label}</p>
      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--foreground)" }}>
        {children}
      </div>
    </SpotlightCard>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="My academic background and studies."
        />

        <ScrollReveal delay={0.06}>
          <SpotlightCard className="max-w-4xl p-7">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10">
                <GraduationCap size={22} className="text-foreground-secondary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1.5" style={{ fontSize: "1.35rem", fontWeight: 600 }}>{education.degree}</h3>
                <p className="mb-6 text-sm" style={{ color: "var(--foreground-secondary)" }}>{education.university}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                  <StatCard label="Duration">
                    <BookOpen size={14} style={{ color: "var(--primary)" }} /> {education.duration}
                  </StatCard>
                  <StatCard label="GPA">
                    <Award size={14} style={{ color: "var(--primary)" }} /> {education.gpa}
                  </StatCard>
                  <StatCard label="Focus">
                    <ChevronRight size={14} style={{ color: "var(--primary)" }} /> Information Science
                  </StatCard>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-foreground-secondary transition-colors hover:border-white/20 hover:text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
