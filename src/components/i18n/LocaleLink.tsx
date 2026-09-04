"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/i18n/config";
import { isInternalPath, localizePath } from "@/i18n/paths";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  locale?: Locale;
};

/** Internal Link that preserves the active locale prefix. */
export function LocaleLink({ href, locale, ...props }: LocaleLinkProps) {
  const pathname = usePathname() || "/";
  const activeLocale = locale ?? getLocaleFromPathname(pathname);
  const resolved = isInternalPath(href) ? localizePath(href, activeLocale) : href;
  return <Link href={resolved} {...props} />;
}
