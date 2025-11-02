import type { Metadata } from "next";
import Script from "next/script";
import AdSense from "@/components/AdSense";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "심심풀이 심리 테스트 | 성격 테스트 무료",
    template: "%s | 심심풀이 심리 테스트",
  },
  description:
    "무료 심심풀이 심리 테스트와 성격 테스트를 해보세요. 스트레스 체크, 진로 탐색, 애착 유형, 리더십 진단 등 다양한 온라인 심리 검사를 제공합니다.",
  keywords: [
    "심리 테스트",
    "성격 테스트",
    "심심풀이",
    "심심풀이 테스트",
    "심리 검사",
    "무료 심리 테스트",
    "온라인 심리 검사",
    "성향 테스트",
    "심리 분석",
    "자기 이해",
    "MBTI",
    "심리상담",
    "심리 진단",
  ],
  authors: [{ name: "Psychological Test Lab" }],
  creator: "Psychological Test Lab",
  publisher: "Psychological Test Lab",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "심심풀이 심리 테스트",
    title: "심심풀이 심리 테스트 | 성격 테스트 무료",
    description:
      "무료 심심풀이 심리 테스트와 성격 테스트를 해보세요. 다양한 온라인 심리 검사를 제공합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "심심풀이 심리 테스트 | 성격 테스트 무료",
    description:
      "무료 심심풀이 심리 테스트와 성격 테스트를 해보세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "google-adsense-account": "ca-pub-2248445708639121",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="ko">
      <head>
        {isProduction && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248445708639121"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="antialiased">
        {isProduction && (
          <div className="w-full" style={{ minHeight: "100px" }}>
            <AdSense
              style={{ display: "block" }}
              format="auto"
              responsive={true}
              className="w-full"
            />
          </div>
        )}
        {children}
        {isProduction && (
          <div className="w-full" style={{ minHeight: "100px" }}>
            <AdSense
              style={{ display: "block" }}
              format="auto"
              responsive={true}
              className="w-full"
            />
          </div>
        )}
      </body>
    </html>
  );
}
