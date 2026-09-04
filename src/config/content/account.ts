export type AccountFeature = {
  id: string;
  title: string;
  description: string;
  tip: string;
};

export const accountFeatures: AccountFeature[] = [
  {
    id: "profile",
    title: "Profile",
    description:
      "Review the personal details attached to your YES2WIN account and keep them accurate, because these are the details support and verification checks are measured against. Some fields stay editable while identity-linked ones may be restricted once set.",
    tip: "Update information only through official platform screens, never via a link sent to you.",
  },
  {
    id: "security",
    title: "Account security",
    description:
      "Password, payment PIN and any available security prompts protect login and cashier access separately, so enabling each one adds a step an attacker would also have to pass. The payment PIN in particular guards cashier actions even if a session is reached.",
    tip: "Use a password you reuse nowhere else, and never share credentials — including with anyone claiming to be support.",
  },
  {
    id: "transactions",
    title: "Transaction records",
    description:
      "Deposit and withdrawal history is typically available inside the account or cashier area after login, and it is the authoritative record of what actually happened — including the status and any message attached to a request.",
    tip: "Check records before resubmitting a payment; most “missing” transactions are simply still pending.",
  },
  {
    id: "betting",
    title: "Betting records",
    description:
      "Review recent activity across game categories so you can see how you have actually been using the lobby rather than how you remember it. This is also where the status of a sports selection or a pending settlement is confirmed.",
    tip: "Useful when reconciling promotions, checking settlement or raising a support question.",
  },
  {
    id: "win-loss",
    title: "Win / loss reports",
    description:
      "Where offered, summary reports help you understand recent results across a period without relying on memory alone — which is exactly the perspective that gets lost during a long session.",
    tip: "Treat reports as orientation tools and a responsible-play check, not as financial advice.",
  },
  {
    id: "promo-history",
    title: "Promotion history",
    description:
      "See offers you have opted into or used, then compare them against live campaign terms when needed — useful if a balance still has conditions attached or a withdrawal is waiting on an outstanding requirement.",
    tip: "Always re-check current terms before claiming a new offer; wording changes between campaigns.",
  },
  {
    id: "verification",
    title: "Verification",
    description:
      "Identity or payment checks may appear before larger withdrawals or certain account actions. Completing a prompt promptly is the single most effective way to avoid a payout sitting in review longer than it needs to.",
    tip: "Upload documents only through official platform flows — never by message, email or chat app.",
  },
  {
    id: "referral",
    title: "Referral tools",
    description:
      "Members and partners may access referral sharing options once those tools are enabled for the account, including the referral identity that attributes activity correctly.",
    tip: "Use official links rather than unofficial third-party pages or invented link formats.",
  },
];
