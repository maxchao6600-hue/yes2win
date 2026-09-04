import Link from "next/link";
import { allFaqItems } from "@/config/content/faq";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";

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

export function FAQPreview() {
  const preview = previewIds
    .map((id) => allFaqItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before you dive in"
              description="Useful questions about YES2WIN, registration, games, promotions, payments, mobile access and partner pathways."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/faq/" variant="secondary">
                Browse all FAQs
              </CtaLink>
              <Link href="/contact/" className="inline-flex items-center text-sm font-semibold text-brand-800">
                Contact support →
              </Link>
            </div>
          </div>
          <Accordion items={preview} />
        </div>
      </Container>
    </Section>
  );
}
