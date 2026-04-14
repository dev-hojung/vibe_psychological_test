import { tests } from "@/lib/tests";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import TestCard from "@/components/TestCard";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, webSchema]),
        }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              나를 알아가는 시간
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              심심할 때 가볍게 해보는 무료 심리 테스트.
              <br className="hidden sm:block" />
              스트레스 체크부터 성격 유형, 진로 탐색까지 다양한 테스트를
              즐겨보세요.
            </p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-100"
            >
              테스트 시작하기
              <svg
                className="w-4 h-4"
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
        </section>

        {/* Tests Grid */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              인기 심리 테스트
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              자신을 더 깊이 이해하는 첫 걸음을 시작하세요
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tests.map((test) => (
              <TestCard
                key={test.slug}
                slug={test.slug}
                title={test.title}
                tagline={test.tagline}
                category={test.category}
                duration={test.meta.duration}
                questionCount={test.meta.questionCount}
                tags={test.tags}
              />
            ))}
          </div>
        </section>

        {/* Value of Psychological Testing */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                심리 테스트의 가치
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                자기 이해는 더 나은 삶을 위한 첫걸음입니다
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 space-y-5">
              <p className="text-gray-600 leading-relaxed">
                현대 사회에서 우리는 끊임없이 선택의 기로에 서게 됩니다. 어떤 직업을 선택할지, 어떻게 관계를 맺을지, 스트레스를 어떻게 관리할지 등 수많은 결정을 내려야 합니다. 이때 자기 자신을 깊이 이해하고 있다면 보다 현명한 판단을 내릴 수 있습니다. 심리학 연구에 따르면, 자기인식(self-awareness)이 높은 사람들은 직장에서의 만족도가 높고, 대인관계에서 갈등이 적으며, 정서적으로도 더 안정적인 것으로 나타났습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                심리 테스트는 이러한 자기 탐색의 효과적인 도구입니다. 체계적으로 설계된 질문에 솔직하게 응답하는 과정에서, 평소 인식하지 못했던 자신의 성향, 감정 패턴, 가치관을 발견할 수 있습니다. 심리학자 타샤 유리히(Tasha Eurich)의 연구에 따르면, 자기인식은 &quot;내적 자기인식&quot;(자신의 가치관, 감정, 행동 패턴을 아는 것)과 &quot;외적 자기인식&quot;(타인이 나를 어떻게 보는지 아는 것)으로 나뉘며, 두 가지 모두 삶의 질을 높이는 데 중요한 역할을 합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                심심풀이 심리테스트는 Big Five 성격 모델, 애착 이론, 스트레스 대처 이론, 진로 발달 이론 등 검증된 심리학 프레임워크를 기반으로 테스트를 설계하여, 가벼운 자기 탐색이면서도 심리학적으로 의미 있는 인사이트를 제공합니다. 물론 전문적인 임상 검사를 대체하지는 않지만, 일상에서 자신을 돌아보는 유용한 첫걸음이 될 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Category Guide */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                카테고리별 가이드
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                관심 있는 심리 영역을 탐색해 보세요
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">정서 관리</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  스트레스 수준, 감정 조절 능력, 번아웃 위험도 등을 점검합니다. 정서적 균형을 유지하기 위한 자기 모니터링의 첫걸음으로, 한스 셀리에의 스트레스 이론과 라자러스의 인지적 평가 모델에 기반합니다.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">커리어 개발</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  직업 가치관, 업무 스타일, 의사결정 성향 등을 파악하여 커리어 방향을 설정합니다. 홀랜드의 RIASEC 모델, 슈퍼의 진로 발달 이론, 샤인의 커리어 앵커 이론을 참고하여 설계되었습니다.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">대인관계</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  애착 유형, 커뮤니케이션 스타일, 갈등 대처 방식 등 관계 패턴을 탐색합니다. 볼비와 에인스워스의 애착 이론, 토마스-킬만 갈등 모델 등 대인관계 심리학 이론에 기반합니다.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">자기 개발</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  창의성 유형, 학습 스타일, 시간 관리 습관 등 개인 성장을 위한 다양한 영역을 진단합니다. 자기효능감 이론(반두라), 성장 마인드셋(드웩) 등의 연구를 바탕으로 실용적인 인사이트를 제공합니다.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">조직 리더십</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  리더십 스타일, 팀워크 성향, 조직 내 역할 등을 파악합니다. 변혁적 리더십 이론(베이스 & 아볼리오), 상황적 리더십 모델(허시 & 블랜차드) 등을 참고하여 리더로서의 강점과 개발 영역을 탐색합니다.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">라이프스타일</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  여행 스타일, 소비 습관, 반려동물 궁합 등 일상 속 성향을 가볍게 탐색합니다. 심리학적 성격 이론을 일상 맥락에 적용하여, 재미와 인사이트를 동시에 제공하는 콘텐츠입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                이용 방법
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                간단한 3단계로 나를 이해하는 여정을 시작하세요
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">테스트 선택</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  정서 관리, 커리어, 대인관계 등 관심 있는 주제의 심리 테스트를 선택하세요. 각 테스트의 소요시간과 문항 수를 미리 확인할 수 있습니다.
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">솔직하게 응답</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  정답은 없습니다. 직관적으로 떠오르는 대로 솔직하게 답변해 주세요. 너무 오래 고민하지 않는 것이 보다 정확한 결과를 얻는 방법입니다.
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-600 text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">결과 확인 및 활용</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  심리학 이론에 기반한 분석 결과와 맞춤 조언을 확인하세요. 결과를 저장하거나 친구와 공유할 수 있으며, 주기적으로 재검사하여 변화를 추적할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Advisory */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  전문가 조언 안내
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                심심풀이 심리테스트에서 제공하는 모든 테스트는 심리학 이론에 기반하여 설계되었으나, 표준화된 임상 심리 검사가 아닙니다. 테스트 결과는 자기 이해를 돕기 위한 참고 자료로 활용해 주시기 바랍니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                만약 심리적 어려움을 겪고 계시거나 정신건강에 대한 우려가 있으시다면, 반드시 공인 정신건강 전문가(정신건강의학과 전문의, 임상심리전문가, 상담심리사)에게 상담을 받으시기 바랍니다. 자기 탐색은 성장의 시작이지만, 전문적인 도움이 필요한 순간을 인식하는 것도 중요한 자기 이해입니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  사이트 소개 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  자주 묻는 질문
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              더 많은 테스트가 준비되어 있어요
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              정기적으로 새로운 심리 테스트가 업데이트됩니다
            </p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              전체 테스트 보기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
