import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function FinalCta({
  title = "Ready to explore YES2WIN?",
  description = "Create your account or log in through this official partner gateway.",
  showPartner = false,
}: {
  title?: string;
  description?: string;
  showPartner?: boolean;
}) {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <SectionHeading light eyebrow="Get started" title={title} description={description} />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {showPartner ? (
              <CtaLink cta="partner" size="lg">
                Become a Partner
              </CtaLink>
            ) : (
              <CtaLink cta="register" size="lg">
                Register Now
              </CtaLink>
            )}
            <CtaLink cta="login" variant="outline" size="lg">
              Login
            </CtaLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
