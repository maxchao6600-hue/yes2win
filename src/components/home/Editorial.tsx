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
          title="Understanding YES2WIN through the partner lens"
          description="A concise overview for visitors who want clarity before registering or logging in."
        />
        <div className="prose-legal mt-8">
          <h2>What is YES2WIN?</h2>
          <p>
            YES2WIN is an online entertainment ecosystem that brings multiple play styles together — from slots and live
            casino to sports, fishing and lottery. This partner website helps you understand that ecosystem and find the
            right next step.
          </p>

          <h2>What does the YES2WIN ecosystem include?</h2>
          <p>
            The ecosystem is organised around major entertainment categories. Availability can vary by region and account
            status, so the live lobby on the official platform is always the source of truth for what you can access.
          </p>

          <h2>How does the official partner website work?</h2>
          <p>
            This site is an information and access gateway. It explains categories, promotions structure, payments
            overview, VIP positioning, mobile access and partner pathways — then routes Register, Login and Partner CTAs
            through centralised configuration.
          </p>

          <h2>How can users access the platform?</h2>
          <p>
            Use <TextLink href={ctaHref("register")} externalKind="cta">Register Now</TextLink> or{" "}
            <TextLink href={ctaHref("login")} externalKind="cta">Login</TextLink> from any major page. Those
            actions open the configured official platform URLs rather than inventing a local authentication system.
          </p>

          <h2>Where can users learn about promotions and support?</h2>
          <p>
            Start with the <Link href="/promotions/">Promotions</Link> and <Link href="/faq/">FAQ</Link> pages, then
            verify live campaign terms on the platform. For help, visit <Link href="/contact/">Contact</Link> once your
            support channels are configured, and review{" "}
            <Link href="/responsible-gaming/">Responsible Gaming</Link> for safer-play guidance.
          </p>
        </div>
      </Container>
    </Section>
  );
}
