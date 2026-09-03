import Link from "next/link";
import { vipContent } from "@/config/content/vip";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN VIP | Premium Member Experience",
  description:
    "Discover the YES2WIN VIP experience — personalized service, priority support, exclusive events and member rewards without guaranteed financial promises.",
  path: "/vip/",
});

export default function VipPage() {
  return (
    <>
      <WebPageJsonLd name="YES2WIN VIP" description={vipContent.intro} path="/vip/" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "VIP", path: "/vip/" },
        ]}
      />
      <PageHero
        tone="dark"
        eyebrow="VIP"
        title={vipContent.headline}
        description={vipContent.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "VIP" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Register Now</CtaLink>
            <CtaLink href="/promotions/" variant="outline">
              View Promotions
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {vipContent.sections.map((section, index) => (
              <Card key={section.id} className={index === 0 ? "md:col-span-2 xl:col-span-1" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{section.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-line bg-brand-50/70 p-4 text-sm text-ink-muted">
            {vipContent.disclaimer}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/promotions/">Promotions hub</Link>
            <Link href="/faq/">Member FAQ</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      <FinalCta title="Start your YES2WIN journey" description="Register to explore member experiences on the official platform." />
    </>
  );
}
