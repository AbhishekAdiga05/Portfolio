import { useEffect } from "react";

const SITE_URL = "https://abhishekadiga.dev";
const DEFAULT_TITLE = "Abhishek Adiga — Full-Stack Developer & AI Enthusiast";
const DEFAULT_DESCRIPTION =
  "Full-stack developer building web apps with React, Next.js, TypeScript, and AI integrations. B.Tech ISE @ Sahyadri CEM.";

type SeoProps = {
  title?: string;
  description?: string;
  jsonLd?: object;
};

export function Seo({ title, description, jsonLd }: SeoProps) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    document.title = title ? `${title} · Abhishek Adiga` : DEFAULT_TITLE;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description ?? DEFAULT_DESCRIPTION;

    const id = "page-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLdString) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = jsonLdString;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [title, description, jsonLdString]);

  return null;
}

export { SITE_URL };
