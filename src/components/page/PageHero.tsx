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
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  tone?: "green" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16",
        tone === "dark" ? "surface-dark" : "surface-green",
      )}
    >
      <div className="glow-orb left-[-4rem] top-10 h-48 w-48 opacity-50" />
      <div className="glow-orb right-[-2rem] top-24 h-56 w-56 opacity-40" />
      <Container>
        <Breadcrumbs
          items={crumbs}
          className={tone === "dark" ? "[&_a]:text-brand-100 [&_span]:text-brand-50" : undefined}
        />
        {eyebrow ? (
          <Badge tone={tone === "dark" ? "light" : "brand"} className="mb-4">
            {eyebrow}
          </Badge>
        ) : null}
        <h1
          className={cn(
            "max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-brand-100/90" : "text-ink-muted",
          )}
        >
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </div>
  );
}
