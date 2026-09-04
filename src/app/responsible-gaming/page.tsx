import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Responsible Gaming | YES2WIN Official Partner",
  description:
    "Practical responsible gaming guidance covering age restrictions, self-control, spending awareness and seeking help when gambling stops being recreational.",
  path: "/responsible-gaming/",
});

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
        eyebrow="Play responsibly"
        title="Responsible gaming"
        description="Entertainment should stay recreational. Use these principles to keep control, protect your wellbeing and know when to pause."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Responsible Gaming" },
        ]}
      />

      <Section tone="white">
        <Container narrow className="prose-legal">
          <h2>Play responsibly</h2>
          <p>
            Treat gaming as entertainment, not as a way to solve financial problems or chase losses. Set a time and money
            limit before you start, and stop when you reach it.
          </p>

          <h2>Age restriction</h2>
          <p>
            You must be of legal age in your jurisdiction to participate. If you are underage, do not register, deposit or
            play. Adults should also keep account credentials away from minors.
          </p>

          <h2>Self-control</h2>
          <ul>
            <li>Take regular breaks.</li>
            <li>Avoid playing when stressed, angry or under the influence.</li>
            <li>Do not chase losses with larger or more frequent bets.</li>
            <li>Keep gaming separate from essential living expenses.</li>
          </ul>

          <h2>Spending awareness</h2>
          <p>
            Track deposits and time spent. If you notice that gaming is affecting work, relationships, sleep or finances,
            pause immediately and reassess.
          </p>

          <h2>Seek help when it stops being recreational</h2>
          <p>
            If gambling no longer feels fun — or if you feel compelled to continue despite harm — pause play, talk to
            someone you trust and seek professional support available in your region. Early help is better than waiting.
          </p>
          <p>
            International starting points include{" "}
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">
              BeGambleAware
            </a>{" "}
            and{" "}
            <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
              Gambling Therapy
            </a>
            . Local resources may also apply where you live.
          </p>

          <h2>What this partner website can and cannot do</h2>
          <p>
            We can provide guidance and links to account access pathways. Account-level tools such as limits or
            self-exclusion, where available, are managed on the official platform. For general questions, visit the{" "}
            <Link href="/faq/#responsible-gaming">FAQ</Link> or <Link href="/contact/">Contact</Link> page.
          </p>
        </Container>
      </Section>
    </>
  );
}
