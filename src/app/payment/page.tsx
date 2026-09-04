import Link from "next/link";
import { paymentDisclaimer, paymentMethods } from "@/config/content/payments";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Payment Methods | Deposit & Withdrawal Guide",
  description:
    "YES2WIN payment overview covering bank transfer, e-wallet, online banking and crypto categories — verify live limits in the official cashier.",
  path: "/payment/",
});

const paymentFaqs = [
  {
    id: "pay-1",
    question: "Which payment methods can I use?",
    answer:
      "Availability depends on region, account status and the live platform cashier. Common categories include bank transfer, e-wallet, online banking and cryptocurrency.",
  },
  {
    id: "pay-2",
    question: "Are fees and limits listed here?",
    answer:
      "No. Exact fees, minimums and maximums change and must be confirmed in your cashier after login.",
  },
  {
    id: "pay-3",
    question: "Do I need verification for withdrawals?",
    answer:
      "Many platforms require identity or payment verification before larger withdrawals. Follow the prompts shown in your account.",
  },
];

export default function PaymentPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Payment Methods"
        description="Payment method categories for YES2WIN."
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
        title="Deposit and withdrawal overview"
        description="A clear guide to payment categories commonly associated with YES2WIN. Availability depends on region, account status and the live platform cashier."
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
          <SectionHeading
            title="Payment method categories"
            description="These categories describe how members typically move funds. Specific brands and banks appear inside your cashier when supported."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
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
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">How deposits work</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Sign in, open the cashier, choose an available method and follow the on-screen steps. Supported options
                appear only for eligible accounts.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">How withdrawals work</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Request a withdrawal from your account, select a supported payout method and complete any verification
                checks requested by the platform.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Verification</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Identity or payment verification may be required before certain withdrawals. Use only the official
                platform upload flows.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Fees & limits</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Fees and limits are not published as fixed figures on this partner site because they vary. Confirm them
                in the live cashier.
              </p>
            </Card>
            <Card className="md:col-span-2">
              <h2 className="text-xl font-bold text-ink">Important notes</h2>
              <p className="mt-3 text-sm text-ink-muted">{paymentDisclaimer}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Payment questions"
            description="Need more detail? Continue to the full FAQ or contact pathways."
          />
          <Accordion items={paymentFaqs} />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/faq/#payments">Full payments FAQ</Link>
            <Link href="/promotions/">Related promotions</Link>
            <Link href="/games/">Browse games</Link>
            <Link href="/contact/">Contact support</Link>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
