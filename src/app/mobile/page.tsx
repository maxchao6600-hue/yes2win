import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, getGameCategories, getHubsCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "mobile",
    path: "/mobile/",
    locale,
    ogImage: "/images/og/og-mobile.png",
  });
}

export default async function MobilePage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).mobile;
  const categories = getGameCategories(locale);
  const homePath = localizePath("/", locale);
  const mobilePath = localizePath("/mobile/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={mobilePath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: mobilePath },
        ]}
      />

      {/* 1. Mobile overview / Hero */}
      <PageHero
        tone="dark"
        image="/images/brand/yes2win-mobile-device.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink cta="login" variant="outline">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      {/* 2. Browser access */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-10 rounded-full bg-brand-200/50 blur-3xl" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.2rem] border border-brand-900/15 shadow-2xl">
              <Image
                src="/images/brand/yes2win-mobile-device.webp"
                alt={copy.browser.imageAlt}
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.browser.eyebrow}
              title={copy.browser.title}
              description={copy.browser.description}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.browser.cards.map((item) => (
                <Card key={item.title}>
                  <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Android + iOS */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.devices.eyebrow}
            title={copy.devices.title}
            description={copy.devices.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[copy.devices.android, copy.devices.ios].map((device) => (
              <Card key={device.title}>
                <h2 className="text-2xl font-bold text-ink">{device.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{device.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {device.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Mobile games */}
      <Section>
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
                className="group relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-line shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
              >
                <Image
                  src={media.categories[category.id as keyof typeof media.categories]}
                  alt={`${category.shortName} ${copy.games.imageAltSuffix}`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/92 via-brand-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h2 className="text-lg font-bold">{category.shortName}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-50/90">{category.mobileNote}</p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-brand-200">
                    {category.ctaLabel} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Promotions + account access */}
      <Section tone="white">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={media.promotions.welcome}
                alt={copy.promotionsCard.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <SectionHeading
                eyebrow={copy.promotionsCard.eyebrow}
                title={copy.promotionsCard.title}
                description={copy.promotionsCard.description}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink href={localizePath("/promotions/", locale)} variant="secondary" size="sm">
                  {copy.promotionsCard.primaryCta}
                </CtaLink>
                <CtaLink cta="register" size="sm">
                  {copy.promotionsCard.secondaryCta}
                </CtaLink>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={media.accountAccess}
                alt={copy.accountCard.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <SectionHeading
                eyebrow={copy.accountCard.eyebrow}
                title={copy.accountCard.title}
                description={copy.accountCard.description}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  {copy.accountCard.registerCta}
                </CtaLink>
                <CtaLink cta="login" variant="secondary" size="sm">
                  {copy.accountCard.loginCta}
                </CtaLink>
                <CtaLink href={localizePath("/register-guide/", locale)} variant="secondary" size="sm">
                  {copy.accountCard.guideCta}
                </CtaLink>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* 6. Payments */}
      <Section tone="green">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={copy.payments.eyebrow}
              title={copy.payments.title}
              description={copy.payments.description}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.payments.cards.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <CtaLink href={localizePath("/payment/", locale)} variant="secondary" size="sm">
                {copy.payments.cta}
              </CtaLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
            <Image
              src={media.promotions.deposit}
              alt={copy.payments.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 7. Navigation tips */}
      <Section>
        <Container>
          <SectionHeading eyebrow={copy.tips.eyebrow} title={copy.tips.title} description={copy.tips.description} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.tips.items.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Screenshots / visuals + how to access */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)] lg:mx-auto">
            <Image
              src="/images/brand/yes2win-mobile-device.webp"
              alt={copy.howToAccess.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.howToAccess.eyebrow}
              title={copy.howToAccess.title}
              description={copy.howToAccess.description}
            />
            <ol className="mt-6 space-y-4">
              {copy.howToAccess.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-line bg-brand-50/50 px-4 py-4">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink-muted">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">{copy.howToAccess.primaryCta}</CtaLink>
              <CtaLink href={localizePath("/games/", locale)} variant="secondary">
                {copy.howToAccess.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. FAQ */}
      <Section>
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
