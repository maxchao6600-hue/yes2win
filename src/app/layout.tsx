import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getLocale } from "@/i18n/locale";
import { localeHtmlLang } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#064e3b",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const base = buildMetadata({
    pageId: "home",
    path: "/",
    locale,
  });
  return {
    ...base,
    metadataBase: new URL(siteConfig.url),
    applicationName: locale === "zh-cn" ? "YES2WIN 官方合作伙伴" : siteConfig.identity,
    authors: [{ name: locale === "zh-cn" ? "YES2WIN 官方合作伙伴" : siteConfig.identity }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords:
      locale === "zh-cn"
        ? ["YES2WIN", "YES2WIN 官方合作伙伴", "YES2WIN 游戏", "YES2WIN 合作伙伴", "在线娱乐"]
        : [
            "YES2WIN",
            "YES2WIN Official Partner",
            "YES2WIN games",
            "YES2WIN partner",
            "online entertainment",
          ],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "48x48" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: ["/favicon.ico"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const ui = getDictionary(locale);
  const lang = localeHtmlLang[locale];

  return (
    <html lang={lang} className={`${outfit.variable} ${manrope.variable} h-full`}>
      <body
        className={`flex min-h-full flex-col bg-surface font-sans text-ink antialiased ${
          locale === "zh-cn" ? "locale-zh" : "locale-en"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-800 focus:shadow-lg"
        >
          {ui.skipToContent}
        </a>
        <OrganizationJsonLd locale={locale} />
        <WebSiteJsonLd locale={locale} />
        <Header />
        <main id="main-content" className="flex-1 pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
