import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getDictionary } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export default async function NotFound() {
  const locale = await getLocale();
  const ui = getDictionary(locale);

  return (
    <div className="surface-dark flex min-h-[70vh] items-center justify-center px-4 py-28 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white">{ui.notFound.title}</h1>
        <p className="mt-4 text-brand-100/85">{ui.notFound.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={localizePath("/", locale)}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-brand-800"
          >
            {ui.notFound.cta}
          </Link>
          <CtaLink href={localizePath("/games/", locale)} variant="outline" size="md">
            {ui.cta.exploreGames}
          </CtaLink>
          <CtaLink cta="register" size="md">
            {ui.cta.register}
          </CtaLink>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-brand-200">
          <Link href={localizePath("/faq/", locale)} className="hover:text-white">
            {ui.sections.faq}
          </Link>
          <Link href={localizePath("/contact/", locale)} className="hover:text-white">
            {ui.sections.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}
