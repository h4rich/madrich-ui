import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Press_Start_2P,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
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
    default: "Madrich UI",
    template: "%s | Madrich UI",
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
    url: "https://madrich-ui.vercel.app",
    title: "Madrich UI",
    description: "The neo-brutalist UI library for developers who build bold.",
    siteName: "Madrich UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Madrich UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrich UI",
    description: "The neo-brutalist UI library for developers who build bold.",
    images: ["/og-image.png"],
    creator: "@h4rich_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://madrich-ui.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} ${pressStart2P.variable} antialiased`}
      >
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
