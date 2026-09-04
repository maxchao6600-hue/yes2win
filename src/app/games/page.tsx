import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CategoryVisual, type IconName } from "@/components/ui/Icon";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Games | Slots, Live Casino, Sports & More",
  description:
    "Browse YES2WIN game categories — slots, live casino, sports, fishing and lottery — then continue to the official platform lobby.",
  path: "/games/",
});

const iconMap: Record<string, IconName> = {
  slots: "slots",
  "live-casino": "live",
  sports: "sports",
  fishing: "fishing",
  lottery: "lottery",
};

export default function GamesPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Games"
        description="Explore YES2WIN game categories."
        path="/games/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Games", path: "/games/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="Games"
        title="Five ways to play on YES2WIN"
        description="Explore the main entertainment categories, then register or log in to open the live lobby for titles available in your region."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Games" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/promotions/" variant="outline">
              View Promotions
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">All categories</h2>
            <p className="mt-3 text-ink-muted">
              Each category page explains what to expect, how mobile play works and where to find related offers —
              without inventing individual game catalogues.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gameCategories.map((category) => (
              <Card key={category.id} id={category.id} className="scroll-mt-28 flex flex-col">
                <CategoryVisual name={iconMap[category.id] ?? "spark"} />
                <h2 className="mt-5 text-2xl font-bold text-ink">{category.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{category.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaLink href={category.href} variant="secondary" size="sm">
                    {category.ctaLabel}
                  </CtaLink>
                  <CtaLink cta="register" size="sm">
                    Play now
                  </CtaLink>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-4 rounded-3xl border border-line bg-brand-50/60 p-6 md:grid-cols-4">
            <Link href="/promotions/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Related promotions
            </Link>
            <Link href="/vip/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              VIP experience
            </Link>
            <Link href="/payment/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Payment guide
            </Link>
            <Link href="/faq/#games" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Games FAQ
            </Link>
          </div>
        </Container>
      </Section>

      <FinalCta title="Enter the YES2WIN lobby" description="Register or log in to browse live game categories on the official platform." />
    </>
  );
}
