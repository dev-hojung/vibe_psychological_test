import { tests } from "@/lib/tests";
import { generateBreadcrumbSchema } from "@/lib/seo";
import TestListWithFilter from "@/components/TestListWithFilter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전체 심리 테스트 목록",
  description:
    "스트레스 체크, 진로 가치관 탐색, 애착 유형, 리더십 진단, 학습 성향, 여행 스타일 등 다양한 무료 심리 테스트를 제공합니다.",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://vibe-psychological-test.vercel.app";

export default function TestsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "전체 테스트", url: `${siteUrl}/tests` },
  ]);

  const categories = [
    "전체",
    ...Array.from(new Set(tests.map((t) => t.category))),
  ];

  const testItems = tests.map((t) => ({
    slug: t.slug,
    title: t.title,
    tagline: t.tagline,
    category: t.category,
    duration: t.meta.duration,
    questionCount: t.meta.questionCount,
    tags: t.tags,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              홈
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">전체 테스트</span>
          </nav>
        </div>

        {/* Header */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            전체 심리 테스트
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            관심 있는 테스트를 선택하고 자신을 탐색해 보세요
          </p>
        </section>

        <TestListWithFilter tests={testItems} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
