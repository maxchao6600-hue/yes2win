import { LegalDocument } from "@/components/page/LegalDocument";
import { getLegalCopy } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ pageId: "privacy", path: "/privacy/", locale });
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  return <LegalDocument copy={getLegalCopy(locale).privacy} locale={locale} path="/privacy/" />;
}
