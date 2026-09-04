import Link from "next/link";
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
});

const sections = [
  {
    id: "benefits",
    title: "VIP Benefits",
    description:
      "VIP recognition may unlock curated advantages that enhance how you engage with YES2WIN. Specific benefits are shared through official VIP channels and can vary by membership status.",
  },
  {
    id: "personalised",
    title: "Personalised Experience",
    description:
      "Expect communications and service touchpoints that consider how you like to play — rather than generic mass messaging.",
  },
  {
    id: "priority",
    title: "Priority Support",
    description:
      "VIP members may receive elevated support pathways so account questions can be handled with greater attention when available.",
  },
  {
    id: "exclusive",
    title: "Exclusive Experiences",
    description:
      "Selected invitations and event-style moments may be shared with VIP members as part of a more exclusive calendar.",
  },
  {
    id: "recognition",
    title: "Member Recognition",
    description:
      "Reward and recognition structures focus on appreciation for ongoing engagement. Details are provided through the official programme.",
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
        title="Welcome to the YES2WIN VIP experience"
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section, index) => (
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

      <Section tone="green">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Access"
              title="How VIP information is shared"
              description="VIP details are communicated through official platform channels once your membership status qualifies. This partner site explains the experience — it does not invent tiers or cash figures."
            />
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
              <Link href="/promotions/">Promotions hub</Link>
              <Link href="/faq/">Member FAQ</Link>
              <Link href="/contact/">Contact</Link>
            </div>
          </div>
          <Accordion items={vipFaqs} />
        </Container>
      </Section>

      <FinalCta title="Start your YES2WIN journey" description="Register to explore member experiences on the official platform." />
    </>
  );
}
