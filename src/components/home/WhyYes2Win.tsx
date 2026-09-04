import Image from "next/image";
import { media } from "@/config/media";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const items = [
  {
    title: "Multi-category play",
    description: "Slots, live casino, sports, fishing and lottery under one YES2WIN brand.",
    image: media.categories.slots,
    href: "/games/",
  },
  {
    title: "Mobile experience",
    description: "Browse and access the platform from phones without losing clarity.",
    image: media.mobileDevice,
    href: "/mobile/",
  },
  {
    title: "Payment options",
    description: "Bank transfer, e-wallet, DuitNow, online banking and crypto categories where available.",
    image: media.promotions.deposit,
    href: "/payment/",
  },
  {
    title: "Promotions & VIP",
    description: "Offer types and VIP recognition explained before you check live terms.",
    image: media.vipHero,
    href: "/vip/",
  },
  {
    title: "Partner pathways",
    description: "A structured way for partners to share YES2WIN with their audiences.",
    image: media.partnerEcosystem,
    href: "/partner/",
  },
  {
    title: "Support orientation",
    description: "FAQ, contact pathways and responsible gaming guidance in one place.",
    image: media.contactSupport,
    href: "/faq/",
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
              src={media.aboutEcosystem}
              alt="Why choose YES2WIN visual"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-line shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
            >
              <Image
                src={item.image}
                alt={`${item.title} visual`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/90">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href="/about/" variant="secondary">
            About this partner site
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
