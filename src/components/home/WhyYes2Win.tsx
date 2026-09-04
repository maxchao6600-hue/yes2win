import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconFeatureGrid } from "@/components/visual/Media";
import { CtaLink } from "@/components/ui/CtaLink";

const items = [
  {
    title: "Multi-category play",
    description: "Slots, live casino, sports, fishing and lottery under one YES2WIN brand.",
    icon: "/images/categories/slots.webp",
  },
  {
    title: "Mobile experience",
    description: "Browse and access the platform from phones without losing clarity.",
    icon: "/images/mobile/phone.webp",
  },
  {
    title: "Payment options",
    description: "Bank transfer, e-wallet, DuitNow, online banking and crypto categories where available.",
    icon: "/images/payment/ewallet.webp",
  },
  {
    title: "Promotions & VIP",
    description: "Offer types and VIP recognition explained before you check live terms.",
    icon: "/images/promotions/vip.webp",
  },
  {
    title: "Partner pathways",
    description: "A structured way for partners to share YES2WIN with their audiences.",
    icon: "/images/partner/network.webp",
  },
  {
    title: "Support orientation",
    description: "FAQ, contact pathways and responsible gaming guidance in one place.",
    icon: "/images/home/responsible.webp",
  },
];

export function WhyYes2Win() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Why YES2WIN"
            title="Everything you need before you enter"
            description="Useful orientation across games, payments, offers, VIP, mobile and partner topics — then direct CTAs into the official platform."
          />
          <div className="relative hidden aspect-[21/9] overflow-hidden rounded-[1.5rem] lg:block">
            <Image
              src="/images/home/why.webp"
              alt="Why choose YES2WIN visual"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <IconFeatureGrid items={items} />
        <div className="mt-8">
          <CtaLink href="/about/" variant="secondary">
            About this partner site
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
