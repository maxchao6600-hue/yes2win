import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { getDictionary, getFooterNav } from "@/i18n/get-content";
import { getLocale } from "@/i18n/locale";
import { localizePath } from "@/i18n/paths";
import { siteZh } from "@/i18n/dictionaries/zh-cn/site";

export async function Footer() {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const nav = getFooterNav(locale);
  const identity = locale === "zh-cn" ? siteZh.identity : siteConfig.identity;
  const disclaimer = locale === "zh-cn" ? siteZh.disclaimer : siteConfig.disclaimer;
  const intro =
    locale === "zh-cn"
      ? siteZh.description
      : "An official partner information and access gateway connected to the YES2WIN ecosystem.";
  const responsibleHref = localizePath("/responsible-gaming/", locale);
  const homeHref = localizePath("/", locale);

  const footerUi = ui.footer as {
    disclaimer?: string;
    responsibleBefore?: string;
    responsibleLink?: string;
    responsibleAfter?: string;
    copyright?: string;
    responsibleLine?: { before: string; linkLabel: string; after: string };
    copyrightSuffix?: string;
    intro?: string;
    columns?: Record<string, string>;
  };

  const columns = footerUi.columns ?? {
    explore: ui.sections.explore,
    games: ui.sections.games,
    access: ui.sections.access,
    support: ui.sections.support,
    partner: ui.sections.partner,
    legal: ui.sections.legal,
  };

  const responsible = footerUi.responsibleLine ?? {
    before: footerUi.responsibleBefore ?? "18+. Play responsibly. Entertainment involves risk — only participate if it is legal for you in your jurisdiction. Read our ",
    linkLabel: footerUi.responsibleLink ?? ui.cta.responsibleGaming,
    after: footerUi.responsibleAfter ?? " guidance.",
  };

  return (
    <footer className="border-t border-brand-900/20 bg-brand-950 text-brand-50">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(6,minmax(0,1fr))]">
          <div className="lg:pr-4">
            <Link href={homeHref} className="inline-flex items-center gap-3">
              <Image
                src={siteConfig.logo.src}
                alt={ui.brand.logoAlt}
                width={140}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
              {identity}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-100/80">{intro}</p>
            <p className="mt-4 text-sm text-brand-200">{siteConfig.tagline}</p>
          </div>

          <FooterColumn title={columns.explore} items={nav.explore} />
          <FooterColumn title={columns.games} items={nav.games} />
          <FooterColumn
            title={columns.access}
            items={[
              { label: ui.register, href: siteConfig.registerUrl, external: true },
              { label: ui.login, href: siteConfig.loginUrl, external: true },
              ...nav.access,
            ]}
          />
          <FooterColumn title={columns.support} items={nav.support} />
          <FooterColumn title={columns.partner} items={nav.partner} />
          <FooterColumn title={columns.legal} items={nav.legal} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
          <CtaLink cta="register" size="sm">
            {ui.registerNow}
          </CtaLink>
          <CtaLink cta="login" variant="outline" size="sm">
            {ui.login}
          </CtaLink>
          <CtaLink cta="partner" variant="outline" size="sm">
            {ui.cta.becomePartner}
          </CtaLink>
        </div>

        <div className="mt-8 space-y-3 text-sm text-brand-100/70">
          <p>{disclaimer}</p>
          <p>
            {responsible.before}
            <Link href={responsibleHref} className="underline hover:text-white">
              {responsible.linkLabel}
            </Link>
            {responsible.after}
          </p>
          <p className="text-brand-200/80">
            © {new Date().getFullYear()} {identity}.{" "}
            {footerUi.copyrightSuffix ?? footerUi.copyright ?? "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string; external?: boolean }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-300">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-50/85 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-brand-50/85 transition hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
