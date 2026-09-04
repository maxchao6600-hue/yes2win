import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getHubsCopy, getSiteCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "contact", path: "/contact/", locale });
}

function ContactValue({
  value,
  fallback,
}: {
  value: string;
  fallback: string;
}) {
  if (value) {
    const href = value.includes("://") || value.startsWith("mailto:") ? value : `mailto:${value}`;
    const label = value.replace(/^mailto:/i, "").replace(/^https?:\/\//i, "");
    return (
      <a href={href} className="font-semibold text-brand-800 break-all">
        {label}
      </a>
    );
  }

  return <p className="leading-relaxed text-ink-muted">{fallback}</p>;
}

export default async function ContactPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).contact;
  const { customerSupport, partnerSupport, generalEnquiries } = getSiteCopy(locale).contact;
  const homePath = localizePath("/", locale);
  const contactPath = localizePath("/contact/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={contactPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: contactPath },
        ]}
      />

      {/* 1. Hero */}
      <PageHero
        image="/images/brand/yes2win-contact-support.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/faq/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      {/* 2. Customer Support */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.customerSupport.eyebrow}
            title={copy.customerSupport.title}
            description={customerSupport.description}
          />
          <Card className="mt-8 max-w-3xl">
            <h2 className="text-xl font-bold text-ink">{customerSupport.label}</h2>
            <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
              <ContactValue value={customerSupport.value} fallback={customerSupport.fallback} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{copy.customerSupport.note}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                {copy.customerSupport.registerCta}
              </CtaLink>
              <CtaLink cta="login" variant="secondary" size="sm">
                {copy.customerSupport.loginCta}
              </CtaLink>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 3. Account Help */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.accountHelp.eyebrow}
            title={copy.accountHelp.title}
            description={copy.accountHelp.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.accountHelp.cards.map((card) => (
              <Card key={card.title}>
                <h2 className="text-lg font-bold text-ink">{card.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Payment Help */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.paymentHelp.eyebrow}
            title={copy.paymentHelp.title}
            description={copy.paymentHelp.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.paymentHelp.cards.map((card) => (
              <Card key={card.title}>
                <h2 className="text-xl font-bold text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.body}</p>
                <Link
                  href={localizePath(card.href, locale)}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                >
                  {card.linkLabel} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Registration Help */}
      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow={copy.registrationHelp.eyebrow}
              title={copy.registrationHelp.title}
              description={copy.registrationHelp.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">{copy.registrationHelp.primaryCta}</CtaLink>
              <CtaLink href={localizePath("/register-guide/", locale)} variant="secondary">
                {copy.registrationHelp.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <h2 className="text-lg font-bold text-ink">{copy.registrationHelp.needCard.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{copy.registrationHelp.needCard.body}</p>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">{copy.registrationHelp.stuckCard.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{copy.registrationHelp.stuckCard.body}</p>
              <Link
                href={localizePath(copy.registrationHelp.stuckCard.href, locale)}
                className="mt-4 inline-flex text-sm font-semibold text-brand-700"
              >
                {copy.registrationHelp.stuckCard.linkLabel} →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Login Help */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.loginHelp.eyebrow}
            title={copy.loginHelp.title}
            description={copy.loginHelp.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card>
              <h2 className="text-lg font-bold text-ink">{copy.loginHelp.openCard.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{copy.loginHelp.openCard.body}</p>
              <div className="mt-4">
                <CtaLink cta="login" size="sm">
                  {copy.loginHelp.openCard.cta}
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">{copy.loginHelp.recoveryCard.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{copy.loginHelp.recoveryCard.body}</p>
              <Link
                href={localizePath(copy.loginHelp.recoveryCard.href, locale)}
                className="mt-4 inline-flex text-sm font-semibold text-brand-700"
              >
                {copy.loginHelp.recoveryCard.linkLabel} →
              </Link>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">{copy.loginHelp.mobileCard.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{copy.loginHelp.mobileCard.body}</p>
              <Link
                href={localizePath(copy.loginHelp.mobileCard.href, locale)}
                className="mt-4 inline-flex text-sm font-semibold text-brand-700"
              >
                {copy.loginHelp.mobileCard.linkLabel} →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. Partner Support */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.partnerSupport.eyebrow}
            title={copy.partnerSupport.title}
            description={partnerSupport.description}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <h2 className="text-xl font-bold text-ink">{partnerSupport.label}</h2>
              <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
                <ContactValue value={partnerSupport.value} fallback={partnerSupport.fallback} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{copy.partnerSupport.note}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href={localizePath("/partner/", locale)} variant="secondary" size="sm">
                  {copy.partnerSupport.partnerPageCta}
                </CtaLink>
                <CtaLink cta="partner" size="sm">
                  {copy.partnerSupport.partnerAccessCta}
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.partnerSupport.coverageTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {copy.partnerSupport.coverageItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={localizePath(copy.partnerSupport.faqHref, locale)}
                className="mt-5 inline-flex text-sm font-semibold text-brand-700"
              >
                {copy.partnerSupport.faqLinkLabel} →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. General Enquiries */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.generalEnquiries.eyebrow}
            title={copy.generalEnquiries.title}
            description={generalEnquiries.description}
          />
          <Card className="mt-8 max-w-3xl">
            <h2 className="text-xl font-bold text-ink">{generalEnquiries.label}</h2>
            <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
              <ContactValue value={generalEnquiries.value} fallback={generalEnquiries.fallback} />
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
              {copy.generalEnquiries.links.map((link) => (
                <Link key={link.href} href={localizePath(link.href, locale)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* 9. FAQ links */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.faqLinks.eyebrow}
            title={copy.faqLinks.title}
            description={copy.faqLinks.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {copy.faqLinks.links.map((link) => (
              <Link
                key={link.href}
                href={localizePath(link.href, locale)}
                className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold text-brand-800 transition hover:border-brand-300"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Quick Links */}
      <Section tone="green">
        <Container>
          <SectionHeading eyebrow={copy.quickLinks.eyebrow} title={copy.quickLinks.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.quickLinks.items.map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
                <Link
                  href={localizePath(item.href, locale)}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                >
                  {copy.quickLinks.openLabelTemplate.replace("{title}", item.title)} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
