export const siteConfig = {
  name: "YES2WIN",
  identity: "YES2WIN Official Partner",
  tagline: "YES is the Choice. WIN is the Result.",
  description:
    "An official partner information and access gateway connected to the YES2WIN ecosystem — games, promotions, VIP and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yes2winpartner.com",
  locale: "en",
  registerUrl: process.env.NEXT_PUBLIC_REGISTER_URL ?? "https://m-yes2win.com/signup/",
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL ?? "https://m-yes2win.com/login/",
  partnerUrl: process.env.NEXT_PUBLIC_PARTNER_URL ?? "https://m-yes2win.com/agent/",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "",
  logo: {
    src: "/images/logo.png",
    alt: "YES2WIN logo",
    width: 160,
    height: 48,
  },
  contact: {
    customerSupport: {
      label: "Customer Support",
      description:
        "Help with account access, games, deposits, withdrawals and day-to-day platform questions.",
      value: process.env.NEXT_PUBLIC_SUPPORT_CONTACT ?? "",
      fallback:
        "Support channels are provided through the official YES2WIN platform after you register or log in.",
    },
    partnerSupport: {
      label: "Partner Support",
      description:
        "Guidance for partner onboarding, referral sharing and partner programme resources.",
      value: process.env.NEXT_PUBLIC_PARTNER_CONTACT ?? "",
      fallback:
        "Partner support is available through the official partner access flow once your account is active.",
    },
    generalEnquiries: {
      label: "General Enquiries",
      description:
        "Questions about this official partner website, navigation and publicly available information.",
      value: process.env.NEXT_PUBLIC_GENERAL_CONTACT ?? "",
      fallback:
        "For general questions, start with the FAQ or continue through Register and Login on the official platform.",
    },
  },
  social: {} as Record<string, string>,
  languages: [
    { code: "en", label: "English", locale: "en", enabled: true, href: "/" },
    { code: "zh-cn", label: "中文", locale: "zh-cn", enabled: true, href: "/zh-cn/" },
    { code: "ms", label: "Malay", locale: "ms", enabled: false, href: "/ms/" },
    { code: "th", label: "ไทย", locale: "th", enabled: false, href: "/th/" },
    { code: "vi", label: "Tiếng Việt", locale: "vi", enabled: false, href: "/vi/" },
    { code: "id", label: "Indonesian", locale: "id", enabled: false, href: "/id/" },
  ],
  legal: {
    entityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY ?? "",
    jurisdiction: process.env.NEXT_PUBLIC_LEGAL_JURISDICTION ?? "",
    lastUpdated: "2026-09-03",
  },
  disclaimer:
    "This website operates as an official partner platform and is not the primary YES2WIN corporate website.",
} as const;

export type SiteConfig = typeof siteConfig;

export const enabledLanguages = siteConfig.languages.filter((l) => l.enabled);
