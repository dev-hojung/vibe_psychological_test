import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

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
    description: "무료 심심풀이 심리 테스트와 성격 테스트를 해보세요.",
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
  verification: {
    google: "wc5A0FEAwQc9H39x5VxxA4pw2b2BZ9KlVQueyisHIj8",
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "google-adsense-account": "ca-pub-2248445708639121",
  },
  // Google AdSense 메타 태그 명시적 추가
  // metadata.other가 자동으로 <meta name="google-adsense-account" content="..."> 생성
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248445708639121"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
