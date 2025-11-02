import { MetadataRoute } from "next";
import { tests } from "@/lib/tests";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDate = new Date();

  // 각 테스트 상세 페이지
  const testPages = tests.map((test) => ({
    url: `${siteUrl}/tests/${test.slug}`,
    lastModified: baseDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: baseDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tests`,
      lastModified: baseDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...testPages,
  ];
}
