import { getCategoryById } from "@/config/content/games";
import { GameCategoryPage } from "@/components/games/GameCategoryPage";
import { buildMetadata } from "@/lib/seo";

const category = getCategoryById("lottery")!;

export const metadata = buildMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: category.path,
});

export default function LotteryPage() {
  return <GameCategoryPage category={category} />;
}
