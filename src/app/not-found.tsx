import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";

export default function NotFound() {
  return (
    <div className="surface-dark flex min-h-[70vh] items-center justify-center px-4 py-28 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-brand-100/85">
          The page you requested is unavailable. Return home or continue into the YES2WIN ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-brand-800"
          >
            Back to Home
          </Link>
          <CtaLink cta="register" size="md">
            Register Now
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
