/**
 * Legal page copy (terms + privacy).
 *
 * Paragraph content is modelled as inline nodes so translations can keep the
 * same internal links and the same dynamic operator/publisher sentence.
 * `entityLine` / `operatorLine` tokens resolve at render time from
 * `siteConfig.legal`; when those env-backed values are empty the neutral
 * `fallback` sentence is used instead of any invented entity name.
 */
export type LegalInline =
  | string
  | { text: string; href: string }
  | { token: "entityLine" | "operatorLine" };

export type LegalBlock =
  | { type: "p"; content: LegalInline[] }
  | { type: "ul"; items: LegalInline[][] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDynamicLine = {
  /** Used when a legal entity name is configured. `{entity}` is substituted. */
  withEntity: string;
  /** Used when both entity name and jurisdiction are configured. */
  withEntityAndJurisdiction: string;
  /** Neutral wording used when no entity details are published. */
  fallback: string;
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  crumb: string;
  lastUpdatedLabel: string;
  descriptionSuffix: string;
  jsonLdName: string;
  jsonLdDescription: string;
  dynamicLine: LegalDynamicLine;
  sections: LegalSection[];
};

export type LegalCopy = {
  terms: LegalDocument;
  privacy: LegalDocument;
};

export const legalEn: LegalCopy = {
  terms: {
    eyebrow: "Legal",
    title: "Terms of use",
    crumb: "Terms",
    lastUpdatedLabel: "Last updated",
    descriptionSuffix: "These terms apply to this official partner website.",
    jsonLdName: "Terms of Use",
    jsonLdDescription: "Terms for the YES2WIN Official Partner website.",
    dynamicLine: {
      withEntity: "This website is published by {entity}.",
      withEntityAndJurisdiction: "This website is published by {entity} ({jurisdiction}).",
      fallback:
        "This website is published as YES2WIN Official Partner — an information and access gateway connected to the YES2WIN ecosystem.",
    },
    sections: [
      {
        heading: "1. About these terms",
        blocks: [
          {
            type: "p",
            content: [
              "By accessing or using this website, you confirm that you have read, understood and agreed to these terms. If you do not agree with any part of them, please stop using the site. Your agreement takes effect from the moment you begin using the website and continues for as long as you keep using it.",
            ],
          },
          {
            type: "p",
            content: [
              "These terms govern this partner website only. Separate account terms, promotion rules and policies published on the official YES2WIN platform also apply when you register, log in, deposit, participate in an offer or otherwise use platform services. Where the platform’s terms and this page differ on any matter relating to your account, the platform’s terms prevail for that matter.",
            ],
          },
        ],
      },
      {
        heading: "2. Website identity",
        blocks: [
          {
            type: "p",
            content: [
              { token: "entityLine" },
              " YES2WIN is the entertainment brand and platform spanning slots, live casino, sports, fishing and lottery categories. This site helps visitors understand those categories, how offers are structured and which access pathways exist — it does not replace the primary YES2WIN corporate website and does not speak on the platform’s behalf.",
            ],
          },
          {
            type: "p",
            content: [
              "This distinction is deliberate and material. This website does not host games, hold or process funds, operate a cashier, grant or verify account status, determine promotion eligibility or resolve account disputes. All of those functions belong to the official platform and are available to you only after registration or login. References to YES2WIN brand names, category names and provider names are made for identification and educational purposes.",
            ],
          },
        ],
      },
      {
        heading: "3. Informational purpose",
        blocks: [
          {
            type: "p",
            content: [
              "Content is provided for general information about YES2WIN entertainment categories, promotions structure, payments overview, VIP positioning, mobile access and partner pathways. It is intended to help you understand how the ecosystem is organised before you decide whether to continue. Nothing on this website constitutes legal, financial, tax or investment advice, and it should not be relied upon as a substitute for professional guidance appropriate to your circumstances.",
            ],
          },
          {
            type: "p",
            content: [
              "Because details such as offer values, fees, limits, odds, processing times, catalogue contents and eligibility rules change and can differ between accounts and regions, this website deliberately does not publish them as fixed figures. Where a specific number matters to a decision you are making, confirm it in the live platform at the moment you act rather than relying on any summary — including this one. We make reasonable efforts to keep structural information accurate and current, but do not warrant that every page is complete or free of error at all times.",
            ],
          },
        ],
      },
      {
        heading: "4. External platform links",
        blocks: [
          {
            type: "p",
            content: [
              "Register, Login, Access and Partner actions may open official YES2WIN platform destinations. Once you leave this website, your use of those services is governed by the platform’s own terms, rules, privacy disclosures and policies, over which this website has no control.",
            ],
          },
          {
            type: "p",
            content: [
              "This website may also link to third-party resources, including responsible gaming organisations, for your convenience. Such links do not imply endorsement, partnership or responsibility for the content, availability or practices of those sites. You should review the terms and privacy policies of any external destination you visit.",
            ],
          },
        ],
      },
      {
        heading: "5. Acceptable use",
        blocks: [
          {
            type: "p",
            content: [
              "You agree to use this website lawfully and in a manner that does not restrict or inhibit anyone else’s use of it. In particular:",
            ],
          },
          {
            type: "ul",
            items: [
              ["Do not misuse the website, interfere with its operation or attempt unauthorised access to any part of it or to any connected system."],
              ["Do not scrape, copy, republish or redistribute content in a misleading way, or in a way that misrepresents its source or meaning."],
              ["Do not present this partner website as the primary corporate YES2WIN site, or imply that you are authorised to act or speak on behalf of the platform."],
              ["Do not use the site or its materials to promote services to anyone under the legal age in their jurisdiction, or in any territory where such promotion is unlawful."],
              ["Do not publish or repeat invented figures — such as bonus values, fees, limits, odds, commission rates or income projections — while referencing this site or the brand."],
              ["Do not use automated systems to access the site in a way that imposes an unreasonable load on its infrastructure."],
            ],
          },
        ],
      },
      {
        heading: "6. No outcome guarantees",
        blocks: [
          {
            type: "p",
            content: [
              "This website does not guarantee winnings, profits, investment returns or partner income, and nothing on it should be interpreted as a prediction or assurance of any outcome. Entertainment of this kind involves financial risk, results vary between individuals and outcomes cannot be forecast.",
            ],
          },
          {
            type: "p",
            content: [
              "Where partner or referral pathways are described, no representation is made about earnings, conversion, audience response or any other commercial result. Any figures relating to such arrangements are set out only in the official partner documentation made available to you after access is granted.",
            ],
          },
        ],
      },
      {
        heading: "7. Responsible use",
        blocks: [
          {
            type: "p",
            content: [
              "You must meet the legal age requirement in your jurisdiction and may use this website and any connected services only where it is lawful for you to do so. It is your responsibility to know and observe the laws that apply where you are located; availability of the platform in a given territory is determined by the platform, not by this website.",
            ],
          },
          {
            type: "p",
            content: [
              "We ask that you treat participation as recreation and set limits on time and spending before you begin. Review our ",
              { text: "Responsible Gaming", href: "/responsible-gaming/" },
              " page for practical guidance and links to independent support organisations. Account-level tools such as limits or self-exclusion, where offered, are provided by the official platform.",
            ],
          },
        ],
      },
      {
        heading: "8. Intellectual property",
        blocks: [
          {
            type: "p",
            content: [
              "Text, layout, graphics and other materials on this website are protected by applicable intellectual property laws. Brand names, logos and product names referenced here remain the property of their respective owners, and their use on this site does not transfer any right in them to you.",
            ],
          },
          {
            type: "p",
            content: [
              "You may view pages, and link to them, for personal or educational purposes. Reproducing substantial portions of the content, presenting it as your own, or altering it in a way that changes its meaning is not permitted without permission.",
            ],
          },
        ],
      },
      {
        heading: "9. Availability and disclaimers",
        blocks: [
          {
            type: "p",
            content: [
              "This website is provided on an “as is” and “as available” basis. We do not warrant that access will be uninterrupted, that the site will be free of errors or defects, or that it will remain compatible with every device, browser or configuration. Access may be suspended, withdrawn or restricted at any time, including for maintenance.",
            ],
          },
          {
            type: "p",
            content: [
              "To the fullest extent permitted by applicable law, no liability is accepted for loss or damage arising from use of, or inability to use, this website, or from reliance on any information published here — particularly where a figure or condition should have been confirmed on the official platform before you acted. Nothing in these terms excludes any liability that cannot lawfully be excluded.",
            ],
          },
        ],
      },
      {
        heading: "10. Changes",
        blocks: [
          {
            type: "p",
            content: [
              "We may update these terms from time to time to reflect changes in the website, the ecosystem it describes or applicable requirements. The “Last updated” date shown on this page indicates when the current version took effect, and continued use of the site after an update constitutes acceptance of the revised terms.",
            ],
          },
          {
            type: "p",
            content: [
              "If any provision of these terms is found to be unenforceable, the remaining provisions continue in full effect. A failure to enforce any part of these terms at a particular time does not waive the right to enforce it later.",
            ],
          },
        ],
      },
      {
        heading: "11. Contact",
        blocks: [
          {
            type: "p",
            content: [
              "For questions about this website, its content or these terms, visit the ",
              { text: "Contact", href: "/contact/" },
              " page, which sets out the pathways available for different types of enquiry.",
            ],
          },
          {
            type: "p",
            content: [
              "For account-specific issues — including registration, login, verification, deposits, withdrawals, promotion eligibility and VIP status — use the support options available after you log in to the official platform. This website cannot access, review or alter any account, and cannot resolve matters that require account records.",
            ],
          },
          {
            type: "p",
            content: [
              "Related pages on this partner site include ",
              { text: "Privacy", href: "/privacy/" },
              ", ",
              { text: "Responsible Gaming", href: "/responsible-gaming/" },
              " and ",
              { text: "About", href: "/about/" },
              ".",
            ],
          },
        ],
      },
    ],
  },

  privacy: {
    eyebrow: "Legal",
    title: "Privacy policy",
    crumb: "Privacy",
    lastUpdatedLabel: "Last updated",
    descriptionSuffix: "This policy explains how the partner website handles information.",
    jsonLdName: "Privacy Policy",
    jsonLdDescription: "Privacy policy for the YES2WIN Official Partner website.",
    dynamicLine: {
      withEntity: "This website is operated by {entity}.",
      withEntityAndJurisdiction: "This website is operated by {entity} in {jurisdiction}.",
      fallback:
        "This website is operated as YES2WIN Official Partner — an information and access gateway connected to the YES2WIN ecosystem.",
    },
    sections: [
      {
        heading: "1. Scope",
        blocks: [
          {
            type: "p",
            content: [
              "This policy covers the YES2WIN Official Partner information website — the pages you are reading now. It explains what information may be processed when you visit, why it is processed and what choices you have.",
            ],
          },
          {
            type: "p",
            content: [
              "It does not cover the official YES2WIN platform. Account data collected there after registration or login — including identity details, verification documents, payment information, transaction records and gameplay activity — is governed by that platform’s own privacy disclosures. This website does not receive, store or have access to that data, which is why account questions can only be resolved through platform support.",
            ],
          },
        ],
      },
      {
        heading: "2. Who operates this website",
        blocks: [
          {
            type: "p",
            content: [
              { token: "operatorLine" },
              " YES2WIN platform privacy practices remain separate from this partner website, and each is responsible only for the information it handles.",
            ],
          },
          {
            type: "p",
            content: [
              "Questions about how this informational site is run can be raised through the ",
              { text: "Contact", href: "/contact/" },
              " page. Questions about an account on the official platform must go through platform support, because this site does not hold account records.",
            ],
          },
        ],
      },
      {
        heading: "3. Information we may process",
        blocks: [
          {
            type: "p",
            content: [
              "This website is designed to work without requiring you to create an account or provide personal details. The information that may be processed is limited to the following:",
            ],
          },
          {
            type: "ul",
            items: [
              ["Basic technical logs such as IP address, browser type, device type, referring page, requested pages and the date and time of a request"],
              ["Aggregate analytics if an analytics provider is enabled, used to understand overall traffic patterns rather than to identify individual visitors"],
              ["Language or display preferences stored so the site behaves consistently between visits"],
              ["Messages you voluntarily send through published contact channels, together with any details you choose to include in them"],
            ],
          },
          {
            type: "p",
            content: [
              "Please do not send passwords, payment PINs, full card numbers, identity documents or other sensitive account credentials through any contact channel. They are never required to answer a question about this website, and account verification is handled only inside the official platform.",
            ],
          },
        ],
      },
      {
        heading: "4. How we use information",
        blocks: [
          {
            type: "p",
            content: [
              "Information is used to operate and secure the website, diagnose technical faults, protect against misuse or unauthorised access, improve the clarity and structure of the content, respond to enquiries and understand aggregate traffic patterns.",
            ],
          },
          {
            type: "p",
            content: [
              "Information is not used to build individual profiles for advertising, and it is not used to make automated decisions that produce legal or similarly significant effects. Processing is limited to what is necessary for the legitimate operation of an informational website and for meeting applicable legal obligations.",
            ],
          },
        ],
      },
      {
        heading: "5. Cookies and similar technologies",
        blocks: [
          {
            type: "p",
            content: [
              "Essential cookies and equivalent storage may be required for basic site functionality, such as remembering a language preference or maintaining security protections. These are necessary for the site to work as intended and cannot meaningfully be disabled without affecting your experience.",
            ],
          },
          {
            type: "p",
            content: [
              "Non-essential analytics or marketing cookies should only be enabled with an appropriate consent mechanism when introduced, and where consent is given it may be withdrawn. Most browsers also allow you to block or delete cookies through their settings; doing so may affect how parts of the site behave. Any external destination you visit sets its own cookies under its own policy.",
            ],
          },
        ],
      },
      {
        heading: "6. Sharing",
        blocks: [
          {
            type: "p",
            content: [
              "We do not sell personal information, and we do not share it for independent marketing purposes. Hosting, content-delivery, security and analytics providers may process limited technical data strictly as necessary to keep the website running and protected, acting on instructions rather than for their own purposes.",
            ],
          },
          {
            type: "p",
            content: [
              "Information may also be disclosed where required by law, or where necessary to establish, exercise or defend legal claims, or to protect the security and integrity of the website. External platform destinations reached from this site operate independently and have their own privacy practices, which you should review separately.",
            ],
          },
        ],
      },
      {
        heading: "7. Retention",
        blocks: [
          {
            type: "p",
            content: [
              "Technical logs and enquiry records are retained only as long as needed for security, operations and legal obligations, after which they are deleted or aggregated so that individuals can no longer be identified. Retention periods vary by record type: routine technical logs are kept for short operational periods, while correspondence may be kept longer where it is needed to handle a continuing enquiry.",
            ],
          },
          {
            type: "p",
            content: [
              "Because this partner website does not operate member accounts, it does not retain gameplay, cashier or verification records. Those records, where they exist, are held only within the official platform under its own policies.",
            ],
          },
        ],
      },
      {
        heading: "8. Security",
        blocks: [
          {
            type: "p",
            content: [
              "Reasonable technical and organisational measures are used to protect the limited information this website handles against loss, misuse and unauthorised access. No method of transmission or storage over the internet can be guaranteed completely secure, and information sent to us by email or messaging is only as secure as the service you use to send it.",
            ],
          },
          {
            type: "p",
            content: [
              "You can reduce risk by using the published contact pathways only, never sharing passwords or payment credentials in messages about this site, and treating unexpected requests for sensitive details as untrustworthy.",
            ],
          },
        ],
      },
      {
        heading: "9. Your choices",
        blocks: [
          {
            type: "p",
            content: [
              "Depending on your jurisdiction, you may have rights to access, correct, delete or restrict the processing of personal information, to object to certain processing, or to withdraw consent where processing relies on it. Exercising these rights will not disadvantage you.",
            ],
          },
          {
            type: "p",
            content: [
              "Use the ",
              { text: "Contact", href: "/contact/" },
              " page for website-related requests. For anything concerning your account on the official platform — including account data, verification records or transaction history — the request must be made through platform support, since this website holds none of that information.",
            ],
          },
        ],
      },
      {
        heading: "10. Children",
        blocks: [
          {
            type: "p",
            content: [
              "This website is not intended for minors and is not directed at them. Do not use the site or related platform services if you are under the legal age for online gaming in your region. Information is not knowingly collected from anyone below that age, and where we become aware that such information has been received, it is deleted.",
            ],
          },
        ],
      },
      {
        heading: "11. Updates",
        blocks: [
          {
            type: "p",
            content: [
              "We may revise this policy periodically to reflect changes in how the website operates or in applicable requirements. The “Last updated” date at the top of this page reflects the latest version, and material changes will be shown here rather than communicated individually. Reviewing this page occasionally is the most reliable way to stay informed.",
            ],
          },
          {
            type: "p",
            content: [
              "For related site rules and support pathways, see the ",
              { text: "Terms of use", href: "/terms/" },
              ", ",
              { text: "Contact", href: "/contact/" },
              " and ",
              { text: "Responsible Gaming", href: "/responsible-gaming/" },
              " pages.",
            ],
          },
        ],
      },
    ],
  },
};
