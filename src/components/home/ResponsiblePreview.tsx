import { SplitMedia } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";

export function ResponsiblePreview() {
  return (
    <SplitMedia
      tone="green"
      reverse
      eyebrow="18+"
      title="Play responsibly"
      description="Keep entertainment recreational. Set limits, take breaks and seek help if gaming stops feeling healthy."
      image="/images/brand/yes2win-responsible.webp"
      imageAlt="Responsible gaming visual"
      actions={
        <CtaLink href="/responsible-gaming/" variant="secondary" size="lg">
          Learn more
        </CtaLink>
      }
    />
  );
}
