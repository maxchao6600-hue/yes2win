import Image from "next/image";
import Link from "next/link";
import { partnerContent } from "@/config/content/partner";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function PartnerPreview() {
  return (
    <Section tone="green">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Partner"
              title="Build with the YES2WIN ecosystem"
              description="Partner access, referral sharing, marketing resources and tracking — without guaranteed income claims."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink cta="partner">Become a Partner</CtaLink>
              <Link href="/partner/" className="inline-flex items-center text-sm font-semibold text-brand-800">
                Explore the partner page →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line">
            <Image
              src="/images/partner/network.webp"
              alt="YES2WIN partner ecosystem network visual"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {partnerContent.journey.map((step) => (
            <div key={step.step} className="rounded-2xl border border-brand-200 bg-white/85 p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{step.step}</p>
              <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
