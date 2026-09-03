import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn(narrow ? "container-narrow" : "container-page", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "dark" | "green" | "white";
}) {
  const toneClass =
    tone === "dark"
      ? "surface-dark"
      : tone === "green"
        ? "surface-green"
        : tone === "white"
          ? "bg-white"
          : "bg-transparent";

  return (
    <section id={id} className={cn("section-pad relative", toneClass, className)}>
      {children}
    </section>
  );
}
