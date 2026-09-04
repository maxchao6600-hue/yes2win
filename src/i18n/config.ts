export const locales = ["en", "zh-cn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localePrefix = "zh-cn";

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  "zh-cn": "zh-CN",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  "zh-cn": "zh_CN",
};

export const localeLabels: Record<Locale, { short: string; native: string }> = {
  en: { short: "EN", native: "English" },
  "zh-cn": { short: "中文", native: "简体中文" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/zh-cn" || pathname === "/zh-cn/" || pathname.startsWith("/zh-cn/")) {
    return "zh-cn";
  }
  return "en";
}
