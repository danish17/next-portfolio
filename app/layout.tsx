import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFDF6] dark:bg-black text-zinc-900 dark:text-zinc-50">
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
