import Link from "next/link";
import { partnerContent } from "@/config/content/partner";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function PartnerPreview() {
  return (
    <Section tone="green">
      <Container>
        <SectionHeading
          eyebrow="Partner"
          title="Build with the YES2WIN ecosystem"
          description="A structured partner journey focused on access, sharing and progress — without guaranteed income claims."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {partnerContent.journey.map((step) => (
            <div key={step.step} className="rounded-2xl border border-brand-200 bg-white/85 p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{step.step}</p>
              <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink cta="partner">Become a Partner</CtaLink>
          <Link href="/partner/" className="inline-flex items-center text-sm font-semibold text-brand-800">
            Explore the partner page →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
