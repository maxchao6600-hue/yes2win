import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Register Guide | Account Registration Steps",
  description:
    "Understand the YES2WIN registration flow step by step through this official partner guide before opening the live signup page.",
  path: "/register-guide/",
  ogImage: "/images/og/og-home.png",
});

const steps = [
  {
    step: "01",
    title: "Open the official signup form",
    body: "Use Register Now from this website to continue into the live YES2WIN registration page in the correct environment.",
  },
  {
    step: "02",
    title: "Choose your account details",
    body: "Create the username and password requested by the form. Exact field labels can change as the platform updates.",
  },
  {
    step: "03",
    title: "Provide required personal details",
    body: "Enter only the information requested during signup and keep it accurate in case later verification is needed.",
  },
  {
    step: "04",
    title: "Review promo or referral inputs",
    body: "If the form includes promo-code or referral-code fields, review them carefully before submission rather than guessing values.",
  },
  {
    step: "05",
    title: "Agree to the applicable terms",
    body: "Read the platform terms shown during registration and continue only if you meet the legal age and jurisdiction requirements.",
  },
  {
    step: "06",
    title: "Complete verification or payment PIN setup",
    body: "Some accounts may be prompted for phone verification, confirmation steps or payment PIN setup before full cashier access.",
  },
];

export default function RegisterGuidePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Register Guide"
        description="Step-by-step guidance for the YES2WIN registration flow."
        path="/register-guide/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Register Guide", path: "/register-guide/" },
        ]}
      />
      <PageHero
        eyebrow="Register Guide"
        title="How to register for YES2WIN"
        description="A practical walkthrough of the official YES2WIN signup journey based on the public registration flow. Live fields can change, so always follow the current form."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Register Guide" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/faq/#registration" variant="secondary">
              Registration FAQ
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/home/join.webp"
              alt="YES2WIN account registration guide visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            <Card>
              <h2 className="text-2xl font-bold text-ink">What this guide covers</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                This page explains the signup flow, the types of details you may be asked for and how registration
                connects to payments, verification and first login. It does not recreate the form locally.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">What happens after registration</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                After your account is created, you can sign in to browse game categories, review current promotions,
                open the cashier and check whether additional verification is required for payment activity.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((item) => (
              <Card key={item.step}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">{item.step}</p>
                <h2 className="mt-3 text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Account accuracy",
                body: "Use accurate personal information so future verification or support checks are less likely to be delayed.",
              },
              {
                title: "Password safety",
                body: "Choose a unique password and keep it private. Never share registration credentials with anyone.",
              },
              {
                title: "Payment readiness",
                body: "If a payment PIN or cashier security step appears, complete it carefully because it can affect deposit and withdrawal access later.",
              },
              {
                title: "Need help?",
                body: "Use the FAQ, Contact and Payment Guide pages on this website for orientation before contacting official support channels.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to create your YES2WIN account?"
        description="Continue into the official registration flow when you are ready."
      />
    </>
  );
}
