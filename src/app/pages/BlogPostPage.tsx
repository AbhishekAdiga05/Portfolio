import { Fragment } from "react";
import { Link, useParams } from "react-router";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "../../data/portfolio-data";
import type { BlogBlock } from "../../data/portfolio-data";

// Renders inline `**bold**` markers from the block text into <strong> elements.
function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold" style={{ color: "var(--foreground)" }}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 1.75rem)", fontWeight: 650, letterSpacing: "-0.02em" }}>
          {renderInline(block.text)}
        </h2>
      );
    case "list":
      return (
        <ul className="my-5 space-y-2 list-disc pl-5">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          className="my-8 rounded-2xl border-l-2 p-5"
          style={{
            borderLeftColor: "var(--primary)",
            background: "rgba(124,108,244,0.06)",
            borderColor: "rgba(124,108,244,0.2)",
            color: "var(--foreground)",
          }}
        >
          <p className="text-base sm:text-lg font-medium leading-relaxed">{renderInline(block.text)}</p>
        </blockquote>
      );
    case "paragraph":
    default:
      return (
        <p className="my-4 leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
          {renderInline(block.text)}
        </p>
      );
  }
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4 text-2xl font-semibold" style={{ color: "var(--foreground)" }}>
            Post not found
          </h1>
          <p className="mb-8 text-sm" style={{ color: "var(--foreground-muted)" }}>
            This post doesn't exist or may have moved.
          </p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--primary)" }}>
            <ArrowLeft size={15} /> Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-24 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
          style={{ color: "var(--foreground-muted)" }}
        >
          <ArrowLeft size={15} /> All posts
        </Link>

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--primary)" }}>
          Blog
        </p>
        <h1 className="mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pb-8 mb-8" style={{ color: "var(--foreground-muted)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
          <span className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full border"
                style={{ color: "var(--foreground-secondary)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {tag}
              </span>
            ))}
          </span>
        </div>

        <div>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
            More posts coming soon.
          </p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold shrink-0" style={{ color: "var(--primary)" }}>
            Back to all posts <ArrowLeft size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
