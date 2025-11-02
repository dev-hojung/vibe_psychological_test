import { MetadataRoute } from "next";
import { tests } from "@/lib/tests";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const testPages = tests.map((test) => ({
    url: `${siteUrl}/tests/${test.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/tests`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...testPages,
  ];
}
