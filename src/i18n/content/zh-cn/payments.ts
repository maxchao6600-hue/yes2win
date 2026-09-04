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
      "面向偏好直接使用银行渠道完成存款与提款的会员，提供传统银行转账方式。转账依托银行体系结算而非即时到账，因此时间会受营业时间、周末与截止时点影响——这一点值得提前规划，而不必视为异常延迟。",
    notes:
      "可用性与支持的银行取决于您所在的地区以及账户验证状态。请完全照抄收银台显示的备注或附言内容，并确保汇出账户为本人名下，因为资料不一致正是转账被暂挂的最常见原因。",
    image: "/images/payment/bank.webp",
  },
  {
    id: "e-wallet",
    name: "电子钱包",
    category: "E-Wallet",
    description:
      "平台支持的热门电子钱包渠道，可实现更快捷的数字转账。由于钱包已保存您的付款资料，这类流程通常比银行转账步骤更少、反映也更快，因此常成为小额日常交易的首选。",
    notes:
      "您账户中显示的具体电子钱包品牌可能因市场而异。请让钱包的注册姓名与 YES2WIN 账户姓名保持一致，并在开始前确认钱包余额充足——中途未完成的流程通常需要重新发起，而无法接续。",
    image: "/images/payment/ewallet.webp",
  },
  {
    id: "duitnow",
    name: "DuitNow",
    category: "E-Wallet",
    description:
      "DuitNow 是 YES2WIN 电子钱包类支付方式之一，面向支持市场中的合资格会员，让大家可以使用熟悉的本地渠道，而不必接触陌生的跨境流程。",
    notes:
      "DuitNow 是否出现在您的收银台，取决于地区、账户状态以及平台的实时支持情况。若未列出，即表示当前未对您的账户开放，反复尝试也不会改变结果，请改用其他可用渠道或稍后再查看。",
    image: "/images/payment/duitnow.webp",
  },
  {
    id: "tng",
    name: "Touch 'n Go (TNG)",
    category: "E-Wallet",
    description:
      "Touch 'n Go 是 YES2WIN 支付生态中所提及的电子钱包渠道之一（以实际开放为准），适合本来就日常使用该钱包、并希望把娱乐支出留在自己能随时查看的渠道中的会员。",
    notes:
      "请登录后在官方收银台确认 Touch 'n Go 的实时可用性及相关账户要求。与其他钱包一样，注册姓名应与账户姓名保持一致，以免出款时因资料不符而被暂挂审核。",
    image: "/images/payment/tng.webp",
  },
  {
    id: "grabpay",
    name: "GrabPay",
    category: "E-Wallet",
    description:
      "GrabPay 是 YES2WIN 提及的电子钱包选项之一，适合偏好 Grab 关联数字支付、希望在自己常用的应用内完成交易的会员。",
    notes:
      "GrabPay 的显示情况可能因市场而异，最终以实时收银台为准。请在钱包应用中完成授权步骤，不要中途关闭；操作后也建议查看交易记录，确认平台所记录的状态。",
    image: "/images/payment/grab.webp",
  },
  {
    id: "online-banking",
    name: "网上银行",
    category: "Online Banking",
    description:
      "通过与 YES2WIN 支付体系对接的网上银行流程直接完成存款。这类流程会把您引导至银行自有的验证页面，完成后再跳回收银台，从而让交易中最敏感的环节留在银行的环境内。",
    notes:
      "合作银行与操作要求可能因所在地区而不同。请让页面自行跳回收银台，不要在银行的确认页面直接关闭标签页——中断跳转正是交易长时间显示为「处理中」的常见原因。",
    image: "/images/payment/online.webp",
  },
  {
    id: "bank-cards",
    name: "银行卡",
    category: "Bank Cards",
    description:
      "在平台支持的情况下，偏好使用银行卡充值的会员可能可以选择银行卡方式。银行卡交易同时涉及发卡机构与平台，因此即使收银台一侧一切正常，发卡行仍可能自行拒绝该笔交易。",
    notes:
      "可受理的卡种与所需验证步骤，会在合资格账户的实时收银台中显示。银行卡应为本人名下；若交易被拒，建议先与发卡机构确认再重试，因为反复尝试可能触发额外的安全冻结。",
    image: "/images/payment/cards.webp",
  },
  {
    id: "crypto",
    name: "加密货币",
    category: "Crypto",
    description:
      "偏好数字资产交易的会员可能可以使用部分加密货币方式。YES2WIN 在开放的情况下提及支持 BTC、ETH 与 USDT 等币种。加密货币与其他所有渠道有一个关键差别：交易不可撤销，因此地址与网络必须一次填对。",
    notes:
      "支持的币种、网络与确认要求会在平台结算页面显示。请严格按照指示选择网络——把支持的币种发送到不受支持的网络，是最常见也最难挽回的失误；转账后也请等待所需的确认数完成，再就「处理中」的状态联系客服。",
    image: "/images/payment/crypto.webp",
  },
];

export const paymentDisclaimerZh =
  "可用的存款与提款方式、限额及处理要求，可能因地区、账户状态与实时收银台配置而有所变动。本合作伙伴网站不公布手续费、最低与最高金额或到账时间，因为这些数字会变，且只有平台才能给出适用于您的版本。请在交易前通过官方平台确认最新信息。";
