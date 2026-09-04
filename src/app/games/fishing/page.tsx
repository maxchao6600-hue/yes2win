import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "games-fishing", path: "/games/fishing/", locale });
}

export default async function FishingPage() {
  const locale = await getLocale();
  return <GameCategoryPage categoryId="fishing" locale={locale} />;
}
