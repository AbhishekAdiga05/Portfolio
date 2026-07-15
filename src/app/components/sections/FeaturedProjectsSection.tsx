import { useNavigate } from "react-router";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { featuredProjects } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

function ProjectCard({ p, i }: { p: typeof featuredProjects[0]; i: number }) {
  const navigate = useNavigate();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(mouseYSpring, [0, 1], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-6deg", "6deg"]);

  const imgX = useTransform(mouseXSpring, [0, 1], [-8, 8]);
  const imgY = useTransform(mouseYSpring, [0, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => { x.set(0.5); y.set(0.5); };

  const directions = [
    { x: -30, y: 10 },
    { x: 0, y: 30 },
    { x: 30, y: 10 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[i] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/projects")}
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full cursor-pointer rounded-2xl overflow-hidden bg-[#0A0C14] border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(124,108,244,0.06)]"
      >
        {/* Gradient hover wash */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{
            background: "linear-gradient(135deg, rgba(124,108,244,0.08), transparent 60%)",
          }}
        />

        {/* Number watermark */}
        <div className="absolute -top-6 -right-4 text-[90px] font-black leading-none opacity-[0.035] pointer-events-none select-none z-0"
          style={{ color: "var(--primary)" }}>
          {p.number}
        </div>

        {/* Image */}
        <div className="relative overflow-hidden h-44 sm:h-48">
          <motion.div className="w-full h-full" style={{ x: imgX, y: imgY }}>
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0C14] via-[#0A0C14]/60 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm bg-black/40 border border-white/10"
              style={{ color: "var(--primary)" }}>
              {p.number}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5">
          <h3 className="text-lg font-bold mb-1 tracking-tight" style={{ color: "var(--foreground)" }}>
            {p.title}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground-secondary)" }}>
            {p.subtitle}
          </p>
          <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--foreground-muted)" }}>
            {p.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-md border border-white/[0.08] font-medium"
                style={{ background: "rgba(124,108,244,0.06)", color: "var(--primary)" }}>
                {t}
              </span>
            ))}
            {p.tags.length > 4 && (
              <span className="text-[10px] px-2 py-0.5" style={{ color: "var(--foreground-muted)" }}>
                +{p.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-2 pt-3 border-t border-white/[0.06]">
            <motion.a
              href={p.github} target="_blank" rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-xs font-medium transition-all duration-200 border border-white/[0.08] hover:border-white/[0.15]"
              style={{ background: "rgba(255,255,255,0.03)", color: "var(--foreground-secondary)" }}
            >
              <Github size={13} /> Code
            </motion.a>
            <motion.a
              href={p.live} target="_blank" rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
            >
              <ExternalLink size={13} /> Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const displayProjects = featuredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Works"
            description="Some of the projects I've built — from full-stack apps to developer tools."
            className="mb-0"
          />
          <Button 
            variant="secondary" 
            to="/projects" 
            iconRight 
            icon={<ArrowRight size={16} />}
            className="hidden sm:flex"
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {displayProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button 
            variant="secondary" 
            to="/projects" 
            iconRight 
            icon={<ArrowRight size={16} />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
