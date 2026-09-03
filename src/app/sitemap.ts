import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = [
    "/",
    "/about/",
    "/games/",
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

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "/" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/games/" || route === "/promotions/" ? 0.9 : 0.7,
  }));
}
