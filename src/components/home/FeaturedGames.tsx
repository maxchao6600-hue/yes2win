import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getGameCategories, getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function FeaturedGames() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).featured;
  const categories = getGameCategories(locale);

  const showcase = copy.items.map((item) => ({
    ...item,
    image: media.categories[item.id as keyof typeof media.categories] ?? media.categories.slots,
    href: categories.find((category) => category.id === item.id)?.href ?? localizePath("/games/", locale),
  }));

  return (
    <Section tone="green">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="flex flex-wrap gap-3">
            <CtaLink href={localizePath("/games/", locale)} size="lg">
              {copy.primaryCta}
            </CtaLink>
            <CtaLink href={localizePath("/games/slots/", locale)} variant="secondary" size="lg">
              {copy.secondaryCta}
            </CtaLink>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {showcase.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_50px_-34px_rgba(6,78,59,0.5)]"
            >
              <Image
                src={item.image}
                alt={`${item.title} ${copy.imageAltSuffix}`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                {item.badge}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-50/90">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="relative mt-8 hidden overflow-hidden rounded-[1.75rem] border border-line lg:block">
          <div className="relative aspect-[21/8]">
            <Image
              src={media.featuredGames}
              alt={copy.showcaseImageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
