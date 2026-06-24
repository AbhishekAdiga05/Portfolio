import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 mt-0"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300 bg-surface border border-white/10"
          >
            <span style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "11px", letterSpacing: "-0.03em" }}>AA</span>
          </div>
          <span className="text-foreground font-semibold text-sm transition-colors duration-300 hover:text-white" style={{ letterSpacing: "-0.02em" }}>
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
            <Button
              key={i}
              variant="ghost"
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 p-0 rounded-md"
            >
              <Icon size={16} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
