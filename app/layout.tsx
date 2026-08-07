import type { Metadata, Viewport } from "next";
import { Baloo_2, Caveat, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hackwestx.dev"),
  title: "HackWesTX 2026 — Beyond the Feed",
  description:
    "HackWesTX 2026 is Texas Tech's annual hackathon, hosted by GDG on Campus. 24 hours of building the post-algorithmic web. September 12–13, 2026 · Lubbock, TX.",
  keywords: [
    "hackathon",
    "HackWesTX",
    "Texas Tech",
    "GDG",
    "Google Developer Groups",
    "Lubbock",
    "student hackathon",
  ],
  openGraph: {
    title: "HackWesTX 2026 — Beyond the Feed",
    description:
      "The feed has ended. What's next? 24 hours of building the post-algorithmic web at Texas Tech University.",
    type: "website",
    images: [{ url: "/hackwestx-logo.png", width: 1254, height: 1254 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#00abaf",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${geistMono.variable} ${baloo.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
