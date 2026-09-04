import Image from "next/image";
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
  title: "Responsible Gaming | YES2WIN Official Partner",
  description:
    "Practical YES2WIN responsible gaming guidance covering age limits, spending awareness, breaks, chasing losses and where to seek help.",
  path: "/responsible-gaming/",
});

const topics = [
  {
    title: "Play responsibly",
    body: "Treat gaming as recreation. Decide your time and money limits before you start, then stop when you reach them.",
  },
  {
    title: "Age restriction",
    body: "You must meet the legal age requirement in your jurisdiction. Do not register or play if you are underage.",
  },
  {
    title: "Set limits",
    body: "Choose a budget you can afford to lose for entertainment. Keep gaming separate from rent, bills and essential spending.",
  },
  {
    title: "Take breaks",
    body: "Step away regularly. Long unbroken sessions make it harder to notice fatigue, stress or impulsive decisions.",
  },
  {
    title: "Avoid chasing losses",
    body: "Increasing stakes to recover money is a warning sign. Pause instead of trying to win back what you have already spent.",
  },
  {
    title: "Spending awareness",
    body: "Review deposits and session length. If gaming starts affecting sleep, work, relationships or finances, stop and reassess.",
  },
];

const faqs = [
  {
    id: "rg1",
    question: "When should I pause playing?",
    answer:
      "Pause if you feel stressed, are spending beyond your budget, are chasing losses, or notice gaming interfering with daily responsibilities.",
  },
  {
    id: "rg2",
    question: "Where can I find help?",
    answer:
      "Talk to someone you trust and use professional resources available in your region. International starting points include BeGambleAware and Gambling Therapy.",
  },
  {
    id: "rg3",
    question: "Can this partner website set account limits for me?",
    answer:
      "No. Account-level tools such as limits or self-exclusion, where available, are managed on the official YES2WIN platform after login.",
  },
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <WebPageJsonLd
        name="Responsible Gaming"
        description="Responsible gaming guidance for YES2WIN visitors."
        path="/responsible-gaming/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Responsible Gaming", path: "/responsible-gaming/" },
        ]}
      />
      <PageHero
        eyebrow="18+"
        title="Play responsibly with YES2WIN"
        description="Keep entertainment recreational. Use these principles to stay in control, protect your wellbeing and know when to pause."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Responsible Gaming" },
        ]}
        actions={
          <>
            <CtaLink href="/faq/#responsible-gaming" variant="secondary">
              Responsible gaming FAQ
            </CtaLink>
            <CtaLink href="/contact/" variant="secondary">
              Contact
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/home/responsible.webp"
              alt="Responsible gaming visual for YES2WIN"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              title="A healthier way to enjoy entertainment"
              description="YES2WIN should stay fun. These habits help you keep perspective and reduce the chance that play becomes pressure."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              If gambling no longer feels recreational — or if you feel compelled to continue despite harm — pause play,
              talk to someone you trust and seek professional support.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => (
              <Card key={topic.title}>
                <h2 className="text-xl font-bold text-ink">{topic.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{topic.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-ink">When to pause</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>• You are spending money meant for essentials.</li>
                <li>• You feel anxious, angry or compelled to keep playing.</li>
                <li>• You hide play or lose track of time and deposits.</li>
                <li>• Gaming is affecting sleep, work or relationships.</li>
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-ink">Where to seek help</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Local support options may apply where you live. International starting points include{" "}
                <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700">
                  BeGambleAware
                </a>{" "}
                and{" "}
                <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700">
                  Gambling Therapy
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                For partner-site questions, visit the <Link href="/faq/#responsible-gaming" className="font-semibold text-brand-700">FAQ</Link> or{" "}
                <Link href="/contact/" className="font-semibold text-brand-700">Contact</Link> page.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title="Responsible gaming questions" />
          <Accordion items={faqs} />
        </Container>
      </Section>

      <FinalCta
        title="Keep YES2WIN recreational"
        description="Explore the ecosystem with clear limits, then use official account tools when you need support pathways."
      />
    </>
  );
}
