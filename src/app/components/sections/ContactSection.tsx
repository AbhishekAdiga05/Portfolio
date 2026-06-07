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
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="flex items-center gap-3 mb-8"
            >
              {[
                { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
                { icon: Github, href: contactInfo.github, label: "GitHub" },
                { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold"
                  style={{ background: "rgba(34,197,94,0.07)", color: G, border: "1px solid rgba(34,197,94,0.15)" }}
                  whileHover={{ y: -2, background: "rgba(34,197,94,0.14)", boxShadow: "0 0 18px rgba(34,197,94,0.18)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon size={14} /> {label}
                </motion.a>
              ))}
            </motion.div>

            {/* Detail rows */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
              }}
              className="flex flex-col gap-5"
            >
              {[
                { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: Linkedin, label: "LinkedIn", value: contactInfo.linkedinHandle, href: contactInfo.linkedin },
                { icon: Github, label: "GitHub", value: contactInfo.github.replace("https://", ""), href: contactInfo.github },
                { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.14)" }}
                  >
                    <Icon size={17} style={{ color: G }} />
                  </motion.div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "#aaa", fontFamily: "'Geist', 'Inter', sans-serif" }}>{label}</p>
                    {href ? (
                      <motion.a
                        href={href}
                        className="text-sm"
                        style={{ color: "#e4e4e4", fontFamily: "'Geist', 'Inter', sans-serif" }}
                        whileHover={{ color: G, x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {value}
                      </motion.a>
                    ) : (
                      <p className="text-sm" style={{ color: "#e4e4e4", fontFamily: "'Geist', 'Inter', sans-serif" }}>{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-7"
            style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.07)" }}
            whileHover={{ y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
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
              <motion.form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                }}
                className="flex flex-col gap-4"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
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
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                >
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
                </motion.div>
                <motion.button
                  type="submit"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                  style={{ background: G, color: "#050505", boxShadow: "0 0 22px rgba(34,197,94,0.28)" }}
                  whileHover={{ y: -1, boxShadow: "0 0 48px rgba(34,197,94,0.6)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Send size={15} /> Send Message
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}