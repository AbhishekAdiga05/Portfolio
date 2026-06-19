import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
];

const sectionLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSectionClick(id: string) {
    setDropdownOpen(false);
    setMenuOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 120);
    }
  }

  const navShell = "h-16 px-4 sm:px-6 flex items-center justify-between";
  const navText = "text-sm font-medium transition-colors duration-200";
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
        <NavLink to="/" className="flex items-center gap-2.5 min-h-[44px] group">
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
        </NavLink>

        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <div className="relative px-4 h-10 min-w-[78px] flex items-center justify-center rounded-full transition-colors duration-200">
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <span className={`relative ${navText}`} style={{ color: isActive ? navActive : navInactive }}>
                      {link.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1.5 px-4 h-10 rounded-full transition-colors duration-200"
                style={{ color: dropdownOpen ? "var(--foreground)" : navInactive }}
                aria-expanded={dropdownOpen}
              >
                <span className={`text-sm font-medium`}>Sections</span>
                <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-1.5 rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(5,6,8,0.92)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
                      backdropFilter: "blur(16px)",
                      minWidth: "180px",
                    }}
                  >
                    {sectionLinks.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => handleSectionClick(s.id)}
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 flex items-center gap-3"
                        style={{ color: "var(--foreground-secondary)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                          (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "var(--foreground-secondary)";
                        }}
                      >
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(124,108,244,0.65)" }} />
                        {s.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="h-10 px-4 rounded-full text-sm font-semibold transition-colors duration-200"
            style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary-hover)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--button-primary)")}
          >
            Contact
          </motion.button>
        </div>

        <button
          type="button"
          className="md:hidden w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
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
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <span className="block py-3 text-sm font-medium border-b" style={{ color: isActive ? "var(--foreground)" : "var(--foreground-secondary)", borderColor: "rgba(255,255,255,0.06)" }}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-2 pb-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs mb-2 pt-2" style={{ color: "var(--foreground-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Sections</p>
              <div className="grid grid-cols-2 gap-1">
                {sectionLinks.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleSectionClick(s.id)}
                    className="text-left py-3 px-3 text-sm rounded-lg transition-colors duration-200"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="mt-3 block text-center h-11 rounded-full text-sm font-semibold transition-colors duration-200"
              style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
