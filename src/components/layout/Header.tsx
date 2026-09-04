"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { siteConfig } from "@/config/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { cn } from "@/lib/utils";
import { getLocaleFromPathname, localeLabels, type Locale } from "@/i18n/config";
import { localizePath, switchLocalePath } from "@/i18n/paths";
import { getMoreNav, getPrimaryNav, getDictionary } from "@/i18n/get-content";

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getDictionary(locale);
  const primary = getPrimaryNav(locale);
  const more = getMoreNav(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langMenuId = useId();
  const isHome = pathname === "/" || pathname === "/zh-cn" || pathname === "/zh-cn/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open && !langOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, langOpen]);

  const isActive = (href: string) => {
    const localized = localizePath(href.replace(/^\/zh-cn/, "") || "/", locale);
    if (localized === "/" || localized === "/zh-cn/") {
      return pathname === "/" || pathname === "/zh-cn" || pathname === "/zh-cn/";
    }
    return pathname === localized || pathname.startsWith(localized);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        solid
          ? "border-b border-line bg-white/95 shadow-[0_10px_30px_-20px_rgba(6,78,59,0.55)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid h-16 w-[min(100%-1.5rem,86rem)] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-5 sm:gap-x-6 lg:h-[4.5rem] xl:gap-x-8 2xl:gap-x-10">
        <LocaleLink
          href="/"
          className="flex w-max max-w-full min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={siteConfig.logo.src}
            alt={ui.brand.logoAlt}
            width={140}
            height={42}
            className={cn("h-9 w-auto shrink-0", !solid && "brightness-0 invert")}
            priority
            fetchPriority="high"
          />
          <span
            className={cn(
              "hidden whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.12em] sm:inline",
              solid ? "text-brand-700" : "text-brand-100",
            )}
          >
            {ui.officialPartner}
          </span>
        </LocaleLink>

        <div className="flex min-w-0 items-center justify-center">
          <nav aria-label={ui.nav.primaryLabel} className="hidden min-w-0 items-center gap-0.5 xl:flex 2xl:gap-1">
            {primary.map((item) => {
              const active = isActive(item.href);
              return (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-lg px-1.5 py-2 text-sm font-medium transition 2xl:px-2.5",
                    solid
                      ? active
                        ? "bg-brand-50 text-brand-800"
                        : "text-ink/80 hover:bg-brand-50 hover:text-brand-800"
                      : active
                        ? "bg-white/15 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {item.label}
                </LocaleLink>
              );
            })}
            <div className="group relative shrink-0">
              <button
                type="button"
                className={cn(
                  "whitespace-nowrap rounded-lg px-1.5 py-2 text-sm font-medium transition 2xl:px-2.5",
                  solid
                    ? "text-ink/80 hover:bg-brand-50 hover:text-brand-800"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                )}
                aria-haspopup="menu"
              >
                {ui.more}
              </button>
              <div className="invisible absolute left-0 top-full z-20 min-w-[220px] translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {more.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-800"
                  >
                    {item.label}
                  </LocaleLink>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <LanguageSwitcher
            locale={locale}
            pathname={pathname}
            solid={solid}
            open={langOpen}
            setOpen={setLangOpen}
            menuId={langMenuId}
            label={ui.selectLanguage}
          />
          <CtaLink
            cta="login"
            variant={solid ? "secondary" : "outline"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {ui.login}
          </CtaLink>
          <CtaLink cta="register" size="sm" className="hidden sm:inline-flex">
            {ui.registerNow}
          </CtaLink>
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl xl:hidden",
              solid
                ? "border border-line bg-white/80 text-ink"
                : "border border-white/25 bg-white/10 text-white",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{ui.nav.menu}</span>
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white px-4 pb-28 pt-4 xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label={ui.nav.mobilePrimaryLabel} className="space-y-1">
          {[...primary, ...more].map((item) => {
            const active = isActive(item.href);
            return (
              <LocaleLink
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-semibold hover:bg-brand-50",
                  active ? "bg-brand-50 text-brand-800" : "text-ink",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </LocaleLink>
            );
          })}
        </nav>
        <div className="mt-6 grid gap-3">
          <div className="grid grid-cols-2 gap-2">
            {(["en", "zh-cn"] as Locale[]).map((code) => (
              <Link
                key={code}
                href={switchLocalePath(pathname, code)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-center text-sm font-semibold",
                  locale === code
                    ? "border-brand-600 bg-brand-50 text-brand-800"
                    : "border-line text-ink hover:bg-brand-50",
                )}
                hrefLang={code === "zh-cn" ? "zh-CN" : "en"}
                onClick={() => setOpen(false)}
              >
                {localeLabels[code].native}
              </Link>
            ))}
          </div>
          <CtaLink cta="login" variant="secondary" size="lg" className="w-full">
            {ui.login}
          </CtaLink>
          <CtaLink cta="register" size="lg" className="w-full">
            {ui.registerNow}
          </CtaLink>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  locale,
  pathname,
  solid,
  open,
  setOpen,
  menuId,
  label,
}: {
  locale: Locale;
  pathname: string;
  solid: boolean;
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  menuId: string;
  label: string;
}) {
  return (
    <div className="relative hidden md:block">
      <button
        type="button"
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold uppercase tracking-wide",
          solid
            ? "border-line bg-white text-ink-muted hover:text-brand-800"
            : "border-white/25 bg-white/10 text-white hover:bg-white/15",
        )}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {localeLabels[locale].short}
        <span aria-hidden className="text-[0.65rem] opacity-70">
          ▾
        </span>
      </button>
      {open ? (
        <div
          id={menuId}
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full z-30 mt-2 min-w-[9.5rem] overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-xl"
        >
          {(["en", "zh-cn"] as Locale[]).map((code) => (
            <Link
              key={code}
              role="option"
              aria-selected={locale === code}
              href={switchLocalePath(pathname, code)}
              hrefLang={code === "zh-cn" ? "zh-CN" : "en"}
              className={cn(
                "block rounded-xl px-3 py-2 text-sm font-semibold",
                locale === code ? "bg-brand-50 text-brand-800" : "text-ink hover:bg-brand-50",
              )}
              onClick={() => setOpen(false)}
            >
              {localeLabels[code].native}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
