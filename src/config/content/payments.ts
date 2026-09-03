export type PaymentMethod = {
  id: string;
  name: string;
  category: "Bank Transfer" | "E-Wallet" | "Online Banking" | "Crypto";
  description: string;
  notes: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    category: "Bank Transfer",
    description:
      "Traditional bank transfer options for members who prefer direct banking channels for deposits and withdrawals.",
    notes: "Availability and supported banks depend on your region and account verification status.",
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    category: "E-Wallet",
    description:
      "Popular e-wallet channels for faster digital transfers where supported on the platform.",
    notes: "Specific e-wallet brands shown in your account may vary by market.",
  },
  {
    id: "online-banking",
    name: "Online Banking",
    category: "Online Banking",
    description:
      "Deposit directly through supported online banking flows connected to the YES2WIN payment experience.",
    notes: "Banking partners and session requirements can differ by location.",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    category: "Crypto",
    description:
      "Selected cryptocurrency options may be available for members who prefer digital-asset transactions.",
    notes: "Supported assets, networks and confirmation requirements are shown at checkout on the platform.",
  },
];

export const paymentDisclaimer =
  "Available payment methods, limits and processing requirements may vary. Please verify the latest information through the official platform.";
