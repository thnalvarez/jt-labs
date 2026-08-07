import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { campaigns } from "@/content/es/campaigns";

export default function sitemap(): MetadataRoute.Sitemap {
  const campaignPages = Object.keys(campaigns).map((campaign) => ({
    url: `${site.url}/${campaign}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...campaignPages,
    {
      url: `${site.url}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];
}
