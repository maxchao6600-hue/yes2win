/**
 * Guides hub index — curated links to existing guide-quality pages.
 * Intentionally thin: no duplicated long-form bodies.
 */

export type GuidesIndexItem = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type GuidesIndexGroup = {
  id: string;
  title: string;
  description: string;
  items: GuidesIndexItem[];
};

export type GuidesIndexCopy = {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
  heroImageAlt: string;
  primaryCta: string;
  secondaryCta: string;
  jsonLdName: string;
  jsonLdDescription: string;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  groups: GuidesIndexGroup[];
  finalCta: {
    title: string;
    description: string;
  };
};

export const guidesIndexEn: GuidesIndexCopy = {
  eyebrow: "Guides",
  title: "YES2WIN guides hub",
  description:
    "Practical orientation for games, account access, payments, VIP, partner pathways and responsible entertainment — then continue into the live platform when you are ready.",
  crumb: "Guides",
  heroImageAlt: "YES2WIN guides hub artwork",
  primaryCta: "Explore Games",
  secondaryCta: "Register Guide",
  jsonLdName: "YES2WIN Guides",
  jsonLdDescription:
    "A curated hub of YES2WIN Official Partner guides covering games, account access, payments, VIP, partner pathways and responsible entertainment.",
  intro: {
    eyebrow: "How to use this hub",
    title: "Start with the topic you need",
    description:
      "Each card opens a dedicated page already written for that intent. This hub is a map — not a second copy of those guides.",
  },
  groups: [
    {
      id: "games",
      title: "Games & categories",
      description: "Understand how each entertainment path plays before you open the lobby.",
      items: [
        {
          title: "Games hub",
          body: "Overview of slots, live casino, sports, fishing and lottery, plus studios and discovery tips.",
          href: "/games/",
          cta: "Open games hub",
        },
        {
          title: "Slots guide",
          body: "Themes, formats, paytables and how to browse slot titles on mobile.",
          href: "/games/slots/",
          cta: "Read slots guide",
        },
        {
          title: "Live casino guide",
          body: "Live dealer tables, pacing, connection tips and classic table formats.",
          href: "/games/live-casino/",
          cta: "Read live casino guide",
        },
        {
          title: "Sports guide",
          body: "Pre-match and in-play concepts, popular sports and how markets are organised.",
          href: "/games/sports/",
          cta: "Read sports guide",
        },
        {
          title: "Fishing games guide",
          body: "Arcade-style fishing formats, touch controls and session pacing.",
          href: "/games/fishing/",
          cta: "Explore fishing games",
        },
        {
          title: "Lottery / 4D guide",
          body: "Draw-style play, calmer pacing and what to check before participating.",
          href: "/games/lottery/",
          cta: "See lottery options",
        },
      ],
    },
    {
      id: "account",
      title: "Account & access",
      description: "Register, sign in, manage profile tools and reach the platform on mobile.",
      items: [
        {
          title: "Registration guide",
          body: "Step-by-step orientation for creating an account through the official signup flow.",
          href: "/register-guide/",
          cta: "Open register guide",
        },
        {
          title: "Account guide",
          body: "Profile, security, records, verification and day-to-day account tools after login.",
          href: "/account-guide/",
          cta: "Open account guide",
        },
        {
          title: "Mobile access",
          body: "Browser access on phone and tablet, layout tips and troubleshooting habits.",
          href: "/mobile/",
          cta: "Open mobile guide",
        },
        {
          title: "Payment guide",
          body: "Deposit and withdrawal categories, verification concepts and cashier orientation.",
          href: "/payment/",
          cta: "Open payment guide",
        },
      ],
    },
    {
      id: "membership",
      title: "Offers, VIP & partners",
      description: "How campaigns, membership recognition and partner pathways are framed here.",
      items: [
        {
          title: "Promotions guide",
          body: "Welcome, deposit, weekly and VIP-linked campaign types — confirm live terms on the platform.",
          href: "/promotions/",
          cta: "View promotions",
        },
        {
          title: "VIP overview",
          body: "Recognition-led member experience, support pathways and how eligibility is communicated.",
          href: "/vip/",
          cta: "Explore VIP",
        },
        {
          title: "Partner ecosystem",
          body: "Sharing journey, resources, tracking concepts and responsible marketing standards.",
          href: "/partner/",
          cta: "Explore partner page",
        },
      ],
    },
    {
      id: "support",
      title: "Help & policies",
      description: "Answers, responsible play guidance and site policies.",
      items: [
        {
          title: "FAQ",
          body: "Account, games, payments, mobile, partner and responsible-play questions in one place.",
          href: "/faq/",
          cta: "Browse FAQ",
        },
        {
          title: "Responsible gaming",
          body: "Budgets, time limits, breaks, warning signs and where to seek support.",
          href: "/responsible-gaming/",
          cta: "Read responsible gaming",
        },
        {
          title: "Contact pathways",
          body: "Where to go for account, payment, technical and partner enquiries.",
          href: "/contact/",
          cta: "Open contact",
        },
        {
          title: "Terms of use",
          body: "Rules for using this partner website.",
          href: "/terms/",
          cta: "Read terms",
        },
        {
          title: "Privacy policy",
          body: "How this partner site handles information.",
          href: "/privacy/",
          cta: "Read privacy",
        },
      ],
    },
  ],
  finalCta: {
    title: "Ready for the next step?",
    description: "Open a guide above, or continue into registration when you already know what you need.",
  },
};
