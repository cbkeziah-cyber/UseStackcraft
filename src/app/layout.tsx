import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StackCraft",
  description:
    "We help small businesses select and stack the right tech tools to automate online marketing—save time, cut costs, and grow consistently.",
  metadataBase: new URL("https://www.usestackcraft.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "StackCraft RSS" }],
    },
  },
  openGraph: {
    title: "StackCraft",
    description:
      "We help small businesses select and stack the right tech tools to automate online marketing—save time, cut costs, and grow consistently.",
    url: "https://www.usestackcraft.com",
    siteName: "StackCraft",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7709e0ae-2d1b-4911-9bce-771a0352b196/generated_images/open-graph-social-image-for-a-modern-saa-f82c58e8-20250918230023.jpg?",
        width: 1200,
        height: 630,
        alt: "StackCraft — From click to customer-on autopilot (paper plane)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackCraft",
    description:
      "We help small businesses select and stack the right tech tools to automate online marketing—save time, cut costs, and grow consistently.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7709e0ae-2d1b-4911-9bce-771a0352b196/generated_images/open-graph-social-image-for-a-modern-saa-f82c58e8-20250918230023.jpg?",
    ],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/stackcraft-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {/* Global Navbar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur shadow-sm">
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-primary text-lg">
              <img src="/stackcraft-mark.svg" alt="StackCraft logo" className="h-6 w-6" />
              <span>StackCraft</span>
            </Link>
            {/* replace static links with Nav component */}
            <Nav />
          </div>
        </header>
        <main className="pt-14">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
            <p>
              Disclosure: Some links on this site are affiliate links. If you click and make a purchase,
              we may earn a commission at no additional cost to you. This helps support our work.
              Read the full <Link href="/disclosure" className="underline hover:no-underline">Affiliate Disclosure</Link>.
              <span className="mx-2">·</span>
              <Link href="/rss.xml" className="underline hover:no-underline">RSS</Link>
              <span className="mx-2">·</span>
              <Link href="/sitemap.xml" className="underline hover:no-underline">Sitemap</Link>
            </p>
          </div>
        </footer>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}