import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";
import { personalInfo, aboutInfo, education, certifications, experiences, skillCategories, contactInfo } from "../../data/portfolio-data";

const G = "#22C55E";

export function ResumePage() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-6 flex flex-col items-center" style={{ background: "transparent" }}>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G }}>Resume</span>
            <div className="w-5 h-[2px]" style={{ background: G }} />
          </div>
          <h1 className="text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", fontFamily: "'Space Grotesk', sans-serif" }}>
            My Resume
          </h1>
          <p className="text-sm" style={{ color: "#c0c0c0" }}>Download or preview my resume below</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex justify-center gap-3 mb-8"
        >
          <a
            href="#"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ background: G, color: "#050505", boxShadow: "0 0 24px rgba(34,197,94,0.3)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            <Download size={15} strokeWidth={2.5} /> Download PDF
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.04)", color: "#cccccc", border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = G; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#cccccc"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <Eye size={15} /> View Full
          </a>
        </motion.div>

        {/* Resume document — white paper look */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div style={{ background: "#ffffff", color: "#1a1a1a", fontFamily: "'Inter', sans-serif" }}>
            {/* Resume header */}
            <div className="flex items-start justify-between p-8 pb-6" style={{ borderBottom: "2px solid #22C55E" }}>
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f0f0f", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                  {personalInfo.firstName} {personalInfo.lastName}
                </h2>
                <p style={{ color: "#22C55E", fontWeight: 600, fontSize: "0.9rem", marginTop: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
                  {personalInfo.role}
                </p>
                <div className="flex flex-wrap gap-4 mt-3" style={{ fontSize: "12px", color: "#888" }}>
                  <span>{contactInfo.email}</span>
                  <span>{contactInfo.github.replace("https://", "")}</span>
                  <span>{contactInfo.linkedinHandle}</span>
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-0">
              {/* Left sidebar */}
              <div className="col-span-1 p-6 pr-5" style={{ background: "#f8f8f8", borderRight: "1px solid #e5e5e5" }}>
                {[
                  {
                    title: "Skills",
                    items: [
                      `${skillCategories[0].skills.map(s => s.name).join(" · ")}`,
                      `${skillCategories[1].skills.map(s => s.name).join(" · ")}`,
                    ],
                  },
                  {
                    title: "Education",
                    items: [education.degree, education.university, education.duration, `CGPA: ${education.gpa}`],
                  },
                  {
                    title: "Certifications",
                    items: certifications.map(c => c.name),
                  },
                  {
                    title: "Interests",
                    items: aboutInfo.interests,
                  },
                ].map(({ title, items }) => (
                  <div key={title} className="mb-6">
                    <h3 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#22C55E", textTransform: "uppercase", marginBottom: "8px" }}>{title}</h3>
                    <ul className="flex flex-col gap-1">
                      {items.map((item) => (
                        <li key={item} style={{ fontSize: "11px", color: "#555", lineHeight: 1.5 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-2 p-6 pl-7">
                {/* Summary */}
                <div className="mb-5">
                  <h3 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#22C55E", textTransform: "uppercase", marginBottom: "6px" }}>Summary</h3>
                  <p style={{ fontSize: "11.5px", color: "#444", lineHeight: 1.7 }}>
                    {aboutInfo.intro} {aboutInfo.secondary}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-5">
                  <h3 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#22C55E", textTransform: "uppercase", marginBottom: "8px" }}>Experience</h3>
                  {experiences.map((e) => (
                    <div key={e.role + e.org} className="mb-4">
                      <div className="flex items-start justify-between mb-0.5">
                        <div>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{e.role}</span>
                          <span style={{ fontSize: "11px", color: "#22C55E", marginLeft: "6px" }}>{e.org}</span>
                        </div>
                        <span style={{ fontSize: "10px", color: "#9a9a9a", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", marginLeft: "8px" }}>{e.duration}</span>
                      </div>
                      <ul style={{ paddingLeft: "14px", marginTop: "4px" }}>
                        {e.bullets.map((b, j) => (
                          <li key={j} style={{ fontSize: "11px", color: "#555", lineHeight: 1.6, marginBottom: "2px" }}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div>
                  <h3 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#22C55E", textTransform: "uppercase", marginBottom: "8px" }}>Projects</h3>
                  {[
                    { name: "NeonChat", tech: "Next.js · TypeScript · Prisma · PostgreSQL · OpenRouter", desc: "AI chat platform supporting 100+ language models with real-time streaming, GitHub authentication, and persistent chat history." },
                    { name: "CodeForge", tech: "Next.js · React · Prisma · PostgreSQL · Judge0 API · Clerk", desc: "LeetCode-inspired coding platform with online code execution, progress tracking, analytics, and authentication." },
                    { name: "SafeCast", tech: "MERN · Cybersecurity · Docker · IoT", desc: "Secure e-voting platform with threat detection, anti-DDoS protection, encrypted voting, and real-time monitoring." },
                  ].map((p) => (
                    <div key={p.name} className="mb-3 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#22C55E" }} />
                      <div>
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{p.name}</span>
                        <span style={{ fontSize: "10px", color: "#888", marginLeft: "6px", fontFamily: "'JetBrains Mono', monospace" }}>{p.tech}</span>
                        <p style={{ fontSize: "11px", color: "#555", lineHeight: 1.5, marginTop: "1px" }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-center py-4" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p className="text-xs" style={{ color: "#a0a0a0" }}>Replace this preview with your actual PDF resume via the download button above</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
