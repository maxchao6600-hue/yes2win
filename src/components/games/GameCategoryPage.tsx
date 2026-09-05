import Link from "next/link";
import Image from "next/image";
import { media } from "@/config/media";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
            <CtaLink cta="register">{details.continueCta}</CtaLink>
            <CtaLink href={gamesPath} variant="outline">
              {copy.allCategoriesCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading title={details.overviewTitle} description={details.overviewLead} />
          <ul className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-muted">
            {category.whatToExpect.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title={details.topicsTitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {details.topics.map((topic) => (
              <Card key={topic.title}>
                <h2 className="text-lg font-bold text-ink">{topic.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{topic.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{details.practiceTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted">
              {details.practiceItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                {copy.platformCta}
              </CtaLink>
              <CtaLink cta="login" variant="secondary" size="sm">
                {ui.cta.login}
              </CtaLink>
            </div>
          </div>
          <Card>
            <h2 className="text-xl font-bold text-ink">{details.relatedTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{details.relatedCopy}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-brand-700">
              {details.relatedLinks.map((link) => (
                <Link key={link.href} href={localizePath(link.href, activeLocale)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading title={details.faqTitle} description={details.faqIntro} />
          <div className="mt-8 max-w-3xl">
            <Accordion items={details.faq} />
          </div>
        </Container>
      </Section>

      <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-line sm:aspect-[24/7]">
        <Image
          src={visual}
          alt={withCategory(copy.imageAltTemplate)}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <FinalCta
        locale={activeLocale}
        title={withCategory(copy.finalCta.titleTemplate)}
        description={copy.finalCta.description}
      />
    </>
  );
}
