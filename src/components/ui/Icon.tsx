import { cn } from "@/lib/utils";

const icons = {
  slots: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <circle cx="9" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="15" cy="12" r="1.5" />
    </>
  ),
  live: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
    </>
  ),
  sports: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4.5 9.5c2.5 1 5.5 1 8.5 0s5-2 7-1.5M4.8 14.5c2.2-.8 4.7-.8 7.2 0 2.5.8 4.8 1.2 7 .5" />
    </>
  ),
  fishing: (
    <>
      <path d="M4 13c4-6 12-6 16 0-2 4-6 6-8 6s-6-2-8-6z" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
      <path d="M3 13h2" />
    </>
  ),
  lottery: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M4 18c1.5-3 4-4.5 5-4.5S12.5 15 14 18M14 18c.6-1.8 2.2-3 3.5-3 1 0 2.2.7 3 2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.4 5.2L18.5 9 14 12.2 15.5 18 12 14.8 8.5 18 10 12.2 5.5 9l5.1-.8L12 3z" />
    </>
  ),
  support: (
    <>
      <path d="M5 12a7 7 0 0114 0v4a2 2 0 01-2 2h-1" />
      <path d="M5 14v2a2 2 0 002 2h1" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </>
  ),
  access: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 018 0v2" />
    </>
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden
    >
      {icons[name]}
    </svg>
  );
}

export function CategoryVisual({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-[0_12px_30px_-16px_rgba(5,150,105,0.9)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
      <Icon name={name} className="relative h-7 w-7" />
    </div>
  );
}
