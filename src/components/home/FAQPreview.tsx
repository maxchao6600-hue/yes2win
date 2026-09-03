import Link from "next/link";
import { faqCategories } from "@/config/content/faq";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";

export function FAQPreview() {
  const preview = faqCategories[0].items.slice(0, 4);

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before you dive in"
              description="Quick clarifications about YES2WIN, this partner website, registration and platform access."
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
