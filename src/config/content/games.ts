export type GameCategory = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  description: string;
  intro: string;
  highlights: string[];
  ctaLabel: string;
};

export const gameCategories: GameCategory[] = [
  {
    id: "slots",
    name: "Slot Games",
    shortName: "Slots",
    href: "/games/#slots",
    description:
      "Explore a broad range of slot experiences across classic, video and feature-rich titles within the YES2WIN ecosystem.",
    intro:
      "Slot games are a core part of the YES2WIN entertainment mix — designed for quick sessions or longer play, with themes and formats that suit different preferences.",
    highlights: [
      "Multiple slot formats and themes",
      "Easy mobile-friendly play",
      "Discover titles through the platform lobby",
    ],
    ctaLabel: "Explore slots",
  },
  {
    id: "live-casino",
    name: "Live Casino",
    shortName: "Live Casino",
    href: "/games/#live-casino",
    description:
      "Experience table games with live dealers streamed in real time for a more immersive, interactive session.",
    intro:
      "Live casino brings classic table action to your screen with real-time streaming and interactive gameplay — ideal when you want a closer-to-floor atmosphere.",
    highlights: [
      "Live dealer table games",
      "Real-time streaming experience",
      "Familiar formats such as baccarat, roulette and blackjack",
    ],
    ctaLabel: "View live casino",
  },
  {
    id: "sports",
    name: "Sports",
    shortName: "Sports",
    href: "/games/#sports",
    description:
      "Follow major sporting events and place bets through the YES2WIN sports section with a clear, easy-to-navigate interface.",
    intro:
      "The sports category covers popular events and markets so fans can stay close to the action — from football and basketball to tennis and more.",
    highlights: [
      "Major global sports coverage",
      "Straightforward betting interface",
      "Live and pre-match market access where available",
    ],
    ctaLabel: "Browse sports",
  },
  {
    id: "fishing",
    name: "Fishing Games",
    shortName: "Fishing",
    href: "/games/#fishing",
    description:
      "Skill-meets-luck fishing games with colourful visuals and interactive shooting-style gameplay.",
    intro:
      "Fishing games blend arcade energy with rewarding catch mechanics — a popular category for players who enjoy active, visual play.",
    highlights: [
      "Interactive fishing gameplay",
      "Vibrant visual presentation",
      "Suitable for short or extended sessions",
    ],
    ctaLabel: "Try fishing games",
  },
  {
    id: "lottery",
    name: "Lottery",
    shortName: "Lottery",
    href: "/games/#lottery",
    description:
      "Simple number-based lottery options for players who prefer draw-style entertainment.",
    intro:
      "Lottery games keep things straightforward: pick numbers, join draws and follow results through the platform experience.",
    highlights: [
      "Easy-to-understand draw formats",
      "Multiple lottery-style options",
      "Quick participation flow",
    ],
    ctaLabel: "See lottery options",
  },
];
