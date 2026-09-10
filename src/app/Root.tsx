import { Outlet, useLocation } from "react-router";
import { Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useIsDesktop } from "./components/ui/ScrollReveal";

export function Root() {
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative" style={{ background: "var(--background)" }}>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" style={{ background: "var(--background)" }}>
        {/* Ambient purple glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px circle at 50% -10%, rgba(124,108,244,0.12), transparent 60%)",
          }}
        />

        {/* Purple Matrix grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,108,244,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,244,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
            maskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
          }}
        />

        {/* Desktop-only ambient mesh gradient (replaces the old particle network — 
            same calm atmosphere without the "template portfolio" dot field) */}
        {isDesktop && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 animate-mesh-drift"
              style={{
                background:
                  "radial-gradient(42% 52% at 18% 28%, rgba(124,108,244,0.10), transparent 68%)," +
                  "radial-gradient(48% 58% at 82% 72%, rgba(92,149,255,0.09), transparent 68%)," +
                  "radial-gradient(32% 42% at 62% 18%, rgba(124,108,244,0.07), transparent 70%)",
              }}
            />
          </div>
        )}
      </div>

      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-5 h-5 rounded-full" style={{ background: "var(--primary)" }} /></div>}>
              <Outlet />
            </Suspense>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
