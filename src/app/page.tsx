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
import { getSiteCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    pageId: "home",
    path: "/",
    locale,
    ogImage: "/images/og/og-home.png",
  });
}

export default async function HomePage() {
  const locale = await getLocale();
  const site = getSiteCopy(locale);

  return (
    <>
      <WebPageJsonLd name={site.identity} description={site.description} path={localizePath("/", locale)} />
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
