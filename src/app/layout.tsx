import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { contact } from "@/config/contact";
import { site } from "@/config/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const description =
  "Creamos sitios web, e-commerce, landing pages y sistemas de delivery para negocios en Perú y Latinoamérica.";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: "Diseño web y e-commerce en Perú | JT Labs",
  description,
  keywords: [
    "diseño web en Perú",
    "desarrollo web en Lima",
    "e-commerce",
    "landing pages",
    "sistemas de delivery",
  ],
  applicationName: site.name,
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
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: "Diseño web y e-commerce en Perú | JT Labs",
    description,
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
    title: "Diseño web y e-commerce en Perú | JT Labs",
    description,
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
                  "@id": `${site.url}/#organization`,
                  name: site.name,
                  url: site.url,
                  logo: {
                    "@type": "ImageObject",
                    url: `${site.url}/images/brand/jt-labs-logo.png`,
                  },
                  email: contact.email,
                  telephone: `+${contact.whatsappNumber}`,
                  sameAs: [contact.tiktokUrl],
                  areaServed: [
                    { "@type": "Country", name: "Perú" },
                    { "@type": "Place", name: "Latinoamérica" },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lima",
                    addressCountry: "PE",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${site.url}/#website`,
                  name: site.name,
                  url: site.url,
                  publisher: { "@id": `${site.url}/#organization` },
                  inLanguage: site.language,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
