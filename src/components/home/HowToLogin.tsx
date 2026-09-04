import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepRail } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function HowToLogin() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).howToLogin;

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line">
            <Image
              src={media.registerJourney}
              alt={copy.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink cta="login">{copy.primaryCta}</CtaLink>
              <CtaLink href={localizePath("/register-guide/", locale)} variant="secondary">
                {copy.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </div>
        <StepRail steps={copy.steps} />
      </Container>
    </Section>
  );
}
