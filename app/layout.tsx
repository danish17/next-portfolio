import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_SC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantSC = Cormorant_SC({
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Danish Shakeel — Co-Founder & CTO, Engineer and Educator",
  description:
    "I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs.",
  metadataBase: new URL("https://iamdani.sh"),
  openGraph: {
    type: "website",
    url: "https://iamdani.sh",
    title: "Danish Shakeel — Co-Founder & CTO, Engineer and Educator",
    description:
      "I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs.",
    images: [{ url: "/og-meta-img.jpeg" }],
    siteName: "Danish Shakeel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Shakeel — Co-Founder & CTO, Engineer and Educator",
    description:
      "I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs.",
    images: ["/og-meta-img.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
    "theme-color": "#FAFDF6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantSC.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAFDF6] dark:bg-black text-zinc-900 dark:text-zinc-50">
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script async src="/theme.js" />
      </body>
    </html>
  );
}
