import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getGameCategories, getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

const imageMap = media.categories;

export async function Ecosystem() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).ecosystem;
  const gameCategories = getGameCategories(locale);

  const categories = copy.categories.map((category) => ({
    ...category,
    image: imageMap[category.id as keyof typeof imageMap] ?? imageMap.slots,
    href:
      gameCategories.find((item) => item.id === category.id)?.href ??
      localizePath(`/games/${category.id}/`, locale),
  }));

  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_24px_60px_-36px_rgba(6,78,59,0.55)]"
            >
              <Image
                src={category.image}
                alt={`${category.name} ${copy.imageAltSuffix}`}
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
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">{copy.next.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold">{copy.next.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                {copy.next.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                {copy.next.primaryCta}
              </CtaLink>
              <CtaLink href={localizePath("/games/", locale)} variant="outline" size="sm">
                {copy.next.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
