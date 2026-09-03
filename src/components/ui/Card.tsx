import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  hover = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-line bg-white p-6 shadow-[0_12px_40px_-28px_rgba(6,78,59,0.45)]",
        hover && "transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_50px_-28px_rgba(5,150,105,0.55)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
