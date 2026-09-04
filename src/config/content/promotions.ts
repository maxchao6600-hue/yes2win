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
      "A starter campaign designed to help new members explore YES2WIN after registration, usually by adding value to an early qualifying action. Because welcome campaigns are the ones most often quoted second-hand, treat any figure you see elsewhere as unreliable — the exact structure, thresholds and conditions appear only in the live promotions lobby.",
    whoFor:
      "Newly registered members who meet the campaign’s eligibility rules — typically before any similar offer has been claimed on the account.",
    howToCheck:
      "Register, sign in and open the promotions section. If a welcome campaign is active for your account it appears there as a card; if it does not appear, it is not currently available to you. Check before you deposit, since some welcome paths must be selected at the moment of a qualifying action.",
    whereTerms:
      "Full terms, wagering and expiry details are listed on the official platform next to the offer. Read three things in particular: what qualifies, what has to happen before bonus-linked funds behave like normal balance, and how long you have.",
    eligibility:
      "Typically available to newly registered members who meet platform eligibility rules. Region, verification status and prior claims on the account can all affect whether it is shown.",
    termsNote:
      "Offer terms change. Always confirm the live rules before depositing or opting in, and never rely on a percentage quoted on a third-party page.",
    featured: true,
  },
  {
    id: "deposit",
    title: "Deposit Promotions",
    category: "Deposits",
    description:
      "Selected deposit campaigns may add extra value when you fund your account. What makes this category different from the others is that the payment channel itself can matter — an offer may apply to some methods and not others, so the route you choose is part of qualifying. Availability depends on the active schedule and your account status.",
    whoFor: "Members planning a deposit during an active campaign window who want that deposit to qualify.",
    howToCheck:
      "Open the cashier and promotions lobby after login to see deposit-linked offers for your region. Confirm which methods qualify before you start the transaction rather than afterwards, because a completed deposit usually cannot be reassigned to an offer.",
    whereTerms:
      "Campaign cards on the platform show eligibility, qualifying methods, any minimum threshold and the wagering conditions attached to the added value.",
    eligibility:
      "Depends on the active campaign, the payment method you use and your account status at the time of the deposit.",
    termsNote:
      "Deposit offers may vary by payment method or region, and thresholds are published per campaign rather than platform-wide.",
  },
  {
    id: "weekly",
    title: "Weekly Promotions",
    category: "Ongoing",
    description:
      "Recurring weekly campaigns keep the calendar fresh, often tied to a particular day, category or type of activity. The practical difference from one-off offers is rhythm: they reward members who check in regularly rather than those who happen to arrive at the right moment. Look for category-focused or time-limited boosts when you review the lobby.",
    whoFor: "Returning members who play throughout the week and want offers that fit an existing routine.",
    howToCheck:
      "Review the promotions hub each week and enable notifications on the platform if that option is available. Since weekly campaigns rotate, a card you saw last week may have been replaced rather than extended.",
    whereTerms:
      "Each weekly card includes its own schedule, participation rules and any category restriction, including the window in which qualifying activity has to happen.",
    eligibility: "Open to eligible members as stated in each weekly campaign, which may limit it to specific categories or days.",
    termsNote:
      "Weekly promotions rotate and may include category-specific conditions, so read the current card rather than relying on last week’s wording.",
  },
  {
    id: "cashback",
    title: "Cashback / Rebate",
    category: "Rewards",
    description:
      "Rebate-style rewards may return a portion of eligible activity according to published programme rules for a given period. Unlike a one-off campaign, a rebate is calculated across a window — so what matters is which activity counts, how the window is defined and when the calculation runs. Those three points are set by the live programme wording.",
    whoFor: "Members who want ongoing recognition tied to qualifying play rather than a single claim.",
    howToCheck:
      "Look for rebate or cashback programme pages inside your account after login. The programme page normally shows the current period and how your qualifying activity is being counted.",
    whereTerms:
      "Calculation windows, rates, excluded categories and any conditions attached to the credited amount are defined in the live programme wording.",
    eligibility: "Based on qualifying play and programme terms during the rebate period, with some categories often excluded.",
    termsNote:
      "Rebate details are defined by the official programme and can change. This site does not publish rates or calculation formulas.",
  },
  {
    id: "vip-benefits",
    title: "VIP Benefits",
    category: "VIP",
    description:
      "VIP-oriented rewards focus on recognition and curated service rather than one-size public promises. That is why this category behaves differently from the rest of the calendar: instead of a card anyone can open, benefits are communicated privately when they apply, and their shape can differ between members.",
    whoFor: "Members invited into or recognised by the VIP experience through official programme channels.",
    howToCheck:
      "VIP communications and account managers, where assigned, share relevant benefits privately through your account channels. Anything arriving by unsolicited message and asking for a password, a fee or a payment is not a genuine VIP contact.",
    whereTerms: "VIP programme details are provided through official VIP channels rather than published as public campaign cards.",
    eligibility: "Available to members recognised within the VIP programme, according to rules the programme defines.",
    termsNote:
      "VIP benefits may differ by membership status and availability, and are not financial guarantees. No tiers or cash figures are published on this site.",
  },
  {
    id: "special",
    title: "Special Campaigns",
    category: "Limited",
    description:
      "Seasonal or event-driven campaigns appear periodically — around major sporting fixtures, festive periods or platform milestones. Their defining trait is the shorter window: participation rules are often stricter and the timing is exact, so a campaign you meant to join can close before you return to it.",
    whoFor: "Members who follow limited-time events and seasonal calendars and can act within a defined window.",
    howToCheck:
      "Watch the promotions lobby and platform banners during event periods. Because these campaigns are time-boxed, check the start and end times as soon as you see the card rather than assuming it will still be there later.",
    whereTerms:
      "Special campaign pages list start and end timing, any category restrictions and the specific actions that count towards participation.",
    eligibility: "Varies by campaign — always review the listed criteria and the closing time before opting in.",
    termsNote:
      "Special campaigns may have shorter windows and additional rules, and they are not repeated on a fixed schedule.",
  },
];
