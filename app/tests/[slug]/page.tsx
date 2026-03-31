import { tests, getTestBySlug } from "@/lib/tests";
import { generateTestSchema, generateBreadcrumbSchema } from "@/lib/seo";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vibe-psychological-test.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tests.map((test) => ({ slug: test.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) return {};

  return {
    title: test.title,
    description: test.summary,
    openGraph: {
      title: `${test.title} | 심심풀이 심리테스트`,
      description: test.summary,
      url: `${siteUrl}/tests/${test.slug}`,
      type: "article",
    },
  };
}

const categoryColors: Record<string, string> = {
  "정서 관리": "bg-rose-100 text-rose-700",
  "커리어 개발": "bg-blue-100 text-blue-700",
  대인관계: "bg-purple-100 text-purple-700",
  "조직 리더십": "bg-amber-100 text-amber-700",
  "자기 개발": "bg-emerald-100 text-emerald-700",
  라이프스타일: "bg-cyan-100 text-cyan-700",
};

export default async function TestDetailPage({ params }: Props) {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) notFound();

  const testSchema = generateTestSchema(test);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "전체 테스트", url: `${siteUrl}/tests` },
    { name: test.title, url: `${siteUrl}/tests/${test.slug}` },
  ]);

  const colorClass =
    categoryColors[test.category] || "bg-gray-100 text-gray-700";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([testSchema, breadcrumb]),
        }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              홈
            </Link>
            <span>/</span>
            <Link
              href="/tests"
              className="hover:text-indigo-600 transition-colors"
            >
              전체 테스트
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">
              {test.title}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 pb-8">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${colorClass}`}
          >
            {test.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            {test.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {test.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              소요시간 {test.meta.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {test.meta.questionCount}문항
            </span>
            {test.meta.recommendedCadence && (
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {test.meta.recommendedCadence}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {test.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <Link
            href={`/tests/${test.slug}/take`}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 py-4 text-base font-bold text-white shadow-md hover:bg-indigo-700 transition-colors active:scale-[0.98]"
          >
            테스트 시작하기
            <svg
              className="w-5 h-5"
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

        {/* Overview */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">개요</h2>
          <p className="text-gray-600 leading-relaxed">{test.overview}</p>
        </section>

        {/* Sections */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {test.sections.map((section, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            이런 분께 추천합니다
          </h2>
          <ul className="space-y-3">
            {test.recommended.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sample Questions */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            미리보기 질문
          </h2>
          <div className="space-y-3">
            {test.sampleQuestions.map((q, i) => (
              <div
                key={i}
                className="rounded-lg bg-white border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-indigo-600 mr-2">
                    Q{i + 1}.
                  </span>
                  {q}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Rich Content Sections */}
        {(test.scientificBasis || test.interpretationGuide || test.whenToUse || test.limitations) && (
          <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
            <div className="space-y-6">
              {test.scientificBasis && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                      <svg className="w-4.5 h-4.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-gray-900">심리학적 배경</h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{test.scientificBasis}</p>
                </div>
              )}

              {test.interpretationGuide && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                      <svg className="w-4.5 h-4.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-gray-900">결과 해석 가이드</h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{test.interpretationGuide}</p>
                </div>
              )}

              {test.whenToUse && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                      <svg className="w-4.5 h-4.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-gray-900">이런 분에게 추천합니다</h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{test.whenToUse}</p>
                </div>
              )}

              {test.limitations && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100">
                      <svg className="w-4.5 h-4.5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-gray-900">결과 활용 시 주의사항</h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{test.limitations}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              준비되셨나요?
            </h2>
            <p className="text-white/80 text-sm mb-6">
              약 {test.meta.duration}이면 완료할 수 있습니다
            </p>
            <Link
              href={`/tests/${test.slug}/take`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-100"
            >
              지금 시작하기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
