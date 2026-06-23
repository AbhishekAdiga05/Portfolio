import { useRef, useState } from "react";
import { motion } from "motion/react";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  style,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16;

    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const commonProps = {
    ref,
    className,
    onClick,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    transition: { type: "spring", stiffness: 260, damping: 22, mass: 0.2 },
    whileTap: { scale: 0.97 },
    style: { ...style, transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` },
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps}>
      {children}
    </motion.button>
  );
}
