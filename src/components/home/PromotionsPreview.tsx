import Image from "next/image";
import Link from "next/link";
import { promotions } from "@/config/content/promotions";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const imageMap: Record<string, string> = {
  welcome: "/images/promotions/welcome.webp",
  deposit: "/images/promotions/deposit.webp",
  weekly: "/images/promotions/weekly.webp",
  cashback: "/images/promotions/cashback.webp",
  "vip-benefits": "/images/promotions/vip.webp",
  special: "/images/promotions/special.webp",
};

export function PromotionsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Latest promotions"
            title="Offer types worth checking"
            description="Welcome, deposit, weekly, cashback, VIP and special campaigns are common YES2WIN promotion families. Live amounts stay on the official platform."
          />
          <CtaLink href="/promotions/" variant="secondary">
            View Promotions
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={imageMap[promo.id] ?? "/images/promotions/welcome.webp"}
                  alt={`${promo.title} artwork`}
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
