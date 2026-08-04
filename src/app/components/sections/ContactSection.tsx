import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "var(--foreground)",
    borderRadius: "12px",
    padding: "16px",
    fontSize: "15px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s, box-shadow 0.3s, background-color 0.3s",
  };

  const focusStyle = "0 0 0 2px rgba(124,108,244,0.3)";

  const socialLinks = [
    { icon: Github, href: contactInfo.github, label: "GitHub" },
    { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 px-5 sm:px-6 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute pointer-events-none inset-0 z-0"
        style={{
          background: "radial-gradient(1000px circle at 50% 100%, rgba(124,108,246,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Horizontal Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Heading and Info */}
          <div className="flex flex-col items-start text-left">
            <ScrollReveal delay={0.05}>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--primary)" }}>
                What's Next
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg max-w-md mb-10 leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="group relative inline-flex items-center gap-3 mb-10 px-6 py-4 rounded-full overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)"
                }}
                whileHover="hover"
                initial="idle"
              >
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{ background: "linear-gradient(90deg, rgba(124,108,244,0.1), rgba(124,108,244,0.0))" }}
                />
                
                <Mail className="relative z-10" size={24} style={{ color: "var(--primary)" }} />
                <span className="relative z-10 text-lg sm:text-xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
                  {contactInfo.email}
                </span>
                <ArrowRight className="relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" size={20} style={{ color: "var(--primary)" }} />
              </motion.a>
            </ScrollReveal>

            {/* Circular Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <ScrollReveal key={label} delay={0.2 + idx * 0.05}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--foreground)"
                    }}
                    whileHover="hover"
                    initial="idle"
                    variants={{
                      hover: { 
                        scale: 1.1,
                        borderColor: "var(--primary)",
                        backgroundColor: "rgba(124,108,244,0.05)"
                      }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon size={22} className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-full blur-[10px] z-0"
                      variants={{
                        hover: { opacity: 0.5, background: "var(--primary)" },
                        idle: { opacity: 0, background: "transparent" }
                      }}
                    />
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={0.3} className="w-full">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-8 rounded-3xl text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(124,108,244,0.1)", border: "1px solid rgba(124,108,244,0.3)" }}>
                  <Send size={28} style={{ color: "var(--primary)" }} />
                </div>
                <p className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Message sent!</p>
                <p className="text-lg" style={{ color: "var(--foreground-secondary)" }}>I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form
                action={`https://formspree.io/f/manqbrkp`}
                method="POST"
                onSubmit={(e) => {
                  if (!form.name || !form.email || !form.message) return;
                  setSent(true);
                }}
                className="flex flex-col gap-4 text-left bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-[24px]"
              >
                <div className="flex flex-col gap-4">
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
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow = focusStyle;
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                    }}
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,108,244,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = focusStyle;
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                  }}
                />

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full mt-2"
                  icon={<Send size={15} />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
