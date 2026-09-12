import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Desktop-only crosshair cursor. A small "+" that trails the pointer with a light
// spring in mix-blend-difference, and enlarges over anything interactive. The
// native cursor stays visible — this is a design accent, not a replacement.
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.6 });
  const y = useSpring(my, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const set = () => setEnabled(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(
        !!t &&
          t.closest("a, button, input, textarea, select, [role='button'], label, img, .cursor-pointer") !== null
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ x, y }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18">
        <motion.g
          animate={{ scale: hovering ? 1.35 : 1, opacity: hovering ? 1 : 0.55 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          style={{ originX: "9px", originY: "9px" }}
        >
          <line
            x1="9"
            y1="1.25"
            x2="9"
            y2="16.75"
            stroke="var(--foreground)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <line
            x1="1.25"
            y1="9"
            x2="16.75"
            y2="9"
            stroke="var(--foreground)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="0.75" fill="var(--foreground)" />
        </motion.g>
      </svg>
    </motion.div>
  );
}