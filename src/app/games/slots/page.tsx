import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "games-slots", path: "/games/slots/", locale });
}

export default async function SlotsPage() {
  const locale = await getLocale();
  return <GameCategoryPage categoryId="slots" locale={locale} />;
}
