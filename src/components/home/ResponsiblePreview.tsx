import { SplitMedia } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";
import { media } from "@/config/media";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function ResponsiblePreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).responsible;

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
        <CtaLink href={localizePath("/responsible-gaming/", locale)} variant="secondary" size="lg">
          {copy.cta}
        </CtaLink>
      }
    />
  );
}
