import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { gameCategories } from "@/config/content/games";
import { localizePath } from "@/i18n/paths";

/**
 * Production sitemap for yes2winpartner.com.
 *
 * Intentionally omits MetadataRoute `alternates` / xhtml:link entries.
 * Chromium (and some other browsers) flatten sitemaps that declare
 * xmlns:xhtml into concatenated plain text, which looks malformed even
 * though the bytes are valid XML. Hreflang remains on page HTML via
 * `buildMetadata` — it does not need to live in the sitemap file.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Always emit the canonical production host — never preview/localhost/env variants.
  const base = "https://yes2winpartner.com";
  // Stable lastmod for caching; bump when routes meaningfully change.
  const lastModified = new Date(siteConfig.legal.lastUpdated);

  const core = [
    "/",
    "/about/",
    "/games/",
    "/register-guide/",
    "/account-guide/",
    "/guides/",
    "/promotions/",
    "/vip/",
    "/payment/",
    "/mobile/",
    "/partner/",
    "/faq/",
    "/contact/",
    "/responsible-gaming/",
    "/terms/",
    "/privacy/",
  ];

  const categories = gameCategories.map((category) => category.path);
  const routes = [...core, ...categories];

  const priorityFor = (route: string) => {
    if (route === "/") return 1;
    if (route.startsWith("/games") || route === "/promotions/" || route === "/partner/") return 0.9;
    return 0.7;
  };

  return routes.flatMap((route) => {
    const enPath = localizePath(route, "en");
    const zhPath = localizePath(route, "zh-cn");
    const changeFrequency = route === "/" ? ("weekly" as const) : ("monthly" as const);
    const priority = priorityFor(route);

    return [
      {
        url: `${base}${enPath === "/" ? "/" : enPath}`,
        lastModified,
        changeFrequency,
        priority,
      },
      {
        url: `${base}${zhPath}`,
        lastModified,
        changeFrequency,
        priority: Math.round(priority * 0.9 * 10) / 10,
      },
    ];
  });
}
