import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | YES2WIN Official Partner",
  description:
    "Privacy policy for the YES2WIN Official Partner website describing how informational site data may be handled and how platform privacy terms apply separately.",
  path: "/privacy/",
});

export default function PrivacyPage() {
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
        description={`Last updated: ${siteConfig.legal.lastUpdated}. This policy explains privacy practices for this partner website.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

      <Section tone="white">
        <Container narrow className="prose-legal">
          <h2>1. Scope</h2>
          <p>
            This policy covers the informational partner website. Account data collected on the official YES2WIN platform
            after registration or login is governed by that platform’s privacy disclosures.
          </p>

          <h2>2. Controller placeholder</h2>
          <p>
            Website operator placeholder: {siteConfig.legal.entityName}. Jurisdiction placeholder:{" "}
            {siteConfig.legal.jurisdiction}. Update these values through environment configuration before public launch.
          </p>

          <h2>3. Information we may process</h2>
          <ul>
            <li>Basic technical logs such as IP address, browser type and requested pages.</li>
            <li>Optional analytics events if an analytics provider is later configured.</li>
            <li>Messages you voluntarily send through configured contact channels.</li>
          </ul>

          <h2>4. How we use information</h2>
          <p>
            Information is used to operate, secure and improve the website experience, respond to enquiries and understand
            aggregate traffic patterns.
          </p>

          <h2>5. Cookies and similar technologies</h2>
          <p>
            Essential cookies may be required for site functionality. Any non-essential analytics or marketing cookies
            should only be enabled with an appropriate consent mechanism.
          </p>

          <h2>6. Sharing</h2>
          <p>
            We do not sell personal information. Service providers may process limited technical data to host or secure the
            website. External platform destinations have independent privacy practices.
          </p>

          <h2>7. Retention</h2>
          <p>
            Technical logs and enquiry records are retained only as long as needed for security, operations and legal
            obligations.
          </p>

          <h2>8. Your choices</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct or delete personal information. Contact
            us through the Contact page once channels are configured.
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
