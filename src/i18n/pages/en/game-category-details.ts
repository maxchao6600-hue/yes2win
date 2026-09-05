/**
 * Per-category educational content for `/games/<category>/` pages.
 * Each category has unique topic titles — not a shared template shell.
 */

export type CategoryTopic = {
  title: string;
  body: string;
};

export type GameCategoryDetail = {
  overviewTitle: string;
  overviewLead: string;
  topicsTitle: string;
  topics: CategoryTopic[];
  practiceTitle: string;
  practiceItems: string[];
  relatedTitle: string;
  relatedCopy: string;
  relatedLinks: Array<{ label: string; href: string }>;
  faqTitle: string;
  faqIntro: string;
  faq: Array<{ id: string; question: string; answer: string }>;
  /** Primary hero CTA — routes to register / platform access */
  continueCta: string;
};

export type GameCategoryDetailsMap = Record<string, GameCategoryDetail>;

export const gameCategoryDetailsEn: GameCategoryDetailsMap = {
  slots: {
    overviewTitle: "How slot games are built",
    overviewLead:
      "Slots are self-paced: you choose a stake, spin, and the round resolves quickly. Themes change the look; the paytable explains how symbols, lines and features actually work. Use this page to understand the format before you browse titles in the live lobby.",
    topicsTitle: "Slot concepts worth knowing",
    topics: [
      {
        title: "Reels and formats",
        body: "Most titles use a grid of reels that stop after each spin. Classic-style games keep the board simpler; modern and feature-led titles may add more visual layers. The underlying loop stays the same — stake, spin, result — even when the presentation looks very different.",
      },
      {
        title: "Paylines and ways to win",
        body: "Matching symbols usually need to land in patterns defined by the game. Some titles use fixed or selectable paylines; others use “ways to win” style counting. Neither approach is inherently better — they are different rule sets described in that title’s information panel.",
      },
      {
        title: "Paytables",
        body: "Where provided, the paytable or info panel lists symbol values, line structures and how feature rounds start. Two games with similar artwork can behave differently, so reading that panel once before you play is the most useful habit in this category.",
      },
      {
        title: "Bonus features and free spins",
        body: "Free-spin style rounds, multipliers and other features are game mechanics set by the studio, not platform promotions. Trigger conditions vary by title — the paytable is the place to confirm what starts a feature and what it does.",
      },
      {
        title: "Volatility and RTP (general ideas)",
        body: "Volatility describes how uneven results can feel across a session; RTP is a long-run theoretical return figure used in industry education. This partner site does not publish title-specific RTP or volatility numbers. Treat those concepts as background literacy, then rely on each game’s own disclosures where shown.",
      },
      {
        title: "Comparing titles in the lobby",
        body: "Decide what you want from the session first: a simple classic board, or a feature-heavy title that asks more attention. Filter by familiarity of interface, then open the info panel before raising stakes.",
      },
      {
        title: "Mobile considerations",
        body: "Short spin cycles suit phone sessions well. Keep the browser current, and if a feature-heavy title feels sluggish, close unused tabs before continuing.",
      },
      {
        title: "Responsible slot play",
        body: "Set time and spending limits before you open the lobby. Because rounds resolve quickly, check the clock between spins so a short break does not quietly become a long session.",
      },
    ],
    practiceTitle: "Practical habits before your first spin",
    practiceItems: [
      "Open the title’s information or paytable panel before you stake.",
      "Start with a stake and session length you are comfortable ending on.",
      "Treat feature rounds as game rules — separate from any offer campaign.",
      "Pause between spins when you need to reassess time or budget.",
    ],
    relatedTitle: "Promotions, VIP and payments around slots",
    relatedCopy:
      "Welcome or deposit-style campaigns sometimes mention slot activity, and counting rules can differ by category. Confirm live terms in the promotions area before opting in. Use Payment and Account guidance for cashier and verification context.",
    relatedLinks: [
      { label: "Promotions", href: "/promotions/" },
      { label: "Payment guide", href: "/payment/" },
      { label: "VIP overview", href: "/vip/" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
      { label: "Guides hub", href: "/guides/" },
    ],
    faqTitle: "Slots questions",
    faqIntro: "Short answers before you continue into the live slot lobby.",
    faq: [
      {
        id: "slots-faq-1",
        question: "How do I find slot titles on YES2WIN?",
        answer:
          "Register or log in, then browse the slot area inside the live YES2WIN lobby to see titles available to your account.",
      },
      {
        id: "slots-faq-2",
        question: "Can I play slots on mobile?",
        answer:
          "Yes. Slot layouts are generally well suited to mobile browsing and touch controls when a title is enabled on your device.",
      },
      {
        id: "slots-faq-3",
        question: "Where do I see paylines and features?",
        answer:
          "In the lobby, open the title’s information or paytable panel. That is where symbol values, line structures and feature triggers are described when the studio provides them.",
      },
      {
        id: "slots-faq-4",
        question: "Do you publish RTP or volatility figures here?",
        answer:
          "No. Those figures, when disclosed at all, belong with the title or platform materials — not as fixed claims on this partner site.",
      },
    ],
    continueCta: "Explore Slots on YES2WIN",
  },

  "live-casino": {
    overviewTitle: "What live casino actually is",
    overviewLead:
      "Live casino streams a real dealer in real time. You place decisions through on-screen controls while the table runs on timed betting windows. The experience depends on a steady connection more than on raw download speed.",
    topicsTitle: "Live table topics",
    topics: [
      {
        title: "Live dealer concept",
        body: "A human dealer hosts the round on camera while the interface shows bets, timers and results. The table sets the pace — you respond inside the betting window rather than spinning at your own speed.",
      },
      {
        title: "Baccarat",
        body: "Baccarat is a common live table reference: players typically choose between main outcomes such as Player, Banker or Tie, depending on the table variant. Exact bet types and side bets appear on that table’s information panel when offered.",
      },
      {
        title: "Roulette",
        body: "Roulette centres on predicting where the ball lands. Inside and outside bet styles may be available depending on the table. Limits and layout details are published on the table panel before you join.",
      },
      {
        title: "Blackjack",
        body: "Blackjack tables combine familiar card decisions with live dealing. Variants differ in side bets and table rules — read the panel first so you are not discovering a rule mid-hand.",
      },
      {
        title: "Table limits and betting windows",
        body: "Minimum and maximum stakes, plus how long you have to place a decision, are table-specific. Missing a window usually means sitting out that round rather than pausing the stream for everyone.",
      },
      {
        title: "Streaming and connection quality",
        body: "Live video is more connection-sensitive than static lobby pages. Prefer a steady network, switch between rounds rather than mid-hand if the stream stutters, and close unused tabs to free memory.",
      },
      {
        title: "Choosing a table",
        body: "Watch a few rounds first when you can. Check limits, side bets and whether the layout is readable on your screen — especially on a phone in landscape orientation.",
      },
      {
        title: "Responsible live play",
        body: "Decide how long you will stay before you sit down. Because the table keeps moving, it is easy to remain longer than planned unless you set a clear end point.",
      },
    ],
    practiceTitle: "Before you take a seat",
    practiceItems: [
      "Read the table panel for rules, side bets and limits.",
      "Confirm your connection feels stable enough for video.",
      "Use landscape on mobile when the layout feels cramped.",
      "Keep chat respectful toward dealers and other players.",
    ],
    relatedTitle: "Support around live tables",
    relatedCopy:
      "For account or cashier questions that interrupt a session, use Account and Payment guides. For campaign terms that mention live play, confirm details in Promotions before you opt in.",
    relatedLinks: [
      { label: "Mobile access", href: "/mobile/" },
      { label: "Promotions", href: "/promotions/" },
      { label: "Account guide", href: "/account-guide/" },
      { label: "FAQ — games", href: "/faq/#games" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
    ],
    faqTitle: "Live casino questions",
    faqIntro: "Practical answers before you join a streamed table.",
    faq: [
      {
        id: "live-faq-1",
        question: "Which live games might appear?",
        answer:
          "Public YES2WIN references often include baccarat, roulette and blackjack where those tables are supported. Availability depends on the live lobby for your region and account.",
      },
      {
        id: "live-faq-2",
        question: "Does live casino work on mobile?",
        answer:
          "Yes, when your browser and connection can handle real-time streaming smoothly. Landscape orientation often makes table layouts clearer.",
      },
      {
        id: "live-faq-3",
        question: "Where do I learn a table’s rules?",
        answer:
          "The table information panel lists rules, bet types, side bets and limits before you join. Variants can differ between studios even when the core game feels familiar.",
      },
      {
        id: "live-faq-4",
        question: "Why does my stream stutter?",
        answer:
          "Live video needs a steady signal. Switch networks between rounds rather than mid-hand, and close unused browser tabs if the device feels under load.",
      },
    ],
    continueCta: "Explore Live Casino on YES2WIN",
  },

  sports: {
    overviewTitle: "How sports entertainment is organised",
    overviewLead:
      "Sports markets are built around real fixtures. Pre-match gives you time to review; in-play updates while an event is underway. Prices and settlement rules live on the platform — this page explains the concepts so navigation feels familiar.",
    topicsTitle: "Sports betting concepts",
    topics: [
      {
        title: "Pre-match markets",
        body: "Pre-match selections open before an event starts. You usually have time to read the market description, compare options and confirm a stake without the pressure of a live clock.",
      },
      {
        title: "Live / in-play",
        body: "In-play markets update during an event and may suspend around key moments. They suit people who already follow the sport closely and can handle faster price movement.",
      },
      {
        title: "Fixtures and coverage",
        body: "Football, basketball and tennis are common reference sports in YES2WIN materials. Other competitions may appear depending on current platform coverage and your region — the live sports desk is authoritative.",
      },
      {
        title: "Markets and odds language",
        body: "A market is a question about an event (for example a match result). Odds express the price for a selection and can change. This site does not publish live odds; always confirm figures inside the platform.",
      },
      {
        title: "Bet slip",
        body: "The bet slip is where you review stake and potential return before confirming. Use it as a final check — especially when building more than one selection.",
      },
      {
        title: "Settlement and interrupted events",
        body: "Settlement follows the official result and the rules published with that market. Postponed, abandoned or disputed events are handled according to those rules. Your betting history shows status; timing can vary by event and market type.",
      },
      {
        title: "Checking results",
        body: "After an event, use your account betting history and the platform’s result presentation rather than third-party screenshots. That record is the practical source for what was placed and how it resolved.",
      },
      {
        title: "Responsible betting",
        body: "Treat sports as entertainment around fixtures you already follow. Set a budget before the weekend slate, and avoid chasing a single result by stacking more markets under pressure.",
      },
    ],
    practiceTitle: "A calm way to use the sports desk",
    practiceItems: [
      "Start with a competition you already understand.",
      "Read the market description before confirming a stake.",
      "Use a stable network for in-play selections.",
      "Review betting history after events instead of guessing status.",
    ],
    relatedTitle: "Account tools that matter for sports",
    relatedCopy:
      "Transaction and betting records live in your account after login. Payment guidance helps with cashier orientation; FAQ covers common sports and account questions.",
    relatedLinks: [
      { label: "Account guide", href: "/account-guide/" },
      { label: "Payment guide", href: "/payment/" },
      { label: "Mobile access", href: "/mobile/" },
      { label: "FAQ — sports", href: "/faq/#sports" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
    ],
    faqTitle: "Sports questions",
    faqIntro: "Orientation answers — live prices stay on the platform.",
    faq: [
      {
        id: "sports-faq-1",
        question: "Which sports are highlighted here?",
        answer:
          "Football, basketball and tennis are primary references. Other supported sports depend on the live platform for your region and account.",
      },
      {
        id: "sports-faq-2",
        question: "Do you publish odds on this site?",
        answer: "No. Odds, lines and event availability change live and must be checked on the official platform.",
      },
      {
        id: "sports-faq-3",
        question: "What is the difference between pre-match and in-play?",
        answer:
          "Pre-match markets are available before an event starts. In-play markets update while the event runs, move faster and can be suspended around key moments.",
      },
      {
        id: "sports-faq-4",
        question: "How does settlement work if an event is postponed?",
        answer:
          "Follow the market rules shown on the platform and check your betting history for status. Interrupted events are handled according to those published rules, not by fixed timing claims on this site.",
      },
    ],
    continueCta: "Explore Sports on YES2WIN",
  },

  fishing: {
    overviewTitle: "What fishing games feel like",
    overviewLead:
      "Fishing titles are arcade-style: you aim, fire and chase on-screen targets rather than waiting on a spin cycle. This partner site explains the category — playable rooms open in the live lobby after you continue to the YES2WIN platform.",
    topicsTitle: "Fishing gameplay topics",
    topics: [
      {
        title: "Fishing game concept",
        body: "Sessions are continuous rather than round-based. Targets move across the screen while you choose where to aim, which makes the pace feel more active than slots or lottery.",
      },
      {
        title: "Targeting and aiming",
        body: "You typically select a direction or point on screen and fire. Higher-value targets are usually clearer once you have read the title’s value table.",
      },
      {
        title: "Shot strength and weapon types",
        body: "Many titles let you adjust shot level or weapon style. Higher intensity usually moves the session faster — including how quickly balance can change — so raise levels deliberately.",
      },
      {
        title: "Auto-fire",
        body: "Some games offer auto-fire. It can reduce tapping, but leaving it running unattended makes it harder to notice time and spend. Treat it as an optional aid, not a set-and-forget mode.",
      },
      {
        title: "Room and format differences",
        body: "Interfaces, target sets and control layouts differ by title and studio. Watching a room briefly before joining helps you learn the layout without committing immediately.",
      },
      {
        title: "Mobile controls",
        body: "Touch aiming maps naturally to phones when a title is enabled for your account. Keep an eye on shot level — continuous play can move faster than you expect on a small screen.",
      },
      {
        title: "Session management",
        body: "Because there is no natural “end of round” pause, set a session limit before you start and take breaks at fixed intervals to check balance deliberately.",
      },
      {
        title: "Responsible fishing play",
        body: "Decide duration and spend first. Continuous action is entertaining; it is also the easiest category to overstay without noticing.",
      },
    ],
    practiceTitle: "Habits that keep fishing sessions clear",
    practiceItems: [
      "Read the value table before raising shot strength.",
      "Avoid leaving auto-fire running while you look away.",
      "Set a hard stop time before you enter a room.",
      "Remember: this site explains fishing — gameplay continues on the platform lobby.",
    ],
    relatedTitle: "Next steps after learning the category",
    relatedCopy:
      "When you are ready to see which fishing titles appear for your account, continue through Register or Login. For budgeting habits, open Responsible Gaming; for cashier orientation, see Payment.",
    relatedLinks: [
      { label: "Games hub", href: "/games/" },
      { label: "Mobile access", href: "/mobile/" },
      { label: "Payment guide", href: "/payment/" },
      { label: "Register guide", href: "/register-guide/" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
    ],
    faqTitle: "Fishing questions",
    faqIntro: "Category orientation — not a live room catalogue.",
    faq: [
      {
        id: "fishing-faq-1",
        question: "Are fishing games different from slots?",
        answer:
          "Yes. Fishing is more interactive, with aiming and continuous action rather than simple spin cycles.",
      },
      {
        id: "fishing-faq-2",
        question: "Can I open fishing from this partner site?",
        answer:
          "This site explains the category and routes you to YES2WIN. Playable fishing rooms appear in the live lobby after Register or Login when available to your account.",
      },
      {
        id: "fishing-faq-3",
        question: "What controls should I expect?",
        answer:
          "Most titles combine aiming, firing and a control for shot strength or weapon type, with auto-fire in some games. Check the on-screen legend before increasing intensity.",
      },
      {
        id: "fishing-faq-4",
        question: "How do I keep a session under control?",
        answer:
          "Set a session limit before you start, avoid unattended auto-fire, and pause at fixed intervals to review your balance.",
      },
    ],
    continueCta: "Explore Fishing on YES2WIN",
  },

  lottery: {
    overviewTitle: "Lottery and 4D-style play",
    overviewLead:
      "Lottery is number-led and draw-based: you make a selection, entries close, and results follow a published schedule. There is no continuous session to manage, which is why many people find it calmer to budget for.",
    topicsTitle: "Lottery / 4D topics",
    topics: [
      {
        title: "Lottery concept",
        body: "You participate in a draw rather than a continuous game loop. The decision and the outcome are separated by time — that separation is the defining feature of the category.",
      },
      {
        title: "4D terminology",
        body: "4D-style references generally mean number-based draw participation with a fixed digit format. Exact naming and rules depend on the format shown in the live lottery area.",
      },
      {
        title: "Number selection",
        body: "You choose digits according to the format’s rules. Some formats differ in how many digits you pick and how a winning match is defined — always read that format’s instructions before confirming.",
      },
      {
        title: "Draw schedules and entry closing",
        body: "Entries typically close before the published draw time. Leave a margin rather than entering at the last moment. This site does not publish live draw clocks.",
      },
      {
        title: "Result checking",
        body: "Results and winning numbers belong on the official platform, not on this partner site. Use the platform’s result views and your account records after a draw.",
      },
      {
        title: "Common format differences",
        body: "Formats can differ in digit length, prize structure and how close a match needs to be. Treat each format as its own rule set rather than assuming they behave identically.",
      },
      {
        title: "Mobile convenience",
        body: "Selections and results views are usually easy to complete on a phone, which suits brief check-ins rather than long sittings.",
      },
      {
        title: "Responsible participation",
        body: "Decide your entry budget before you open the lottery area. Because the outcome arrives later, avoid placing extra entries solely to “cover” an earlier selection.",
      },
    ],
    practiceTitle: "Before your first entry",
    practiceItems: [
      "Read the rules for the specific format you choose.",
      "Confirm the closing time with margin to spare.",
      "Check that the entry appears in your account records.",
      "Use the platform for results — not third-party reposts.",
    ],
    relatedTitle: "Where to verify live lottery details",
    relatedCopy:
      "Draw schedules, formats and results are platform-side. This page only explains structure. For account records and cashier context, use the guides below.",
    relatedLinks: [
      { label: "Account guide", href: "/account-guide/" },
      { label: "Payment guide", href: "/payment/" },
      { label: "FAQ — lottery", href: "/faq/#lottery" },
      { label: "Guides hub", href: "/guides/" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
    ],
    faqTitle: "Lottery questions",
    faqIntro: "Structure answers — live draws stay on the platform.",
    faq: [
      {
        id: "lottery-faq-1",
        question: "Do you show live 4D results here?",
        answer:
          "No. This site does not publish winning numbers or results. Check the official platform for current draw information.",
      },
      {
        id: "lottery-faq-2",
        question: "How do I access lottery options?",
        answer:
          "Use Register or Login, then open the lottery area inside the YES2WIN platform if the category is available to your account.",
      },
      {
        id: "lottery-faq-3",
        question: "How do I enter a draw?",
        answer:
          "Open the lottery area, choose a format, make your selection, confirm the entry and check that it appears in your account records. Entries close before the draw time published for that format.",
      },
      {
        id: "lottery-faq-4",
        question: "Why do some members prefer lottery?",
        answer:
          "It separates the decision from the outcome. Without a continuous play loop, many people find it calmer and easier to budget for.",
      },
    ],
    continueCta: "Explore Lottery on YES2WIN",
  },
};
