import { tests } from "@/lib/tests";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import TestCard from "@/components/TestCard";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, webSchema]),
        }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              나를 알아가는 시간
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              심심할 때 가볍게 해보는 무료 심리 테스트.
              <br className="hidden sm:block" />
              스트레스 체크부터 성격 유형, 진로 탐색까지 다양한 테스트를
              즐겨보세요.
            </p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-100"
            >
              테스트 시작하기
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Tests Grid */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              인기 심리 테스트
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              자신을 더 깊이 이해하는 첫 걸음을 시작하세요
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tests.map((test) => (
              <TestCard
                key={test.slug}
                slug={test.slug}
                title={test.title}
                tagline={test.tagline}
                category={test.category}
                duration={test.meta.duration}
                questionCount={test.meta.questionCount}
                tags={test.tags}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              더 많은 테스트가 준비되어 있어요
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              정기적으로 새로운 심리 테스트가 업데이트됩니다
            </p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              전체 테스트 보기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
