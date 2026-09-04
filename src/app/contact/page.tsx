import Link from "next/link";
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
    "Get help with YES2WIN account access, payments, partner support and general questions through this official partner website.",
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
        description="Support pathways for the YES2WIN Official Partner website."
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
        title="How can we help?"
        description="Choose the pathway that matches your question — account access, payments, partner support or general site guidance."
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
                <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
                  {channel.value ? (
                    <a href={channel.value} className="font-semibold text-brand-800 break-all">
                      {channel.value.replace(/^mailto:/i, "").replace(/^https?:\/\//i, "")}
                    </a>
                  ) : (
                    <p className="leading-relaxed text-ink-muted">{channel.fallback}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <h2 className="text-lg font-bold text-ink">Account access</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Create an account or sign in to manage your profile, security and platform tools.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <CtaLink cta="register" size="sm">
                  Register
                </CtaLink>
                <CtaLink cta="login" variant="secondary" size="sm">
                  Login
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Payment help</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Review deposit and withdrawal categories before using the live cashier.
              </p>
              <Link href="/payment/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Payment guide →
              </Link>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Partner pathway</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Learn the partner journey, then open the official partner access flow when ready.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/partner/" className="text-sm font-semibold text-brand-700">
                  Partner page →
                </Link>
                <CtaLink cta="partner" size="sm" variant="secondary">
                  Partner access
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Quick answers</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Many common questions are already covered across registration, games and payments.
              </p>
              <Link href="/faq/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Browse FAQ →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
