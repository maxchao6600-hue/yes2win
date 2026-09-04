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
      "Slots remain one of the most popular ways to enjoy YES2WIN. Themes, bonus features and pacing vary by title, so you can browse until you find a style that fits.",
    whatToExpect: [
      "A wide mix of themes and feature styles",
      "Easy entry from the platform lobby after login",
      "Play that adapts well to phones and tablets",
    ],
    mobileNote:
      "Slot interfaces are designed for touch screens, so you can browse and play comfortably on mobile browsers.",
    highlights: [
      "Multiple formats and themes",
      "Mobile-friendly play",
      "Discover titles in the live lobby",
    ],
    seoTitle: "YES2WIN Slots | Slot Games Overview",
    seoDescription:
      "Explore YES2WIN slot games — themes, features and mobile-friendly play through this official partner gateway.",
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
      "Live casino brings the energy of a real floor to your screen. Dealers host tables while you play familiar formats with clear on-screen controls.",
    whatToExpect: [
      "Real-time streaming with live dealers",
      "Classic formats such as baccarat, roulette and blackjack where available",
      "An interactive table atmosphere without leaving home",
    ],
    mobileNote:
      "Live tables are accessible on mobile browsers when your connection is stable enough for streaming.",
    highlights: [
      "Live dealer tables",
      "Real-time streaming",
      "Familiar classic formats",
    ],
    seoTitle: "YES2WIN Live Casino | Live Dealer Games",
    seoDescription:
      "Discover YES2WIN live casino — real-time dealer tables and classic formats through the official partner portal.",
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
      "The sports area is for fans who want markets around football, basketball, tennis and more. Availability and odds are shown live inside the platform.",
    whatToExpect: [
      "Coverage of popular global sports",
      "Pre-match and live markets where offered",
      "A straightforward betting interface",
    ],
    mobileNote:
      "Sports markets are readable on smaller screens so you can follow events while on the go.",
    highlights: [
      "Major sports coverage",
      "Clear betting interface",
      "Live and pre-match options where available",
    ],
    seoTitle: "YES2WIN Sports | Sports Betting Overview",
    seoDescription:
      "Learn about YES2WIN sports betting — popular events, markets and mobile access via the official partner site.",
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
      "Fishing games appeal to players who like active, visual sessions. Aim, catch and chase higher-value targets in arcade-inspired environments.",
    whatToExpect: [
      "Bright, interactive gameplay",
      "Skill-meets-luck catch mechanics",
      "Short or extended session options",
    ],
    mobileNote:
      "Touch controls make fishing games natural to play on phones when titles are enabled for your account.",
    highlights: [
      "Interactive fishing play",
      "Vibrant presentation",
      "Flexible session length",
    ],
    seoTitle: "YES2WIN Fishing Games | Interactive Fishing",
    seoDescription:
      "Explore YES2WIN fishing games — interactive catch-style play and mobile-ready entertainment.",
    ctaLabel: "Try fishing games",
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
      "Lottery keeps the flow simple: pick numbers, join draws and check results. It is a calmer alternative to fast-paced slots or live tables.",
    whatToExpect: [
      "Easy-to-understand draw formats",
      "Multiple lottery-style options where available",
      "Quick participation after login",
    ],
    mobileNote:
      "Lottery selections and results views are designed to work smoothly on mobile browsers.",
    highlights: [
      "Straightforward draw formats",
      "Multiple lottery-style options",
      "Fast participation flow",
    ],
    seoTitle: "YES2WIN Lottery | Lottery Games Overview",
    seoDescription:
      "Discover YES2WIN lottery games — simple draw formats and easy mobile access through the partner gateway.",
    ctaLabel: "See lottery options",
  },
];

export function getCategoryById(id: string) {
  return gameCategories.find((category) => category.id === id);
}
