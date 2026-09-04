import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getHubsCopy, getPromotions } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "promotions",
    path: "/promotions/",
    locale,
    ogImage: "/images/og/og-promotions.png",
  });
}

const promoImages: Record<string, string> = {
  welcome: "/images/brand/yes2win-promotion-welcome.webp",
  deposit: "/images/brand/yes2win-promotion-deposit.webp",
  weekly: "/images/brand/yes2win-promotion-weekly.webp",
  cashback: "/images/brand/yes2win-promotion-cashback.webp",
  "vip-benefits": "/images/brand/yes2win-promotion-vip.webp",
  special: "/images/brand/yes2win-promotion-special.webp",
};

export default async function PromotionsPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).promotions;
  const promotions = getPromotions(locale);
  const featured = promotions.find((promo) => promo.featured) ?? promotions[0];
  const homePath = localizePath("/", locale);
  const promotionsPath = localizePath("/promotions/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={promotionsPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: promotionsPath },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-promotion-welcome.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/games/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="dark">
        <Container>
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                {copy.featuredCampaign.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{copy.featuredCampaign.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-50/85 sm:text-base">
                {copy.featuredCampaign.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-100/80">{copy.featuredCampaign.note}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink cta="register">{copy.featuredCampaign.primaryCta}</CtaLink>
                <CtaLink href={localizePath("/faq/#promotions", locale)} variant="outline">
                  {copy.featuredCampaign.secondaryCta}
                </CtaLink>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src="/images/brand/yes2win-promotion-welcome.webp"
                alt={copy.featuredCampaign.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {promotions.map((promo, index) => {
        const image = promoImages[promo.id] ?? promoImages.welcome;
        const reverse = index % 2 === 1;
        return (
          <Section key={promo.id} tone={index % 2 === 0 ? "white" : "green"} id={promo.id}>
            <Container>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <SectionHeading eyebrow={promo.category} title={promo.title} description={promo.description} />
                  <div className="mt-6 space-y-3 rounded-2xl border border-line bg-white/90 p-5 text-sm text-ink-muted">
                    <p>
                      <span className="font-semibold text-ink">{copy.detail.whoForLabel}</span> {promo.whoFor}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">{copy.detail.howToCheckLabel}</span> {promo.howToCheck}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">{copy.detail.whereTermsLabel}</span> {promo.whereTerms}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">{copy.detail.eligibilityLabel}</span> {promo.eligibility}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CtaLink cta="register" size="sm">
                      {copy.detail.registerCta}
                    </CtaLink>
                    {promo.id === "vip-benefits" ? (
                      <CtaLink href={localizePath("/vip/", locale)} variant="secondary" size="sm">
                        {copy.detail.vipCta}
                      </CtaLink>
                    ) : (
                      <CtaLink href={localizePath("/terms/", locale)} variant="secondary" size="sm">
                        {copy.detail.termsCta}
                      </CtaLink>
                    )}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
                  <Image
                    src={image}
                    alt={`${promo.title} ${copy.detail.imageAltSuffix}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {promo.featured ? (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      {copy.detail.featuredBadge}
                    </span>
                  ) : null}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.guide.eyebrow}
            title={copy.guide.title}
            description={copy.guide.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.guide.points.map((point) => (
              <Card key={point.title}>
                <h3 className="text-xl font-bold text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.claim.eyebrow}
            title={copy.claim.title}
            description={copy.claim.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.claim.steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-brand-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.eligibility.eyebrow}
              title={copy.eligibility.title}
              description={copy.eligibility.description}
            />
            <div className="mt-6 space-y-4">
              <Card hover={false}>
                <h3 className="text-lg font-bold text-ink">{copy.eligibility.commonFactors.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy.eligibility.commonFactors.body}</p>
              </Card>
              <Card hover={false} className="border-brand-300 bg-brand-50/70">
                <h3 className="text-lg font-bold text-ink">{copy.eligibility.featuredContextTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {featured.eligibility} {featured.howToCheck}
                </p>
              </Card>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.termsNote.eyebrow}
              title={copy.termsNote.title}
              description={copy.termsNote.description}
            />
            <Card hover={false} className="mt-6">
              <ul className="space-y-3 text-sm leading-relaxed text-ink-muted">
                <li>
                  <span className="font-semibold text-ink">{copy.termsNote.changeLead}</span>{" "}
                  {copy.termsNote.changeBody}
                </li>
                <li>
                  <span className="font-semibold text-ink">{copy.termsNote.platformLead}</span>{" "}
                  {copy.termsNote.platformBody}
                </li>
                <li>
                  <span className="font-semibold text-ink">{copy.termsNote.readLead}</span> {featured.termsNote}
                </li>
                <li>
                  <span className="font-semibold text-ink">{copy.termsNote.rulesLead}</span>{" "}
                  {copy.termsNote.rulesBefore}
                  <Link href={localizePath("/terms/", locale)} className="font-semibold text-brand-700">
                    {copy.termsNote.rulesLinkLabel}
                  </Link>
                  {copy.termsNote.rulesAfter}
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} description={copy.faq.description} />
          </div>
          <Accordion items={copy.faq.items} />
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.related.eyebrow}
            title={copy.related.title}
            description={copy.related.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.related.links.map((link) => (
              <Link
                key={link.href}
                href={localizePath(link.href, locale)}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:border-brand-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
