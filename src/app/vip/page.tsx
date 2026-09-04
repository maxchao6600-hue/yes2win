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
import { getDictionary, getHubsCopy, getVipContent } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "vip",
    path: "/vip/",
    locale,
    ogImage: "/images/og/og-vip.png",
  });
}

export default async function VipPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).vip;
  const vipContent = getVipContent(locale);
  const homePath = localizePath("/", locale);
  const vipPath = localizePath("/vip/", locale);
  const contactPath = localizePath("/contact/", locale);

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={vipPath} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: vipPath },
        ]}
      />
      <PageHero
        tone="dark"
        image="/images/brand/yes2win-vip-hero.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={vipContent.headline}
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={copy.intro.eyebrow}
                title={copy.intro.title}
                description={vipContent.intro}
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{vipContent.disclaimer}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  {copy.intro.registerCta}
                </CtaLink>
                <CtaLink href={contactPath} variant="secondary" size="sm">
                  {copy.intro.contactCta}
                </CtaLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/brand/yes2win-vip-hero.webp"
                alt={copy.intro.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.benefits.eyebrow}
            title={copy.benefits.title}
            description={copy.benefits.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {vipContent.sections.map((section, index) => (
              <Card key={section.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{section.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)] lg:order-2">
              <Image
                src="/images/brand/yes2win-vip-personal.webp"
                alt={copy.personalised.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={copy.personalised.eyebrow}
                title={copy.personalised.title}
                description={copy.personalised.description}
              />
              <div className="mt-6 space-y-3">
                {copy.personalised.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={copy.prioritySupport.eyebrow}
                title={copy.prioritySupport.title}
                description={copy.prioritySupport.description}
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{copy.prioritySupport.note}</p>
              <div className="mt-6">
                <CtaLink href={contactPath} variant="secondary" size="sm">
                  {copy.prioritySupport.cta}
                </CtaLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/brand/yes2win-vip-personal.webp"
                alt={copy.prioritySupport.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/brand/yes2win-vip-events.webp"
                alt={copy.events.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={copy.events.eyebrow}
                title={copy.events.title}
                description={copy.events.description}
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{copy.events.note}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.recognition.eyebrow}
            title={copy.recognition.title}
            description={copy.recognition.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ...copy.recognition.cards,
              { title: copy.recognition.disclaimerCardTitle, body: vipContent.disclaimer },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.journey.eyebrow}
            title={copy.journey.title}
            description={copy.journey.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.journey.steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-brand-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.howItWorks.eyebrow}
            title={copy.howItWorks.title}
            description={copy.howItWorks.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.howItWorks.items.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} description={copy.faq.description} />
            <div className="mt-6 flex flex-wrap gap-3">
              {copy.faq.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizePath(link.href, locale)}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:border-brand-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Accordion items={copy.faq.items} />
        </Container>
      </Section>

      <FinalCta locale={locale} title={copy.finalCta.title} description={copy.finalCta.description} />
    </>
  );
}
