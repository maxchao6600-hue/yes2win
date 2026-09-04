import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const imageMap = media.categories;

export function Ecosystem() {
  const categories = [
    { id: "slots", name: "Slot Games", href: "/games/slots/", description: "Theme-driven spins for short sessions or longer play.", cta: "Explore slots" },
    { id: "live-casino", name: "Live Casino", href: "/games/live-casino/", description: "Dealer tables streamed in real time when available.", cta: "View live casino" },
    { id: "sports", name: "Sports", href: "/games/sports/", description: "Football, basketball, tennis and more on the sports desk.", cta: "Browse sports" },
    { id: "fishing", name: "Fishing Games", href: "/games/fishing/", description: "Interactive catch-style play with vivid underwater energy.", cta: "Try fishing games" },
    { id: "lottery", name: "Lottery / 4D", href: "/games/lottery/", description: "Number-led draw entertainment with a calmer pace.", cta: "See lottery options" },
  ] as const;

  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Game categories"
          title="Five ways to enjoy YES2WIN"
          description="Large category artworks lead into deeper guides — then into the official lobby for live titles."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_24px_60px_-36px_rgba(6,78,59,0.55)]"
            >
              <Image
                src={imageMap[category.id]}
                alt={`${category.name} artwork`}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/90">{category.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand-200">{category.cta} →</span>
              </div>
            </Link>
          ))}
          <div className="flex min-h-[320px] flex-col justify-between rounded-[1.75rem] bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white">
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
