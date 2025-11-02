import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getFeaturedTests } from "@/lib/tests";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const featuredTests = getFeaturedTests(3);

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychology-lab.example";

export const metadata: Metadata = {
  title: "홈",
  description:
    "정확하고 전문적인 심리 검사로 자기 이해를 깊이 파악하세요. 스트레스 체크, 진로 가치관 탐색, 애착 유형 테스트, 리더십 진단 등 다양한 심리 검사를 제공합니다.",
  openGraph: {
    title: "Psychological Test Lab | 심리 검사 및 자기 이해 테스트",
    description:
      "정확하고 전문적인 심리 검사로 자기 이해를 깊이 파악하세요. 다양한 심리 검사를 제공합니다.",
    url: siteUrl,
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <div className="min-h-screen bg-slate-950/4 dark:bg-slate-950">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-12 lg:px-16">
        <section id="recommended-tests" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                지금 인기 있는 테스트
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                가장 많이 찾는 검사 3가지를 먼저 소개드릴게요. 더 많은 검사는
                전체 보기에서 확인할 수 있습니다.
              </p>
            </div>
            <Link
              href="/tests"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              전체 테스트 이동
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredTests.map((item) => (
              <article
                key={item.slug}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="space-y-3">
                  <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.tagline}
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                      {item.meta.duration} · {item.meta.questionCount}문항
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/tests/${item.slug}/take`}
                    className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                  >
                    상세 살펴보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            어떻게 활용할 수 있나요?
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                1. 목적 정리
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                자기 이해, 관계 개선, 커리어 탐색 등 원하는 목표를 선택하면 맞춤
                추천을 제공합니다.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                2. 검사 선택
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                테스트 카드에서 소요 시간과 문항 수를 확인하고, 상황에 맞는
                검사를 바로 시작하세요.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                3. 인사이트 실행
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                결과 리포트와 후속 자료를 활용해 다음 행동으로 이어질 수 있도록
                지원합니다.
              </p>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Psychological Test Lab. 모든 권리 보유.
        </footer>
      </main>
    </div>
  );
}
