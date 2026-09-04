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
      "Review the personal details attached to your YES2WIN account and keep them accurate for support and verification.",
    tip: "Update information only through official platform screens.",
  },
  {
    id: "security",
    title: "Account security",
    description:
      "Password, payment PIN and any available security prompts help protect login and cashier access.",
    tip: "Use a unique password and never share credentials.",
  },
  {
    id: "transactions",
    title: "Transaction records",
    description:
      "Deposit and withdrawal history is typically available inside the account or cashier area after login.",
    tip: "Use records to confirm pending or completed payment activity.",
  },
  {
    id: "betting",
    title: "Betting records",
    description:
      "Review recent activity across game categories so you can track how you have been using the lobby.",
    tip: "Useful when reconciling promotions or support questions.",
  },
  {
    id: "win-loss",
    title: "Win / loss reports",
    description:
      "Where offered, summary reports help you understand recent results without relying on memory alone.",
    tip: "Treat reports as orientation tools, not financial advice.",
  },
  {
    id: "promo-history",
    title: "Promotion history",
    description:
      "See offers you have opted into or used, then compare them against live campaign terms when needed.",
    tip: "Always re-check current terms before claiming a new offer.",
  },
  {
    id: "verification",
    title: "Verification",
    description:
      "Identity or payment checks may appear before larger withdrawals or certain account actions.",
    tip: "Upload documents only through official platform flows.",
  },
  {
    id: "referral",
    title: "Referral tools",
    description:
      "Members and partners may access referral sharing options once those tools are enabled for the account.",
    tip: "Use official links rather than unofficial third-party pages.",
  },
];
