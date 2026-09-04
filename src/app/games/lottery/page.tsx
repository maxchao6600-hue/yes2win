import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "games-lottery", path: "/games/lottery/", locale });
}

export default async function LotteryPage() {
  const locale = await getLocale();
  return <GameCategoryPage categoryId="lottery" locale={locale} />;
}
