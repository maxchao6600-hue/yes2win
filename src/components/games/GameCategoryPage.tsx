import Link from "next/link";
import Image from "next/image";
import type { GameCategory } from "@/config/content/games";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CategoryVisual, type IconName } from "@/components/ui/Icon";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";

const iconMap: Record<string, IconName> = {
  slots: "slots",
  "live-casino": "live",
  sports: "sports",
  fishing: "fishing",
  lottery: "lottery",
};

const visualMap: Record<string, string> = {
  slots: "/images/categories/slots.webp",
  "live-casino": "/images/categories/live-casino.webp",
  sports: "/images/categories/sports.webp",
  fishing: "/images/categories/fishing.webp",
  lottery: "/images/categories/lottery.webp",
};

const detailMap: Record<
  string,
  {
    formatTitle: string;
    formatItems: string[];
    suitedFor: string[];
    relatedTitle: string;
    relatedCopy: string;
    faq: Array<{ id: string; question: string; answer: string }>;
  }
> = {
  slots: {
    formatTitle: "Game formats & themes",
    formatItems: [
      "Classic, modern and feature-driven slot styles can appear in the live lobby.",
      "Themes often range from simple icons to high-energy fantasy, adventure or character-led visuals.",
      "Short spin cycles make slots easy to sample in mobile sessions.",
    ],
    suitedFor: [
      "Players who want easy entry and fast browsing.",
      "Members looking for variety across themes and pacing.",
      "Mobile-first players who prefer touch-friendly gameplay.",
    ],
    relatedTitle: "Related promotions",
    relatedCopy: "Welcome and deposit-style offers are often the first place members look when exploring slot play. Confirm active terms inside the official promotions area.",
    faq: [
      {
        id: "slots-faq-1",
        question: "How do I find slot titles on YES2WIN?",
        answer: "Register or log in, then browse the slot area inside the live YES2WIN lobby to see the titles currently available to your account.",
      },
      {
        id: "slots-faq-2",
        question: "Can I play slots on mobile?",
        answer: "Yes. Slot layouts are generally well suited to mobile browsing and touch controls when the title is enabled on your device.",
      },
    ],
  },
  "live-casino": {
    formatTitle: "Live table experience",
    formatItems: [
      "Live dealer tables can include familiar formats such as baccarat, roulette and blackjack where available.",
      "Streaming presentation is designed to recreate table energy with real-time dealing and interface controls.",
      "Stable connectivity matters more here than for simpler category pages because the experience depends on live video.",
    ],
    suitedFor: [
      "Players who want a more immersive table-game environment.",
      "Members who enjoy real-time pace rather than automated rounds.",
      "Users comfortable switching between table views and account controls on mobile.",
    ],
    relatedTitle: "Access & etiquette",
    relatedCopy: "Live casino is best approached with a stable network, clear bankroll limits and enough time to follow each table flow. Keep sessions intentional and recreational.",
    faq: [
      {
        id: "live-faq-1",
        question: "Which live casino games might be available?",
        answer: "Common YES2WIN references include baccarat, roulette and blackjack where those tables are supported in the live lobby.",
      },
      {
        id: "live-faq-2",
        question: "Does live casino work on mobile?",
        answer: "Yes, provided your browser and connection can handle real-time streaming smoothly.",
      },
    ],
  },
  sports: {
    formatTitle: "Sports coverage",
    formatItems: [
      "Football, basketball and tennis are core reference categories across sports-oriented YES2WIN content.",
      "Other supported sports may appear depending on current platform coverage and your region.",
      "Markets and live availability are shown on the official platform, not fixed on this partner site.",
    ],
    suitedFor: [
      "Fans who follow major fixtures and want a clear sports navigation flow.",
      "Members who check markets from their phone during the day.",
      "Users who prefer event-driven entertainment over lobby-style browsing.",
    ],
    relatedTitle: "How to follow sports on mobile",
    relatedCopy: "Sports pages work best when you need quick scans of events, categories and related links. For live market details, continue into the official sports area after login.",
    faq: [
      {
        id: "sports-faq-1",
        question: "Which sports are highlighted here?",
        answer: "Football, basketball and tennis are the primary sports referenced here, with other supported sports depending on the live platform.",
      },
      {
        id: "sports-faq-2",
        question: "Do you publish odds on this site?",
        answer: "No. Odds, lines and event availability change live and must be checked on the official platform.",
      },
    ],
  },
  fishing: {
    formatTitle: "Fishing gameplay overview",
    formatItems: [
      "Fishing titles mix arcade-style shooting with fast target selection and visual feedback.",
      "Sessions often feel more active than slots because you aim, fire and chase higher-value catches.",
      "Bright visuals and touch interaction make the category especially easy to understand on phones.",
    ],
    suitedFor: [
      "Players who prefer a more hands-on pace.",
      "Members who enjoy colourful, skill-flavoured interfaces.",
      "Mobile users looking for short but lively sessions.",
    ],
    relatedTitle: "How to approach fishing games",
    relatedCopy: "Use the partner site to understand the category, then browse the live fishing section after login to see which titles and interfaces are available for your account.",
    faq: [
      {
        id: "fishing-faq-1",
        question: "Are fishing games different from slots?",
        answer: "Yes. Fishing games are more interactive and often involve targeting, firing and active on-screen decision-making rather than simple spin cycles.",
      },
      {
        id: "fishing-faq-2",
        question: "Can I access fishing on mobile?",
        answer: "Yes, when supported, because touch controls translate naturally to fishing-style gameplay.",
      },
    ],
  },
  lottery: {
    formatTitle: "Lottery / 4D overview",
    formatItems: [
      "Lottery is the calmer, number-led side of the YES2WIN ecosystem.",
      "4D-style references focus on draw participation and results checking rather than fast interactive play.",
      "Current formats and draw information must always be confirmed on the live platform.",
    ],
    suitedFor: [
      "Members who prefer number-based entertainment.",
      "Users looking for a simpler participation flow.",
      "Players who want a contrast to live streaming or arcade-style categories.",
    ],
    relatedTitle: "Current draw information",
    relatedCopy: "This partner page explains the category structure only. For live lottery / 4D availability, current rules and results views, continue into the official platform after login.",
    faq: [
      {
        id: "lottery-faq-1",
        question: "Do you show live 4D results here?",
        answer: "No. This site does not publish winning numbers or results. Check the official platform for current draw information.",
      },
      {
        id: "lottery-faq-2",
        question: "How do I access lottery options?",
        answer: "Use Register or Login, then open the lottery area inside the YES2WIN platform if the category is available to your account.",
      },
    ],
  },
};

export function GameCategoryPage({ category }: { category: GameCategory }) {
  const details = detailMap[category.id];

  return (
    <>
      <WebPageJsonLd
        name={category.name}
        description={category.seoDescription}
        path={category.path}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Games", path: "/games/" },
          { name: category.shortName, path: category.path },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="YES2WIN Games"
        title={category.name}
        description={category.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Games", href: "/games/" },
          { label: category.shortName },
        ]}
        actions={
          <>
            <CtaLink cta="register">{category.ctaLabel}</CtaLink>
            <CtaLink href="/games/" variant="outline">
              All categories
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
              <Image
                src={visualMap[category.id]}
                alt={`${category.shortName} category artwork`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <Card hover={false}>
              <CategoryVisual name={iconMap[category.id] ?? "spark"} className="h-16 w-16" />
              <h2 className="mt-5 text-2xl font-bold text-ink">What to expect</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {category.whatToExpect.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/80 p-4 text-sm leading-relaxed text-ink-muted">
                {category.mobileNote}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">{details.formatTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                {details.formatItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Who this category suits</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                {details.suitedFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">How to access</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Register or log in through this partner gateway, then open the live YES2WIN lobby to browse{" "}
                {category.shortName.toLowerCase()} content available for your region and account.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  Register Now
                </CtaLink>
                <CtaLink cta="login" variant="secondary" size="sm">
                  Login
                </CtaLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">{details.relatedTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{details.relatedCopy}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="text-lg font-bold text-ink">Mobile access</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {category.shortName} fits naturally into the wider mobile experience when your browser and connection
                  are ready for it.
                </p>
                <Link href="/mobile/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                  Mobile experience →
                </Link>
              </Card>
              <Card>
                <h3 className="text-lg font-bold text-ink">Offers & support</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Related campaigns and support pathways live across the Promotions, FAQ and Responsible Gaming pages.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-brand-700">
                  <Link href="/promotions/">Promotions</Link>
                  <Link href="/faq/#games">Games FAQ</Link>
                  <Link href="/responsible-gaming/">Responsible gaming</Link>
                  <Link href="/vip/">VIP</Link>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink">Quick questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Practical answers before you continue into the official platform for live category details.
            </p>
            <div className="mt-6">
              <Accordion items={details.faq} />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title={`Ready to try ${category.shortName}?`}
        description="Open the official YES2WIN platform to browse the live lobby for this category."
      />
    </>
  );
}
