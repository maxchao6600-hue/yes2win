import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const trailingSlash = (path: string) => {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = trailingSlash(path);
  return normalized === "/" ? `${base}/` : `${base}${normalized}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.identity,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/images/og/og-default.png"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.identity} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/images/og/og-default.png")],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
