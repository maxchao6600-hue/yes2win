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
          "Use the password recovery option on the official login page. If you still need help, contact support through the channels listed on the platform or on our Contact page once configured.",
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
          "Use the Partner Support channel on the Contact page once configured, or the support options inside the official partner tools.",
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
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
