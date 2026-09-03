export type Promotion = {
  id: string;
  title: string;
  category: string;
  description: string;
  eligibility: string;
  termsNote: string;
  featured?: boolean;
};

/**
 * Promotional content is intentionally non-specific.
 * Insert verified offer details (percentages, amounts, wagering) when available.
 */
export const promotions: Promotion[] = [
  {
    id: "welcome",
    title: "Welcome Offer",
    category: "New members",
    description:
      "A starter offer designed to help new members explore the YES2WIN ecosystem. Exact bonus details are published on the official platform.",
    eligibility: "Typically available to newly registered members who meet platform eligibility rules.",
    termsNote: "Offer terms, wagering and eligibility are defined on the official platform and may change.",
    featured: true,
  },
  {
    id: "deposit",
    title: "Deposit Promotions",
    category: "Deposits",
    description:
      "Selected deposit campaigns may provide additional value when funding your account. Check the promotions lobby for currently active offers.",
    eligibility: "Depends on the active campaign and your account status.",
    termsNote: "Deposit offers are subject to campaign rules and may vary by payment method or region.",
  },
  {
    id: "weekly",
    title: "Weekly Promotions",
    category: "Ongoing",
    description:
      "Recurring weekly campaigns help keep the experience fresh. Review the promotions page regularly for the latest schedules.",
    eligibility: "Open to eligible members as stated in each weekly campaign.",
    termsNote: "Weekly promotions rotate and may include category-specific conditions.",
  },
  {
    id: "cashback",
    title: "Cashback / Rebate",
    category: "Rewards",
    description:
      "Rebate-style rewards may return a portion of eligible activity according to the published programme rules.",
    eligibility: "Based on qualifying play and programme terms during the rebate period.",
    termsNote: "Rebate rates, calculation windows and exclusions are defined by the official programme.",
  },
  {
    id: "vip-benefits",
    title: "VIP Benefits",
    category: "VIP",
    description:
      "VIP-oriented rewards and recognition for members who engage deeply with the ecosystem. Details are shared through the VIP experience.",
    eligibility: "Available to members recognised within the VIP programme.",
    termsNote: "VIP benefits are personalised and may differ by membership level and availability.",
  },
  {
    id: "special",
    title: "Special Campaigns",
    category: "Limited",
    description:
      "Seasonal or event-driven campaigns appear periodically. Watch the promotions hub for limited-time opportunities.",
    eligibility: "Varies by campaign — always review the listed criteria before opting in.",
    termsNote: "Special campaigns may have shorter windows and additional participation rules.",
  },
];
