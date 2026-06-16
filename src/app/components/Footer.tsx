import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 mt-0"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "11px", letterSpacing: "-0.03em" }}>AA</span>
          </div>
          <span className="text-white font-semibold text-sm" style={{ letterSpacing: "-0.02em" }}>
            Abhi.dev
          </span>
        </div>
        <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
          © {new Date().getFullYear()} Abhishek Adiga · React · TypeScript · Tailwind
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/AbhishekAdiga05" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-adiga-1a37b232a/" },
            { icon: Mail, href: "mailto:abhishekadiga2345@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{ color: "var(--foreground-secondary)", background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)")}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
