import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YES2WIN Official Partner | Online Gaming & Entertainment",
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.identity,
  authors: [{ name: siteConfig.identity }],
  creator: siteConfig.identity,
  publisher: siteConfig.identity,
  keywords: [
    "YES2WIN",
    "YES2WIN Official Partner",
    "YES2WIN games",
    "YES2WIN partner",
    "online entertainment",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: siteConfig.identity,
    title: "YES2WIN Official Partner | Online Gaming & Entertainment",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/images/og/og-default.png"),
        width: 1200,
        height: 630,
        alt: siteConfig.identity,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YES2WIN Official Partner | Online Gaming & Entertainment",
    description: siteConfig.description,
    images: [absoluteUrl("/images/og/og-default.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export const viewport: Viewport = {
  themeColor: "#064e3b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-surface font-sans text-ink antialiased">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
