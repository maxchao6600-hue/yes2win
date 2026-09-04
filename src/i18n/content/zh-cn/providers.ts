import type { GameProvider } from "@/config/content/providers";

/** Provider names stay in English; focus and descriptions are localized. */
export const providersZh: GameProvider[] = [
  {
    id: "evolution",
    name: "Evolution Gaming",
    focus: "真人娱乐",
    description:
      "以真人荷官桌台与沉浸式直播呈现著称，覆盖各类经典桌上玩法。",
    categories: ["真人娱乐"],
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    focus: "老虎机与真人娱乐",
    description:
      "内容广泛的娱乐厂商，涵盖老虎机游戏以及现代大厅中常见的其他玩法。",
    categories: ["老虎机游戏", "真人娱乐"],
  },
  {
    id: "sa-gaming",
    name: "SA Gaming",
    focus: "真人桌台",
    description:
      "真人娱乐体验偏向亚洲玩家的桌台喜好，荷官呈现方式互动性强。",
    categories: ["真人娱乐"],
  },
  {
    id: "cmd368",
    name: "CMD368",
    focus: "体育",
    description:
      "专注体育领域，覆盖各大赛事，盘口设置贴合密切关注赛程的球迷需求。",
    categories: ["体育"],
  },
  {
    id: "playtech",
    name: "Playtech",
    focus: "多元类别",
    description:
      "历史悠久的厂商，业务横跨老虎机游戏、桌上游戏与真人娱乐（以实际开放为准）。",
    categories: ["老虎机游戏", "真人娱乐"],
  },
];
