import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import {
  getDictionary,
  getGameCategories,
  getHubsCopy,
  getPromotions,
  getProviders,
} from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "games",
    path: "/games/",
    locale,
    ogImage: "/images/og/og-games.png",
  });
}

const imageMap: Record<string, string> = {
  slots: "/images/brand/yes2win-games-slots.webp",
  "live-casino": "/images/brand/yes2win-games-live-casino.webp",
  sports: "/images/brand/yes2win-games-sports.webp",
  fishing: "/images/brand/yes2win-games-fishing.webp",
  lottery: "/images/brand/yes2win-games-lottery.webp",
};

export default async function GamesPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).games;
  const categories = getGameCategories(locale);
  const providers = getProviders(locale);
  const promotions = getPromotions(locale);
  const homePath = localizePath("/", locale);
  const gamesPath = localizePath("/games/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={gamesPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: gamesPath },
        ]}
      />
      <PageHero
        tone="dark"
        image="/images/brand/yes2win-featured-games.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/promotions/", locale)} variant="outline">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.featured.eyebrow}
            title={copy.featured.title}
            description={copy.featured.description}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imageMap[category.id]}
                    alt={`${category.shortName} ${copy.featured.imageAltSuffix}`}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-xl font-bold">{category.shortName}</h2>
                    <p className="mt-1 text-sm text-brand-50/90">{category.highlights[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title={copy.allCategories.title} description={copy.allCategories.description} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} id={category.id} className="scroll-mt-28 overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={imageMap[category.id]}
                    alt={`${category.name} ${copy.allCategories.imageAltSuffix}`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-ink">{category.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{category.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                    {category.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <CtaLink href={category.href} variant="secondary" size="sm">
                      {category.ctaLabel}
                    </CtaLink>
                    <CtaLink cta="register" size="sm">
                      {copy.allCategories.playNowCta}
                    </CtaLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green" id="providers">
        <Container>
          <SectionHeading
            eyebrow={copy.providers.eyebrow}
            title={copy.providers.title}
            description={copy.providers.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {providers.map((provider) => (
              <Card key={provider.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{provider.focus}</p>
                <h2 className="mt-3 text-lg font-bold text-ink">{provider.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{provider.description}</p>
                <p className="mt-4 text-xs font-medium text-ink-muted">{provider.categories.join(" · ")}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading title={copy.formats.title} description={copy.formats.description} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {copy.formats.items.map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/brand/yes2win-mobile-device.webp"
              alt={copy.mobile.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.mobile.eyebrow}
              title={copy.mobile.title}
              description={copy.mobile.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/mobile/", locale)} variant="secondary">
                {copy.mobile.primaryCta}
              </CtaLink>
              <CtaLink cta="register">{copy.mobile.secondaryCta}</CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.access.howToCard.title}</h2>
              <p className="mt-3 text-sm text-ink-muted">{copy.access.howToCard.body}</p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.access.promotionsCard.title}</h2>
              <p className="mt-3 text-sm text-ink-muted">{copy.access.promotionsCard.body}</p>
              <Link
                href={localizePath("/promotions/", locale)}
                className="mt-4 inline-flex text-sm font-semibold text-brand-700"
              >
                {copy.access.promotionsCard.linkLabel} →
              </Link>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.access.vipPaymentsCard.title}</h2>
              <p className="mt-3 text-sm text-ink-muted">{copy.access.vipPaymentsCard.body}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
                <Link href={localizePath("/vip/", locale)}>{copy.access.vipPaymentsCard.vipLinkLabel}</Link>
                <Link href={localizePath("/payment/", locale)}>{copy.access.vipPaymentsCard.paymentLinkLabel}</Link>
              </div>
            </Card>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {promotions.slice(0, 3).map((promo) => (
              <Card key={promo.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{promo.category}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{promo.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{promo.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} description={copy.faq.description} />
          <Accordion items={copy.faq.items} />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            {copy.faq.links.map((link) => (
              <Link key={link.href} href={localizePath(link.href, locale)}>
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
