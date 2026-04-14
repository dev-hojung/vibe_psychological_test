import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { getTestBySlug } from "@/lib/tests";
import { generateBreadcrumbSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://vibe-psychological-test.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | 심리학 가이드`,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Psychological Test Lab"],
      tags: post.tags,
    },
  };
}

const categoryColors: Record<string, string> = {
  "심리학 기초": "bg-indigo-100 text-indigo-700",
  성격심리: "bg-purple-100 text-purple-700",
  "정서 관리": "bg-rose-100 text-rose-700",
  대인관계: "bg-emerald-100 text-emerald-700",
  커리어: "bg-blue-100 text-blue-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumb = generateBreadcrumbSchema([
    { name: "홈", url: siteUrl },
    { name: "심리학 가이드", url: `${siteUrl}/blog` },
    { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Psychological Test Lab",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "심심풀이 심리테스트",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    inLanguage: "ko-KR",
  };

  const colorClass =
    categoryColors[post.category] || "bg-gray-100 text-gray-700";

  const relatedTests = post.relatedTests
    .map((testSlug) => {
      const test = getTestBySlug(testSlug);
      return test ? { slug: test.slug, title: test.title, tagline: test.tagline } : null;
    })
    .filter(Boolean);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumb]),
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
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              심리학 가이드
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">
              {post.title}
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 pb-8">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${colorClass}`}>
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.publishedAt}
            </span>
            {post.updatedAt !== post.publishedAt && (
              <span className="text-xs text-gray-400">
                (수정: {post.updatedAt})
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime} 읽기
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Article Content */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-10">
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8">
            <div
              className="prose prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-gray-600 prose-ul:my-4
                prose-li:mb-2 prose-li:leading-relaxed
                prose-strong:text-gray-900
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-500"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>안내:</strong> 이 아티클은 심리학 이론과 연구를 바탕으로 작성된 교육 콘텐츠입니다.
              전문적인 심리 상담이나 의학적 조언을 대체하지 않습니다.
              심리적 어려움을 겪고 계신 경우, 공인 정신건강 전문가에게 상담을 받으시기 바랍니다.
            </p>
          </div>
        </section>

        {/* Related Tests */}
        {relatedTests.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              관련 심리 테스트
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTests.map((test) =>
                test ? (
                  <Link
                    key={test.slug}
                    href={`/tests/${test.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {test.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-indigo-600">
                      테스트 해보기
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              관련 아티클
            </h2>
            <div className="space-y-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                      {related.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            모든 아티클 보기
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
