import { siteConfig } from "@/config/site";

/**
 * Simplified Chinese overlay for `siteConfig`.
 * Only translatable copy lives here — URLs, env-backed contact values and
 * legal metadata continue to come from `siteConfig`.
 */
export const siteZh = {
  name: siteConfig.name,
  identity: "YES2WIN 官方合作伙伴",
  tagline: "YES is the Choice. WIN is the Result.",
  description:
    "连接 YES2WIN 生态的官方合作伙伴信息与访问入口 —— 涵盖游戏、优惠、VIP 等内容。",
  logo: {
    alt: "YES2WIN 标志",
  },
  contact: {
    customerSupport: {
      label: "客户服务",
      description:
        "协助处理账户登录、游戏、存款、提款以及日常平台使用相关问题。",
      value: siteConfig.contact.customerSupport.value,
      fallback:
        "客服渠道将在您完成注册或登录后，通过 YES2WIN 官方平台提供。",
    },
    partnerSupport: {
      label: "合作伙伴支持",
      description: "提供合作伙伴入驻、推荐分享与合作伙伴方案资源方面的指引。",
      value: siteConfig.contact.partnerSupport.value,
      fallback:
        "合作伙伴支持将在您的账户开通后，通过官方合作伙伴流程提供。",
    },
    generalEnquiries: {
      label: "一般咨询",
      description:
        "关于本官方合作伙伴网站、页面导航以及公开信息的相关问题。",
      value: siteConfig.contact.generalEnquiries.value,
      fallback:
        "一般问题请先查阅常见问题解答，或通过官方平台的注册与登录入口继续操作。",
    },
  },
  disclaimer:
    "本网站以官方合作伙伴平台的身份运营，并非 YES2WIN 的主要企业官方网站。",
} as const;

export type SiteZh = typeof siteZh;
