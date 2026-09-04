import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepRail } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";
import Image from "next/image";

const steps = [
  { step: "01", title: "Register account", description: "Open the official signup flow and create your YES2WIN username." },
  { step: "02", title: "Enter required details", description: "Provide the information requested on the registration form." },
  { step: "03", title: "Agree to terms", description: "Review and accept the applicable platform terms before continuing." },
  { step: "04", title: "Verify when prompted", description: "Complete phone or account verification steps shown on the platform." },
  { step: "05", title: "Set payment PIN", description: "Secure your cashier access with the payment PIN flow when required." },
  { step: "06", title: "Login & explore", description: "Sign in, open the lobby and browse games, promotions and payments." },
];

export function HowToJoin() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How to join"
              title="From registration to your first session"
              description="A clear path based on the official YES2WIN access flow. Exact fields may vary by region and platform updates."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink cta="register">Register Now</CtaLink>
              <CtaLink href="/register-guide/" variant="secondary">
                Full registration guide
              </CtaLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/home/join.webp"
              alt="YES2WIN registration journey visual"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <StepRail steps={steps} />
      </Container>
    </Section>
  );
}
