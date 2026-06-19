import { Download, Eye } from "lucide-react";
import { personalInfo, aboutInfo, education, certifications, experiences, skillCategories, contactInfo } from "../../data/portfolio-data";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function ResumePage() {
  const skills = skillCategories.map((category) => ({
    title: category.label,
    items: category.skills,
  }));

  return (
    <div className="min-h-screen pt-20 pb-24 px-5 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <ScrollReveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>Resume</span>
            <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
          </div>
          <h1 className="mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>My Resume</h1>
          <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>Download or preview my resume below</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="flex justify-center gap-3 mb-8">
          <a
            href="/resume.pdf"
            download
            className="h-11 px-6 rounded-full flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
          >
            <Download size={15} strokeWidth={2.5} /> Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="h-11 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ background: "transparent", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <Eye size={15} /> View Full
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.14} className="rounded-[24px] overflow-hidden">
          <div className="rounded-[24px] overflow-hidden" style={{ background: "rgba(10,12,20,0.82)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 90px rgba(0,0,0,0.45)" }}>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div>
                  <h2 className="mb-2" style={{ fontSize: "2rem" }}>{personalInfo.firstName} {personalInfo.lastName}</h2>
                  <p className="text-sm" style={{ color: "var(--accent-secondary)", fontWeight: 600 }}>{personalInfo.role}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs" style={{ color: "var(--foreground-muted)" }}>
                    <span>{contactInfo.email}</span>
                    <span>{contactInfo.github.replace("https://", "")}</span>
                    <span>{contactInfo.linkedinHandle}</span>
                    <span>{contactInfo.location}</span>
                  </div>
                </div>
                <div className="rounded-2xl p-4 flex-shrink-0" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-xs mb-1" style={{ color: "var(--foreground-muted)" }}>Education</p>
                  <p className="text-sm" style={{ color: "var(--foreground)" }}>{education.degree}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--foreground-secondary)" }}>{education.duration} · {education.gpa}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-6">
                <div className="flex flex-col gap-5">
                  <section>
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Skills</h3>
                    <div className="flex flex-col gap-2">
                      {skills.map((group) => (
                        <div key={group.title} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>{group.title}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>{group.items.join(" · ")}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Certifications</h3>
                    <ul className="flex flex-col gap-2">
                      {certifications.map((item) => (
                        <li key={item.name} className="text-xs leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>{item.name}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {aboutInfo.interests.map((item) => (
                        <span key={item} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.035)", color: "var(--foreground-secondary)", border: "1px solid rgba(255,255,255,0.07)" }}>{item}</span>
                      ))}
                    </div>
                  </section>
                </div>

                <div>
                  <section className="mb-6">
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Summary</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                      {aboutInfo.intro} {aboutInfo.secondary}
                    </p>
                  </section>

                  <section className="mb-6">
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Experience</h3>
                    {experiences.map((e) => (
                      <div key={e.role + e.org} className="mb-5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                          <div>
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{e.role}</span>
                            <span className="text-xs ml-0 sm:ml-2" style={{ color: "var(--foreground-secondary)" }}>{e.org}</span>
                          </div>
                          <span className="text-xs" style={{ color: "var(--foreground-muted)" }}>{e.duration}</span>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {e.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(124,108,244,0.45)" }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </section>

                  <section>
                    <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--foreground-muted)" }}>Projects</h3>
                    {[
                      { name: "NeonChat", tech: "Next.js · TypeScript · Prisma · PostgreSQL · OpenRouter", desc: "AI chat platform supporting 100+ language models with real-time streaming, GitHub authentication, and persistent chat history." },
                      { name: "CodeForge", tech: "Next.js · React · Prisma · PostgreSQL · Judge0 API · Clerk", desc: "LeetCode-inspired coding platform with online code execution, progress tracking, analytics, and authentication." },
                      { name: "SafeCast", tech: "MERN · Cybersecurity · Docker · IoT", desc: "Secure e-voting platform with threat detection, anti-DDoS protection, encrypted voting, and real-time monitoring." },
                    ].map((p) => (
                      <div key={p.name} className="mb-3">
                        <div className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(124,108,244,0.45)" }} />
                          <div>
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{p.name}</span>
                            <span className="text-xs ml-2" style={{ color: "var(--foreground-muted)" }}>{p.tech}</span>
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed mt-1 ml-3" style={{ color: "var(--foreground-secondary)" }}>{p.desc}</p>
                      </div>
                    ))}
                  </section>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-4" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>Place your resume PDF at <code className="px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)" }}>/public/resume.pdf</code> to enable downloads</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
