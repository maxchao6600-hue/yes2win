import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getHomeCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/config";

export async function FinalCta({
  title,
  description,
  showPartner = false,
  locale,
}: {
  title?: string;
  description?: string;
  showPartner?: boolean;
  locale?: Locale;
}) {
  const activeLocale = locale ?? (await getLocale());
  const copy = getHomeCopy(activeLocale).finalCta;

  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <SectionHeading
            light
            eyebrow={copy.eyebrow}
            title={title ?? copy.title}
            description={description ?? copy.description}
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {showPartner ? (
              <CtaLink cta="partner" size="lg">
                {copy.partnerCta}
              </CtaLink>
            ) : (
              <CtaLink cta="register" size="lg">
                {copy.registerCta}
              </CtaLink>
            )}
            <CtaLink cta="login" variant="outline" size="lg">
              {copy.loginCta}
            </CtaLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
