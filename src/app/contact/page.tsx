import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact YES2WIN Official Partner",
  description:
    "Contact channels for customer support, partner support and general enquiries related to the YES2WIN Official Partner website.",
  path: "/contact/",
});

export default function ContactPage() {
  const channels = [
    siteConfig.contact.customerSupport,
    siteConfig.contact.partnerSupport,
    siteConfig.contact.generalEnquiries,
  ];

  return (
    <>
      <WebPageJsonLd
        name="Contact YES2WIN Official Partner"
        description="Configurable contact channels for the partner website."
        path="/contact/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Contact YES2WIN Official Partner"
        description="Reach the right support pathway. Contact details are configuration-driven so this site never invents phone numbers, emails or messaging handles."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {channels.map((channel) => (
              <Card key={channel.label}>
                <h2 className="text-xl font-bold text-ink">{channel.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{channel.description}</p>
                <div className="mt-5 rounded-xl border border-dashed border-brand-300 bg-brand-50/70 p-4 text-sm">
                  {channel.value ? (
                    <a href={channel.value} className="font-semibold text-brand-800 break-all">
                      {channel.value.replace(/^mailto:/, "")}
                    </a>
                  ) : (
                    <p className="text-ink-muted">
                      <span className="font-semibold text-ink">Not configured yet.</span>
                      <br />
                      {channel.placeholder}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-3xl border border-line bg-brand-50/50 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-ink">Need platform access help?</h2>
              <p className="mt-2 text-sm text-ink-muted">
                For registration or login issues, start with the official platform flows and recovery tools.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CtaLink cta="register" size="sm">
                  Register Now
                </CtaLink>
                <CtaLink cta="login" variant="secondary" size="sm">
                  Login
                </CtaLink>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink">Looking for answers first?</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Many common questions are covered in the FAQ, including payments, games and partner topics.
              </p>
              <div className="mt-4">
                <CtaLink href="/faq/" variant="secondary" size="sm">
                  Visit FAQ
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
