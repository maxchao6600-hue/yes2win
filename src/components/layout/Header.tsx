"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { moreNav, primaryNav } from "@/config/navigation";
import { siteConfig, enabledLanguages } from "@/config/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
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
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
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
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={140}
            height={42}
            className={cn("h-9 w-auto", !solid && "brightness-0 invert")}
            priority
            fetchPriority="high"
          />
          <span
            className={cn(
              "hidden text-xs font-semibold uppercase tracking-[0.16em] sm:inline",
              solid ? "text-brand-700" : "text-brand-100",
            )}
          >
            Official Partner
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-2.5 py-2 text-sm font-medium transition",
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
              </Link>
            );
          })}
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "rounded-lg px-2.5 py-2 text-sm font-medium transition",
                solid
                  ? "text-ink/80 hover:bg-brand-50 hover:text-brand-800"
                  : "text-white/90 hover:bg-white/10 hover:text-white",
              )}
              aria-haspopup="menu"
            >
              More
            </button>
            <div className="invisible absolute left-0 top-full z-20 min-w-[220px] translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {moreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <LanguageSwitcher solid={solid} />
          <CtaLink
            cta="login"
            variant={solid ? "secondary" : "outline"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Login
          </CtaLink>
          <CtaLink cta="register" size="sm" className="hidden sm:inline-flex">
            Register Now
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
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
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
        <nav aria-label="Mobile primary" className="space-y-1">
          {[...primaryNav, ...moreNav].map((item) => {
            const active = isActive(item.href);
            return (
              <Link
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
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 grid gap-3">
          <CtaLink cta="login" variant="secondary" size="lg" className="w-full">
            Login
          </CtaLink>
          <CtaLink cta="register" size="lg" className="w-full">
            Register Now
          </CtaLink>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({ solid }: { solid: boolean }) {
  if (enabledLanguages.length <= 1) {
    return (
      <div
        className={cn(
          "hidden items-center rounded-lg border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide md:inline-flex",
          solid
            ? "border-line bg-white text-ink-muted"
            : "border-white/25 bg-white/10 text-white",
        )}
        aria-label="Language"
      >
        EN
      </div>
    );
  }

  return (
    <label className="hidden md:inline-flex">
      <span className="sr-only">Language</span>
      <select
        className="h-9 rounded-lg border border-line bg-white px-2 text-xs font-semibold"
        defaultValue="en"
        aria-label="Select language"
      >
        {enabledLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
