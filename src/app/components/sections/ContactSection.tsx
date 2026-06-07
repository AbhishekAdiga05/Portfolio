import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { contactInfo } from "../../../data/portfolio-data";

const G = "#22C55E";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: "#0c0c0c",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#ffffff",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "13px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
    fontFamily: "'Geist', 'Inter', sans-serif",
  };

  return (
    <section id="contact" className="py-20 px-6" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[2px]" style={{ background: G }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G, fontFamily: "'JetBrains Mono', monospace" }}>
              Contact
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 0 40px rgba(34,197,94,0.15)" }}
          >
            Get in Touch
          </h2>
          <p className="mb-10 max-w-lg" style={{ color: "#ddd", lineHeight: 1.8, fontSize: "1rem", fontFamily: "'Geist', 'Inter', sans-serif" }}>
            {contactInfo.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Social quick-links */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
                { icon: Github, href: contactInfo.github, label: "GitHub" },
                { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{ background: "rgba(34,197,94,0.07)", color: G, border: "1px solid rgba(34,197,94,0.15)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.14)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(34,197,94,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>

            {/* Detail rows */}
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: Linkedin, label: "LinkedIn", value: contactInfo.linkedinHandle, href: contactInfo.linkedin },
                { icon: Github, label: "GitHub", value: contactInfo.github.replace("https://", ""), href: contactInfo.github },
                { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.14)" }}
                  >
                    <Icon size={17} style={{ color: G }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "#aaa", fontFamily: "'Geist', 'Inter', sans-serif" }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#e4e4e4", fontFamily: "'Geist', 'Inter', sans-serif" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G)}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#e4e4e4")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "#e4e4e4", fontFamily: "'Geist', 'Inter', sans-serif" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-7"
            style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.12)", boxShadow: "0 0 32px rgba(34,197,94,0.2)" }}
                >
                  <Send size={28} style={{ color: G }} />
                </div>
                <p className="text-white font-semibold">Message sent!</p>
                <p className="text-sm" style={{ color: "#e8e8e8" }}>{contactInfo.responseTime}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#e0e0e0" }}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(34,197,94,0.45)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#e0e0e0" }}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(34,197,94,0.45)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "#e0e0e0" }}>Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(34,197,94,0.45)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: G, color: "#050505", boxShadow: "0 0 22px rgba(34,197,94,0.28)" }}
                  whileHover={{ boxShadow: "0 0 48px rgba(34,197,94,0.6)", y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={15} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}