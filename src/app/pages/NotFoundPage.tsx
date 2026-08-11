import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, FolderGit2, PenLine, FileText } from "lucide-react";
import { Seo } from "../components/Seo";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: FolderGit2 },
  { to: "/blog", label: "Blog", icon: PenLine },
  { to: "/resume", label: "Resume", icon: FileText },
];

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 text-center">
      <Seo title="Page Not Found" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--primary)" }}>
          Error 404
        </p>
        <h1
          className="mb-4"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--foreground)" }}
        >
          404
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-md" style={{ color: "var(--foreground-secondary)", lineHeight: 1.7 }}>
          This page doesn't exist or may have moved. Let's get you back somewhere useful.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold transition-colors duration-200"
              style={{
                color: "var(--foreground)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon size={15} style={{ color: "var(--primary)" }} />
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
