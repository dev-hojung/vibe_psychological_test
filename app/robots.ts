import { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/tests/*/take", // 테스트 진행 페이지는 인덱싱 제외
          "/api/", // API 엔드포인트는 인덱싱 제외
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/tests/*/take", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/tests/*/take", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
