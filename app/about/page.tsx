import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
  description:
    "심심풀이 심리테스트의 미션, 테스트 개발 과정, 전문성과 신뢰에 대해 알아보세요. 심리학 이론에 기반한 자가진단 도구를 무료로 제공합니다.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              심심풀이 심리테스트 소개
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              나를 더 깊이 이해하는 여정, 심심풀이 심리테스트가 함께합니다.
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
            <span className="text-gray-900 font-medium">소개</span>
          </nav>
        </div>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
          {/* Mission */}
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                사이트 소개 및 미션
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              심심풀이 심리테스트는 일상 속에서 가볍게 자신을 돌아볼 수 있는 무료 온라인 심리 테스트 플랫폼입니다. 우리는 심리학적 이론에 기반한 다양한 자가진단 도구를 통해 사용자들이 자신의 성격, 감정, 성향을 보다 깊이 이해할 수 있도록 돕고 있습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              현대 사회에서 많은 사람들이 바쁜 일상에 쫓기며 자기 자신을 들여다볼 시간을 갖지 못합니다. 심심풀이 심리테스트는 이러한 현실에 착안하여, 누구나 쉽고 부담 없이 자신의 내면을 탐색할 수 있는 기회를 제공하고자 시작되었습니다. 스트레스 수준 확인, 성격 유형 파악, 대인관계 성향 분석, 진로 탐색 등 생활 밀착형 심리 테스트를 무료로 이용할 수 있습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              우리의 미션은 심리학의 가치를 일상에 가까이 가져오는 것입니다. 전문적인 심리 검사가 아니더라도, 가벼운 자기 탐색을 통해 자신에 대한 이해를 넓히고, 더 나은 선택을 할 수 있도록 영감을 드리는 것이 목표입니다.
            </p>
          </div>

          {/* Goals */}
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                우리의 목표
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              심심풀이 심리테스트는 정확하고 유익한 자가진단 도구를 제공하는 것을 최우선 목표로 삼고 있습니다. 단순한 오락을 넘어, 심리학적으로 의미 있는 인사이트를 전달하여 사용자의 자기 이해와 성장을 돕고자 합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">접근성 향상</h3>
                <p className="text-sm text-gray-600">누구나 무료로, 회원가입 없이 즉시 테스트를 이용할 수 있도록 장벽을 낮추었습니다.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">과학적 기반</h3>
                <p className="text-sm text-gray-600">모든 테스트는 검증된 심리학 이론과 연구 결과를 참고하여 설계됩니다.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">다양한 영역</h3>
                <p className="text-sm text-gray-600">성격, 감정, 관계, 진로, 스트레스 등 다양한 심리 영역을 폭넓게 다룹니다.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">지속적 업데이트</h3>
                <p className="text-sm text-gray-600">정기적으로 새로운 테스트를 추가하고, 기존 테스트를 개선하여 높은 품질을 유지합니다.</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                테스트 개발 과정
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              심심풀이 심리테스트의 모든 콘텐츠는 체계적인 개발 과정을 거쳐 제작됩니다. 단순한 재미 위주의 퀴즈가 아닌, 심리학적 근거를 갖춘 자가진단 도구를 목표로 합니다.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">이론 조사 및 문헌 검토</h3>
                  <p className="text-sm text-gray-600">관련 심리학 이론(Big Five, MBTI, 애착 이론, 스트레스 척도 등)을 조사하고 학술 문헌을 검토합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">문항 설계 및 척도 구성</h3>
                  <p className="text-sm text-gray-600">이론에 기반하여 질문 문항을 작성하고, 응답 척도와 점수 산출 방식을 설계합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">결과 유형 정의</h3>
                  <p className="text-sm text-gray-600">점수 범위별 결과 유형을 정의하고, 각 유형에 대한 상세한 설명과 조언을 작성합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">검수 및 개선</h3>
                  <p className="text-sm text-gray-600">내부 검수를 통해 문항의 적절성, 결과의 타당성을 확인하고 지속적으로 개선합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                전문성과 신뢰
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              심심풀이 심리테스트는 심리학 연구와 이론을 기반으로 콘텐츠를 개발합니다. Big Five 성격 모델, 애착 이론(Bowlby & Ainsworth), 스트레스 대처 이론(Lazarus & Folkman), 진로 발달 이론(Holland, Super) 등 학술적으로 검증된 프레임워크를 참고하여 테스트를 설계합니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              또한 각 테스트의 결과 해석은 관련 분야의 심리학적 관점을 반영하여 작성되며, 사용자에게 의미 있는 인사이트를 제공하기 위해 노력합니다. 모든 테스트는 출시 전 내부 검토 과정을 거치며, 사용자 피드백을 반영하여 지속적으로 개선됩니다.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl bg-amber-50 border border-amber-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                한계 및 면책 사항
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              심심풀이 심리테스트에서 제공하는 모든 테스트와 결과는 <strong>심심풀이 및 자가 참고용</strong>으로만 제공됩니다. 본 사이트의 테스트는 임상 심리 검사나 의학적 진단 도구가 아니며, 전문적인 심리 상담이나 치료를 대체할 수 없습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              테스트 결과는 자기 이해를 위한 참고 자료로만 활용해 주시기 바랍니다. 심리적 어려움이나 정신 건강 문제가 있다고 느끼시는 경우, 반드시 공인된 정신건강 전문가(정신건강의학과 전문의, 임상심리전문가, 상담심리사 등)에게 상담을 받으시기를 권장합니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              본 사이트의 테스트 결과에 기반한 개인적 판단이나 행동에 대해 심심풀이 심리테스트는 어떠한 법적 책임도 지지 않습니다. 테스트 결과를 진지한 의사결정의 유일한 근거로 사용하지 마시고, 항상 전문가의 조언과 함께 종합적으로 판단해 주시기 바랍니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
