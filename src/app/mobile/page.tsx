import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Mobile | Gaming Experience on Mobile",
  description:
    "Access YES2WIN on mobile browsers with a responsive experience designed for phones and tablets. Use Access YES2WIN to reach the official platform.",
  path: "/mobile/",
});

export default function MobilePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Mobile"
        description="Mobile experience guidance for YES2WIN."
        path="/mobile/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Mobile", path: "/mobile/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="Mobile"
        title="YES2WIN, built for mobile"
        description="Move through the partner gateway and into the YES2WIN ecosystem from your phone — with responsive layouts, large touch targets and clear account access."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mobile" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Access YES2WIN</CtaLink>
            <CtaLink cta="login" variant="outline">
              Login
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-10 rounded-full bg-brand-200/50 blur-3xl" />
              <div className="relative mx-auto aspect-[9/18] w-[72%] rounded-[2.2rem] border border-brand-900/15 bg-brand-950 p-3 shadow-2xl">
                <div className="flex h-full flex-col rounded-[1.7rem] bg-[linear-gradient(180deg,#0b7a57,#022c22)] p-4 text-white">
                  <div className="mx-auto h-1.5 w-16 rounded-full bg-white/25" />
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-200">Mobile browser</p>
                  <h2 className="mt-2 text-2xl font-bold">Play on the go</h2>
                  <div className="mt-6 space-y-3">
                    {["Responsive lobby", "Quick account access", "Category discovery"].map((item) => (
                      <div key={item} className="rounded-xl bg-white/10 px-3 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-xl bg-brand-400 px-3 py-3 text-center text-sm font-semibold text-brand-950">
                    Access YES2WIN
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <h2 className="text-xl font-bold text-ink">Mobile browser experience</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  YES2WIN is designed to work through modern mobile browsers, so you can explore categories and manage
                  access without relying on unverified store badges on this partner site.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-bold text-ink">Responsive gaming journey</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Layouts adapt for common phone widths, keeping navigation readable and CTAs easy to tap with one hand.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-bold text-ink">Easy account access</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Register and Login remain one tap away from the sticky mobile bar, header and page CTAs.
                </p>
              </Card>
              <p className="text-sm text-ink-muted">
                Looking for more help? Visit the <Link href="/faq/#mobile">mobile FAQ</Link> or{" "}
                <Link href="/contact/">Contact</Link> page.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Access YES2WIN on your device" description="Open the official platform experience from your mobile browser." />
    </>
  );
}
