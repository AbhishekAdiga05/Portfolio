import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../../data/portfolio-data";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-5 sm:px-6">
      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[2px]" style={{ background: "rgba(124,108,244,0.45)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>
              Blog
            </span>
          </div>
          <h1 className="mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            Blog &amp; Write-ups
          </h1>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--foreground-secondary)", lineHeight: 1.8 }}>
            Notes on full-stack development, AI tooling, and what I'm building and learning.
          </p>
        </ScrollReveal>

        {blogPosts.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            No posts yet — more coming soon.
          </p>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={item}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group relative block rounded-[24px] border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 leading-snug" style={{ color: "var(--foreground)" }}>
                      {post.title}
                    </h2>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--foreground-secondary)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs mb-4" style={{ color: "var(--foreground-muted)" }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full border"
                        style={{ color: "var(--foreground-muted)", borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

        <p className="mt-12 text-sm" style={{ color: "var(--foreground-muted)" }}>
          More posts coming soon — check back later.
        </p>
      </div>
    </div>
  );
}
