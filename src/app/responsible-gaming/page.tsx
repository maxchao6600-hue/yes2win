import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getGuidesCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "responsible-gaming", path: "/responsible-gaming/", locale });
}

export default async function ResponsibleGamingPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getGuidesCopy(locale).responsibleGaming;
  const help = copy.whereToSeekHelp;
  const homePath = localizePath("/", locale);
  const pagePath = localizePath("/responsible-gaming/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={pagePath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: pagePath },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-responsible.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink href={localizePath("/faq/#responsible-gaming", locale)} variant="secondary">
              {copy.primaryCta}
            </CtaLink>
            <CtaLink href={localizePath("/contact/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/brand/yes2win-responsible.webp"
              alt={copy.intro.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading title={copy.intro.title} description={copy.intro.description} />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{copy.intro.note}</p>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.topics.map((topic) => (
              <Card key={topic.title}>
                <h2 className="text-xl font-bold text-ink">{topic.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{topic.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-ink">{copy.whenToPause.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {copy.whenToPause.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">{help.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {help.intro}
                {help.resources.map((resource, index) => (
                  <Fragment key={resource.href}>
                    {index > 0 ? help.resourceSeparator : null}
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700"
                    >
                      {resource.label}
                    </a>
                  </Fragment>
                ))}
                {help.resourceSuffix}
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                {help.partnerNoteBefore}
                <Link
                  href={localizePath("/faq/#responsible-gaming", locale)}
                  className="font-semibold text-brand-700"
                >
                  {help.partnerNoteFaqLabel}
                </Link>
                {help.partnerNoteBetween}
                <Link href={localizePath("/contact/", locale)} className="font-semibold text-brand-700">
                  {help.partnerNoteContactLabel}
                </Link>
                {help.partnerNoteAfter}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow={copy.faqSection.eyebrow} title={copy.faqSection.title} />
          <Accordion items={copy.faqs} />
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
