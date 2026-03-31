import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "심심풀이 심리테스트의 개인정보처리방침입니다. 개인정보 수집 항목, 쿠키 사용, 제3자 제공, 이용자 권리 등을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              개인정보처리방침
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              심심풀이 심리테스트는 이용자의 개인정보를 소중히 여깁니다.
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
            <span className="text-gray-900 font-medium">개인정보처리방침</span>
          </nav>
        </div>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
          <div className="rounded-xl bg-white shadow-sm p-6 sm:p-8 space-y-8">
            <p className="text-sm text-gray-500">
              시행일: 2025년 1월 1일 | 최종 수정일: 2025년 6월 1일
            </p>

            {/* 1. 개요 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">1</span>
                개요
              </h2>
              <p className="text-gray-600 leading-relaxed">
                심심풀이 심리테스트(이하 &quot;본 사이트&quot;)는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 본 개인정보처리방침은 본 사이트가 이용자의 개인정보를 어떻게 수집, 이용, 보관 및 보호하는지에 대해 설명합니다.
              </p>
            </div>

            {/* 2. 수집 항목 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">2</span>
                개인정보 수집 항목
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 사이트는 별도의 회원가입 절차가 없으며, 테스트 결과를 서버에 저장하지 않습니다. 다만, 서비스 운영 및 개선을 위해 다음과 같은 정보가 자동으로 수집될 수 있습니다.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span><strong>자동 수집 정보:</strong> 접속 IP 주소, 브라우저 종류 및 버전, 운영체제 정보, 접속 일시, 방문 페이지, 화면 해상도</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span><strong>쿠키 정보:</strong> 웹사이트 이용 패턴 분석 및 광고 제공을 위한 쿠키</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span><strong>테스트 응답:</strong> 테스트 응답은 사용자의 브라우저에서만 처리되며, 서버에 전송되거나 저장되지 않습니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. 쿠키 및 분석 도구 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">3</span>
                쿠키 및 분석 도구 사용
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 사이트는 서비스 품질 개선과 광고 운영을 위해 다음과 같은 제3자 도구를 사용합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                  <p className="text-sm text-gray-600">
                    웹사이트 트래픽 분석 도구로, 방문자 수, 페이지 조회 수, 체류 시간 등을 익명으로 수집합니다. 수집된 데이터는 서비스 개선 목적으로만 활용됩니다.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Google AdSense</h3>
                  <p className="text-sm text-gray-600">
                    맞춤형 광고를 제공하기 위해 쿠키를 사용합니다. Google의 광고 쿠키를 통해 사용자의 관심사에 기반한 광고가 표시될 수 있습니다.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                쿠키 사용을 원하지 않는 경우, 브라우저 설정에서 쿠키를 비활성화하거나, <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google 광고 설정</a>에서 맞춤 광고를 비활성화할 수 있습니다.
              </p>
            </div>

            {/* 4. 제3자 제공 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">4</span>
                제3자 제공
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                본 사이트는 이용자의 개인정보를 외부에 판매하거나 제공하지 않습니다. 다만, 다음의 경우에는 예외적으로 정보가 공유될 수 있습니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span><strong>광고 네트워크:</strong> Google AdSense를 통해 광고를 게재하며, Google의 개인정보처리방침에 따라 쿠키 기반 정보가 수집될 수 있습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">&#8226;</span>
                  <span><strong>법적 요구:</strong> 법령에 의한 요청이 있는 경우 관련 법률에 따라 정보가 제공될 수 있습니다.</span>
                </li>
              </ul>
            </div>

            {/* 5. 이용자 권리 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">5</span>
                이용자의 권리
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                이용자는 개인정보와 관련하여 다음과 같은 권리를 행사할 수 있습니다.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>브라우저 쿠키 삭제를 통한 수집 정보 초기화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>Google 광고 설정을 통한 맞춤 광고 비활성화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>브라우저의 &quot;추적 안 함(Do Not Track)&quot; 기능 활성화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    <span>개인정보 관련 문의 및 삭제 요청</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. 개인정보 보호 책임자 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">6</span>
                개인정보 보호 책임자
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                개인정보 처리에 관한 업무를 총괄하여 책임지고, 이용자의 불만 처리 및 피해 구제를 위해 다음과 같이 개인정보 보호 책임자를 지정하고 있습니다.
              </p>
              <div className="rounded-lg border border-gray-200 p-4">
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><strong>담당:</strong> Psychological Test Lab 운영팀</li>
                  <li><strong>이메일:</strong> contact@psychological-test-lab.com</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                기타 개인정보 침해에 대한 신고나 상담이 필요한 경우, 개인정보침해신고센터(privacy.kisa.or.kr, 118), 대검찰청 사이버수사과(spo.go.kr, 1301), 경찰청 사이버안전국(cyberbureau.police.go.kr, 182)으로 문의하실 수 있습니다.
              </p>
            </div>

            {/* 7. 정책 변경 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">7</span>
                개인정보처리방침 변경
              </h2>
              <p className="text-gray-600 leading-relaxed">
                본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수 있습니다. 변경 사항이 있을 경우, 본 페이지를 통해 사전에 공지하며, 변경된 방침은 공지된 시행일부터 효력이 발생합니다. 이용자께서는 정기적으로 본 페이지를 방문하여 변경 사항을 확인해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
