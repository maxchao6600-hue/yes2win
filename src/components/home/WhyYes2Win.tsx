import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

/** Artwork and destinations stay locale-independent and align with `copy.why.items`. */
const visuals = [
  { image: media.categories.slots, href: "/games/" },
  { image: media.mobileDevice, href: "/mobile/" },
  { image: media.promotions.deposit, href: "/payment/" },
  { image: media.vipHero, href: "/vip/" },
  { image: media.partnerEcosystem, href: "/partner/" },
  { image: media.contactSupport, href: "/faq/" },
];

export async function WhyYes2Win() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).why;

  const items = copy.items.map((item, index) => ({
    ...item,
    image: visuals[index]?.image ?? media.aboutEcosystem,
    href: localizePath(visuals[index]?.href ?? "/", locale),
  }));

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="relative hidden aspect-[21/9] overflow-hidden rounded-[1.5rem] lg:block">
            <Image
              src={media.aboutEcosystem}
              alt={copy.imageAlt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
            >
              <Image
                src={item.image}
                alt={`${item.title} ${copy.imageAltSuffix}`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/90">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href={localizePath("/about/", locale)} variant="secondary">
            {copy.cta}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
