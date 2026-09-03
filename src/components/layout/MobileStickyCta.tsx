import { CtaLink } from "@/components/ui/CtaLink";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 shadow-[0_-12px_40px_-24px_rgba(6,78,59,0.55)] backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <CtaLink cta="login" variant="secondary" size="md" className="w-full">
          Login
        </CtaLink>
        <CtaLink cta="register" size="md" className="w-full">
          Register
        </CtaLink>
      </div>
    </div>
  );
}
