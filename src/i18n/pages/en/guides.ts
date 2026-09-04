/** Copy for the guide-style pages: register guide, account guide and responsible gaming. */
export const guidesEn = {
  registerGuide: {
    eyebrow: "Register Guide",
    title: "How to register for YES2WIN",
    description:
      "A practical walkthrough of the official YES2WIN signup journey based on the public registration flow. Live fields can change, so always follow the current form.",
    crumb: "Register Guide",
    heroImageAlt: "YES2WIN registration artwork",
    primaryCta: "Register Now",
    secondaryCta: "Registration FAQ",
    jsonLdName: "YES2WIN Register Guide",
    jsonLdDescription: "Step-by-step guidance for the YES2WIN registration flow.",
    intro: {
      imageAlt: "YES2WIN account registration guide visual",
      cards: [
        {
          title: "What this guide covers",
          body: "This page explains the signup flow, the types of details you may be asked for and how registration connects to payments, verification and first login. It does not recreate the form locally, because the live form is the only version guaranteed to be current — field labels and the order of steps can change as the platform updates.",
        },
        {
          title: "What happens after registration",
          body: "After your account is created, you can sign in to browse game categories, review current promotions, open the cashier and check whether additional verification is required for payment activity. Registration and full cashier access are not always the same milestone: an account can exist while a verification or security step is still outstanding.",
        },
      ],
    },
    steps: [
      {
        step: "01",
        title: "Open the official signup form",
        body: "Use Register Now from this website to continue into the live YES2WIN registration page in the correct environment. Starting from an official route matters more than it sounds — it is the simplest way to be certain you are entering details on the genuine platform rather than a copied page, and it keeps any partner or campaign context intact.",
      },
      {
        step: "02",
        title: "Choose your account details",
        body: "Create the username and password requested by the form. Exact field labels can change as the platform updates. Choose a password you do not use anywhere else, since the same credentials reused across sites are the most common way accounts are compromised, and note that a username usually cannot be changed later.",
      },
      {
        step: "03",
        title: "Provide required personal details",
        body: "Enter only the information requested during signup and keep it accurate. Identity-linked fields such as your name and date of birth may become fixed once set, and later verification compares your documents against exactly what you typed here — a mistyped name is one of the most common causes of a first withdrawal sitting in review.",
      },
      {
        step: "04",
        title: "Review promo or referral inputs",
        body: "If the form includes promo-code or referral-code fields, review them carefully before submission rather than guessing values. Codes are usually applied at signup and generally cannot be added afterwards, so leave the field blank if you do not have one from an official source instead of entering something speculative.",
      },
      {
        step: "05",
        title: "Agree to the applicable terms",
        body: "Read the platform terms shown during registration and continue only if you meet the legal age and jurisdiction requirements. This is also where the rules on one account per person, accurate details and account use are set out — worth reading properly, because they govern everything that follows.",
      },
      {
        step: "06",
        title: "Complete verification or payment PIN setup",
        body: "Some accounts may be prompted for phone verification, confirmation steps or payment PIN setup before full cashier access. Completing these while you are already in the flow is far easier than returning to them later under time pressure, and a payment PIN in particular is worth recording somewhere safe rather than relying on memory.",
      },
    ],
    troubleshooting: {
      eyebrow: "Troubleshooting",
      title: "If something goes wrong during signup",
      description:
        "Most registration problems are ordinary and fixable. The following covers what people actually run into, and what usually resolves it before you need to contact anyone.",
      points: [
        {
          title: "The form will not submit",
          body: "Look for a field flagged in red first — a required box left empty or a format the form rejects is the usual cause. If nothing is flagged, refresh the page, disable any script-blocking or data-saver mode and try again with an up-to-date browser.",
        },
        {
          title: "Your chosen username is taken",
          body: "Usernames must be unique across the platform, so common ones are often already in use. Choose a variation rather than adding personal information such as your birth year to the end of it.",
        },
        {
          title: "The verification message has not arrived",
          body: "Confirm the number or address you entered is correct, wait for the interval the form specifies before requesting another, and check spam or blocked-message folders. Repeatedly requesting a new code can temporarily lock the process.",
        },
        {
          title: "A promo or referral code is rejected",
          body: "Codes expire, are case-sensitive and are often limited to specific regions or campaigns. Confirm it came from an official source and copy it exactly. If it still fails, continue registration without it rather than abandoning signup.",
        },
        {
          title: "You are unsure whether the account was created",
          body: "Try logging in with the details you entered before registering again. Duplicate accounts complicate verification later and generally breach the one-account rule, so it is better to attempt recovery than to start over.",
        },
        {
          title: "Registration is unavailable in your location",
          body: "Availability depends on your jurisdiction, and that is a rule rather than a fault. Attempting to work around a regional restriction risks the account being closed and funds being held during review.",
        },
      ],
    },
    tips: [
      {
        title: "Account accuracy",
        body: "Use accurate personal information so future verification or support checks are less likely to be delayed. Details that match your identity documents from the start save far more time than they cost.",
      },
      {
        title: "Password safety",
        body: "Choose a unique password and keep it private. Never share registration credentials with anyone — no legitimate support agent, VIP host or partner will ever ask for them.",
      },
      {
        title: "Payment readiness",
        body: "If a payment PIN or cashier security step appears, complete it carefully because it can affect deposit and withdrawal access later. Store it somewhere secure rather than reusing a PIN from another service.",
      },
      {
        title: "One account per person",
        body: "Register once. Duplicate accounts are a common reason for restrictions and complicate verification, and opening a second account is never the right fix for a login problem.",
      },
      {
        title: "Read before you deposit",
        body: "If you intend a first deposit to qualify for a campaign, check the promotions area before funding rather than afterwards, since timing and payment method can both affect eligibility.",
      },
      {
        title: "Need help?",
        body: "Use the FAQ, Contact and Payment Guide pages on this website for orientation before contacting official support channels — many signup questions are already answered in more detail than a support reply would fit.",
      },
    ],
    finalCta: {
      title: "Ready to create your YES2WIN account?",
      description: "Continue into the official registration flow when you are ready.",
    },
  },

  accountGuide: {
    eyebrow: "Account Guide",
    title: "Understand your YES2WIN account",
    description:
      "A practical map of the tools members usually look for after login — without recreating the live account dashboard on this partner site.",
    crumb: "Account Guide",
    heroImageAlt: "YES2WIN account artwork",
    primaryCta: "Login",
    secondaryCta: "Registration guide",
    jsonLdName: "YES2WIN Account Guide",
    jsonLdDescription: "Orientation for YES2WIN account features after login.",
    afterLogin: {
      imageAlt: "YES2WIN account access overview",
      eyebrow: "After login",
      title: "What the account area is for",
      description:
        "Once you sign in on the official platform, you can typically move between profile settings, payment tools, activity records and promotion history. Knowing which area answers which question is most of the battle — a surprising number of support enquiries are about something the member could already see in their own records.",
      bullets: [
        "Keep personal details accurate for support and verification.",
        "Review deposits, withdrawals and play history when needed.",
        "Check promotion participation against the live offer terms.",
        "Complete verification prompts only through official flows.",
        "Treat your account records as the authoritative version of what happened.",
        "Look for responsible gaming controls where the platform provides them.",
      ],
    },
    featureMap: {
      title: "Account feature map",
      description:
        "Common YES2WIN account areas explained in plain language, so you know what each one is for before you open it. Exact menu names vary and not every area appears for every member — availability depends on region, verification status and platform updates.",
    },
    cards: [
      {
        title: "Profile & security",
        body: "Update contact details carefully and protect login with a unique password. Payment PIN setup may appear when cashier access requires it. Identity-linked fields such as your name or date of birth are often locked once set, since they must continue to match your verification documents — which is exactly why accuracy at registration matters so much.",
      },
      {
        title: "Records & reports",
        body: "Transaction, betting and win/loss views help you understand recent activity. Use them for orientation, not as financial advice. They are also the first place to look when something seems wrong: a deposit that has not appeared, a withdrawal still in progress or a bet whose status you are unsure of will usually be explained here before support can add anything.",
      },
      {
        title: "Promotions & referral",
        body: "Promotion history shows what you have engaged with, which is useful when you are unsure whether a condition is still attached to your balance. Referral tools, when enabled, should use official sharing links only — a rewritten or shortened link can break attribution entirely.",
      },
      {
        title: "Cashier & verification",
        body: "Deposits, withdrawals and any document checks run through the cashier and its verification prompts. Complete requests through in-account upload flows only, and never by message or email, no matter who appears to be asking.",
      },
      {
        title: "Responsible gaming controls",
        body: "Where the platform provides limit or self-exclusion tools, they sit inside your account rather than on this partner site. Setting a limit in advance is far more effective than deciding in the middle of a session, when it is hardest to be objective.",
      },
      {
        title: "Notifications & messages",
        body: "Genuine platform communications, including VIP contact and offer notices, arrive through your account channels. Anything reaching you elsewhere that asks for your password or a payment is not legitimate, regardless of how convincing it looks.",
      },
    ],
    faqSection: {
      eyebrow: "FAQ",
      title: "Account questions",
      links: [
        { label: "Payment guide", href: "/payment/" },
        { label: "Account FAQ", href: "/faq/#account" },
        { label: "Register guide", href: "/register-guide/" },
        { label: "Security FAQ", href: "/faq/#security" },
        { label: "Contact", href: "/contact/" },
        { label: "Responsible gaming", href: "/responsible-gaming/" },
      ],
    },
    faqs: [
      {
        id: "ag1",
        question: "Where do account tools live?",
        answer:
          "Profile, records, verification and cashier tools are managed on the official YES2WIN platform after login. This guide explains what to look for before you open those screens.",
      },
      {
        id: "ag2",
        question: "Can I change account details on this partner website?",
        answer:
          "No. This site is an information and access gateway. Use the official platform for profile updates, security changes and payment actions.",
      },
      {
        id: "ag3",
        question: "What if a menu item is missing from my account?",
        answer:
          "Available tools can vary by region, verification status and platform updates. If something expected is missing, check again after login or use official support pathways.",
      },
      {
        id: "ag4",
        question: "What should I check before contacting support?",
        answer:
          "Open your transaction or betting records first and note the date, amount and status of whatever you are asking about. Most questions are answered there, and when they are not, quoting the record makes the reply far faster and more specific.",
      },
      {
        id: "ag5",
        question: "How do I keep my account secure day to day?",
        answer:
          "Use a unique password, keep any payment PIN private, log in only through official routes rather than links sent to you, and treat any unsolicited request for your credentials as fraudulent. Genuine support will never ask for your password.",
      },
      {
        id: "ag6",
        question: "Why can I not edit my name or date of birth?",
        answer:
          "Identity-linked details are usually locked once set because they must match the documents used for verification. If something was entered incorrectly at registration, raise it through official support rather than opening a second account.",
      },
    ],
    finalCta: {
      title: "Open your YES2WIN account",
      description: "Log in on the official platform to manage profile, records and cashier tools.",
    },
  },

  responsibleGaming: {
    eyebrow: "18+",
    title: "Play responsibly with YES2WIN",
    description:
      "Keep entertainment recreational. Use these principles to stay in control, protect your wellbeing and know when to pause.",
    crumb: "Responsible Gaming",
    heroImageAlt: "Responsible gaming artwork",
    primaryCta: "Responsible gaming FAQ",
    secondaryCta: "Contact",
    jsonLdName: "Responsible Gaming",
    jsonLdDescription: "Responsible gaming guidance for YES2WIN visitors.",
    intro: {
      imageAlt: "Responsible gaming visual for YES2WIN",
      title: "A healthier way to enjoy entertainment",
      description:
        "YES2WIN should stay fun. These habits help you keep perspective and reduce the chance that play becomes pressure. None of them require you to be worried about your gambling — they work best as ordinary defaults, adopted while everything still feels comfortable, because that is when they are easiest to set and hardest to argue with later.",
      note: "If gambling no longer feels recreational — or if you feel compelled to continue despite harm — pause play, talk to someone you trust and seek professional support. Difficulty stopping is a recognised issue with established help available, not a personal failing, and reaching out early makes it considerably easier to resolve.",
    },
    topics: [
      {
        title: "Play responsibly",
        body: "Treat gaming as recreation, and judge it the way you would judge any other entertainment: by whether you enjoyed the time, not by whether you came out ahead. Decide your time and money limits before you start, then stop when you reach them — a limit you renegotiate mid-session was never really a limit.",
      },
      {
        title: "Age restriction",
        body: "You must meet the legal age requirement in your jurisdiction. Do not register or play if you are underage, and do not allow anyone underage to use your account or device while you are signed in. Keeping your credentials private and your session closed on shared devices is part of this.",
      },
      {
        title: "Set limits",
        body: "Choose a budget you can afford to lose for entertainment, and treat it as spent the moment you deposit it. Keep gaming money separate from rent, bills and essential spending, and never fund play with borrowed money or credit — the pressure to recover a loss becomes very different once it is money you owe.",
      },
      {
        title: "Take breaks",
        body: "Step away regularly rather than only when something goes wrong. Long unbroken sessions make it harder to notice fatigue, stress or impulsive decisions, and fast-resolving categories in particular can absorb far more time than they seem to. A fixed break interval, or an alarm, works better than relying on judgement while you are absorbed in play.",
      },
      {
        title: "Avoid chasing losses",
        body: "Increasing stakes to recover money is the clearest warning sign there is. A previous loss does not make anything more likely to land next, and the impulse to win it back is exactly when decisions get worse. If you notice yourself thinking in terms of getting even, that is the moment to stop for the day rather than the moment to continue.",
      },
      {
        title: "Spending awareness",
        body: "Review your deposits and session length honestly at intervals, using your account records rather than memory — recollection tends to soften losses and sharpen wins. If gaming starts affecting sleep, work, relationships or finances, stop and reassess rather than waiting for a clearer signal.",
      },
      {
        title: "Keep it in perspective",
        body: "Games are designed as entertainment and no strategy, system or pattern changes that. Treating play as a source of income, or as a way out of a financial problem, reliably makes both the finances and the enjoyment worse.",
      },
      {
        title: "Play with a clear head",
        body: "Avoid playing when you are upset, exhausted, bored or under the influence of alcohol. Decisions made in those states are the ones people most often regret, and the limits you set calmly are exactly the ones that protect you then.",
      },
    ],
    whenToPause: {
      title: "When to pause",
      items: [
        "You are spending money meant for essentials.",
        "You feel anxious, angry or compelled to keep playing.",
        "You hide play or lose track of time and deposits.",
        "Gaming is affecting sleep, work or relationships.",
        "You are increasing stakes to recover previous losses.",
        "You are borrowing money or using credit to keep playing.",
        "Play has stopped feeling enjoyable but you continue anyway.",
        "You feel relief rather than reluctance at the idea of stopping.",
      ],
    },
    whereToSeekHelp: {
      title: "Where to seek help",
      intro: "Local support options may apply where you live. International starting points include ",
      resourceSeparator: " and ",
      resourceSuffix: ".",
      resources: [
        { label: "BeGambleAware", href: "https://www.begambleaware.org/" },
        { label: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
      ],
      partnerNoteBefore: "For partner-site questions, visit the ",
      partnerNoteFaqLabel: "FAQ",
      partnerNoteBetween: " or ",
      partnerNoteContactLabel: "Contact",
      partnerNoteAfter: " page.",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Responsible gaming questions",
    },
    faqs: [
      {
        id: "rg1",
        question: "When should I pause playing?",
        answer:
          "Pause if you feel stressed, are spending beyond your budget, are chasing losses, or notice gaming interfering with daily responsibilities. You do not need to be certain there is a problem to take a break — pausing while you are still unsure is exactly when it is easiest to do.",
      },
      {
        id: "rg2",
        question: "Where can I find help?",
        answer:
          "Talk to someone you trust and use professional resources available in your region. International starting points include BeGambleAware and Gambling Therapy, both of which offer free, confidential information and support without requiring you to commit to anything first.",
      },
      {
        id: "rg3",
        question: "Can this partner website set account limits for me?",
        answer:
          "No. Account-level tools such as limits or self-exclusion, where available, are managed on the official YES2WIN platform after login. This site can explain what those tools generally do, but it cannot see, change or restrict any account.",
      },
      {
        id: "rg4",
        question: "How do I set a budget that actually holds?",
        answer:
          "Decide the amount before you open the platform, treat it as an entertainment cost that is spent the moment it is deposited, and keep it entirely separate from money committed to bills or savings. A budget you set while calm is worth far more than one you negotiate mid-session.",
      },
      {
        id: "rg5",
        question: "Does a losing streak mean a win is due?",
        answer:
          "No. Outcomes do not accumulate towards anything, and past results have no bearing on what happens next. The belief that a result is owed is one of the most common reasons people spend more than they intended, which is why chasing losses is treated as a warning sign rather than a strategy.",
      },
      {
        id: "rg6",
        question: "How do I keep track of what I am actually spending?",
        answer:
          "Use your account transaction records rather than memory. Reviewing deposits over a full week or month is far more revealing than judging a single session, because memory tends to soften losses and sharpen wins.",
      },
      {
        id: "rg7",
        question: "Someone close to me may have a problem — what can I do?",
        answer:
          "Raise it calmly and without accusation, focus on what you have observed rather than on money alone, and point them towards professional support such as the resources listed above. Many services also offer guidance for family members and friends, since supporting someone else is difficult on its own.",
      },
    ],
    finalCta: {
      title: "Keep YES2WIN recreational",
      description:
        "Explore the ecosystem with clear limits, then use official account tools when you need support pathways.",
    },
  },
};

export type GuidesCopy = typeof guidesEn;
