import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function MobilePreview() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mobile"
              title="YES2WIN, built for mobile"
              description="Browse categories, manage account access and move through the partner gateway comfortably on phone-sized screens."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/mobile/" variant="secondary">
                Learn more
              </CtaLink>
              <CtaLink cta="register">Access YES2WIN</CtaLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-8 rounded-full bg-brand-300/30 blur-3xl" />
            <div className="relative mx-auto aspect-[9/18] w-[70%] rounded-[2rem] border border-brand-900/20 bg-gradient-to-b from-brand-900 to-brand-950 p-3 shadow-[0_30px_80px_-30px_rgba(2,44,34,0.8)]">
              <div className="flex h-full flex-col rounded-[1.5rem] bg-[linear-gradient(180deg,#064e3b,#022c22)] p-4 text-white">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/30" />
                <p className="text-xs uppercase tracking-[0.18em] text-brand-200">YES2WIN</p>
                <p className="mt-2 text-xl font-bold">Mobile lobby</p>
                <div className="mt-6 space-y-3">
                  {["Slots", "Live Casino", "Sports"].map((label) => (
                    <div key={label} className="rounded-xl bg-white/10 px-3 py-3 text-sm font-medium">
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded-xl bg-brand-500 px-3 py-3 text-center text-sm font-semibold">
                  Access YES2WIN
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
