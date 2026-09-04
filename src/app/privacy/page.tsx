import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | YES2WIN Official Partner",
  description:
    "Privacy policy for the YES2WIN Official Partner website, explaining how this information site handles data separately from the YES2WIN platform.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  const operatorLine = siteConfig.legal.entityName
    ? `This website is operated by ${siteConfig.legal.entityName}${
        siteConfig.legal.jurisdiction ? ` in ${siteConfig.legal.jurisdiction}` : ""
      }.`
    : "This website is operated as YES2WIN Official Partner. Operator details may be updated when formally published.";

  return (
    <>
      <WebPageJsonLd
        name="Privacy Policy"
        description="Privacy policy for the YES2WIN Official Partner website."
        path="/privacy/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy/" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description={`Last updated: ${siteConfig.legal.lastUpdated}. This policy explains how the partner website handles information.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

      <Section tone="white">
        <Container narrow className="prose-legal">
          <h2>1. Scope</h2>
          <p>
            This policy covers the YES2WIN Official Partner information website. Account data collected on the official
            YES2WIN platform after registration or login is governed by that platform’s own privacy disclosures.
          </p>

          <h2>2. Who operates this website</h2>
          <p>
            {operatorLine} YES2WIN platform privacy practices remain separate from this partner website.
          </p>

          <h2>3. Information we may process</h2>
          <ul>
            <li>Basic technical logs such as IP address, browser type and requested pages</li>
            <li>Aggregate analytics if an analytics provider is enabled</li>
            <li>Messages you voluntarily send through published contact channels</li>
          </ul>

          <h2>4. How we use information</h2>
          <p>
            Information is used to operate and secure the website, improve the experience, respond to enquiries and
            understand aggregate traffic patterns.
          </p>

          <h2>5. Cookies and similar technologies</h2>
          <p>
            Essential cookies may be required for site functionality. Non-essential analytics or marketing cookies should
            only be enabled with an appropriate consent mechanism when introduced.
          </p>

          <h2>6. Sharing</h2>
          <p>
            We do not sell personal information. Hosting and security providers may process limited technical data to keep
            the website running. External platform destinations have independent privacy practices.
          </p>

          <h2>7. Retention</h2>
          <p>
            Technical logs and enquiry records are retained only as long as needed for security, operations and legal
            obligations.
          </p>

          <h2>8. Your choices</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct or delete personal information. Use the{" "}
            <Link href="/contact/">Contact</Link> page for website-related requests.
          </p>

          <h2>9. Children</h2>
          <p>
            This website is not intended for minors. Do not use the site or related platform services if you are under the
            legal age for online gaming in your region.
          </p>

          <h2>10. Updates</h2>
          <p>
            We may revise this policy periodically. The “Last updated” date at the top of this page reflects the latest
            version.
          </p>
        </Container>
      </Section>
    </>
  );
}
