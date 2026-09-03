import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { ctaHref, externalRel, isExternalHref, cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

type CtaLinkProps = {
  href?: string;
  cta?: "register" | "login" | "partner";
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  externalKind?: "cta" | "default";
};

export function CtaLink({
  href,
  cta,
  children,
  variant = "primary",
  size = "md",
  className,
  externalKind = "cta",
}: CtaLinkProps) {
  const resolved = href ?? (cta ? ctaHref(cta) : "/");
  const external = isExternalHref(resolved);
  const classes = buttonClasses({ variant, size, className });

  if (external) {
    return (
      <a
        href={resolved}
        target="_blank"
        rel={externalRel(externalKind)}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={resolved} className={classes}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  externalKind = "default",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  externalKind?: "cta" | "default";
}) {
  const external = isExternalHref(href);
  const classes = cn(
    "font-medium text-brand-700 underline-offset-4 hover:underline",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel={externalRel(externalKind)} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
