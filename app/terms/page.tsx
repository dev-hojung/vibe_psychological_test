import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "심심풀이 심리테스트의 이용약관입니다. 서비스 이용 조건, 면책조항, 지적 재산권, 책임 제한 등을 안내합니다.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              이용약관
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              서비스 이용 전 아래 약관을 확인해 주세요.
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
            <span className="text-gray-900 font-medium">이용약관</span>
          </nav>
        </div>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 space-y-8">
            <p className="text-sm text-gray-500">
              시행일: 2025년 1월 1일 | 최종 수정일: 2025년 6월 1일
            </p>

            {/* 1. 서비스 소개 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">1</span>
                서비스 소개
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                심심풀이 심리테스트(이하 &quot;본 서비스&quot;)는 Psychological Test Lab이 운영하는 무료 온라인 심리 테스트 플랫폼입니다. 본 서비스는 심리학 이론에 기반한 다양한 자가진단 테스트를 제공하며, 사용자가 자신의 성격, 성향, 감정 상태 등을 탐색할 수 있도록 돕습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                본 서비스에서 제공하는 테스트는 심심풀이 및 자기 이해 증진 목적으로 설계되었으며, 임상적 진단이나 의학적 평가를 위한 도구가 아닙니다. 본 서비스를 이용함으로써 아래의 이용약관에 동의한 것으로 간주됩니다.
              </p>
            </div>

            {/* 2. 이용 조건 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">2</span>
                이용 조건
              </h2>
              <div className="rounded-lg bg-gray-50 p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>본 서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>이용자는 본 서비스를 개인적, 비상업적 목적으로만 이용할 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>이용자는 본 서비스를 이용하면서 관련 법령 및 본 약관을 준수해야 합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>서비스 이용 시 타인의 권리를 침해하거나 공공질서에 반하는 행위를 하여서는 안 됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>본 서비스의 콘텐츠를 자동화된 방법(크롤링, 스크래핑 등)으로 수집하는 것을 금지합니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. 면책조항 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">3</span>
                테스트 결과 관련 면책조항
              </h2>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>본 서비스에서 제공하는 테스트 결과는 의학적 진단, 심리학적 진단, 정신건강 평가, 또는 전문적인 상담을 대체할 수 없습니다.</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">&#8226;</span>
                    <span>테스트 결과는 심심풀이 및 자기 참고용으로만 제공됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">&#8226;</span>
                    <span>테스트 결과의 정확성, 완전성, 적합성에 대해 어떠한 보증도 하지 않습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">&#8226;</span>
                    <span>테스트 결과를 근거로 한 의사결정에 대해 본 서비스는 책임을 지지 않습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">&#8226;</span>
                    <span>심리적 어려움을 겪고 계신 경우, 반드시 공인 정신건강 전문가에게 상담을 받으시기 바랍니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. 지적 재산권 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">4</span>
                지적 재산권
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 서비스에 게시된 모든 콘텐츠(테스트 문항, 결과 해석, 디자인, 텍스트, 이미지 등)에 대한 저작권 및 지적 재산권은 Psychological Test Lab에 귀속됩니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>이용자는 개인적인 테스트 결과를 SNS 등에 공유할 수 있습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>본 서비스의 콘텐츠를 무단으로 복제, 배포, 수정, 상업적으로 이용하는 것은 금지됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>콘텐츠를 인용하고자 할 경우, 출처를 명시하고 사전 승인을 받아야 합니다.</span>
                </li>
              </ul>
            </div>

            {/* 5. 서비스 변경 및 중단 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">5</span>
                서비스 변경 및 중단
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 서비스는 운영상의 필요에 따라 사전 고지 없이 다음과 같은 조치를 취할 수 있습니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>테스트 콘텐츠의 추가, 수정 또는 삭제</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>서비스 디자인 및 기능의 변경</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>기술적 문제, 서버 점검, 기타 불가피한 사유로 인한 서비스 일시 중단</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>서비스 전부 또는 일부의 영구 중단</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                서비스 변경 또는 중단으로 인해 발생하는 손해에 대해 본 서비스는 별도의 배상 책임을 지지 않습니다.
              </p>
            </div>

            {/* 6. 책임 제한 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">6</span>
                책임 제한
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 서비스는 무료로 제공되는 서비스로서, 관련 법령이 허용하는 범위 내에서 다음 사항에 대해 책임을 제한합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>서비스 이용 중 발생하는 데이터 손실, 기기 문제 등의 기술적 손해</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>테스트 결과에 기반한 이용자의 판단이나 행동으로 인한 결과</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>제3자 서비스(광고, 외부 링크 등)를 통해 발생하는 문제</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>천재지변, 해킹 등 불가항력적 사유로 인한 서비스 장애</span>
                </li>
              </ul>
            </div>

            {/* 7. 분쟁 해결 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">7</span>
                분쟁 해결
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 약관과 관련하여 발생하는 분쟁에 대해서는 다음과 같이 처리합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>서비스 이용과 관련하여 분쟁이 발생한 경우, 양 당사자는 원만한 해결을 위해 성실히 협의합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>협의가 이루어지지 않는 경우, 관할 법원에 소송을 제기할 수 있습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span>이용 관련 문의: contact@psychological-test-lab.com</span>
                </li>
              </ul>
            </div>

            {/* 8. 약관 변경 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">8</span>
                약관 변경
              </h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 서비스 운영 정책이나 관련 법령의 변경에 따라 수정될 수 있습니다. 약관이 변경되는 경우, 변경 내용을 본 페이지에 게시하며, 변경된 약관은 게시 후 7일이 경과한 시점부터 효력이 발생합니다. 변경 후에도 서비스를 계속 이용하는 경우, 변경된 약관에 동의한 것으로 간주됩니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
