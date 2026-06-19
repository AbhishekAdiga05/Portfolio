import { Award, Calendar } from "lucide-react";
import { certifications } from "../../../data/portfolio-data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Extra courses and credentials I've earned to improve my skills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={`${cert.name}-${cert.issuer}`} delay={i * 0.06}>
              <SpotlightCard className="p-6">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 bg-white/5 border border-white/10">
                  <Award size={18} className="text-foreground-secondary group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-semibold leading-snug mb-2" style={{ color: "var(--foreground)", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>{cert.name}</h3>
                <p className="text-sm mb-5" style={{ color: "var(--foreground-secondary)" }}>{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--foreground-muted)" }}>
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
