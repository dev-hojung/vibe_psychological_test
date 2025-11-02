import { TestDetail } from "./tests";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "심심풀이 심리 테스트",
    alternateName: "Psychological Test Lab",
    url: siteUrl,
    description:
      "무료 심심풀이 심리 테스트와 성격 테스트를 제공하는 서비스. 심심할 때 해보는 온라인 심리 검사를 제공합니다.",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: [],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "심심풀이 심리 테스트",
    alternateName: "Psychological Test Lab",
    url: siteUrl,
    description:
      "무료 심심풀이 심리 테스트와 성격 테스트를 제공합니다. 스트레스 체크, 진로 가치관 탐색, 애착 유형, 리더십 진단 등 다양한 심심풀이 테스트를 제공합니다.",
    // 검색 기능이 실제로 구현되어 있을 때만 potentialAction 추가
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: {
    //     "@type": "EntryPoint",
    //     urlTemplate: `${siteUrl}/tests?search={search_term_string}`,
    //   },
    //   "query-input": "required name=search_term_string",
    // },
  };
}

export function generateTestSchema(test: TestDetail) {
  const testUrl = `${siteUrl}/tests/${test.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Assessment", // PsychologicalTest는 표준 타입이 아니므로 Assessment 사용
    name: test.title,
    description: test.summary,
    url: testUrl,
    about: {
      "@type": "Thing",
      name: test.category,
    },
    timeRequired: test.meta.duration,
    educationalLevel: "General",
    learningResourceType: "Assessment",
    inLanguage: "ko-KR",
    // aggregateRating은 실제 평점 데이터가 있을 때만 추가
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.5",
    //   reviewCount: "100",
    // },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
