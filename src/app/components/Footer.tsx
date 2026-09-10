import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 mt-0"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-2.5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300 bg-surface border border-white/10"
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "11px", letterSpacing: "-0.03em" }}>AA</span>
          </motion.div>
          <span className="text-foreground font-semibold text-sm transition-colors duration-300 hover:text-white" style={{ letterSpacing: "-0.02em" }}>
            Abhi.dev
          </span>
        </motion.div>
        <motion.p
          className="text-xs"
          style={{ color: "var(--foreground-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          © {new Date().getFullYear()} Abhishek Adiga · React · TypeScript · Tailwind
        </motion.p>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
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
              className="w-11 h-11 p-0 rounded-md"
            >
              <Icon size={16} />
            </Button>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
