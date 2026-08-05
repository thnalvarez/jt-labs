import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jtlabs.online";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "JT Labs | E-commerce, delivery y desarrollo web",
  description:
    "Creamos sitios web, e-commerce y sistemas de delivery modernos para negocios que quieren vender más y crecer en digital.",
  keywords: ["desarrollo web", "e-commerce", "delivery", "Lima", "soluciones digitales"],
  applicationName: "JT Labs",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_LA",
    siteName: "JT Labs",
    title: "JT Labs | E-commerce, delivery y desarrollo web",
    description:
      "Creamos sitios web, e-commerce y sistemas de delivery modernos para negocios que quieren vender más y crecer en digital.",
    url: "/",
    images: [
      {
        url: "/images/og/jt-labs-og.png",
        width: 1200,
        height: 630,
        alt: "JT Labs — Experiencias digitales que impulsan negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JT Labs | E-commerce, delivery y desarrollo web",
    description:
      "Creamos sitios web, e-commerce y sistemas de delivery modernos para negocios que quieren vender más y crecer en digital.",
    images: [
      {
        url: "/images/og/jt-labs-og.png",
        alt: "JT Labs — Experiencias digitales que impulsan negocios",
      },
    ],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geist.variable} font-sans`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "JT Labs",
                  url: siteUrl,
                  areaServed: "Latinoamérica",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lima",
                    addressCountry: "PE",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  name: "JT Labs",
                  url: siteUrl,
                  areaServed: "Latinoamérica",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lima",
                    addressCountry: "PE",
                  },
                },
                { "@type": "WebSite", name: "JT Labs", url: siteUrl },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
