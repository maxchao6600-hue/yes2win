import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | YES2WIN Official Partner",
  description:
    "Terms of use for the YES2WIN Official Partner website — an information and access gateway connected to the YES2WIN ecosystem.",
  path: "/terms/",
});

export default function TermsPage() {
  const entityLine = siteConfig.legal.entityName
    ? `This website is published by ${siteConfig.legal.entityName}${
        siteConfig.legal.jurisdiction ? ` (${siteConfig.legal.jurisdiction})` : ""
      }.`
    : "This website is published as YES2WIN Official Partner — an information and access gateway connected to the YES2WIN ecosystem.";

  return (
    <>
      <WebPageJsonLd name="Terms of Use" description="Terms for the YES2WIN Official Partner website." path="/terms/" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms/" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description={`Last updated: ${siteConfig.legal.lastUpdated}. These terms apply to this official partner website.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />

      <Section tone="white">
        <Container narrow className="prose-legal">
          <h2>1. About these terms</h2>
          <p>
            By using this website, you agree to these terms. If you do not agree, please stop using the site. Separate
            account terms on the official YES2WIN platform also apply when you register, log in or use platform services.
          </p>

          <h2>2. Website identity</h2>
          <p>
            {entityLine} YES2WIN is the entertainment brand and platform. This site helps visitors understand categories,
            offers structure and access pathways — it does not replace the primary YES2WIN corporate website.
          </p>

          <h2>3. Informational purpose</h2>
          <p>
            Content is provided for general information about YES2WIN entertainment categories, promotions structure,
            payments overview, VIP positioning, mobile access and partner pathways. Nothing here is legal, financial or
            investment advice.
          </p>

          <h2>4. External platform links</h2>
          <p>
            Register, Login and Partner buttons may open official YES2WIN platform destinations. Your use of those
            services is governed by the platform’s own terms, rules and policies.
          </p>

          <h2>5. Acceptable use</h2>
          <ul>
            <li>Do not misuse the website or attempt unauthorised access.</li>
            <li>Do not scrape or republish content in a misleading way.</li>
            <li>Do not present this partner website as the primary corporate YES2WIN site.</li>
          </ul>

          <h2>6. No outcome guarantees</h2>
          <p>
            This website does not guarantee winnings, profits, investment returns or partner income. Entertainment
            involves risk and results vary.
          </p>

          <h2>7. Responsible use</h2>
          <p>
            You must meet the legal age requirement in your jurisdiction. Review our{" "}
            <Link href="/responsible-gaming/">Responsible Gaming</Link> page and only participate where it is lawful for
            you to do so.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use after updates constitutes acceptance of the revised
            terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions about this website, visit the <Link href="/contact/">Contact</Link> page. For account-specific
            issues, use the support options available after you log in to the official platform.
          </p>
        </Container>
      </Section>
    </>
  );
}
