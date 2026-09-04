export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Games", href: "/games/" },
  { label: "Promotions", href: "/promotions/" },
  { label: "VIP", href: "/vip/" },
  { label: "Payment", href: "/payment/" },
  { label: "Mobile", href: "/mobile/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Partner", href: "/partner/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNav = {
  explore: [
    { label: "About", href: "/about/" },
    { label: "Games", href: "/games/" },
    { label: "Promotions", href: "/promotions/" },
    { label: "VIP", href: "/vip/" },
  ],
  access: [
    { label: "Mobile", href: "/mobile/" },
    { label: "Payment", href: "/payment/" },
  ],
  support: [
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" },
    { label: "Responsible Gaming", href: "/responsible-gaming/" },
  ],
  partner: [
    { label: "Partner programme", href: "/partner/" },
    { label: "Partner FAQ", href: "/faq/#partner" },
  ],
  legal: [
    { label: "Terms of use", href: "/terms/" },
    { label: "Privacy policy", href: "/privacy/" },
  ],
  games: [
    { label: "All games", href: "/games/" },
    { label: "Slots", href: "/games/slots/" },
    { label: "Live casino", href: "/games/live-casino/" },
    { label: "Sports", href: "/games/sports/" },
    { label: "Fishing", href: "/games/fishing/" },
    { label: "Lottery", href: "/games/lottery/" },
  ],
} as const;
