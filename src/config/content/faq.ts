export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        id: "what-is-yes2win",
        question: "What is YES2WIN?",
        answer:
          "YES2WIN is an online entertainment ecosystem that brings together multiple game categories — including slots, live casino, sports, fishing and lottery — under one platform experience.",
      },
      {
        id: "what-is-partner-site",
        question: "What is the YES2WIN Official Partner website?",
        answer:
          "This website is an official partner information portal. It helps visitors learn about the YES2WIN ecosystem, explore categories and access registration or login through configured platform links. It is not the primary YES2WIN corporate website.",
      },
      {
        id: "tagline",
        question: "What does “YES is the Choice. WIN is the Result.” mean?",
        answer:
          "It is the YES2WIN brand expression — highlighting the idea of choosing the ecosystem and engaging with its entertainment experience. It is a brand statement, not a guarantee of outcomes.",
      },
      {
        id: "who-is-this-for",
        question: "Who is this website for?",
        answer:
          "It is for people who want clear information about YES2WIN categories, promotions structure, payments overview, mobile access, partner opportunities and responsible gaming — before or while using the platform.",
      },
      {
        id: "what-can-i-do-here",
        question: "What can I do on this website itself?",
        answer:
          "You can explore guides, FAQ answers, page-by-page overviews and access routes for registration, login and partner entry. This site does not host live games or payment tools directly.",
      },
    ],
  },
  {
    id: "account",
    title: "Account",
    items: [
      {
        id: "create-account",
        question: "How do I create a YES2WIN account?",
        answer:
          "Use the Register Now button on this site. It opens the official registration flow where you can create your account by following the on-screen steps.",
      },
      {
        id: "manage-account",
        question: "Where do I manage my account details?",
        answer:
          "Account settings, security options and profile updates are handled inside the official YES2WIN platform after you log in — not on this partner information website.",
      },
      {
        id: "forgot-password",
        question: "What if I forget my password?",
        answer:
          "Use the password recovery option on the official login page. If you still need help, use platform support after login or visit the Contact page on this partner site.",
      },
      {
        id: "account-records",
        question: "Where can I view transaction or betting records?",
        answer:
          "Those records are typically available inside the official YES2WIN account area after login. This partner site explains the ecosystem but does not expose account history.",
      },
      {
        id: "account-verification",
        question: "Why might my account need verification?",
        answer:
          "Verification can be required for security, identity checks or payment-related reviews. Always follow the official prompts shown in your account.",
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    items: [
      {
        id: "how-register",
        question: "How do I register?",
        answer:
          "Select Register Now, complete the required fields on the official signup page, accept the applicable terms and submit. You may need to verify your details before using certain features.",
      },
      {
        id: "registration-requirements",
        question: "What information is required to register?",
        answer:
          "Exact requirements are shown during signup and may include basic identity and contact details. Always provide accurate information so your account can be verified when needed.",
      },
      {
        id: "age-requirement",
        question: "Is there an age requirement?",
        answer:
          "Yes. You must meet the legal age requirement for online gaming in your jurisdiction. If you are underage, do not register or play.",
      },
      {
        id: "promo-code-register",
        question: "Do I need a promo or referral code to register?",
        answer:
          "Not always. If the live registration form includes a promo or referral field, use only the value you were given and avoid guessing or entering unofficial codes.",
      },
      {
        id: "registration-guide",
        question: "Is there a registration guide before I sign up?",
        answer:
          "Yes. Visit the Register Guide page on this website for a step-by-step overview of the public signup flow before you open the official form.",
      },
    ],
  },
  {
    id: "login",
    title: "Login",
    items: [
      {
        id: "how-login",
        question: "How do I log in?",
        answer:
          "Select Login and enter your credentials on the official login page. Once authenticated, you can access games, account tools and platform features.",
      },
      {
        id: "login-issues",
        question: "What should I do if I cannot log in?",
        answer:
          "Confirm your username and password, check your network connection and try again. If the issue continues, use the platform’s recovery tools or contact support.",
      },
      {
        id: "login-device",
        question: "Can I log in from mobile and desktop?",
        answer:
          "Yes. YES2WIN is designed to be accessible across device types through supported browsers, although the exact experience can vary by connection quality and screen size.",
      },
      {
        id: "login-security",
        question: "How do I avoid login security problems?",
        answer:
          "Use a strong unique password, avoid shared devices when possible and access YES2WIN through official links rather than unknown third-party pages.",
      },
    ],
  },
  {
    id: "games",
    title: "Games",
    items: [
      {
        id: "game-categories",
        question: "What game categories are available?",
        answer:
          "The YES2WIN ecosystem commonly includes slots, live casino, sports, fishing and lottery. Availability can vary by region and account status.",
      },
      {
        id: "where-play",
        question: "Where can I access YES2WIN games?",
        answer:
          "Games are played on the official YES2WIN platform after login. This partner website helps you understand categories and navigate to registration or login.",
      },
      {
        id: "providers",
        question: "Which game providers power YES2WIN?",
        answer:
          "Provider availability is shown inside the platform lobby. This partner site focuses on categories rather than listing unverified provider catalogues.",
      },
      {
        id: "game-availability",
        question: "Are all categories available to every account?",
        answer:
          "Not necessarily. Category availability can vary by region, account status and platform updates, so always confirm the live lobby after login.",
      },
      {
        id: "how-choose-category",
        question: "How do I choose the right category for me?",
        answer:
          "Slots suit quick variety, live casino offers streamed tables, sports follows events, fishing is more interactive and lottery is simpler and draw-based. The Games hub explains each path.",
      },
    ],
  },
  {
    id: "slots",
    title: "Slots",
    items: [
      {
        id: "slots-what",
        question: "What are YES2WIN slot games like?",
        answer:
          "Slots are one of the most varied YES2WIN categories, with different themes, pacing and feature styles shown in the live lobby after login.",
      },
      {
        id: "slots-mobile",
        question: "Do slots work well on mobile?",
        answer:
          "Yes. Slot-style interfaces usually translate well to touch screens, making them one of the most mobile-friendly categories.",
      },
      {
        id: "slots-promotions",
        question: "Where do I check slot-related promotions?",
        answer:
          "Visit the Promotions page for the offer structure, then confirm any slot-related live campaign terms inside the official platform.",
      },
    ],
  },
  {
    id: "live-casino",
    title: "Live Casino",
    items: [
      {
        id: "live-what",
        question: "What is live casino on YES2WIN?",
        answer:
          "Live casino refers to real-time streamed table experiences that may include baccarat, roulette and blackjack where available on the platform.",
      },
      {
        id: "live-connection",
        question: "Why does connection quality matter more for live casino?",
        answer:
          "Because live casino depends on streaming video and real-time table updates, it benefits from a stronger connection than static page browsing or simpler game types.",
      },
      {
        id: "live-mobile",
        question: "Can I join live casino from mobile?",
        answer:
          "Yes, provided your device and browser can handle the stream smoothly and the category is available to your account.",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    items: [
      {
        id: "sports-coverage",
        question: "Which sports does YES2WIN highlight?",
        answer:
          "Football, basketball and tennis are common reference categories, with other supported sports depending on live platform coverage.",
      },
      {
        id: "sports-odds",
        question: "Do you publish odds or event lines on this site?",
        answer:
          "No. Odds and markets change live and must be checked on the official platform rather than copied into a static partner guide.",
      },
      {
        id: "sports-mobile",
        question: "Is sports access mobile-friendly?",
        answer:
          "Yes. Sports browsing is designed to stay readable on smaller screens so you can check events and navigate quickly.",
      },
    ],
  },
  {
    id: "fishing",
    title: "Fishing",
    items: [
      {
        id: "fishing-what",
        question: "What makes fishing games different?",
        answer:
          "Fishing titles are more interactive than many other categories, often using targeting and shooting mechanics instead of simple spins or draw entries.",
      },
      {
        id: "fishing-mobile",
        question: "Are fishing games comfortable on touch screens?",
        answer:
          "Yes. When supported, touch controls can make fishing games intuitive on phones and tablets.",
      },
      {
        id: "fishing-access",
        question: "Where do I access fishing games?",
        answer:
          "Use this partner site to learn the category, then open the official YES2WIN lobby after login to browse fishing titles available to your account.",
      },
    ],
  },
  {
    id: "lottery",
    title: "Lottery / 4D",
    items: [
      {
        id: "lottery-what",
        question: "What is the lottery or 4D category?",
        answer:
          "It is the number-based side of the YES2WIN ecosystem, focused on draw-style participation rather than interactive arcade or table play.",
      },
      {
        id: "lottery-results",
        question: "Do you show winning numbers or draw results here?",
        answer:
          "No. This partner site does not publish live results. Check the official platform for current lottery or 4D information when available.",
      },
      {
        id: "lottery-access",
        question: "How do I access lottery options?",
        answer:
          "Register or log in, then open the lottery section inside the YES2WIN platform if it is enabled for your account and region.",
      },
    ],
  },
  {
    id: "promotions",
    title: "Promotions",
    items: [
      {
        id: "where-promotions",
        question: "Where can I find promotions?",
        answer:
          "Visit the Promotions page on this site for an overview of offer types, then check the official platform for live campaign details, amounts and terms.",
      },
      {
        id: "bonus-amounts",
        question: "Why don’t you list exact bonus percentages here?",
        answer:
          "Promotional values change and must match the live platform terms. We keep this hub structural so you can review current offers where they are officially published.",
      },
      {
        id: "promo-terms",
        question: "Do promotions have terms and conditions?",
        answer:
          "Yes. Every offer has eligibility rules, wagering or usage conditions and expiry details. Always read the terms before opting in.",
      },
      {
        id: "promo-claim",
        question: "How do I claim promotions?",
        answer:
          "Claiming steps vary by campaign. Some offers may auto-apply while others require opt-in or qualifying activity. The live promotions area explains the active process.",
      },
      {
        id: "promo-eligibility",
        question: "Why might I not qualify for a promotion?",
        answer:
          "Eligibility can depend on account status, location, timing, category, payment method or whether you already used a similar offer. Always review the live rules.",
      },
    ],
  },
  {
    id: "vip",
    title: "VIP",
    items: [
      {
        id: "vip-entry",
        question: "How does VIP access work?",
        answer:
          "VIP access is determined through the official platform and related communications. This site explains the experience but does not assign VIP status itself.",
      },
      {
        id: "vip-tiers",
        question: "Do you list VIP tiers or guaranteed rewards here?",
        answer:
          "No. We do not invent tier structures, cash values or guaranteed benefits. Current VIP details are communicated through official channels only.",
      },
      {
        id: "vip-support",
        question: "Can VIP members receive priority support?",
        answer:
          "Priority or more personalised support may be available where the VIP programme provides it. Confirm live details through official VIP communications.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      {
        id: "payment-methods",
        question: "What payment methods are available?",
        answer:
          "The ecosystem may support bank transfer, e-wallet, online banking and cryptocurrency options. Exact methods depend on your location and account status.",
      },
      {
        id: "limits-fees",
        question: "What are the fees and limits?",
        answer:
          "Limits, fees and processing times vary by method and account verification. Confirm the latest details in your cashier on the official platform.",
      },
      {
        id: "withdrawals",
        question: "How do withdrawals work?",
        answer:
          "Withdrawals are requested through your account on the official platform and may require verification. Processing depends on the selected method and account checks.",
      },
      {
        id: "payment-confirmed-methods",
        question: "Which payment categories are commonly referenced?",
        answer:
          "Common YES2WIN payment references include bank transfer, e-wallet, DuitNow, online banking, Touch n Go and crypto categories where supported.",
      },
      {
        id: "payment-issues",
        question: "What should I do if a payment method is not showing?",
        answer:
          "Supported options can vary by region, account status and cashier configuration. Log in again, review your account status and use official support if the issue continues.",
      },
    ],
  },
  {
    id: "deposit",
    title: "Deposit",
    items: [
      {
        id: "deposit-how",
        question: "How do deposits usually work?",
        answer:
          "After login, open the cashier, choose a supported deposit method and follow the on-screen steps. Available methods appear only when enabled for your account.",
      },
      {
        id: "deposit-failed",
        question: "What if my deposit does not go through?",
        answer:
          "Recheck the method details, account status and any payment instructions shown in the cashier. If the issue continues, use official support rather than repeating failed attempts.",
      },
      {
        id: "deposit-promo",
        question: "Can deposit promotions depend on payment method?",
        answer:
          "Yes. Some live campaigns can be limited by method, timing or account status, so always read the current offer terms carefully.",
      },
    ],
  },
  {
    id: "withdrawal",
    title: "Withdrawal",
    items: [
      {
        id: "withdrawal-how",
        question: "How do I request a withdrawal?",
        answer:
          "Log in, open the cashier, choose a supported withdrawal pathway and complete any account or payment verification prompts shown by the platform.",
      },
      {
        id: "withdrawal-verification",
        question: "Why can withdrawals require extra checks?",
        answer:
          "Withdrawal reviews may involve identity, payment source or account-security checks. These help confirm the request is valid and safe.",
      },
      {
        id: "withdrawal-records",
        question: "Where do I check withdrawal history?",
        answer:
          "Withdrawal records are typically shown inside the official account or cashier area after login.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: [
      {
        id: "mobile-access",
        question: "Can I access YES2WIN on mobile?",
        answer:
          "Yes. YES2WIN is designed for mobile browsing so you can explore categories and manage your account from a phone or tablet browser.",
      },
      {
        id: "app-download",
        question: "Is there an official app download on this site?",
        answer:
          "This partner website does not publish unverified app-store links. Use Access YES2WIN / Login to reach the official platform experience on your device.",
      },
      {
        id: "mobile-browser",
        question: "Which mobile path does this site recommend?",
        answer:
          "A modern mobile browser is the clearest default path because it lets you review the partner guide and continue into the official platform without relying on unofficial downloads.",
      },
      {
        id: "mobile-payments",
        question: "Can I handle payments from mobile?",
        answer:
          "Yes, when supported by the platform. Deposits, withdrawals and related verification usually continue inside the official cashier after login.",
      },
    ],
  },
  {
    id: "partner",
    title: "Partner",
    items: [
      {
        id: "become-partner",
        question: "How can I become a partner?",
        answer:
          "Visit the Partner page to understand the journey, then use the partner CTA to open the official partner access flow when you are ready.",
      },
      {
        id: "partner-income",
        question: "Do you guarantee partner income?",
        answer:
          "No. Partner outcomes depend on many factors. This site does not publish guaranteed commissions, revenue figures or income promises.",
      },
      {
        id: "partner-support",
        question: "Where can partners get support?",
        answer:
          "Visit the Contact page for partner support pathways, or use the support options inside the official partner tools after access is granted.",
      },
      {
        id: "partner-start",
        question: "What is the first step to become a partner?",
        answer:
          "Begin with the Partner page on this website, then use the official partner CTA to continue into the live partner access flow when you are ready.",
      },
      {
        id: "partner-materials",
        question: "What kind of partner resources does this site provide?",
        answer:
          "This site provides public-facing guidance around YES2WIN categories, messaging, navigation and responsible positioning. Official commercial terms and private tools remain on the platform side.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    items: [
      {
        id: "account-security",
        question: "How can I keep my account secure?",
        answer:
          "Use a strong unique password, enable any available security features on the platform, avoid sharing credentials and be cautious of phishing messages.",
      },
      {
        id: "personal-data",
        question: "How is personal information handled?",
        answer:
          "Review the Privacy Policy on this site and the privacy disclosures on the official platform. Provide only what is required and use official channels for account changes.",
      },
      {
        id: "phishing",
        question: "How do I avoid phishing or fake pages?",
        answer:
          "Use the configured Register and Login links on this site or the known official platform addresses. Avoid unsolicited links, unofficial support contacts and requests for your password.",
      },
      {
        id: "shared-devices",
        question: "Is it safe to use shared devices?",
        answer:
          "Shared devices increase risk. If you must use one, log out fully, avoid saving passwords and clear any sensitive session data afterwards.",
      },
    ],
  },
  {
    id: "responsible-gaming",
    title: "Responsible Gaming",
    items: [
      {
        id: "play-responsibly",
        question: "What does responsible gaming mean here?",
        answer:
          "It means treating entertainment as recreation — setting limits, staying aware of spending and seeking help if play stops feeling healthy. See our Responsible Gaming page for guidance.",
      },
      {
        id: "get-help",
        question: "Where can I find help if gaming becomes a problem?",
        answer:
          "Pause play, talk to someone you trust and seek professional support resources available in your region. Our Responsible Gaming page outlines practical first steps.",
      },
      {
        id: "set-limits",
        question: "How can I stay in control while playing?",
        answer:
          "Set time and spending limits before you begin, take regular breaks and avoid chasing losses. Entertainment should stay recreational and manageable.",
      },
      {
        id: "when-stop",
        question: "When should I stop playing?",
        answer:
          "Stop if you feel stressed, are spending beyond your budget, are trying to recover losses or notice that gaming is affecting daily responsibilities.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
