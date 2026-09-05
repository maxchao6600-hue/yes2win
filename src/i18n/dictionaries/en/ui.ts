import type { Locale } from "@/i18n/config";
import { uiZh } from "@/i18n/dictionaries/zh-cn/ui";
import { siteZh } from "@/i18n/dictionaries/zh-cn/site";

export const uiEn = {
  brand: {
    name: "YES2WIN",
    officialPartner: "Official Partner",
    identity: "YES2WIN Official Partner",
    tagline: "YES is the Choice. WIN is the Result.",
    logoAlt: "YES2WIN logo",
  },
  officialPartner: "Official Partner",
  login: "Login",
  register: "Register",
  registerNow: "Register Now",
  more: "More",
  language: "Language",
  selectLanguage: "Select language",
  skipToContent: "Skip to main content",
  home: "Home",
  nav: {
    primaryLabel: "Primary",
    mobilePrimaryLabel: "Mobile primary",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    quickActionsLabel: "Account shortcuts",
  },
  sections: {
    explore: "Explore",
    games: "Games",
    access: "Access",
    support: "Support",
    partner: "Partner",
    legal: "Legal",
    gameCategories: "Game categories",
    promotions: "Promotions",
    payment: "Payment",
    mobile: "Mobile",
    vip: "VIP",
    faq: "FAQ",
    contact: "Contact",
    overview: "Overview",
    featured: "Featured",
    getStarted: "Get started",
    related: "Related",
    guide: "Guide",
    responsibleGaming: "Responsible Gaming",
  },
  cta: {
    login: "Login",
    register: "Register",
    registerNow: "Register Now",
    accessYes2win: "Access YES2WIN",
    exploreGames: "Explore Games",
    exploreSlots: "Explore slots",
    exploreLiveCasino: "Explore live casino",
    exploreSports: "Browse sports",
    exploreFishing: "Explore fishing games",
    exploreLottery: "See lottery options",
    viewPromotions: "View Promotions",
    viewVipExperience: "Explore VIP",
    viewPaymentOptions: "Payment guide",
    becomePartner: "Become a Partner",
    partnerProgramme: "Partner programme",
    contactPathways: "Contact pathways",
    contactSupport: "Contact support",
    readFaq: "Read FAQ",
    registerGuide: "Register guide",
    accountGuide: "Account guide",
    responsibleGaming: "Responsible Gaming",
    backToHome: "Back to home",
    learnMore: "Learn more",
    viewAll: "View all",
  },
  breadcrumb: {
    label: "Breadcrumb",
    home: "Home",
  },
  footer: {
    disclaimer:
      "This website operates as an official partner platform and is not the primary YES2WIN corporate website.",
    responsibleBefore: "18+. Play responsibly. Entertainment involves risk — only participate if it is legal for you in your jurisdiction. Read our ",
    responsibleLink: "Responsible Gaming",
    responsibleAfter: " guidance.",
    copyright: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you requested is unavailable. Return home or explore YES2WIN categories from the navigation.",
    cta: "Back to home",
  },
} as const;

export type UiDictionary = typeof uiEn;

export function getUi(locale: Locale): UiDictionary {
  return locale === "zh-cn" ? (uiZh as unknown as UiDictionary) : uiEn;
}

export function getSiteCopy(locale: Locale) {
  if (locale === "zh-cn") return siteZh;
  return null;
}
