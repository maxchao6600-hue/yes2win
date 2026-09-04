import type { NavItem } from "@/config/navigation";

export const primaryNavZh: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about/" },
  { label: "游戏", href: "/games/" },
  { label: "优惠活动", href: "/promotions/" },
  { label: "VIP", href: "/vip/" },
  { label: "支付方式", href: "/payment/" },
  { label: "手机版", href: "/mobile/" },
  { label: "常见问题", href: "/faq/" },
  { label: "合作伙伴", href: "/partner/" },
  { label: "联系我们", href: "/contact/" },
];

export const moreNavZh: NavItem[] = [
  { label: "注册指南", href: "/register-guide/" },
  { label: "账户指南", href: "/account-guide/" },
  { label: "负责任娱乐", href: "/responsible-gaming/" },
];

export const footerNavZh = {
  explore: [
    { label: "关于我们", href: "/about/" },
    { label: "游戏", href: "/games/" },
    { label: "优惠活动", href: "/promotions/" },
    { label: "VIP", href: "/vip/" },
  ],
  access: [
    { label: "手机版", href: "/mobile/" },
    { label: "支付方式", href: "/payment/" },
    { label: "注册指南", href: "/register-guide/" },
    { label: "账户指南", href: "/account-guide/" },
  ],
  support: [
    { label: "常见问题", href: "/faq/" },
    { label: "联系我们", href: "/contact/" },
    { label: "负责任娱乐", href: "/responsible-gaming/" },
  ],
  partner: [
    { label: "合作伙伴计划", href: "/partner/" },
    { label: "合作伙伴常见问题", href: "/faq/#partner" },
  ],
  legal: [
    { label: "使用条款", href: "/terms/" },
    { label: "隐私政策", href: "/privacy/" },
  ],
  games: [
    { label: "全部游戏", href: "/games/" },
    { label: "老虎机", href: "/games/slots/" },
    { label: "真人娱乐", href: "/games/live-casino/" },
    { label: "体育", href: "/games/sports/" },
    { label: "捕鱼", href: "/games/fishing/" },
    { label: "彩票", href: "/games/lottery/" },
  ],
} as const;
