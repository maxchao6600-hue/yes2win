import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { PaymentPreview } from "@/components/home/PaymentPreview";
import { HowToJoin } from "@/components/home/HowToJoin";
import { WhyYes2Win } from "@/components/home/WhyYes2Win";
import { WhyPartner } from "@/components/home/WhyPartner";
import { PromotionsPreview } from "@/components/home/PromotionsPreview";
import { VIPPreview } from "@/components/home/VIPPreview";
import { MobilePreview } from "@/components/home/MobilePreview";
import { PartnerPreview } from "@/components/home/PartnerPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { ResponsiblePreview } from "@/components/home/ResponsiblePreview";
import { Editorial } from "@/components/home/Editorial";
import { FinalCta } from "@/components/page/FinalCta";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Official Partner | Online Gaming & Entertainment",
  description:
    "YES2WIN Official Partner — explore games, promotions, VIP, payments and mobile access, then register or log in through the official platform.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        name="YES2WIN Official Partner"
        description="Official partner information and access gateway for the YES2WIN ecosystem."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <Ecosystem />
      <FeaturedGames />
      <WhyPartner />
      <PromotionsPreview />
      <VIPPreview />
      <PaymentPreview />
      <MobilePreview />
      <HowToJoin />
      <WhyYes2Win />
      <PartnerPreview />
      <FAQPreview />
      <ResponsiblePreview />
      <Editorial />
      <FinalCta />
    </>
  );
}
