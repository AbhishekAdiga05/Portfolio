import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const G = "#22C55E";

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

  useEffect(() => { setMenuOpen(false); setDropdownOpen(false); }, [location]);

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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: G, boxShadow: "0 0 12px rgba(34,197,94,0.5)" }}
          >
            <span style={{ color: "#050505", fontWeight: 800, fontSize: "13px", fontFamily: "'Space Grotesk', sans-serif" }}>AA</span>
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Abhi<span style={{ color: G }}>.</span>dev
          </span>
        </NavLink>

        {/* Center pill nav */}
        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <div className="relative px-4 py-1.5 rounded-full transition-all duration-200">
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative text-sm font-medium" style={{ color: isActive ? G : "#cccccc" }}>
                      {link.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}

            {/* Sections dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-200"
                style={{ color: dropdownOpen ? G : "#cccccc" }}
              >
                <span className="text-sm font-medium">Sections</span>
                <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 py-1.5 rounded-xl overflow-hidden"
                    style={{
                      background: "rgba(10,10,10,0.98)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,197,94,0.06)",
                      backdropFilter: "blur(20px)",
                      minWidth: "160px",
                    }}
                  >
                    {sectionLinks.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSectionClick(s.id)}
                        className="w-full text-left px-4 py-2 text-sm transition-all duration-150 flex items-center gap-2.5 group"
                        style={{ color: "#c8c8c8", fontFamily: "'Space Grotesk', sans-serif" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)";
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#c8c8c8";
                        }}
                      >
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(34,197,94,0.5)" }} />
                        {s.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={() => handleSectionClick("contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: G, color: "#050505", boxShadow: "0 0 16px rgba(34,197,94,0.35)" }}
            whileHover={{ y: -1, boxShadow: "0 0 28px rgba(34,197,94,0.55)" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Contact
          </motion.button>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-1"
            style={{ background: "rgba(5,5,5,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <span className="block py-3 text-sm font-medium border-b" style={{ color: isActive ? G : "#d0d0d0", borderColor: "rgba(255,255,255,0.05)" }}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-1 pb-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-xs mb-2 pt-2" style={{ color: "#555", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>Sections</p>
              <div className="grid grid-cols-2 gap-1">
                {sectionLinks.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSectionClick(s.id)}
                    className="text-left py-2 text-sm flex items-center gap-2"
                    style={{ color: "#c0c0c0" }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(34,197,94,0.5)" }} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleSectionClick("contact")}
              className="mt-3 block text-center py-3 rounded-full text-sm font-semibold"
              style={{ background: G, color: "#050505" }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
