import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { gameCategories } from "@/config/content/games";
import { localizePath } from "@/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const core = [
    "/",
    "/about/",
    "/games/",
    "/register-guide/",
    "/account-guide/",
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
    const enUrl = `${base}${localizePath(route, "en")}`;
    const zhUrl = `${base}${localizePath(route, "zh-cn")}`;
    const changeFrequency = route === "/" ? ("weekly" as const) : ("monthly" as const);
    const priority = priorityFor(route);
    const languages = { en: enUrl, "zh-CN": zhUrl, "x-default": enUrl };

    return [
      { url: enUrl, lastModified, changeFrequency, priority, alternates: { languages } },
      {
        url: zhUrl,
        lastModified,
        changeFrequency,
        priority: Math.round(priority * 0.9 * 10) / 10,
        alternates: { languages },
      },
    ];
  });
}
