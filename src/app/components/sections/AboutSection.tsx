import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Sparkles, Zap, Layers, Briefcase, Download } from "lucide-react";
import { personalInfo, aboutInfo, resumeLink } from "../../../data/portfolio-data";
import { usePrefersReducedMotion, useIsDesktop } from "../ui/ScrollReveal";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const highlightChips = [
  { icon: Zap, label: aboutInfo.yearsExperience },
  { icon: Layers, label: aboutInfo.experienceDetail },
  { icon: Briefcase, label: aboutInfo.locationDetail },
];

function InterestPills() {
  return (
    <>
      {aboutInfo.interests.map((interest) => (
        <span
          key={interest}
          className="flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap text-sm font-medium"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(255,255,255,0.08)",
            color: "var(--foreground-secondary)",
          }}
        >
          <Sparkles size={14} style={{ color: "var(--primary)" }} />
          {interest}
        </span>
      ))}
    </>
  );
}

export function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);

  // Subtle parallax: the portrait drifts against the scroll direction for depth.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.to(photoWrapRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: photoWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    // Re-measure once the lazy-loaded portrait lands, so the trigger stays accurate.
    const onImgLoad = () => ScrollTrigger.refresh();
    const imgs = sectionRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    return () => {
      ctx.revert();
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
    };
  }, [prefersReducedMotion]);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Centered Heading */}
        <div className="text-center mb-16 sm:mb-20">
<SectionHeading 
            title={<>About <span className="font-serif-accent">Me</span></>}
            
          />
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch max-w-5xl mx-auto"
        >
          {/* Profile card */}
          <motion.div
            variants={item}
            className="lg:col-span-4 lg:row-span-2 relative flex items-center justify-center rounded-[28px] border p-8 lg:p-6"
            style={{
              background: "rgba(124,108,244,0.03)",
              borderColor: "rgba(124,108,244,0.15)",
            }}
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div ref={photoWrapRef} className="relative w-full max-w-[280px] mx-auto will-change-transform">
              {/* Gradient hairline frame + photo */}
              <motion.div
                className="relative z-10 p-[1.5px] rounded-[24px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(124,108,244,0.55), rgba(255,255,255,0.08) 55%, transparent)",
                }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/5] rounded-[23px] overflow-hidden">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.firstName}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Soft inner fade for depth */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 55%, rgba(8,9,14,0.25))" }}
                  />
                </div>
              </motion.div>

              {/* Floating glass status card */}
              {personalInfo.openToWork && (
                <div
                  className="relative z-20 -mt-6 mx-auto w-max flex flex-col gap-1.5 px-4 py-2.5 rounded-2xl border backdrop-blur-md"
                  style={{
                    background: "rgba(15,17,25,0.82)",
                    borderColor: "rgba(255,255,255,0.1)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <span className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap" style={{ color: "#4ade80" }}>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Open to Work
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium whitespace-nowrap" style={{ color: "var(--foreground-secondary)" }}>
                    <MapPin size={13} style={{ color: "var(--primary)" }} />
                    {aboutInfo.location}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            variants={item}
            className="lg:col-span-8 relative rounded-[28px] border p-8 sm:p-10 flex flex-col justify-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--primary)" }}>
              Who I Am
            </p>
            <p className="text-base sm:text-lg leading-[1.7] mb-8" style={{ color: "var(--foreground-secondary)" }}>
              {aboutInfo.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              {highlightChips.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border"
                  style={{
                    background: "rgba(124,108,244,0.05)",
                    borderColor: "rgba(124,108,244,0.18)",
                  }}
                >
                  <Icon size={15} style={{ color: "var(--primary)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="primary" href={resumeLink} target="_blank" rel="noreferrer" icon={<Download size={16} strokeWidth={2.5} />}>
                View Resume
              </Button>
            </div>
          </motion.div>

          {/* Interests card */}
          <motion.div
            variants={item}
            className="lg:col-span-8 relative rounded-[28px] border p-8 sm:p-10 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: "var(--primary)" }}>
              What I&apos;m Into
            </p>

            {/* The marquee's continuous 28s loop costs GPU every frame on mobile — show
                the same pills in a wrapped static layout below 1024px instead. */}
            {prefersReducedMotion || !isDesktop ? (
              <div className="flex flex-wrap gap-3">
                <InterestPills />
              </div>
            ) : (
              <div className="overflow-hidden">
                <div className="animate-marquee">
                  <div className="flex gap-3 pr-3">
                    <InterestPills />
                  </div>
                  <div className="flex gap-3 pr-3" aria-hidden="true">
                    <InterestPills />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
