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
  title: "YES2WIN Promotions | Latest Offers & Rewards",
  description:
    "Explore YES2WIN promotion types including welcome offers, deposit campaigns, weekly promotions, rebates and VIP benefits. Verify live terms on the official platform.",
  path: "/promotions/",
});

export default function PromotionsPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Promotions"
        description="Explore YES2WIN promotion types and rewards structure."
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
        title="YES2WIN promotions hub"
        description="A structured overview of promotion types. Exact percentages, amounts and wagering requirements are intentionally left configurable so live platform terms remain the source of truth."
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
                    <span className="font-semibold text-ink">Eligibility:</span> {promo.eligibility}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Terms:</span> {promo.termsNote}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <CtaLink cta="register" size="sm">
                    Register Now
                  </CtaLink>
                  <Link href="/terms/" className="text-sm font-semibold text-brand-700">
                    Terms overview →
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/vip/">VIP benefits</Link>
            <Link href="/faq/#promotions">Promotions FAQ</Link>
            <Link href="/games/">Browse games</Link>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
