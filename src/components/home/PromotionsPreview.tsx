import Image from "next/image";
import Link from "next/link";
import { promotions } from "@/config/content/promotions";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function PromotionsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Latest promotions"
            title="Offer types worth checking"
            description="Welcome, deposit, weekly, cashback, VIP and special campaigns — each with its own campaign artwork. Live amounts stay on the official platform."
          />
          <CtaLink href="/promotions/" variant="secondary">
            View Promotions
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={media.promotions[promo.id as keyof typeof media.promotions] ?? media.promotions.welcome}
                  alt={`${promo.title} campaign artwork`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{promo.category}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{promo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{promo.description}</p>
                <Link href="/promotions/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                  Review details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
