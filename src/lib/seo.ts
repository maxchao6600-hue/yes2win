import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultLocale, localeOg, type Locale } from "@/i18n/config";
import { localizePath, stripLocale } from "@/i18n/paths";
import { pageMetaEn } from "@/i18n/pages/en/meta";
import { pageMetaZh } from "@/i18n/pages/zh-cn/meta";
import type { PageId } from "@/i18n/pages/en/meta";

const trailingSlash = (path: string) => {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = trailingSlash(path);
  return normalized === "/" ? `${base}/` : `${base}${normalized}`;
}

export function getPageMeta(pageId: PageId, locale: Locale) {
  return locale === "zh-cn" ? pageMetaZh[pageId] : pageMetaEn[pageId];
}

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  pageId?: PageId;
  locale?: Locale;
  noIndex?: boolean;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  pageId,
  locale = defaultLocale,
  noIndex = false,
  ogImage = "/opengraph-image",
}: BuildMetadataInput): Metadata {
  const meta = pageId ? getPageMeta(pageId, locale) : null;
  const resolvedTitle = title ?? meta?.title ?? siteConfig.identity;
  const resolvedDescription = description ?? meta?.description ?? siteConfig.description;
  const localizedPath = localizePath(stripLocale(path), locale);
  const url = absoluteUrl(localizedPath);
  const imageUrl = absoluteUrl(ogImage);
  const fullTitle = resolvedTitle.includes("YES2WIN")
    ? resolvedTitle
    : `${resolvedTitle} | YES2WIN`;

  const enPath = stripLocale(path);
  const zhPath = localizePath(enPath, "zh-cn");

  return {
    title: fullTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(enPath),
        "zh-CN": absoluteUrl(zhPath),
        "x-default": absoluteUrl(enPath),
      },
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: resolvedDescription,
      siteName: locale === "zh-cn" ? "YES2WIN 官方合作伙伴" : siteConfig.identity,
      locale: localeOg[locale],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
