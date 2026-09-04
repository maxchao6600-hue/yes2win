import Image from "next/image";
import { siteConfig } from "@/config/site";
import { media } from "@/config/media";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 text-white sm:pt-32 lg:min-h-[92vh] lg:pb-24">
      <div className="absolute inset-0">
        <Image
          src={media.homeHero}
          alt="YES2WIN premium gaming atmosphere"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,44,34,0.92)_0%,rgba(2,44,34,0.78)_38%,rgba(2,44,34,0.35)_68%,rgba(2,44,34,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-up max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={150}
              height={45}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
            <Badge tone="light">Official YES2WIN Partner</Badge>
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            YES2WIN — Your Gateway to the Winning Ecosystem
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-50/92 sm:text-lg">
            Explore YES2WIN games, offers and member pathways through an official partner site built for a modern,
            confident first impression.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-200">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink cta="register" size="lg">
              Register Now
            </CtaLink>
            <CtaLink cta="login" variant="outline" size="lg">
              Login
            </CtaLink>
          </div>
        </div>

        <div className="fade-up delay-2 relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">Partner Portal</p>
            <div className="mt-5 grid gap-3">
              {[
                { label: "Slots", meta: "Spin & discover" },
                { label: "Live Casino", meta: "Real-time tables" },
                { label: "Sports", meta: "Follow the action" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-950/45 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-xs text-brand-100/70">{item.meta}</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/80">Ready when you are</p>
              <p className="mt-1 text-lg font-semibold">Register · Login · Explore</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
