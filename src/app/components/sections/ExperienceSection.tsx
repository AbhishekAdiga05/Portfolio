import * as Tabs from "@radix-ui/react-tabs";
import { Calendar } from "lucide-react";
import { experiences } from "../../../data/portfolio-data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-5 sm:px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Work Experience"
          description="My professional journey and the places I've worked at so far."
        />

        <ScrollReveal delay={0.06}>
          <div className="max-w-4xl">
            <Tabs.Root defaultValue={experiences[0].org} className="flex flex-col md:flex-row gap-8 lg:gap-12" orientation="vertical">
              <Tabs.List className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 min-w-[200px]" aria-label="Work Experience">
                {experiences.map((exp) => (
                  <Tabs.Trigger
                    key={exp.org}
                    value={exp.org}
                    className="px-4 py-3 text-sm font-medium text-left rounded-xl transition-all duration-200 border border-transparent whitespace-nowrap data-[state=active]:bg-surface data-[state=active]:border-white/10 data-[state=active]:text-foreground text-foreground-muted hover:bg-white/5"
                  >
                    {exp.org}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              <SpotlightCard className="flex-1 p-6 sm:p-8">
                {experiences.map((exp) => (
                  <Tabs.Content key={exp.org} value={exp.org} className="outline-none focus:outline-none">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="mb-1.5 text-xl font-semibold">{exp.role}</h3>
                        <p className="text-sm text-foreground-secondary">{exp.org}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-foreground-muted">
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="flex flex-col gap-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary/40" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Tabs.Content>
                ))}
              </SpotlightCard>
            </Tabs.Root>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
