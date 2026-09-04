import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getGameCategories, getHubsCopy, getSiteCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "about", path: "/about/", locale });
}

const imageMap: Record<string, string> = {
  slots: "/images/brand/yes2win-games-slots.webp",
  "live-casino": "/images/brand/yes2win-games-live-casino.webp",
  sports: "/images/brand/yes2win-games-sports.webp",
  fishing: "/images/brand/yes2win-games-fishing.webp",
  lottery: "/images/brand/yes2win-games-lottery.webp",
};

export default async function AboutPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const site = getSiteCopy(locale);
  const copy = getHubsCopy(locale).about;
  const categories = getGameCategories(locale);
  const homePath = localizePath("/", locale);
  const aboutPath = localizePath("/about/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={aboutPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: aboutPath },
        ]}
      />

      {/* 1. Hero / About YES2WIN */}
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
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/partner/", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      {/* 2. Brand */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.brand.eyebrow}
              title={copy.brand.title}
              description={copy.brand.description}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card hover={false}>
                <h2 className="text-xl font-bold text-ink">{copy.brand.platformCard.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.brand.platformCard.body}</p>
              </Card>
              <Card hover={false} className="border-brand-300 bg-brand-50/70">
                <h2 className="text-xl font-bold text-ink">{site.identity}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.brand.partnerCardBody}</p>
              </Card>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-about-ecosystem.webp"
              alt={copy.brand.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* 3. Ecosystem */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-about-ecosystem.webp"
              alt={copy.ecosystem.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.ecosystem.eyebrow}
              title={copy.ecosystem.title}
              description={copy.ecosystem.description}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.ecosystem.items.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  <Link
                    href={localizePath(item.href, locale)}
                    className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                  >
                    {copy.ecosystem.exploreLabelTemplate.replace("{title}", item.title)} →
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Games */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.games.eyebrow}
            title={copy.games.title}
            description={copy.games.description}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imageMap[category.id]}
                    alt={`${category.shortName} ${copy.games.imageAltSuffix}`}
                    fill
                    sizes="(max-width:640px) 100vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-lg font-bold">{category.shortName}</h2>
                    <p className="mt-1 text-xs text-brand-50/90">{category.highlights[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Promotions + VIP */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.offers.eyebrow}
            title={copy.offers.title}
            description={copy.offers.description}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-ink">{copy.offers.promotions.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.offers.promotions.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href={localizePath("/promotions/", locale)} variant="secondary" size="sm">
                  {copy.offers.promotions.primaryCta}
                </CtaLink>
                <CtaLink cta="register" size="sm">
                  {copy.offers.promotions.secondaryCta}
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">{copy.offers.vip.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.offers.vip.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href={localizePath("/vip/", locale)} variant="secondary" size="sm">
                  {copy.offers.vip.primaryCta}
                </CtaLink>
                <Link href={localizePath("/faq/", locale)} className="text-sm font-semibold text-brand-700">
                  {copy.offers.vip.link} →
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Payment + Mobile */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.payment.eyebrow}
              title={copy.payment.title}
              description={copy.payment.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/payment/", locale)} variant="secondary" size="sm">
                {copy.payment.primaryCta}
              </CtaLink>
              <CtaLink href={localizePath("/faq/#payments", locale)} variant="secondary" size="sm">
                {copy.payment.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.mobile.eyebrow}
              title={copy.mobile.title}
              description={copy.mobile.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/mobile/", locale)} variant="secondary" size="sm">
                {copy.mobile.primaryCta}
              </CtaLink>
              <CtaLink cta="register" size="sm">
                {copy.mobile.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Partner role */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.partnerRole.eyebrow}
              title={copy.partnerRole.title}
              description={copy.partnerRole.description}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.partnerRole.items.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/brand/yes2win-account-access.webp"
              alt={copy.partnerRole.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 8. What this website provides */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.provides.eyebrow}
            title={copy.provides.title}
            description={copy.provides.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.provides.items.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            {copy.provides.quickLinks.map((link) => (
              <Link key={link.href} href={localizePath(link.href, locale)}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. FAQ-ish cards + disclaimer */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.clarity.eyebrow}
            title={copy.clarity.title}
            description={copy.clarity.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.clarity.cards.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-10 rounded-2xl border border-line bg-white p-4 text-sm text-ink-muted">
            {site.disclaimer}
          </p>
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
