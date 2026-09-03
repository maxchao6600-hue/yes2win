import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const reasons = [
  {
    title: "Clear partner positioning",
    description:
      "This site distinguishes YES2WIN from the official partner experience — helping visitors understand where they are and how to proceed.",
  },
  {
    title: "Category-first navigation",
    description:
      "Slots, live casino, sports, fishing and lottery are organised for fast discovery without noisy casino-template clutter.",
  },
  {
    title: "Conversion without pressure",
    description:
      "Register and Login CTAs stay central and consistent, while content remains informative and cautious about unverified claims.",
  },
];

export function WhyPartner() {
  return (
    <Section tone="green">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Why this portal"
            title="A calmer, clearer way into YES2WIN"
            description="Built as an official partner gateway — premium, modern and focused on trustworthy guidance rather than hype."
          />
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-brand-200/80 bg-white/80 p-5 shadow-[0_12px_40px_-28px_rgba(6,78,59,0.35)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{reason.description}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink href="/about/" variant="secondary">
                Learn more
              </CtaLink>
              <Link href="/partner/" className="inline-flex items-center text-sm font-semibold text-brand-800">
                Discover partner pathways →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
