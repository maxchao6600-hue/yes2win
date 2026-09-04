import { SplitMedia } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";
import { media } from "@/config/media";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function ResponsiblePreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).responsible;
  const points = "points" in copy && Array.isArray(copy.points) ? copy.points : [];

  return (
    <SplitMedia
      tone="green"
      reverse
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      image={media.responsible}
      imageAlt={copy.imageAlt}
      actions={
        <div className="space-y-5">
          {points.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point.title} className="rounded-2xl border border-brand-200 bg-white/90 p-4">
                  <h3 className="text-base font-bold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          <CtaLink href={localizePath("/responsible-gaming/", locale)} variant="secondary" size="lg">
            {copy.cta}
          </CtaLink>
        </div>
      }
    />
  );
}
