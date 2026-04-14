import { blogPosts, blogCategories } from "@/lib/blog-posts";
import { generateBreadcrumbSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "심리학 가이드 - 심리학 지식과 자기 이해를 위한 아티클",
  description:
    "Big Five 성격 모델, 스트레스 관리, 애착 유형, 번아웃 예방, 커뮤니케이션 스타일 등 심리학 이론에 기반한 교육 콘텐츠를 제공합니다.",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://vibe-psychological-test.vercel.app";

const categoryColors: Record<string, string> = {
  "심리학 기초": "bg-indigo-100 text-indigo-700",
  성격심리: "bg-purple-100 text-purple-700",
  "정서 관리": "bg-rose-100 text-rose-700",
  대인관계: "bg-emerald-100 text-emerald-700",
  커리어: "bg-blue-100 text-blue-700",
};

export default function BlogPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "심리학 가이드", url: `${siteUrl}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              심리학 가이드
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              심리학 이론에 기반한 깊이 있는 아티클로 자기 이해의 폭을 넓혀보세요.
            </p>
          </div>
        </section>

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
            <span className="text-gray-900 font-medium">심리학 가이드</span>
          </nav>
        </div>

        {/* Category Tags */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  cat === "전체"
                    ? "bg-gray-900 text-white"
                    : categoryColors[cat] || "bg-gray-100 text-gray-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 pb-4">
          <p className="text-gray-600 leading-relaxed">
            심심풀이 심리테스트의 심리학 가이드에서는 검증된 심리학 이론과 연구를 바탕으로
            일상에 적용할 수 있는 실용적인 지식을 전달합니다. Big Five 성격 모델, 애착 이론,
            스트레스 관리 과학, 감성지능 등 심리학의 핵심 주제를 깊이 있게 다루며,
            각 아티클은 관련 심리 테스트와 연결되어 이론적 이해와 실제 자기 탐색을 함께 경험할 수 있습니다.
          </p>
        </section>

        {/* Article Grid */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => {
              const colorClass =
                categoryColors[post.category] || "bg-gray-100 text-gray-700";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {post.readingTime} 읽기
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-gray-400">
                        {post.publishedAt}
                      </time>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA to Tests */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              읽은 내용을 직접 체험해 보세요
            </h2>
            <p className="text-white/80 text-sm mb-6">
              심리학 가이드에서 배운 이론을 심리 테스트로 직접 탐색할 수 있습니다
            </p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-100"
            >
              심리 테스트 둘러보기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
