export type GameProvider = {
  id: string;
  name: string;
  focus: string;
  description: string;
  categories: string[];
};

/** Verified studio names referenced publicly by YES2WIN. */
export const gameProviders: GameProvider[] = [
  {
    id: "evolution",
    name: "Evolution Gaming",
    focus: "Live casino",
    description:
      "Known for live dealer tables and immersive streaming presentation across classic table formats.",
    categories: ["Live Casino"],
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    focus: "Slots & live",
    description:
      "A broad entertainment studio covering slots and additional formats commonly found in modern lobbies.",
    categories: ["Slots", "Live Casino"],
  },
  {
    id: "sa-gaming",
    name: "SA Gaming",
    focus: "Live tables",
    description:
      "Live casino experiences oriented around Asian table preferences and interactive dealer presentation.",
    categories: ["Live Casino"],
  },
  {
    id: "cmd368",
    name: "CMD368",
    focus: "Sports",
    description:
      "Sports-focused coverage spanning major events with markets suited to fans who follow fixtures closely.",
    categories: ["Sports"],
  },
  {
    id: "playtech",
    name: "Playtech",
    focus: "Multi-category",
    description:
      "A long-standing studio presence across slots, table games and live casino options where available.",
    categories: ["Slots", "Live Casino"],
  },
];
