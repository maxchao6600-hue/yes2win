import Link from "next/link";
import Image from "next/image";
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
    "YES2WIN payment overview covering bank transfer, e-wallet, DuitNow, TNG, GrabPay, online banking, bank cards and crypto — verify live details in the official cashier.",
  path: "/payment/",
  ogImage: "/images/og/og-payment.png",
});

const visualMethods = [
  { id: "bank", label: "Bank Transfer", src: "/images/payment/bank.webp" },
  { id: "ewallet", label: "E-Wallet", src: "/images/payment/ewallet.webp" },
  { id: "duitnow", label: "DuitNow", src: "/images/payment/duitnow.webp" },
  { id: "tng", label: "Touch n Go", src: "/images/payment/tng.webp" },
  { id: "online", label: "Online Banking", src: "/images/payment/online.webp" },
  { id: "crypto", label: "Crypto", src: "/images/payment/crypto.webp" },
  { id: "cards", label: "Bank Cards", src: "/images/payment/cards.webp" },
  { id: "grab", label: "GrabPay", src: "/images/payment/grab.webp" },
];

const methodById = Object.fromEntries(paymentMethods.map((method) => [method.id, method]));

const depositGuide = [
  "Sign in through this partner gateway and open the official cashier.",
  "Choose an available deposit method shown for your account and region.",
  "Follow the on-screen steps for that channel — bank, e-wallet, card or crypto.",
  "Confirm the transaction status in your account records after submission.",
];

const withdrawalGuide = [
  "Open withdrawals from your account once funds are available to request.",
  "Select a supported payout method displayed in the live cashier.",
  "Complete any verification or payment-detail checks requested by the platform.",
  "Track the request in transaction history and respond to follow-up prompts if asked.",
];

const commonIssues = [
  {
    title: "Method not visible",
    body: "Availability depends on region, account status and live cashier configuration. If a channel is missing, it is usually unsupported for your account at that time.",
  },
  {
    title: "Pending transaction",
    body: "Some methods need bank or network confirmation. Review your transaction records and wait for the platform status update before submitting duplicates.",
  },
  {
    title: "Verification required",
    body: "Identity or payment verification may be requested before certain withdrawals. Use only official upload flows inside your account.",
  },
  {
    title: "Incorrect payment details",
    body: "Double-check account names, wallet addresses and bank references before confirming. Mismatched details can delay processing.",
  },
];

const paymentFaqs = [
  {
    id: "pay-1",
    question: "Which payment methods can I use?",
    answer:
      "YES2WIN references Bank Transfer, E-Wallet options (including TNG, DuitNow and GrabPay where supported), Online Banking, Bank Cards and Cryptocurrency. Exact availability depends on region, account status and the live cashier.",
  },
  {
    id: "pay-2",
    question: "Are fees and limits listed here?",
    answer:
      "No. Exact fees, minimums, maximums and processing times change and must be confirmed in your cashier after login. This partner page does not invent those figures.",
  },
  {
    id: "pay-3",
    question: "Which cryptocurrencies are mentioned?",
    answer:
      "YES2WIN references supported coins such as BTC, ETH and USDT where crypto payments are enabled. Networks, confirmation requirements and availability are shown at checkout on the platform.",
  },
  {
    id: "pay-4",
    question: "Do I need verification for withdrawals?",
    answer:
      "Many platforms require identity or payment verification before larger withdrawals. Follow the prompts shown in your account and use official document upload tools only.",
  },
];

function MethodDetail({
  methodId,
  tone = "white",
  reverse = false,
}: {
  methodId: string;
  tone?: "white" | "green" | "default";
  reverse?: boolean;
}) {
  const method = methodById[methodId];
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
            <SectionHeading
              eyebrow={method.category}
              title={method.name}
              description={method.description}
            />
            <p className="mt-5 rounded-2xl border border-line bg-white/90 p-4 text-sm leading-relaxed text-ink-muted">
              {method.notes}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                Register Now
              </CtaLink>
              <CtaLink href="/faq/#payments" variant="secondary" size="sm">
                Payments FAQ
              </CtaLink>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(2,44,34,0.45)]">
            <Image
              src={method.image}
              alt={`${method.name} payment icon`}
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
        description="A clear guide to payment categories associated with YES2WIN — bank transfer, e-wallets, online banking, bank cards and crypto. Availability depends on region, account status and the live platform cashier."
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
            eyebrow="Overview"
            title="How YES2WIN payments are organised"
            description="This partner page explains verified method categories so you know what to look for in the cashier. Fees, limits and processing times are confirmed only on the official platform."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Verified categories",
                body: "Bank Transfer, E-Wallet (TNG, DuitNow, GrabPay), Online Banking, Bank Cards and Crypto are referenced for YES2WIN where supported.",
              },
              {
                title: "Live cashier decides",
                body: "The methods you see after login reflect your region and account status — not every icon on this page will appear for every member.",
              },
              {
                title: "No invented figures",
                body: "This site does not publish fixed fees, deposit limits, withdrawal caps or guaranteed processing times.",
              },
              {
                title: "Records stay in-account",
                body: "Transaction history, verification prompts and payout status live inside the official platform tools.",
              },
            ].map((item) => (
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
            eyebrow="Method visuals"
            title="Payment channels at a glance"
            description="Visual icons for commonly referenced YES2WIN payment pathways. Use them as orientation — then confirm what is enabled in your cashier."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {visualMethods.map((method) => (
              <div
                key={method.id}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={method.src}
                    alt={`${method.label} icon`}
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

      <MethodDetail methodId="bank-transfer" tone="white" />
      <MethodDetail methodId="e-wallet" tone="green" reverse />

      <Section id="ewallet-brands">
        <Container>
          <SectionHeading
            eyebrow="E-Wallet brands"
            title="DuitNow, Touch n Go and GrabPay"
            description="YES2WIN references DuitNow, TNG and GrabPay among e-wallet style options. Whether each brand appears depends on market support and your account."
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
                      alt={`${method.name} icon`}
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

      <MethodDetail methodId="online-banking" tone="white" />
      <MethodDetail methodId="bank-cards" tone="green" reverse />
      <MethodDetail methodId="crypto" tone="white" />

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Currency support"
            title="What this page can say about currencies"
            description="Currency and crypto asset support is determined by the live platform. This partner site does not invent exchange rates, network fees or settlement times."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="text-xl font-bold text-ink">Local banking & e-wallets</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Bank transfer, online banking, cards and e-wallet brands appear according to regional cashier
                configuration. Supported banks and wallets are listed inside your account when eligible.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-ink">Crypto coins referenced</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Where cryptocurrency is enabled, YES2WIN references supported coins such as BTC, ETH and USDT. Confirm
                networks, wallet requirements and confirmation steps at checkout — fees and limits are not published as
                fixed figures here.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Deposits"
              title="Deposit guide"
              description="A practical outline for funding your account through the official cashier."
            />
            <div className="mt-6 space-y-3">
              {depositGuide.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted"
                >
                  <span className="font-semibold text-brand-700">
                    {String(index + 1).padStart(2, "0")}.
                  </span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Withdrawals"
              title="Withdrawal guide"
              description="Request payouts through supported methods and complete any checks the platform asks for."
            />
            <div className="mt-6 space-y-3">
              {withdrawalGuide.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted"
                >
                  <span className="font-semibold text-brand-700">
                    {String(index + 1).padStart(2, "0")}.
                  </span>{" "}
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
            <Card>
              <h2 className="text-xl font-bold text-ink">Verification</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Identity or payment verification may be required before certain withdrawals. Follow official platform
                prompts and avoid sharing documents through unofficial channels.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Transaction records</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Deposits, withdrawals and status updates are recorded in your account history. Use those records when
                checking progress or contacting support.
              </p>
            </Card>
            <Card className="border-brand-300 bg-brand-50/70">
              <h2 className="text-xl font-bold text-ink">Fees & limits</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Fees, minimums, maximums and processing times are not published as fixed figures on this partner site
                because they vary. Confirm them in the live cashier.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Common issues"
            title="What to check when something looks wrong"
            description="Most payment questions start with availability, pending status or verification — not with inventing new fee tables."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {commonIssues.map((item) => (
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
            <SectionHeading
              eyebrow="FAQ"
              title="Payment questions"
              description="Need more detail? Continue to the full FAQ or contact pathways."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Full payments FAQ", href: "/faq/#payments" },
                { label: "Related promotions", href: "/promotions/" },
                { label: "Browse games", href: "/games/" },
                { label: "Contact support", href: "/contact/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:border-brand-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Accordion items={paymentFaqs} />
        </Container>
      </Section>

      <FinalCta
        title="Ready to use YES2WIN payments?"
        description="Register or log in to open the official cashier and confirm the methods available for your account."
      />
    </>
  );
}
