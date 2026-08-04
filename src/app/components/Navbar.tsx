import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    // Offset for navbar
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const activeSection = useScrollSpy(navLinks.map(l => l.to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  function handleSectionClick(id: string) {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  }

  const navShell = "relative h-16 px-4 sm:px-6 flex items-center";
  const navText = "text-sm font-medium transition-colors duration-200 cursor-pointer";
  const navInactive = "var(--foreground-secondary)";
  const navActive = "var(--foreground)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3, 4, 7, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.04)" : "1px solid transparent",
      }}
    >
      <div className={`max-w-7xl mx-auto ${navShell}`}>
        <button onClick={() => handleSectionClick("hero")} className="flex items-center gap-2.5 min-h-[44px] group focus:outline-none">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <span style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "13px", letterSpacing: "-0.03em" }}>AA</span>
          </motion.div>
          <span className="text-white font-semibold text-sm hidden sm:block group-hover:text-primary transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>
            Abhi.dev
          </span>
        </button>

        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <div
            className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-md"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <button 
                  key={link.to} 
                  onClick={() => handleSectionClick(link.to)}
                  className="relative px-4 h-10 min-w-[78px] flex items-center justify-center rounded-md transition-colors duration-200 focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative ${navText}`} style={{ color: isActive ? navActive : navInactive }}>
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          className="md:hidden ml-auto w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
          style={{ color: "var(--foreground)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-5 pt-2 flex flex-col gap-1"
            style={{ background: "rgba(5,6,8,0.96)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(16px)" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <button 
                  key={link.to} 
                  onClick={() => handleSectionClick(link.to)}
                  className="block py-3 text-sm font-medium border-b text-left focus:outline-none transition-colors"
                  style={{ color: isActive ? "var(--foreground)" : "var(--foreground-secondary)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
