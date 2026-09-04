import type { PaymentMethod } from "@/config/content/payments";

/** Chinese labels for the typed English payment categories. */
export const paymentCategoryLabelsZh: Record<PaymentMethod["category"], string> = {
  "Bank Transfer": "银行转账",
  "E-Wallet": "电子钱包",
  "Online Banking": "网上银行",
  "Bank Cards": "银行卡",
  Crypto: "加密货币",
};

export const paymentsZh: PaymentMethod[] = [
  {
    id: "bank-transfer",
    name: "银行转账",
    category: "Bank Transfer",
    description:
      "面向偏好直接使用银行渠道完成存款与提款的会员，提供传统银行转账方式。",
    notes: "可用性与支持的银行取决于您所在的地区以及账户验证状态。",
    image: "/images/payment/bank.webp",
  },
  {
    id: "e-wallet",
    name: "电子钱包",
    category: "E-Wallet",
    description: "平台支持的热门电子钱包渠道，可实现更快捷的数字转账。",
    notes: "您账户中显示的具体电子钱包品牌可能因市场而异。",
    image: "/images/payment/ewallet.webp",
  },
  {
    id: "duitnow",
    name: "DuitNow",
    category: "E-Wallet",
    description:
      "DuitNow 是 YES2WIN 电子钱包类支付方式之一，面向支持市场中的合资格会员。",
    notes: "DuitNow 是否出现在您的收银台，取决于地区、账户状态以及平台的实时支持情况。",
    image: "/images/payment/duitnow.webp",
  },
  {
    id: "tng",
    name: "Touch 'n Go (TNG)",
    category: "E-Wallet",
    description:
      "Touch 'n Go 是 YES2WIN 支付生态中所提及的电子钱包渠道之一（以实际开放为准）。",
    notes: "请登录后在官方收银台确认 Touch 'n Go 的实时可用性及相关账户要求。",
    image: "/images/payment/tng.webp",
  },
  {
    id: "grabpay",
    name: "GrabPay",
    category: "E-Wallet",
    description:
      "GrabPay 是 YES2WIN 提及的电子钱包选项之一，适合偏好 Grab 关联数字支付的会员。",
    notes: "GrabPay 的显示情况可能因市场而异，最终以实时收银台为准。",
    image: "/images/payment/grab.webp",
  },
  {
    id: "online-banking",
    name: "网上银行",
    category: "Online Banking",
    description:
      "通过与 YES2WIN 支付体系对接的网上银行流程直接完成存款。",
    notes: "合作银行与操作要求可能因所在地区而不同。",
    image: "/images/payment/online.webp",
  },
  {
    id: "bank-cards",
    name: "银行卡",
    category: "Bank Cards",
    description:
      "在平台支持的情况下，偏好使用银行卡充值的会员可能可以选择银行卡方式。",
    notes: "可受理的卡种与所需验证步骤，会在合资格账户的实时收银台中显示。",
    image: "/images/payment/cards.webp",
  },
  {
    id: "crypto",
    name: "加密货币",
    category: "Crypto",
    description:
      "偏好数字资产交易的会员可能可以使用部分加密货币方式。YES2WIN 在开放的情况下提及支持 BTC、ETH 与 USDT 等币种。",
    notes: "支持的币种、网络与确认要求会在平台结算页面显示。",
    image: "/images/payment/crypto.webp",
  },
];

export const paymentDisclaimerZh =
  "可用的存款与提款方式、限额及处理要求可能有所变动。请通过官方平台确认最新信息。";
