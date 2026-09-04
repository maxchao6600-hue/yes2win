import type { Promotion } from "@/config/content/promotions";

export const promotionsZh: Promotion[] = [
  {
    id: "welcome",
    title: "迎新优惠",
    category: "新会员",
    description:
      "专为新会员设计的入门活动，帮助您在注册后更好地认识 YES2WIN。具体内容仅在平台的实时优惠专区显示。",
    whoFor: "符合活动参与条件的新注册会员。",
    howToCheck: "完成注册并登录后，打开优惠专区查看您的账户是否有正在进行的迎新优惠。",
    whereTerms: "完整条款、流水要求与有效期均列示在官方平台对应优惠旁。",
    eligibility: "通常面向符合平台资格规则的新注册会员。",
    termsNote: "优惠条款会不定期调整。请在存款或参与前，务必确认平台上的最新规则。",
    featured: true,
  },
  {
    id: "deposit",
    title: "存款优惠",
    category: "存款",
    description:
      "部分存款活动可能在您为账户充值时带来额外价值。是否可参与，取决于当前活动安排与您的账户状态。",
    whoFor: "计划在活动期间进行存款的会员。",
    howToCheck: "登录后打开收银台与优惠专区，查看适用于您所在地区的存款相关优惠。",
    whereTerms: "平台上的活动卡片会说明参与资格、支付方式限制以及相关流水条件。",
    eligibility: "视当前活动安排与您的账户状态而定。",
    termsNote: "存款优惠可能因支付方式或地区而有所不同。",
  },
  {
    id: "weekly",
    title: "每周优惠",
    category: "长期进行",
    description:
      "每周循环的活动让优惠日历保持新鲜。建议定期查看，留意针对特定类别或限时推出的加码。",
    whoFor: "在一周中持续游玩的回访会员。",
    howToCheck: "每周查看优惠中心，若平台支持，也可开启通知提醒。",
    whereTerms: "每张每周活动卡片都会附上各自的时间安排与参与规则。",
    eligibility: "面向各每周活动中所述的合资格会员开放。",
    termsNote: "每周优惠会轮换更新，并可能附带特定类别的条件。",
  },
  {
    id: "cashback",
    title: "返水 / 回馈",
    category: "奖励",
    description:
      "回馈类奖励可能会按照既定周期内公布的方案规则，返还部分合资格活动对应的金额。",
    whoFor: "希望在持续游玩中获得长期回馈的会员。",
    howToCheck: "登录后在账户内查找返水或回馈方案页面。",
    whereTerms: "计算周期、比例与不适用范围均以平台实时公布的方案说明为准。",
    eligibility: "依据回馈周期内的合资格游玩情况与方案条款而定。",
    termsNote: "回馈细则由官方方案界定，并可能随时调整。",
  },
  {
    id: "vip-benefits",
    title: "VIP 礼遇",
    category: "VIP",
    description:
      "VIP 相关奖励着重于身份认可与专属服务体验，而非统一对外承诺的固定内容。",
    whoFor: "受邀加入 VIP 体验或已获 VIP 身份认可的会员。",
    howToCheck: "相关礼遇会通过 VIP 沟通渠道及专属客户经理（如已配置）单独告知。",
    whereTerms: "VIP 方案细则通过官方 VIP 渠道提供。",
    eligibility: "面向在 VIP 方案中获得身份认可的会员。",
    termsNote: "VIP 礼遇可能因会员等级与开放情况而有所不同。",
  },
  {
    id: "special",
    title: "特别活动",
    category: "限时",
    description:
      "季节性或围绕特定事件的活动会不定期推出，通常时间窗口较短，并设有特定参与规则。",
    whoFor: "关注限时活动与节庆日历的会员。",
    howToCheck: "在活动期间留意优惠专区与平台横幅公告。",
    whereTerms: "特别活动页面会列明起止时间以及任何类别限制。",
    eligibility: "因活动而异 —— 参与前请务必查看所列条件。",
    termsNote: "特别活动的时间窗口可能较短，并可能设有附加规则。",
  },
];
