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
      {
        id: "how-to-navigate",
        question: "How is this website organised?",
        answer:
          "The site is grouped by intent. Games explains each entertainment category, Promotions covers offer structure, Payment maps deposit and withdrawal channels, Mobile focuses on phone access, Partner covers the sharing pathway, and FAQ plus Contact handle everything else. Start with the hub closest to your question, then follow its internal links.",
      },
      {
        id: "content-accuracy",
        question: "How current is the information on this site?",
        answer:
          "Structural information — category names, payment channel types, offer categories and access routes — is kept stable and reviewed as the ecosystem evolves. Anything that changes frequently, such as live offer values, odds, cashier limits or lobby catalogues, is deliberately left to the official platform so you never act on an outdated figure.",
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
      {
        id: "account-recovery",
        question: "How do I recover access if I am locked out?",
        answer:
          "Start with the recovery option on the official login page, which normally works from your registered contact details. Make sure you are on the official login destination, check that your registered phone or email is still reachable, and avoid creating a second account — duplicate accounts usually complicate verification later. If recovery does not resolve it, use official platform support and be ready to confirm your identity.",
      },
      {
        id: "payment-pin",
        question: "What is a payment PIN and why might I need one?",
        answer:
          "A payment PIN is a separate code some platforms ask you to set so cashier actions are protected even if someone reaches your session. If a PIN setup step appears during registration or the first time you open the cashier, complete it carefully and store the value somewhere private — it is not the same as your login password and should never be shared with anyone, including people claiming to be support staff.",
      },
      {
        id: "account-details-change",
        question: "Can I change my username, phone number or bank details later?",
        answer:
          "Some fields can be edited freely, while identity-linked details such as your username or payout account are often restricted or need a verification step. Open the profile area on the official platform to see what is editable for your account. Because these fields affect verification and payouts, enter them accurately at registration rather than planning to correct them afterwards.",
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
      {
        id: "registration-time",
        question: "How long does registration usually take?",
        answer:
          "The form itself is short — creating credentials and entering the requested details is normally a few minutes. What can extend the process is any follow-up step such as phone confirmation, payment PIN setup or document verification, which depends on your region and account status. Having your contact details to hand before you start keeps the whole flow smooth.",
      },
      {
        id: "registration-troubleshoot",
        question: "What should I check if the registration form will not submit?",
        answer:
          "Work through the obvious causes first: a required field left blank, a password that does not meet the format rules, a username already taken, an unchecked terms box, or a phone number entered without the expected country format. Refresh the page, disable aggressive ad-blockers or autofill that may be interfering, and try a current browser. If it still fails, use official support rather than submitting repeatedly.",
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
      {
        id: "login-forgot-username",
        question: "What if I remember my password but not my username?",
        answer:
          "Use the account recovery option on the official login page, which normally identifies you through the contact details you registered with. Do not open a second account to work around it, because two accounts can complicate verification and payment checks. If recovery does not identify you, official support can help once you confirm your identity.",
      },
      {
        id: "login-multiple-devices",
        question: "Can I use my account on more than one device?",
        answer:
          "Most members move between a phone and a desktop browser without issue, though the platform may end older sessions when a new one starts. Treat every device as something you need to secure: lock the device, avoid saving the password in shared browsers, and log out fully when you finish on a device that is not yours.",
      },
      {
        id: "login-after-inactivity",
        question: "Why was I logged out automatically?",
        answer:
          "Automatic sign-out after a period of inactivity is a normal security measure — it limits how long an unattended session stays open. Switching networks, clearing browser data or using private browsing can also end a session. Simply sign in again; if you are being disconnected constantly, check your connection stability and browser cookie settings first.",
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
      {
        id: "game-rules",
        question: "Where do I find the rules for a specific game?",
        answer:
          "Individual titles carry their own information panel inside the lobby — usually an “i”, help or paytable icon that explains the rules, symbols, payline structure and any feature rounds. Read that panel before your first session rather than relying on general descriptions, because two titles with the same theme can behave very differently.",
      },
      {
        id: "demo-play",
        question: "Can I look at a game before committing real funds?",
        answer:
          "Where a title offers a practice or demo mode, it appears inside the lobby rather than on this partner site. Availability varies by provider, region and account status. When a demo is available it is a sensible way to learn the interface and feature flow first; when it is not, start with the smallest stake the game allows while you get familiar with it.",
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
      {
        id: "slots-choose",
        question: "How do I choose a slot that suits me?",
        answer:
          "Think about pace and presentation rather than chasing a title someone else recommended. If you prefer simple, quick rounds, classic-style games with fewer moving parts are easier to follow; if you enjoy feature rounds and story-led visuals, the more elaborate titles will feel more rewarding to explore. Open the game information panel first so you know what each feature does before you play.",
      },
      {
        id: "slots-features",
        question: "What do slot features like free spins or bonus rounds mean?",
        answer:
          "They are in-game mechanics defined by the game provider, not platform promotions. A free spin round, multiplier or pick-style bonus is triggered by the game’s own rules and is described in that title’s paytable. Because every provider implements them differently, always read the individual game’s information panel rather than assuming behaviour carries over between titles.",
      },
      {
        id: "slots-session",
        question: "How should I manage a slot session?",
        answer:
          "Decide your time and spending limit before you open the lobby, and treat it as fixed. Because spins resolve quickly, it is easy to lose track of how long you have been playing, so set a reminder or check the clock between rounds. If a session stops feeling enjoyable, close it rather than continuing out of momentum.",
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
      {
        id: "live-rules",
        question: "Where can I learn the rules for baccarat, roulette or blackjack?",
        answer:
          "Each live table shows its own rules, bet types and limits in the table information panel before you join. Read that panel first, because side bets and table variants differ between studios even when the core game is familiar. Watching a few rounds without betting is also a practical way to learn the pace and the interface.",
      },
      {
        id: "live-etiquette",
        question: "Is there etiquette I should follow at a live table?",
        answer:
          "Live tables run on a timer, so place decisions within the betting window and avoid holding up the round. Keep chat respectful towards the dealer and other players — chat privileges can be withdrawn if they are misused. Treat the dealer as a host running a scheduled game rather than someone who can change outcomes or table limits.",
      },
      {
        id: "live-session",
        question: "How long should a live casino session last?",
        answer:
          "Live tables are paced by the dealer rather than by you, which makes it easy to stay seated longer than intended. Decide in advance how many rounds or how much time you will play, and stand up at that point. Taking a break between tables also gives you a natural moment to check your spending against the limit you set.",
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
      {
        id: "sports-start",
        question: "I am new to sports betting — where should I start?",
        answer:
          "Begin with a sport and competition you already follow, because familiarity makes the markets far easier to read. Look at a single simple market first rather than combining several selections, and check how the platform displays stake, potential return and settlement rules before confirming anything. Keep early stakes small while you learn how the interface behaves.",
      },
      {
        id: "sports-live-vs-pre",
        question: "What is the difference between pre-match and live markets?",
        answer:
          "Pre-match markets are available before an event starts and give you time to review your selection. Live (in-play) markets update while the event runs, so prices move quickly and selections can be suspended around key moments. Live betting demands a stable connection and faster decisions, which is why it suits people already comfortable with the sport.",
      },
      {
        id: "sports-settlement",
        question: "When are sports bets settled?",
        answer:
          "Settlement follows the official result for that competition, so it usually happens shortly after an event concludes — though it can take longer if a result is disputed, delayed or subject to review. Abandoned, postponed or void events follow the specific rules published with that market. Your betting history on the platform is the authoritative record of status.",
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
      {
        id: "fishing-start",
        question: "How do I get started with fishing games?",
        answer:
          "Open a title, read its information panel to see which targets carry which values, and start at the lowest available weapon or shot level while you learn the rhythm. Fishing rooms often run continuously, so you can watch for a moment before joining. Getting familiar with the value table first makes the session much easier to follow.",
      },
      {
        id: "fishing-controls",
        question: "What controls do fishing games normally use?",
        answer:
          "Most titles combine aiming, firing and a control for shot strength or weapon type, plus an auto-fire option in some games. On a phone you generally tap where you want to shoot, while desktop uses the pointer. The exact layout varies by provider, so check the on-screen legend before you increase your shot level.",
      },
      {
        id: "fishing-budget",
        question: "How do I keep a fishing session under control?",
        answer:
          "Fishing games consume your balance continuously rather than in discrete rounds, and higher shot levels spend faster. Set a session limit before you start, keep an eye on your shot level rather than leaving auto-fire running unattended, and take a break at fixed intervals so you can check your balance deliberately.",
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
      {
        id: "lottery-formats",
        question: "What kinds of lottery formats might I see?",
        answer:
          "Number-led formats generally differ in how many digits you select and how the draw resolves, with 4D-style play being the most commonly referenced. Each format publishes its own selection rules and draw schedule inside the platform. Read those details before your first entry, because the way a selection wins is not always identical across formats.",
      },
      {
        id: "lottery-start",
        question: "How do I take part in a draw?",
        answer:
          "After login, open the lottery area, choose the format you want, make your number selection, confirm the entry and check that it appears in your records. Entries close before the draw time shown for that format, so leave yourself a margin rather than entering at the last moment.",
      },
      {
        id: "lottery-pace",
        question: "Why do some members prefer lottery to faster categories?",
        answer:
          "Lottery separates the decision from the outcome — you make a selection, then wait for a scheduled draw. That removes the continuous-play loop found in slots, live tables or fishing, which many people find calmer and easier to budget for. It suits anyone who wants participation without an ongoing session.",
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
      {
        id: "check-live-promotions",
        question: "How do I check which promotions are live right now?",
        answer:
          "Log in and open the promotions area on the official platform — that lobby only shows campaigns currently active and available to your account, which is exactly the filter you want. Check it before you deposit rather than afterwards, since some offers must be selected at the moment of a qualifying action to count.",
      },
      {
        id: "promo-codes",
        question: "How do promo codes work?",
        answer:
          "When a campaign uses a code, the code is published with that campaign or sent to you directly, and it is entered in the field the platform specifies — usually at registration or in the cashier. Use only codes from official sources: guessed or third-party codes typically fail, and an expired code will not be honoured retroactively. If a code is rejected, re-check the campaign wording before contacting support.",
      },
      {
        id: "promo-wagering",
        question: "What do wagering or turnover conditions mean?",
        answer:
          "Wagering (sometimes called turnover or rollover) describes how much qualifying play must happen before bonus-linked funds behave like normal balance. The rate, which categories count towards it, and how long you have are all defined per campaign — they are not fixed platform-wide. Read those three points on the campaign card before opting in, because they determine what the offer is actually worth to you.",
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
      {
        id: "vip-invitation",
        question: "How would I know if a VIP invitation applies to me?",
        answer:
          "Programme communications reach you through your account channels or an authorised VIP contact — not through unsolicited social media messages or third-party pages. If something claims to grant VIP status and asks for your password, a payment or a fee, treat it as fraudulent and verify through official support instead.",
      },
      {
        id: "vip-vs-promotions",
        question: "How is VIP different from regular promotions?",
        answer:
          "Promotions are published campaigns anyone eligible can review and opt into from the promotions lobby. VIP is a recognition-led relationship built around service, priority pathways and selected invitations, communicated privately when it applies. The two can overlap when a VIP-oriented campaign appears, but they are not the same thing.",
      },
      {
        id: "vip-contact",
        question: "Who should I contact about VIP questions?",
        answer:
          "Use the official platform support channels, or your assigned VIP contact if one has been provided to you. This partner site can explain how the experience is positioned, but it cannot confirm your status, issue invitations or discuss individual rewards — those answers only come from the official programme.",
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
      {
        id: "payment-security",
        question: "How do I keep my payment details safe?",
        answer:
          "Only enter payment information inside the official cashier, never through a link sent to you in a message. Legitimate support will not ask for your password, full card details or a payment PIN. Keep the name on your payment method matching your account name, and review your transaction records regularly so anything unexpected is spotted early.",
      },
      {
        id: "payment-currency",
        question: "Which currencies and crypto assets are referenced?",
        answer:
          "Local banking, e-wallet and card channels follow your regional cashier configuration, and where cryptocurrency is enabled YES2WIN references coins such as BTC, ETH and USDT. Networks, wallet requirements and confirmation steps are shown at checkout. This site does not publish exchange rates, network fees or settlement times because they move constantly.",
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
      {
        id: "deposit-time",
        question: "How long does a deposit take to appear?",
        answer:
          "It depends entirely on the channel. E-wallet and instant banking flows usually reflect quickly, card payments depend on the issuer, bank transfers follow banking hours and cut-off times, and crypto waits on network confirmations. Rather than assuming a fixed window, check the status shown in your transaction records and allow the channel to complete before trying again.",
      },
      {
        id: "deposit-details",
        question: "What should I double-check before confirming a deposit?",
        answer:
          "Confirm you selected the right method, that the account name matches your own, that any reference or narration field is copied exactly as shown, and — for crypto — that the network and address match the checkout instructions precisely. Most delayed deposits trace back to a mistyped reference or a mismatched sending account rather than a platform fault.",
      },
      {
        id: "deposit-minimum",
        question: "Is there a minimum deposit amount?",
        answer:
          "Minimums exist and differ by method, region and sometimes by campaign, so the cashier is the only reliable place to read them. This partner site does not publish figures that would go stale. If a promotion requires a qualifying deposit, its campaign card states the threshold that applies to that offer.",
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
      {
        id: "withdrawal-time",
        question: "How long do withdrawals take?",
        answer:
          "Two things drive the timing: the platform’s own review of the request, and the settlement speed of the payout channel you chose. A first withdrawal often takes longer because verification may run alongside it, while later requests on a verified account tend to move faster. Watch the status in your records rather than resubmitting, and complete any verification prompt promptly since that is the most common cause of delay.",
      },
      {
        id: "withdrawal-method",
        question: "Can I withdraw to a different method than I deposited with?",
        answer:
          "Many platforms prefer payouts to return to the source of funds, and payout details usually have to match your registered account name. That is a standard anti-fraud measure rather than an obstacle. Check which payout channels appear for your account in the cashier, and make sure the receiving account is in your own name before you request.",
      },
      {
        id: "withdrawal-delayed",
        question: "Why might a withdrawal request be delayed or returned?",
        answer:
          "The usual causes are an outstanding verification step, payout details that do not match your registered name, a pending promotion condition still attached to your balance, or a routine security review. Open your transaction records to see the status and any message attached to the request, resolve what is flagged, then follow up through official support if it remains unclear.",
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
      {
        id: "mobile-browser-tips",
        question: "Which mobile browser habits make the experience better?",
        answer:
          "Keep your browser updated, allow cookies for the platform so sessions persist, and clear the cache if pages start rendering oddly after an update. Avoid aggressive data-saver or script-blocking modes, which can break lobby elements. Rotating to landscape helps on live tables and sports pages, and closing unused tabs frees memory for streaming categories.",
      },
      {
        id: "mobile-data",
        question: "Should I use Wi-Fi or mobile data?",
        answer:
          "For browsing guides, promotions or the cashier, either works. For live dealer tables and animation-heavy titles, a stable connection matters more than a fast one — a steady Wi-Fi signal usually beats mobile data that fluctuates as you move. If a stream stutters, switching networks before the round starts is better than mid-session.",
      },
      {
        id: "mobile-shortcut",
        question: "Can I add YES2WIN to my phone’s home screen?",
        answer:
          "Modern mobile browsers let you save any page you trust as a home-screen shortcut through the share or menu options. Create the shortcut from the official destination you reached through this partner site, so the icon always opens the correct address. That is safer than installing a file from an unverified download page, which this site does not publish.",
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
      {
        id: "partner-getting-started",
        question: "What should I prepare before starting the partner journey?",
        answer:
          "Have three things clear: who your audience is, which channel you will actually publish on, and how you intend to explain YES2WIN without overstating anything. Read the Games, Promotions, Payment and Responsible Gaming pages first so your explanations are accurate, then open official partner access. Preparing the message before the link is what makes the first weeks productive.",
      },
      {
        id: "partner-responsible-marketing",
        question: "What messaging standards should partners follow?",
        answer:
          "Keep it educational and honest: no guaranteed winnings or income claims, no invented percentages or commission figures, no targeting of anyone under the legal age, and no presenting this partner site as the primary corporate YES2WIN website. Include responsible gaming context, direct people to official terms for anything time-sensitive, and follow the platform’s promotion rules and any local advertising law that applies to you.",
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
      {
        id: "extra-security",
        question: "Should I turn on any extra security features?",
        answer:
          "Yes — enable whatever the platform offers, such as a payment PIN, login notifications or additional verification on sensitive actions. Each one adds a step that an attacker would also have to pass. Pair that with a password you use nowhere else, ideally stored in a password manager rather than in your browser on a shared machine.",
      },
      {
        id: "report-suspicious",
        question: "What should I do if I receive a suspicious message or find a fake page?",
        answer:
          "Do not click, reply or enter anything. Close it, then reach the platform yourself through the official links on this site or an address you already know. If you did enter credentials, change your password immediately and contact official support. Genuine communications never ask for your password, and no legitimate contact requires payment to release a balance or unlock a status.",
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
      {
        id: "healthy-habits",
        question: "What everyday habits keep play healthy?",
        answer:
          "Decide your budget and finishing time before you open the lobby, not while you are in it. Keep entertainment money separate from money you need, play only when you are rested and clear-headed rather than to relieve stress, and review your deposits weekly so the real total is never a surprise. Small routines like these do far more than good intentions in the moment.",
      },
      {
        id: "self-exclusion",
        question: "Can I take a break or set limits on my account?",
        answer:
          "Where account-level tools such as deposit limits, session reminders, cooling-off periods or self-exclusion are offered, they are found in the official platform’s responsible gaming or account settings area — this partner site cannot apply them for you. If you are considering a break, setting the limit while you feel in control is far easier than trying to stop mid-session.",
      },
      {
        id: "talk-to-someone",
        question: "How do I start a conversation about gambling worries?",
        answer:
          "Choose a calm moment and be concrete — how much time or money is involved, and what you want to change — rather than trying to justify anything. Speaking to one trusted person makes it real and much harder to minimise. Support organisations such as BeGambleAware and Gambling Therapy offer confidential help, and reaching out early is a practical step rather than a last resort.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
