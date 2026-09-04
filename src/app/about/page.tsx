import Image from "next/image";
import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About YES2WIN Official Partner | YES2WIN Ecosystem",
  description:
    "Learn how YES2WIN Official Partner works as an information and access gateway connected to the YES2WIN ecosystem — games, promotions, VIP, payments and mobile.",
  path: "/about/",
});

const imageMap: Record<string, string> = {
  slots: "/images/categories/slots.webp",
  "live-casino": "/images/categories/live-casino.webp",
  sports: "/images/categories/sports.webp",
  fishing: "/images/categories/fishing.webp",
  lottery: "/images/categories/lottery.webp",
};

const siteProvides = [
  {
    title: "Category orientation",
    body: "Clear guides for games, promotions, VIP, payments and mobile so visitors understand YES2WIN before they continue.",
  },
  {
    title: "Access pathways",
    body: "Register, Login and Partner CTAs route into the official platform destinations connected to this partner gateway.",
  },
  {
    title: "Support navigation",
    body: "FAQ answers, contact pathways and responsible gaming guidance help people find the next practical step.",
  },
  {
    title: "Partner education",
    body: "A dedicated partner journey explains sharing, resources and support without inventing commissions or income guarantees.",
  },
];

const faqCards = [
  {
    title: "Is this the main YES2WIN website?",
    body: "No. This is an official partner information and access gateway connected to the YES2WIN ecosystem — not the primary corporate website.",
  },
  {
    title: "Where do live games and payments happen?",
    body: "Live lobbies, cashier tools, verification and account records sit on the official YES2WIN platform after Register or Login.",
  },
  {
    title: "What should I explore first?",
    body: "Start with Games, Promotions, Payment or Mobile depending on your question, then continue into the platform when you are ready.",
  },
  {
    title: "Can partners use these pages?",
    body: "Yes. Public pages can support educational messaging. Do not misrepresent this site as the primary corporate YES2WIN website.",
  },
];

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        name="About YES2WIN Official Partner"
        description="Learn how the YES2WIN Official Partner website works as an information and access gateway."
        path="/about/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />

      {/* 1. Hero / About YES2WIN */}
      <PageHero
        eyebrow="About"
        title="About YES2WIN Official Partner"
        description="An official partner information and access gateway connected to the YES2WIN ecosystem — helping visitors understand games, offers and next steps with clarity."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Access YES2WIN</CtaLink>
            <CtaLink href="/partner/" variant="secondary">
              Partner pathway
            </CtaLink>
          </>
        }
      />

      {/* 2. Brand */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Brand"
              title="YES2WIN — YES is the Choice. WIN is the Result."
              description="YES2WIN is the entertainment brand and platform spanning slots, live casino, sports, fishing and lottery. Members interact with games, payments, promotions and account tools through the official platform."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card hover={false}>
                <h2 className="text-xl font-bold text-ink">YES2WIN</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  The multi-category entertainment platform where live play, cashier actions and account tools take place
                  after registration or login.
                </p>
              </Card>
              <Card hover={false} className="border-brand-300 bg-brand-50/70">
                <h2 className="text-xl font-bold text-ink">{siteConfig.identity}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  This partner website provides orientation, category education and access CTAs while remaining clear
                  about its partner role in the wider ecosystem.
                </p>
              </Card>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/about/hero.webp"
              alt="YES2WIN brand and ecosystem overview artwork"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* 3. Ecosystem */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/about/map.webp"
              alt="YES2WIN ecosystem map visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Ecosystem"
              title="One entertainment world with clear pathways"
              description="YES2WIN brings together multiple entertainment paths in one ecosystem. This partner website helps you understand each area before you continue into the live platform."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Games", "Category guides with direct internal links.", "/games/"],
                ["Promotions", "Offer types and how to confirm live terms.", "/promotions/"],
                ["VIP", "Recognition and premium member experience.", "/vip/"],
                ["Payment", "Deposit and withdrawal category education.", "/payment/"],
                ["Mobile", "Phone-friendly access and browsing tips.", "/mobile/"],
                ["Partner", "Sharing journey, resources and support.", "/partner/"],
              ].map(([title, copy, href]) => (
                <Card key={title}>
                  <h3 className="text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy}</p>
                  <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                    Explore {title} →
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Games */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Games"
            title="Entertainment categories at a glance"
            description="Browse the major YES2WIN paths on this partner site, then open the live lobby after Register or Login to see titles available to your account."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {gameCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imageMap[category.id]}
                    alt={`${category.shortName} category visual`}
                    fill
                    sizes="(max-width:640px) 100vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-lg font-bold">{category.shortName}</h2>
                    <p className="mt-1 text-xs text-brand-50/90">{category.highlights[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Promotions + VIP */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Offers & recognition"
            title="Promotions and VIP in context"
            description="Understand how offers and member recognition are framed here — then confirm live details inside the official platform."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-ink">Promotions</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Welcome-style offers, deposit campaigns, weekly promotions, rebates and related rewards are explained as
                categories — never as invented percentages or fixed cash figures on this partner site.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href="/promotions/" variant="secondary" size="sm">
                  View promotions
                </CtaLink>
                <CtaLink cta="register" size="sm">
                  Check live offers
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">VIP experience</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                VIP recognition focuses on service, priority support and curated moments. Benefits are not financial
                guarantees and are shared through official VIP channels when applicable.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href="/vip/" variant="secondary" size="sm">
                  Explore VIP
                </CtaLink>
                <Link href="/faq/" className="text-sm font-semibold text-brand-700">
                  Member FAQ →
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Payment + Mobile */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Payment"
              title="Deposits and withdrawals explained calmly"
              description="Common payment categories include bank transfer, e-wallet, online banking and cryptocurrency. Exact fees and limits appear in the live cashier after login."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/payment/" variant="secondary" size="sm">
                Payment guide
              </CtaLink>
              <CtaLink href="/faq/#payments" variant="secondary" size="sm">
                Payments FAQ
              </CtaLink>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Mobile"
              title="YES2WIN on the devices you already use"
              description="Mobile browsing is a core path for category discovery, promotions review and account movement. This partner site routes access through Access YES2WIN / Login rather than unverified store badges."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/mobile/" variant="secondary" size="sm">
                Mobile guide
              </CtaLink>
              <CtaLink cta="register" size="sm">
                Access YES2WIN
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Partner role */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Partner role"
              title="How this website fits the YES2WIN journey"
              description="This site acts as an information and navigation layer. It explains YES2WIN clearly while linking outward to Register, Login and Partner destinations."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Useful before signup",
                  body: "Review category guides, payment overviews, mobile tips, FAQ answers and responsible gaming guidance before you decide to continue.",
                },
                {
                  title: "Clear scope",
                  body: "Live games, account records, cashier tools, verification and promotions claiming all happen on the official platform after you log in.",
                },
                {
                  title: "Partner pathway",
                  body: "Creators, communities and referral partners can learn the sharing journey here, then open official partner access when ready.",
                },
                {
                  title: "Premium orientation",
                  body: "The goal is to make YES2WIN feel coherent and easy to understand instead of behaving like a thin text-only SEO page.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-44px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/about/platform-access.webp"
              alt="YES2WIN platform access through the partner gateway"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 8. What this website provides */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="This website"
            title="What YES2WIN Official Partner provides"
            description="A calm place to understand the ecosystem, compare pathways and move into official access when you are ready."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteProvides.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/games/">Games</Link>
            <Link href="/promotions/">Promotions</Link>
            <Link href="/vip/">VIP</Link>
            <Link href="/payment/">Payment</Link>
            <Link href="/mobile/">Mobile</Link>
            <Link href="/partner/">Partner</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      {/* 9. FAQ-ish cards + disclaimer */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Quick clarity"
            title="Common questions about this partner site"
            description="Short answers that keep the difference between public guidance and platform actions easy to understand."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqCards.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-10 rounded-2xl border border-line bg-white p-4 text-sm text-ink-muted">
            {siteConfig.disclaimer}
          </p>
        </Container>
      </Section>

      <FinalCta
        title="Continue into YES2WIN"
        description="Register or log in through the official platform links connected to this partner gateway."
      />
    </>
  );
}
