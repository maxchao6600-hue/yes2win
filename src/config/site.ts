export const siteConfig = {
  name: "YES2WIN",
  identity: "YES2WIN Official Partner",
  tagline: "YES is the Choice. WIN is the Result.",
  description:
    "Discover the YES2WIN ecosystem through an official partner platform built for a smooth, secure and modern user experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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
      description: "Help with account access, games, payments and general questions.",
      value: process.env.NEXT_PUBLIC_SUPPORT_CONTACT ?? "",
      placeholder: "Configure NEXT_PUBLIC_SUPPORT_CONTACT",
    },
    partnerSupport: {
      label: "Partner Support",
      description: "Assistance for partner onboarding, referrals and partner resources.",
      value: process.env.NEXT_PUBLIC_PARTNER_CONTACT ?? "",
      placeholder: "Configure NEXT_PUBLIC_PARTNER_CONTACT",
    },
    generalEnquiries: {
      label: "General Enquiries",
      description: "Non-urgent questions about this official partner website.",
      value: process.env.NEXT_PUBLIC_GENERAL_CONTACT ?? "",
      placeholder: "Configure NEXT_PUBLIC_GENERAL_CONTACT",
    },
  },
  social: {
    // Add only when verified official channels are provided
  } as Record<string, string>,
  languages: [
    {
      code: "en",
      label: "English",
      locale: "en",
      enabled: true,
      href: "/",
    },
    // Prepared for future localization — not shown until enabled
    { code: "zh", label: "中文", locale: "zh", enabled: false, href: "/zh/" },
    { code: "ms", label: "Malay", locale: "ms", enabled: false, href: "/ms/" },
    { code: "th", label: "ไทย", locale: "th", enabled: false, href: "/th/" },
    { code: "vi", label: "Tiếng Việt", locale: "vi", enabled: false, href: "/vi/" },
    { code: "id", label: "Indonesian", locale: "id", enabled: false, href: "/id/" },
  ],
  legal: {
    entityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY ?? "[Legal entity name — configure]",
    jurisdiction: process.env.NEXT_PUBLIC_LEGAL_JURISDICTION ?? "[Jurisdiction — configure]",
    lastUpdated: "2026-09-03",
  },
  disclaimer:
    "This website operates as an official partner platform and is not the primary YES2WIN corporate website.",
} as const;

export type SiteConfig = typeof siteConfig;

export const enabledLanguages = siteConfig.languages.filter((l) => l.enabled);
