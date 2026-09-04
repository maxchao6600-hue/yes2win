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
      "Explore YES2WIN games, offers and member pathways through an official partner site built for a modern, confident first impression.",
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
        description: "Connected to the YES2WIN ecosystem through a dedicated partner portal experience.",
      },
      {
        title: "Multi-Category",
        description: "Games across multiple entertainment categories — slots, live casino, sports and more.",
      },
      {
        title: "Mobile Ready",
        description: "Optimised for modern mobile devices with a responsive browsing experience.",
      },
      {
        title: "Easy Access",
        description: "Simple registration and account access via centralised platform CTAs.",
      },
      {
        title: "Partner Support",
        description: "Dedicated partner-oriented information and support pathways.",
      },
    ],
  },

  featured: {
    eyebrow: "Featured",
    title: "Find your next favorite",
    description:
      "A visual snapshot of the YES2WIN categories members explore most. Live titles open inside the official lobby after login.",
    primaryCta: "Explore Games",
    secondaryCta: "Browse slots",
    imageAltSuffix: "featured artwork",
    showcaseImageAlt: "YES2WIN multi-category entertainment showcase",
    items: [
      {
        id: "slots",
        title: "Slots",
        badge: "Spin",
        description: "Theme-driven titles for quick sessions or longer play.",
      },
      {
        id: "live-casino",
        title: "Live Casino",
        badge: "Live",
        description: "Dealer tables streamed in real time when available.",
      },
      {
        id: "sports",
        title: "Sports",
        badge: "Markets",
        description: "Football, basketball, tennis and more on the sports desk.",
      },
      {
        id: "fishing",
        title: "Fishing",
        badge: "Arcade",
        description: "Interactive catch-style sessions with vivid visuals.",
      },
    ],
  },

  ecosystem: {
    eyebrow: "Game categories",
    title: "Five ways to enjoy YES2WIN",
    description: "Large category artworks lead into deeper guides — then into the official lobby for live titles.",
    imageAltSuffix: "artwork",
    categories: [
      {
        id: "slots",
        name: "Slot Games",
        description: "Theme-driven spins for short sessions or longer play.",
        cta: "Explore slots",
      },
      {
        id: "live-casino",
        name: "Live Casino",
        description: "Dealer tables streamed in real time when available.",
        cta: "View live casino",
      },
      {
        id: "sports",
        name: "Sports",
        description: "Football, basketball, tennis and more on the sports desk.",
        cta: "Browse sports",
      },
      {
        id: "fishing",
        name: "Fishing Games",
        description: "Interactive catch-style play with vivid underwater energy.",
        cta: "Try fishing games",
      },
      {
        id: "lottery",
        name: "Lottery / 4D",
        description: "Number-led draw entertainment with a calmer pace.",
        cta: "See lottery options",
      },
    ],
    next: {
      eyebrow: "Next step",
      title: "Ready for the lobby?",
      description: "Register or log in to browse live YES2WIN categories on the official platform.",
      primaryCta: "Register Now",
      secondaryCta: "Explore Games",
    },
  },

  providers: {
    eyebrow: "Studios",
    title: "Game providers powering YES2WIN",
    description:
      "YES2WIN publicly references studios such as Evolution Gaming, Pragmatic Play, SA Gaming, CMD368 and Playtech. Live title availability still depends on the platform lobby.",
    cta: "Browse games hub",
  },

  promotions: {
    eyebrow: "Latest promotions",
    title: "Offer types worth checking",
    description:
      "Welcome, deposit, weekly, cashback, VIP and special campaigns — each with its own campaign artwork. Live amounts stay on the official platform.",
    cta: "View Promotions",
    itemCta: "Review details",
    imageAltSuffix: "campaign artwork",
  },

  featuredPromotion: {
    eyebrow: "Featured campaign",
    title: "Have You YES2WIN Welcome Bonus",
    description:
      "YES2WIN publicly references a welcome campaign designed to help new members start with extra value. Exact percentages, deposit rules and wagering change over time — check the latest offer on the official platform before you opt in.",
    primaryCta: "Register Now",
    secondaryCta: "View Promotions",
    imageAlt: "YES2WIN welcome bonus campaign artwork",
  },

  vip: {
    eyebrow: "VIP",
    title: "Step into the YES2WIN VIP experience",
    description:
      "Recognition, thoughtful support and curated member moments — without guaranteed financial outcomes.",
    primaryCta: "Explore VIP",
    secondaryLink: "Related promotions",
    imageAlt: "YES2WIN VIP experience artwork",
    imageAltSuffix: "visual",
    points: [
      {
        title: "Personalized experience",
        body: "Service and communications that reflect how you like to play.",
      },
      {
        title: "Priority support",
        body: "Elevated help pathways when VIP channels are available to your membership.",
      },
      {
        title: "Exclusive experiences",
        body: "Selected invitations and recognition moments shared through official VIP routes.",
      },
    ],
  },

  payment: {
    eyebrow: "Payments",
    title: "A flexible payment ecosystem",
    description:
      "YES2WIN references common channels such as bank transfer, e-wallets, DuitNow, Touch n Go, online banking and crypto. Availability depends on region and the live cashier.",
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
  },

  mobile: {
    eyebrow: "Mobile",
    title: "YES2WIN, built for mobile",
    description:
      "Browse categories, manage account access and move through the partner gateway comfortably on phone-sized screens.",
    primaryCta: "Learn more",
    secondaryCta: "Access YES2WIN",
    imageAlt: "YES2WIN mobile device showcase",
  },

  howToJoin: {
    eyebrow: "How to join",
    title: "From registration to your first session",
    description:
      "A clear path based on the official YES2WIN access flow. Exact fields may vary by region and platform updates.",
    primaryCta: "Register Now",
    secondaryCta: "Full registration guide",
    imageAlt: "YES2WIN registration journey visual",
    steps: [
      {
        step: "01",
        title: "Register account",
        description: "Open the official signup flow and create your YES2WIN username.",
      },
      {
        step: "02",
        title: "Enter required details",
        description: "Provide the information requested on the registration form.",
      },
      {
        step: "03",
        title: "Agree to terms",
        description: "Review and accept the applicable platform terms before continuing.",
      },
      {
        step: "04",
        title: "Verify when prompted",
        description: "Complete phone or account verification steps shown on the platform.",
      },
      {
        step: "05",
        title: "Set payment PIN",
        description: "Secure your cashier access with the payment PIN flow when required.",
      },
      {
        step: "06",
        title: "Login & explore",
        description: "Sign in, open the lobby and browse games, promotions and payments.",
      },
    ],
  },

  howToLogin: {
    eyebrow: "Login",
    title: "How to sign in to YES2WIN",
    description:
      "Returning members can move from this partner gateway into the official login flow without recreating a local account form here.",
    primaryCta: "Login",
    secondaryCta: "Registration guide",
    imageAlt: "YES2WIN login and account access visual",
    steps: [
      {
        step: "01",
        title: "Open Login",
        description: "Use the Login button on this site to open the official YES2WIN sign-in page.",
      },
      {
        step: "02",
        title: "Enter credentials",
        description: "Provide the username and password you created during registration.",
      },
      {
        step: "03",
        title: "Complete security checks",
        description: "Finish any verification or security prompts shown by the platform when required.",
      },
      {
        step: "04",
        title: "Access your account",
        description: "Enter the lobby to browse games, promotions, payments and account tools.",
      },
    ],
  },

  account: {
    eyebrow: "Account",
    title: "What you can manage after login",
    description:
      "YES2WIN account tools typically cover profile, security, records, promotions and verification. Exact menus can vary by account status.",
    imageAlt: "YES2WIN account features visual",
    primaryCta: "Full account guide",
    secondaryCta: "Login",
  },

  why: {
    eyebrow: "Why YES2WIN",
    title: "Everything you need before you enter",
    description:
      "Useful orientation across games, payments, offers, VIP, mobile and partner topics — then direct CTAs into the official platform.",
    imageAlt: "Why choose YES2WIN visual",
    imageAltSuffix: "visual",
    cta: "About this partner site",
    items: [
      {
        title: "Multi-category play",
        description: "Slots, live casino, sports, fishing and lottery under one YES2WIN brand.",
      },
      {
        title: "Mobile experience",
        description: "Browse and access the platform from phones without losing clarity.",
      },
      {
        title: "Payment options",
        description: "Bank transfer, e-wallet, DuitNow, online banking and crypto categories where available.",
      },
      {
        title: "Promotions & VIP",
        description: "Offer types and VIP recognition explained before you check live terms.",
      },
      {
        title: "Partner pathways",
        description: "A structured way for partners to share YES2WIN with their audiences.",
      },
      {
        title: "Support orientation",
        description: "FAQ, contact pathways and responsible gaming guidance in one place.",
      },
    ],
  },

  partner: {
    eyebrow: "Partner",
    title: "Build with the YES2WIN ecosystem",
    description:
      "Partner access, referral sharing, marketing resources and tracking — without guaranteed income claims.",
    primaryCta: "Become a Partner",
    secondaryLink: "Explore the partner page",
    imageAlt: "YES2WIN partner ecosystem network visual",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Answers before you dive in",
    description:
      "Useful questions about YES2WIN, registration, games, promotions, payments, mobile access and partner pathways.",
    primaryCta: "Browse all FAQs",
    secondaryLink: "Contact support",
  },

  responsible: {
    eyebrow: "18+",
    title: "Play responsibly",
    description:
      "Keep entertainment recreational. Set limits, take breaks and seek help if gaming stops feeling healthy.",
    cta: "Learn more",
    imageAlt: "Responsible gaming visual",
  },

  finalCta: {
    eyebrow: "Get started",
    title: "Ready to explore YES2WIN?",
    description: "Create your account or log in through this official partner gateway.",
    registerCta: "Register Now",
    loginCta: "Login",
    partnerCta: "Become a Partner",
  },
};

export type HomeCopy = typeof homeEn;
