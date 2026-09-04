import Link from "next/link";
import { allFaqItems, faqCategories } from "@/config/content/faq";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN FAQ | Registration, Games & Payments",
  description:
    "Answers about YES2WIN registration, login, games, promotions, payments, mobile access, partner pathways and responsible gaming.",
  path: "/faq/",
});

const relatedLinks: Record<string, Array<{ label: string; href: string }>> = {
  general: [
    { label: "About this site", href: "/about/" },
    { label: "Responsible gaming", href: "/responsible-gaming/" },
  ],
  account: [
    { label: "Contact", href: "/contact/" },
  ],
  registration: [],
  login: [],
  games: [
    { label: "Games overview", href: "/games/" },
    { label: "Slots", href: "/games/slots/" },
    { label: "Live casino", href: "/games/live-casino/" },
  ],
  slots: [
    { label: "Slots guide", href: "/games/slots/" },
    { label: "Promotions", href: "/promotions/" },
  ],
  "live-casino": [
    { label: "Live casino guide", href: "/games/live-casino/" },
    { label: "Mobile", href: "/mobile/" },
  ],
  sports: [
    { label: "Sports guide", href: "/games/sports/" },
    { label: "Mobile", href: "/mobile/" },
  ],
  fishing: [
    { label: "Fishing guide", href: "/games/fishing/" },
    { label: "Games overview", href: "/games/" },
  ],
  lottery: [
    { label: "Lottery guide", href: "/games/lottery/" },
    { label: "Games overview", href: "/games/" },
  ],
  promotions: [
    { label: "Promotions hub", href: "/promotions/" },
    { label: "Terms", href: "/terms/" },
  ],
  vip: [
    { label: "VIP overview", href: "/vip/" },
    { label: "Promotions", href: "/promotions/" },
  ],
  payments: [
    { label: "Payment guide", href: "/payment/" },
    { label: "Contact", href: "/contact/" },
  ],
  deposit: [
    { label: "Payment guide", href: "/payment/" },
    { label: "Promotions", href: "/promotions/" },
  ],
  withdrawal: [
    { label: "Payment guide", href: "/payment/" },
    { label: "Contact", href: "/contact/" },
  ],
  mobile: [
    { label: "Mobile page", href: "/mobile/" },
    { label: "Games", href: "/games/" },
  ],
  partner: [
    { label: "Partner programme", href: "/partner/" },
    { label: "Contact", href: "/contact/" },
  ],
  security: [
    { label: "Privacy policy", href: "/privacy/" },
  ],
  "responsible-gaming": [
    { label: "Responsible gaming page", href: "/responsible-gaming/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN FAQ"
        description="Frequently asked questions about YES2WIN and this official partner website."
        path="/faq/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq/" },
        ]}
      />
      <FaqJsonLd items={allFaqItems} />
      <PageHero
        image="/images/brand/yes2win-about-ecosystem.webp"
        imageAlt="YES2WIN FAQ artwork"
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Concise answers on account access, categories, promotions, payments, mobile, partner topics and responsible play."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        actions={
          <>
            <CtaLink cta="register" size="sm">
              Register Now
            </CtaLink>
            <CtaLink cta="login" variant="secondary" size="sm">
              Login
            </CtaLink>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-line bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-800 hover:border-brand-300"
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-ink">{category.title}</h2>
                <Accordion items={category.items} />
                {relatedLinks[category.id]?.length ? (
                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
                    {relatedLinks[category.id].map((link) => (
                      <Link key={link.href + link.label} href={link.href}>
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
