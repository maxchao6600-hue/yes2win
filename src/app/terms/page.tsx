import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | YES2WIN Official Partner",
  description:
    "Terms of use for the YES2WIN Official Partner website, covering acceptable use, disclaimers and the distinction from the primary YES2WIN corporate website.",
  path: "/terms/",
});

export default function TermsPage() {
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
            By using this website, you agree to these terms. If you do not agree, please discontinue use. Platform account
            terms on the official YES2WIN service are separate and may also apply when you register or log in.
          </p>

          <h2>2. Website identity</h2>
          <p>
            This website is operated as {siteConfig.identity}. {siteConfig.disclaimer} Legal entity details:{" "}
            {siteConfig.legal.entityName}. Jurisdiction placeholder: {siteConfig.legal.jurisdiction}.
          </p>

          <h2>3. Informational purpose</h2>
          <p>
            Content on this site is provided for general informational purposes about the YES2WIN ecosystem and partner
            pathways. It does not constitute legal, financial or professional advice.
          </p>

          <h2>4. External platform links</h2>
          <p>
            Register, Login and Partner CTAs may open external platform URLs configured for this site. Your use of those
            services is governed by their own terms and policies.
          </p>

          <h2>5. Acceptable use</h2>
          <ul>
            <li>Do not misuse the website or attempt unauthorised access.</li>
            <li>Do not scrape or republish content in a misleading way.</li>
            <li>Do not present this partner website as the primary corporate YES2WIN site.</li>
          </ul>

          <h2>6. No outcome guarantees</h2>
          <p>
            Nothing on this website guarantees winnings, profits, investment returns or partner income. Entertainment
            involves risk.
          </p>

          <h2>7. Responsible use</h2>
          <p>
            You must meet legal age requirements in your jurisdiction. Review our Responsible Gaming page and only
            participate where lawful.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use after updates constitutes acceptance of the revised
            terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            For website enquiries, use the Contact page once support channels are configured in the site environment.
          </p>
        </Container>
      </Section>
    </>
  );
}
