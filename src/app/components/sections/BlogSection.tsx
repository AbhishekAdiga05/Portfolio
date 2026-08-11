import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// The home page only teases the latest post — full posts live on the /blog page.
const latest = blogPosts[0];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 px-5 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Blog"
          title="From the Blog"
          description="I write about what I'm building and learning. More posts coming soon."
        />

        {latest && (
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-60px" }}
            className="relative overflow-hidden rounded-[28px] border p-8 sm:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(124,108,244,0.08), rgba(255,255,255,0.02))",
              borderColor: "rgba(124,108,244,0.25)",
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4"
              style={{
                color: "var(--primary)",
                borderColor: "rgba(124,108,244,0.35)",
                background: "rgba(124,108,244,0.08)",
              }}
            >
              Latest Post
            </span>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug max-w-2xl" style={{ color: "var(--foreground)" }}>
              {latest.title}
            </h3>
            <p className="text-sm sm:text-base mb-6 max-w-2xl leading-[1.7]" style={{ color: "var(--foreground-secondary)" }}>
              {latest.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs mb-6" style={{ color: "var(--foreground-muted)" }}>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {latest.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {latest.readTime}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/blog/${latest.slug}`}
                className="group inline-flex items-center gap-2 h-10 px-5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: "var(--button-primary)", color: "var(--button-primary-text)" }}
              >
                Read the post
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Button variant="secondary" to="/blog" iconRight icon={<ArrowRight size={15} />}>
                Visit Blog
              </Button>
            </div>
          </motion.div>
        )}

        <p className="mt-8 text-sm" style={{ color: "var(--foreground-muted)" }}>
          More posts coming soon — check back later or head to the{" "}
          <Link to="/blog" style={{ color: "var(--primary)" }}>
            blog
          </Link>{" "}
          to read the latest.
        </p>
      </div>
    </section>
  );
}
