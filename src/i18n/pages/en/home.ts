/**
 * English homepage copy extracted from the components rendered by `src/app/page.tsx`.
 * This module is the shape source of truth: `homeZh` is typed against `HomeCopy`,
 * so both locales are forced to expose the same keys.
 */
export const homeEn = {
  hero: {
    badge: "Official YES2WIN Partner",
    title: "YES2WIN — Your Gateway to the Winning Ecosystem",
    description:
      "Explore YES2WIN games, offers and member pathways through an official partner site built for a modern, confident first impression. Every section here is written to orient you before you enter the platform, so you know which categories exist, how account access works and where to check live details. When you are ready, the register and login buttons hand you over to the official YES2WIN flow.",
    imageAlt: "YES2WIN premium gaming atmosphere",
    registerCta: "Register Now",
    loginCta: "Login",
    panel: {
      label: "Partner Portal",
      items: [
        { label: "Slots", meta: "Spin & discover" },
        { label: "Live Casino", meta: "Real-time tables" },
        { label: "Sports", meta: "Follow the action" },
      ],
      readyLabel: "Ready when you are",
      readyValue: "Register · Login · Explore",
    },
  },

  trust: {
    items: [
      {
        title: "Official Partner",
        description:
          "Connected to the YES2WIN ecosystem through a dedicated partner portal experience. This site introduces the brand and then points you to the official platform for anything live.",
      },
      {
        title: "Multi-Category",
        description:
          "Games across multiple entertainment categories — slots, live casino, sports, fishing and lottery. Each category has its own pace, so you can pick what fits your session.",
      },
      {
        title: "Mobile Ready",
        description:
          "Optimised for modern mobile devices with a responsive browsing experience. Layouts, images and buttons stay readable and tappable on phone-sized screens.",
      },
      {
        title: "Easy Access",
        description:
          "Simple registration and account access via centralised platform CTAs. You will not be asked to create a separate account here — the buttons open the official flow.",
      },
      {
        title: "Partner Support",
        description:
          "Dedicated partner-oriented information and support pathways. Guides, contact routes and referral topics are grouped so you can find the right next step quickly.",
      },
    ],
  },

  intro: {
    eyebrow: "Start here",
    title: "What this YES2WIN partner site is for",
    description:
      "YES2WIN is an online entertainment brand covering several game categories, promotional campaign types, payment channels and a VIP recognition programme. This partner site exists to explain those pieces in plain language before you open an account, so nothing on the platform feels unfamiliar. Anything that changes over time — live titles, campaign terms, available payment methods — stays on the official platform, and we always point you there rather than repeating numbers that may go stale.",
    points: [
      {
        title: "The ecosystem in one place",
        body: "Instead of hunting across separate pages, you get a single overview of how games, promotions, payments, VIP and support fit together. Once the map is clear, deciding where to start becomes much easier.",
      },
      {
        title: "What a partner site does",
        body: "As an official partner, our role is orientation and referral: we describe the YES2WIN experience and hand you over through the register and login buttons. We do not operate the games, hold balances or process any payment.",
      },
      {
        title: "What you can learn here",
        body: "You can learn which game categories exist and how they differ, what types of promotional campaigns are publicly referenced, which payment channel families appear in the cashier, and what account tools become available after login.",
      },
      {
        title: "Where to go next",
        body: "Read the category guides below if you are still choosing, or jump straight to registration if you already know what you want. The FAQ and responsible gaming pages are worth a look either way.",
      },
    ],
    links: [
      { label: "About this partner site", href: "/about/" },
      { label: "Games hub", href: "/games/" },
      { label: "Guides hub", href: "/guides/" },
      { label: "Frequently asked questions", href: "/faq/" },
      { label: "Responsible gaming", href: "/responsible-gaming/" },
    ],
  },

  categoryGuides: {
    eyebrow: "Category guides",
    title: "Choose the category that matches your session",
    description:
      "The five YES2WIN categories feel very different in practice — some are fast and self-paced, others are scheduled around real events or draw times. Use these short guides to work out which one suits the time and attention you have available, then open the full page for a deeper walkthrough.",
    items: [
      {
        id: "slots",
        title: "Slots",
        summary:
          "Slots are the most flexible starting point because every round is short and entirely self-paced. Titles are built around themes, and the mechanics on offer range from simple classic reels to layouts with expanding symbols and feature rounds. Which specific games appear depends on the studios active in the lobby at the time.",
        points: [
          "Best when you want short sessions you can pause at any moment.",
          "Themes and mechanics vary widely, so browsing is part of the experience.",
          "Read each title's own info screen for how its features behave.",
        ],
        href: "/games/slots/",
        cta: "Read the slots guide",
      },
      {
        id: "live-casino",
        title: "Live Casino",
        summary:
          "Live casino replaces software animation with a human dealer streamed in real time, which gives the session a table-side rhythm. You are joining a round that runs on the dealer's clock rather than your own, so pacing is steadier than slots. Table availability follows studio schedules, so the selection you see can shift through the day.",
        points: [
          "Suits players who prefer classic table formats over reels.",
          "Rounds run on the dealer's timing, not yours — plan for steadier pacing.",
          "A stable connection matters more here than in any other category.",
        ],
        href: "/games/live-casino/",
        cta: "Read the live casino guide",
      },
      {
        id: "sports",
        title: "Sports",
        summary:
          "The sports desk is organised around real fixtures, so the calendar decides what is available rather than the lobby. Football, basketball and tennis are the most consistently covered, with other competitions appearing as their seasons run. Market types and how they are presented can differ between the sportsbook providers referenced by YES2WIN.",
        points: [
          "Availability follows the real sporting calendar and time zones.",
          "Football, basketball and tennis carry the broadest regular coverage.",
          "Take time to understand each market type before placing anything.",
        ],
        href: "/games/sports/",
        cta: "Read the sports guide",
      },
      {
        id: "fishing",
        title: "Fishing",
        summary:
          "Fishing games sit between arcade shooters and casino play, with underwater scenes you aim and shoot at directly. Because you control the aiming and firing, sessions feel more hands-on than watching reels spin. Some rooms are single-player while others place several players in the same scene.",
        points: [
          "More interactive than slots — your aim and timing drive the action.",
          "Bright, animation-heavy presentation with clear on-screen feedback.",
          "Check whether a room is single-player or shared before you settle in.",
        ],
        href: "/games/fishing/",
        cta: "Read the fishing guide",
      },
      {
        id: "lottery",
        title: "Lottery / 4D",
        summary:
          "Lottery and 4D style play is the calmest option in the ecosystem: you pick numbers and wait for a scheduled draw. There is no continuous action to follow, which makes it easy to fit around other things in your day. Draw schedules and the specific number formats offered vary by region and provider.",
        points: [
          "The slowest pace here — pick numbers, then wait for the draw.",
          "Number formats and draw times differ by region and provider.",
          "Easy to keep sessions brief because there is nothing to sit through.",
        ],
        href: "/games/lottery/",
        cta: "Read the lottery guide",
      },
    ],
  },

  featured: {
    eyebrow: "Featured",
    title: "Find your next favorite",
    description:
      "A visual snapshot of the YES2WIN categories members explore most. Each card leads to a guide page that explains how that category actually plays, what pace to expect and which questions are worth asking first. Live titles open inside the official lobby after login, where the current selection is always authoritative.",
    primaryCta: "Explore Games",
    secondaryCta: "Browse slots",
    imageAltSuffix: "featured artwork",
    showcaseImageAlt: "YES2WIN multi-category entertainment showcase",
    items: [
      {
        id: "slots",
        title: "Slots",
        badge: "Spin",
        description: "Theme-driven titles for quick sessions or longer play, entirely at your own pace.",
      },
      {
        id: "live-casino",
        title: "Live Casino",
        badge: "Live",
        description: "Dealer tables streamed in real time when available, with classic table formats.",
      },
      {
        id: "sports",
        title: "Sports",
        badge: "Markets",
        description: "Football, basketball, tennis and more on the sports desk, following the real calendar.",
      },
      {
        id: "fishing",
        title: "Fishing",
        badge: "Arcade",
        description: "Interactive catch-style sessions with vivid visuals and hands-on aiming.",
      },
      {
        id: "lottery",
        title: "Lottery / 4D",
        badge: "Draws",
        description: "Number-led draw entertainment with the calmest pace in the ecosystem.",
      },
    ],
  },

  ecosystem: {
    eyebrow: "Game categories",
    title: "Five ways to enjoy YES2WIN",
    description:
      "Large category artworks lead into deeper guides — then into the official lobby for live titles. The five categories are not variations on one idea: they differ in pace, in how much attention they ask for and in when they are available.",
    imageAltSuffix: "artwork",
    categories: [
      {
        id: "slots",
        name: "Slot Games",
        description:
          "Theme-driven spins for short sessions or longer play, with every round under your control. Presentation and feature mechanics vary from title to title, so browsing is part of finding a favourite.",
        cta: "Explore slots",
      },
      {
        id: "live-casino",
        name: "Live Casino",
        description:
          "Dealer tables streamed in real time when available, bringing a human element to classic formats. Rounds follow the dealer's pace rather than yours, which gives sessions a steadier rhythm.",
        cta: "View live casino",
      },
      {
        id: "sports",
        name: "Sports",
        description:
          "Football, basketball, tennis and more on the sports desk, organised around real fixtures. What you can follow depends on the sporting calendar and the time zone you are in.",
        cta: "Browse sports",
      },
      {
        id: "fishing",
        name: "Fishing Games",
        description:
          "Interactive catch-style play with vivid underwater energy and direct hands-on control. Your aiming and timing shape the session, which makes it the most active category here.",
        cta: "Explore fishing games",
      },
      {
        id: "lottery",
        name: "Lottery / 4D",
        description:
          "Number-led draw entertainment with a calmer pace and nothing to watch in between. You choose numbers and wait for a scheduled draw, so it fits easily around the rest of your day.",
        cta: "See lottery options",
      },
    ],
    next: {
      eyebrow: "Next step",
      title: "Ready for the lobby?",
      description:
        "Register or log in to browse live YES2WIN categories on the official platform. The lobby is where current titles, tables and schedules are shown, and it is always the authoritative source.",
      primaryCta: "Register Now",
      secondaryCta: "Explore Games",
    },
  },

  providers: {
    eyebrow: "Studios",
    title: "Game providers powering YES2WIN",
    description:
      "YES2WIN publicly references studios such as Evolution Gaming, Pragmatic Play, SA Gaming, CMD368 and Playtech. Each studio brings its own specialisation, which is a large part of why the categories feel so different from one another. Live title availability still depends on the platform lobby, and studio line-ups can change over time.",
    cta: "Browse games hub",
    items: [
      {
        name: "Evolution Gaming",
        body: "Best known for live dealer content, with studio-based tables streamed to players in real time. If you are drawn to the live casino category, this is the kind of studio production behind it.",
      },
      {
        name: "Pragmatic Play",
        body: "Widely referenced for a broad slot catalogue spanning many themes and feature styles. Its titles are a common starting point for players exploring slots for the first time.",
      },
      {
        name: "SA Gaming",
        body: "Associated with live casino and arcade-style content aimed at Asian markets. Presentation tends to lean toward familiar table formats alongside more interactive games.",
      },
      {
        name: "CMD368",
        body: "A sportsbook-focused provider, so its relevance sits with the sports desk rather than the casino lobby. Market coverage and how odds are displayed follow the provider's own conventions.",
      },
      {
        name: "Playtech",
        body: "A long-established supplier with content across multiple casino categories. Its presence means some familiar formats appear alongside newer studio releases.",
      },
    ],
  },

  promotions: {
    eyebrow: "Latest promotions",
    title: "Offer types worth checking",
    description:
      "Welcome, deposit, weekly, cashback, VIP and special campaigns — each with its own campaign artwork. Understanding the categories helps you read any individual offer faster, because you already know what shape it is likely to take. Live amounts, qualifying conditions and wagering requirements stay on the official platform, where they are kept current.",
    cta: "View Promotions",
    itemCta: "Review details",
    imageAltSuffix: "campaign artwork",
    points: [
      {
        title: "Welcome campaigns",
        body: "Aimed at new members and usually tied to a first qualifying action on the account. Because they are one-time by nature, it is worth reading the conditions carefully before you opt in.",
      },
      {
        title: "Deposit campaigns",
        body: "Linked to funding your account, often with a minimum threshold and a defined qualifying window. The exact structure differs between campaigns, so check the current terms each time.",
      },
      {
        title: "Weekly campaigns",
        body: "Recurring offers that reset on a schedule rather than running once. They tend to reward regular activity, and the qualifying period is the detail most people overlook.",
      },
      {
        title: "Cashback concepts",
        body: "Calculated by looking back over a defined period of play instead of rewarding a single action upfront. How the period is measured and what activity counts is set out in each campaign's own terms.",
      },
      {
        title: "VIP-linked offers",
        body: "Available through the VIP programme and tied to membership status rather than open to everyone. Whether you can see them depends on your account's current standing.",
      },
      {
        title: "Special campaigns",
        body: "Time-limited activity built around events, seasons or particular game categories. These come and go, so the promotions page is the only reliable place to see what is running now.",
      },
    ],
  },

  featuredPromotion: {
    eyebrow: "Featured campaign",
    title: "Have You YES2WIN Welcome Bonus",
    description:
      "YES2WIN publicly references a welcome campaign designed to help new members start with extra value. Exact percentages, deposit rules and wagering change over time — check the latest offer on the official platform before you opt in. We deliberately do not restate figures here, because a stale number is worse than no number at all.",
    primaryCta: "Register Now",
    secondaryCta: "View Promotions",
    imageAlt: "YES2WIN welcome bonus campaign artwork",
    points: [
      "Read the current terms on the official promotions page before opting in.",
      "Check any qualifying conditions and time windows that apply to the campaign.",
      "Confirm how a bonus interacts with withdrawals before you claim it.",
    ],
  },

  vip: {
    eyebrow: "VIP",
    title: "Step into the YES2WIN VIP experience",
    description:
      "Recognition, thoughtful support and curated member moments — without guaranteed financial outcomes.",
    body: "The VIP programme is about how you are looked after rather than any promise about results. It shapes the service you receive, the support routes open to you and the invitations you may be offered, and what applies to you depends on your membership standing at the time. Full details are published through official VIP channels, which is where the current structure is always confirmed.",
    primaryCta: "Explore VIP",
    secondaryLink: "Related promotions",
    imageAlt: "YES2WIN VIP experience artwork",
    imageAltSuffix: "visual",
    points: [
      {
        title: "Personalized experience",
        body: "Service and communications that reflect how you like to play, rather than a single template applied to everyone. That can mean the topics you hear about and the way you are contacted are tuned to your habits.",
      },
      {
        title: "Priority support",
        body: "Elevated help pathways when VIP channels are available to your membership. The practical benefit is less time spent explaining your situation before someone can act on it.",
      },
      {
        title: "Exclusive experiences",
        body: "Selected invitations and recognition moments shared through official VIP routes. These are offered at the platform's discretion and are never presented as a guaranteed entitlement.",
      },
    ],
  },

  payment: {
    eyebrow: "Payments",
    title: "A flexible payment ecosystem",
    description:
      "YES2WIN references common channels such as bank transfer, e-wallets, DuitNow, Touch n Go, online banking and crypto. Grouping them into families makes the cashier easier to read, because each family behaves in a broadly similar way. Availability depends on region and the live cashier, which is the only place the current list is guaranteed to be accurate.",
    cta: "View Payment Guide",
    iconAltSuffix: "icon",
    methods: [
      { id: "bank", label: "Bank Transfer" },
      { id: "ewallet", label: "E-Wallet" },
      { id: "duitnow", label: "DuitNow" },
      { id: "tng", label: "Touch n Go" },
      { id: "online", label: "Online Banking" },
      { id: "crypto", label: "USDT / Crypto" },
      { id: "cards", label: "Bank Cards" },
      { id: "grab", label: "GrabPay" },
    ],
    points: [
      {
        title: "Deposits",
        body: "Funding runs through the platform cashier after you log in, using whichever channels are enabled for your account. Processing behaviour differs by channel, so the cashier is where you will see what applies.",
      },
      {
        title: "Withdrawals",
        body: "Payouts are requested from the account area and typically follow their own verification steps. Requirements and timing are set by the platform rather than by this partner site.",
      },
      {
        title: "Regional availability",
        body: "Not every method appears for every member, because payment channels are tied to region and local banking infrastructure. A method mentioned here may simply not be listed for you.",
      },
      {
        title: "Always verify in the cashier",
        body: "Treat the live cashier as the single source of truth for supported methods, limits and processing details. If something here and the cashier disagree, the cashier is correct.",
      },
    ],
  },

  mobile: {
    eyebrow: "Mobile",
    title: "YES2WIN, built for mobile",
    description:
      "Browse categories, manage account access and move through the partner gateway comfortably on phone-sized screens. Most members do their browsing on a phone, so layouts, images and buttons are sized for touch rather than shrunk down from a desktop view.",
    primaryCta: "Learn more",
    secondaryCta: "Access YES2WIN",
    imageAlt: "YES2WIN mobile device showcase",
    points: [
      {
        title: "Browser-based access",
        body: "The platform is reached through your mobile browser, so there is nothing to install before you start. That also means you are always on the current version without managing updates.",
      },
      {
        title: "Touch-friendly layouts",
        body: "Navigation, cards and calls to action are spaced for thumbs instead of a mouse pointer. Text stays at a readable size rather than scaling down to fit.",
      },
      {
        title: "Connection matters",
        body: "Live dealer tables and streamed content need a steadier connection than slots or lottery play. If your signal is patchy, the calmer categories hold up better.",
      },
      {
        title: "Same account, any device",
        body: "One set of credentials works across phone, tablet and desktop, so you can switch devices mid-session. Only treat devices you control as trusted for login.",
      },
    ],
  },

  howToJoin: {
    eyebrow: "How to join",
    title: "From registration to your first session",
    description:
      "A clear path based on the official YES2WIN access flow, laid out so you know what is coming before you start. Exact fields may vary by region and platform updates, and the platform's own prompts always take precedence over this outline.",
    primaryCta: "Register Now",
    secondaryCta: "Full registration guide",
    imageAlt: "YES2WIN registration journey visual",
    steps: [
      {
        step: "01",
        title: "Register account",
        description:
          "Open the official signup flow and create your YES2WIN username. Choose something you will remember, since it identifies your account from then on.",
      },
      {
        step: "02",
        title: "Enter required details",
        description:
          "Provide the information requested on the registration form. Accurate details matter here because they are used later during verification.",
      },
      {
        step: "03",
        title: "Agree to terms",
        description:
          "Review and accept the applicable platform terms before continuing. This is the right moment to read them rather than after something goes wrong.",
      },
      {
        step: "04",
        title: "Verify when prompted",
        description:
          "Complete phone or account verification steps shown on the platform. What is asked for can depend on your region and account status.",
      },
      {
        step: "05",
        title: "Set payment PIN",
        description:
          "Secure your cashier access with the payment PIN flow when required. Keep it separate from your login password and do not share it with anyone.",
      },
      {
        step: "06",
        title: "Login & explore",
        description:
          "Sign in, open the lobby and browse games, promotions and payments. It is worth setting your limits before your first session rather than later.",
      },
    ],
  },

  howToLogin: {
    eyebrow: "Login",
    title: "How to sign in to YES2WIN",
    description:
      "Returning members can move from this partner gateway into the official login flow without recreating a local account form here. Nothing you type during sign-in is entered on this site — the login button simply opens the official YES2WIN page.",
    primaryCta: "Login",
    secondaryCta: "Registration guide",
    imageAlt: "YES2WIN login and account access visual",
    steps: [
      {
        step: "01",
        title: "Open Login",
        description:
          "Use the Login button on this site to open the official YES2WIN sign-in page. Check the address before entering anything, as you would with any account.",
      },
      {
        step: "02",
        title: "Enter credentials",
        description:
          "Provide the username and password you created during registration. If you cannot recall them, use the platform's own recovery route rather than creating a second account.",
      },
      {
        step: "03",
        title: "Complete security checks",
        description:
          "Finish any verification or security prompts shown by the platform when required. These may appear on a new device or after a period of inactivity.",
      },
      {
        step: "04",
        title: "Access your account",
        description:
          "Enter the lobby to browse games, promotions, payments and account tools. Signing out afterwards is good practice on any shared device.",
      },
    ],
  },

  account: {
    eyebrow: "Account",
    title: "What you can manage after login",
    description:
      "YES2WIN account tools typically cover profile, security, records, promotions and verification. Knowing what lives where saves time when you need to check a transaction or update a detail. Exact menus can vary by account status, so treat this as an outline rather than a fixed map.",
    imageAlt: "YES2WIN account features visual",
    primaryCta: "Full account guide",
    secondaryCta: "Login",
    points: [
      {
        title: "Profile and details",
        body: "Contact information and personal details are maintained from the account area. Keeping them current matters because verification and payouts rely on them matching.",
      },
      {
        title: "Security settings",
        body: "Password changes and payment PIN management sit here, along with any additional protections the platform offers. Reviewing these occasionally is a small habit worth keeping.",
      },
      {
        title: "Records and history",
        body: "Transaction and activity records let you check what actually happened rather than relying on memory. They are also the first place to look if a figure surprises you.",
      },
      {
        title: "Promotions and verification",
        body: "Campaign participation and identity verification steps are tracked from the same area. If a promotion or withdrawal appears blocked, an outstanding verification step is a common reason.",
      },
    ],
  },

  why: {
    eyebrow: "Why YES2WIN",
    title: "Everything you need before you enter",
    description:
      "Useful orientation across games, payments, offers, VIP, mobile and partner topics — then direct CTAs into the official platform.",
    body: "The aim is that by the time you reach the register or login button, nothing on the platform is a surprise. Each topic below covers one part of the ecosystem in enough detail to make a decision, while anything that changes over time is left to the official platform where it stays current.",
    imageAlt: "Why choose YES2WIN visual",
    imageAltSuffix: "visual",
    cta: "About this partner site",
    items: [
      {
        title: "Multi-category play",
        description:
          "Slots, live casino, sports, fishing and lottery under one YES2WIN brand. Because the categories differ in pace and availability, you can match your choice to the time you actually have.",
      },
      {
        title: "Mobile experience",
        description:
          "Browse and access the platform from phones without losing clarity. Layouts and touch targets are built for small screens rather than scaled down from desktop.",
      },
      {
        title: "Payment options",
        description:
          "Bank transfer, e-wallet, DuitNow, online banking and crypto categories where available. Which methods appear for you depends on your region and the live cashier.",
      },
      {
        title: "Promotions & VIP",
        description:
          "Offer types and VIP recognition explained before you check live terms. Knowing the shape of each campaign type makes the real terms much faster to read.",
      },
      {
        title: "Partner pathways",
        description:
          "A structured way for partners to share YES2WIN with their audiences. Referral tools, materials and tracking are described without any income promises attached.",
      },
      {
        title: "Support orientation",
        description:
          "FAQ, contact pathways and responsible gaming guidance in one place. If you are unsure where a question belongs, start there and you will be pointed on.",
      },
    ],
  },

  partner: {
    eyebrow: "Partner",
    title: "Build with the YES2WIN ecosystem",
    description:
      "Partner access, referral sharing, marketing resources and tracking — without guaranteed income claims. The partner side is a working relationship: you introduce YES2WIN to an audience that is already interested, and the tools help you see what happens next.",
    primaryCta: "Become a Partner",
    secondaryLink: "Explore the partner page",
    imageAlt: "YES2WIN partner ecosystem network visual",
    points: [
      {
        title: "Partner access",
        body: "Approved partners work through a dedicated area rather than the standard member view. Access is granted through the official partner process, not from this page.",
      },
      {
        title: "Referral sharing",
        body: "Referral links let you point your audience to YES2WIN and see the results attributed correctly. How you present them is up to you, within the platform's own rules.",
      },
      {
        title: "Marketing resources",
        body: "Brand materials help keep what you publish consistent with the official presentation. Using supplied assets also reduces the risk of misrepresenting the brand.",
      },
      {
        title: "Tracking and reporting",
        body: "Reporting tools show referral activity so you can judge what is working. Nothing here implies a particular level of earnings — outcomes depend entirely on your own audience and effort.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Answers before you dive in",
    description:
      "Useful questions about YES2WIN, registration, games, promotions, payments, mobile access and partner pathways. Most first-time questions come up repeatedly, so a few minutes here often saves a support message later.",
    primaryCta: "Browse all FAQs",
    secondaryLink: "Contact support",
    teasers: [
      {
        question: "Is this the official YES2WIN platform?",
        answer:
          "This is an official partner site, not the platform itself. It explains the ecosystem, and the register and login buttons take you to the official YES2WIN pages where accounts and gameplay live.",
      },
      {
        question: "Do I create an account here?",
        answer:
          "No. Registration happens entirely in the official flow that opens when you select Register, so no account details are collected on this site.",
      },
      {
        question: "Which game categories are available?",
        answer:
          "The publicly referenced categories are slots, live casino, sports, fishing and lottery. The specific titles and tables within each one are shown in the platform lobby, which is always the current source.",
      },
      {
        question: "How do I check current promotion terms?",
        answer:
          "Open the official promotions area on the platform. Campaign amounts and conditions change over time, so we describe the offer types here and leave the live numbers where they are kept up to date.",
      },
    ],
  },

  responsible: {
    eyebrow: "18+",
    title: "Play responsibly",
    description:
      "Keep entertainment recreational. Set limits, take breaks and seek help if gaming stops feeling healthy. These habits are far easier to keep when you decide on them before a session rather than during one.",
    cta: "Learn more",
    imageAlt: "Responsible gaming visual",
    points: [
      {
        title: "Set a budget first",
        body: "Decide what you are comfortable spending before you start, and treat it as the cost of entertainment rather than an investment. If a figure would matter elsewhere in your life, it does not belong here.",
      },
      {
        title: "Watch the clock",
        body: "Time passes quickly during play, so set your own limit rather than relying on how it feels. A simple reminder is often enough to keep sessions the length you intended.",
      },
      {
        title: "Never chase losses",
        body: "Trying to win back what is gone is the point where entertainment turns into pressure. Stopping while you are behind is a normal, healthy outcome — not a decision to postpone.",
      },
      {
        title: "Take real breaks",
        body: "Stepping away properly makes it much easier to judge whether you still want to continue. If play starts feeling like an obligation, that is the signal to pause and seek support.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Get started",
    title: "Ready to explore YES2WIN?",
    description:
      "Create your account or log in through this official partner gateway. Both buttons take you straight to the official platform, where the lobby, cashier and current campaign terms are always up to date.",
    registerCta: "Register Now",
    loginCta: "Login",
    partnerCta: "Become a Partner",
  },
};

export type HomeCopy = typeof homeEn;
