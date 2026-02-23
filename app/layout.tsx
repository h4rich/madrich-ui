import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Press_Start_2P,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import PageLoader from "@/components/Layout/PageLoader";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4F0" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "BrutalCN",
    template: "%s | BrutalCN",
  },
  description: "The neo-brutalist UI library for developers who build bold.",
  keywords: [
    "neo-brutalism",
    "neo-brutalist",
    "ui library",
    "react",
    "next.js",
    "tailwindcss",
    "components",
    "design system",
  ],
  authors: [
    {
      name: "h4rich",
      url: "https://x.com/h4rich_",
    },
  ],
  creator: "h4rich",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brutalcn.vercel.app",
    title: "BrutalCN",
    description: "The neo-brutalist UI library for developers who build bold.",
    siteName: "BrutalCN",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrutalCN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrutalCN",
    description: "The neo-brutalist UI library for developers who build bold.",
    images: ["/image/og-image.png"],
    creator: "@h4rich_",
  },
  icons: {
    icon: [{ url: "/image/fav2.png", type: "image/png" }],
    shortcut: "/image/fav2.png",
    apple: "/image/fav2.png",
  },
  metadataBase: new URL("https://brutalcn.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER!} />
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION!}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} ${pressStart2P.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env
              .NEXT_PUBLIC_GOOGLE_TAG_MANAGER!}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
