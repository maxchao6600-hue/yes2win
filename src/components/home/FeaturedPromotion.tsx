import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";

export function FeaturedPromotion() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Featured campaign</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Have You YES2WIN Welcome Bonus</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-50/85 sm:text-base">
              YES2WIN publicly references a welcome campaign designed to help new members start with extra value.
              Exact percentages, deposit rules and wagering change over time — check the latest offer on the official
              platform before you opt in.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">Register Now</CtaLink>
              <CtaLink href="/promotions/" variant="outline">
                View Promotions
              </CtaLink>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src="/images/promotions/welcome.webp"
              alt="YES2WIN welcome bonus campaign artwork"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
