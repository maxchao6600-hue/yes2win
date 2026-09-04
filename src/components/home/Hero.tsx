import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#022c22_0%,#064e3b_42%,#0b3d30_72%,#f5faf7_72%)] pb-16 pt-28 text-white sm:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb left-[8%] top-[18%] h-64 w-64 opacity-40" />
        <div className="glow-orb right-[12%] top-[10%] h-72 w-72 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(52,211,153,0.18),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <Badge tone="light">Official YES2WIN Partner</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            YES2WIN — Your Gateway to the Winning Ecosystem
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-50/90 sm:text-lg">
            Explore YES2WIN games, offers and member pathways through an official partner site built for a modern,
            confident first impression.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-200">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink cta="register" size="lg" className="fade-up delay-1">
              Register Now
            </CtaLink>
            <CtaLink cta="login" variant="outline" size="lg" className="fade-up delay-2">
              Login
            </CtaLink>
          </div>
        </div>

        <div className="fade-up delay-2 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-brand-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={150}
                height={45}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
              <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
                Partner Portal
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                { label: "Slots", meta: "Spin & discover" },
                { label: "Live Casino", meta: "Real-time tables" },
                { label: "Sports", meta: "Follow the action" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-950/35 px-4 py-3"
                  style={{ transform: `translateX(${index * 6}px)` }}
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
