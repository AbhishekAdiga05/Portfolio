import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { certifications } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";

function CertCard({ cert, i }: { cert: typeof certifications[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 250, damping: 16 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-default border border-white/[0.06] bg-[#0A0C14] transition-colors duration-300"
      >
        {/* Spotlight shine */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124,108,244,0.08), transparent 60%)`,
            }}
          />
        )}

        {/* Top accent bar */}
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
          style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-secondary))" }} />

        {/* Icon */}
        <div className="text-3xl mb-4 mt-3">
          {cert.icon || "📜"}
        </div>

        <h3 className="font-semibold mb-1.5 leading-snug" style={{ color: "var(--foreground)", fontSize: "0.9375rem" }}>
          {cert.name}
        </h3>
        <p className="text-sm mb-4" style={{ color: "var(--foreground-secondary)" }}>
          {cert.issuer}
        </p>

        <div className="flex items-center gap-2 text-xs py-1.5 px-3 rounded-full w-fit"
          style={{ background: "rgba(255,255,255,0.03)", color: "var(--foreground-muted)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <Calendar size={11} />
          {cert.date}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Courses and certifications I've picked up along the way."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={`${cert.name}-${cert.issuer}`} cert={cert} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
