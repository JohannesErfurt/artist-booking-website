import type { Metadata } from "next";
import { Caprasimo, Geist } from "next/font/google";
import { siteConfig } from "@/content/site";
import {
  getMusicianStructuredData,
  getPersonStructuredData,
} from "@/lib/structured-data";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

// Rounded retro display face, close to the lettering on the flyer.
const displayFont = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Quetschen-Hannes lacht und spielt auf seinem roten Akkordeon",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    getPersonStructuredData(),
    getMusicianStructuredData(),
  ];

  return (
    // Font variables must sit on <html>: the theme tokens that reference
    // them are resolved on :root.
    <html lang="de" className={`${geistSans.variable} ${displayFont.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
