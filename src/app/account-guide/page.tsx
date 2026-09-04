import Image from "next/image";
import Link from "next/link";
import { accountFeatures } from "@/config/content/account";
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
  title: "YES2WIN Account Guide | Profile, Records & Security",
  description:
    "Learn how YES2WIN account tools typically work — profile, security, transaction history, betting records, promotion history, verification and referral options.",
  path: "/account-guide/",
  ogImage: "/images/og/og-home.png",
});

const faqs = [
  {
    id: "ag1",
    question: "Where do account tools live?",
    answer:
      "Profile, records, verification and cashier tools are managed on the official YES2WIN platform after login. This guide explains what to look for before you open those screens.",
  },
  {
    id: "ag2",
    question: "Can I change account details on this partner website?",
    answer:
      "No. This site is an information and access gateway. Use the official platform for profile updates, security changes and payment actions.",
  },
  {
    id: "ag3",
    question: "What if a menu item is missing from my account?",
    answer:
      "Available tools can vary by region, verification status and platform updates. If something expected is missing, check again after login or use official support pathways.",
  },
];

export default function AccountGuidePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Account Guide"
        description="Orientation for YES2WIN account features after login."
        path="/account-guide/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Account Guide", path: "/account-guide/" },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-account-access.webp"
        imageAlt="YES2WIN account artwork"
        eyebrow="Account Guide"
        title="Understand your YES2WIN account"
        description="A practical map of the tools members usually look for after login — without recreating the live account dashboard on this partner site."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Account Guide" },
        ]}
        actions={
          <>
            <CtaLink cta="login">Login</CtaLink>
            <CtaLink href="/register-guide/" variant="secondary">
              Registration guide
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/brand/yes2win-account-access.webp"
              alt="YES2WIN account access overview"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="After login"
              title="What the account area is for"
              description="Once you sign in on the official platform, you can typically move between profile settings, payment tools, activity records and promotion history."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              <li>• Keep personal details accurate for support and verification.</li>
              <li>• Review deposits, withdrawals and play history when needed.</li>
              <li>• Check promotion participation against the live offer terms.</li>
              <li>• Complete verification prompts only through official flows.</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading title="Account feature map" description="Common YES2WIN account areas explained in plain language." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {accountFeatures.map((feature) => (
              <Card key={feature.id}>
                <h2 className="text-xl font-bold text-ink">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
                <p className="mt-4 rounded-xl bg-brand-50/80 p-3 text-xs font-medium text-brand-800">{feature.tip}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">Profile & security</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Update contact details carefully and protect login with a unique password. Payment PIN setup may appear when cashier access requires it.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Records & reports</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Transaction, betting and win/loss views help you understand recent activity. Use them for orientation, not as financial advice.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Promotions & referral</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Promotion history shows what you have engaged with. Referral tools, when enabled, should use official sharing links only.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQ" title="Account questions" />
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
              <Link href="/payment/">Payment guide</Link>
              <Link href="/faq/#account">Account FAQ</Link>
              <Link href="/contact/">Contact</Link>
              <Link href="/responsible-gaming/">Responsible gaming</Link>
            </div>
          </div>
          <Accordion items={faqs} />
        </Container>
      </Section>

      <FinalCta title="Open your YES2WIN account" description="Log in on the official platform to manage profile, records and cashier tools." />
    </>
  );
}
