import Image from "next/image";
import { accountFeatures } from "@/config/content/account";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function AccountFeatures() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Account"
            title="What you can manage after login"
            description="YES2WIN account tools typically cover profile, security, records, promotions and verification. Exact menus can vary by account status."
          />
          <div className="relative hidden aspect-[21/9] overflow-hidden rounded-[1.5rem] border border-line lg:block">
            <Image
              src="/images/brand/yes2win-account-access.webp"
              alt="YES2WIN account features visual"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {accountFeatures.map((feature) => (
            <article
              key={feature.id}
              className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
            >
              <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
              <p className="mt-4 text-xs font-medium text-brand-700">{feature.tip}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/account-guide/" variant="secondary">
            Full account guide
          </CtaLink>
          <CtaLink cta="login" variant="outline">
            Login
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
