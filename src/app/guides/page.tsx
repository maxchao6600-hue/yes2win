import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getGuidesIndexCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "guides",
    path: "/guides/",
    locale,
    ogImage: "/images/og/og-home.png",
  });
}

export default async function GuidesPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getGuidesIndexCopy(locale);
  const homePath = localizePath("/", locale);
  const guidesPath = localizePath("/guides/", locale);

  return (
    <>
      <WebPageJsonLd
        name={copy.jsonLdName}
        description={copy.jsonLdDescription}
        path={guidesPath}
        locale={locale}
      />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: guidesPath },
        ]}
      />

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
            <CtaLink href={localizePath("/games/", locale)}>{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/register-guide/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.intro.eyebrow}
            title={copy.intro.title}
            description={copy.intro.description}
          />
        </Container>
      </Section>

      {copy.groups.map((group, index) => (
        <Section key={group.id} tone={index % 2 === 0 ? undefined : "white"}>
          <Container>
            <SectionHeading title={group.title} description={group.description} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => (
                <Card key={item.href} className="flex flex-col">
                  <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  <Link
                    href={localizePath(item.href, locale)}
                    className="mt-5 inline-flex text-sm font-semibold text-brand-800 hover:text-brand-600"
                  >
                    {item.cta} →
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
