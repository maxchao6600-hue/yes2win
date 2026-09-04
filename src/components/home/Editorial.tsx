import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/CtaLink";
import { ctaHref } from "@/lib/utils";

export function Editorial() {
  return (
    <Section>
      <Container narrow>
        <SectionHeading
          eyebrow="Guide"
          title="Getting started with YES2WIN"
          description="A short orientation before you register or log in."
        />
        <div className="prose-legal mt-8">
          <h2>What is YES2WIN?</h2>
          <p>
            YES2WIN is an online entertainment brand spanning slots, live casino, sports, fishing and lottery. Members
            use the official platform for the live lobby, cashier and account tools.
          </p>

          <h2>What does this partner website do?</h2>
          <p>
            YES2WIN Official Partner is an information and access gateway. It explains categories, offer types, payments,
            VIP, mobile use and partner pathways — then routes you to Register, Login or Partner when you are ready.
          </p>

          <h2>How do I start?</h2>
          <p>
            Use <TextLink href={ctaHref("register")} externalKind="cta">Register Now</TextLink> or{" "}
            <TextLink href={ctaHref("login")} externalKind="cta">Login</TextLink>, explore{" "}
            <Link href="/games/">Games</Link> and <Link href="/promotions/">Promotions</Link>, or read the{" "}
            <Link href="/faq/">FAQ</Link>. For safer play, see{" "}
            <Link href="/responsible-gaming/">Responsible Gaming</Link>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
