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
              "By using this website, you agree to these terms. If you do not agree, please stop using the site. Separate account terms on the official YES2WIN platform also apply when you register, log in or use platform services.",
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
              " YES2WIN is the entertainment brand and platform. This site helps visitors understand categories, offers structure and access pathways — it does not replace the primary YES2WIN corporate website.",
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
              "Content is provided for general information about YES2WIN entertainment categories, promotions structure, payments overview, VIP positioning, mobile access and partner pathways. Nothing here is legal, financial or investment advice.",
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
              "Register, Login and Partner buttons may open official YES2WIN platform destinations. Your use of those services is governed by the platform’s own terms, rules and policies.",
            ],
          },
        ],
      },
      {
        heading: "5. Acceptable use",
        blocks: [
          {
            type: "ul",
            items: [
              ["Do not misuse the website or attempt unauthorised access."],
              ["Do not scrape or republish content in a misleading way."],
              ["Do not present this partner website as the primary corporate YES2WIN site."],
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
              "This website does not guarantee winnings, profits, investment returns or partner income. Entertainment involves risk and results vary.",
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
              "You must meet the legal age requirement in your jurisdiction. Review our ",
              { text: "Responsible Gaming", href: "/responsible-gaming/" },
              " page and only participate where it is lawful for you to do so.",
            ],
          },
        ],
      },
      {
        heading: "8. Changes",
        blocks: [
          {
            type: "p",
            content: [
              "We may update these terms from time to time. Continued use after updates constitutes acceptance of the revised terms.",
            ],
          },
        ],
      },
      {
        heading: "9. Contact",
        blocks: [
          {
            type: "p",
            content: [
              "For questions about this website, visit the ",
              { text: "Contact", href: "/contact/" },
              " page. For account-specific issues, use the support options available after you log in to the official platform.",
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
        "This website is operated as YES2WIN Official Partner. Operator details may be updated when formally published.",
    },
    sections: [
      {
        heading: "1. Scope",
        blocks: [
          {
            type: "p",
            content: [
              "This policy covers the YES2WIN Official Partner information website. Account data collected on the official YES2WIN platform after registration or login is governed by that platform’s own privacy disclosures.",
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
              " YES2WIN platform privacy practices remain separate from this partner website.",
            ],
          },
        ],
      },
      {
        heading: "3. Information we may process",
        blocks: [
          {
            type: "ul",
            items: [
              ["Basic technical logs such as IP address, browser type and requested pages"],
              ["Aggregate analytics if an analytics provider is enabled"],
              ["Messages you voluntarily send through published contact channels"],
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
              "Information is used to operate and secure the website, improve the experience, respond to enquiries and understand aggregate traffic patterns.",
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
              "Essential cookies may be required for site functionality. Non-essential analytics or marketing cookies should only be enabled with an appropriate consent mechanism when introduced.",
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
              "We do not sell personal information. Hosting and security providers may process limited technical data to keep the website running. External platform destinations have independent privacy practices.",
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
              "Technical logs and enquiry records are retained only as long as needed for security, operations and legal obligations.",
            ],
          },
        ],
      },
      {
        heading: "8. Your choices",
        blocks: [
          {
            type: "p",
            content: [
              "Depending on your jurisdiction, you may have rights to access, correct or delete personal information. Use the ",
              { text: "Contact", href: "/contact/" },
              " page for website-related requests.",
            ],
          },
        ],
      },
      {
        heading: "9. Children",
        blocks: [
          {
            type: "p",
            content: [
              "This website is not intended for minors. Do not use the site or related platform services if you are under the legal age for online gaming in your region.",
            ],
          },
        ],
      },
      {
        heading: "10. Updates",
        blocks: [
          {
            type: "p",
            content: [
              "We may revise this policy periodically. The “Last updated” date at the top of this page reflects the latest version.",
            ],
          },
        ],
      },
    ],
  },
};
