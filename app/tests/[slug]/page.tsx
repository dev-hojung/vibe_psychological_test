import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getAssessmentBySlug } from "@/lib/assessments";
import { getTestBySlug, tests } from "@/lib/tests";
import { generateBreadcrumbSchema, generateTestSchema } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tests.map((test) => ({ slug: test.slug }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    return {
      title: "테스트를 찾을 수 없습니다",
    };
  }

  const url = `${siteUrl}/tests/${slug}`;

  return {
    title: test.title,
    description: test.summary,
    keywords: test.tags,
    openGraph: {
      title: test.title,
      description: test.summary,
      url,
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: test.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: test.title,
      description: test.summary,
      images: [`${siteUrl}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function TestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  // 여행 스타일 테스트는 별도 처리 (assessment 불필요)
  const hasAssessment =
    slug === "travel-train" || getAssessmentBySlug(test.slug);

  const testSchema = generateTestSchema(test);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "전체 테스트", url: `${siteUrl}/tests` },
    { name: test.title, url: `${siteUrl}/tests/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-slate-950/6 dark:bg-slate-950">
      <Script
        id="test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-12">
        <section className="space-y-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 p-10 text-white shadow-xl shadow-indigo-500/20">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-semibold text-indigo-100">
              {test.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-semibold text-indigo-100">
              {test.meta.duration} · {test.meta.questionCount}문항
            </span>
            {test.meta.recommendedCadence ? (
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-semibold text-indigo-100">
                추천 주기: {test.meta.recommendedCadence}
              </span>
            ) : null}
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {test.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-indigo-100 sm:text-lg">
              {test.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-indigo-100">
            {test.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-5 text-sm text-indigo-100 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">{test.overview}</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              {hasAssessment ? (
                <Link
                  href={`/tests/${test.slug}/take`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-semibold text-indigo-700 transition hover:bg-indigo-100"
                >
                  테스트 시작하기
                </Link>
              ) : null}
              <Link
                href="/tests"
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 font-semibold text-indigo-700 transition hover:bg-white/90"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              검사 구성과 제공 정보
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {test.summary}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {test.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              이런 분께 추천드려요
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {test.recommended.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              예시 문항 미리 보기
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {test.sampleQuestions.map((question) => (
                <li
                  key={question}
                  className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  “{question}”
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-8 shadow-inner shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            결과 확인 후 다음 단계
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:flex-wrap">
            {test.followUp.map((resource) => (
              <span
                key={resource}
                className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
              >
                {resource}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            본 검사는 현재 프리뷰 단계이며, 실제 설문 진행 시 결과 리포트와 후속
            자료 다운로드 기능이 제공됩니다.
          </p>
        </section>
      </main>
    </div>
  );
}
