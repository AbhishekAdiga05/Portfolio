import { Outlet, useLocation } from "react-router";
import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { usePrefersReducedMotion } from "./components/ui/ScrollReveal";

export function Root() {
  const { pathname } = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  // The monogram parallax descends and rotates with the scroll position, but that
  // re-writes a huge composited layer every scroll frame. Fine on a mouse; on mobile
  // the fixed background + film grain already tax the GPU, so the monogram stays put.
  const [desktopMotion, setDesktopMotion] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion) {
      setDesktopMotion(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setDesktopMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  // The monogram double-click stamp — a little ink-pulse easter egg. Each press
  // re-triggers the keyframed pulse via a counter key; harmless, low-cost, off by default.
  const [stampCount, setStampCount] = useState(0);
  const stampRuns = stampCount > 0;

  // Scroll-linked drift on the signature monogram — it rides up as the page
  // scrolls, like paint on glass. Parallax only on desktop: on mobile this layer
  // (fixed background + film grain) is already the heaviest composite, so the
  // monogram stays static there instead of forcing a re-composite each frame.
  const monogramY = useTransform(scrollYProgress, [0, 1], ["0%", desktopMotion ? "-28%" : "0%"]);
  const monogramRotate = useTransform(scrollYProgress, [0, 1], [0, desktopMotion ? -4 : 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative" style={{ background: "var(--background)" }}>
      {/* Scroll progress hairline */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, var(--primary), var(--accent-secondary))",
        }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" style={{ background: "var(--background)" }}>
        {/* Pure black base — blue only ever arrives as a faint hint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, #050609 0%, #04050A 42%, #020307 100%)",
          }}
        />

        {/* Single key light — a soft window-shaped source, like studio light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(820px 460px ellipse at 16% -8%, rgba(88,118,206,0.14), transparent 62%)",
          }}
        />

        {/* Architectural hairline — vertical rules, quiet and precise */}
        <div
          className="absolute right-[9%] inset-y-[7%] w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.05) 50%, transparent)",
          }}
        />
        <div
          className="absolute right-[17%] inset-y-[15%] w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 50%, transparent)",
          }}
        />

        {/* Giant serif monogram — its resolution appears only at the corner, like a print signature.
            Outer layer: scroll parallax (desktop only). Inner layer: the ink-stamp pulse
            that fires on click — a tiny signature easter egg. */}
        <motion.div
          className="absolute -right-[3vw] -bottom-[9vw]"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "min(38vw, 30rem)",
            lineHeight: 0.75,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.1)",
            userSelect: "none",
            y: monogramY,
            rotate: monogramRotate,
          }}
        >
          <motion.div
            key={stampCount}
            initial={false}
            animate={
              stampRuns
                ? { scale: [1, 1.18, 0.96, 1.04, 1], rotate: prefersReducedMotion ? 0 : [0, -2, 1.5, -1, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ cursor: "pointer", transformOrigin: "50% 70%" }}
            onClick={() => setStampCount((c) => c + 1)}
            role="button"
            tabIndex={-1}
            aria-hidden="true"
          >
            A.
          </motion.div>
        </motion.div>

        {/* Vignette — keeps the edges sinking into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 130% 110% at 50% 36%, transparent 46%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* Film grain — a 160px fractal-noise tile at low opacity. One static
          texture (pure GPU raster, no animation or scroll cost) that strips the
          flat "web page" look and reads as a printed / photographed finish. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 1, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-5 h-5 rounded-full" style={{ background: "var(--primary)" }} /></div>}>
              <Outlet />
            </Suspense>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>

      <CustomCursor />
    </div>
  );
}
