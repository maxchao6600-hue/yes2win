import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Ecosystem } from "@/components/home/Ecosystem";
import { WhyPartner } from "@/components/home/WhyPartner";
import { PromotionsPreview } from "@/components/home/PromotionsPreview";
import { VIPPreview } from "@/components/home/VIPPreview";
import { MobilePreview } from "@/components/home/MobilePreview";
import { PartnerPreview } from "@/components/home/PartnerPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { Editorial } from "@/components/home/Editorial";
import { FinalCta } from "@/components/page/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Official Partner | Online Gaming & Entertainment",
  description:
    "Discover YES2WIN through an official partner platform — explore games, promotions, VIP, payments and mobile access with a modern, trustworthy experience.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Ecosystem />
      <WhyPartner />
      <PromotionsPreview />
      <VIPPreview />
      <MobilePreview />
      <PartnerPreview />
      <FAQPreview />
      <Editorial />
      <FinalCta />
    </>
  );
}
