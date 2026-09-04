import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

const imageMap = {
  slots: media.categories.slots,
  "live-casino": media.categories["live-casino"],
  sports: media.categories.sports,
  fishing: media.categories.fishing,
  lottery: media.categories.lottery,
} as const;

export async function CategoryGuides() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).categoryGuides;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-10 grid gap-6">
          {copy.items.map((item, index) => {
            const image = imageMap[item.id as keyof typeof imageMap];
            const reverse = index % 2 === 1;
            return (
              <article
                key={item.id}
                className={`grid items-center gap-6 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)] lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[240px] lg:min-h-[320px]">
                  <Image
                    src={image}
                    alt={item.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <CtaLink href={localizePath(item.href, locale)} variant="secondary" size="sm">
                      {item.cta}
                    </CtaLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
