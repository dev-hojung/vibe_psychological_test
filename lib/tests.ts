export type TestDetail = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  meta: {
    duration: string;
    questionCount: number;
    recommendedCadence?: string;
  };
  tags: string[];
  overview: string;
  sections: Array<{
    title: string;
    description: string;
  }>;
  recommended: string[];
  sampleQuestions: string[];
  followUp: string[];
};

export const tests: TestDetail[] = [
  {
    slug: "stress-balance-check",
    title: "스트레스 레벨 체크",
    tagline: "최근 한 달간의 스트레스 지표와 회복력을 점검합니다.",
    summary:
      "신체·정서·인지 반응을 종합적으로 평가하여 현재 상태를 파악하고 회복 루틴을 설계합니다.",
    category: "정서 관리",
    meta: {
      duration: "7분",
      questionCount: 20,
      recommendedCadence: "격주 점검",
    },
    tags: ["심리건강", "회복탄력성"],
    overview:
      "간단한 문항으로 스트레스 수준과 회복력 지표를 동시에 살피며, 즉각 실행 가능한 컨디션 회복 가이드를 제공합니다.",
    sections: [
      {
        title: "평가 포인트",
        description:
          "신체 피로도, 감정 기복, 집중력, 대처 전략 4가지 카테고리로 나누어 상태를 측정합니다.",
      },
      {
        title: "결과 활용",
        description:
          "각 지표별 위험 신호를 함께 알려주고, 스트레스 유형에 맞춘 루틴 예시를 제안합니다.",
      },
      {
        title: "후속 케어",
        description:
          "필요 시 전문 상담 연결 및 셀프 케어 체크리스트와 연동하여 지속적으로 변화를 추적할 수 있습니다.",
      },
    ],
    recommended: [
      "주기적으로 컨디션을 모니터링하고 싶은 분",
      "과도한 업무 스트레스로 회복 루틴이 필요한 분",
      "상담 또는 코칭 전에 사전 진단이 필요한 분",
    ],
    sampleQuestions: [
      "최근 한 달 동안 잠들기 어려웠던 날이 얼마나 있었나요?",
      "압박 상황에서도 집중력을 유지하기 어려웠나요?",
    ],
    followUp: [
      "컨디션 기록 템플릿",
      "전문가 상담 연계 안내",
    ],
  },
  {
    slug: "career-values-assessment",
    title: "진로 가치관 탐색",
    tagline: "일과 삶에서 중요한 가치를 살펴보고 커리어 방향성을 찾아보세요.",
    summary:
      "A/B 선택을 통해 우선순위를 명확히 하면서, 일에서 만족감을 주는 요소를 정리할 수 있습니다.",
    category: "커리어 개발",
    meta: {
      duration: "12분",
      questionCount: 40,
      recommendedCadence: "반기 점검",
    },
    tags: ["커리어", "자기이해"],
    overview:
      "활동 가치, 성장 가치, 관계 가치 등 6개 축 기준으로 측정하여 개인 맞춤 커리어 전략을 도출합니다.",
    sections: [
      {
        title: "검사 방식",
        description:
          "2지선다 비교 방식을 활용해 직관적으로 선택하도록 설계되어 있으며, 중간 값이 없는 대신 확실한 우선순위가 드러납니다.",
      },
      {
        title: "결과 리포트",
        description:
          "최상위 가치 TOP5와 낮은 가치 영역을 시각화하여, 현재 커리어 만족도와의 간극을 확인할 수 있습니다.",
      },
      {
        title: "실행 계획",
        description:
          "가치-역량 매칭표와 커리어 실험 아이디어를 제공해 다음 행동으로 자연스럽게 이어질 수 있도록 돕습니다.",
      },
    ],
    recommended: [
      "이직 또는 전직을 고민하며 방향을 찾고 싶은 분",
      "커리어 코칭을 앞두고 선호를 정리하고 싶은 분",
      "나만의 일 의미를 명확히 하고 싶은 분",
    ],
    sampleQuestions: [
      "새로운 역할을 맡을 때, 안정적인 환경보다 도전적인 환경이 더 끌리나요?",
      "성과 보상과 성장 기회 중 어느 쪽이 더 중요하다고 느끼나요?",
    ],
    followUp: [
      "가치-역량 매칭 워크시트",
      "커리어 코칭 프로그램 추천",
    ],
  },
  {
    slug: "attachment-style-check",
    title: "애착 유형 테스트",
    tagline: "관계 패턴을 이해하고 건강한 커뮤니케이션 포인트를 찾습니다.",
    summary:
      "친밀한 관계에서 반복되는 감정 반응과 기대를 탐색하여, 자신만의 관계 전략을 세울 수 있습니다.",
    category: "대인관계",
    meta: {
      duration: "8분",
      questionCount: 28,
      recommendedCadence: "관계 전환 시",
    },
    tags: ["관계", "감정"],
    overview:
      "심리학 연구에서 널리 사용되는 성인 애착 척도를 기반으로, 안정형·불안형·회피형·혼재형 네 가지 프로파일을 제공합니다.",
    sections: [
      {
        title: "탐색 영역",
        description:
          "애정 표현, 갈등 대처, 독립성 선호, 신뢰 수준 등 관계 핵심 영역에서의 성향을 확인합니다.",
      },
      {
        title: "결과 요약",
        description:
          "현재 유형뿐 아니라, 상황에 따라 나타나는 보조 유형을 함께 제시하여 관계 패턴을 입체적으로 이해하도록 돕습니다.",
      },
      {
        title: "실천 가이드",
        description:
          "유형별로 도움이 되는 대화법, 경계 설정 팁, 감정 조절 루틴을 구체적으로 제시합니다.",
      },
    ],
    recommended: [
      "연인 또는 가족 관계에서 반복되는 갈등이 있는 분",
      "자신의 감정 반응을 깊이 이해하고 싶은 분",
      "커플/부모 상담 등 전문 과정 전 사전 진단이 필요한 분",
    ],
    sampleQuestions: [
      "친밀한 관계에서 상대가 나를 떠날까 걱정되는 편인가요?",
      "감정이 격해졌을 때 혼자만의 시간이 꼭 필요한가요?",
    ],
    followUp: [
      "관계 리셋 대화 가이드",
      "감정 조절 루틴 플래너",
    ],
  },
  {
    slug: "leadership-style-diagnosis",
    title: "리더십 스타일 진단",
    tagline: "팀을 이끌 때의 리더십 강점과 보완점을 확인해 보세요.",
    summary:
      "상황적 리더십 이론을 바탕으로, 과업 중심/관계 중심 균형을 측정하여 조직 내 리더십 전략을 세울 수 있습니다.",
    category: "조직 리더십",
    meta: {
      duration: "10분",
      questionCount: 32,
      recommendedCadence: "분기별 점검",
    },
    tags: ["리더십", "조직"],
    overview:
      "각 리더십 스타일별 주요 행동 특성을 비교하고, 팀 구성원의 성숙도에 따른 맞춤 전략을 제안합니다.",
    sections: [
      {
        title: "측정 항목",
        description:
          "의사결정 방식, 피드백 빈도, 동기 부여 전략, 갈등 조정 4개 영역을 중심으로 진단합니다.",
      },
      {
        title: "결과 구성",
        description:
          "리더십 스타일 매트릭스와 함께, 상황별 추천 행동 시나리오를 제공합니다.",
      },
      {
        title: "팀 적용",
        description:
          "1:1 미팅 가이드, 성과 리뷰 템플릿 등 실무 적용 자료를 추가 제공합니다.",
      },
    ],
    recommended: [
      "신임 리더로서 자신의 운영 스타일을 점검하고 싶은 분",
      "팀 상황에 따라 유연한 리더십 전략이 필요한 분",
      "조직 개발 워크숍을 준비 중인 HR 담당자",
    ],
    sampleQuestions: [
      "성과가 예상보다 낮을 때, 가장 먼저 어떤 방식으로 대응하나요?",
      "팀 구성원의 자율성과 가이드를 어떤 비율로 제공하나요?",
    ],
    followUp: [
      "상황별 리더십 매뉴얼",
      "1:1 미팅 체크리스트",
    ],
  },
  {
    slug: "learning-habits-check",
    title: "학습 성향 체크",
    tagline: "학습 몰입을 돕는 환경과 전략을 파악합니다.",
    summary:
      "학습 동기, 집중 스타일, 환경 조건을 측정하여 효율적인 학습 루틴을 설계할 수 있도록 돕습니다.",
    category: "자기 개발",
    meta: {
      duration: "6분",
      questionCount: 18,
      recommendedCadence: "월간 점검",
    },
    tags: ["학습", "성장"],
    overview:
      "학습목표 설정, 몰입 루틴, 피드백 활용, 회복 전략 4가지 축에서 현재 성향을 파악합니다.",
    sections: [
      {
        title: "진단 지표",
        description:
          "목표 명확성, 시간 관리, 자기 피드백, 회복 루틴 등 실천력에 직결되는 항목으로 구성했습니다.",
      },
      {
        title: "추천 루틴",
        description:
          "성향에 맞는 학습 루틴 샘플과 추천 도구 리스트를 제공하여 바로 적용할 수 있도록 합니다.",
      },
      {
        title: "성과 추적",
        description:
          "성장 저널 템플릿과 연결하여 주차별 개선 포인트를 기록하도록 안내합니다.",
      },
    ],
    recommended: [
      "학습 루틴을 점검하고 싶은 대학생 및 직장인",
      "자격 시험 준비 등 집중 학습이 필요한 분",
      "교육 프로그램 운영 전 대상자 진단을 원하는 기관",
    ],
    sampleQuestions: [
      "학습 계획을 세울 때 주간 단위와 일간 단위 중 어느 쪽이 편하신가요?",
      "집중력을 잃었을 때 회복하는 나만의 루틴이 있나요?",
    ],
    followUp: [
      "주간 학습 리추얼 샘플",
      "집중력 회복 퀵 체크리스트",
    ],
  },
  {
    slug: "travel-train",
    title: "여행 스타일 동물열차",
    tagline: "4축으로 나의 여행 차량을 배정받아보세요.",
    summary:
      "계획/즉흥 · 도시/자연 · 미식/액티비티 · 솔로/함께 4축으로 나의 여행 성향을 파악하고 동물 열차를 배정받습니다.",
    category: "라이프스타일",
    meta: {
      duration: "5분",
      questionCount: 9,
    },
    tags: ["여행", "성향", "라이프스타일"],
    overview:
      "여행 준비부터 목적지 선택, 테마, 동행까지의 선호를 통해 당신만의 여행 스타일을 발견하고, 그에 맞는 동물 열차를 배정받아보세요.",
    sections: [
      {
        title: "검사 구성",
        description:
          "계획 vs 즉흥, 도시 vs 자연, 미식 vs 액티비티, 혼자 vs 함께의 4가지 축으로 여행 성향을 측정합니다.",
      },
      {
        title: "결과 해석",
        description:
          "5가지 동물 열차 중 하나로 배정되며, 각 열차는 고유한 여행 스타일과 특징을 가지고 있습니다.",
      },
      {
        title: "활용 팁",
        description:
          "나의 여행 스타일을 이해하고, 같은 스타일의 여행자들과 정보를 공유하거나 새로운 여행 방식을 시도해볼 수 있습니다.",
      },
    ],
    recommended: [
      "다가오는 여행 계획을 세우기 전 성향을 파악하고 싶은 분",
      "새로운 여행 방식을 발견하고 싶은 분",
      "여행 동반자와 스타일을 맞추고 싶은 분",
    ],
    sampleQuestions: [
      "여행 준비 과정은 어떻게 하시나요?",
      "선호하는 목적지 무드는 무엇인가요?",
    ],
    followUp: [
      "동물별 여행 추천지 가이드",
      "여행 동반자 매칭 서비스",
    ],
  },
];

export function getTestBySlug(slug: string) {
  return tests.find((test) => test.slug === slug);
}

export function getFeaturedTests(count = 3) {
  return tests.slice(0, count);
}
