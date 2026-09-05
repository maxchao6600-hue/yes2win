export type PageMeta = {
  title: string;
  description: string;
};

export type PageId =
  | "home"
  | "about"
  | "games"
  | "games-slots"
  | "games-live-casino"
  | "games-sports"
  | "games-fishing"
  | "games-lottery"
  | "promotions"
  | "vip"
  | "payment"
  | "mobile"
  | "faq"
  | "partner"
  | "contact"
  | "responsible-gaming"
  | "terms"
  | "privacy"
  | "register-guide"
  | "account-guide"
  | "guides"
  | "not-found";

/** English title/description pairs, mirroring the `buildMetadata` calls in `src/app`. */
export const pageMetaEn: Record<PageId, PageMeta> = {
  home: {
    title: "YES2WIN Official Partner | Online Gaming & Entertainment",
    description:
      "YES2WIN Official Partner — explore games, promotions, VIP, payments, mobile access and partner pathways, then register or log in through the official platform.",
  },
  about: {
    title: "About YES2WIN Official Partner | YES2WIN Ecosystem",
    description:
      "Learn how YES2WIN Official Partner works as an information and access gateway connected to the YES2WIN ecosystem — games, promotions, VIP, payments and mobile.",
  },
  games: {
    title: "YES2WIN Games | Slots, Live Casino, Sports, Fishing & Lottery",
    description:
      "Explore the YES2WIN games hub — slots, live casino, sports, fishing, lottery, verified studios and mobile access through this official partner gateway.",
  },
  "games-slots": {
    title: "YES2WIN Slots | Slot Games Overview",
    description:
      "Explore YES2WIN slot games — themes, features and mobile-friendly play through this official partner gateway.",
  },
  "games-live-casino": {
    title: "YES2WIN Live Casino | Live Dealer Games",
    description:
      "Discover YES2WIN live casino — real-time dealer tables and classic formats through the official partner portal.",
  },
  "games-sports": {
    title: "YES2WIN Sports | Sports Betting Overview",
    description:
      "Learn about YES2WIN sports betting — popular events, markets and mobile access via the official partner site.",
  },
  "games-fishing": {
    title: "YES2WIN Fishing Games | Interactive Fishing",
    description:
      "Explore YES2WIN fishing games — interactive catch-style play and mobile-ready entertainment.",
  },
  "games-lottery": {
    title: "YES2WIN Lottery | Lottery Games Overview",
    description:
      "Discover YES2WIN lottery games — simple draw formats and easy mobile access through the partner gateway.",
  },
  promotions: {
    title: "YES2WIN Promotions | Current Offers & Campaigns",
    description:
      "Understand YES2WIN promotion types — welcome offers, deposit campaigns, weekly promotions, cashback concepts and VIP-linked campaigns — then confirm live terms on the platform.",
  },
  vip: {
    title: "YES2WIN VIP | Membership & Exclusive Benefits",
    description:
      "Discover the YES2WIN VIP experience — personalised service, priority support and member recognition without guaranteed financial promises.",
  },
  payment: {
    title: "YES2WIN Payment Methods | Deposit & Withdrawal Guide",
    description:
      "YES2WIN payment overview covering bank transfer, e-wallet, DuitNow, Touch n Go, GrabPay, online banking, bank cards and crypto — verify live details in the official cashier.",
  },
  mobile: {
    title: "YES2WIN Mobile | Mobile Gaming & Account Access",
    description:
      "Access YES2WIN on mobile browsers — responsive navigation, games, promotions, payments and account tools on your phone via the official partner gateway.",
  },
  faq: {
    title: "YES2WIN FAQ | Account, Games, Payments & Support",
    description:
      "Answers about YES2WIN registration, login, games, promotions, payments, mobile access, partner pathways and responsible gaming.",
  },
  partner: {
    title: "YES2WIN Partner | Official Partner Ecosystem",
    description:
      "Partner with YES2WIN — learn the journey, referral system, marketing resources, brand assets and support pathways without guaranteed income claims.",
  },
  contact: {
    title: "Contact YES2WIN Official Partner",
    description:
      "Get help with YES2WIN account access, payments, registration, login, partner support and general questions through this official partner website.",
  },
  "responsible-gaming": {
    title: "Responsible Gaming | YES2WIN Official Partner",
    description:
      "Practical YES2WIN responsible gaming guidance covering age limits, spending awareness, breaks, chasing losses and where to seek help.",
  },
  terms: {
    title: "Terms of Use | YES2WIN Official Partner",
    description:
      "Terms of use for the YES2WIN Official Partner website — an information and access gateway connected to the YES2WIN ecosystem.",
  },
  privacy: {
    title: "Privacy Policy | YES2WIN Official Partner",
    description:
      "Privacy policy for the YES2WIN Official Partner website, explaining how this information site handles data separately from the YES2WIN platform.",
  },
  "register-guide": {
    title: "YES2WIN Register Guide | Account Registration Steps",
    description:
      "Understand the YES2WIN registration flow step by step through this official partner guide before opening the live signup page.",
  },
  "account-guide": {
    title: "YES2WIN Account Guide | Profile, Records & Security",
    description:
      "Learn how YES2WIN account tools typically work — profile, security, transaction history, betting records, promotion history, verification and referral options.",
  },
  guides: {
    title: "YES2WIN Guides | Games, Account, Payments & More",
    description:
      "Browse curated YES2WIN Official Partner guides for games, registration, account tools, payments, VIP, partner pathways and responsible entertainment.",
  },
  "not-found": {
    title: "Page Not Found | YES2WIN Official Partner",
    description:
      "The page you requested is unavailable. Return home or explore YES2WIN games, promotions, payments and support pages from the navigation.",
  },
};
