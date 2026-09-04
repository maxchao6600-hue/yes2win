import { cache } from "react";
import { headers } from "next/headers";
import { defaultLocale, getLocaleFromPathname, type Locale } from "@/i18n/config";

export const getLocale = cache(async (): Promise<Locale> => {
  const headerStore = await headers();
  const fromHeader = headerStore.get("x-locale");
  if (fromHeader === "zh-cn" || fromHeader === "en") return fromHeader;
  const path = headerStore.get("x-pathname") ?? headerStore.get("x-url") ?? "";
  if (path) return getLocaleFromPathname(path);
  return defaultLocale;
});
