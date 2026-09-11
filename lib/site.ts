export const site = {
  name: "The AI Company of Texas",
  legalName: "AICOTX LLC",
  url: "https://aicotx.com",
  email: "hello@aicotx.com",
  description:
    "An applied-AI consultancy. We place your company on a six-level AI maturity ladder and sell exactly one rung of climb at a time — scoped, priced, and proven in your environment.",
} as const;

import type { Metadata } from "next";

/** Per-page metadata. openGraph is replaced wholesale by page exports, so every page sets it fully here. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle = `${title} — ${site.name}`,
  ogDescription = description,
  type = "website",
}: {
  title: string;
  description: string;
  path: `/${string}/`;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title: ogTitle,
      description: ogDescription,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: ["/opengraph-image.png"] },
  };
}
