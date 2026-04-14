import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "심심풀이 심리테스트에 대한 문의, 피드백, 제휴 제안을 보내주세요. 영업일 기준 1-2일 내에 답변드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              문의하기
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              궁금한 점이나 피드백이 있으시면 언제든 연락해 주세요.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              홈
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">문의하기</span>
          </nav>
        </div>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
          {/* FAQ suggestion */}
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">먼저 FAQ를 확인해 보세요</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  자주 묻는 질문에서 테스트 정확성, 개인정보 보호, 결과 해석 등에 대한 답변을 바로 확인하실 수 있습니다.
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  자주 묻는 질문 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">연락처 정보</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">이메일</h3>
                      <a
                        href="mailto:contact@psychological-test-lab.com"
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        contact@psychological-test-lab.com
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        영업일 기준 1-2일 내 답변드립니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">운영 시간</h3>
                      <p className="text-sm text-gray-600">
                        평일 09:00 - 18:00 (주말 및 공휴일 제외)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">운영 주체</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>사이트명:</strong> 심심풀이 심리테스트</p>
                  <p><strong>운영:</strong> Psychological Test Lab</p>
                  <p><strong>이메일:</strong> contact@psychological-test-lab.com</p>
                </div>
              </div>
            </div>

            {/* Contact Categories */}
            <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">문의 유형별 안내</h2>
              <div className="space-y-5">
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
                    <h3 className="font-semibold text-gray-900">일반 문의</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    사이트 이용 방법, 테스트 진행 중 오류, 기타 궁금한 사항에 대한 문의를 받습니다.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold">2</span>
                    <h3 className="font-semibold text-gray-900">테스트 관련 피드백</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    테스트 결과의 정확성, 문항 개선 제안, 새로운 테스트 주제 요청 등 콘텐츠 관련 의견을 보내주세요.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xs font-bold">3</span>
                    <h3 className="font-semibold text-gray-900">제휴 및 협력 문의</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    콘텐츠 제휴, 교육기관 협력, 미디어 인용 등 비즈니스 관련 문의를 환영합니다.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold">4</span>
                    <h3 className="font-semibold text-gray-900">개인정보 관련 문의</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    개인정보 처리에 관한 문의, 쿠키 설정 관련 요청 등은{" "}
                    <Link href="/privacy" className="text-indigo-600 hover:underline">
                      개인정보처리방침
                    </Link>
                    을 참고하시거나 이메일로 연락해 주세요.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <a
                  href="mailto:contact@psychological-test-lab.com"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
                >
                  이메일 보내기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
