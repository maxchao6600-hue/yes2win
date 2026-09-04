import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page/PageHero";
import { FinalCta } from "@/components/page/FinalCta";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact YES2WIN Official Partner",
  description:
    "Get help with YES2WIN account access, payments, registration, login, partner support and general questions through this official partner website.",
  path: "/contact/",
});

function ContactValue({
  value,
  fallback,
}: {
  value: string;
  fallback: string;
}) {
  if (value) {
    const href = value.includes("://") || value.startsWith("mailto:") ? value : `mailto:${value}`;
    const label = value.replace(/^mailto:/i, "").replace(/^https?:\/\//i, "");
    return (
      <a href={href} className="font-semibold text-brand-800 break-all">
        {label}
      </a>
    );
  }

  return <p className="leading-relaxed text-ink-muted">{fallback}</p>;
}

export default function ContactPage() {
  const { customerSupport, partnerSupport, generalEnquiries } = siteConfig.contact;

  return (
    <>
      <WebPageJsonLd
        name="Contact YES2WIN Official Partner"
        description="Support pathways for the YES2WIN Official Partner website."
        path="/contact/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />

      {/* 1. Hero */}
      <PageHero
        eyebrow="Contact"
        title="How can we help?"
        description="Choose the pathway that matches your question — customer support, account help, payments, registration, login, partner support or general site guidance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        actions={
          <>
            <CtaLink cta="register">Access YES2WIN</CtaLink>
            <CtaLink href="/faq/" variant="secondary">
              Browse FAQ
            </CtaLink>
          </>
        }
      />

      {/* 2. Customer Support */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Customer support"
            title="Day-to-day platform help"
            description={customerSupport.description}
          />
          <Card className="mt-8 max-w-3xl">
            <h2 className="text-xl font-bold text-ink">{customerSupport.label}</h2>
            <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
              <ContactValue value={customerSupport.value} fallback={customerSupport.fallback} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              For account-specific games, deposits, withdrawals and platform tools, continue through Register or Login
              so support can be reached inside the official YES2WIN environment when available.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CtaLink cta="register" size="sm">
                Register
              </CtaLink>
              <CtaLink cta="login" variant="secondary" size="sm">
                Login
              </CtaLink>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 3. Account Help */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Account help"
            title="Profile, security and member tools"
            description="Account settings and security options are managed on the official YES2WIN platform after you sign in."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card>
              <h2 className="text-lg font-bold text-ink">Profile updates</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Change personal details and review account information inside the live platform account area.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Security & recovery</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Use the official login recovery tools if you cannot sign in, then continue with platform support if needed.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Verification prompts</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Identity or payment checks appear inside the official platform when required for withdrawals or account review.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Payment Help */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Payment help"
            title="Deposits, withdrawals and cashier questions"
            description="Review payment categories here, then confirm live methods, limits and verification steps in the cashier after login."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <h2 className="text-xl font-bold text-ink">Before you deposit</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Understand common categories such as bank transfer, e-wallet, online banking and cryptocurrency on the
                Payment page. Exact options depend on region and account status.
              </p>
              <Link href="/payment/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Payment guide →
              </Link>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">Withdrawal readiness</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Withdrawals may require verification. Follow only the official platform prompts and avoid sharing
                sensitive details outside those flows.
              </p>
              <Link href="/faq/#payments" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Payments FAQ →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Registration Help */}
      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Registration help"
              title="Create your YES2WIN account"
              description="Use Register to open the official signup flow. This partner site explains the journey and does not recreate the live form locally."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink cta="register">Register Now</CtaLink>
              <CtaLink href="/register-guide/" variant="secondary">
                Register guide
              </CtaLink>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <h2 className="text-lg font-bold text-ink">What you may need</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Accurate account details and any verification steps shown during signup. Field labels can change as the
                platform updates.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Stuck during signup?</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Review the Register Guide and Registration FAQ, then continue through the official form or platform
                support channels.
              </p>
              <Link href="/faq/#registration" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Registration FAQ →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Login Help */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Login help"
            title="Sign in and recover access"
            description="Login opens the official YES2WIN sign-in destination. Password recovery and security checks live there — not as a fake local login on this partner page."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card>
              <h2 className="text-lg font-bold text-ink">Open Login</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Continue into the official login page when you already have an account.
              </p>
              <div className="mt-4">
                <CtaLink cta="login" size="sm">
                  Login
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Cannot sign in?</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Confirm your username and password, check your connection, then use the platform recovery option.
              </p>
              <Link href="/faq/#login" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Login FAQ →
              </Link>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-ink">Mobile login</h2>
              <p className="mt-2 text-sm text-ink-muted">
                The same Access YES2WIN / Login pathway works from phone browsers. See the Mobile page for device tips.
              </p>
              <Link href="/mobile/" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Mobile guide →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. Partner Support */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Partner support"
            title="Onboarding, referrals and partner resources"
            description={partnerSupport.description}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <h2 className="text-xl font-bold text-ink">{partnerSupport.label}</h2>
              <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
                <ContactValue value={partnerSupport.value} fallback={partnerSupport.fallback} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Review the Partner page first for journey steps, resources and FAQ answers, then open partner access
                when you are ready to continue onboarding.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink href="/partner/" variant="secondary" size="sm">
                  Partner page
                </CtaLink>
                <CtaLink cta="partner" size="sm">
                  Partner access
                </CtaLink>
              </div>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-ink">What partner support covers</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Partner access and onboarding questions</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Referral sharing and resource guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>Where to find live partner terms after access is granted</span>
                </li>
              </ul>
              <Link href="/faq/#partner" className="mt-5 inline-flex text-sm font-semibold text-brand-700">
                Partner FAQ →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. General Enquiries */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="General enquiries"
            title="Questions about this partner website"
            description={generalEnquiries.description}
          />
          <Card className="mt-8 max-w-3xl">
            <h2 className="text-xl font-bold text-ink">{generalEnquiries.label}</h2>
            <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50/70 p-4 text-sm">
              <ContactValue value={generalEnquiries.value} fallback={generalEnquiries.fallback} />
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-brand-800">
              <Link href="/about/">About this site</Link>
              <Link href="/faq/">FAQ hub</Link>
              <Link href="/responsible-gaming/">Responsible gaming</Link>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 9. FAQ links */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQ links"
            title="Start with answers already published"
            description="Many common questions are covered across registration, login, payments, games, mobile and partner topics."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              ["/faq/#registration", "Registration FAQ"],
              ["/faq/#login", "Login FAQ"],
              ["/faq/#payments", "Payments FAQ"],
              ["/faq/#mobile", "Mobile FAQ"],
              ["/faq/#partner", "Partner FAQ"],
              ["/faq/", "Full FAQ hub"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold text-brand-800 transition hover:border-brand-300"
              >
                {label} →
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Quick Links */}
      <Section tone="green">
        <Container>
          <SectionHeading
            eyebrow="Quick links"
            title="Useful next steps across the partner site"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
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
            ].map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                  Open {item.title} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Need to continue into YES2WIN?"
        description="Register or log in through the official platform links connected to this partner gateway."
      />
    </>
  );
}
