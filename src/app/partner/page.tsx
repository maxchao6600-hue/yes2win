import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getHubsCopy, getPartnerContent } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "partner",
    path: "/partner/",
    locale,
    ogImage: "/images/og/og-partner.png",
  });
}

export default async function PartnerPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).partner;
  const partnerContent = getPartnerContent(locale);
  const homePath = localizePath("/", locale);
  const partnerPath = localizePath("/partner/", locale);
  const contactPath = localizePath("/contact/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={partnerContent.intro} path={partnerPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: partnerPath },
        ]}
      />

      {/* 1. Hero */}
      <PageHero
        tone="dark"
        image="/images/brand/yes2win-partner-ecosystem.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={partnerContent.headline}
        description={partnerContent.intro}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="partner">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/about/", locale)} variant="outline">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      {/* 2. Why Partner */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.whyPartner.eyebrow}
              title={copy.whyPartner.title}
              description={copy.whyPartner.description}
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
              alt={copy.whyPartner.imageAlt}
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
            eyebrow={copy.audience.eyebrow}
            title={copy.audience.title}
            description={copy.audience.description}
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
            eyebrow={copy.journey.eyebrow}
            title={copy.journey.title}
            description={copy.journey.description}
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
            <CtaLink cta="partner">{copy.journey.primaryCta}</CtaLink>
            <CtaLink href={contactPath} variant="secondary">
              {copy.journey.secondaryCta}
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
              alt={copy.referral.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.referral.eyebrow}
              title={copy.referral.title}
              description={copy.referral.description}
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
            eyebrow={copy.marketing.eyebrow}
            title={copy.marketing.title}
            description={copy.marketing.description}
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
              eyebrow={copy.brandAssets.eyebrow}
              title={copy.brandAssets.title}
              description={copy.brandAssets.description}
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
              alt={copy.brandAssets.imageAlt}
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
            eyebrow={copy.contentResources.eyebrow}
            title={copy.contentResources.title}
            description={copy.contentResources.description}
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
            {copy.contentResources.links.map((link) => (
              <Link key={link.href} href={localizePath(link.href, locale)}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Tracking */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.tracking.eyebrow}
              title={copy.tracking.title}
              description={copy.tracking.description}
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
              alt={copy.tracking.imageAlt}
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
            eyebrow={copy.support.eyebrow}
            title={copy.support.title}
            description={copy.support.description}
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
            <CtaLink href={contactPath} variant="secondary">
              {copy.support.primaryCta}
            </CtaLink>
            <CtaLink href={localizePath("/faq/#partner", locale)} variant="secondary">
              {copy.support.secondaryCta}
            </CtaLink>
          </div>
        </Container>
      </Section>

      {/* 11. FAQ */}
      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} description={copy.faq.description} />
          <Accordion
            items={partnerContent.faqs.map((item, index) => ({
              id: `partner-faq-${index}`,
              question: item.question,
              answer: item.answer,
            }))}
          />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            {copy.faq.links.map((link) => (
              <Link key={link.href} href={localizePath(link.href, locale)}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 12. CTAs */}
      <FinalCta
        locale={locale}
        title={copy.finalCta.title}
        description={copy.finalCta.description}
        showPartner
      />
    </>
  );
}
