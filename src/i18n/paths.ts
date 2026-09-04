import { defaultLocale, localePrefix, type Locale } from "@/i18n/config";

const trailingSlash = (path: string) => {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
};

/** Split `/faq/#payments` into its pathname and its `?`/`#` suffix. */
function splitSuffix(path: string): [string, string] {
  const index = path.search(/[?#]/);
  if (index === -1) return [path, ""];
  return [path.slice(0, index), path.slice(index)];
}

/** Strip locale prefix → English pathname */
export function stripLocale(pathname: string): string {
  const [path, suffix] = splitSuffix(pathname);
  if (path === `/${localePrefix}` || path === `/${localePrefix}/`) return `/${suffix}`;
  if (path.startsWith(`/${localePrefix}/`)) {
    const rest = path.slice(localePrefix.length + 1);
    return `${trailingSlash(rest.startsWith("/") ? rest : `/${rest}`)}${suffix}`;
  }
  return `${trailingSlash(path)}${suffix}`;
}

/** Localize an internal path for the active locale (idempotent). */
export function localizePath(path: string, locale: Locale): string {
  const [english, suffix] = splitSuffix(stripLocale(path));
  if (locale === defaultLocale) return `${english}${suffix}`;
  if (english === "/") return `/${localePrefix}/${suffix}`;
  return `/${localePrefix}${english}${suffix}`;
}

/** Switch current path to another locale, preserving page context */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(pathname, target);
}

export function isInternalPath(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}
