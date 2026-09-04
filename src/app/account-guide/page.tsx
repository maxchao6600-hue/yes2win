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
import { getAccountFeatures, getDictionary, getGuidesCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "account-guide",
    path: "/account-guide/",
    locale,
    ogImage: "/images/og/og-home.png",
  });
}

export default async function AccountGuidePage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getGuidesCopy(locale).accountGuide;
  const accountFeatures = getAccountFeatures(locale);
  const homePath = localizePath("/", locale);
  const guidePath = localizePath("/account-guide/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={guidePath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: guidePath },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-account-access.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="login">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/register-guide/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/brand/yes2win-account-access.webp"
              alt={copy.afterLogin.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.afterLogin.eyebrow}
              title={copy.afterLogin.title}
              description={copy.afterLogin.description}
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              {copy.afterLogin.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading title={copy.featureMap.title} description={copy.featureMap.description} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {accountFeatures.map((feature) => (
              <Card key={feature.id}>
                <h2 className="text-xl font-bold text-ink">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
                <p className="mt-4 rounded-xl bg-brand-50/80 p-3 text-xs font-medium text-brand-800">{feature.tip}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.cards.map((card) => (
              <Card key={card.title}>
                <h2 className="text-xl font-bold text-ink">{card.title}</h2>
                <p className="mt-3 text-sm text-ink-muted">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={copy.faqSection.eyebrow} title={copy.faqSection.title} />
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
              {copy.faqSection.links.map((link) => (
                <Link key={link.href} href={localizePath(link.href, locale)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Accordion items={copy.faqs} />
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
