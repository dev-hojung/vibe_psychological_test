import { tests, getTestBySlug } from "@/lib/tests";
import { assessments } from "@/lib/assessments";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssessmentRunner from "@/components/AssessmentRunner";
import QuizRunnerSwitch from "@/components/QuizRunnerSwitch";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const QUIZ_SLUGS = [
  "travel-train",
  "love-style-test",
  "color-psychology",
  "mbti-simple",
  "communication-style",
  "money-sense",
  "conflict-style",
  "creativity-type",
  "time-management-style",
  "friendship-style",
  "decision-making-style",
  "pet-personality-match",
  "social-energy",
];

export async function generateStaticParams() {
  return tests.map((test) => ({ slug: test.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) return {};

  return {
    title: `${test.title} - 테스트 진행`,
    description: `${test.title}를 지금 시작하세요. ${test.meta.questionCount}문항, 약 ${test.meta.duration} 소요됩니다.`,
  };
}

export default async function TakePage({ params }: Props) {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) notFound();

  const isQuiz = QUIZ_SLUGS.includes(slug);
  const assessment = !isQuiz
    ? assessments.find((a) => a.slug === slug)
    : null;

  if (!isQuiz && !assessment) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              홈
            </Link>
            <span>/</span>
            <Link
              href="/tests"
              className="hover:text-indigo-600 transition-colors"
            >
              테스트
            </Link>
            <span>/</span>
            <Link
              href={`/tests/${slug}`}
              className="hover:text-indigo-600 transition-colors truncate max-w-[120px]"
            >
              {test.title}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">진행</span>
          </nav>
        </div>

        {/* Title */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-4 pb-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {test.title}
          </h1>
          {!isQuiz && assessment && (
            <p className="text-sm text-gray-500 mt-1">
              {assessment.instructions}
            </p>
          )}
        </div>

        {/* Runner */}
        <section className="mx-auto max-w-2xl px-4 sm:px-6 pb-16">
          {isQuiz ? (
            <QuizRunnerSwitch slug={slug} />
          ) : assessment ? (
            <AssessmentRunner assessment={assessment} />
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
