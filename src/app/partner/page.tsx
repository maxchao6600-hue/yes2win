import Link from "next/link";
import { partnerContent } from "@/config/content/partner";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Partner | Official Partner Ecosystem",
  description:
    "Build with the YES2WIN ecosystem. Learn the partner journey, marketing resources and support pathways — without guaranteed income claims.",
  path: "/partner/",
});

export default function PartnerPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Partner"
        description={partnerContent.intro}
        path="/partner/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Partner", path: "/partner/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="Partner"
        title={partnerContent.headline}
        description={partnerContent.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Partner" },
        ]}
        actions={
          <>
            <CtaLink cta="partner">Become a Partner</CtaLink>
            <CtaLink href="/about/" variant="outline">
              About this site
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Why partner"
            title="Reasons teams choose a structured YES2WIN pathway"
            description="Focus on clarity, brand-safe messaging and sustainable audience education."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {partnerContent.whyPartner.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Partner journey"
            title="From access to progress tracking"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {partnerContent.journey.map((step) => (
              <div key={step.step} className="rounded-2xl border border-brand-200 bg-white p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{step.step}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Resources"
                title="Marketing resources & growth support"
              />
              <div className="mt-6 space-y-4">
                {partnerContent.resources.map((item) => (
                  <Card key={item.title}>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-6 rounded-2xl border border-line bg-white p-4 text-sm text-ink-muted">
                {partnerContent.termsPlaceholder}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="FAQ" title="Partner questions" />
              <div className="mt-6">
                <Accordion
                  items={partnerContent.faqs.map((item, index) => ({
                    id: `partner-faq-${index}`,
                    question: item.question,
                    answer: item.answer,
                  }))}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
                <Link href="/faq/#partner">More partner FAQ</Link>
                <Link href="/contact/">Partner support</Link>
                <Link href="/about/">About the partner site</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to build with YES2WIN?"
        description="Open the official partner access flow when you are ready to continue."
      />
    </>
  );
}
