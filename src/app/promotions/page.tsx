import Link from "next/link";
import Image from "next/image";
import { promotions } from "@/config/content/promotions";
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
  title: "YES2WIN Promotions | Offers & Rewards",
  description:
    "Understand YES2WIN promotion types — welcome offers, deposit campaigns, weekly promotions, rebates and VIP benefits — then check live terms on the platform.",
  path: "/promotions/",
  ogImage: "/images/og/og-promotions.png",
});

const promoImages: Record<string, string> = {
  welcome: "/images/brand/yes2win-promotion-welcome.webp",
  deposit: "/images/brand/yes2win-promotion-deposit.webp",
  weekly: "/images/brand/yes2win-promotion-weekly.webp",
  cashback: "/images/brand/yes2win-promotion-cashback.webp",
  "vip-benefits": "/images/brand/yes2win-promotion-vip.webp",
  special: "/images/brand/yes2win-promotion-special.webp",
};

const claimSteps = [
  {
    step: "01",
    title: "Register or log in",
    description:
      "Create an account or sign in through this partner gateway so you can open the official promotions lobby.",
  },
  {
    step: "02",
    title: "Open Promotions",
    description:
      "Browse active campaign cards on the platform. Featured and category offers appear only when they are live for your account.",
  },
  {
    step: "03",
    title: "Read the full terms",
    description:
      "Review eligibility, opt-in rules, wagering and expiry details next to each offer before you participate.",
  },
  {
    step: "04",
    title: "Opt in or deposit as required",
    description:
      "Follow the on-screen steps for that campaign. Some offers need an opt-in; others link to a qualifying deposit path.",
  },
];

const guidePoints = [
  {
    title: "Start with the campaign card",
    body: "Each live offer summarises who it is for and what actions unlock it. Use the card as your first filter before reading deeper terms.",
  },
  {
    title: "Confirm eligibility in-account",
    body: "Region, account age, prior claims and verification status can all affect what you see. Availability on this partner site is educational only.",
  },
  {
    title: "Treat terms as the source of truth",
    body: "Percentages, amounts, wagering and expiry windows change. Always rely on the official platform wording at the moment you opt in.",
  },
  {
    title: "Ask support when unclear",
    body: "If a campaign rule is ambiguous, use official contact channels rather than assuming a figure published elsewhere.",
  },
];

const promoFaqs = [
  {
    id: "promo-1",
    question: "Does YES2WIN have a welcome bonus?",
    answer:
      "YES2WIN publicly references a Have You YES2WIN Welcome Bonus. Exact live terms — including any percentages, deposit rules and wagering — must be checked on the official platform before you opt in.",
  },
  {
    id: "promo-2",
    question: "Why doesn’t this page list exact offer amounts?",
    answer:
      "Promotion values change over time and can differ by account or region. This partner site explains offer types without inventing figures that may be outdated.",
  },
  {
    id: "promo-3",
    question: "How do I know if I am eligible?",
    answer:
      "Eligibility is confirmed inside your account after login. Campaign cards and terms describe who can join; if an offer is not shown, it is usually unavailable for your account at that time.",
  },
  {
    id: "promo-4",
    question: "Where do VIP-related rewards appear?",
    answer:
      "VIP-oriented benefits are often shared through VIP channels or invitation-led communications. Browse the VIP page for experience context, then confirm live rewards on the platform.",
  },
];

export default function PromotionsPage() {
  const featured = promotions.find((promo) => promo.featured) ?? promotions[0];

  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Promotions"
        description="Promotion types available across the YES2WIN experience."
        path="/promotions/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Promotions", path: "/promotions/" },
        ]}
      />
      <PageHero
        image="/images/brand/yes2win-promotion-welcome.webp"
        imageAlt="YES2WIN promotions artwork"
        eyebrow="Promotions"
        title="YES2WIN offers explained clearly"
        description="Explore welcome, deposit, weekly, cashback, VIP and special campaign types — then confirm live terms on the official platform before you opt in."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Promotions" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/games/" variant="secondary">
              Explore Games
            </CtaLink>
          </>
        }
      />

      <Section tone="dark">
        <Container>
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Featured campaign
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Have You YES2WIN Welcome Bonus
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-50/85 sm:text-base">
                YES2WIN publicly references a Have You YES2WIN Welcome Bonus designed to help new members start with
                extra value. Exact percentages, deposit rules and wagering change over time — check the latest offer on
                the official platform before you opt in.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-100/80">
                This partner page explains the campaign type. Live eligibility and full terms always come from the
                platform promotions lobby after login.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink cta="register">Register Now</CtaLink>
                <CtaLink href="/faq/#promotions" variant="outline">
                  Promotions FAQ
                </CtaLink>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src="/images/brand/yes2win-promotion-welcome.webp"
                alt="YES2WIN welcome bonus campaign artwork"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {promotions.map((promo, index) => {
        const image = promoImages[promo.id] ?? promoImages.welcome;
        const reverse = index % 2 === 1;
        return (
          <Section key={promo.id} tone={index % 2 === 0 ? "white" : "green"} id={promo.id}>
            <Container>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <SectionHeading
                    eyebrow={promo.category}
                    title={promo.title}
                    description={promo.description}
                  />
                  <div className="mt-6 space-y-3 rounded-2xl border border-line bg-white/90 p-5 text-sm text-ink-muted">
                    <p>
                      <span className="font-semibold text-ink">Who it is for:</span> {promo.whoFor}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">How to check:</span> {promo.howToCheck}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">Where terms live:</span> {promo.whereTerms}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">Eligibility note:</span> {promo.eligibility}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CtaLink cta="register" size="sm">
                      Register Now
                    </CtaLink>
                    {promo.id === "vip-benefits" ? (
                      <CtaLink href="/vip/" variant="secondary" size="sm">
                        VIP overview
                      </CtaLink>
                    ) : (
                      <CtaLink href="/terms/" variant="secondary" size="sm">
                        Site terms
                      </CtaLink>
                    )}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
                  <Image
                    src={image}
                    alt={`${promo.title} artwork`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {promo.featured ? (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Featured
                    </span>
                  ) : null}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Promotion guide"
            title="How to read YES2WIN offers"
            description="Use this partner guide to understand campaign structure, then rely on the live platform for current values and rules."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {guidePoints.map((point) => (
              <Card key={point.title}>
                <h3 className="text-xl font-bold text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="How to claim"
            title="A practical path into live promotions"
            description="Claiming happens on the official platform. This outline helps you move from orientation to opt-in without guessing hidden terms."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {claimSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-brand-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Eligibility"
              title="Who can join a campaign"
              description="Eligibility is defined per offer. New-member campaigns, deposit boosts and VIP rewards each follow their own rules."
            />
            <div className="mt-6 space-y-4">
              <Card hover={false}>
                <h3 className="text-lg font-bold text-ink">Common factors</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Account status, prior claims, region and verification can all influence whether an offer appears. The
                  featured welcome path is typically oriented toward newly registered members who meet live campaign
                  rules.
                </p>
              </Card>
              <Card hover={false} className="border-brand-300 bg-brand-50/70">
                <h3 className="text-lg font-bold text-ink">Featured welcome context</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {featured.eligibility} {featured.howToCheck}
                </p>
              </Card>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Terms note"
              title="Always confirm live wording"
              description="This partner site does not invent promo amounts, fees, limits or income guarantees."
            />
            <Card hover={false} className="mt-6">
              <ul className="space-y-3 text-sm leading-relaxed text-ink-muted">
                <li>
                  <span className="font-semibold text-ink">Campaign terms change.</span> Percentages, wagering and
                  expiry windows can update without notice on this informational page.
                </li>
                <li>
                  <span className="font-semibold text-ink">Platform wording wins.</span> If anything here differs from
                  an official campaign card, follow the platform.
                </li>
                <li>
                  <span className="font-semibold text-ink">Read before you deposit.</span> {featured.termsNote}
                </li>
                <li>
                  <span className="font-semibold text-ink">Need broader rules?</span> Review the{" "}
                  <Link href="/terms/" className="font-semibold text-brand-700">
                    site terms overview
                  </Link>{" "}
                  and responsible gaming guidance.
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Promotion questions"
              description="Short answers about welcome offers, eligibility and where live terms appear."
            />
          </div>
          <Accordion items={promoFaqs} />
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="Continue exploring YES2WIN"
            description="Pair promotions with games, VIP context, payments and support pathways."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Browse games", href: "/games/" },
              { label: "VIP benefits", href: "/vip/" },
              { label: "Payment guide", href: "/payment/" },
              { label: "Promotions FAQ", href: "/faq/#promotions" },
              { label: "Terms overview", href: "/terms/" },
              { label: "Contact", href: "/contact/" },
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
        </Container>
      </Section>

      <FinalCta
        title="Ready to check live YES2WIN promotions?"
        description="Register or log in to open the official promotions lobby and confirm current campaign terms."
      />
    </>
  );
}
