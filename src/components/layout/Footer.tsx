import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { CtaLink } from "@/components/ui/CtaLink";

export function Footer() {
  return (
    <footer className="border-t border-brand-900/20 bg-brand-950 text-brand-50">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(6,minmax(0,1fr))]">
          <div className="lg:pr-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={140}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
              {siteConfig.identity}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-100/80">
              An official partner information and access gateway connected to the YES2WIN ecosystem.
            </p>
            <p className="mt-4 text-sm text-brand-200">{siteConfig.tagline}</p>
          </div>

          <FooterColumn title="Explore" items={footerNav.explore} />
          <FooterColumn title="Games" items={footerNav.games} />
          <FooterColumn
            title="Access"
            items={[
              { label: "Register", href: siteConfig.registerUrl, external: true },
              { label: "Login", href: siteConfig.loginUrl, external: true },
              ...footerNav.access,
            ]}
          />
          <FooterColumn title="Support" items={footerNav.support} />
          <FooterColumn title="Partner" items={footerNav.partner} />
          <FooterColumn title="Legal" items={footerNav.legal} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
          <CtaLink cta="register" size="sm">
            Register Now
          </CtaLink>
          <CtaLink cta="login" variant="outline" size="sm">
            Login
          </CtaLink>
          <CtaLink cta="partner" variant="outline" size="sm">
            Become a Partner
          </CtaLink>
        </div>

        <div className="mt-8 space-y-3 text-sm text-brand-100/70">
          <p>{siteConfig.disclaimer}</p>
          <p>
            18+. Play responsibly. Entertainment involves risk — only participate if it is legal for you in your
            jurisdiction. Read our{" "}
            <Link href="/responsible-gaming/" className="underline hover:text-white">
              Responsible Gaming
            </Link>{" "}
            guidance.
          </p>
          <p className="text-brand-200/80">
            © {new Date().getFullYear()} {siteConfig.identity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-sm text-brand-50/85 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-sm text-brand-50/85 transition hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
