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
      "Traditional bank transfer options for members who prefer direct banking channels for deposits and withdrawals.",
    notes: "Availability and supported banks depend on your region and account verification status.",
    image: "/images/payment/bank.webp",
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    category: "E-Wallet",
    description:
      "Popular e-wallet channels for faster digital transfers where supported on the platform.",
    notes: "Specific e-wallet brands shown in your account may vary by market.",
    image: "/images/payment/ewallet.webp",
  },
  {
    id: "duitnow",
    name: "DuitNow",
    category: "E-Wallet",
    description:
      "DuitNow is referenced among YES2WIN e-wallet style payment options for eligible members in supported markets.",
    notes: "Whether DuitNow appears in your cashier depends on region, account status and live platform support.",
    image: "/images/payment/duitnow.webp",
  },
  {
    id: "tng",
    name: "Touch n Go (TNG)",
    category: "E-Wallet",
    description:
      "Touch n Go is referenced as a supported e-wallet pathway within the YES2WIN payment ecosystem where available.",
    notes: "Confirm live TNG availability and any account requirements inside the official cashier after login.",
    image: "/images/payment/tng.webp",
  },
  {
    id: "grabpay",
    name: "GrabPay",
    category: "E-Wallet",
    description:
      "GrabPay is referenced among YES2WIN e-wallet options for members who prefer Grab-linked digital payments.",
    notes: "GrabPay visibility can differ by market and is confirmed only in the live cashier.",
    image: "/images/payment/grab.webp",
  },
  {
    id: "online-banking",
    name: "Online Banking",
    category: "Online Banking",
    description:
      "Deposit directly through supported online banking flows connected to the YES2WIN payment experience.",
    notes: "Banking partners and session requirements can differ by location.",
    image: "/images/payment/online.webp",
  },
  {
    id: "bank-cards",
    name: "Bank Cards",
    category: "Bank Cards",
    description:
      "Bank card options may be available for members who prefer card-based funding where the platform supports them.",
    notes: "Accepted card types and any verification steps are shown in the live cashier for eligible accounts.",
    image: "/images/payment/cards.webp",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    category: "Crypto",
    description:
      "Selected cryptocurrency options may be available for members who prefer digital-asset transactions. YES2WIN references supported coins such as BTC, ETH and USDT where enabled.",
    notes: "Supported assets, networks and confirmation requirements are shown at checkout on the platform.",
    image: "/images/payment/crypto.webp",
  },
];

export const paymentDisclaimer =
  "Available payment methods, limits and processing requirements may vary. Please verify the latest information through the official platform.";
