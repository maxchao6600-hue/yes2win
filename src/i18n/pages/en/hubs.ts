/**
 * Page-level chrome for the hub pages (about, contact, games, promotions, vip,
 * payment, mobile, partner, faq).
 *
 * Only strings that are currently inline in `src/app/**` live here. Anything
 * already sourced from `@/config/content/*` (game categories, promotions,
 * payment methods, VIP sections, partner content, FAQ items) keeps using
 * `@/i18n/get-content`, so it is intentionally absent from this module.
 */
export const hubsEn = {
  about: {
    eyebrow: "About",
    title: "About YES2WIN Official Partner",
    description:
      "An official partner information and access gateway connected to the YES2WIN ecosystem — helping visitors understand games, offers and next steps with clarity.",
    crumb: "About",
    heroImageAlt: "YES2WIN about artwork",
    primaryCta: "Access YES2WIN",
    secondaryCta: "Partner pathway",
    jsonLdName: "About YES2WIN Official Partner",
    jsonLdDescription: "Learn how the YES2WIN Official Partner website works as an information and access gateway.",
    brand: {
      eyebrow: "Brand",
      title: "YES2WIN — YES is the Choice. WIN is the Result.",
      description:
        "YES2WIN is the entertainment brand and platform spanning slots, live casino, sports, fishing and lottery. Members interact with games, payments, promotions and account tools through the official platform.",
      imageAlt: "YES2WIN brand and ecosystem overview artwork",
      platformCard: {
        title: "YES2WIN",
        body: "The multi-category entertainment platform where live play, cashier actions and account tools take place after registration or login.",
      },
      /** Rendered under the `siteConfig.identity` heading. */
      partnerCardBody:
        "This partner website provides orientation, category education and access CTAs while remaining clear about its partner role in the wider ecosystem.",
    },
    ecosystem: {
      eyebrow: "Ecosystem",
      title: "One entertainment world with clear pathways",
      description:
        "YES2WIN brings together multiple entertainment paths in one ecosystem. This partner website helps you understand each area before you continue into the live platform.",
      imageAlt: "YES2WIN ecosystem map visual",
      /** `{title}` is replaced with the card title. */
      exploreLabelTemplate: "Explore {title}",
      items: [
        { title: "Games", body: "Category guides with direct internal links.", href: "/games/" },
        { title: "Promotions", body: "Offer types and how to confirm live terms.", href: "/promotions/" },
        { title: "VIP", body: "Recognition and premium member experience.", href: "/vip/" },
        { title: "Payment", body: "Deposit and withdrawal category education.", href: "/payment/" },
        { title: "Mobile", body: "Phone-friendly access and browsing tips.", href: "/mobile/" },
        { title: "Partner", body: "Sharing journey, resources and support.", href: "/partner/" },
      ],
    },
    games: {
      eyebrow: "Games",
      title: "Entertainment categories at a glance",
      description:
        "Browse the major YES2WIN paths on this partner site, then open the live lobby after Register or Login to see titles available to your account.",
      imageAltSuffix: "category visual",
    },
    offers: {
      eyebrow: "Offers & recognition",
      title: "Promotions and VIP in context",
      description:
        "Understand how offers and member recognition are framed here — then confirm live details inside the official platform.",
      promotions: {
        title: "Promotions",
        body: "Welcome-style offers, deposit campaigns, weekly promotions, rebates and related rewards are explained as categories — never as invented percentages or fixed cash figures on this partner site.",
        primaryCta: "View promotions",
        secondaryCta: "Check live offers",
      },
      vip: {
        title: "VIP experience",
        body: "VIP recognition focuses on service, priority support and curated moments. Benefits are not financial guarantees and are shared through official VIP channels when applicable.",
        primaryCta: "Explore VIP",
        link: "Member FAQ",
      },
    },
    payment: {
      eyebrow: "Payment",
      title: "Deposits and withdrawals explained calmly",
      description:
        "Common payment categories include bank transfer, e-wallet, online banking and cryptocurrency. Exact fees and limits appear in the live cashier after login.",
      primaryCta: "Payment guide",
      secondaryCta: "Payments FAQ",
    },
    mobile: {
      eyebrow: "Mobile",
      title: "YES2WIN on the devices you already use",
      description:
        "Mobile browsing is a core path for category discovery, promotions review and account movement. This partner site routes access through Access YES2WIN / Login rather than unverified store badges.",
      primaryCta: "Mobile guide",
      secondaryCta: "Access YES2WIN",
    },
    partnerRole: {
      eyebrow: "Partner role",
      title: "How this website fits the YES2WIN journey",
      description:
        "This site acts as an information and navigation layer. It explains YES2WIN clearly while linking outward to Register, Login and Partner destinations.",
      imageAlt: "YES2WIN platform access through the partner gateway",
      items: [
        {
          title: "Useful before signup",
          body: "Review category guides, payment overviews, mobile tips, FAQ answers and responsible gaming guidance before you decide to continue.",
        },
        {
          title: "Clear scope",
          body: "Live games, account records, cashier tools, verification and promotions claiming all happen on the official platform after you log in.",
        },
        {
          title: "Partner pathway",
          body: "Creators, communities and referral partners can learn the sharing journey here, then open official partner access when ready.",
        },
        {
          title: "Premium orientation",
          body: "The goal is to make YES2WIN feel coherent and easy to understand instead of behaving like a thin text-only SEO page.",
        },
      ],
    },
    provides: {
      eyebrow: "This website",
      title: "What YES2WIN Official Partner provides",
      description:
        "A calm place to understand the ecosystem, compare pathways and move into official access when you are ready.",
      items: [
        {
          title: "Category orientation",
          body: "Clear guides for games, promotions, VIP, payments and mobile so visitors understand YES2WIN before they continue.",
        },
        {
          title: "Access pathways",
          body: "Register, Login and Partner CTAs route into the official platform destinations connected to this partner gateway.",
        },
        {
          title: "Support navigation",
          body: "FAQ answers, contact pathways and responsible gaming guidance help people find the next practical step.",
        },
        {
          title: "Partner education",
          body: "A dedicated partner journey explains sharing, resources and support without inventing commissions or income guarantees.",
        },
      ],
      quickLinks: [
        { label: "Games", href: "/games/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "VIP", href: "/vip/" },
        { label: "Payment", href: "/payment/" },
        { label: "Mobile", href: "/mobile/" },
        { label: "Partner", href: "/partner/" },
        { label: "FAQ", href: "/faq/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    clarity: {
      eyebrow: "Quick clarity",
      title: "Common questions about this partner site",
      description:
        "Short answers that keep the difference between public guidance and platform actions easy to understand.",
      cards: [
        {
          title: "Is this the main YES2WIN website?",
          body: "No. This is an official partner information and access gateway connected to the YES2WIN ecosystem — not the primary corporate website.",
        },
        {
          title: "Where do live games and payments happen?",
          body: "Live lobbies, cashier tools, verification and account records sit on the official YES2WIN platform after Register or Login.",
        },
        {
          title: "What should I explore first?",
          body: "Start with Games, Promotions, Payment or Mobile depending on your question, then continue into the platform when you are ready.",
        },
        {
          title: "Can partners use these pages?",
          body: "Yes. Public pages can support educational messaging. Do not misrepresent this site as the primary corporate YES2WIN website.",
        },
      ],
    },
    finalCta: {
      title: "Continue into YES2WIN",
      description: "Register or log in through the official platform links connected to this partner gateway.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "How can we help?",
    description:
      "Choose the pathway that matches your question — customer support, account help, payments, registration, login, partner support or general site guidance.",
    crumb: "Contact",
    heroImageAlt: "YES2WIN support artwork",
    primaryCta: "Access YES2WIN",
    secondaryCta: "Browse FAQ",
    jsonLdName: "Contact YES2WIN Official Partner",
    jsonLdDescription: "Support pathways for the YES2WIN Official Partner website.",
    customerSupport: {
      eyebrow: "Customer support",
      title: "Day-to-day platform help",
      note: "For account-specific games, deposits, withdrawals and platform tools, continue through Register or Login so support can be reached inside the official YES2WIN environment when available.",
      registerCta: "Register",
      loginCta: "Login",
    },
    accountHelp: {
      eyebrow: "Account help",
      title: "Profile, security and member tools",
      description:
        "Account settings and security options are managed on the official YES2WIN platform after you sign in.",
      cards: [
        {
          title: "Profile updates",
          body: "Change personal details and review account information inside the live platform account area.",
        },
        {
          title: "Security & recovery",
          body: "Use the official login recovery tools if you cannot sign in, then continue with platform support if needed.",
        },
        {
          title: "Verification prompts",
          body: "Identity or payment checks appear inside the official platform when required for withdrawals or account review.",
        },
      ],
    },
    paymentHelp: {
      eyebrow: "Payment help",
      title: "Deposits, withdrawals and cashier questions",
      description:
        "Review payment categories here, then confirm live methods, limits and verification steps in the cashier after login.",
      cards: [
        {
          title: "Before you deposit",
          body: "Understand common categories such as bank transfer, e-wallet, online banking and cryptocurrency on the Payment page. Exact options depend on region and account status.",
          linkLabel: "Payment guide",
          href: "/payment/",
        },
        {
          title: "Withdrawal readiness",
          body: "Withdrawals may require verification. Follow only the official platform prompts and avoid sharing sensitive details outside those flows.",
          linkLabel: "Payments FAQ",
          href: "/faq/#payments",
        },
      ],
    },
    registrationHelp: {
      eyebrow: "Registration help",
      title: "Create your YES2WIN account",
      description:
        "Use Register to open the official signup flow. This partner site explains the journey and does not recreate the live form locally.",
      primaryCta: "Register Now",
      secondaryCta: "Register guide",
      needCard: {
        title: "What you may need",
        body: "Accurate account details and any verification steps shown during signup. Field labels can change as the platform updates.",
      },
      stuckCard: {
        title: "Stuck during signup?",
        body: "Review the Register Guide and Registration FAQ, then continue through the official form or platform support channels.",
        linkLabel: "Registration FAQ",
        href: "/faq/#registration",
      },
    },
    loginHelp: {
      eyebrow: "Login help",
      title: "Sign in and recover access",
      description:
        "Login opens the official YES2WIN sign-in destination. Password recovery and security checks live there — not as a fake local login on this partner page.",
      openCard: {
        title: "Open Login",
        body: "Continue into the official login page when you already have an account.",
        cta: "Login",
      },
      recoveryCard: {
        title: "Cannot sign in?",
        body: "Confirm your username and password, check your connection, then use the platform recovery option.",
        linkLabel: "Login FAQ",
        href: "/faq/#login",
      },
      mobileCard: {
        title: "Mobile login",
        body: "The same Access YES2WIN / Login pathway works from phone browsers. See the Mobile page for device tips.",
        linkLabel: "Mobile guide",
        href: "/mobile/",
      },
    },
    partnerSupport: {
      eyebrow: "Partner support",
      title: "Onboarding, referrals and partner resources",
      note: "Review the Partner page first for journey steps, resources and FAQ answers, then open partner access when you are ready to continue onboarding.",
      partnerPageCta: "Partner page",
      partnerAccessCta: "Partner access",
      coverageTitle: "What partner support covers",
      coverageItems: [
        "Partner access and onboarding questions",
        "Referral sharing and resource guidance",
        "Where to find live partner terms after access is granted",
      ],
      faqLinkLabel: "Partner FAQ",
      faqHref: "/faq/#partner",
    },
    generalEnquiries: {
      eyebrow: "General enquiries",
      title: "Questions about this partner website",
      links: [
        { label: "About this site", href: "/about/" },
        { label: "FAQ hub", href: "/faq/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
    },
    faqLinks: {
      eyebrow: "FAQ links",
      title: "Start with answers already published",
      description:
        "Many common questions are covered across registration, login, payments, games, mobile and partner topics.",
      links: [
        { label: "Registration FAQ", href: "/faq/#registration" },
        { label: "Login FAQ", href: "/faq/#login" },
        { label: "Payments FAQ", href: "/faq/#payments" },
        { label: "Mobile FAQ", href: "/faq/#mobile" },
        { label: "Partner FAQ", href: "/faq/#partner" },
        { label: "Full FAQ hub", href: "/faq/" },
      ],
    },
    quickLinks: {
      eyebrow: "Quick links",
      title: "Useful next steps across the partner site",
      /** `{title}` is replaced with the card title. */
      openLabelTemplate: "Open {title}",
      items: [
        {
          title: "Games",
          body: "Browse slots, live casino, sports, fishing and lottery guides.",
          href: "/games/",
        },
        {
          title: "Promotions",
          body: "Understand offer types before confirming live terms.",
          href: "/promotions/",
        },
        {
          title: "VIP",
          body: "Learn how recognition and premium service are framed.",
          href: "/vip/",
        },
        {
          title: "Mobile",
          body: "Phone-friendly access tips via Access YES2WIN / Login.",
          href: "/mobile/",
        },
      ],
    },
    finalCta: {
      title: "Need to continue into YES2WIN?",
      description: "Register or log in through the official platform links connected to this partner gateway.",
    },
  },

  games: {
    eyebrow: "Games Hub",
    title: "YES2WIN games in one place",
    description:
      "Browse category guides, studio references and access paths before you open the live lobby for titles available to your account.",
    crumb: "Games",
    heroImageAlt: "YES2WIN games hub artwork",
    primaryCta: "Register Now",
    secondaryCta: "View Promotions",
    jsonLdName: "YES2WIN Games",
    jsonLdDescription: "Explore YES2WIN game categories.",
    featured: {
      eyebrow: "Featured",
      title: "Start with the categories players explore most",
      description:
        "Each card opens a deeper guide. Live titles appear only after you continue into the official platform.",
      imageAltSuffix: "featured visual",
    },
    allCategories: {
      title: "All categories",
      description: "Every major YES2WIN entertainment path with a short guide and next step.",
      imageAltSuffix: "artwork",
      playNowCta: "Play now",
    },
    providers: {
      eyebrow: "Providers",
      title: "Studios referenced by YES2WIN",
      description:
        "These provider names appear in public YES2WIN materials. Game counts and live catalogues stay on the platform.",
    },
    formats: {
      title: "Popular formats",
      description: "A quick map of the play styles members usually look for first.",
      items: [
        { title: "Slots", body: "Theme variety, feature-driven play and mobile-friendly spin cycles." },
        { title: "Live tables", body: "Baccarat, roulette and blackjack where live dealers are available." },
        { title: "Sports markets", body: "Football, basketball, tennis and other supported events." },
        { title: "Fishing sessions", body: "Interactive targeting and arcade-style catch mechanics." },
        { title: "Lottery / 4D", body: "Number-led draw formats with simpler participation flows." },
      ],
    },
    mobile: {
      eyebrow: "Mobile gaming",
      title: "Browse on phone, play when ready",
      description:
        "Category guides stay readable on smaller screens. Live streaming categories benefit from a stable connection.",
      imageAlt: "YES2WIN mobile gaming visual",
      primaryCta: "Mobile guide",
      secondaryCta: "Access YES2WIN",
    },
    access: {
      howToCard: {
        title: "How to access games",
        body: "Register or log in through this partner gateway, then open the live lobby and choose a category available to your account.",
      },
      promotionsCard: {
        title: "Related promotions",
        body: "Welcome, deposit and weekly campaigns often sit alongside game discovery. Confirm live terms before opting in.",
        linkLabel: "Promotions hub",
      },
      vipPaymentsCard: {
        title: "VIP & payments",
        body: "Member recognition and cashier tools live on the platform. Use the VIP and Payment pages here for orientation first.",
        vipLinkLabel: "VIP",
        paymentLinkLabel: "Payment",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Games questions",
      description: "Short answers before you continue into the live lobby.",
      items: [
        {
          id: "g1",
          question: "Where do I play YES2WIN games?",
          answer:
            "Games open in the official YES2WIN lobby after you register or log in. This partner site explains categories and routes you into that platform.",
        },
        {
          id: "g2",
          question: "Which studios are referenced by YES2WIN?",
          answer:
            "Public YES2WIN materials reference Evolution Gaming, Pragmatic Play, SA Gaming, CMD368 and Playtech. Live catalogues can still vary by region and account.",
        },
        {
          id: "g3",
          question: "Can I browse games on mobile?",
          answer:
            "Yes. Category pages and the live lobby are designed for phone browsing when your connection and browser are ready.",
        },
      ],
      links: [
        { label: "Full games FAQ", href: "/faq/#games" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
        { label: "Registration guide", href: "/register-guide/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    finalCta: {
      title: "Enter the YES2WIN lobby",
      description: "Register or log in to browse live game categories on the official platform.",
    },
  },

  promotions: {
    eyebrow: "Promotions",
    title: "YES2WIN offers explained clearly",
    description:
      "Explore welcome, deposit, weekly, cashback, VIP and special campaign types — then confirm live terms on the official platform before you opt in.",
    crumb: "Promotions",
    heroImageAlt: "YES2WIN promotions artwork",
    primaryCta: "Register Now",
    secondaryCta: "Explore Games",
    jsonLdName: "YES2WIN Promotions",
    jsonLdDescription: "Promotion types available across the YES2WIN experience.",
    featuredCampaign: {
      eyebrow: "Featured campaign",
      title: "Have You YES2WIN Welcome Bonus",
      body: "YES2WIN publicly references a Have You YES2WIN Welcome Bonus designed to help new members start with extra value. Exact percentages, deposit rules and wagering change over time — check the latest offer on the official platform before you opt in.",
      note: "This partner page explains the campaign type. Live eligibility and full terms always come from the platform promotions lobby after login.",
      primaryCta: "Register Now",
      secondaryCta: "Promotions FAQ",
      imageAlt: "YES2WIN welcome bonus campaign artwork",
    },
    detail: {
      whoForLabel: "Who it is for:",
      howToCheckLabel: "How to check:",
      whereTermsLabel: "Where terms live:",
      eligibilityLabel: "Eligibility note:",
      registerCta: "Register Now",
      vipCta: "VIP overview",
      termsCta: "Site terms",
      featuredBadge: "Featured",
      imageAltSuffix: "artwork",
    },
    guide: {
      eyebrow: "Promotion guide",
      title: "How to read YES2WIN offers",
      description:
        "Use this partner guide to understand campaign structure, then rely on the live platform for current values and rules.",
      points: [
        {
          title: "Start with the campaign card",
          body: "Each live offer summarises who it is for and what actions unlock it. Use the card as your first filter before reading deeper terms.",
        },
        {
          title: "Confirm eligibility in-account",
          body: "Region, account age, prior claims and verification status can all affect what you see. Availability on this partner site is educational only.",
        },
        {
          title: "Treat terms as the source of truth",
          body: "Percentages, amounts, wagering and expiry windows change. Always rely on the official platform wording at the moment you opt in.",
        },
        {
          title: "Ask support when unclear",
          body: "If a campaign rule is ambiguous, use official contact channels rather than assuming a figure published elsewhere.",
        },
      ],
    },
    claim: {
      eyebrow: "How to claim",
      title: "A practical path into live promotions",
      description:
        "Claiming happens on the official platform. This outline helps you move from orientation to opt-in without guessing hidden terms.",
      steps: [
        {
          step: "01",
          title: "Register or log in",
          description:
            "Create an account or sign in through this partner gateway so you can open the official promotions lobby.",
        },
        {
          step: "02",
          title: "Open Promotions",
          description:
            "Browse active campaign cards on the platform. Featured and category offers appear only when they are live for your account.",
        },
        {
          step: "03",
          title: "Read the full terms",
          description:
            "Review eligibility, opt-in rules, wagering and expiry details next to each offer before you participate.",
        },
        {
          step: "04",
          title: "Opt in or deposit as required",
          description:
            "Follow the on-screen steps for that campaign. Some offers need an opt-in; others link to a qualifying deposit path.",
        },
      ],
    },
    eligibility: {
      eyebrow: "Eligibility",
      title: "Who can join a campaign",
      description:
        "Eligibility is defined per offer. New-member campaigns, deposit boosts and VIP rewards each follow their own rules.",
      commonFactors: {
        title: "Common factors",
        body: "Account status, prior claims, region and verification can all influence whether an offer appears. The featured welcome path is typically oriented toward newly registered members who meet live campaign rules.",
      },
      /** Body text is composed from the featured promotion in `@/config/content/promotions`. */
      featuredContextTitle: "Featured welcome context",
    },
    termsNote: {
      eyebrow: "Terms note",
      title: "Always confirm live wording",
      description: "This partner site does not invent promo amounts, fees, limits or income guarantees.",
      changeLead: "Campaign terms change.",
      changeBody: "Percentages, wagering and expiry windows can update without notice on this informational page.",
      platformLead: "Platform wording wins.",
      platformBody: "If anything here differs from an official campaign card, follow the platform.",
      /** Body text comes from the featured promotion's own terms note. */
      readLead: "Read before you deposit.",
      rulesLead: "Need broader rules?",
      rulesBefore: "Review the ",
      rulesLinkLabel: "site terms overview",
      rulesAfter: " and responsible gaming guidance.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Promotion questions",
      description: "Short answers about welcome offers, eligibility and where live terms appear.",
      items: [
        {
          id: "promo-1",
          question: "Does YES2WIN have a welcome bonus?",
          answer:
            "YES2WIN publicly references a Have You YES2WIN Welcome Bonus. Exact live terms — including any percentages, deposit rules and wagering — must be checked on the official platform before you opt in.",
        },
        {
          id: "promo-2",
          question: "Why doesn’t this page list exact offer amounts?",
          answer:
            "Promotion values change over time and can differ by account or region. This partner site explains offer types without inventing figures that may be outdated.",
        },
        {
          id: "promo-3",
          question: "How do I know if I am eligible?",
          answer:
            "Eligibility is confirmed inside your account after login. Campaign cards and terms describe who can join; if an offer is not shown, it is usually unavailable for your account at that time.",
        },
        {
          id: "promo-4",
          question: "Where do VIP-related rewards appear?",
          answer:
            "VIP-oriented benefits are often shared through VIP channels or invitation-led communications. Browse the VIP page for experience context, then confirm live rewards on the platform.",
        },
      ],
    },
    related: {
      eyebrow: "Related",
      title: "Continue exploring YES2WIN",
      description: "Pair promotions with games, VIP context, payments and support pathways.",
      links: [
        { label: "Browse games", href: "/games/" },
        { label: "VIP benefits", href: "/vip/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Promotions FAQ", href: "/faq/#promotions" },
        { label: "Terms overview", href: "/terms/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    finalCta: {
      title: "Ready to check live YES2WIN promotions?",
      description:
        "Register or log in to open the official promotions lobby and confirm current campaign terms.",
    },
  },

  vip: {
    eyebrow: "VIP",
    /** Hero title comes from `vipContent.headline`. */
    description:
      "A more personal way to enjoy YES2WIN — recognition, thoughtful support and curated moments, without guaranteed financial outcomes.",
    crumb: "VIP",
    heroImageAlt: "YES2WIN VIP artwork",
    primaryCta: "Register Now",
    secondaryCta: "View Promotions",
    jsonLdName: "YES2WIN VIP",
    jsonLdDescription: "Premium member experience overview for YES2WIN.",
    intro: {
      eyebrow: "Introduction",
      title: "A recognition-led member journey",
      imageAlt: "YES2WIN VIP experience artwork",
      registerCta: "Register Now",
      contactCta: "Contact pathways",
    },
    benefits: {
      eyebrow: "Benefits",
      title: "What the VIP experience emphasises",
      description:
        "Curated advantages that enhance how you engage with YES2WIN — communicated through official channels when membership status qualifies.",
    },
    personalised: {
      eyebrow: "Personalised",
      title: "Service shaped around how you engage",
      description:
        "Expect communications and service touchpoints that consider how you like to play — rather than generic mass messaging.",
      imageAlt: "Personalised YES2WIN VIP service",
      items: [
        "Relevant updates instead of one-size outreach",
        "Attention to preferences shared through official VIP pathways",
        "A calmer, more considered member relationship over time",
      ],
    },
    prioritySupport: {
      eyebrow: "Priority support",
      title: "Elevated attention when available",
      description:
        "VIP members may receive elevated support pathways so account questions can be handled with greater attention when those channels are available.",
      note: "Support quality still depends on live programme capacity and account context. Use official contact routes and follow verification prompts when requested.",
      cta: "View contact options",
      imageAlt: "YES2WIN VIP priority support",
    },
    events: {
      eyebrow: "Exclusive events",
      title: "Invitations beyond the everyday calendar",
      description:
        "Selected invitations and event-style moments may be shared with VIP members as part of a more exclusive calendar.",
      note: "Event availability and formats are defined by the official programme. This page does not invent guest lists, prize pools or attendance guarantees.",
      imageAlt: "YES2WIN VIP exclusive events",
    },
    recognition: {
      eyebrow: "Recognition & rewards",
      title: "Appreciation without invented figures",
      description:
        "Reward and recognition structures focus on appreciation for ongoing engagement. Details are provided through the official programme rather than fixed public cash promises.",
      cards: [
        {
          title: "Member recognition",
          body: "VIP positioning highlights appreciation for sustained engagement inside the YES2WIN ecosystem.",
        },
        {
          title: "Programme-defined rewards",
          body: "Any rewards are defined by live VIP rules and communications — not by invented amounts on this partner site.",
        },
      ],
      /** Body text comes from `vipContent.disclaimer`. */
      disclaimerCardTitle: "Transparent disclaimer",
    },
    journey: {
      eyebrow: "VIP journey",
      title: "How the path typically unfolds",
      description:
        "A high-level journey from everyday membership to VIP communications — without inventing tier ladders or cash milestones.",
      steps: [
        {
          step: "01",
          title: "Engage with YES2WIN",
          description:
            "Register, explore games and participate as a member. VIP recognition is managed through official platform pathways.",
        },
        {
          step: "02",
          title: "Receive programme signals",
          description:
            "When VIP status or invitations apply, relevant communications appear in account channels rather than as invented public tier charts.",
        },
        {
          step: "03",
          title: "Experience curated service",
          description:
            "Personalised touchpoints, priority support pathways and selected invitations may follow as your membership journey develops.",
        },
        {
          step: "04",
          title: "Stay informed on rewards",
          description:
            "Recognition and rewards details are shared through the official VIP programme — not as fixed public cash guarantees.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How VIP works",
      title: "What this partner page can — and cannot — tell you",
      description:
        "Use this overview for orientation. Confirm membership status, invitations and rewards through official YES2WIN channels.",
      items: [
        {
          title: "Official channels only",
          body: "VIP details are communicated through the platform and authorised VIP contacts. This partner site explains the experience without publishing invented tiers.",
        },
        {
          title: "Status can vary",
          body: "Membership recognition depends on programme rules and availability. Benefits may differ between members and can change over time.",
        },
        {
          title: "Not a financial promise",
          body: "VIP positioning focuses on service, recognition and curated moments. It is not a guarantee of income, bonuses or fixed payout figures.",
        },
        {
          title: "Pair with promotions",
          body: "Some VIP-oriented rewards may relate to offers explained on the Promotions page — always confirm live wording after login.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "VIP questions",
      description: "Clear answers about access, guarantees and related offers.",
      links: [
        { label: "Promotions hub", href: "/promotions/" },
        { label: "Member FAQ", href: "/faq/" },
        { label: "Contact", href: "/contact/" },
      ],
      items: [
        {
          id: "vip-1",
          question: "How do I learn if VIP is available to me?",
          answer:
            "VIP status and invitations are managed on the official platform. After you register and play, relevant communications appear in your account channels when applicable.",
        },
        {
          id: "vip-2",
          question: "Are VIP benefits guaranteed?",
          answer:
            "No. Benefits are not financial guarantees and may change based on programme rules, availability and membership status.",
        },
        {
          id: "vip-3",
          question: "Where can I read related offers?",
          answer:
            "Browse the Promotions page for offer types, then confirm live VIP-related campaigns inside the platform after login.",
        },
        {
          id: "vip-4",
          question: "Does this page list VIP tiers or cash rewards?",
          answer:
            "No. This partner site does not invent VIP tiers, cash figures or income promises. Programme specifics are shared through official YES2WIN VIP channels.",
        },
      ],
    },
    finalCta: {
      title: "Start your YES2WIN journey",
      description:
        "Register to explore member experiences on the official platform — VIP details appear through authorised channels when applicable.",
    },
  },

  payment: {
    eyebrow: "Payment",
    title: "Deposit and withdrawal overview",
    description:
      "A clear guide to payment categories associated with YES2WIN — bank transfer, e-wallets, online banking, bank cards and crypto. Availability depends on region, account status and the live platform cashier.",
    crumb: "Payment",
    heroImageAlt: "YES2WIN payment artwork",
    primaryCta: "Register Now",
    secondaryCta: "Payments FAQ",
    jsonLdName: "YES2WIN Payment Methods",
    jsonLdDescription: "Payment method categories for YES2WIN.",
    overview: {
      eyebrow: "Overview",
      title: "How YES2WIN payments are organised",
      description:
        "This partner page explains verified method categories so you know what to look for in the cashier. Fees, limits and processing times are confirmed only on the official platform.",
      cards: [
        {
          title: "Verified categories",
          body: "Bank Transfer, E-Wallet (TNG, DuitNow, GrabPay), Online Banking, Bank Cards and Crypto are referenced for YES2WIN where supported.",
        },
        {
          title: "Live cashier decides",
          body: "The methods you see after login reflect your region and account status — not every icon on this page will appear for every member.",
        },
        {
          title: "No invented figures",
          body: "This site does not publish fixed fees, deposit limits, withdrawal caps or guaranteed processing times.",
        },
        {
          title: "Records stay in-account",
          body: "Transaction history, verification prompts and payout status live inside the official platform tools.",
        },
      ],
    },
    visuals: {
      eyebrow: "Method visuals",
      title: "Payment channels at a glance",
      description:
        "Visual icons for commonly referenced YES2WIN payment pathways. Use them as orientation — then confirm what is enabled in your cashier.",
      iconAltSuffix: "icon",
      methods: [
        { id: "bank", label: "Bank Transfer" },
        { id: "ewallet", label: "E-Wallet" },
        { id: "duitnow", label: "DuitNow" },
        { id: "tng", label: "Touch n Go" },
        { id: "online", label: "Online Banking" },
        { id: "crypto", label: "Crypto" },
        { id: "cards", label: "Bank Cards" },
        { id: "grab", label: "GrabPay" },
      ],
    },
    methodDetail: {
      registerCta: "Register Now",
      faqCta: "Payments FAQ",
      iconAltSuffix: "payment icon",
    },
    ewalletBrands: {
      eyebrow: "E-Wallet brands",
      title: "DuitNow, Touch n Go and GrabPay",
      description:
        "YES2WIN references DuitNow, TNG and GrabPay among e-wallet style options. Whether each brand appears depends on market support and your account.",
      iconAltSuffix: "icon",
    },
    currency: {
      eyebrow: "Currency support",
      title: "What this page can say about currencies",
      description:
        "Currency and crypto asset support is determined by the live platform. This partner site does not invent exchange rates, network fees or settlement times.",
      local: {
        title: "Local banking & e-wallets",
        body: "Bank transfer, online banking, cards and e-wallet brands appear according to regional cashier configuration. Supported banks and wallets are listed inside your account when eligible.",
      },
      crypto: {
        title: "Crypto coins referenced",
        body: "Where cryptocurrency is enabled, YES2WIN references supported coins such as BTC, ETH and USDT. Confirm networks, wallet requirements and confirmation steps at checkout — fees and limits are not published as fixed figures here.",
      },
    },
    deposits: {
      eyebrow: "Deposits",
      title: "Deposit guide",
      description: "A practical outline for funding your account through the official cashier.",
      steps: [
        "Sign in through this partner gateway and open the official cashier.",
        "Choose an available deposit method shown for your account and region.",
        "Follow the on-screen steps for that channel — bank, e-wallet, card or crypto.",
        "Confirm the transaction status in your account records after submission.",
      ],
    },
    withdrawals: {
      eyebrow: "Withdrawals",
      title: "Withdrawal guide",
      description: "Request payouts through supported methods and complete any checks the platform asks for.",
      steps: [
        "Open withdrawals from your account once funds are available to request.",
        "Select a supported payout method displayed in the live cashier.",
        "Complete any verification or payment-detail checks requested by the platform.",
        "Track the request in transaction history and respond to follow-up prompts if asked.",
      ],
    },
    safety: [
      {
        title: "Verification",
        body: "Identity or payment verification may be required before certain withdrawals. Follow official platform prompts and avoid sharing documents through unofficial channels.",
      },
      {
        title: "Transaction records",
        body: "Deposits, withdrawals and status updates are recorded in your account history. Use those records when checking progress or contacting support.",
      },
      {
        title: "Fees & limits",
        body: "Fees, minimums, maximums and processing times are not published as fixed figures on this partner site because they vary. Confirm them in the live cashier.",
      },
    ],
    issues: {
      eyebrow: "Common issues",
      title: "What to check when something looks wrong",
      description:
        "Most payment questions start with availability, pending status or verification — not with inventing new fee tables.",
      items: [
        {
          title: "Method not visible",
          body: "Availability depends on region, account status and live cashier configuration. If a channel is missing, it is usually unsupported for your account at that time.",
        },
        {
          title: "Pending transaction",
          body: "Some methods need bank or network confirmation. Review your transaction records and wait for the platform status update before submitting duplicates.",
        },
        {
          title: "Verification required",
          body: "Identity or payment verification may be requested before certain withdrawals. Use only official upload flows inside your account.",
        },
        {
          title: "Incorrect payment details",
          body: "Double-check account names, wallet addresses and bank references before confirming. Mismatched details can delay processing.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Payment questions",
      description: "Need more detail? Continue to the full FAQ or contact pathways.",
      links: [
        { label: "Full payments FAQ", href: "/faq/#payments" },
        { label: "Related promotions", href: "/promotions/" },
        { label: "Browse games", href: "/games/" },
        { label: "Contact support", href: "/contact/" },
      ],
      items: [
        {
          id: "pay-1",
          question: "Which payment methods can I use?",
          answer:
            "YES2WIN references Bank Transfer, E-Wallet options (including TNG, DuitNow and GrabPay where supported), Online Banking, Bank Cards and Cryptocurrency. Exact availability depends on region, account status and the live cashier.",
        },
        {
          id: "pay-2",
          question: "Are fees and limits listed here?",
          answer:
            "No. Exact fees, minimums, maximums and processing times change and must be confirmed in your cashier after login. This partner page does not invent those figures.",
        },
        {
          id: "pay-3",
          question: "Which cryptocurrencies are mentioned?",
          answer:
            "YES2WIN references supported coins such as BTC, ETH and USDT where crypto payments are enabled. Networks, confirmation requirements and availability are shown at checkout on the platform.",
        },
        {
          id: "pay-4",
          question: "Do I need verification for withdrawals?",
          answer:
            "Many platforms require identity or payment verification before larger withdrawals. Follow the prompts shown in your account and use official document upload tools only.",
        },
      ],
    },
    finalCta: {
      title: "Ready to use YES2WIN payments?",
      description:
        "Register or log in to open the official cashier and confirm the methods available for your account.",
    },
  },

  mobile: {
    eyebrow: "Mobile",
    title: "YES2WIN, built for mobile",
    description:
      "Browse categories, manage access and move into the YES2WIN platform from your phone — with responsive layouts and clear touch targets. Continue through Access YES2WIN / Login rather than unverified store downloads.",
    crumb: "Mobile",
    heroImageAlt: "YES2WIN mobile artwork",
    primaryCta: "Access YES2WIN",
    secondaryCta: "Login",
    jsonLdName: "YES2WIN Mobile",
    jsonLdDescription: "Mobile experience guidance for YES2WIN through this official partner gateway.",
    browser: {
      eyebrow: "Mobile browser",
      title: "A clear default path on your phone",
      description:
        "Use a modern mobile browser to open this partner site and continue into the official YES2WIN platform. YES2WIN publicly discusses mobile apps and browser access, but this partner site does not invent store badges or fake download buttons.",
      imageAlt: "YES2WIN mobile browser experience",
      cards: [
        {
          title: "Responsive layouts",
          body: "Menus, cards and CTAs adapt for common phone widths so you can move between Games, Promotions, VIP and Partner without pinch-zooming.",
        },
        {
          title: "Official access CTAs",
          body: "Access YES2WIN and Login route into the configured platform destinations instead of unofficial APK or store shortcuts.",
        },
        {
          title: "Readable guides",
          body: "Category pages and offer explanations stay readable on small screens before you enter the live lobby.",
        },
        {
          title: "Touch-friendly actions",
          body: "Primary buttons stay large enough for thumb use when you are ready to register, log in or open partner access.",
        },
      ],
    },
    devices: {
      eyebrow: "Devices",
      title: "Android and iOS browser access",
      description:
        "Phone and tablet browsers can open the same partner guidance, registration flow and account entry points.",
      android: {
        title: "Android",
        body: "Android users can move from this partner site into the official YES2WIN platform through Access YES2WIN / Login without relying on unverified third-party downloads published here.",
        bullets: [
          "Open the partner pages in a current Chrome or system browser.",
          "Continue into Register or Login when you are ready for the live platform.",
        ],
      },
      ios: {
        title: "iOS",
        body: "iPhone and iPad browsers can access the same partner guidance, registration flow and account entry points. This page does not claim App Store availability or publish store badges.",
        bullets: [
          "Use Safari or another up-to-date browser for the clearest layouts.",
          "Keep a stable connection before opening live-streamed categories.",
        ],
      },
    },
    games: {
      eyebrow: "Mobile games",
      title: "Categories that travel well on a phone",
      description:
        "Slots, live casino, sports, fishing and lottery can all be explored from mobile once you continue into the official lobby.",
      imageAltSuffix: "mobile category artwork",
    },
    promotionsCard: {
      eyebrow: "Promotions",
      title: "Review offers on a smaller screen",
      description:
        "Promotion categories stay readable on mobile so you can understand offer types before confirming live terms inside the platform.",
      imageAlt: "YES2WIN mobile promotions artwork",
      primaryCta: "Promotions hub",
      secondaryCta: "Access YES2WIN",
    },
    accountCard: {
      eyebrow: "Account access",
      title: "Register and login from your phone",
      description:
        "Account creation, sign-in, security prompts and profile tools continue inside the official platform environment after you tap Access YES2WIN or Login.",
      imageAlt: "YES2WIN mobile account access artwork",
      registerCta: "Register",
      loginCta: "Login",
      guideCta: "Register guide",
    },
    payments: {
      eyebrow: "Payments",
      title: "Cashier pathways on mobile",
      description:
        "Deposit and withdrawal categories can be reviewed here, then completed in the live cashier after login when those methods are available to your account.",
      imageAlt: "YES2WIN mobile cashier pathway visual",
      cta: "Payment guide",
      cards: [
        {
          title: "Category education first",
          body: "Bank transfer, e-wallet, online banking and crypto are explained as categories — not fixed fees or limits.",
        },
        {
          title: "Live cashier after login",
          body: "Exact options, verification prompts and processing details appear inside the official platform.",
        },
      ],
    },
    tips: {
      eyebrow: "Navigation tips",
      title: "Move through YES2WIN more comfortably on mobile",
      description: "Small habits that keep browsing, signup and live play easier on a phone.",
      items: [
        "Use the sticky Register and Login actions when you are ready to continue into the official platform.",
        "Start with Games, Promotions, Payment or FAQ if you want context before signup.",
        "Keep one browser tab for this partner guide and another for the live platform if you are comparing pathways.",
        "Switch to a stronger network before opening live-streamed or animation-heavy categories.",
      ],
    },
    howToAccess: {
      eyebrow: "How to access",
      title: "From this partner site to the live platform",
      description:
        "Mobile is not a reduced YES2WIN experience. It is the day-to-day path for browsing categories, checking promotions, handling payments and moving between account tools.",
      imageAlt: "YES2WIN mobile phone visual",
      steps: [
        "Open this Mobile page or any partner guide on your phone browser.",
        "Review games, promotions, payments or FAQ content as needed.",
        "Tap Access YES2WIN or Login to continue into the official platform.",
        "Complete account, cashier or lobby actions inside that live environment.",
      ],
      primaryCta: "Access YES2WIN",
      secondaryCta: "Explore Games",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Mobile questions",
      description:
        "Short answers about browser-based access, public app discussion and how this partner site routes you into YES2WIN.",
      items: [
        {
          id: "mobile-1",
          question: "Do I need to download an app from this site?",
          answer:
            "No. This partner website focuses on browser access and routes you through Access YES2WIN / Login. It does not publish App Store or Google Play badges or unverified download buttons.",
        },
        {
          id: "mobile-2",
          question: "Does YES2WIN discuss mobile apps publicly?",
          answer:
            "YES2WIN publicly discusses mobile apps and browser access. On this partner site, the practical next step remains Access YES2WIN or Login so you continue into the official platform environment.",
        },
        {
          id: "mobile-3",
          question: "What can I do on mobile after login?",
          answer:
            "Once you continue into the official platform, you can browse games, review promotions, open the cashier and manage account access using your mobile browser when those features are enabled for your account.",
        },
        {
          id: "mobile-4",
          question: "Why might live tables feel slower on mobile data?",
          answer:
            "Live dealer streams are more connection-sensitive than static pages. A stable network and an up-to-date browser usually provide the smoothest experience.",
        },
      ],
      links: [
        { label: "Full mobile FAQ", href: "/faq/#mobile" },
        { label: "Explore games", href: "/games/" },
        { label: "Partner page", href: "/partner/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    finalCta: {
      title: "Access YES2WIN on your device",
      description:
        "Open the official platform experience from your mobile browser through Access YES2WIN or Login.",
    },
  },

  partner: {
    eyebrow: "Partner",
    /** Hero title and description come from `partnerContent`. */
    crumb: "Partner",
    heroImageAlt: "YES2WIN partner ecosystem artwork",
    primaryCta: "Become a Partner",
    secondaryCta: "About this site",
    jsonLdName: "YES2WIN Partner",
    whyPartner: {
      eyebrow: "Why partner",
      title: "Reasons partners choose YES2WIN",
      description:
        "Focus on brand clarity, multi-category entertainment and a practical onboarding path — without guaranteed income claims.",
      imageAlt: "YES2WIN partner ecosystem visual",
    },
    audience: {
      eyebrow: "Audience",
      title: "Who can partner with YES2WIN",
      description:
        "The partner pathway is built for people who introduce YES2WIN clearly — creators, communities, marketers and referral-focused collaborators.",
    },
    journey: {
      eyebrow: "Partner journey",
      title: "From access to progress tracking",
      description: "A practical sequence that keeps onboarding, sharing and review easy to understand.",
      primaryCta: "Start partner access",
      secondaryCta: "Partner support",
    },
    referral: {
      eyebrow: "Referral system",
      title: "Share YES2WIN through an official pathway",
      description:
        "Referral sharing starts after partner access is active. Keep messaging educational and avoid inventing commercial figures.",
      imageAlt: "YES2WIN partner referral network visual",
    },
    marketing: {
      eyebrow: "Marketing resources",
      title: "Educational materials for partner growth",
      description:
        "Lean on public partner-site pages to explain YES2WIN categories, offers and access routes with brand-safe clarity.",
    },
    brandAssets: {
      eyebrow: "Brand assets",
      title: "Position YES2WIN the right way",
      description:
        "Use approved identity language so audiences understand both the YES2WIN brand and this partner gateway’s role.",
      imageAlt: "YES2WIN partner brand and resource materials",
    },
    contentResources: {
      eyebrow: "Content resources",
      title: "Pages you can reference when educating audiences",
      description:
        "Point people to public guides on this partner site, then route them into Register, Login or Partner access when they are ready.",
      links: [
        { label: "Games hub", href: "/games/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Mobile access", href: "/mobile/" },
        { label: "FAQ", href: "/faq/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
    },
    tracking: {
      eyebrow: "Tracking",
      title: "Review progress through official partner tools",
      description:
        "Tracking becomes available after partner access is granted. Visibility depends on your account and the tools enabled for you.",
      imageAlt: "YES2WIN partner progress tracking visual",
    },
    support: {
      eyebrow: "Partner support",
      title: "Help for onboarding, sharing and next steps",
      description:
        "Use public guidance first, then continue through official partner support channels when your question is account-specific.",
      primaryCta: "Open contact hub",
      secondaryCta: "Partner FAQ",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Partner questions",
      description: "Short answers about income expectations, terms, materials and who the pathway is for.",
      links: [
        { label: "More partner FAQ", href: "/faq/#partner" },
        { label: "Partner support", href: "/contact/" },
        { label: "About the partner site", href: "/about/" },
      ],
    },
    finalCta: {
      title: "Ready to build with YES2WIN?",
      description:
        "Open the official partner access flow when you are ready to continue — no guaranteed income, just a clear next step.",
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description:
      "Concise answers on account access, categories, promotions, payments, mobile, partner topics and responsible play.",
    crumb: "FAQ",
    heroImageAlt: "YES2WIN FAQ artwork",
    primaryCta: "Register Now",
    secondaryCta: "Login",
    jsonLdName: "YES2WIN FAQ",
    jsonLdDescription: "Frequently asked questions about YES2WIN and this official partner website.",
    /** Keyed by FAQ category id from `getFaqCategories`. */
    relatedLinks: {
      general: [
        { label: "About this site", href: "/about/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
      account: [{ label: "Contact", href: "/contact/" }],
      registration: [],
      login: [],
      games: [
        { label: "Games overview", href: "/games/" },
        { label: "Slots", href: "/games/slots/" },
        { label: "Live casino", href: "/games/live-casino/" },
      ],
      slots: [
        { label: "Slots guide", href: "/games/slots/" },
        { label: "Promotions", href: "/promotions/" },
      ],
      "live-casino": [
        { label: "Live casino guide", href: "/games/live-casino/" },
        { label: "Mobile", href: "/mobile/" },
      ],
      sports: [
        { label: "Sports guide", href: "/games/sports/" },
        { label: "Mobile", href: "/mobile/" },
      ],
      fishing: [
        { label: "Fishing guide", href: "/games/fishing/" },
        { label: "Games overview", href: "/games/" },
      ],
      lottery: [
        { label: "Lottery guide", href: "/games/lottery/" },
        { label: "Games overview", href: "/games/" },
      ],
      promotions: [
        { label: "Promotions hub", href: "/promotions/" },
        { label: "Terms", href: "/terms/" },
      ],
      vip: [
        { label: "VIP overview", href: "/vip/" },
        { label: "Promotions", href: "/promotions/" },
      ],
      payments: [
        { label: "Payment guide", href: "/payment/" },
        { label: "Contact", href: "/contact/" },
      ],
      deposit: [
        { label: "Payment guide", href: "/payment/" },
        { label: "Promotions", href: "/promotions/" },
      ],
      withdrawal: [
        { label: "Payment guide", href: "/payment/" },
        { label: "Contact", href: "/contact/" },
      ],
      mobile: [
        { label: "Mobile page", href: "/mobile/" },
        { label: "Games", href: "/games/" },
      ],
      partner: [
        { label: "Partner programme", href: "/partner/" },
        { label: "Contact", href: "/contact/" },
      ],
      security: [{ label: "Privacy policy", href: "/privacy/" }],
      "responsible-gaming": [
        { label: "Responsible gaming page", href: "/responsible-gaming/" },
        { label: "Contact", href: "/contact/" },
      ],
    } as Record<string, Array<{ label: string; href: string }>>,
  },

  /**
   * Chrome for the individual `/games/<category>/` pages rendered by
   * `@/components/games/GameCategoryPage`. Category names, intros and
   * `whatToExpect` bullets keep coming from `getGameCategories`.
   */
  gameCategory: {
    eyebrow: "YES2WIN Games",
    /** `{category}` is replaced with the category short name. */
    imageAltTemplate: "{category} category artwork",
    allCategoriesCta: "All categories",
    whatToExpectTitle: "What to expect",
    suitedTitle: "Who this category suits",
    access: {
      title: "How to access",
      /** `{category}` is replaced with the category short name. */
      bodyTemplate:
        "Register or log in through this partner gateway, then open the live YES2WIN lobby to browse {category} content available for your region and account.",
    },
    mobileCard: {
      title: "Mobile access",
      /** `{category}` is replaced with the category short name. */
      bodyTemplate:
        "{category} fits naturally into the wider mobile experience when your browser and connection are ready for it.",
      linkLabel: "Mobile experience",
      href: "/mobile/",
    },
    supportCard: {
      title: "Offers & support",
      body: "Related campaigns and support pathways live across the Promotions, FAQ and Responsible Gaming pages.",
      links: [
        { label: "Promotions", href: "/promotions/" },
        { label: "Games FAQ", href: "/faq/#games" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
        { label: "VIP", href: "/vip/" },
      ],
    },
    questions: {
      title: "Quick questions",
      description:
        "Practical answers before you continue into the official platform for live category details.",
    },
    finalCta: {
      /** `{category}` is replaced with the category short name. */
      titleTemplate: "Ready to try {category}?",
      description: "Open the official YES2WIN platform to browse the live lobby for this category.",
    },
    details: {
      slots: {
        formatTitle: "Game formats & themes",
        formatItems: [
          "Classic, modern and feature-driven slot styles can appear in the live lobby.",
          "Themes often range from simple icons to high-energy fantasy, adventure or character-led visuals.",
          "Short spin cycles make slots easy to sample in mobile sessions.",
        ],
        suitedFor: [
          "Players who want easy entry and fast browsing.",
          "Members looking for variety across themes and pacing.",
          "Mobile-first players who prefer touch-friendly gameplay.",
        ],
        relatedTitle: "Related promotions",
        relatedCopy:
          "Welcome and deposit-style offers are often the first place members look when exploring slot play. Confirm active terms inside the official promotions area.",
        faq: [
          {
            id: "slots-faq-1",
            question: "How do I find slot titles on YES2WIN?",
            answer:
              "Register or log in, then browse the slot area inside the live YES2WIN lobby to see the titles currently available to your account.",
          },
          {
            id: "slots-faq-2",
            question: "Can I play slots on mobile?",
            answer:
              "Yes. Slot layouts are generally well suited to mobile browsing and touch controls when the title is enabled on your device.",
          },
        ],
      },
      "live-casino": {
        formatTitle: "Live table experience",
        formatItems: [
          "Live dealer tables can include familiar formats such as baccarat, roulette and blackjack where available.",
          "Streaming presentation is designed to recreate table energy with real-time dealing and interface controls.",
          "Stable connectivity matters more here than for simpler category pages because the experience depends on live video.",
        ],
        suitedFor: [
          "Players who want a more immersive table-game environment.",
          "Members who enjoy real-time pace rather than automated rounds.",
          "Users comfortable switching between table views and account controls on mobile.",
        ],
        relatedTitle: "Access & etiquette",
        relatedCopy:
          "Live casino is best approached with a stable network, clear bankroll limits and enough time to follow each table flow. Keep sessions intentional and recreational.",
        faq: [
          {
            id: "live-faq-1",
            question: "Which live casino games might be available?",
            answer:
              "Common YES2WIN references include baccarat, roulette and blackjack where those tables are supported in the live lobby.",
          },
          {
            id: "live-faq-2",
            question: "Does live casino work on mobile?",
            answer: "Yes, provided your browser and connection can handle real-time streaming smoothly.",
          },
        ],
      },
      sports: {
        formatTitle: "Sports coverage",
        formatItems: [
          "Football, basketball and tennis are core reference categories across sports-oriented YES2WIN content.",
          "Other supported sports may appear depending on current platform coverage and your region.",
          "Markets and live availability are shown on the official platform, not fixed on this partner site.",
        ],
        suitedFor: [
          "Fans who follow major fixtures and want a clear sports navigation flow.",
          "Members who check markets from their phone during the day.",
          "Users who prefer event-driven entertainment over lobby-style browsing.",
        ],
        relatedTitle: "How to follow sports on mobile",
        relatedCopy:
          "Sports pages work best when you need quick scans of events, categories and related links. For live market details, continue into the official sports area after login.",
        faq: [
          {
            id: "sports-faq-1",
            question: "Which sports are highlighted here?",
            answer:
              "Football, basketball and tennis are the primary sports referenced here, with other supported sports depending on the live platform.",
          },
          {
            id: "sports-faq-2",
            question: "Do you publish odds on this site?",
            answer: "No. Odds, lines and event availability change live and must be checked on the official platform.",
          },
        ],
      },
      fishing: {
        formatTitle: "Fishing gameplay overview",
        formatItems: [
          "Fishing titles mix arcade-style shooting with fast target selection and visual feedback.",
          "Sessions often feel more active than slots because you aim, fire and chase higher-value catches.",
          "Bright visuals and touch interaction make the category especially easy to understand on phones.",
        ],
        suitedFor: [
          "Players who prefer a more hands-on pace.",
          "Members who enjoy colourful, skill-flavoured interfaces.",
          "Mobile users looking for short but lively sessions.",
        ],
        relatedTitle: "How to approach fishing games",
        relatedCopy:
          "Use the partner site to understand the category, then browse the live fishing section after login to see which titles and interfaces are available for your account.",
        faq: [
          {
            id: "fishing-faq-1",
            question: "Are fishing games different from slots?",
            answer:
              "Yes. Fishing games are more interactive and often involve targeting, firing and active on-screen decision-making rather than simple spin cycles.",
          },
          {
            id: "fishing-faq-2",
            question: "Can I access fishing on mobile?",
            answer: "Yes, when supported, because touch controls translate naturally to fishing-style gameplay.",
          },
        ],
      },
      lottery: {
        formatTitle: "Lottery / 4D overview",
        formatItems: [
          "Lottery is the calmer, number-led side of the YES2WIN ecosystem.",
          "4D-style references focus on draw participation and results checking rather than fast interactive play.",
          "Current formats and draw information must always be confirmed on the live platform.",
        ],
        suitedFor: [
          "Members who prefer number-based entertainment.",
          "Users looking for a simpler participation flow.",
          "Players who want a contrast to live streaming or arcade-style categories.",
        ],
        relatedTitle: "Current draw information",
        relatedCopy:
          "This partner page explains the category structure only. For live lottery / 4D availability, current rules and results views, continue into the official platform after login.",
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
        ],
      },
    } as Record<string, GameCategoryDetail>,
  },
};

export type GameCategoryDetail = {
  formatTitle: string;
  formatItems: string[];
  suitedFor: string[];
  relatedTitle: string;
  relatedCopy: string;
  faq: Array<{ id: string; question: string; answer: string }>;
};

export type HubsCopy = typeof hubsEn;
