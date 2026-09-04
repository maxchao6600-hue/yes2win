import { SplitMedia } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";

export function FeaturedGames() {
  return (
    <SplitMedia
      tone="green"
      eyebrow="Featured"
      title="Find your next favorite"
      description="From fast-spin slots to live dealer tables, sports markets, fishing adventures and lottery draws — YES2WIN brings multiple entertainment styles together under one brand."
      image="/images/home/featured.webp"
      imageAlt="YES2WIN multi-category entertainment showcase"
      actions={
        <>
          <CtaLink href="/games/" size="lg">
            Explore Games
          </CtaLink>
          <CtaLink href="/games/slots/" variant="secondary" size="lg">
            Browse slots
          </CtaLink>
        </>
      }
    >
      <ul className="mt-6 space-y-2 text-sm text-ink-muted">
        <li>• Category guides for slots, live casino, sports, fishing and lottery</li>
        <li>• Mobile-friendly browsing before you enter the live lobby</li>
        <li>• Clear Register and Login paths into the official platform</li>
      </ul>
    </SplitMedia>
  );
}
