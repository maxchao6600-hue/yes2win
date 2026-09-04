import Image from "next/image";
import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { gameProviders } from "@/config/content/providers";
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
  title: "YES2WIN Games | Slots, Live Casino, Sports, Fishing & Lottery",
  description:
    "Explore the YES2WIN games hub — slots, live casino, sports, fishing, lottery, verified studios and mobile access through this official partner gateway.",
  path: "/games/",
  ogImage: "/images/og/og-games.png",
});

const imageMap: Record<string, string> = {
  slots: "/images/categories/slots.webp",
  "live-casino": "/images/categories/live-casino.webp",
  sports: "/images/categories/sports.webp",
  fishing: "/images/categories/fishing.webp",
  lottery: "/images/categories/lottery.webp",
};

const formats = [
  { title: "Slots", body: "Theme variety, feature-driven play and mobile-friendly spin cycles." },
  { title: "Live tables", body: "Baccarat, roulette and blackjack where live dealers are available." },
  { title: "Sports markets", body: "Football, basketball, tennis and other supported events." },
  { title: "Fishing sessions", body: "Interactive targeting and arcade-style catch mechanics." },
  { title: "Lottery / 4D", body: "Number-led draw formats with simpler participation flows." },
];

const gamesFaq = [
  {
    id: "g1",
    question: "Where do I play YES2WIN games?",
    answer:
      "Games open in the official YES2WIN lobby after you register or log in. This partner site explains categories and routes you into that platform.",
  },
  {
    id: "g2",
    question: "Which studios are referenced by YES2WIN?",
    answer:
      "Public YES2WIN materials reference Evolution Gaming, Pragmatic Play, SA Gaming, CMD368 and Playtech. Live catalogues can still vary by region and account.",
  },
  {
    id: "g3",
    question: "Can I browse games on mobile?",
    answer:
      "Yes. Category pages and the live lobby are designed for phone browsing when your connection and browser are ready.",
  },
];

export default function GamesPage() {
  return (
    <>
      <WebPageJsonLd name="YES2WIN Games" description="Explore YES2WIN game categories." path="/games/" />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Games", path: "/games/" }]} />
      <PageHero
        tone="dark"
        eyebrow="Games Hub"
        title="YES2WIN games in one place"
        description="Browse category guides, studio references and access paths before you open the live lobby for titles available to your account."
        crumbs={[{ label: "Home", href: "/" }, { label: "Games" }]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/promotions/" variant="outline">
              View Promotions
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Featured"
            title="Start with the categories players explore most"
            description="Each card opens a deeper guide. Live titles appear only after you continue into the official platform."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {gameCategories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imageMap[category.id]}
                    alt={`${category.shortName} featured visual`}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-xl font-bold">{category.shortName}</h2>
                    <p className="mt-1 text-sm text-brand-50/90">{category.highlights[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="All categories" description="Every major YES2WIN entertainment path with a short guide and next step." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gameCategories.map((category) => (
              <Card key={category.id} id={category.id} className="scroll-mt-28 overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image src={imageMap[category.id]} alt={`${category.name} artwork`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-ink">{category.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{category.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                    {category.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <CtaLink href={category.href} variant="secondary" size="sm">
                      {category.ctaLabel}
                    </CtaLink>
                    <CtaLink cta="register" size="sm">
                      Play now
                    </CtaLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green" id="providers">
        <Container>
          <SectionHeading
            eyebrow="Providers"
            title="Studios referenced by YES2WIN"
            description="These provider names appear in public YES2WIN materials. Game counts and live catalogues stay on the platform."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {gameProviders.map((provider) => (
              <Card key={provider.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{provider.focus}</p>
                <h2 className="mt-3 text-lg font-bold text-ink">{provider.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{provider.description}</p>
                <p className="mt-4 text-xs font-medium text-ink-muted">{provider.categories.join(" · ")}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading title="Popular formats" description="A quick map of the play styles members usually look for first." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {formats.map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image src="/images/mobile/devices.webp" alt="YES2WIN mobile gaming visual" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Mobile gaming"
              title="Browse on phone, play when ready"
              description="Category guides stay readable on smaller screens. Live streaming categories benefit from a stable connection."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/mobile/" variant="secondary">
                Mobile guide
              </CtaLink>
              <CtaLink cta="register">Access YES2WIN</CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <h2 className="text-xl font-bold text-ink">How to access games</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Register or log in through this partner gateway, then open the live lobby and choose a category available to your account.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Related promotions</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Welcome, deposit and weekly campaigns often sit alongside game discovery. Confirm live terms before opting in.
              </p>
              <Link href="/promotions/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Promotions hub →
              </Link>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">VIP & payments</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Member recognition and cashier tools live on the platform. Use the VIP and Payment pages here for orientation first.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
                <Link href="/vip/">VIP</Link>
                <Link href="/payment/">Payment</Link>
              </div>
            </Card>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {promotions.slice(0, 3).map((promo) => (
              <Card key={promo.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{promo.category}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{promo.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{promo.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title="Games questions" description="Short answers before you continue into the live lobby." />
          <Accordion items={gamesFaq} />
          <div className="lg:col-span-2 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/faq/#games">Full games FAQ</Link>
            <Link href="/responsible-gaming/">Responsible gaming</Link>
            <Link href="/register-guide/">Registration guide</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      <FinalCta title="Enter the YES2WIN lobby" description="Register or log in to browse live game categories on the official platform." />
    </>
  );
}
