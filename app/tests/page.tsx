import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { tests } from "@/lib/tests";
import { generateBreadcrumbSchema } from "@/lib/seo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export const metadata: Metadata = {
  title: "전체 테스트",
  description:
    "모든 심리 검사를 한눈에 확인하세요. 스트레스 체크, 진로 가치관 탐색, 애착 유형, 리더십 진단, 학습 성향 등 다양한 심리 검사를 제공합니다.",
  openGraph: {
    title: "전체 테스트 | Psychological Test Lab",
    description:
      "모든 심리 검사를 한눈에 확인하세요. 다양한 심리 검사를 제공합니다.",
    url: `${siteUrl}/tests`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/tests`,
  },
};

export default function TestsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "전체 테스트", url: `${siteUrl}/tests` },
  ]);

  return (
    <div className="min-h-screen bg-slate-950/4 dark:bg-slate-950">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-12 lg:px-16">
        <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-10 text-white shadow-xl shadow-indigo-500/20">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
              All Psychological Tests
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              테스트 전체 보기
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-indigo-100 sm:text-lg">
              아래 테스트는 자체 설계 및 전문 심리상담사와 협업 중인
              라인업입니다. 각 카드에서 소요 시간, 문항 수, 추천 대상 정보를
              확인하고 자세히 보기로 이동해 주세요.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              테스트 리스트
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              새로운 테스트는 매달 순차적으로 업데이트됩니다. 필요하신 검사가
              보이지 않는다면 페이지 하단에서 요청해 주세요.
            </p>
          </header>

          <div className="grid gap-8">
            {tests.map((test) => (
              <article
                key={test.slug}
                className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {test.category}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                        {test.meta.duration} · {test.meta.questionCount}문항
                      </span>
                      {test.meta.recommendedCadence ? (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                          추천 주기: {test.meta.recommendedCadence}
                        </span>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {test.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {test.summary}
                      </p>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {test.overview}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {test.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full max-w-xs flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                        추천 대상
                      </p>
                      <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-300">
                        {test.recommended.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/tests/${test.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-500"
                    >
                      상세 페이지 이동
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-8 text-center shadow-inner shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            원하는 검사가 없나요?
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            필요한 검사 유형이나 협업 제안이 있다면 아래 이메일로 의견을
            보내주세요.
          </p>
          <a
            href="mailto:hello@psychology-lab.example"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-400 hover:bg-white dark:border-indigo-500/40 dark:text-indigo-200"
          >
            hello@psychology-lab.example
          </a>
        </section>
      </main>
    </div>
  );
}
