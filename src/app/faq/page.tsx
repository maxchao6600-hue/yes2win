import Link from "next/link";
import { allFaqItems, faqCategories } from "@/config/content/faq";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN FAQ | Registration, Games & Payments",
  description:
    "Find answers about YES2WIN registration, login, games, promotions, payments, mobile access, partner pathways, security and responsible gaming.",
  path: "/faq/",
});

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
        eyebrow="FAQ"
        title="YES2WIN frequently asked questions"
        description="Concise answers covering account access, categories, promotions, payments, mobile, partner topics and responsible gaming."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
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
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
            <Link href="/payment/">Payment guide</Link>
            <Link href="/games/">Games overview</Link>
            <Link href="/partner/">Partner page</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
