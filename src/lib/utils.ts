import { siteConfig } from "@/config/site";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function externalRel(kind: "cta" | "default" = "default") {
  if (kind === "cta") return "nofollow sponsored noopener noreferrer";
  return "noopener noreferrer";
}

export function ctaHref(type: "register" | "login" | "partner") {
  switch (type) {
    case "register":
      return siteConfig.registerUrl;
    case "login":
      return siteConfig.loginUrl;
    case "partner":
      return siteConfig.partnerUrl;
  }
}
