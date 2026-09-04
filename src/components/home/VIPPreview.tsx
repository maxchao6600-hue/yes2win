import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

/** Artwork stays locale-independent and aligns with the order of `copy.vip.points`. */
const pointImages = [media.vipPersonal, media.vipPersonal, media.vipEvents];

export async function VIPPreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).vip;

  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            {"body" in copy && typeof copy.body === "string" ? (
              <p className="mt-4 text-sm leading-relaxed text-brand-50/85 sm:text-base">{copy.body}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/vip/", locale)} variant="outline">
                {copy.primaryCta}
              </CtaLink>
              <Link
                href={localizePath("/promotions/", locale)}
                className="inline-flex items-center text-sm font-semibold text-brand-200"
              >
                {copy.secondaryLink} →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src={media.vipHero}
              alt={copy.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {copy.points.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <Image
                  src={pointImages[index] ?? media.vipPersonal}
                  alt={`${item.title} ${copy.imageAltSuffix}`}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/85">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
