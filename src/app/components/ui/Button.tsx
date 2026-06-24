import { motion, HTMLMotionProps } from "motion/react";
import React from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "ghost" | "status";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  statusColor?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      href,
      to,
      children,
      className = "",
      icon,
      iconRight = false,
      statusColor,
      ...props
    },
    ref
  ) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap";
    
    const isStatus = variant === "status";

    const motionProps = {
      whileHover: { y: isStatus ? -3 : -2, scale: 1.02 },
      whileTap: { scale: 0.96, y: 0 },
      transition: { type: "spring", stiffness: 400, damping: 15 },
      ...props,
    };

    let variantStyles = "";
    let glowStyles = {};

    switch (variant) {
      case "primary":
        variantStyles = "rounded-[10px] bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#101010] border border-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_18px_rgba(0,0,0,0.55)] text-[14px]";
        break;
      case "secondary":
        variantStyles = "rounded-[10px] bg-[#1a1a1a] text-white border border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:bg-[#222222] hover:border-white/[0.12] text-[14px]";
        break;
      case "ghost":
        variantStyles = "rounded-md bg-transparent text-zinc-400 border border-transparent hover:text-white hover:bg-white/5 hover:border-white/10 text-[14px]";
        break;
      case "status":
        variantStyles = "rounded-full bg-white/[0.04] backdrop-blur-[12px] text-zinc-300 border border-white/[0.08] text-[14px] font-medium px-3 py-1 hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]";
        break;
    }

    const sizeStyles = isStatus ? "" : "h-[44px] px-6";
    const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

    const content = (
      <>
        {variant === "status" && statusColor && (
          <motion.span 
            className="w-1.5 h-1.5 rounded-full" 
            style={{ 
              backgroundColor: statusColor, 
              boxShadow: `0 0 10px ${statusColor.replace('rgb', 'rgba').replace(')', ', 0.5)')}` 
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {!iconRight && icon && <span className="flex items-center justify-center">{icon}</span>}
        {children}
        {iconRight && icon && <span className="flex items-center justify-center">{icon}</span>}
      </>
    );

    if (to) {
      return (
        <Link to={to} tabIndex={-1} className="outline-none">
          <motion.button
            ref={ref as any}
            className={combinedClassName}
            style={glowStyles}
            {...motionProps}
          >
            {content}
          </motion.button>
        </Link>
      );
    }

    if (href) {
      return (
        <motion.a
          ref={ref as any}
          href={href}
          className={combinedClassName}
          style={glowStyles}
          {...(motionProps as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        className={combinedClassName}
        style={glowStyles}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
