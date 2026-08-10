import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useIsDesktop } from "./ui/ScrollReveal";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

// Offset below the fixed navbar that a section must cross to become active.
const SCROLL_OFFSET = 96;

function scrollToSection(id: string): boolean {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    return true;
  }
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }
  return false;
}

// After navigating to "/", the Home page is lazy-loaded and animates in, so the
// target section may not exist yet. Poll for it (every 100ms, up to ~1.2s) and
// smooth-scroll once it appears.
function scrollToSectionAfterNav(id: string) {
  let attempts = 0;
  const tryScroll = () => {
    attempts += 1;
    if (scrollToSection(id)) return;
    if (attempts < 12) setTimeout(tryScroll, 100);
  };
  tryScroll();
}

// One rAF-throttled scroll listener powers both the scrolled state and the active
// section, so the navbar only pays a single (cheap, throttled) pass per scroll event.
function useScrollSpy(ids: string[], enabled: boolean, onScroll: (scrollY: number) => void) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) setActiveId("");

    let ticking = false;

    const update = () => {
      ticking = false;
      const scrolledY = window.scrollY;
      onScroll(scrolledY);

      if (!enabled) return;

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrolledY;
        if (top <= SCROLL_OFFSET) current = id;
      }

      // Force the last section active once the page is scrolled to the bottom.
      if (window.innerHeight + scrolledY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }

      setActiveId(current || "");
    };

    const onScrollEvent = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScrollEvent, { passive: true });
    window.addEventListener("resize", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
      window.removeEventListener("resize", onScrollEvent);
    };
  }, [ids, enabled, onScroll]);

  return activeId;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  const activeIds = useMemo(() => navLinks.map((l) => l.to), []);
  const onScrollState = useCallback((scrollY: number) => setScrolled(scrollY > 20), []);
  const activeSection = useScrollSpy(activeIds, location.pathname === "/", onScrollState);

  // Left → right page-scroll progress shown at the top edge of the navbar.
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  function handleSectionClick(id: string) {
    setMenuOpen(false);
    // Blog lives on its own page — the nav link goes there instead of a section.
    if (id === "blog") {
      if (location.pathname !== "/blog") navigate("/blog");
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSectionAfterNav(id);
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
        // backdrop-filter re-composites everything behind the header every scroll frame —
        // on mobile the 75% bg already guarantees readability, so skip it there.
        backdropFilter: scrolled && isDesktop ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.04)" : "1px solid transparent",
      }}
    >
      {/* Scroll progress — fills left → right as you scroll through sections */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-10"
        style={{ scaleX: progressScale, background: "linear-gradient(90deg, var(--primary), var(--accent-secondary))" }}
        aria-hidden="true"
      />

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
          <span className="text-white font-semibold text-sm hidden lg:block group-hover:text-primary transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>
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
                  className="relative px-3 h-10 min-w-[68px] flex items-center justify-center rounded-md transition-colors duration-200 focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md"
                      style={{
                        background: "linear-gradient(135deg, rgba(124,108,244,0.22), rgba(92,149,255,0.10))",
                        border: "1px solid rgba(124,108,244,0.35)",
                        boxShadow: "0 0 20px rgba(124,108,244,0.15)",
                      }}
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
          onClick={() => setMenuOpen((v) => !v)}
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
            style={{ background: "rgba(5,6,8,0.96)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <button
                  key={link.to}
                  onClick={() => handleSectionClick(link.to)}
                  className="block w-full py-3 px-3 text-sm font-medium text-left focus:outline-none transition-colors rounded-lg"
                  style={{
                    color: isActive ? "var(--foreground)" : "var(--foreground-secondary)",
                    background: isActive ? "rgba(124,108,244,0.12)" : "transparent",
                    border: isActive ? "1px solid rgba(124,108,244,0.25)" : "1px solid transparent",
                  }}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
                    )}
                    {link.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
