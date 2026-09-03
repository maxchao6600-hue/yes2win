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
    "Explore YES2WIN game categories including slots, live casino, sports, fishing and lottery — organised for clear discovery through this official partner portal.",
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
        title="YES2WIN game categories"
        description="A category-level guide to the YES2WIN entertainment mix. Discover each vertical, then continue to the official platform for the live lobby experience."
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

      <Section id="all-games" tone="white">
        <Container>
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">All Games</h2>
            <p className="mt-3 text-ink-muted">
              YES2WIN organises entertainment across multiple categories so members can move between different styles of
              play. This page focuses on clear category introductions rather than thin, fabricated game detail pages.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gameCategories.map((category) => (
              <Card key={category.id} id={category.id} className="scroll-mt-28">
                <CategoryVisual name={iconMap[category.id] ?? "spark"} />
                <h2 className="mt-5 text-2xl font-bold text-ink">{category.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{category.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaLink cta="register" size="sm">
                    {category.ctaLabel}
                  </CtaLink>
                  <Link href="/faq/#games" className="text-sm font-semibold text-brand-700">
                    Games FAQ →
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-4 rounded-3xl border border-line bg-brand-50/60 p-6 md:grid-cols-3">
            <Link href="/promotions/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Related: Promotions
            </Link>
            <Link href="/vip/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Related: VIP experience
            </Link>
            <Link href="/payment/" className="rounded-2xl bg-white p-4 font-semibold text-ink hover:text-brand-700">
              Related: Payment guide
            </Link>
          </div>
        </Container>
      </Section>

      <FinalCta title="Enter the YES2WIN lobby" description="Register or log in to access games on the official platform." />
    </>
  );
}
