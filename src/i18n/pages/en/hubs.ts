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
        "YES2WIN is the entertainment brand and platform spanning slots, live casino, sports, fishing and lottery. Members interact with games, payments, promotions and account tools through the official platform, which is where anything account-specific happens. The tagline — YES is the Choice, WIN is the Result — is a brand expression about engaging with that experience, not a statement about outcomes.",
      imageAlt: "YES2WIN brand and ecosystem overview artwork",
      platformCard: {
        title: "YES2WIN",
        body: "The multi-category entertainment platform where live play, cashier actions, verification and account tools take place after registration or login. Everything that depends on your individual account — the lobby you see, the payment methods offered, the promotions available — is determined there rather than here.",
      },
      /** Rendered under the `siteConfig.identity` heading. */
      partnerCardBody:
        "This site orients visitors to the YES2WIN ecosystem: category guides, how offers and payments are structured, and clear Register / Login / Partner CTAs into the official platform. As an official partner gateway, its job is preparation and navigation — so you arrive on the live platform already knowing what each area is for.",
    },
    ecosystem: {
      eyebrow: "Ecosystem",
      title: "One entertainment world with clear pathways",
      description:
        "YES2WIN brings together multiple entertainment paths in one ecosystem, and they do not all work the same way. This partner website helps you understand each area — how it plays, what it asks of you and what to check first — before you continue into the live platform.",
      imageAlt: "YES2WIN ecosystem map visual",
      /** `{title}` is replaced with the card title. */
      exploreLabelTemplate: "Explore {title}",
      items: [
        {
          title: "Games",
          body: "Category guides covering slots, live casino, sports, fishing and lottery — how each one plays and who it suits.",
          href: "/games/",
        },
        {
          title: "Promotions",
          body: "Offer types explained structurally, plus how to read eligibility and confirm live terms before you opt in.",
          href: "/promotions/",
        },
        {
          title: "VIP",
          body: "Recognition-led member experience: what it emphasises, how it is communicated, and what it deliberately does not promise.",
          href: "/vip/",
        },
        {
          title: "Payment",
          body: "Deposit and withdrawal categories, what to check before confirming, and why fees and limits stay on the platform.",
          href: "/payment/",
        },
        {
          title: "Mobile",
          body: "Phone-friendly access, browser habits that prevent most issues, and how to reach the platform without unverified downloads.",
          href: "/mobile/",
        },
        {
          title: "Partner",
          body: "The sharing journey, public resources you can reference, and the messaging standards that keep promotion responsible.",
          href: "/partner/",
        },
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
          title: "What happens after login",
          body: "Once you continue into the official platform, account tools, the live lobby, cashier flows and offer claiming are handled there under that environment’s own rules.",
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
        "A calm place to understand the ecosystem, compare pathways and move into official access when you are ready — without being rushed into a decision by a countdown or a headline figure.",
      items: [
        {
          title: "Category orientation",
          body: "Clear guides for games, promotions, VIP, payments and mobile so visitors understand YES2WIN before they continue, including the practical differences between categories that marketing copy tends to flatten.",
        },
        {
          title: "Access pathways",
          body: "Register, Login and Partner CTAs route into the official platform destinations connected to this partner gateway, rather than to unverified downloads or third-party mirrors.",
        },
        {
          title: "Support navigation",
          body: "FAQ answers, contact pathways and responsible gaming guidance help people find the next practical step, including what to do when something has already gone wrong.",
        },
        {
          title: "Partner education",
          body: "A dedicated partner journey explains sharing, resources and support without inventing commissions or income guarantees, and sets out the messaging standards expected of anyone promoting the brand.",
        },
        {
          title: "Time-sensitive details stay live",
          body: "Where a figure changes — offer values, fees, limits, odds, lobby catalogues — this site explains the structure and points you to the platform at the moment you act, so you never rely on a stale number.",
        },
        {
          title: "Bilingual coverage",
          body: "The same guidance is maintained in English and Simplified Chinese, so the depth of the explanation does not depend on which language you read it in.",
        },
      ],
      quickLinks: [
        { label: "Games", href: "/games/" },
        { label: "Guides", href: "/guides/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "VIP", href: "/vip/" },
        { label: "Payment", href: "/payment/" },
        { label: "Mobile", href: "/mobile/" },
        { label: "Partner", href: "/partner/" },
        { label: "FAQ", href: "/faq/" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Account guide", href: "/account-guide/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
        { label: "Terms", href: "/terms/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    clarity: {
      eyebrow: "Quick clarity",
      title: "Common questions about this partner site",
      description:
        "Short answers with distinct jobs — so each card adds something new rather than repeating the same disclaimer.",
      cards: [
        {
          title: "What is this site for?",
          body: "Orientation and access: category guides, offer and payment structure, FAQ answers and CTAs into the official YES2WIN platform when you are ready to continue.",
        },
        {
          title: "What should I explore first?",
          body: "Start with Games if you are choosing a pace, Promotions or Payment if you need structural context, or Mobile if you will mostly browse on a phone — then open the platform when the map feels clear.",
        },
        {
          title: "Where do live actions happen?",
          body: "Registration, login, the live lobby, cashier tools, verification and offer claiming all continue on the official YES2WIN platform after you leave this site through those CTAs.",
        },
        {
          title: "How should partners use these pages?",
          body: "Link to public guides for educational context. Keep messaging factual, include responsible-play framing, and send audiences to the platform for anything time-sensitive or account-specific.",
        },
        {
          title: "Why are there no bonus figures here?",
          body: "Offer values, fees, limits and odds change and can differ by account. This site explains categories and what to check; current numbers belong in the live platform at the moment you act.",
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
        "Account settings and security options are managed on the official YES2WIN platform after you sign in. This page explains what to expect from each area so you are not exploring blind — but the actions themselves belong to the platform.",
      cards: [
        {
          title: "Profile updates",
          body: "Change personal details and review account information inside the live platform account area. Some fields stay editable while identity-linked ones may be restricted once set, which is why accuracy at registration matters.",
        },
        {
          title: "Security & recovery",
          body: "Use the official login recovery tools if you cannot sign in — they normally work from your registered contact details. Avoid opening a second account as a workaround, since duplicates complicate verification later.",
        },
        {
          title: "Verification prompts",
          body: "Identity or payment checks appear inside the official platform when required for withdrawals or account review. Complete them promptly through in-account upload flows only, never by message or email.",
        },
        {
          title: "Records & history",
          body: "Transaction, betting and promotion records are the authoritative account of what happened. Check them before resubmitting anything, and quote them when you contact support.",
        },
      ],
    },
    paymentHelp: {
      eyebrow: "Payment help",
      title: "Deposits, withdrawals and cashier questions",
      description:
        "Review payment categories here, then confirm live methods, limits and verification steps in the cashier after login. Most payment questions resolve faster once you know whether you are looking at an availability issue, a pending status or a verification step.",
      cards: [
        {
          title: "Before you deposit",
          body: "Understand common categories such as bank transfer, e-wallet, online banking and cryptocurrency on the Payment page, along with what to double-check before confirming. Exact options depend on region and account status, and a method that is not listed is simply not enabled for you.",
          linkLabel: "Payment guide",
          href: "/payment/",
        },
        {
          title: "Withdrawal readiness",
          body: "Withdrawals may require verification, and payout details usually need to match your registered name. Follow only the official platform prompts, avoid sharing sensitive details outside those flows, and check that no promotion condition is still attached to your balance.",
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
        "Which public pages you can reference when educating an audience",
        "Messaging standards and responsible promotion expectations",
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
        { label: "Guides hub", href: "/guides/" },
        { label: "FAQ hub", href: "/faq/" },
        { label: "Terms of use", href: "/terms/" },
        { label: "Privacy policy", href: "/privacy/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
    },
    faqLinks: {
      eyebrow: "FAQ links",
      title: "Start with answers already published",
      description:
        "Many common questions are covered across registration, login, payments, games, mobile and partner topics — often in more detail than a support reply would fit. It is usually faster to check here first, and it means any question you do send can be more specific.",
      links: [
        { label: "Registration FAQ", href: "/faq/#registration" },
        { label: "Login FAQ", href: "/faq/#login" },
        { label: "Account FAQ", href: "/faq/#account" },
        { label: "Payments FAQ", href: "/faq/#payments" },
        { label: "Deposit FAQ", href: "/faq/#deposit" },
        { label: "Withdrawal FAQ", href: "/faq/#withdrawal" },
        { label: "Promotions FAQ", href: "/faq/#promotions" },
        { label: "Games FAQ", href: "/faq/#games" },
        { label: "Mobile FAQ", href: "/faq/#mobile" },
        { label: "Security FAQ", href: "/faq/#security" },
        { label: "Partner FAQ", href: "/faq/#partner" },
        { label: "Responsible gaming FAQ", href: "/faq/#responsible-gaming" },
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
          title: "Guides",
          body: "Open the curated map of account, payment, VIP and category guides.",
          href: "/guides/",
        },
        {
          title: "Promotions",
          body: "Understand offer types before confirming live terms.",
          href: "/promotions/",
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
    jsonLdDescription:
      "YES2WIN games hub covering slots, live casino, sports, fishing and lottery — how categories differ by pace, how to choose a session, and how to continue into the official lobby.",
    featured: {
      eyebrow: "Featured",
      title: "Start with the categories players explore most",
      description:
        "Each card opens a deeper guide covering how the category plays, who it suits and what to check before your first session. Live titles appear only after you continue into the official platform, so treat these pages as preparation rather than a catalogue.",
      imageAltSuffix: "featured visual",
    },
    allCategories: {
      title: "All categories",
      description:
        "Every major YES2WIN entertainment path with a short guide and a next step. If you are undecided, the quickest way to choose is by pace: slots and fishing keep you actively involved, live tables run on a dealer’s timing, sports follow real fixtures, and lottery separates your decision from a scheduled draw.",
      imageAltSuffix: "artwork",
      playNowCta: "Register Now",
    },
    providers: {
      eyebrow: "Providers",
      title: "Studios referenced by YES2WIN",
      description:
        "These provider names appear in public YES2WIN materials, and knowing them is genuinely useful — the studio behind a title shapes its interface, feature style and pacing more than the theme does. Game counts and live catalogues stay on the platform, because what is available to you depends on your region and account.",
    },
    formats: {
      title: "Popular formats",
      description:
        "A quick map of the play styles members usually look for first, described by how a session actually feels rather than by marketing language. Use it to narrow down where to start, then open the category guide for the detail.",
      items: [
        {
          title: "Slots",
          body: "Theme variety, feature-driven play and short spin cycles that suit both brief sessions and longer play. Paylines and ways-to-win differ by title, so each game’s paytable is the practical rulebook for symbols, features and free-spin style rounds.",
        },
        {
          title: "Live tables",
          body: "Baccarat, roulette and blackjack where live dealers are available, paced by timed betting windows rather than by you. Table panels list rules, side bets and limits before you join, and a steady connection matters more than peak download speed.",
        },
        {
          title: "Sports markets",
          body: "Football, basketball, tennis and other supported events, with pre-match markets for considered selections and in-play markets that move during an event. Your bet slip and settlement record are the place to confirm what you placed and when it resolved.",
        },
        {
          title: "Fishing sessions",
          body: "Interactive targeting and arcade-style catch mechanics, with adjustable shot levels that change how quickly a session moves. Play is continuous rather than round-based, so a pre-set time limit is especially useful.",
        },
        {
          title: "Lottery / 4D",
          body: "Number-led draw formats with simpler participation flows. You make a selection, entries close ahead of a published draw, and the result follows that schedule — a calmer pace than continuous play categories.",
        },
      ],
    },
    ecosystem: {
      eyebrow: "How it fits together",
      title: "How the YES2WIN game ecosystem is organised",
      description:
        "YES2WIN is not one play style with five labels. Categories differ in pace, in who sets the rhythm of a round, and in how much you need to decide before you begin. Understanding that map makes the lobby far easier to navigate.",
      points: [
        {
          title: "Pace is the first filter",
          body: "Slots and fishing keep you continuously involved; live tables run on dealer timing; sports follow real fixtures; lottery separates your selection from a scheduled draw. Choosing by pace usually beats choosing by theme alone.",
        },
        {
          title: "The lobby is authoritative",
          body: "Guides on this partner site explain structure. The titles, tables and markets you can open appear only in the official lobby after Register or Login, filtered by region and account status.",
        },
        {
          title: "Studios shape the feel",
          body: "Provider names matter because interface habits, feature styles and table presentation often follow the studio more than the theme artwork. Knowing a few referenced studios helps you recognise patterns as you browse.",
        },
        {
          title: "Match the category to the session",
          body: "A short phone break suits self-paced reels or a quick number entry; a longer window suits a live table or an in-play sports desk. Decide the session type first, then open the matching category guide.",
        },
      ],
    },
    categoryGuides: {
      eyebrow: "Category education",
      title: "What each YES2WIN category actually involves",
      description:
        "Short educational summaries of the five main paths — mechanics concepts and session habits, not marketing claims. Open a full guide when you want a deeper walkthrough before continuing into the lobby.",
      items: [
        {
          id: "slots",
          title: "Slots",
          summary:
            "Slots are self-paced: each spin is a short round you control. Themes set the look, while paylines or ways-to-win structures decide how matching symbols count. Feature rounds and free-spin style sequences are general game mechanics described in each title’s paytable — not platform promotions. Reading that paytable before you play is the fastest way to understand symbols and triggers. Most titles also suit mobile sessions because rounds are brief and easy to pause.",
          points: [
            "Themes vary widely; mechanics sit in the paytable, not the artwork.",
            "Paylines and ways-to-win are conceptual structures — check the title you open.",
            "Features and free-spin style rounds are game rules, separate from offer campaigns.",
            "Mobile-friendly for short, interruptible sessions.",
          ],
          href: "/games/slots/",
          cta: "Read the slots guide",
        },
        {
          id: "live-casino",
          title: "Live Casino",
          summary:
            "Live casino streams a human dealer in real time, so the round runs on the table’s clock rather than yours. Familiar formats such as baccarat, roulette and blackjack appear as general table concepts — rules, side bets and limits are listed on the table panel before you join. A stable connection matters more here than in static categories, and landscape phone browsing often makes layouts clearer.",
          points: [
            "Real-time dealer stream; betting windows set the pace.",
            "Baccarat, roulette and blackjack as common table concepts where available.",
            "Read the table panel for rules, side bets and limits before joining.",
            "Prefer a steady connection; mobile works when the stream stays smooth.",
          ],
          href: "/games/live-casino/",
          cta: "Read the live casino guide",
        },
        {
          id: "sports",
          title: "Sports",
          summary:
            "Sports entertainment is organised around real fixtures. Pre-match markets give you time to review selections; in-play markets update while an event is underway and may suspend at key moments. Football, basketball and tennis are common reference sports, though coverage depends on the live desk. Markets, your bet slip and settlement records are the practical tools for confirming what you placed and when it resolved — odds themselves stay on the platform.",
          points: [
            "Pre-match for considered picks; in-play for live movement.",
            "Football, basketball and tennis as frequent examples where offered.",
            "Use markets, bet slip and settlement concepts to track selections.",
            "Confirm odds and rules on the live sports desk, not on summary pages.",
          ],
          href: "/games/sports/",
          cta: "Read the sports guide",
        },
        {
          id: "fishing",
          title: "Fishing",
          summary:
            "Fishing games use arcade-style targeting: you aim, fire and chase on-screen objectives rather than waiting on a spin cycle. Styles differ by interface and shot controls, and adjustable intensity usually changes how quickly a session moves. Touch controls make the category a natural fit on mobile, but continuous play means responsible pacing — set a time limit before you start, not after the room has pulled you in.",
          points: [
            "Arcade-style aiming and continuous action, not round-based spins.",
            "Styles and shot levels change how fast the session feels.",
            "Touch-friendly on mobile when the title is available.",
            "Set a session length early — continuous play can run longer than planned.",
          ],
          href: "/games/fishing/",
          cta: "Read the fishing guide",
        },
        {
          id: "lottery",
          title: "Lottery",
          summary:
            "Lottery and 4D-style play centres on a draw concept: you choose numbers, entries close, and results follow a published schedule. 4D-style formats are number-led participation rather than continuous interaction. The pace is intentionally calm — there is no live stream or arcade loop to manage — which makes it easier to keep involvement brief and budget-aware. Always confirm the current draw rules and schedules inside the official platform.",
          points: [
            "Draw-based: select, wait for the published result time.",
            "4D-style play is a general number-led format concept.",
            "Calmest pace among the main categories.",
            "Confirm schedules and rules on the live platform before entering.",
          ],
          href: "/games/lottery/",
          cta: "Read the lottery guide",
        },
      ],
    },
    discovery: {
      eyebrow: "Choosing well",
      title: "How to discover and choose games",
      description:
        "A practical approach to browsing before you open the lobby — so the first titles you try match the session you actually have time for.",
      points: [
        {
          title: "Start from pace, not artwork",
          body: "Ask how long you can stay involved and whether you want self-paced rounds, dealer timing, a live fixture or a scheduled draw. That answer usually points to the right category faster than a theme does.",
        },
        {
          title: "Use information panels",
          body: "Inside the lobby, each title or table typically carries its own rules, paytable or limits panel. Reading it once before you join prevents most early surprises.",
        },
        {
          title: "Notice the studio",
          body: "When several titles share a provider, interfaces and feature habits often feel familiar. Using that pattern can make browsing less random once you know what you like.",
        },
        {
          title: "Begin small",
          body: "First sessions are for learning controls and rhythm. Keep stakes and duration modest until the format feels clear — especially in continuous categories such as fishing or in-play sports.",
        },
      ],
    },
    mobile: {
      eyebrow: "Mobile gaming",
      title: "Browse on phone, play when ready",
      description:
        "Category guides stay readable on smaller screens, so you can do the deciding on your phone and open the lobby when you are ready. Live streaming categories benefit from a stable connection more than a fast one — a steady signal matters more than raw speed, and landscape orientation makes table layouts far easier to read.",
      imageAlt: "YES2WIN mobile gaming visual",
      primaryCta: "Mobile guide",
      secondaryCta: "Access YES2WIN",
    },
    access: {
      howToCard: {
        title: "How to access games",
        body: "Register or log in through this partner gateway, then open the live lobby and choose a category available to your account. If a category you expected is missing, it is usually unavailable for your region or account status at that moment rather than removed.",
      },
      promotionsCard: {
        title: "Related promotions",
        body: "Welcome, deposit and weekly campaigns often sit alongside game discovery, and some are limited to particular categories. Check the promotions lobby before you deposit rather than afterwards, and confirm live terms before opting in.",
        linkLabel: "Promotions hub",
      },
      vipPaymentsCard: {
        title: "VIP & payments",
        body: "Member recognition and cashier tools live on the platform, but both are easier to use once you know what to expect. Use the VIP and Payment pages here for orientation first, then handle the actions themselves after login.",
        vipLinkLabel: "VIP",
        paymentLinkLabel: "Payment",
      },
    },
    responsible: {
      eyebrow: "Responsible play",
      title: "Keep games recreational",
      description:
        "Category choice is only useful when sessions stay within limits you set in advance. These habits apply across slots, live tables, sports, fishing and lottery.",
      points: [
        {
          title: "Decide limits before the lobby",
          body: "Set time and spending boundaries while you are still reading guides — not after a session has already started.",
        },
        {
          title: "Match category to attention",
          body: "Continuous formats ask for more ongoing focus. If you only have a short window, prefer self-paced or draw-based options.",
        },
        {
          title: "Do not chase a session",
          body: "Ending while behind is a normal outcome. Extending play only to recover losses turns entertainment into pressure.",
        },
        {
          title: "Use platform tools when available",
          body: "Where the official platform offers limits or break tools, use them inside your account. This partner site explains the idea; the controls live there.",
        },
      ],
      cta: "Responsible gaming guidance",
      href: "/responsible-gaming/",
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
        {
          id: "g4",
          question: "Which category should I start with?",
          answer:
            "Choose by pace rather than by theme. Slots and fishing keep you continuously involved, live tables run on the dealer’s timing, sports follow real fixtures you may already follow, and lottery separates your selection from a scheduled draw. Each category guide describes who it suits.",
        },
        {
          id: "g5",
          question: "Where do I find the rules for an individual game?",
          answer:
            "Every title carries its own information or paytable panel inside the lobby, covering symbols, rules and how feature rounds trigger. Read it before your first session — two games sharing a theme can behave very differently.",
        },
        {
          id: "g6",
          question: "Why can’t I see every category on my account?",
          answer:
            "Availability depends on region, account status and platform updates, so the lobby you see is filtered to what applies to you. If something expected is missing, check again after login rather than assuming it has been withdrawn.",
        },
        {
          id: "g7",
          question: "What should I check before joining a live table or sports market?",
          answer:
            "For live tables, open the table panel for rules, side bets and limits, and confirm your connection is stable. For sports, review the market description and settlement notes for that selection, then confirm the stake on your bet slip before you submit.",
        },
        {
          id: "g8",
          question: "How do category guides relate to the live lobby?",
          answer:
            "Guides explain how a category plays and what to prepare for. They are not a live catalogue. Titles, tables and markets available to you appear only after you continue into the official lobby.",
        },
      ],
      links: [
        { label: "Full games FAQ", href: "/faq/#games" },
        { label: "Slots guide", href: "/games/slots/" },
        { label: "Live casino guide", href: "/games/live-casino/" },
        { label: "Sports guide", href: "/games/sports/" },
        { label: "Fishing guide", href: "/games/fishing/" },
        { label: "Lottery guide", href: "/games/lottery/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Mobile access", href: "/mobile/" },
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
        "Most confusion about promotions comes from reading them in the wrong order — starting with the headline instead of the conditions. Use this partner guide to understand how campaigns are structured, then rely on the live platform for current values and rules at the moment you opt in.",
      points: [
        {
          title: "Start with the campaign card",
          body: "Each live offer summarises who it is for and what actions unlock it. Use the card as your first filter before reading deeper terms — if the summary does not describe you, the detail will not change that.",
        },
        {
          title: "Confirm eligibility in-account",
          body: "Region, account age, prior claims, payment method and verification status can all affect what you see. If an offer is not shown to you, it is not currently available to your account. Availability described on this partner site is educational only.",
        },
        {
          title: "Read the three conditions that matter",
          body: "For most campaigns, everything comes down to what qualifies, what has to happen before bonus-linked funds behave like normal balance, and how long you have. Find those three answers before anything else.",
        },
        {
          title: "Check the timing before you act",
          body: "Some offers must be selected at the moment of a qualifying action, and a completed deposit usually cannot be reassigned to a campaign afterwards. Open the promotions lobby before you transact, not after.",
        },
        {
          title: "Treat terms as the source of truth",
          body: "Percentages, amounts, wagering and expiry windows change without notice on an informational page. Always rely on the official platform wording at the moment you opt in, and disregard figures quoted on third-party sites.",
        },
        {
          title: "Ask support when unclear",
          body: "If a campaign rule is ambiguous, use official contact channels rather than assuming a figure published elsewhere. A short question before opting in is easier than a dispute afterwards.",
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
            "Follow the on-screen steps for that campaign. Some offers need an opt-in before you act; others link to a qualifying deposit path where the payment method itself may need to match.",
        },
        {
          step: "05",
          title: "Track it in your account",
          description:
            "Check your promotion history and transaction records so you can see what you joined and whether any condition is still attached to your balance — that is also where an unexpected withdrawal hold usually gets explained.",
        },
      ],
    },
    eligibility: {
      eyebrow: "Eligibility",
      title: "Who can join a campaign",
      description:
        "Eligibility is defined per offer rather than platform-wide, which is why two members can open the same promotions lobby and see different cards. New-member campaigns, deposit boosts, rebate programmes and VIP rewards each follow their own rules, and none of them inherit conditions from the others.",
      commonFactors: {
        title: "Common factors",
        body: "Account status, prior claims on the account, region, payment method and verification status can all influence whether an offer appears — as can the simple question of whether the campaign is currently running. The featured welcome path is typically oriented toward newly registered members who meet live campaign rules and have not already claimed a similar offer. If a campaign is not visible to you, treat that as the answer rather than a display problem.",
      },
      /** Body text is composed from the featured promotion in `@/config/content/promotions`. */
      featuredContextTitle: "Featured welcome context",
    },
    termsNote: {
      eyebrow: "Terms note",
      title: "Always confirm live wording",
      description:
        "This partner site does not invent promo amounts, fees, limits or income guarantees, and it does not estimate them either. Everything here describes structure so that you know what to look for; the numbers themselves belong to the campaign card you are actually opting into.",
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
        {
          id: "promo-5",
          question: "How do promo codes work?",
          answer:
            "When a campaign uses a code, it is published with that campaign or sent to you directly, and entered in the field the platform specifies — usually at registration or in the cashier. Use only codes from official sources: guessed or third-party codes typically fail, and an expired code will not be honoured retroactively.",
        },
        {
          id: "promo-6",
          question: "What do wagering or turnover conditions mean?",
          answer:
            "They describe how much qualifying play must happen before bonus-linked funds behave like normal balance. The rate, which categories count and how long you have are set per campaign rather than platform-wide, so read those three points before opting in.",
        },
        {
          id: "promo-7",
          question: "Can a deposit qualify for an offer after I have made it?",
          answer:
            "Usually not. Many campaigns require the offer to be selected at the moment of a qualifying action, and payment method can also affect eligibility. Open the promotions lobby before you transact rather than afterwards.",
        },
      ],
    },
    related: {
      eyebrow: "Related",
      title: "Continue exploring YES2WIN",
      description:
        "Promotions rarely sit on their own — an offer usually touches a game category, a payment method and sometimes your VIP standing at the same time. These links cover the pages most often needed alongside a campaign.",
      links: [
        { label: "Browse games", href: "/games/" },
        { label: "Slots guide", href: "/games/slots/" },
        { label: "Live casino guide", href: "/games/live-casino/" },
        { label: "VIP benefits", href: "/vip/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Promotions FAQ", href: "/faq/#promotions" },
        { label: "Deposit FAQ", href: "/faq/#deposit" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Terms overview", href: "/terms/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
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
        "Curated advantages that enhance how you engage with YES2WIN, communicated through official channels when membership status qualifies. The emphasis throughout is on quality of experience rather than a public list anyone can claim — which is also why benefits can differ between members and change as the programme develops.",
    },
    personalised: {
      eyebrow: "Personalised",
      title: "Service shaped around how you engage",
      description:
        "Expect communications and service touchpoints that consider how you like to play rather than generic mass messaging. In practice the difference is often visible in what you stop receiving: fewer blanket announcements about categories you never open, and more attention to the preferences you have actually shared.",
      imageAlt: "Personalised YES2WIN VIP service",
      items: [
        "Relevant updates instead of one-size outreach",
        "Attention to preferences shared through official VIP pathways",
        "Fewer blanket announcements about categories you do not use",
        "Context carried between conversations rather than starting over each time",
        "A calmer, more considered member relationship over time",
      ],
    },
    prioritySupport: {
      eyebrow: "Priority support",
      title: "Elevated attention when available",
      description:
        "VIP members may receive elevated support pathways so account questions can be handled with greater attention when those channels are available. That usually means a shorter route to someone who already has context on your account, which matters most for time-sensitive cashier or verification questions.",
      note: "Support quality still depends on live programme capacity and account context. Use official contact routes and follow verification prompts when requested — priority means faster attention, not an exemption from security steps.",
      cta: "View contact options",
      imageAlt: "YES2WIN VIP priority support",
    },
    events: {
      eyebrow: "Exclusive events",
      title: "Invitations beyond the everyday calendar",
      description:
        "Selected invitations and event-style moments may be shared with VIP members as part of a more exclusive calendar that sits alongside the public promotions schedule rather than replacing it.",
      note: "Event availability and formats are defined by the official programme, and invitations arrive through your account channels or an authorised VIP contact. This page does not invent guest lists, prize pools or attendance guarantees — and anything reaching you elsewhere that asks for a payment or your password is not a genuine invitation.",
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
        { label: "VIP FAQ", href: "/faq/#vip" },
        { label: "Member FAQ", href: "/faq/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Account guide", href: "/account-guide/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
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
        {
          id: "vip-5",
          question: "How would I recognise a genuine VIP invitation?",
          answer:
            "Genuine communications arrive through your account channels or an authorised VIP contact. Anything that reaches you by unsolicited message and asks for your password, a fee or a payment is fraudulent — verify through official support instead of replying.",
        },
        {
          id: "vip-6",
          question: "How is VIP different from the promotions calendar?",
          answer:
            "Promotions are published campaigns any eligible member can open and opt into. VIP is a recognition-led relationship built around service, priority pathways and selected invitations, shared privately when it applies. They can overlap, but they are not the same thing.",
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
      description:
        "A practical outline for funding your account through the official cashier. Most deposit problems trace back to a detail entered incorrectly rather than a platform fault, so the checking steps matter as much as the transaction itself.",
      steps: [
        "Sign in through this partner gateway and open the official cashier.",
        "If you intend a deposit to qualify for a campaign, check the promotions lobby first — method and timing can both matter.",
        "Choose an available deposit method shown for your account and region.",
        "Follow the on-screen steps for that channel — bank, e-wallet, card or crypto — and let redirects complete rather than closing the tab.",
        "Copy any reference, narration or wallet address exactly as shown, and confirm the sending account is in your own name.",
        "Confirm the transaction status in your account records after submission, and allow the channel to settle before trying again.",
      ],
    },
    withdrawals: {
      eyebrow: "Withdrawals",
      title: "Withdrawal guide",
      description:
        "Request payouts through supported methods and complete any checks the platform asks for. Timing depends on both the platform’s review and the settlement speed of the channel you choose, and a first withdrawal often takes longer because verification may run alongside it.",
      steps: [
        "Check that no promotion condition is still attached to your balance before requesting.",
        "Open withdrawals from your account once funds are available to request.",
        "Select a supported payout method displayed in the live cashier, using an account in your own name.",
        "Complete any verification or payment-detail checks requested by the platform, through official upload flows only.",
        "Track the request in transaction history and respond to follow-up prompts promptly, since that is the most common cause of delay.",
      ],
    },
    safety: [
      {
        title: "Verification",
        body: "Identity or payment verification may be required before certain withdrawals. Follow official platform prompts, upload only through in-account flows, and never send documents by message, email or chat app — completing a prompt promptly is the single most effective way to avoid a payout sitting in review.",
      },
      {
        title: "Transaction records",
        body: "Deposits, withdrawals and status updates are recorded in your account history, which is the authoritative version of what happened. Check records before resubmitting anything — most “missing” transactions are simply still pending — and quote them when contacting support.",
      },
      {
        title: "Fees & limits",
        body: "Fees, minimums, maximums and processing times are not published as fixed figures on this partner site because they vary by method, region and account status. Confirm them in the live cashier, and disregard any figures quoted on third-party pages.",
      },
      {
        title: "Payment safety",
        body: "Only enter payment details inside the official cashier, never through a link sent to you. Legitimate support will not ask for your password, full card details or payment PIN, and no genuine contact requires a payment to release a balance.",
      },
      {
        title: "Matching details",
        body: "Keep the name on your payment method matching your account name. Mismatched details are the most common reason a deposit is held or a payout is returned for review, and they are also the easiest thing to get right in advance.",
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
        { label: "Deposit FAQ", href: "/faq/#deposit" },
        { label: "Withdrawal FAQ", href: "/faq/#withdrawal" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Account guide", href: "/account-guide/" },
        { label: "Related promotions", href: "/promotions/" },
        { label: "Browse games", href: "/games/" },
        { label: "Mobile access", href: "/mobile/" },
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
        {
          id: "pay-5",
          question: "How long does a deposit or withdrawal take?",
          answer:
            "It depends on the channel. E-wallet and instant banking flows usually reflect quickly, cards depend on your issuer, bank transfers follow banking hours and cut-off times, and crypto waits on network confirmations. Check the status in your transaction records rather than resubmitting.",
        },
        {
          id: "pay-6",
          question: "Why might a withdrawal be delayed or returned?",
          answer:
            "The usual causes are an outstanding verification step, payout details that do not match your registered name, a promotion condition still attached to your balance, or a routine security review. Your transaction records normally show which one applies.",
        },
        {
          id: "pay-7",
          question: "What should I check before confirming a payment?",
          answer:
            "Confirm the method, that the account name matches your own, that any reference or narration field is copied exactly, and — for crypto — that the network and address match the checkout instructions precisely. Crypto transfers cannot be reversed.",
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
      description:
        "None of these are complicated, but together they remove most of the small frustrations people report on a phone — dropped sessions, elements that will not load, and streams that stutter at exactly the wrong moment.",
      items: [
        "Use the sticky Register and Login actions when you are ready to continue into the official platform.",
        "Start with Games, Promotions, Payment or FAQ if you want context before signup.",
        "Keep one browser tab for this partner guide and another for the live platform if you are comparing pathways.",
        "Keep your browser updated and allow cookies for the platform so sessions persist between visits.",
        "Avoid aggressive data-saver or script-blocking modes, which can stop lobby elements loading correctly.",
        "Rotate to landscape for live tables and sports pages, where the extra width makes layouts much easier to read.",
        "Close unused tabs before opening streaming categories so the browser has memory to work with.",
        "Switch to a stronger network before opening live-streamed or animation-heavy categories, not during a round.",
      ],
    },
    howToAccess: {
      eyebrow: "How to access",
      title: "From this partner site to the live platform",
      description:
        "Mobile is not a reduced YES2WIN experience. For most members it is the primary one — the day-to-day path for browsing categories, checking promotions, handling payments and moving between account tools, with a desktop session reserved for longer play.",
      imageAlt: "YES2WIN mobile phone visual",
      steps: [
        "Open this Mobile page or any partner guide on your phone browser.",
        "Review games, promotions, payments or FAQ content as needed.",
        "Tap Access YES2WIN or Login to continue into the official platform.",
        "Save the official destination as a home-screen shortcut if you want faster access next time.",
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
        {
          id: "mobile-5",
          question: "Can I add YES2WIN to my home screen?",
          answer:
            "Modern mobile browsers let you save a page as a home-screen shortcut through the share or menu options. Create it from the official destination you reached through this partner site so the icon always opens the correct address — safer than installing a file from an unverified download page.",
        },
        {
          id: "mobile-6",
          question: "Why do some pages stop loading correctly on my phone?",
          answer:
            "Aggressive data-saver or script-blocking modes are the usual cause, followed by a stale cache after a platform update. Allow cookies for the platform, clear the cache, and try again with a current browser before assuming something is broken.",
        },
      ],
      links: [
        { label: "Full mobile FAQ", href: "/faq/#mobile" },
        { label: "Explore games", href: "/games/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Account guide", href: "/account-guide/" },
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
        "Focus on brand clarity, multi-category entertainment and a practical onboarding path — without guaranteed income claims. The proposition here is straightforward: an ecosystem broad enough to suit a mixed audience, public pages accurate enough to link to, and a support route for the questions that actually come up.",
      imageAlt: "YES2WIN partner ecosystem visual",
    },
    /** Extra reasoning rendered alongside `partnerContent.whyPartner`. */
    whyPoints: {
      title: "What this pathway is — and is not",
      items: [
        {
          title: "A clear brand to explain",
          body: "Slots, live casino, sports, fishing and lottery under one platform means one introduction can serve very different interests, rather than needing a separate pitch for each audience segment.",
        },
        {
          title: "Public pages built to be linked",
          body: "The guides on this site are written so you can point people at them instead of rewriting explanations of payments, categories or responsible play yourself — and so those explanations stay accurate when the platform updates.",
        },
        {
          title: "No invented numbers to defend",
          body: "Because nothing here publishes rates, commissions or guaranteed outcomes, you are never in the position of repeating a figure you cannot verify or having to walk one back later.",
        },
        {
          title: "Not a get-rich pitch",
          body: "Results depend on audience fit, consistency and timing. If you are looking for a promised return, this is the wrong pathway; if you want to build something durable with an audience that trusts you, it is a reasonable one.",
        },
      ],
    },
    audience: {
      eyebrow: "Audience",
      title: "Who can partner with YES2WIN",
      description:
        "The partner pathway is built for people who introduce YES2WIN clearly — creators, communities, marketers and referral-focused collaborators. What they have in common matters more than the label: an existing audience, a channel they actually publish on, and a willingness to explain things accurately rather than loudly.",
    },
    journey: {
      eyebrow: "Partner journey",
      title: "From access to progress tracking",
      description:
        "A practical sequence that keeps onboarding, sharing and review easy to understand. Each stage has a defined next action rather than an open-ended wait, so you always know whether the ball is in your court.",
      primaryCta: "Start partner access",
      secondaryCta: "Partner support",
    },
    /** Practical preparation notes rendered under the journey steps. */
    journeyExtra: {
      title: "Before you start step one",
      body: "The partner journey moves faster when the thinking is done first. None of this requires approval or tooling — it is the groundwork that decides whether your first few weeks produce anything.",
      points: [
        "Know who your audience is and what they would actually want from an entertainment platform.",
        "Decide which channel you will publish on, and how often you can realistically sustain it.",
        "Read the Games, Promotions and Payment guides so your explanations are accurate from the first post.",
        "Draft how you would describe YES2WIN in three sentences without a single unverifiable claim.",
        "Plan where responsible gaming context and age restrictions will appear in your messaging.",
        "Set your own expectations: early activity is about building trust, not about a number.",
      ],
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
    /** Promotion standards section rendered before the partner FAQ. */
    responsibleMarketing: {
      eyebrow: "Responsible marketing",
      title: "Standards that keep partner promotion credible",
      description:
        "These are not optional extras bolted on at the end — they are what makes partner messaging durable. Audiences discount hype quickly, and regulators and platforms take overstatement seriously. Accurate framing protects the people you are talking to and the channel you have built.",
      items: [
        {
          title: "No outcome or income claims",
          body: "Never promise winnings, profits or partner earnings, and never imply them through selective examples. Results vary by audience fit, consistency and timing, and no honest figure can be given in advance.",
        },
        {
          title: "No invented numbers",
          body: "Do not publish percentages, bonus values, fees, limits or commission rates. If a figure is not in official documentation you have access to, it does not belong in your material — including figures copied from third-party pages.",
        },
        {
          title: "Age and eligibility first",
          body: "Never target anyone under the legal age in their jurisdiction, and make the age requirement visible rather than buried. Be clear that availability depends on where someone lives.",
        },
        {
          title: "Responsible gaming in context",
          body: "Include responsible gaming guidance as a normal part of your messaging, not a footnote. Link to the Responsible Gaming page so your audience has a route to support without having to search for one.",
        },
        {
          title: "Accurate positioning",
          body: "Describe this site as YES2WIN Official Partner — an information and access gateway. Do not present it as the primary corporate YES2WIN website, and do not imply you speak on the platform’s behalf.",
        },
        {
          title: "Point to official terms",
          body: "For anything time-sensitive — offer values, eligibility, payment details, VIP status — direct people to the live platform rather than paraphrasing. Your job is to get them to the right page accurately informed.",
        },
      ],
      note: "Platform promotion rules and any advertising law applying in your jurisdiction take precedence over anything summarised here. When in doubt, ask through official partner support before publishing.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Partner questions",
      description: "Short answers about income expectations, terms, materials and who the pathway is for.",
      /** Rendered alongside `partnerContent.faqs`. */
      items: [
        {
          id: "partner-hub-1",
          question: "Do I need an existing audience to apply?",
          answer:
            "An audience helps, but size matters far less than fit and consistency. A small community that trusts your explanations is more useful than a large one that scrolls past. What the pathway does assume is that you have somewhere you actually publish.",
        },
        {
          id: "partner-hub-2",
          question: "What can I say about promotions in my content?",
          answer:
            "Describe offer types structurally — what a welcome campaign, deposit offer or rebate programme generally is — and then send people to the live promotions lobby for values, eligibility and terms. Do not quote percentages or amounts, because they change and differ by account.",
        },
        {
          id: "partner-hub-3",
          question: "Can I use this site’s pages and images in my content?",
          answer:
            "You may reference and link to public pages for education. Use the approved positioning and tagline, keep the partner-gateway role clear, and do not present this site as the primary corporate YES2WIN website or imply you speak for the platform.",
        },
        {
          id: "partner-hub-4",
          question: "When do referral tools and tracking become available?",
          answer:
            "After partner access is granted and onboarding is complete. Visibility depends on your partner status and the tools enabled for your account, and the official partner tools are the only place that activity is recorded — a rewritten or shortened link can break attribution entirely.",
        },
        {
          id: "partner-hub-5",
          question: "Where do referred members get help?",
          answer:
            "Once someone registers or logs in, their account, payment and login questions are handled by YES2WIN platform support. Point them to the FAQ and Contact pages here for orientation, but do not attempt to resolve account-specific issues yourself.",
        },
        {
          id: "partner-hub-6",
          question: "What is the most common mistake new partners make?",
          answer:
            "Leading with a number. It sets an expectation nobody can honour, attracts an audience that leaves as soon as it is not met, and undermines everything accurate you say afterwards. Explaining the ecosystem clearly performs better and lasts longer.",
        },
      ],
      links: [
        { label: "More partner FAQ", href: "/faq/#partner" },
        { label: "Partner support", href: "/contact/" },
        { label: "About the partner site", href: "/about/" },
      ],
    },
    /** Internal pages partners most often need alongside this hub. */
    relatedLinks: {
      title: "Pages worth having open while you work",
      description:
        "These are the guides partners reference most often — both for their own understanding and as links to share with an audience.",
      links: [
        { label: "Games hub", href: "/games/" },
        { label: "Slots guide", href: "/games/slots/" },
        { label: "Live casino guide", href: "/games/live-casino/" },
        { label: "Sports guide", href: "/games/sports/" },
        { label: "Promotions", href: "/promotions/" },
        { label: "VIP overview", href: "/vip/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Mobile access", href: "/mobile/" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Account guide", href: "/account-guide/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
        { label: "Partner FAQ", href: "/faq/#partner" },
        { label: "Terms of use", href: "/terms/" },
        { label: "Contact", href: "/contact/" },
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
      "Practical answers on account access, game categories, promotions, payments, mobile use, partner topics and responsible play — grouped by subject so you can jump to the section that matches your question. Where something changes on the live platform, the answer explains where to check rather than quoting a figure that would age.",
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
        { label: "Games overview", href: "/games/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
      account: [
        { label: "Account guide", href: "/account-guide/" },
        { label: "Payment guide", href: "/payment/" },
        { label: "Contact", href: "/contact/" },
      ],
      registration: [
        { label: "Register guide", href: "/register-guide/" },
        { label: "Account guide", href: "/account-guide/" },
      ],
      login: [
        { label: "Account guide", href: "/account-guide/" },
        { label: "Contact", href: "/contact/" },
      ],
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
          "Classic, modern and feature-driven slot styles can appear in the live lobby, differing mainly in how much is happening on screen at once.",
          "Themes often range from simple icons to high-energy fantasy, adventure or character-led visuals — presentation varies far more than the underlying flow.",
          "Every title publishes its own paytable covering symbols, payline structure and how feature rounds are triggered.",
          "Feature rounds such as free spins or multipliers are game mechanics set by the provider, not platform promotions.",
          "Short spin cycles make slots easy to sample in mobile sessions without committing to a long sitting.",
        ],
        suitedFor: [
          "Players who want easy entry and fast browsing without learning a table format first.",
          "Members looking for variety across themes and pacing rather than one fixed experience.",
          "Mobile-first players who prefer touch-friendly gameplay in short bursts.",
          "Anyone who likes reading a paytable and understanding a game before committing to it.",
        ],
        relatedTitle: "Related promotions",
        relatedCopy:
          "Welcome and deposit-style offers are often the first place members look when exploring slot play, and some campaigns count slot activity differently from other categories. Confirm active terms inside the official promotions area before you opt in, paying particular attention to which categories contribute towards any wagering condition.",
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
          {
            id: "slots-faq-3",
            question: "How do I choose between titles?",
            answer:
              "Decide what you want from the session first. Simpler classic-style games are easier to follow, while feature-led titles reward exploring. Open the information panel before playing so you know how each feature behaves.",
          },
          {
            id: "slots-faq-4",
            question: "How should I manage a slot session?",
            answer:
              "Set your time and spending limit before you open the lobby and treat it as fixed. Because rounds resolve quickly, check the clock between spins so a short session does not quietly become a long one.",
          },
        ],
      },
      "live-casino": {
        formatTitle: "Live table experience",
        formatItems: [
          "Live dealer tables can include familiar formats such as baccarat, roulette and blackjack where available.",
          "Streaming presentation is designed to recreate table energy with real-time dealing and interface controls.",
          "Each table publishes its own information panel covering rules, side bets and limits before you take a seat.",
          "Timed betting windows keep rounds on schedule, so decisions happen at the table’s pace rather than yours.",
          "Stable connectivity matters more here than for simpler category pages because the experience depends on live video.",
        ],
        suitedFor: [
          "Players who want a more immersive table-game environment than automated rounds provide.",
          "Members who enjoy real-time pace and are comfortable deciding within a betting window.",
          "Users comfortable switching between table views and account controls on mobile.",
          "Anyone happy to watch a few rounds before joining in order to learn a table’s flow.",
        ],
        relatedTitle: "Access & etiquette",
        relatedCopy:
          "Live casino is best approached with a stable network, clear limits set in advance and enough time to follow each table flow without rushing. A little table etiquette goes a long way too: place decisions inside the betting window so the round is not held up, and keep chat respectful towards the dealer and other players. Because the table sets the pace rather than you, decide how long you will stay before you sit down.",
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
          {
            id: "live-faq-3",
            question: "Where do I learn a table’s rules and limits?",
            answer:
              "The table information panel shows rules, bet types, side bets and limits before you join. Read it first, since variants differ between studios even when the core game is familiar.",
          },
          {
            id: "live-faq-4",
            question: "Why does my stream stutter sometimes?",
            answer:
              "Live video is more connection-sensitive than static pages. A steady signal matters more than a fast one, so switch networks between rounds rather than mid-hand and close unused browser tabs to free memory.",
          },
        ],
      },
      sports: {
        formatTitle: "Sports coverage",
        formatItems: [
          "Football, basketball and tennis are core reference categories across sports-oriented YES2WIN content.",
          "Other supported sports may appear depending on current platform coverage and your region.",
          "Pre-match markets open before an event, giving you time to review a selection properly.",
          "In-play markets update during an event and can be suspended around key moments, so prices move quickly.",
          "Markets, prices and settlement rules are shown on the official platform, not fixed on this partner site.",
        ],
        suitedFor: [
          "Fans who follow major fixtures and want a clear sports navigation flow.",
          "Members who check markets from their phone during the day rather than sitting in a lobby.",
          "Users who prefer event-driven entertainment over continuous play.",
          "Newcomers who want to start with a single simple market in a competition they already know.",
        ],
        relatedTitle: "How to follow sports on mobile",
        relatedCopy:
          "Sports pages work best when you need quick scans of events, categories and related links, which makes the phone a natural place to keep up during the day. In-play betting is the most connection-sensitive part of the category, so use a stable network when prices are moving. For live market details, settlement rules and your betting history, continue into the official sports area after login — that history is the authoritative record of any selection’s status.",
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
          {
            id: "sports-faq-3",
            question: "What is the difference between pre-match and in-play?",
            answer:
              "Pre-match markets are available before an event starts and give you time to consider. In-play markets update while the event runs, move faster and can be suspended around key moments, so they suit people already comfortable with the sport.",
          },
          {
            id: "sports-faq-4",
            question: "When will my selection be settled?",
            answer:
              "Settlement follows the official result, so it usually happens shortly after an event ends. Disputed, delayed, postponed or abandoned events follow the rules published with that market, and your betting history shows the current status.",
          },
        ],
      },
      fishing: {
        formatTitle: "Fishing gameplay overview",
        formatItems: [
          "Fishing titles mix arcade-style shooting with fast target selection and immediate visual feedback.",
          "Sessions often feel more active than slots because you aim, fire and chase higher-value catches continuously.",
          "Each title publishes a value table showing which targets carry which rewards.",
          "Adjustable shot or weapon levels change how quickly a session moves — and how quickly a balance moves with it.",
          "Bright visuals and touch interaction make the category especially easy to understand on phones.",
        ],
        suitedFor: [
          "Players who prefer a more hands-on pace than spin- or draw-based play.",
          "Members who enjoy colourful, skill-flavoured interfaces with instant feedback.",
          "Mobile users looking for short but lively sessions.",
          "Anyone comfortable watching a room for a moment before joining it.",
        ],
        relatedTitle: "How to approach fishing games",
        relatedCopy:
          "Use the partner site to understand the category, then browse the live fishing section after login to see which titles and interfaces are available for your account. Two habits make the difference: read the value table before you start so you know what you are aiming at, and keep an eye on your shot level, since play is continuous rather than round-based and higher levels spend noticeably faster. Setting a session limit up front is more effective here than in almost any other category.",
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
          {
            id: "fishing-faq-3",
            question: "What controls should I expect?",
            answer:
              "Most titles combine aiming, firing and a control for shot strength or weapon type, with auto-fire in some games. On a phone you generally tap where you want to shoot. Check the on-screen legend before increasing your shot level.",
          },
          {
            id: "fishing-faq-4",
            question: "How do I keep a session under control?",
            answer:
              "Because play is continuous rather than round-based, set a session limit before you start, avoid leaving auto-fire running unattended, and take breaks at fixed intervals so you check your balance deliberately.",
          },
        ],
      },
      lottery: {
        formatTitle: "Lottery / 4D overview",
        formatItems: [
          "Lottery is the calmer, number-led side of the YES2WIN ecosystem, with no continuous session to manage.",
          "4D-style references focus on draw participation and results checking rather than fast interactive play.",
          "Formats differ in how many digits you select and how a selection resolves, so each publishes its own rules.",
          "Entries close before the published draw time, which means there is a deadline rather than an open window.",
          "Current formats and draw information must always be confirmed on the live platform.",
        ],
        suitedFor: [
          "Members who prefer number-based entertainment over interface-driven play.",
          "Users looking for a simpler participation flow they can complete in a minute.",
          "Players who want a contrast to live streaming or arcade-style categories.",
          "Anyone who finds a scheduled draw easier to budget for than a continuous session.",
        ],
        relatedTitle: "Current draw information",
        relatedCopy:
          "This partner page explains the category structure only. For live lottery / 4D availability, current rules and results views, continue into the official platform after login. Two practical points before your first entry: read the rules for the specific format you choose, since the way a selection wins is not identical across formats, and leave yourself a margin before the closing time rather than entering at the last moment.",
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
              "It separates the decision from the outcome — you make a selection, then wait for a scheduled draw. Without a continuous play loop, many people find it calmer and easier to budget for.",
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
