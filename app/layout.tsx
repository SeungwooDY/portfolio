import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seungwoo Yoon — CS @ UVA",
  description: "Portfolio of Seungwoo Yoon — Computer Science student at the University of Virginia building thoughtful software.",
};

const JSON_LD = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Portfolio",
  "telephone": "1234567890",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "635 Prices Fork Rd, Blacksburg, VA 24060",
    "addressLocality": "Blacksburg",
    "addressRegion": "Virginia",
    "postalCode": "24060"
  },
  "areaServed": [
    "Just for fun!"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "My portfolio"
      }
    }
  ]
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
        {children}</body>
    </html>
  );
}
