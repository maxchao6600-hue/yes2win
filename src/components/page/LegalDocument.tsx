import Link from "next/link";
import { Fragment } from "react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import type { LegalDocument as LegalDocumentCopy, LegalInline } from "@/i18n/pages/en/legal";
import { getDictionary } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

/**
 * Resolves the publisher/operator sentence from `siteConfig.legal`. When the
 * env-backed entity details are empty the neutral fallback is used, so no
 * placeholder tokens ever reach the page.
 */
function resolveDynamicLine(copy: LegalDocumentCopy): string {
  const { entityName, jurisdiction } = siteConfig.legal;
  if (!entityName) return copy.dynamicLine.fallback;
  if (jurisdiction) {
    return copy.dynamicLine.withEntityAndJurisdiction
      .replace("{entity}", entityName)
      .replace("{jurisdiction}", jurisdiction);
  }
  return copy.dynamicLine.withEntity.replace("{entity}", entityName);
}

function InlineContent({
  content,
  dynamicLine,
  locale,
}: {
  content: LegalInline[];
  dynamicLine: string;
  locale: Locale;
}) {
  return (
    <>
      {content.map((node, index) => {
        if (typeof node === "string") return <Fragment key={index}>{node}</Fragment>;
        if ("token" in node) return <Fragment key={index}>{dynamicLine}</Fragment>;
        return (
          <Link key={index} href={localizePath(node.href, locale)}>
            {node.text}
          </Link>
        );
      })}
    </>
  );
}

export function LegalDocument({
  copy,
  locale,
  path,
  image,
}: {
  copy: LegalDocumentCopy;
  locale: Locale;
  path: string;
  image?: string;
}) {
  const ui = getDictionary(locale);
  const dynamicLine = resolveDynamicLine(copy);
  const homePath = localizePath("/", locale);
  const localizedPath = localizePath(path, locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={localizedPath} locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: localizedPath },
        ]}
      />
      <PageHero
        image={image}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={`${copy.lastUpdatedLabel}: ${siteConfig.legal.lastUpdated}. ${copy.descriptionSuffix}`}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
      />

      <Section tone="white">
        <Container narrow className="prose-legal">
          {copy.sections.map((section) => (
            <Fragment key={section.heading}>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, blockIndex) =>
                block.type === "p" ? (
                  <p key={blockIndex}>
                    <InlineContent content={block.content} dynamicLine={dynamicLine} locale={locale} />
                  </p>
                ) : (
                  <ul key={blockIndex}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <InlineContent content={item} dynamicLine={dynamicLine} locale={locale} />
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </Fragment>
          ))}
        </Container>
      </Section>
    </>
  );
}
