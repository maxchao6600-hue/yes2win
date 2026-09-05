import Link from "next/link";
import Image from "next/image";
import type { PaymentMethod } from "@/config/content/payments";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import {
  getDictionary,
  getHubsCopy,
  getPaymentDisclaimer,
  getPaymentMethods,
} from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "payment",
    path: "/payment/",
    locale,
    ogImage: "/images/og/og-payment.png",
  });
}

type MethodCopy = ReturnType<typeof getHubsCopy>["payment"]["methodDetail"];

function MethodDetail({
  method,
  copy,
  locale,
  registerLabel,
  tone = "white",
  reverse = false,
}: {
  method?: PaymentMethod;
  copy: MethodCopy;
  locale: Locale;
  registerLabel: string;
  tone?: "white" | "green" | "default";
  reverse?: boolean;
}) {
  if (!method) return null;

  return (
    <Section tone={tone} id={method.id}>
      <Container>
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <SectionHeading eyebrow={method.category} title={method.name} description={method.description} />
            <p className="mt-5 rounded-2xl border border-line bg-white/90 p-4 text-sm leading-relaxed text-ink-muted">
              {method.notes}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                {registerLabel}
              </CtaLink>
              <CtaLink href={localizePath("/faq/#payments", locale)} variant="secondary" size="sm">
                {copy.faqCta}
              </CtaLink>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(2,44,34,0.45)]">
            <Image
              src={method.image}
              alt={`${method.name} ${copy.iconAltSuffix}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default async function PaymentPage() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const copy = getHubsCopy(locale).payment;
  const paymentMethods = getPaymentMethods(locale);
  const paymentDisclaimer = getPaymentDisclaimer(locale);
  const methodById = Object.fromEntries(paymentMethods.map((method) => [method.id, method])) as Record<
    string,
    PaymentMethod | undefined
  >;
  const homePath = localizePath("/", locale);
  const paymentPath = localizePath("/payment/", locale);
  const detailProps = {
    copy: copy.methodDetail,
    locale,
    registerLabel: copy.methodDetail.registerCta,
  };

  return (
    <>
      <WebPageJsonLd name={copy.jsonLdName} description={copy.jsonLdDescription} path={paymentPath} locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: ui.breadcrumb.home, path: homePath },
          { name: copy.crumb, path: paymentPath },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-promotion-deposit.webp"
        imageAlt={copy.heroImageAlt}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        crumbsLabel={ui.breadcrumb.label}
        crumbs={[{ label: ui.breadcrumb.home, href: homePath }, { label: copy.crumb }]}
        actions={
          <>
            <CtaLink cta="register">{copy.primaryCta}</CtaLink>
            <CtaLink href={localizePath("/faq/#payments", locale)} variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={copy.overview.eyebrow}
            title={copy.overview.title}
            description={copy.overview.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.overview.cards.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/80 p-4 text-sm leading-relaxed text-ink-muted">
            {paymentDisclaimer}
          </p>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.visuals.eyebrow}
            title={copy.visuals.title}
            description={copy.visuals.description}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {copy.visuals.methods.map((method) => (
              <div
                key={method.id}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`/images/payment/${method.id}.webp`}
                    alt={`${method.label} ${copy.visuals.iconAltSuffix}`}
                    fill
                    sizes="(max-width:768px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-3 py-3 text-center text-sm font-semibold text-ink">{method.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <MethodDetail {...detailProps} method={methodById["bank-transfer"]} tone="white" />
      <MethodDetail {...detailProps} method={methodById["e-wallet"]} tone="green" reverse />

      <Section id="ewallet-brands">
        <Container>
          <SectionHeading
            eyebrow={copy.ewalletBrands.eyebrow}
            title={copy.ewalletBrands.title}
            description={copy.ewalletBrands.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(["duitnow", "tng", "grabpay"] as const).map((id) => {
              const method = methodById[id];
              if (!method) return null;
              return (
                <article
                  key={method.id}
                  className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-28px_rgba(6,78,59,0.45)]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={method.image}
                      alt={`${method.name} ${copy.ewalletBrands.iconAltSuffix}`}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                      {method.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-ink">{method.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{method.description}</p>
                    <p className="mt-4 text-sm text-ink-muted">{method.notes}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <MethodDetail {...detailProps} method={methodById["online-banking"]} tone="white" />
      <MethodDetail {...detailProps} method={methodById["bank-cards"]} tone="green" reverse />
      <MethodDetail {...detailProps} method={methodById.crypto} tone="white" />

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.currency.eyebrow}
            title={copy.currency.title}
            description={copy.currency.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="text-xl font-bold text-ink">{copy.currency.local.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.currency.local.body}</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-ink">{copy.currency.crypto.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.currency.crypto.body}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.deposits.eyebrow}
              title={copy.deposits.title}
              description={copy.deposits.description}
            />
            <div className="mt-6 space-y-3">
              {copy.deposits.steps.map((item, index) => (
                <div key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted">
                  <span className="font-semibold text-brand-700">{String(index + 1).padStart(2, "0")}.</span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.withdrawals.eyebrow}
              title={copy.withdrawals.title}
              description={copy.withdrawals.description}
            />
            <div className="mt-6 space-y-3">
              {copy.withdrawals.steps.map((item, index) => (
                <div key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted">
                  <span className="font-semibold text-brand-700">{String(index + 1).padStart(2, "0")}.</span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {copy.safety.map((item, index) => (
              <Card key={item.title} className={index === copy.safety.length - 1 ? "border-brand-300 bg-brand-50/70" : undefined}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow={copy.issues.eyebrow}
            title={copy.issues.title}
            description={copy.issues.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.issues.items.map((item) => (
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
