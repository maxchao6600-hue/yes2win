import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { siteZh } from "@/i18n/dictionaries/zh-cn/site";
import { faqCategories } from "@/config/content/faq";
import { gameCategories } from "@/config/content/games";
import { promotions } from "@/config/content/promotions";
import { vipContent } from "@/config/content/vip";
import { paymentMethods, paymentDisclaimer } from "@/config/content/payments";
import { partnerContent } from "@/config/content/partner";
import { accountFeatures } from "@/config/content/account";
import { gameProviders } from "@/config/content/providers";
import { moreNav, primaryNav, footerNav } from "@/config/navigation";
import { faqCategoriesZh } from "@/i18n/content/zh-cn/faq";
import { gameCategoriesZh } from "@/i18n/content/zh-cn/games";
import { promotionsZh } from "@/i18n/content/zh-cn/promotions";
import { vipZh } from "@/i18n/content/zh-cn/vip";
import { paymentsZh, paymentDisclaimerZh } from "@/i18n/content/zh-cn/payments";
import { partnerZh } from "@/i18n/content/zh-cn/partner";
import { accountZh } from "@/i18n/content/zh-cn/account";
import { providersZh } from "@/i18n/content/zh-cn/providers";
import { primaryNavZh, moreNavZh, footerNavZh } from "@/i18n/content/zh-cn/navigation";
import { getUi } from "@/i18n/dictionaries/en/ui";
import { localizePath } from "@/i18n/paths";
import { homeEn } from "@/i18n/pages/en/home";
import { homeZh } from "@/i18n/pages/zh-cn/home";
import { hubsEn } from "@/i18n/pages/en/hubs";
import { hubsZh } from "@/i18n/pages/zh-cn/hubs";
import { guidesEn } from "@/i18n/pages/en/guides";
import { guidesZh } from "@/i18n/pages/zh-cn/guides";
import { legalEn } from "@/i18n/pages/en/legal";
import { legalZh } from "@/i18n/pages/zh-cn/legal";
import { pageMetaEn, type PageId } from "@/i18n/pages/en/meta";
import { pageMetaZh } from "@/i18n/pages/zh-cn/meta";

export function getFaqCategories(locale: Locale) {
  return locale === "zh-cn" ? faqCategoriesZh : faqCategories;
}

export function getGameCategories(locale: Locale) {
  const categories = locale === "zh-cn" ? gameCategoriesZh : gameCategories;
  return categories.map((category) => ({
    ...category,
    href: localizePath(category.href, locale),
    path: localizePath(category.path, locale),
  }));
}

export function getPromotions(locale: Locale) {
  return locale === "zh-cn" ? promotionsZh : promotions;
}

export function getVipContent(locale: Locale) {
  return locale === "zh-cn" ? vipZh : vipContent;
}

export function getPaymentMethods(locale: Locale) {
  return locale === "zh-cn" ? paymentsZh : paymentMethods;
}

export function getPaymentDisclaimer(locale: Locale) {
  return locale === "zh-cn" ? paymentDisclaimerZh : paymentDisclaimer;
}

export function getPartnerContent(locale: Locale) {
  return locale === "zh-cn" ? partnerZh : partnerContent;
}

export function getAccountFeatures(locale: Locale) {
  return locale === "zh-cn" ? accountZh : accountFeatures;
}

export function getProviders(locale: Locale) {
  return locale === "zh-cn" ? providersZh : gameProviders;
}

export function getPrimaryNav(locale: Locale) {
  const items = locale === "zh-cn" ? primaryNavZh : primaryNav;
  return items.map((item) => ({ ...item, href: localizePath(item.href, locale) }));
}

export function getMoreNav(locale: Locale) {
  const items = locale === "zh-cn" ? moreNavZh : moreNav;
  return items.map((item) => ({ ...item, href: localizePath(item.href, locale) }));
}

export function getFooterNav(locale: Locale) {
  const source = locale === "zh-cn" ? footerNavZh : footerNav;
  const localizeGroup = (group: readonly { label: string; href: string }[]) =>
    group.map((item) => ({ ...item, href: localizePath(item.href, locale) }));
  return {
    explore: localizeGroup(source.explore),
    games: localizeGroup(source.games),
    access: localizeGroup(source.access),
    support: localizeGroup(source.support),
    partner: localizeGroup(source.partner),
    legal: localizeGroup(source.legal),
  };
}

export function getDictionary(locale: Locale) {
  return getUi(locale);
}

/**
 * Translatable slice of `siteConfig`. URLs, env-backed contact values and
 * `siteConfig.legal` stay on `siteConfig` — only display copy is overlaid.
 */
export function getSiteCopy(locale: Locale): {
  identity: string;
  description: string;
  disclaimer: string;
  logoAlt: string;
  contact: {
    customerSupport: { label: string; description: string; value: string; fallback: string };
    partnerSupport: { label: string; description: string; value: string; fallback: string };
    generalEnquiries: { label: string; description: string; value: string; fallback: string };
  };
} {
  const source = locale === "zh-cn" ? siteZh : siteConfig;
  return {
    identity: source.identity,
    description: source.description,
    disclaimer: source.disclaimer,
    logoAlt: locale === "zh-cn" ? siteZh.logo.alt : siteConfig.logo.alt,
    contact: source.contact,
  };
}

export function getHomeCopy(locale: Locale) {
  return locale === "zh-cn" ? homeZh : homeEn;
}

export function getHubsCopy(locale: Locale) {
  return locale === "zh-cn" ? hubsZh : hubsEn;
}

export function getGuidesCopy(locale: Locale) {
  return locale === "zh-cn" ? guidesZh : guidesEn;
}

export function getLegalCopy(locale: Locale) {
  return locale === "zh-cn" ? legalZh : legalEn;
}

export function getMetaCopy(pageId: PageId, locale: Locale) {
  return locale === "zh-cn" ? pageMetaZh[pageId] : pageMetaEn[pageId];
}
