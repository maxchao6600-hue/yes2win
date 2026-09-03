import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About YES2WIN Official Partner | YES2WIN Ecosystem",
  description:
    "Learn how the YES2WIN Official Partner website works, how it connects to the YES2WIN ecosystem, and how it helps users navigate games, access and support.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        name="About YES2WIN Official Partner"
        description="Learn how the YES2WIN Official Partner website works."
        path="/about/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />
      <PageHero
        eyebrow="About"
        title="About YES2WIN Official Partner"
        description="This website is a partner information portal connected to the YES2WIN ecosystem. It helps visitors understand categories, access pathways and support options — without claiming to be the primary YES2WIN corporate website."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <Section tone="white">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card hover={false}>
            <h2 className="text-2xl font-bold text-ink">YES2WIN</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              YES2WIN is the entertainment brand and platform ecosystem spanning multiple game categories. Members
              interact with games, payments, promotions and account tools through the official platform experience.
            </p>
          </Card>
          <Card hover={false} className="border-brand-300 bg-brand-50/70">
            <h2 className="text-2xl font-bold text-ink">{siteConfig.identity}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              This partner website provides orientation, education and configured access CTAs. It is designed to feel
              premium and trustworthy while remaining clear about its partner role.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container narrow className="prose-legal">
          <h2>Purpose of this website</h2>
          <p>
            Visitors often need a calm, structured place to understand what YES2WIN offers before registering. This site
            covers ecosystem categories, promotions structure, VIP positioning, payment overviews, mobile access, partner
            pathways, FAQ and responsible gaming guidance.
          </p>

          <h2>User-oriented information</h2>
          <p>
            Content is written for real decisions: how to register, where to log in, which categories exist, how
            promotions are organised and where to find support. We avoid unsupported license claims, fabricated statistics
            and guaranteed-outcome language.
          </p>

          <h2>Ecosystem overview</h2>
          <p>
            Explore <Link href="/games/">Games</Link>, <Link href="/promotions/">Promotions</Link>,{" "}
            <Link href="/vip/">VIP</Link>, <Link href="/payment/">Payment</Link> and{" "}
            <Link href="/mobile/">Mobile</Link> to understand the experience. Partners can continue to{" "}
            <Link href="/partner/">Partner</Link>, and everyone can review the <Link href="/faq/">FAQ</Link>.
          </p>

          <p className="rounded-2xl border border-line bg-white p-4 text-sm">
            {siteConfig.disclaimer}
          </p>
        </Container>
      </Section>

      <FinalCta
        title="Continue into the YES2WIN ecosystem"
        description="Register or log in through the official platform links configured for this partner gateway."
      />
    </>
  );
}
