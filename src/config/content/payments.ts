export type PaymentMethod = {
  id: string;
  name: string;
  category: "Bank Transfer" | "E-Wallet" | "Online Banking" | "Bank Cards" | "Crypto";
  description: string;
  notes: string;
  image: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    category: "Bank Transfer",
    description:
      "Traditional bank transfer options for members who prefer direct banking channels for deposits and withdrawals. Transfers settle on banking infrastructure rather than instantly, so timing follows bank hours, weekends and cut-off times — which is worth planning around rather than treating as a delay.",
    notes:
      "Availability and supported banks depend on your region and account verification status. Copy any reference or narration field exactly as the cashier shows it, and make sure the sending account is in your own name, since mismatched details are the most common cause of a held transfer.",
    image: "/images/payment/bank.webp",
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    category: "E-Wallet",
    description:
      "Popular e-wallet channels for faster digital transfers where supported on the platform. Because the wallet already holds your funding details, these flows usually involve fewer steps than a bank transfer and reflect more quickly, which makes them a common default for smaller, routine transactions.",
    notes:
      "Specific e-wallet brands shown in your account may vary by market. Keep the wallet registered in the same name as your YES2WIN account, and confirm the wallet has sufficient balance before starting, since a partially completed flow has to be restarted rather than resumed.",
    image: "/images/payment/ewallet.webp",
  },
  {
    id: "duitnow",
    name: "DuitNow",
    category: "E-Wallet",
    description:
      "DuitNow is referenced among YES2WIN e-wallet style payment options for eligible members in supported markets, giving members a familiar local rail rather than an unfamiliar international one.",
    notes:
      "Whether DuitNow appears in your cashier depends on region, account status and live platform support. If it is not listed, it is not currently enabled for your account — repeating the attempt will not change that, so choose another available channel or check back later.",
    image: "/images/payment/duitnow.webp",
  },
  {
    id: "tng",
    name: "Touch n Go (TNG)",
    category: "E-Wallet",
    description:
      "Touch n Go is referenced as a supported e-wallet pathway within the YES2WIN payment ecosystem where available, suiting members who already use the wallet day to day and prefer keeping entertainment spending in a channel they monitor.",
    notes:
      "Confirm live TNG availability and any account requirements inside the official cashier after login. As with any wallet, the registered name should match your account name so that payouts are not held for a mismatch review.",
    image: "/images/payment/tng.webp",
  },
  {
    id: "grabpay",
    name: "GrabPay",
    category: "E-Wallet",
    description:
      "GrabPay is referenced among YES2WIN e-wallet options for members who prefer Grab-linked digital payments and want to keep transactions inside an app they already use regularly.",
    notes:
      "GrabPay visibility can differ by market and is confirmed only in the live cashier. Complete the authorisation step in the wallet app rather than closing it midway, and check your transaction records afterwards to confirm the status the platform recorded.",
    image: "/images/payment/grab.webp",
  },
  {
    id: "online-banking",
    name: "Online Banking",
    category: "Online Banking",
    description:
      "Deposit directly through supported online banking flows connected to the YES2WIN payment experience. These flows hand you to your bank’s own authentication and then return you to the cashier, which keeps the sensitive part of the transaction inside your bank’s environment.",
    notes:
      "Banking partners and session requirements can differ by location. Let the flow return to the cashier on its own rather than closing the tab at the bank’s confirmation screen, since interrupting the redirect is what usually leaves a transaction showing as pending.",
    image: "/images/payment/online.webp",
  },
  {
    id: "bank-cards",
    name: "Bank Cards",
    category: "Bank Cards",
    description:
      "Bank card options may be available for members who prefer card-based funding where the platform supports them. Card transactions involve your issuing bank as well as the platform, so an issuer can decline a payment independently even when everything on the cashier side is correct.",
    notes:
      "Accepted card types and any verification steps are shown in the live cashier for eligible accounts. The card should be in your own name, and if a payment is declined it is usually worth checking with your issuer before retrying, since repeated attempts can trigger additional security holds.",
    image: "/images/payment/cards.webp",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    category: "Crypto",
    description:
      "Selected cryptocurrency options may be available for members who prefer digital-asset transactions. YES2WIN references supported coins such as BTC, ETH and USDT where enabled. Crypto differs from every other channel in one important way: transactions are not reversible, so the address and network you use have to be right the first time.",
    notes:
      "Supported assets, networks and confirmation requirements are shown at checkout on the platform. Match the network exactly as instructed — sending a supported coin over an unsupported network is the most common and least recoverable mistake — and allow the required confirmations before contacting support about a pending transfer.",
    image: "/images/payment/crypto.webp",
  },
];

export const paymentDisclaimer =
  "Available payment methods, limits and processing requirements may vary by region, account status and live cashier configuration. This partner site does not publish fees, minimums, maximums or processing times, because those figures change and only the platform can state the ones that apply to you. Please verify the latest information through the official platform before transacting.";
