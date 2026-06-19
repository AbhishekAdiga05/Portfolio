import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "../../../data/portfolio-data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

const focusStyle = "0 0 0 2px rgba(124,108,244,0.4)";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "var(--foreground)",
    borderRadius: "16px",
    padding: "13px 14px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const contactMethods = [
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email", value: contactInfo.email },
    { icon: Linkedin, label: "LinkedIn", value: contactInfo.linkedinHandle, href: contactInfo.linkedin },
    { icon: Github, label: "GitHub", value: contactInfo.github.replace("https://", ""), href: contactInfo.github },
    { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="I'm always open to new opportunities, collaborations, or just a quick chat. Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <ScrollReveal delay={0.06}>
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
                { icon: Github, href: contactInfo.github, label: "GitHub" },
                { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 px-4 rounded-full flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
                  style={{ background: "transparent", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.12)" }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <Icon size={14} /> {label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-3 rounded-2xl transition-colors duration-300 border border-transparent hover:border-white/10 hover:bg-white/5"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10">
                    <Icon size={17} className="text-foreground-secondary" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs mb-1" style={{ color: "var(--foreground-muted)" }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium transition-colors duration-200" style={{ color: "var(--foreground)" }} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <SpotlightCard className="p-6 sm:p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center min-h-[420px] gap-4 text-center py-16">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Send size={24} style={{ color: "var(--foreground-secondary)" }} />
                  </div>
                  <p className="font-semibold" style={{ color: "var(--foreground)" }}>Message sent!</p>
                  <p className="text-sm max-w-sm" style={{ color: "var(--foreground-secondary)" }}>{contactInfo.responseTime}</p>
                </div>
              ) : (
                <form
                  action={`https://formspree.io/f/manqbrkp`}
                  method="POST"
                  onSubmit={(e) => {
                    if (!form.name || !form.email || !form.message) return;
                    setSent(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: "var(--foreground)" }}>Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                          (e.currentTarget as HTMLElement).style.boxShadow = focusStyle;
                        }}
                        onBlur={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                        onMouseEnter={(e) => {
                          if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                        }}
                        onMouseLeave={(e) => {
                          if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{ color: "var(--foreground)" }}>Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                          (e.currentTarget as HTMLElement).style.boxShadow = focusStyle;
                        }}
                        onBlur={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                        onMouseEnter={(e) => {
                          if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                        }}
                        onMouseLeave={(e) => {
                          if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: "var(--foreground)" }}>Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                        (e.currentTarget as HTMLElement).style.boxShadow = focusStyle;
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                      onMouseEnter={(e) => {
                        if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                      }}
                      onMouseLeave={(e) => {
                        if (document.activeElement !== e.currentTarget) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="h-11 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
                    style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
                  >
                    <Send size={15} /> Send Message
                  </motion.button>
                </form>
              )}
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
