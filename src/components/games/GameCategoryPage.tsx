import Link from "next/link";
import Image from "next/image";
import { media } from "@/config/media";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import { getDictionary, getGameCategories, getHubsCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";

const visualMap = media.categories;

export async function GameCategoryPage({
  categoryId,
  locale,
}: {
  categoryId: string;
  locale?: Locale;
}) {
  const activeLocale = locale ?? (await getLocale());
  const ui = getDictionary(activeLocale);
  const copy = getHubsCopy(activeLocale).gameCategory;
  const category = getGameCategories(activeLocale).find((item) => item.id === categoryId);
  const details = copy.details[categoryId];

  if (!category || !details) return null;

  const visual = visualMap[categoryId as keyof typeof visualMap];
  const withCategory = (template: string) => template.replace("{category}", category.shortName);
  const gamesPath = localizePath("/games/", activeLocale);

  return (
    <>
      <WebPageJsonLd name={category.name} description={category.seoDescription} path={category.path} locale={activeLocale} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: localizePath("/", activeLocale) },
          { name: ui.sections.games, path: gamesPath },
          { name: category.shortName, path: category.path },
        ]}
      />
      <PageHero
        tone="dark"
        image={visual}
        imageAlt={withCategory(copy.imageAltTemplate)}
        eyebrow={copy.eyebrow}
        title={category.name}
        description={category.intro}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[
          { label: ui.breadcrumb.home, href: localizePath("/", activeLocale) },
          { label: ui.sections.games, href: gamesPath },
          { label: category.shortName },
        ]}
        actions={
          <>
            <CtaLink cta="register">{category.ctaLabel}</CtaLink>
            <CtaLink href={gamesPath} variant="outline">
              {copy.allCategoriesCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
              <Image
                src={visual}
                alt={withCategory(copy.imageAltTemplate)}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <Card hover={false}>
              <h2 className="text-2xl font-bold text-ink">{copy.whatToExpectTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {category.whatToExpect.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/80 p-4 text-sm leading-relaxed text-ink-muted">
                {category.mobileNote}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">{details.formatTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                {details.formatItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.suitedTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                {details.suitedFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.access.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {withCategory(copy.access.bodyTemplate)}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  {ui.cta.registerNow}
                </CtaLink>
                <CtaLink cta="login" variant="secondary" size="sm">
                  {ui.cta.login}
                </CtaLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">{details.relatedTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{details.relatedCopy}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="text-lg font-bold text-ink">{copy.mobileCard.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{withCategory(copy.mobileCard.bodyTemplate)}</p>
                <Link
                  href={localizePath(copy.mobileCard.href, activeLocale)}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                >
                  {copy.mobileCard.linkLabel} →
                </Link>
              </Card>
              <Card>
                <h3 className="text-lg font-bold text-ink">{copy.supportCard.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{copy.supportCard.body}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-brand-700">
                  {copy.supportCard.links.map((link) => (
                    <Link key={link.href} href={localizePath(link.href, activeLocale)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink">{copy.questions.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.questions.description}</p>
            <div className="mt-6">
              <Accordion items={details.faq} />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        locale={activeLocale}
        title={withCategory(copy.finalCta.titleTemplate)}
        description={copy.finalCta.description}
      />
    </>
  );
}
