import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AssessmentRunner } from "@/components/AssessmentRunner";
import { TravelTrainRunner } from "@/components/TravelTrainRunner";
import { getAssessmentBySlug } from "@/lib/assessments";
import { getTestBySlug, tests } from "@/lib/tests";

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

  const url = `${siteUrl}/tests/${slug}/take`;

  return {
    title: `${test.title} - 테스트 진행`,
    description: `${test.title}를 시작하세요. ${test.summary}`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${test.title} - 테스트 진행`,
      description: `${test.title}를 시작하세요. ${test.summary}`,
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function TakeAssessmentPage({ params }: PageProps) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  // 여행 스타일 테스트는 별도 컴포넌트 사용
  if (slug === "travel-train") {
    return (
      <div className="min-h-screen bg-slate-950/6 dark:bg-slate-950">
        <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-600 dark:text-indigo-300">
              <Link
                href="/tests"
                className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 transition hover:bg-white dark:bg-indigo-500/10 dark:text-indigo-100"
              >
                전체 보기
              </Link>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-100">
                {test.category}
              </span>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-100">
                {test.meta.duration} · {test.meta.questionCount}문항
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
              {test.title} — 테스트 진행
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {test.tagline}
            </p>
          </header>

          <TravelTrainRunner />
        </main>
      </div>
    );
  }

  // 기존 리커트 척도 테스트
  const assessment = getAssessmentBySlug(slug);
  if (!assessment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950/6 dark:bg-slate-950">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12">
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-600 dark:text-indigo-300">
            <Link
              href="/tests"
              className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 transition hover:bg-white dark:bg-indigo-500/10 dark:text-indigo-100"
            >
              전체 보기
            </Link>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-100">
              {test.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-100">
              {test.meta.duration} · {test.meta.questionCount}문항
            </span>
          </div>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
            {test.title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {test.tagline}
          </p>
        </header>

        <AssessmentRunner assessment={assessment} />
      </main>
    </div>
  );
}
