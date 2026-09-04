import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const points = [
  {
    title: "Personalized experience",
    body: "Service and communications that reflect how you like to play.",
    image: "/images/brand/yes2win-vip-personal.webp",
  },
  {
    title: "Priority support",
    body: "Elevated help pathways when VIP channels are available to your membership.",
    image: "/images/brand/yes2win-vip-personal.webp",
  },
  {
    title: "Exclusive experiences",
    body: "Selected invitations and recognition moments shared through official VIP routes.",
    image: "/images/brand/yes2win-vip-events.webp",
  },
];

export function VIPPreview() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="VIP"
              title="Step into the YES2WIN VIP experience"
              description="Recognition, thoughtful support and curated member moments — without guaranteed financial outcomes."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/vip/" variant="outline">
                Explore VIP
              </CtaLink>
              <Link href="/promotions/" className="inline-flex items-center text-sm font-semibold text-brand-200">
                Related promotions →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src="/images/brand/yes2win-vip-hero.webp"
              alt="YES2WIN VIP experience artwork"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {points.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={`${item.title} visual`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/85">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
