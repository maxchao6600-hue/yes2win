import { siteConfig } from "@/config/site";
import { defaultLocale, localeHtmlLang, type Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";
import { absoluteUrl } from "@/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ locale = defaultLocale }: { locale?: Locale }) {
  const site = getSiteCopy(locale);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.identity,
        alternateName: siteConfig.name,
        url: absoluteUrl(localizePath("/", locale)),
        logo: absoluteUrl(siteConfig.logo.src),
        description: site.description,
        slogan: siteConfig.tagline,
      }}
    />
  );
}

export function WebSiteJsonLd({ locale = defaultLocale }: { locale?: Locale }) {
  const site = getSiteCopy(locale);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.identity,
        url: absoluteUrl(localizePath("/", locale)),
        description: site.description,
        inLanguage: localeHtmlLang[locale],
        publisher: {
          "@type": "Organization",
          name: site.identity,
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}

export function WebPageJsonLd({
  name,
  description,
  path,
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
}) {
  const site = getSiteCopy(locale);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        description,
        url: absoluteUrl(path),
        inLanguage: localeHtmlLang[locale],
        isPartOf: {
          "@type": "WebSite",
          name: site.identity,
          url: absoluteUrl(localizePath("/", locale)),
        },
      }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
