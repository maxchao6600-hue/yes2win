import Image from "next/image";
import Link from "next/link";
import { gameCategories } from "@/config/content/games";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const imageMap: Record<string, string> = {
  slots: "/images/categories/slots.webp",
  "live-casino": "/images/categories/live-casino.webp",
  sports: "/images/categories/sports.webp",
  fishing: "/images/categories/fishing.webp",
  lottery: "/images/categories/lottery.webp",
};

export function Ecosystem() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Game categories"
          title="Five ways to enjoy YES2WIN"
          description="Browse slots, live casino, sports, fishing and lottery — then open the official lobby for titles available to your account."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gameCategories.map((category, index) => (
            <article
              key={category.id}
              className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.5)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={imageMap[category.id]}
                  alt={`${category.shortName} category artwork`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">
                  {category.shortName}
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-ink">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{category.description}</p>
                <Link
                  href={category.href}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                >
                  {category.ctaLabel} →
                </Link>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">Next step</p>
              <h3 className="mt-3 text-2xl font-bold">Ready for the lobby?</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                Register or log in to browse live YES2WIN categories on the official platform.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                Register Now
              </CtaLink>
              <CtaLink href="/games/" variant="outline" size="sm">
                Explore Games
              </CtaLink>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
