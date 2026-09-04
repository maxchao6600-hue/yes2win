import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MediaCard({
  src,
  alt,
  title,
  description,
  href,
  cta,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.55)] transition duration-300 hover:-translate-y-1 hover:border-brand-300",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
        {href && cta ? (
          <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
            {cta} →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function SplitMedia({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  tone = "white",
  actions,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "white" | "green" | "dark";
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <SectionHeading
              light={tone === "dark"}
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            {children}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_80px_-40px_rgba(2,44,34,0.75)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function IconFeatureGrid({
  items,
}: {
  items: Array<{ title: string; description: string; icon?: string }>;
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-line bg-white/90 p-5 shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
        >
          {item.icon ? (
            <div className="relative mb-4 h-12 w-12 overflow-hidden rounded-xl">
              <Image src={item.icon} alt="" fill sizes="48px" className="object-cover" />
            </div>
          ) : (
            <div className="mb-4 h-2 w-10 rounded-full bg-brand-500" />
          )}
          <h3 className="text-lg font-bold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function StepRail({
  steps,
}: {
  steps: Array<{ step: string; title: string; description: string }>;
}) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((item) => (
        <div key={item.step} className="rounded-2xl border border-brand-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{item.step}</p>
          <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function RelatedLinks({
  links,
}: {
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.href + link.label}
          href={link.href}
          className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:border-brand-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function PrimaryCtaRow({
  primary = "register",
  secondaryHref,
  secondaryLabel,
}: {
  primary?: "register" | "login" | "partner";
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <>
      <CtaLink cta={primary} size="lg">
        {primary === "partner" ? "Become a Partner" : primary === "login" ? "Login" : "Register Now"}
      </CtaLink>
      {secondaryHref && secondaryLabel ? (
        <CtaLink href={secondaryHref} variant="secondary" size="lg">
          {secondaryLabel}
        </CtaLink>
      ) : (
        <CtaLink cta="login" variant="outline" size="lg">
          Login
        </CtaLink>
      )}
    </>
  );
}
