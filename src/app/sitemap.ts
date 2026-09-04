import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { gameCategories } from "@/config/content/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const core = [
    "/",
    "/about/",
    "/games/",
    "/register-guide/",
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

  return [...core, ...categories].map((route) => ({
    url: `${base}${route === "/" ? "/" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/games") || route === "/promotions/" || route === "/partner/"
          ? 0.9
          : 0.7,
  }));
}
