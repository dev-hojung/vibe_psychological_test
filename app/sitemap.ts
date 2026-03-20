import type { MetadataRoute } from "next";
import { tests } from "@/lib/tests";

const siteUrl = "https://vibe-psychological-test.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const testPages = tests.flatMap((test) => [
    {
      url: `${siteUrl}/tests/${test.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tests/${test.slug}/take`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
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
