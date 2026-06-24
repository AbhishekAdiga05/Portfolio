import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { featuredProjects, otherProjects } from "../../../data/portfolio-data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

function TiltMicroCard({ p, i }: { p: typeof featuredProjects[0]; i: number }) {
  const navigate = useNavigate();
  
  // 3D Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse position to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <ScrollReveal delay={i * 0.08}>
      <motion.div
        style={{ perspective: 1000 }}
        className="h-full"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/projects")}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="group relative h-full flex flex-col cursor-pointer rounded-[20px] bg-white/[0.02] border border-white/5 p-3 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-300 shadow-lg"
        >
          {/* Inner 3D Content Wrapper */}
          <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
            
            {/* Small Image Thumbnail */}
            <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-4">
              <img 
                src={p.image} 
                alt={p.title} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Dark overlay that fades on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              
              {/* Floating Number Badge */}
              <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full" 
                    style={{ background: "rgba(0,0,0,0.6)", color: "var(--foreground)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                {p.number}
              </span>
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1 px-1">
              <h3 className="text-lg font-bold mb-1 tracking-wide" style={{ color: "var(--foreground)" }}>
                {p.title}
              </h3>
              <p className="text-[13px] font-medium mb-3" style={{ color: "var(--primary)" }}>
                {p.subtitle}
              </p>
              
              {/* Very short description clamp */}
              <p className="text-[13px] leading-relaxed mb-5 line-clamp-2" style={{ color: "var(--foreground-secondary)" }}>
                {p.description}
              </p>

              <div className="mt-auto pt-4 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Button 
                  variant="ghost" 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  icon={<Github size={12} />}
                  className="w-full text-[11px] h-8 rounded-lg"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  Code
                </Button>
                <Button 
                  variant="secondary" 
                  href={p.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  icon={<ExternalLink size={12} />}
                  className="w-full text-[11px] h-8 rounded-lg bg-white/5"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  Demo
                </Button>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}

export function FeaturedProjectsSection() {
  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Works"
            description="A collection of my best projects, scaled down into interactive 3D micro-cards."
            className="mb-0"
          />
        </div>

        {/* 4-Column Grid to ensure cards are small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {allProjects.map((p, i) => (
            <TiltMicroCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
