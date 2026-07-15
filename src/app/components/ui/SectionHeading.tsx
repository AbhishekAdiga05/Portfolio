import { ScrollReveal } from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-14 max-w-3xl ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-10" style={{ background: "rgba(124,108,244,0.45)" }} />
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: "var(--primary)" }}>
          {eyebrow}
        </p>
      </div>
      <h2
        className="mb-4 text-foreground"
        style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 650, letterSpacing: "-0.025em", lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-foreground-secondary text-lg font-light leading-relaxed">
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
