export type GameCategory = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  path: string;
  description: string;
  intro: string;
  whatToExpect: string[];
  mobileNote: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  ctaLabel: string;
};

export const gameCategories: GameCategory[] = [
  {
    id: "slots",
    name: "Slot Games",
    shortName: "Slots",
    href: "/games/slots/",
    path: "/games/slots/",
    description:
      "Spin through classic, video and feature-rich slots inside the YES2WIN lobby — built for quick sessions or longer play.",
    intro:
      "Slots remain one of the most popular ways to enjoy YES2WIN, largely because no two titles ask the same thing of you. Themes, bonus features and pacing vary widely, so you can browse until you find a style that fits the session you have in mind — a few quick rounds between other things, or a longer sit-down with a feature-led game. Every title carries its own information panel explaining symbols, paylines and feature rules, which is the right place to start before your first spin.",
    whatToExpect: [
      "A wide mix of themes and feature styles, from stripped-back classics to elaborate feature-led games",
      "Per-title information panels covering symbols, paylines and how each feature round is triggered",
      "Easy entry from the platform lobby after login, with categories that make browsing quick",
      "Short round cycles that suit both brief sessions and longer play",
      "Play that adapts well to phones and tablets without losing readability",
    ],
    mobileNote:
      "Slot interfaces are designed for touch screens, so you can browse and play comfortably on mobile browsers. Keep the browser current and close unused tabs if a feature-heavy title feels sluggish.",
    highlights: [
      "Multiple formats and themes",
      "Mobile-friendly play",
      "Discover titles in the live lobby",
    ],
    seoTitle: "YES2WIN Slots | Slot Games Overview",
    seoDescription:
      "Explore YES2WIN slot games — themes, features and mobile-friendly play through this official partner site.",
    ctaLabel: "Explore slots",
  },
  {
    id: "live-casino",
    name: "Live Casino",
    shortName: "Live Casino",
    href: "/games/live-casino/",
    path: "/games/live-casino/",
    description:
      "Join live dealer tables streamed in real time for a more immersive table-game experience.",
    intro:
      "Live casino brings the energy of a real floor to your screen. Dealers host tables in real time while you play familiar formats through clear on-screen controls, with betting windows that keep each round moving. Because the pace is set by the table rather than by you, live play rewards a stable connection and a little preparation — read the table information panel for rules, bet types and limits before you take a seat.",
    whatToExpect: [
      "Real-time streaming hosted by live dealers rather than automated rounds",
      "Classic formats such as baccarat, roulette and blackjack where available",
      "Table information panels covering rules, side bets and limits before you join",
      "Timed betting windows that keep each round on schedule",
      "An interactive table atmosphere without leaving home",
    ],
    mobileNote:
      "Live tables are accessible on mobile browsers when your connection is stable enough for streaming. A steady signal matters more than a fast one, and landscape orientation makes the table layout easier to read.",
    highlights: [
      "Live dealer tables",
      "Real-time streaming",
      "Familiar classic formats",
    ],
    seoTitle: "YES2WIN Live Casino | Live Dealer Games",
    seoDescription:
      "Discover YES2WIN live casino — real-time dealer tables and classic formats via the official partner site.",
    ctaLabel: "View live casino",
  },
  {
    id: "sports",
    name: "Sports",
    shortName: "Sports",
    href: "/games/sports/",
    path: "/games/sports/",
    description:
      "Follow major sporting events and place bets through a clear, easy-to-navigate sports section.",
    intro:
      "The sports area is for fans who want markets around football, basketball, tennis and other supported competitions. Availability, prices and settlement rules are shown live inside the platform, which is why this guide focuses on how to navigate rather than on figures that move by the minute. If you are new to it, starting with a competition you already follow makes the markets far easier to read.",
    whatToExpect: [
      "Coverage of popular global sports, led by football, basketball and tennis",
      "Pre-match markets that give you time to review a selection before an event starts",
      "Live in-play markets that update during an event where offered",
      "A straightforward betting interface showing stake and potential return before you confirm",
      "Settlement that follows the official result, with your betting history as the record",
    ],
    mobileNote:
      "Sports markets are readable on smaller screens so you can follow events while on the go. In-play betting is the most connection-sensitive part of the category, so use a stable network when prices are moving.",
    highlights: [
      "Major sports coverage",
      "Clear betting interface",
      "Live and pre-match options where available",
    ],
    seoTitle: "YES2WIN Sports | Sports Betting Overview",
    seoDescription:
      "Learn about YES2WIN sports entertainment — popular events, markets and mobile access via the partner site.",
    ctaLabel: "Browse sports",
  },
  {
    id: "fishing",
    name: "Fishing Games",
    shortName: "Fishing",
    href: "/games/fishing/",
    path: "/games/fishing/",
    description:
      "Interactive fishing games that mix skill-style shooting with colourful catch mechanics.",
    intro:
      "Fishing games appeal to players who like active, visual sessions. You aim, fire and chase higher-value targets in arcade-inspired environments, which makes the category feel noticeably more hands-on than spin- or draw-based play. Rooms often run continuously, so you can watch for a moment before joining. Where provided, a value table explains which targets are worth what.",
    whatToExpect: [
      "Bright, interactive gameplay built around aiming and firing rather than fixed rounds",
      "Value tables showing which targets carry which rewards in each title",
      "Adjustable shot or weapon levels that change how quickly a session moves",
      "Skill-meets-luck catch mechanics with immediate visual feedback",
      "Rooms that run continuously, so you can join and leave when it suits you",
    ],
    mobileNote:
      "Touch controls make fishing games natural to play on phones when titles are enabled for your account. Because play is continuous rather than round-based, keep an eye on your shot level rather than leaving auto-fire running unattended.",
    highlights: [
      "Interactive fishing play",
      "Vibrant presentation",
      "Flexible session length",
    ],
    seoTitle: "YES2WIN Fishing Games | Interactive Fishing",
    seoDescription:
      "Explore YES2WIN fishing games — interactive catch-style play and mobile-ready entertainment.",
    ctaLabel: "Explore fishing games",
  },
  {
    id: "lottery",
    name: "Lottery",
    shortName: "Lottery",
    href: "/games/lottery/",
    path: "/games/lottery/",
    description:
      "Simple number-based lottery options for players who prefer draw-style entertainment.",
    intro:
      "Lottery keeps the flow simple: pick numbers, join a draw and check the result when it is published. Because the decision and the outcome are separated by a scheduled draw, there is no continuous session to manage — which is exactly why many members find it the calmest category to budget for. Formats differ in how many digits you select and how a selection resolves, so read the rules for the format you choose before your first entry.",
    whatToExpect: [
      "Easy-to-understand draw formats, with 4D-style play the most commonly referenced",
      "Published selection rules and draw schedules for each format",
      "Entries that close before the draw time, so there is no last-minute rush",
      "Multiple lottery-style options where available in your region",
      "Quick participation after login, with your entry visible in account records",
    ],
    mobileNote:
      "Lottery selections and results views are designed to work smoothly on mobile browsers, which makes it a practical category to check in on briefly rather than sit with.",
    highlights: [
      "Straightforward draw formats",
      "Multiple lottery-style options",
      "Fast participation flow",
    ],
    seoTitle: "YES2WIN Lottery | Lottery Games Overview",
    seoDescription:
      "Discover YES2WIN lottery games — simple draw formats and easy mobile access.",
    ctaLabel: "See lottery options",
  },
];

export function getCategoryById(id: string) {
  return gameCategories.find((category) => category.id === id);
}
