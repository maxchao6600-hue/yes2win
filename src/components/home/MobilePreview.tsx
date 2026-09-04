import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function MobilePreview() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mobile"
              title="YES2WIN, built for mobile"
              description="Browse categories, manage account access and move through the partner gateway comfortably on phone-sized screens."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/mobile/" variant="secondary">
                Learn more
              </CtaLink>
              <CtaLink cta="register">Access YES2WIN</CtaLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-brand-300/30 blur-3xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-30px_rgba(2,44,34,0.8)]">
              <Image
                src={media.mobileDevice}
                alt="YES2WIN mobile device showcase"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
