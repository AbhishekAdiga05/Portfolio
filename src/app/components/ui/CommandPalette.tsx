import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Command, ExternalLink, Github, Home, Layers3, Mail, MapPin, Moon, Search, User, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { contactInfo } from "../../../data/portfolio-data";

type CommandPaletteItem = {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
  action: () => void;
};

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const items = useMemo<CommandPaletteItem[]>(() => [
    {
      id: "home",
      label: "Home",
      description: "Jump to the portfolio landing section",
      icon: <Home size={16} />,
      keywords: ["landing", "hero", "home"],
      action: () => {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 20);
      },
    },
    {
      id: "about",
      label: "About",
      description: "Read the story behind the work",
      icon: <User size={16} />,
      keywords: ["about", "story", "profile"],
      action: () => {
        navigate("/");
        setTimeout(() => scrollToSection("about"), 120);
      },
    },
    {
      id: "projects",
      label: "Featured Projects",
      description: "Open the project showcase",
      icon: <Layers3 size={16} />,
      keywords: ["projects", "portfolio", "case study"],
      action: () => {
        navigate("/");
        setTimeout(() => scrollToSection("projects"), 120);
      },
    },
    {
      id: "tech-arsenal",
      label: "Tech Arsenal",
      description: "Explore frontend, backend, database, and deployment tools",
      icon: <Moon size={16} />,
      keywords: ["skills", "tech", "tools", "arsenal", "frontend", "backend"],
      action: () => {
        navigate("/");
        setTimeout(() => scrollToSection("skills"), 120);
      },
    },
    {
      id: "experience",
      label: "Experience",
      description: "Review recent development experience",
      icon: <MapPin size={16} />,
      keywords: ["experience", "work", "community", "open source"],
      action: () => {
        navigate("/");
        setTimeout(() => scrollToSection("experience"), 120);
      },
    },
    {
      id: "resume",
      label: "Resume",
      description: "Open the downloadable resume",
      icon: <ExternalLink size={16} />,
      keywords: ["resume", "cv", "pdf", "download"],
      action: () => navigate("/resume"),
    },
    {
      id: "github",
      label: "GitHub",
      description: "Open GitHub profile",
      icon: <Github size={16} />,
      keywords: ["github", "code", "profile"],
      action: () => window.open(contactInfo.github, "_blank", "noopener,noreferrer"),
    },
    {
      id: "email",
      label: "Email",
      description: "Start an email conversation",
      icon: <Mail size={16} />,
      keywords: ["email", "mail", "contact"],
      action: () => window.open(`mailto:${contactInfo.email}`, "_blank", "noopener,noreferrer"),
    },
  ], [navigate, location.pathname]);

  const filteredItems = items.filter((item) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return true;

    return [item.label, item.description, ...item.keywords].join(" ").toLowerCase().includes(normalizedQuery);
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isCommandK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isCommandK) {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 h-10 px-3.5 rounded-full text-sm transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--foreground-muted)" }}
        aria-label="Open command palette"
      >
        <Command size={14} />
        <span>Search</span>
        <kbd className="ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-semibold" style={{ background: "rgba(255,255,255,0.06)", color: "var(--foreground-secondary)" }}>Ctrl K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-start justify-center pt-28 px-4"
            style={{ background: "rgba(3,4,7,0.72)", backdropFilter: "blur(14px)" }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl overflow-hidden rounded-[24px]"
              style={{ background: "rgba(10,12,20,0.96)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 100px rgba(0,0,0,0.62)", backdropFilter: "blur(20px)" }}
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search size={17} className="text-foreground-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages, sections, or links..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground-muted"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ color: "var(--foreground-muted)" }}
                  aria-label="Close command palette"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      item.action();
                      setOpen(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left transition-colors duration-200"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: index === 0 ? "rgba(124,108,246,0.16)" : "rgba(255,255,255,0.04)", border: index === 0 ? "1px solid rgba(124,108,246,0.24)" : "1px solid rgba(255,255,255,0.07)" }}>
                      <span className={index === 0 ? "text-primary" : "text-foreground-muted"}>{item.icon}</span>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium" style={{ color: "var(--foreground)" }}>{item.label}</span>
                      <span className="block text-xs mt-0.5" style={{ color: "var(--foreground-muted)" }}>{item.description}</span>
                    </span>
                  </button>
                ))}

                {filteredItems.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--foreground-muted)" }}>
                    No commands found.
                  </div>
                )}
              </div>

              <div className="px-4 py-3 text-xs border-t border-white/10" style={{ color: "var(--foreground-muted)" }}>
                Press <span className="px-1.5 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }}>Ctrl K</span> to toggle. Use search to jump around quickly.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
