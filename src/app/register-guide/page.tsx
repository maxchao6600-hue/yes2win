import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getGuidesCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "register-guide",
    path: "/register-guide/",
    locale,
    ogImage: "/images/og/og-home.png",
  });
}

export default async function RegisterGuidePage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getGuidesCopy(locale).registerGuide;
  const homePath = localizePath("/", locale);
  const guidePath = localizePath("/register-guide/", locale);

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
        image="/images/brand/yes2win-register-journey.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/faq/#registration", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-register-journey.webp"
              alt={copy.intro.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            {copy.intro.cards.map((card) => (
              <Card key={card.title}>
                <h2 className="text-2xl font-bold text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.steps.map((item) => (
              <Card key={item.step}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">{item.step}</p>
                <h2 className="mt-3 text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.tips.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
