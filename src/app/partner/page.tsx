import Image from "next/image";
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
    "Partner with YES2WIN — learn the journey, referral system, marketing resources, brand assets and support pathways without guaranteed income claims.",
  path: "/partner/",
  ogImage: "/images/og/og-partner.png",
});

export default function PartnerPage() {
  return (
    <>
      <WebPageJsonLd name="YES2WIN Partner" description={partnerContent.intro} path="/partner/" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Partner", path: "/partner/" },
        ]}
      />

      {/* 1. Hero */}
      <PageHero
        tone="dark"
        image="/images/brand/yes2win-partner-ecosystem.webp"
        imageAlt="YES2WIN partner ecosystem artwork"
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

      {/* 2. Why Partner */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why partner"
              title="Reasons partners choose YES2WIN"
              description="Focus on brand clarity, multi-category entertainment and a practical onboarding path — without guaranteed income claims."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {partnerContent.whyPartner.map((item) => (
                <Card key={item.title}>
                  <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-partner-ecosystem.webp"
              alt="YES2WIN partner ecosystem visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* 3. Who Can Partner */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Audience"
            title="Who can partner with YES2WIN"
            description="The partner pathway is built for people who introduce YES2WIN clearly — creators, communities, marketers and referral-focused collaborators."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {partnerContent.whoFor.map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Partner Journey */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Partner journey"
            title="From access to progress tracking"
            description="A practical sequence that keeps onboarding, sharing and review easy to understand."
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
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink cta="partner">Start partner access</CtaLink>
            <CtaLink href="/contact/" variant="secondary">
              Partner support
            </CtaLink>
          </div>
        </Container>
      </Section>

      {/* 5. Referral System */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-partner-ecosystem.webp"
              alt="YES2WIN partner referral network visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Referral system"
              title="Share YES2WIN through an official pathway"
              description="Referral sharing starts after partner access is active. Keep messaging educational and avoid inventing commercial figures."
            />
            <div className="mt-6 space-y-4">
              {partnerContent.referralSystem.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-line bg-brand-50/70 p-4 text-sm text-ink-muted">
              {partnerContent.commercialNote}
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Marketing Resources */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Marketing resources"
            title="Educational materials for partner growth"
            description="Lean on public partner-site pages to explain YES2WIN categories, offers and access routes with brand-safe clarity."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerContent.marketingResources.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Brand Assets */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Brand assets"
              title="Position YES2WIN the right way"
              description="Use approved identity language so audiences understand both the YES2WIN brand and this partner gateway’s role."
            />
            <div className="mt-6 space-y-4">
              {partnerContent.brandAssets.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-partner-tracking.webp"
              alt="YES2WIN partner brand and resource materials"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 8. Content Resources */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Content resources"
            title="Pages you can reference when educating audiences"
            description="Point people to public guides on this partner site, then route them into Register, Login or Partner access when they are ready."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerContent.contentResources.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/games/">Games hub</Link>
            <Link href="/promotions/">Promotions</Link>
            <Link href="/payment/">Payment guide</Link>
            <Link href="/mobile/">Mobile access</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/responsible-gaming/">Responsible gaming</Link>
          </div>
        </Container>
      </Section>

      {/* 9. Tracking */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Tracking"
              title="Review progress through official partner tools"
              description="Tracking becomes available after partner access is granted. Visibility depends on your account and the tools enabled for you."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {partnerContent.tracking.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-partner-tracking.webp"
              alt="YES2WIN partner progress tracking visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 10. Partner Support */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Partner support"
            title="Help for onboarding, sharing and next steps"
            description="Use public guidance first, then continue through official partner support channels when your question is account-specific."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerContent.support.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/contact/" variant="secondary">
              Open contact hub
            </CtaLink>
            <CtaLink href="/faq/#partner" variant="secondary">
              Partner FAQ
            </CtaLink>
          </div>
        </Container>
      </Section>

      {/* 11. FAQ */}
      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Partner questions"
            description="Short answers about income expectations, terms, materials and who the pathway is for."
          />
          <Accordion
            items={partnerContent.faqs.map((item, index) => ({
              id: `partner-faq-${index}`,
              question: item.question,
              answer: item.answer,
            }))}
          />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/faq/#partner">More partner FAQ</Link>
            <Link href="/contact/">Partner support</Link>
            <Link href="/about/">About the partner site</Link>
          </div>
        </Container>
      </Section>

      {/* 12. CTAs */}
      <FinalCta
        title="Ready to build with YES2WIN?"
        description="Open the official partner access flow when you are ready to continue — no guaranteed income, just a clear next step."
        showPartner
      />
    </>
  );
}
