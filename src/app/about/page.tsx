import Link from "next/link";
import Image from "next/image";
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
    "Learn how YES2WIN Official Partner works as an information and access gateway connected to the YES2WIN ecosystem.",
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
        description="An official partner information and access gateway connected to the YES2WIN ecosystem — helping visitors understand games, offers and next steps."
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
              YES2WIN is the entertainment brand and platform spanning slots, live casino, sports, fishing and lottery.
              Members interact with games, payments, promotions and account tools through the official platform.
            </p>
          </Card>
          <Card hover={false} className="border-brand-300 bg-brand-50/70">
            <h2 className="text-2xl font-bold text-ink">{siteConfig.identity}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              This partner website provides orientation and configured access CTAs. It explains categories and pathways
              while remaining clear about its partner role.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-ink">Explore the YES2WIN ecosystem</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              YES2WIN brings together multiple entertainment paths in one ecosystem. This partner website helps you
              understand each area before you continue into the live platform for current games, promotions, account
              tools and payment actions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Games", "Slots, live casino, sports, fishing and lottery guides with direct internal links.", "/games/"],
                ["Promotions", "Offer categories, campaign structure and how to confirm live terms safely.", "/promotions/"],
                ["Payment", "Deposit and withdrawal education covering common supported payment categories.", "/payment/"],
                ["Mobile", "Practical guidance for phone-friendly access, browsing and account movement.", "/mobile/"],
              ].map(([title, copy, href]) => (
                <Card key={title}>
                  <h3 className="text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy}</p>
                  <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                    Explore {title} →
                  </Link>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/about/hero.webp"
              alt="YES2WIN ecosystem overview artwork"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Official partner role",
                body: "This website acts as an information and navigation layer. It explains YES2WIN clearly while linking outward to configured Register, Login and Partner destinations.",
              },
              {
                title: "Useful before signup",
                body: "You can review category guides, payment overviews, mobile tips, FAQ answers and responsible gaming guidance before you decide to continue.",
              },
              {
                title: "Clear scope",
                body: "Live games, account records, cashier tools, verification and promotions claiming all happen on the official platform after you log in.",
              },
              {
                title: "Premium orientation",
                body: "The goal is to make YES2WIN feel coherent, visual and easy to understand instead of behaving like a thin text-only SEO page.",
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

      <Section>
        <Container narrow className="prose-legal">
          <h2>What this website is for</h2>
          <p>
            Visitors often want a calm place to understand YES2WIN before registering. Here you will find category
            guides, promotion types, VIP positioning, payment overviews, mobile tips, partner pathways, FAQ answers and
            responsible gaming guidance.
          </p>

          <h2>How access works</h2>
          <p>
            Register and Login open the official YES2WIN platform destinations configured for this site. Account tools
            and live lobbies live there — not as a fake local login on this partner page.
          </p>

          <h2>Explore further</h2>
          <p>
            Continue to <Link href="/games/">Games</Link>, <Link href="/promotions/">Promotions</Link>,{" "}
            <Link href="/vip/">VIP</Link>, <Link href="/payment/">Payment</Link>, <Link href="/mobile/">Mobile</Link>,{" "}
            <Link href="/partner/">Partner</Link> or the <Link href="/faq/">FAQ</Link>.
          </p>

          <h2>Why use this gateway</h2>
          <p>
            Some visitors want a calmer way to understand what YES2WIN includes before they are inside a live lobby.
            This gateway gives you page-by-page context, internal links between related topics and a clear distinction
            between public guidance on this site and transactional actions on the platform itself.
          </p>

          <h2>Editorial principles</h2>
          <p>
            We do not invent game catalogues, bonus values, VIP tiers, fees, processing times, partner commissions or
            legal claims that are not confirmed here. Where live details can change, we direct you to the official
            platform so you can check the most current information directly.
          </p>

          <p className="rounded-2xl border border-line bg-white p-4 text-sm">{siteConfig.disclaimer}</p>
        </Container>
      </Section>

      <FinalCta
        title="Continue into YES2WIN"
        description="Register or log in through the official platform links configured for this partner gateway."
      />
    </>
  );
}
