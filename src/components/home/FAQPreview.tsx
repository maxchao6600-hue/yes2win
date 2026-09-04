import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getFaqCategories, getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

const previewIds = [
  "what-is-yes2win",
  "what-is-partner-site",
  "how-register",
  "how-login",
  "game-categories",
  "where-promotions",
  "payment-methods",
  "mobile-access",
  "become-partner",
  "play-responsibly",
];

export async function FAQPreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).faq;
  const faqItems = getFaqCategories(locale).flatMap((category) => category.items);
  const teasers = "teasers" in copy && Array.isArray(copy.teasers) ? copy.teasers : [];

  const previewFromIds = previewIds
    .map((id) => faqItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => ({ id: item.id, question: item.question, answer: item.answer }));

  const preview =
    teasers.length > 0
      ? teasers.map((item, index) => ({
          id: `home-teaser-${index}`,
          question: item.question,
          answer: item.answer,
        }))
      : previewFromIds;

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/faq/", locale)} variant="secondary">
                {copy.primaryCta}
              </CtaLink>
              <Link
                href={localizePath("/contact/", locale)}
                className="inline-flex items-center text-sm font-semibold text-brand-800"
              >
                {copy.secondaryLink} →
              </Link>
            </div>
          </div>
          <Accordion items={preview} />
        </div>
      </Container>
    </Section>
  );
}
