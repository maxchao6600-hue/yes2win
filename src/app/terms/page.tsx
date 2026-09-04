import { LegalDocument } from "@/components/page/LegalDocument";
import { getLegalCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "terms", path: "/terms/", locale });
}

export default async function TermsPage() {
  const locale = await getLocale();
  return <LegalDocument copy={getLegalCopy(locale).terms} locale={locale} path="/terms/" />;
}
