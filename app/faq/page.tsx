import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ)",
  description:
    "심심풀이 심리테스트에 대해 자주 묻는 질문과 답변을 확인하세요. 테스트의 과학적 근거, 정확성, 개인정보 보호 등을 안내합니다.",
};

const faqs = [
  {
    question: "심리테스트의 과학적 근거는 무엇인가요?",
    answer:
      "심심풀이 심리테스트의 모든 테스트는 Big Five 성격 모델, 애착 이론(Bowlby & Ainsworth), 스트레스 대처 이론(Lazarus & Folkman), 진로 발달 이론(Holland) 등 학술적으로 검증된 심리학 이론을 참고하여 설계되었습니다. 다만, 본 테스트는 임상용 표준화 검사가 아니므로 심심풀이 및 자기 탐색 목적으로 활용해 주시기 바랍니다.",
  },
  {
    question: "테스트 결과는 얼마나 정확한가요?",
    answer:
      "본 사이트의 테스트는 심리학 이론에 기반하여 제작되었으나, 표준화된 임상 심리 검사와는 차이가 있습니다. 테스트 결과는 자기 이해를 돕기 위한 참고 자료로 활용하시는 것이 적절합니다. 보다 정확한 심리 평가를 원하시면 공인 심리 전문가의 상담을 권장합니다.",
  },
  {
    question: "개인정보는 안전한가요?",
    answer:
      "네, 안전합니다. 심심풀이 심리테스트는 별도의 회원가입을 요구하지 않으며, 테스트 응답 데이터는 사용자의 브라우저에서만 처리됩니다. 서버에 테스트 결과를 저장하거나 전송하지 않습니다. 서비스 개선을 위해 Google Analytics를 통한 익명 트래픽 분석만 수행됩니다. 자세한 내용은 개인정보처리방침 페이지를 참고해 주세요.",
  },
  {
    question: "테스트를 다시 볼 수 있나요?",
    answer:
      "물론입니다. 모든 테스트는 횟수 제한 없이 무료로 반복 이용할 수 있습니다. 시간이 지남에 따라 자신의 심리 상태나 성향이 변할 수 있으므로, 정기적으로 다시 테스트해 보시는 것도 좋은 방법입니다.",
  },
  {
    question: "전문 심리 상담과의 차이점은 무엇인가요?",
    answer:
      "전문 심리 상담은 공인된 심리 전문가(정신건강의학과 전문의, 임상심리전문가, 상담심리사 등)가 표준화된 검사 도구와 임상 면담을 통해 진행하는 전문적인 평가입니다. 반면, 본 사이트의 테스트는 심심풀이 및 자기 탐색을 위한 도구로, 전문적인 진단이나 치료를 대체할 수 없습니다. 심리적 어려움을 겪고 계신 경우 반드시 전문가에게 상담을 받으시기 바랍니다.",
  },
  {
    question: "테스트 결과가 달라질 수 있나요?",
    answer:
      "네, 같은 테스트라도 시기에 따라 결과가 달라질 수 있습니다. 심리 상태, 기분, 최근 경험, 스트레스 수준 등 다양한 요인이 응답에 영향을 미치기 때문입니다. 이는 정상적인 현상이며, 오히려 시간에 따른 변화를 관찰하는 것이 자기 이해에 도움이 됩니다.",
  },
  {
    question: "어떤 테스트를 먼저 해야 하나요?",
    answer:
      "정해진 순서는 없습니다. 현재 자신이 가장 궁금하거나 관심 있는 주제의 테스트부터 시작하시면 됩니다. 스트레스를 많이 받고 있다면 스트레스 체크를, 성격이 궁금하다면 성격 유형 테스트를, 진로 고민이 있다면 진로 가치관 테스트를 추천합니다. 전체 테스트 목록에서 카테고리별로 필터링하여 원하는 테스트를 쉽게 찾을 수 있습니다.",
  },
  {
    question: "결과를 다른 사람에게 공유해도 되나요?",
    answer:
      "물론입니다! 테스트 결과 페이지에서 제공되는 공유 기능을 통해 카카오톡, SNS 등으로 결과를 공유할 수 있습니다. 친구나 가족과 결과를 비교해 보는 것도 재미있는 방법입니다. 다만, 타인의 결과를 본인의 동의 없이 공유하는 것은 자제해 주세요.",
  },
  {
    question: "미성년자도 테스트할 수 있나요?",
    answer:
      "네, 대부분의 테스트는 연령 제한 없이 이용할 수 있습니다. 다만, 테스트 내용에 따라 성인을 기준으로 설계된 문항이 포함될 수 있으므로, 미성년자의 경우 보호자와 함께 결과를 확인하시는 것을 권장합니다. 테스트 결과를 진지한 판단의 근거로 삼지 않도록 안내해 주세요.",
  },
  {
    question: "이 사이트를 만든 이유는 무엇인가요?",
    answer:
      "많은 사람들이 바쁜 일상 속에서 자기 자신을 돌아볼 기회를 갖지 못합니다. 심심풀이 심리테스트는 누구나 쉽고 부담 없이 자기 탐색을 할 수 있는 공간을 만들고자 시작되었습니다. 심리학의 가치를 일상에 가까이 가져와, 가벼운 자기 이해를 통해 더 나은 일상을 보내는 데 도움이 되길 바랍니다.",
  },
  {
    question: "새로운 테스트는 언제 추가되나요?",
    answer:
      "새로운 테스트는 정기적으로 추가됩니다. 심리학 연구 동향과 사용자 요청을 반영하여 다양한 주제의 테스트를 개발하고 있습니다. 새로운 테스트가 추가되면 메인 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "광고가 표시되는 이유는 무엇인가요?",
    answer:
      "심심풀이 심리테스트는 모든 테스트를 무료로 제공하기 위해 Google AdSense를 통한 광고를 운영하고 있습니다. 광고 수익은 서버 운영, 새로운 테스트 개발, 서비스 품질 개선에 사용됩니다. 이용에 불편을 드려 죄송하며, 가능한 한 사용 경험을 방해하지 않도록 노력하고 있습니다.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              심심풀이 심리테스트에 대해 궁금한 점을 확인하세요.
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
            <span className="text-gray-900 font-medium">FAQ</span>
          </nav>
        </div>

        {/* FAQ List */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
          <FaqAccordion faqs={faqs} />

          {/* Contact CTA */}
          <div className="mt-10 rounded-xl bg-white shadow-sm p-6 sm:p-8 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              찾으시는 답변이 없으신가요?
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              추가 문의 사항이 있으시면 이메일로 연락해 주세요.
            </p>
            <a
              href="mailto:contact@psychological-test-lab.com"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              이메일 문의하기
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
