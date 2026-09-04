import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { Ecosystem } from "@/components/home/Ecosystem";
import { ProvidersPreview } from "@/components/home/ProvidersPreview";
import { PromotionsPreview } from "@/components/home/PromotionsPreview";
import { FeaturedPromotion } from "@/components/home/FeaturedPromotion";
import { VIPPreview } from "@/components/home/VIPPreview";
import { PaymentPreview } from "@/components/home/PaymentPreview";
import { MobilePreview } from "@/components/home/MobilePreview";
import { HowToJoin } from "@/components/home/HowToJoin";
import { HowToLogin } from "@/components/home/HowToLogin";
import { AccountFeatures } from "@/components/home/AccountFeatures";
import { WhyYes2Win } from "@/components/home/WhyYes2Win";
import { PartnerPreview } from "@/components/home/PartnerPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { ResponsiblePreview } from "@/components/home/ResponsiblePreview";
import { FinalCta } from "@/components/page/FinalCta";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "YES2WIN Official Partner | Online Gaming & Entertainment",
  description:
    "YES2WIN Official Partner — explore games, promotions, VIP, payments, mobile access and partner pathways, then register or log in through the official platform.",
  path: "/",
  ogImage: "/images/og/og-home.png",
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
      <FeaturedGames />
      <Ecosystem />
      <ProvidersPreview />
      <PromotionsPreview />
      <FeaturedPromotion />
      <VIPPreview />
      <PaymentPreview />
      <MobilePreview />
      <HowToJoin />
      <HowToLogin />
      <AccountFeatures />
      <WhyYes2Win />
      <PartnerPreview />
      <FAQPreview />
      <ResponsiblePreview />
      <FinalCta />
    </>
  );
}
