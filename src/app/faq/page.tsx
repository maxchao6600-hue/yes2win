import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getFaqCategories, getHubsCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "faq", path: "/faq/", locale });
}

export default async function FaqPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).faq;
  const categories = getFaqCategories(locale);
  const allItems = categories.flatMap((category) => category.items);
  const homePath = localizePath("/", locale);
  const faqPath = localizePath("/faq/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={faqPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: faqPath },
        ]}
      />
      <FaqJsonLd items={allItems} />
      <PageHero
        image="/images/brand/yes2win-about-ecosystem.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register" size="sm">
              {copy.primaryCta}
            </CtaLink>
            <CtaLink cta="login" variant="secondary" size="sm">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-line bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-800 hover:border-brand-300"
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {categories.map((category) => {
              const related = copy.relatedLinks[category.id] ?? [];
              return (
                <div key={category.id} id={category.id} className="scroll-mt-28">
                  <h2 className="mb-4 text-2xl font-bold text-ink">{category.title}</h2>
                  <Accordion items={category.items} />
                  {related.length ? (
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
                      {related.map((link) => (
                        <Link key={link.href + link.label} href={localizePath(link.href, locale)}>
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <FinalCta locale={locale} />
    </>
  );
}
