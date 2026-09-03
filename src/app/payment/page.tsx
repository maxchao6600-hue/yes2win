import Link from "next/link";
import { paymentDisclaimer, paymentMethods } from "@/config/content/payments";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Payment Methods | Deposit & Withdrawal Guide",
  description:
    "Learn how YES2WIN payment categories are organised — bank transfer, e-wallet, online banking and crypto — and verify live limits on the official platform.",
  path: "/payment/",
});

export default function PaymentPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Payment Methods"
        description="Payment method categories for the YES2WIN ecosystem."
        path="/payment/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Payment", path: "/payment/" },
        ]}
      />
      <PageHero
        eyebrow="Payment"
        title="Payment methods overview"
        description="A clean guide to the payment categories commonly associated with the YES2WIN ecosystem. Method availability depends on your region and account status."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Payment" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/faq/#payments" variant="secondary">
              Payments FAQ
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  {method.category}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-ink">{method.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{method.description}</p>
                <p className="mt-4 rounded-xl bg-brand-50/80 p-3 text-sm text-ink-muted">{method.notes}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
            {paymentDisclaimer}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/games/">Continue to games</Link>
            <Link href="/promotions/">See promotions</Link>
            <Link href="/contact/">Need payment help?</Link>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
