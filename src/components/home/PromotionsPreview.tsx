import Link from "next/link";
import { promotions } from "@/config/content/promotions";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";

export function PromotionsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Promotions"
            title="Offers structured for clarity"
            description="Browse promotion types without invented percentages. Live terms always live on the official platform."
          />
          <CtaLink href="/promotions/" variant="secondary">
            View Promotions
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promotions.slice(0, 3).map((promo) => (
            <Card key={promo.id}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{promo.category}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{promo.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{promo.description}</p>
              <Link href="/promotions/" className="mt-5 inline-flex text-sm font-semibold text-brand-700">
                Review details →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
