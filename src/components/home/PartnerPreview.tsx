import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy, getPartnerContent } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function PartnerPreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).partner;
  const journey: ReadonlyArray<{ step: string; title: string; description: string }> =
    getPartnerContent(locale).journey;

  return (
    <Section tone="green">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink cta="partner">{copy.primaryCta}</CtaLink>
              <Link
                href={localizePath("/partner/", locale)}
                className="inline-flex items-center text-sm font-semibold text-brand-800"
              >
                {copy.secondaryLink} →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line">
            <Image
              src={media.partnerEcosystem}
              alt={copy.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {journey.map((step) => (
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
