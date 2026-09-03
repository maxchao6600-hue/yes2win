import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CategoryVisual, type IconName } from "@/components/ui/Icon";
import { CtaLink } from "@/components/ui/CtaLink";

const iconMap: Record<string, IconName> = {
  slots: "slots",
  "live-casino": "live",
  sports: "sports",
  fishing: "fishing",
  lottery: "lottery",
};

export function Ecosystem() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="YES2WIN ecosystem"
          title="One ecosystem. Multiple ways to play."
          description="Explore the core entertainment categories available across the YES2WIN platform experience — presented clearly for members and partners alike."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gameCategories.map((category) => (
            <Card key={category.id} className="flex flex-col">
              <CategoryVisual name={iconMap[category.id] ?? "spark"} />
              <h3 className="mt-5 text-xl font-bold text-ink">{category.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={category.href}
                  className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  {category.ctaLabel}
                </Link>
              </div>
            </Card>
          ))}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-brand-700 to-brand-950 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">Next step</p>
              <h3 className="mt-3 text-2xl font-bold">Ready to enter the lobby?</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                Register or log in to access the live YES2WIN platform experience.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                Register Now
              </CtaLink>
              <CtaLink href="/games/" variant="outline" size="sm" externalKind="default">
                Explore Games
              </CtaLink>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
