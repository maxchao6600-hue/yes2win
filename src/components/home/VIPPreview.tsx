import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function VIPPreview() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            light
            eyebrow="VIP"
            title="A more personal YES2WIN experience"
            description="VIP is about recognition, thoughtful support and curated moments — not guaranteed financial outcomes."
          />
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="space-y-4 text-sm text-brand-50/90">
              {[
                "Personalized service touchpoints",
                "Priority support pathways",
                "Exclusive event invitations when available",
                "Member rewards aligned to programme rules",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/vip/" variant="outline">
                Discover VIP
              </CtaLink>
              <Link href="/promotions/" className="inline-flex items-center text-sm font-semibold text-brand-200">
                Related promotions →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
