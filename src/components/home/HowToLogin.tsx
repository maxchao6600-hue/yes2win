import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepRail } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";

const steps = [
  {
    step: "01",
    title: "Open Login",
    description: "Use the Login button on this site to open the official YES2WIN sign-in page.",
  },
  {
    step: "02",
    title: "Enter credentials",
    description: "Provide the username and password you created during registration.",
  },
  {
    step: "03",
    title: "Complete security checks",
    description: "Finish any verification or security prompts shown by the platform when required.",
  },
  {
    step: "04",
    title: "Access your account",
    description: "Enter the lobby to browse games, promotions, payments and account tools.",
  },
];

export function HowToLogin() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line">
            <Image
              src="/images/home/signin-signup.jpg"
              alt="YES2WIN login and account access visual"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Login"
              title="How to sign in to YES2WIN"
              description="Returning members can move from this partner gateway into the official login flow without recreating a local account form here."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink cta="login">Login</CtaLink>
              <CtaLink href="/register-guide/" variant="secondary">
                Registration guide
              </CtaLink>
            </div>
          </div>
        </div>
        <StepRail steps={steps} />
      </Container>
    </Section>
  );
}
