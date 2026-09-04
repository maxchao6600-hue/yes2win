export type Promotion = {
  id: string;
  title: string;
  category: string;
  description: string;
  whoFor: string;
  howToCheck: string;
  whereTerms: string;
  eligibility: string;
  termsNote: string;
  featured?: boolean;
};

export const promotions: Promotion[] = [
  {
    id: "welcome",
    title: "Welcome Offer",
    category: "New members",
    description:
      "A starter campaign designed to help new members explore YES2WIN after registration. Exact values appear only in the live promotions lobby.",
    whoFor: "Newly registered members who meet the campaign’s eligibility rules.",
    howToCheck: "Register, sign in and open the promotions section to see whether a welcome offer is active for your account.",
    whereTerms: "Full terms, wagering and expiry details are listed on the official platform next to the offer.",
    eligibility: "Typically available to newly registered members who meet platform eligibility rules.",
    termsNote: "Offer terms change. Always confirm the live rules before depositing or opting in.",
    featured: true,
  },
  {
    id: "deposit",
    title: "Deposit Promotions",
    category: "Deposits",
    description:
      "Selected deposit campaigns may add extra value when you fund your account. Availability depends on the active schedule and your account status.",
    whoFor: "Members planning a deposit during an active campaign window.",
    howToCheck: "Open the cashier and promotions lobby after login to see deposit-linked offers for your region.",
    whereTerms: "Campaign cards on the platform show eligibility, method limits and any wagering conditions.",
    eligibility: "Depends on the active campaign and your account status.",
    termsNote: "Deposit offers may vary by payment method or region.",
  },
  {
    id: "weekly",
    title: "Weekly Promotions",
    category: "Ongoing",
    description:
      "Recurring weekly campaigns keep the calendar fresh. Check regularly for category-focused or time-limited boosts.",
    whoFor: "Returning members who play throughout the week.",
    howToCheck: "Review the promotions hub each week and enable notifications on the platform if available.",
    whereTerms: "Each weekly card includes its own schedule and participation rules.",
    eligibility: "Open to eligible members as stated in each weekly campaign.",
    termsNote: "Weekly promotions rotate and may include category-specific conditions.",
  },
  {
    id: "cashback",
    title: "Cashback / Rebate",
    category: "Rewards",
    description:
      "Rebate-style rewards may return a portion of eligible activity according to published programme rules for a given period.",
    whoFor: "Members who want ongoing recognition tied to qualifying play.",
    howToCheck: "Look for rebate or cashback programme pages inside your account after login.",
    whereTerms: "Calculation windows, rates and exclusions are defined in the live programme wording.",
    eligibility: "Based on qualifying play and programme terms during the rebate period.",
    termsNote: "Rebate details are defined by the official programme and can change.",
  },
  {
    id: "vip-benefits",
    title: "VIP Benefits",
    category: "VIP",
    description:
      "VIP-oriented rewards focus on recognition and curated service rather than one-size public promises.",
    whoFor: "Members invited into or recognised by the VIP experience.",
    howToCheck: "VIP communications and account managers (where assigned) share relevant benefits privately.",
    whereTerms: "VIP programme details are provided through official VIP channels.",
    eligibility: "Available to members recognised within the VIP programme.",
    termsNote: "VIP benefits may differ by membership status and availability.",
  },
  {
    id: "special",
    title: "Special Campaigns",
    category: "Limited",
    description:
      "Seasonal or event-driven campaigns appear periodically. They often have shorter windows and specific participation rules.",
    whoFor: "Members who follow limited-time events and seasonal calendars.",
    howToCheck: "Watch the promotions lobby and platform banners during event periods.",
    whereTerms: "Special campaign pages list start/end timing and any category restrictions.",
    eligibility: "Varies by campaign — always review listed criteria before opting in.",
    termsNote: "Special campaigns may have shorter windows and additional rules.",
  },
];
