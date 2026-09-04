import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "games-live-casino", path: "/games/live-casino/", locale });
}

export default async function LiveCasinoPage() {
  const locale = await getLocale();
  return <GameCategoryPage categoryId="live-casino" locale={locale} />;
}
