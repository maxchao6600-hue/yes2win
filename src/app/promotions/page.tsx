import Link from "next/link";
import { promotions } from "@/config/content/promotions";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Promotions | Offers & Rewards",
  description:
    "Understand YES2WIN promotion types — welcome offers, deposit campaigns, weekly promotions, rebates and VIP benefits — then check live terms on the platform.",
  path: "/promotions/",
});

export default function PromotionsPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Promotions"
        description="Promotion types available across the YES2WIN experience."
        path="/promotions/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Promotions", path: "/promotions/" },
        ]}
      />
      <PageHero
        eyebrow="Promotions"
        title="Offers explained clearly"
        description="Learn how each promotion type works before you opt in. Live percentages, amounts and wagering always come from the official platform — not from invented figures here."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Promotions" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/games/" variant="secondary">
              Explore Games
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {promotions.map((promo) => (
              <Card key={promo.id} className={promo.featured ? "border-brand-300 ring-1 ring-brand-200" : undefined}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{promo.category}</p>
                  {promo.featured ? (
                    <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-3 text-2xl font-bold text-ink">{promo.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{promo.description}</p>
                <div className="mt-5 space-y-3 rounded-xl bg-brand-50/80 p-4 text-sm text-ink-muted">
                  <p>
                    <span className="font-semibold text-ink">Who it is for:</span> {promo.whoFor}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">How to check eligibility:</span> {promo.howToCheck}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Where to find terms:</span> {promo.whereTerms}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <CtaLink cta="register" size="sm">
                    Register Now
                  </CtaLink>
                  <Link href="/terms/" className="text-sm font-semibold text-brand-700">
                    Site terms →
                  </Link>
                  <Link href="/faq/#promotions" className="text-sm font-semibold text-brand-700">
                    Promotions FAQ →
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/games/">Browse games</Link>
            <Link href="/vip/">VIP benefits</Link>
            <Link href="/faq/#promotions">Promotions FAQ</Link>
            <Link href="/terms/">Terms overview</Link>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
