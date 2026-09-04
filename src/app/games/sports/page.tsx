import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "games-sports", path: "/games/sports/", locale });
}

export default async function SportsPage() {
  const locale = await getLocale();
  return <GameCategoryPage categoryId="sports" locale={locale} />;
}
