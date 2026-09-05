import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  tone = "green",
  image,
  imageAlt = "YES2WIN page visual",
  crumbsLabel,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  tone?: "green" | "dark";
  image?: string;
  imageAlt?: string;
  crumbsLabel?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16",
        !image && (tone === "dark" ? "surface-dark" : "surface-green"),
        image && "min-h-[420px] text-white sm:min-h-[480px]",
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,44,34,0.92)_0%,rgba(2,44,34,0.74)_42%,rgba(2,44,34,0.42)_100%)]" />
        </>
      ) : (
        <>
          <div className="glow-orb left-[-4rem] top-10 h-48 w-48 opacity-50" />
          <div className="glow-orb right-[-2rem] top-24 h-56 w-56 opacity-40" />
        </>
      )}
      <Container className="relative">
        <Breadcrumbs
          items={crumbs}
          label={crumbsLabel}
          className={
            image || tone === "dark"
              ? "[&_a]:text-brand-100 [&_span]:text-brand-50"
              : undefined
          }
        />
        {eyebrow ? (
          <Badge tone={image || tone === "dark" ? "light" : "brand"} className="mb-4">
            {eyebrow}
          </Badge>
        ) : null}
        <h1
          className={cn(
            "max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl",
            image || tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            image || tone === "dark" ? "text-brand-50/90" : "text-ink-muted",
          )}
        >
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </div>
  );
}
