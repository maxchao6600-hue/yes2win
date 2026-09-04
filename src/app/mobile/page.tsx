import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

const mobileFaqs = [
  {
    id: "mobile-1",
    question: "Do I need to download an app from this site?",
    answer:
      "No. This partner website focuses on browser access and does not publish unverified app-store badges or download claims.",
  },
  {
    id: "mobile-2",
    question: "What can I do on mobile after login?",
    answer:
      "Once you continue into the official platform, you can browse games, review promotions, open the cashier and manage account access using your mobile browser when those features are enabled for your account.",
  },
  {
    id: "mobile-3",
    question: "Why might live tables feel slower on mobile data?",
    answer:
      "Live dealer streams are more connection-sensitive than static pages. A stable network and an up-to-date browser usually provide the smoothest experience.",
  },
];

export const metadata = buildMetadata({
  title: "YES2WIN Mobile | Gaming Experience on Mobile",
  description:
    "Access YES2WIN on mobile browsers — responsive navigation, games, promotions, payments and partner pathways on your phone.",
  path: "/mobile/",
});

export default function MobilePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Mobile"
        description="Mobile experience guidance for YES2WIN."
        path="/mobile/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Mobile", path: "/mobile/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="Mobile"
        title="YES2WIN, built for mobile"
        description="Browse categories, manage access and move into the YES2WIN platform from your phone — with responsive layouts and clear touch targets."
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

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-10 rounded-full bg-brand-200/50 blur-3xl" />
              <div className="relative mx-auto aspect-[9/18] w-[72%] rounded-[2.2rem] border border-brand-900/15 bg-brand-950 p-3 shadow-2xl">
                <div className="flex h-full flex-col rounded-[1.7rem] bg-[linear-gradient(180deg,#0b7a57,#022c22)] p-4 text-white">
                  <div className="mx-auto h-1.5 w-16 rounded-full bg-white/25" />
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-200">Mobile browser</p>
                  <h2 className="mt-2 text-2xl font-bold">Play on the go</h2>
                  <div className="mt-6 space-y-3">
                    {["Games", "Promotions", "Account access"].map((item) => (
                      <div key={item} className="rounded-xl bg-white/10 px-3 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-xl bg-brand-400 px-3 py-3 text-center text-sm font-semibold text-brand-950">
                    Access YES2WIN
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Mobile browser experience",
                  body: "Use a modern mobile browser to open this partner site and continue into the official YES2WIN platform — no unverified store badges required here.",
                },
                {
                  title: "Responsive navigation",
                  body: "Menus, cards and CTAs adapt for common phone widths so you can move between Games, Promotions, VIP and Partner without pinch-zooming.",
                },
                {
                  title: "Games & promotions",
                  body: "Category pages and offer explanations stay readable on small screens, with sticky Login and Register actions when you are ready.",
                },
                {
                  title: "Payments & partner access",
                  body: "Review payment categories or partner pathways on mobile, then complete actions inside the official platform after login.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/games/">Explore games</Link>
            <Link href="/faq/#mobile">Mobile FAQ</Link>
            <Link href="/partner/">Partner page</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Mobile browser",
                body: "Use a modern browser for the clearest layouts, smoother forms and better support for responsive YES2WIN pages.",
              },
              {
                title: "Android",
                body: "Android users can move from this partner site into the official YES2WIN platform without relying on unverified third-party downloads.",
              },
              {
                title: "iOS",
                body: "iPhone and iPad browsers can access the same partner guidance, registration flow and account entry points.",
              },
              {
                title: "Account & cashier",
                body: "Login, payments, verification prompts and transaction review all continue inside the official platform environment after access.",
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
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
            <Image
              src="/images/mobile/devices.webp"
              alt="YES2WIN mobile access across devices"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink">How mobile access fits the ecosystem</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Mobile is not a reduced YES2WIN experience. It is the day-to-day path for browsing categories, checking
              promotions, handling payments and moving between account tools when you are away from desktop.
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Open this partner site to understand categories and pathways before you continue.",
                "Use Register or Login to move into the official platform in the correct environment.",
                "Check promotions, games and payments with layouts designed to stay readable on smaller screens.",
                "Switch to a stronger network when using live-streamed or animation-heavy categories.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/games/" variant="secondary" size="sm">
                Explore Games
              </CtaLink>
              <CtaLink href="/payment/" variant="secondary" size="sm">
                View Payment Guide
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">Mobile FAQ</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Short answers about browser-based access, device support and how mobile connects to the wider YES2WIN
              journey.
            </p>
          </div>
          <Accordion items={mobileFaqs} />
        </Container>
      </Section>

      <FinalCta title="Access YES2WIN on your device" description="Open the official platform experience from your mobile browser." />
    </>
  );
}
