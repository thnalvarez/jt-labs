import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jtlabs.online";
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/politica-de-privacidad`, lastModified: new Date() },
  ];
}
