import type { LegalCopy } from "@/i18n/pages/en/legal";

/**
 * Simplified Chinese legal copy. The `fallback` sentences deliberately avoid
 * naming any legal entity or jurisdiction — they describe the site as the
 * YES2WIN Official Partner website, matching the English neutral wording.
 */
export const legalZh: LegalCopy = {
  terms: {
    eyebrow: "法律条款",
    title: "使用条款",
    crumb: "使用条款",
    lastUpdatedLabel: "最后更新",
    descriptionSuffix: "本条款适用于本官方合作伙伴网站。",
    jsonLdName: "使用条款",
    jsonLdDescription: "YES2WIN 官方合作伙伴网站的使用条款。",
    dynamicLine: {
      withEntity: "本网站由 {entity} 发布。",
      withEntityAndJurisdiction: "本网站由 {entity}（{jurisdiction}）发布。",
      fallback:
        "本网站以 YES2WIN 官方合作伙伴的名义发布，是连接 YES2WIN 生态系统的资讯与访问入口。",
    },
    sections: [
      {
        heading: "1. 关于本条款",
        blocks: [
          {
            type: "p",
            content: [
              "使用本网站即表示你同意本条款。若你不同意，请停止使用本网站。当你在 YES2WIN 官方平台注册、登录或使用平台服务时，该平台另行订立的账户条款同样适用。",
            ],
          },
        ],
      },
      {
        heading: "2. 网站定位",
        blocks: [
          {
            type: "p",
            content: [
              { token: "entityLine" },
              " YES2WIN 是相关娱乐品牌与平台。本网站帮助访客了解游戏类别、优惠结构与访问路径，并不取代 YES2WIN 的主要企业官方网站。",
            ],
          },
        ],
      },
      {
        heading: "3. 仅供参考",
        blocks: [
          {
            type: "p",
            content: [
              "本网站内容仅就 YES2WIN 的娱乐类别、优惠结构、支付概览、VIP 定位、手机访问与合作伙伴路径提供一般性信息，不构成任何法律、财务或投资建议。",
            ],
          },
        ],
      },
      {
        heading: "4. 外部平台链接",
        blocks: [
          {
            type: "p",
            content: [
              "「注册」「登录」与「合作伙伴」按钮可能会打开 YES2WIN 官方平台的相关页面。你对这些服务的使用，受该平台自身的条款、规则与政策约束。",
            ],
          },
        ],
      },
      {
        heading: "5. 使用规范",
        blocks: [
          {
            type: "ul",
            items: [
              ["请勿滥用本网站，或尝试进行未经授权的访问。"],
              ["请勿抓取内容，或以具有误导性的方式转载。"],
              ["请勿将本合作伙伴网站表述为 YES2WIN 的主要企业官方网站。"],
            ],
          },
        ],
      },
      {
        heading: "6. 不作结果保证",
        blocks: [
          {
            type: "p",
            content: [
              "本网站不对任何奖金、利润、投资回报或合作伙伴收入作出保证。娱乐活动存在风险，结果因人而异。",
            ],
          },
        ],
      },
      {
        heading: "7. 理性使用",
        blocks: [
          {
            type: "p",
            content: [
              "你须符合所在司法管辖区的法定年龄要求。请阅读我们的",
              { text: "负责任娱乐", href: "/responsible-gaming/" },
              "页面，并仅在法律允许的情况下参与。",
            ],
          },
        ],
      },
      {
        heading: "8. 条款变更",
        blocks: [
          {
            type: "p",
            content: [
              "我们可能会不时更新本条款。条款更新后你继续使用本网站，即视为接受修订后的内容。",
            ],
          },
        ],
      },
      {
        heading: "9. 联系我们",
        blocks: [
          {
            type: "p",
            content: [
              "如对本网站有任何疑问，请前往",
              { text: "联系我们", href: "/contact/" },
              "页面。如涉及具体账户问题，请在登录官方平台后使用其提供的客服渠道。",
            ],
          },
        ],
      },
    ],
  },

  privacy: {
    eyebrow: "法律条款",
    title: "隐私政策",
    crumb: "隐私政策",
    lastUpdatedLabel: "最后更新",
    descriptionSuffix: "本政策说明本合作伙伴网站如何处理相关信息。",
    jsonLdName: "隐私政策",
    jsonLdDescription: "YES2WIN 官方合作伙伴网站的隐私政策。",
    dynamicLine: {
      withEntity: "本网站由 {entity} 运营。",
      withEntityAndJurisdiction: "本网站由 {entity} 于 {jurisdiction} 运营。",
      fallback: "本网站以 YES2WIN 官方合作伙伴的名义运营。运营方信息将在正式公布后更新。",
    },
    sections: [
      {
        heading: "1. 适用范围",
        blocks: [
          {
            type: "p",
            content: [
              "本政策适用于 YES2WIN 官方合作伙伴资讯网站。你在 YES2WIN 官方平台注册或登录后所产生的账户数据，受该平台自身的隐私声明约束。",
            ],
          },
        ],
      },
      {
        heading: "2. 本网站的运营方",
        blocks: [
          {
            type: "p",
            content: [
              { token: "operatorLine" },
              " YES2WIN 平台的隐私处理方式与本合作伙伴网站相互独立。",
            ],
          },
        ],
      },
      {
        heading: "3. 我们可能处理的信息",
        blocks: [
          {
            type: "ul",
            items: [
              ["基本技术日志，例如 IP 地址、浏览器类型与访问的页面"],
              ["在启用分析服务的情况下所收集的汇总统计数据"],
              ["你通过已公布的联系渠道主动发送的信息"],
            ],
          },
        ],
      },
      {
        heading: "4. 信息的使用方式",
        blocks: [
          {
            type: "p",
            content: [
              "相关信息用于运营与保护本网站、优化使用体验、回应咨询，以及了解整体访问趋势。",
            ],
          },
        ],
      },
      {
        heading: "5. Cookie 与同类技术",
        blocks: [
          {
            type: "p",
            content: [
              "网站的基本功能可能需要使用必要 Cookie。非必要的分析或营销类 Cookie，应在引入时配合适当的同意机制后方可启用。",
            ],
          },
        ],
      },
      {
        heading: "6. 信息共享",
        blocks: [
          {
            type: "p",
            content: [
              "我们不会出售个人信息。托管与安全服务提供商可能会处理有限的技术数据，以维持网站正常运行。外部平台页面具有各自独立的隐私处理方式。",
            ],
          },
        ],
      },
      {
        heading: "7. 信息保留",
        blocks: [
          {
            type: "p",
            content: [
              "技术日志与咨询记录仅在安全防护、日常运营与法律义务所需的期限内保留。",
            ],
          },
        ],
      },
      {
        heading: "8. 你的选择",
        blocks: [
          {
            type: "p",
            content: [
              "视所在司法管辖区而定，你可能享有访问、更正或删除个人信息的权利。与本网站相关的请求，请通过",
              { text: "联系我们", href: "/contact/" },
              "页面提出。",
            ],
          },
        ],
      },
      {
        heading: "9. 未成年人",
        blocks: [
          {
            type: "p",
            content: [
              "本网站不面向未成年人。若你未达到所在地区在线娱乐的法定年龄，请勿使用本网站及相关平台服务。",
            ],
          },
        ],
      },
      {
        heading: "10. 政策更新",
        blocks: [
          {
            type: "p",
            content: [
              "我们可能会定期修订本政策。页面顶部的「最后更新」日期即代表当前版本。",
            ],
          },
        ],
      },
    ],
  },
};
