import type { GuidesCopy } from "@/i18n/pages/en/guides";

/** Simplified Chinese copy for the register guide, account guide and responsible gaming pages. */
export const guidesZh: GuidesCopy = {
  registerGuide: {
    eyebrow: "注册指南",
    title: "如何注册 YES2WIN 账户",
    description:
      "依据公开的注册流程整理的 YES2WIN 官方开户指引。线上表单的字段可能会有调整，请始终以当前页面显示的内容为准。",
    crumb: "注册指南",
    heroImageAlt: "YES2WIN 注册流程主视觉",
    primaryCta: "立即注册",
    secondaryCta: "注册常见问题",
    jsonLdName: "YES2WIN 注册指南",
    jsonLdDescription: "YES2WIN 注册流程的分步指引。",
    intro: {
      imageAlt: "YES2WIN 账户注册指南示意图",
      cards: [
        {
          title: "本指南涵盖的内容",
          body: "本页面说明注册流程、可能需要填写的资料类型，以及注册与支付、身份验证和首次登录之间的关系。本站不会在本地重建注册表单。",
        },
        {
          title: "注册完成之后",
          body: "账户创建后，你即可登录浏览游戏类别、查看当前优惠、打开出纳台，并确认支付操作是否需要额外的身份验证。",
        },
      ],
    },
    steps: [
      {
        step: "01",
        title: "打开官方注册表单",
        body: "从本网站点击「立即注册」，即可在正确的环境中进入 YES2WIN 线上注册页面。",
      },
      {
        step: "02",
        title: "设定账户信息",
        body: "按表单要求创建用户名与密码。具体字段名称可能随平台更新而变化。",
      },
      {
        step: "03",
        title: "填写所需个人资料",
        body: "仅填写注册时所要求的信息，并确保准确无误，以便日后可能进行的身份验证。",
      },
      {
        step: "04",
        title: "核对优惠码或推荐码",
        body: "若表单包含优惠码或推荐码字段，请在提交前仔细核对，切勿随意猜填。",
      },
      {
        step: "05",
        title: "同意适用条款",
        body: "阅读注册过程中显示的平台条款，并在符合法定年龄与所在地区要求的前提下继续。",
      },
      {
        step: "06",
        title: "完成验证或支付密码设置",
        body: "部分账户在获得完整出纳台权限前，可能需要完成手机验证、确认步骤或支付密码设置。",
      },
    ],
    tips: [
      {
        title: "资料准确",
        body: "填写准确的个人信息，可降低日后身份验证或客服核查被延误的可能。",
      },
      {
        title: "密码安全",
        body: "请设置独一无二的密码并妥善保管，切勿向任何人透露注册凭据。",
      },
      {
        title: "支付准备",
        body: "若出现支付密码或出纳台安全设置步骤，请认真完成，因为它会影响日后的存款与提款权限。",
      },
      {
        title: "需要帮助？",
        body: "在联系官方客服之前，可先浏览本网站的常见问题、联系我们与支付指南页面，快速找到方向。",
      },
    ],
    finalCta: {
      title: "准备好创建 YES2WIN 账户了吗？",
      description: "准备就绪后，即可进入官方注册流程。",
    },
  },

  accountGuide: {
    eyebrow: "账户指南",
    title: "全面了解你的 YES2WIN 账户",
    description:
      "梳理会员登录后最常用到的账户工具——本合作伙伴网站不会重建线上的账户后台。",
    crumb: "账户指南",
    heroImageAlt: "YES2WIN 账户主视觉",
    primaryCta: "登录",
    secondaryCta: "注册指南",
    jsonLdName: "YES2WIN 账户指南",
    jsonLdDescription: "登录后 YES2WIN 账户功能的使用导览。",
    afterLogin: {
      imageAlt: "YES2WIN 账户访问总览",
      eyebrow: "登录之后",
      title: "账户中心的作用",
      description:
        "在官方平台登录后，你通常可以在个人资料设置、支付工具、活动记录与优惠记录之间自由切换。",
      bullets: [
        "保持个人资料准确，便于客服协助与身份验证。",
        "需要时查看存款、提款与游戏记录。",
        "对照线上优惠条款，核对自己的参与情况。",
        "仅通过官方流程完成验证提示。",
      ],
    },
    featureMap: {
      title: "账户功能地图",
      description: "用通俗易懂的方式介绍 YES2WIN 常见的账户功能区域。",
    },
    cards: [
      {
        title: "个人资料与安全",
        body: "谨慎更新联系方式，并使用独立密码保护登录安全。当出纳台需要时，可能会出现支付密码设置流程。",
      },
      {
        title: "记录与报表",
        body: "交易记录、投注记录与输赢统计有助于你了解近期活动。这些内容仅供参考，不构成财务建议。",
      },
      {
        title: "优惠与推荐",
        body: "优惠记录会显示你参与过的活动。推荐功能若已开放，请仅使用官方提供的分享链接。",
      },
    ],
    faqSection: {
      eyebrow: "常见问题",
      title: "账户相关问题",
      links: [
        { label: "支付指南", href: "/payment/" },
        { label: "账户常见问题", href: "/faq/#account" },
        { label: "联系我们", href: "/contact/" },
        { label: "负责任娱乐", href: "/responsible-gaming/" },
      ],
    },
    faqs: [
      {
        id: "ag1",
        question: "账户工具在哪里使用？",
        answer:
          "个人资料、记录查询、身份验证与出纳台工具，都在登录 YES2WIN 官方平台后进行管理。本指南帮助你在打开这些页面之前先了解相关内容。",
      },
      {
        id: "ag2",
        question: "可以在本合作伙伴网站修改账户资料吗？",
        answer:
          "不可以。本站是资讯与访问入口。个人资料更新、安全设置变更与支付操作，请在官方平台完成。",
      },
      {
        id: "ag3",
        question: "如果账户中缺少某个菜单该怎么办？",
        answer:
          "可用功能会因地区、验证状态与平台更新而有所不同。若某项功能未显示，可在登录后再次查看，或通过官方客服渠道咨询。",
      },
    ],
    finalCta: {
      title: "打开你的 YES2WIN 账户",
      description: "登录官方平台，即可管理个人资料、记录查询与出纳台工具。",
    },
  },

  responsibleGaming: {
    eyebrow: "18+",
    title: "在 YES2WIN 理性娱乐",
    description:
      "让娱乐回归娱乐。参考以下原则，帮助你保持自控、照顾身心状态，并懂得何时该暂停。",
    crumb: "负责任娱乐",
    heroImageAlt: "负责任娱乐主视觉",
    primaryCta: "负责任娱乐常见问题",
    secondaryCta: "联系我们",
    jsonLdName: "负责任娱乐",
    jsonLdDescription: "面向 YES2WIN 访客的负责任娱乐指引。",
    intro: {
      imageAlt: "YES2WIN 负责任娱乐视觉图",
      title: "更健康的娱乐方式",
      description:
        "YES2WIN 应当始终是一种消遣。以下习惯有助于你保持清醒的判断，避免娱乐变成压力。",
      note: "如果游戏已不再让你感到轻松，或者在明知有害的情况下仍难以停止，请暂停游戏、与信任的人倾诉，并寻求专业协助。",
    },
    topics: [
      {
        title: "理性娱乐",
        body: "把游戏视为消遣。开始之前先设定时间与金额上限，达到上限就停下来。",
      },
      {
        title: "年龄限制",
        body: "你必须符合所在司法管辖区的法定年龄要求。未成年人请勿注册或参与游戏。",
      },
      {
        title: "设定限额",
        body: "只用你能够承受损失的娱乐预算，切勿动用房租、账单与生活必需开支。",
      },
      {
        title: "适时休息",
        body: "定期离开屏幕。长时间不间断的游戏，会让你更难察觉疲劳、压力与冲动决定。",
      },
      {
        title: "避免追损",
        body: "为了挽回损失而加大投注，是明显的警示信号。请先暂停，而不是想着把已花掉的钱赢回来。",
      },
      {
        title: "留意消费",
        body: "定期回顾存款金额与游戏时长。若游戏开始影响睡眠、工作、人际关系或财务状况，请立刻停下来重新审视。",
      },
    ],
    whenToPause: {
      title: "何时该暂停",
      items: [
        "你动用了原本用于生活必需的资金。",
        "你感到焦虑、烦躁，或难以停止继续游戏。",
        "你隐瞒游戏行为，或对时间与存款失去掌控。",
        "游戏已经影响到睡眠、工作或人际关系。",
      ],
    },
    whereToSeekHelp: {
      title: "在哪里寻求帮助",
      intro: "你所在地区可能设有本地支援渠道。国际上常见的求助起点包括 ",
      resourceSeparator: " 与 ",
      resourceSuffix: "。",
      resources: [
        { label: "BeGambleAware", href: "https://www.begambleaware.org/" },
        { label: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
      ],
      partnerNoteBefore: "如对本合作伙伴网站有疑问，请查看",
      partnerNoteFaqLabel: "常见问题",
      partnerNoteBetween: "或",
      partnerNoteContactLabel: "联系我们",
      partnerNoteAfter: "页面。",
    },
    faqSection: {
      eyebrow: "常见问题",
      title: "负责任娱乐相关问题",
    },
    faqs: [
      {
        id: "rg1",
        question: "什么时候应该暂停游戏？",
        answer:
          "当你感到压力、消费超出预算、试图追回损失，或发现游戏影响到日常责任时，就应该暂停。",
      },
      {
        id: "rg2",
        question: "可以在哪里获得帮助？",
        answer:
          "与你信任的人倾诉，并善用所在地区的专业资源。国际上常见的求助起点包括 BeGambleAware 与 Gambling Therapy。",
      },
      {
        id: "rg3",
        question: "本合作伙伴网站可以帮我设置账户限额吗？",
        answer:
          "不可以。限额或自我隔离等账户级工具（若有提供）需在登录 YES2WIN 官方平台后进行管理。",
      },
    ],
    finalCta: {
      title: "让 YES2WIN 始终是一种消遣",
      description: "在清晰的限额内探索这个生态，需要支持时再使用官方账户工具。",
    },
  },
};
