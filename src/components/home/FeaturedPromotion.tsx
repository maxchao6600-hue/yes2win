import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function FeaturedPromotion() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).featuredPromotion;

  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">{copy.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-50/85 sm:text-base">
              {copy.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">{copy.primaryCta}</CtaLink>
              <CtaLink href={localizePath("/promotions/", locale)} variant="outline">
                {copy.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src="/images/brand/yes2win-promotion-welcome.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
