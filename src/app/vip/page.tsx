import Link from "next/link";
import Image from "next/image";
import { vipContent } from "@/config/content/vip";
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
  title: "YES2WIN VIP | Premium Member Experience",
  description:
    "Discover the YES2WIN VIP experience — personalised service, priority support and member recognition without guaranteed financial promises.",
  path: "/vip/",
  ogImage: "/images/og/og-vip.png",
});

const journeySteps = [
  {
    step: "01",
    title: "Engage with YES2WIN",
    description:
      "Register, explore games and participate as a member. VIP recognition is managed through official platform pathways.",
  },
  {
    step: "02",
    title: "Receive programme signals",
    description:
      "When VIP status or invitations apply, relevant communications appear in account channels rather than as invented public tier charts.",
  },
  {
    step: "03",
    title: "Experience curated service",
    description:
      "Personalised touchpoints, priority support pathways and selected invitations may follow as your membership journey develops.",
  },
  {
    step: "04",
    title: "Stay informed on rewards",
    description:
      "Recognition and rewards details are shared through the official VIP programme — not as fixed public cash guarantees.",
  },
];

const howVipWorks = [
  {
    title: "Official channels only",
    body: "VIP details are communicated through the platform and authorised VIP contacts. This partner site explains the experience without publishing invented tiers.",
  },
  {
    title: "Status can vary",
    body: "Membership recognition depends on programme rules and availability. Benefits may differ between members and can change over time.",
  },
  {
    title: "Not a financial promise",
    body: "VIP positioning focuses on service, recognition and curated moments. It is not a guarantee of income, bonuses or fixed payout figures.",
  },
  {
    title: "Pair with promotions",
    body: "Some VIP-oriented rewards may relate to offers explained on the Promotions page — always confirm live wording after login.",
  },
];

const vipFaqs = [
  {
    id: "vip-1",
    question: "How do I learn if VIP is available to me?",
    answer:
      "VIP status and invitations are managed on the official platform. After you register and play, relevant communications appear in your account channels when applicable.",
  },
  {
    id: "vip-2",
    question: "Are VIP benefits guaranteed?",
    answer:
      "No. Benefits are not financial guarantees and may change based on programme rules, availability and membership status.",
  },
  {
    id: "vip-3",
    question: "Where can I read related offers?",
    answer:
      "Browse the Promotions page for offer types, then confirm live VIP-related campaigns inside the platform after login.",
  },
  {
    id: "vip-4",
    question: "Does this page list VIP tiers or cash rewards?",
    answer:
      "No. This partner site does not invent VIP tiers, cash figures or income promises. Programme specifics are shared through official YES2WIN VIP channels.",
  },
];

export default function VipPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN VIP"
        description="Premium member experience overview for YES2WIN."
        path="/vip/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "VIP", path: "/vip/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="VIP"
        title={vipContent.headline}
        description="A more personal way to enjoy YES2WIN — recognition, thoughtful support and curated moments, without guaranteed financial outcomes."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "VIP" },
        ]}
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Introduction"
                title="A recognition-led member journey"
                description={vipContent.intro}
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{vipContent.disclaimer}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  Register Now
                </CtaLink>
                <CtaLink href="/contact/" variant="secondary" size="sm">
                  Contact pathways
                </CtaLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/vip/hero.webp"
                alt="YES2WIN VIP experience artwork"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="What the VIP experience emphasises"
            description="Curated advantages that enhance how you engage with YES2WIN — communicated through official channels when membership status qualifies."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {vipContent.sections.map((section, index) => (
              <Card key={section.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{section.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)] lg:order-2">
              <Image
                src="/images/vip/personal.webp"
                alt="Personalised YES2WIN VIP service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Personalised"
                title="Service shaped around how you engage"
                description="Expect communications and service touchpoints that consider how you like to play — rather than generic mass messaging."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Relevant updates instead of one-size outreach",
                  "Attention to preferences shared through official VIP pathways",
                  "A calmer, more considered member relationship over time",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Priority support"
                title="Elevated attention when available"
                description="VIP members may receive elevated support pathways so account questions can be handled with greater attention when those channels are available."
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Support quality still depends on live programme capacity and account context. Use official contact
                routes and follow verification prompts when requested.
              </p>
              <div className="mt-6">
                <CtaLink href="/contact/" variant="secondary" size="sm">
                  View contact options
                </CtaLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/vip/support.webp"
                alt="YES2WIN VIP priority support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_80px_-40px_rgba(2,44,34,0.55)]">
              <Image
                src="/images/vip/events.webp"
                alt="YES2WIN VIP exclusive events"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Exclusive events"
                title="Invitations beyond the everyday calendar"
                description="Selected invitations and event-style moments may be shared with VIP members as part of a more exclusive calendar."
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Event availability and formats are defined by the official programme. This page does not invent guest
                lists, prize pools or attendance guarantees.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Recognition & rewards"
            title="Appreciation without invented figures"
            description="Reward and recognition structures focus on appreciation for ongoing engagement. Details are provided through the official programme rather than fixed public cash promises."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Member recognition",
                body: "VIP positioning highlights appreciation for sustained engagement inside the YES2WIN ecosystem.",
              },
              {
                title: "Programme-defined rewards",
                body: "Any rewards are defined by live VIP rules and communications — not by invented amounts on this partner site.",
              },
              {
                title: "Transparent disclaimer",
                body: vipContent.disclaimer,
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="VIP journey"
            title="How the path typically unfolds"
            description="A high-level journey from everyday membership to VIP communications — without inventing tier ladders or cash milestones."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journeySteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-brand-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="How VIP works"
            title="What this partner page can — and cannot — tell you"
            description="Use this overview for orientation. Confirm membership status, invitations and rewards through official YES2WIN channels."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {howVipWorks.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="VIP questions"
              description="Clear answers about access, guarantees and related offers."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Promotions hub", href: "/promotions/" },
                { label: "Member FAQ", href: "/faq/" },
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
          </div>
          <Accordion items={vipFaqs} />
        </Container>
      </Section>

      <FinalCta
        title="Start your YES2WIN journey"
        description="Register to explore member experiences on the official platform — VIP details appear through authorised channels when applicable."
      />
    </>
  );
}
