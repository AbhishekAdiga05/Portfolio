import { motion } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "./ScrollReveal";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  style,
  el: Wrapper = "p",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Wrapper className={className} style={style} ref={ref as any}>
        {text}
      </Wrapper>
    );
  }

  const defaultAnimations = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper className={className} style={style} ref={ref as any}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.4 }}
        transition={{ staggerChildren: 0.035 }}
        aria-hidden
      >
        {text.split(" ").map((word, index) => (
          <span className="inline-block" key={`${word}-${index}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block"
                variants={defaultAnimations}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
