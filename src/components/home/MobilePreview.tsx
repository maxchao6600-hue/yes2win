import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function MobilePreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).mobile;

  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/mobile/", locale)} variant="secondary">
                {copy.primaryCta}
              </CtaLink>
              <CtaLink cta="register">{copy.secondaryCta}</CtaLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-brand-300/30 blur-3xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-30px_rgba(2,44,34,0.8)]">
              <Image
                src={media.mobileDevice}
                alt={copy.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
