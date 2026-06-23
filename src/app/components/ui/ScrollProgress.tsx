import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? scrollTop / height : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[90] h-px pointer-events-none" aria-hidden="true">
      <motion.div
        className="h-full"
        style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-secondary))", boxShadow: "0 0 18px rgba(124,108,246,0.55)" }}
        animate={{ scaleX: progress }}
        transition={{ duration: 0.08 }}
      />
    </div>
  );
}
