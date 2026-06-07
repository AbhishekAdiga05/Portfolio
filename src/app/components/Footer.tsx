import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 mt-0"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#22C55E", boxShadow: "0 0 10px rgba(34,197,94,0.4)" }}
          >
            <span style={{ color: "#050505", fontWeight: 800, fontSize: "11px", fontFamily: "'Space Grotesk', sans-serif" }}>AA</span>
          </div>
          <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Abhi<span style={{ color: "#22C55E" }}>.</span>dev
          </span>
        </div>
        <p className="text-xs" style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
          © 2025 Abhishek Adiga · React · TypeScript · Tailwind
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/AbhishekAdiga05" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-adiga-1a37b232a/" },
            { icon: Mail, href: "mailto:abhishekadiga2345@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#cccccc" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22C55E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#cccccc")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
