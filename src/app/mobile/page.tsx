import Image from "next/image";
import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Mobile | Gaming Experience on Mobile",
  description:
    "Access YES2WIN on mobile browsers — responsive navigation, games, promotions, payments and partner pathways on your phone via Access YES2WIN / Login.",
  path: "/mobile/",
  ogImage: "/images/og/og-mobile.png",
});

const mobileFaqs = [
  {
    id: "mobile-1",
    question: "Do I need to download an app from this site?",
    answer:
      "No. This partner website focuses on browser access and routes you through Access YES2WIN / Login. It does not publish App Store or Google Play badges or unverified download buttons.",
  },
  {
    id: "mobile-2",
    question: "Does YES2WIN discuss mobile apps publicly?",
    answer:
      "YES2WIN publicly discusses mobile apps and browser access. On this partner site, the practical next step remains Access YES2WIN or Login so you continue into the official platform environment.",
  },
  {
    id: "mobile-3",
    question: "What can I do on mobile after login?",
    answer:
      "Once you continue into the official platform, you can browse games, review promotions, open the cashier and manage account access using your mobile browser when those features are enabled for your account.",
  },
  {
    id: "mobile-4",
    question: "Why might live tables feel slower on mobile data?",
    answer:
      "Live dealer streams are more connection-sensitive than static pages. A stable network and an up-to-date browser usually provide the smoothest experience.",
  },
];

const navigationTips = [
  "Use the sticky Register and Login actions when you are ready to continue into the official platform.",
  "Start with Games, Promotions, Payment or FAQ if you want context before signup.",
  "Keep one browser tab for this partner guide and another for the live platform if you are comparing pathways.",
  "Switch to a stronger network before opening live-streamed or animation-heavy categories.",
];

export default function MobilePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Mobile"
        description="Mobile experience guidance for YES2WIN through this official partner gateway."
        path="/mobile/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Mobile", path: "/mobile/" },
        ]}
      />

      {/* 1. Mobile overview / Hero */}
      <PageHero
        tone="dark"
        eyebrow="Mobile"
        title="YES2WIN, built for mobile"
        description="Browse categories, manage access and move into the YES2WIN platform from your phone — with responsive layouts and clear touch targets. Continue through Access YES2WIN / Login rather than unverified store downloads."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mobile" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Access YES2WIN</CtaLink>
            <CtaLink cta="login" variant="outline">
              Login
            </CtaLink>
          </>
        }
      />

      {/* 2. Browser access */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-10 rounded-full bg-brand-200/50 blur-3xl" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.2rem] border border-brand-900/15 shadow-2xl">
              <Image
                src="/images/mobile/hero.webp"
                alt="YES2WIN mobile browser experience"
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Mobile browser"
              title="A clear default path on your phone"
              description="Use a modern mobile browser to open this partner site and continue into the official YES2WIN platform. YES2WIN publicly discusses mobile apps and browser access, but this partner site does not invent store badges or fake download buttons."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Responsive layouts",
                  body: "Menus, cards and CTAs adapt for common phone widths so you can move between Games, Promotions, VIP and Partner without pinch-zooming.",
                },
                {
                  title: "Official access CTAs",
                  body: "Access YES2WIN and Login route into the configured platform destinations instead of unofficial APK or store shortcuts.",
                },
                {
                  title: "Readable guides",
                  body: "Category pages and offer explanations stay readable on small screens before you enter the live lobby.",
                },
                {
                  title: "Touch-friendly actions",
                  body: "Primary buttons stay large enough for thumb use when you are ready to register, log in or open partner access.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Android + iOS */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Devices"
            title="Android and iOS browser access"
            description="Phone and tablet browsers can open the same partner guidance, registration flow and account entry points."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-ink">Android</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Android users can move from this partner site into the official YES2WIN platform through Access YES2WIN
                / Login without relying on unverified third-party downloads published here.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Open the partner pages in a current Chrome or system browser.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Continue into Register or Login when you are ready for the live platform.</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">iOS</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                iPhone and iPad browsers can access the same partner guidance, registration flow and account entry
                points. This page does not claim App Store availability or publish store badges.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Use Safari or another up-to-date browser for the clearest layouts.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Keep a stable connection before opening live-streamed categories.</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Mobile games */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Mobile games"
            title="Categories that travel well on a phone"
            description="Slots, live casino, sports, fishing and lottery can all be explored from mobile once you continue into the official lobby."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {gameCategories.map((category) => (
              <Card key={category.id}>
                <h2 className="text-lg font-bold text-ink">{category.shortName}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{category.mobileNote}</p>
                <Link href={category.href} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                  {category.ctaLabel} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Promotions + account access */}
      <Section tone="white">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SectionHeading
              eyebrow="Promotions"
              title="Review offers on a smaller screen"
              description="Promotion categories stay readable on mobile so you can understand offer types before confirming live terms inside the platform."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/promotions/" variant="secondary" size="sm">
                Promotions hub
              </CtaLink>
              <CtaLink cta="register" size="sm">
                Access YES2WIN
              </CtaLink>
            </div>
          </Card>
          <Card>
            <SectionHeading
              eyebrow="Account access"
              title="Register and login from your phone"
              description="Account creation, sign-in, security prompts and profile tools continue inside the official platform environment after you tap Access YES2WIN or Login."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                Register
              </CtaLink>
              <CtaLink cta="login" variant="secondary" size="sm">
                Login
              </CtaLink>
              <CtaLink href="/register-guide/" variant="secondary" size="sm">
                Register guide
              </CtaLink>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 6. Payments */}
      <Section tone="green">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Payments"
              title="Cashier pathways on mobile"
              description="Deposit and withdrawal categories can be reviewed here, then completed in the live cashier after login when those methods are available to your account."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Category education first",
                  body: "Bank transfer, e-wallet, online banking and crypto are explained as categories — not fixed fees or limits.",
                },
                {
                  title: "Live cashier after login",
                  body: "Exact options, verification prompts and processing details appear inside the official platform.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <CtaLink href="/payment/" variant="secondary" size="sm">
                Payment guide
              </CtaLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/mobile/devices.webp"
              alt="YES2WIN mobile access across devices"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* 7. Navigation tips */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Navigation tips"
            title="Move through YES2WIN more comfortably on mobile"
            description="Small habits that keep browsing, signup and live play easier on a phone."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {navigationTips.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Screenshots / visuals + how to access */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)] lg:mx-auto">
            <Image
              src="/images/mobile/phone.webp"
              alt="YES2WIN mobile phone visual"
              fill
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="How to access"
              title="From this partner site to the live platform"
              description="Mobile is not a reduced YES2WIN experience. It is the day-to-day path for browsing categories, checking promotions, handling payments and moving between account tools."
            />
            <ol className="mt-6 space-y-4">
              {[
                "Open this Mobile page or any partner guide on your phone browser.",
                "Review games, promotions, payments or FAQ content as needed.",
                "Tap Access YES2WIN or Login to continue into the official platform.",
                "Complete account, cashier or lobby actions inside that live environment.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-line bg-brand-50/50 px-4 py-4">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink-muted">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">Access YES2WIN</CtaLink>
              <CtaLink href="/games/" variant="secondary">
                Explore Games
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. FAQ */}
      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Mobile questions"
            description="Short answers about browser-based access, public app discussion and how this partner site routes you into YES2WIN."
          />
          <Accordion items={mobileFaqs} />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/faq/#mobile">Full mobile FAQ</Link>
            <Link href="/games/">Explore games</Link>
            <Link href="/partner/">Partner page</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Access YES2WIN on your device"
        description="Open the official platform experience from your mobile browser through Access YES2WIN or Login."
      />
    </>
  );
}
