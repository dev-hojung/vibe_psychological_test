// 창의성 유형 테스트 데이터

export type CreativityTypeOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type CreativityTypeQuestion = {
  id: string;
  text: string;
  options: CreativityTypeOption[];
};

export type CreativityTypeProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  creativeStyle?: string;
  bestEnvironment?: string[];
  creativeTips?: string[];
};

export type CreativityTypeTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: CreativityTypeQuestion[];
  resultProfiles: CreativityTypeProfile[];
  scoringNote: string;
};

export const creativityTypeTest: CreativityTypeTest = {
  id: "creativity-type",
  title: "창의성 유형 테스트",
  description:
    "발산/수렴 · 추상/구체 2축 10문항으로 나의 창의성 유형을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, creativity art theme, ",
  questions: [
    {
      id: "q1",
      text: "아이디어를 낼 때 나의 스타일은?",
      options: [
        { id: "a", text: "일단 많이 떠올리고 나중에 정리", scores: { divergent: 2 } },
        { id: "b", text: "핵심 아이디어 하나를 깊이 발전시킨다", scores: { convergent: 2 } },
      ],
    },
    {
      id: "q2",
      text: "프로젝트를 시작할 때 먼저 생각하는 것은?",
      options: [
        { id: "a", text: "큰 비전과 방향성", scores: { abstract: 2 } },
        { id: "b", text: "구체적인 실행 계획과 단계", scores: { concrete: 2 } },
      ],
    },
    {
      id: "q3",
      text: "브레인스토밍할 때 나의 모습은?",
      options: [
        { id: "a", text: "엉뚱한 아이디어도 마구 쏟아낸다", scores: { divergent: 2 } },
        { id: "b", text: "실현 가능한 아이디어를 선별한다", scores: { convergent: 2 } },
      ],
    },
    {
      id: "q4",
      text: "문제를 바라보는 관점은?",
      options: [
        { id: "a", text: "근본적인 원인과 맥락을 탐구한다", scores: { abstract: 2 } },
        { id: "b", text: "당장 적용 가능한 해결책을 찾는다", scores: { concrete: 2 } },
      ],
    },
    {
      id: "q5",
      text: "영감을 얻는 방식은?",
      options: [
        { id: "a", text: "다양한 분야를 넘나들며 연결점 찾기", scores: { divergent: 1, abstract: 1 } },
        { id: "b", text: "하나의 분야를 깊이 파고들며 발견하기", scores: { convergent: 1, concrete: 1 } },
      ],
    },
    {
      id: "q6",
      text: "좋은 아이디어의 기준은?",
      options: [
        { id: "a", text: "참신하고 남들이 생각하지 못한 것", scores: { divergent: 1 } },
        { id: "b", text: "현실적이고 바로 실행할 수 있는 것", scores: { convergent: 1 } },
      ],
    },
    {
      id: "q7",
      text: "새로운 것을 배울 때?",
      options: [
        { id: "a", text: "이론과 원리부터 이해하고 싶다", scores: { abstract: 1 } },
        { id: "b", text: "직접 해보면서 익히는 게 좋다", scores: { concrete: 1 } },
      ],
    },
    {
      id: "q8",
      text: "발표 자료를 만들 때?",
      options: [
        { id: "a", text: "독창적인 구성과 스토리에 집중", scores: { divergent: 1, abstract: 1 } },
        { id: "b", text: "명확한 데이터와 실행 방안에 집중", scores: { convergent: 1, concrete: 1 } },
      ],
    },
    {
      id: "q9",
      text: "팀에서 나의 역할은?",
      options: [
        { id: "a", text: "새로운 방향과 가능성을 제시하는 사람", scores: { divergent: 1 } },
        { id: "b", text: "아이디어를 다듬고 실현하는 사람", scores: { convergent: 1 } },
      ],
    },
    {
      id: "q10",
      text: "창의적 결과물에 대한 생각은?",
      options: [
        { id: "a", text: "과정의 탐구 자체가 가치 있다", scores: { abstract: 1 } },
        { id: "b", text: "눈에 보이는 결과물이 중요하다", scores: { concrete: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "idea-explosion",
      label: "아이디어 폭발형",
      rule: "divergent >= convergent && abstract >= concrete",
      caption: "무한한 상상력으로 새로운 세계를 여는 창조자!",
      imagePrompt: "explosive creative character with lightbulbs and stars everywhere, cosmic background",
      imagePath: "/creativity/idea-explosion.png",
      description:
        "끝없는 상상력과 자유로운 발상으로 아이디어를 폭발적으로 생산하는 타입입니다. 기존의 틀에 얽매이지 않고, 추상적 사고로 남들이 보지 못하는 연결고리를 발견합니다. 혁신의 씨앗을 뿌리는 존재입니다.",
      characteristics: [
        "끊임없는 아이디어 생산",
        "기존 틀을 깨는 자유로운 발상",
        "다양한 분야 간 연결 능력",
        "추상적 개념에 대한 높은 이해력",
        "호기심 넘치는 탐구 정신",
      ],
      creativeStyle:
        "머릿속에 항상 새로운 아이디어가 떠오르며, 하나의 생각에서 수십 가지 가능성을 만들어냅니다. 제약 없는 환경에서 최고의 창의력을 발휘합니다.",
      bestEnvironment: [
        "자유로운 분위기의 작업 공간",
        "다양한 배경의 사람들과의 교류",
        "규칙이 적고 실험이 허용되는 환경",
        "예술, 음악 등 감각적 자극이 있는 공간",
      ],
      creativeTips: [
        "아이디어를 기록하는 습관을 만들어 놓치지 마세요",
        "실행 가능한 아이디어를 선별하는 기준을 만들어 보세요",
        "마감과 제약이 오히려 창의성을 높일 수 있습니다",
        "실행력 있는 파트너와 협업하면 시너지가 납니다",
      ],
    },
    {
      id: "execution-master",
      label: "실행 장인형",
      rule: "convergent >= divergent && concrete >= abstract",
      caption: "아이디어를 현실로 만드는 실행의 달인!",
      imagePrompt: "crafting master character with tools and blueprint, workshop background",
      imagePath: "/creativity/execution-master.png",
      description:
        "아이디어를 현실로 만드는 뛰어난 실행력을 가진 타입입니다. 구체적이고 실용적인 접근으로 아이디어를 다듬고, 완성도 높은 결과물을 만들어냅니다. 과정을 체계화하고 최적화하는 능력이 뛰어납니다.",
      characteristics: [
        "뛰어난 실행력과 완성도",
        "구체적이고 체계적인 접근",
        "아이디어를 현실화하는 능력",
        "디테일에 강한 집중력",
        "효율적인 프로세스 구축",
      ],
      creativeStyle:
        "하나의 아이디어를 깊이 파고들어 최고의 결과물로 만들어냅니다. 실현 가능성을 기준으로 아이디어를 평가하고, 단계별로 완성해가는 과정을 즐깁니다.",
      bestEnvironment: [
        "명확한 목표가 주어진 환경",
        "집중할 수 있는 조용한 공간",
        "필요한 도구와 자원이 갖춰진 곳",
        "체계적인 프로세스가 있는 팀",
      ],
      creativeTips: [
        "가끔은 완벽함을 내려놓고 실험해 보세요",
        "다른 분야의 아이디어도 수용해 보세요",
        "브레인스토밍 단계에서는 판단을 유보해 보세요",
        "새로운 도구나 방법을 시도하면 시야가 넓어집니다",
      ],
    },
    {
      id: "vision-designer",
      label: "비전 설계자형",
      rule: "divergent >= convergent && concrete >= abstract",
      caption: "큰 그림을 구체적으로 그려내는 비전의 건축가!",
      imagePrompt: "visionary architect character with blueprint and telescope, futuristic city background",
      imagePath: "/creativity/vision-designer.png",
      description:
        "큰 그림을 그리면서도 구체적으로 실현하는 능력을 가진 타입입니다. 다양한 아이디어를 바탕으로 현실적인 비전을 설계하며, 상상을 실제로 만들어가는 과정을 즐깁니다.",
      characteristics: [
        "비전과 실행의 균형",
        "아이디어를 구체적 계획으로 전환",
        "다양한 가능성을 현실에 적용",
        "프로토타입과 실험을 즐김",
        "목표 지향적 창의성",
      ],
      creativeStyle:
        "여러 아이디어 중 가장 가능성 있는 것을 골라 구체적인 형태로 만들어냅니다. 상상력과 실행력의 교차점에서 최고의 성과를 냅니다.",
      bestEnvironment: [
        "자유롭지만 목표가 있는 프로젝트",
        "프로토타이핑이 가능한 환경",
        "다양한 실험을 허용하는 팀 문화",
        "아이디어와 실행을 오갈 수 있는 유연한 공간",
      ],
      creativeTips: [
        "추상적 사고의 시간도 의식적으로 가져 보세요",
        "이론적 배경을 쌓으면 비전이 더 깊어집니다",
        "때로는 실행을 멈추고 방향을 재점검해 보세요",
        "비슷한 유형의 사람들과 아이디어를 나누면 시너지가 납니다",
      ],
    },
    {
      id: "analytical-innovator",
      label: "분석 혁신가형",
      rule: "convergent >= divergent && abstract >= concrete",
      caption: "논리적 분석으로 혁신을 이끄는 지적 탐험가!",
      imagePrompt: "analytical innovator character with magnifying glass and gears, neural network background",
      imagePath: "/creativity/analytical-innovator.png",
      description:
        "깊은 분석력과 추상적 사고를 바탕으로 논리적 혁신을 이끄는 타입입니다. 복잡한 문제의 본질을 꿰뚫고, 체계적인 접근으로 획기적인 해결책을 찾아냅니다.",
      characteristics: [
        "깊은 분석력과 논리적 사고",
        "복잡한 문제의 본질 파악",
        "체계적인 혁신 접근",
        "이론과 원리에 대한 깊은 이해",
        "데이터 기반의 창의적 판단",
      ],
      creativeStyle:
        "기존 체계를 분석하고 개선점을 찾아 혁신을 만들어냅니다. 감이 아닌 논리와 데이터를 바탕으로 창의적 결정을 내리며, 근본적인 변화를 추구합니다.",
      bestEnvironment: [
        "깊은 사고가 가능한 집중 환경",
        "데이터와 자료에 접근 가능한 환경",
        "지적 토론이 활발한 팀",
        "연구와 실험이 허용되는 문화",
      ],
      creativeTips: [
        "분석에만 머물지 말고 실험과 실행도 해보세요",
        "감각적이고 직관적인 접근도 가치가 있습니다",
        "다양한 사람들의 아이디어에 열린 마음을 가져 보세요",
        "완벽한 분석 전에 빠른 프로토타입을 만들어 보세요",
      ],
    },
  ],
  scoringNote:
    "2축(divergent/convergent, abstract/concrete) 합산. 각 축에서 높은 쪽을 조합하여 4가지 유형 결정. 동점 시 첫 번째 축(divergent/convergent) 우선 판정.",
};

// 규칙 평가 함수
export function evaluateRule(
  rule: string,
  scores: Record<string, number>
): boolean {
  try {
    let expr = rule;
    Object.keys(scores).forEach((key) => {
      const regex = new RegExp(`\\b${key}\\b`, "g");
      expr = expr.replace(regex, String(scores[key] || 0));
    });
    return Function(`"use strict"; return ${expr}`)();
  } catch (error) {
    console.error("Rule evaluation error:", error);
    return false;
  }
}

// 결과 프로파일 찾기
export function findCreativityProfile(
  answers: Record<string, string>,
  questions: CreativityTypeQuestion[],
  profiles: CreativityTypeProfile[]
): CreativityTypeProfile | null {
  const scores: Record<string, number> = {
    divergent: 0,
    convergent: 0,
    abstract: 0,
    concrete: 0,
  };

  questions.forEach((question) => {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) return;

    const selectedOption = question.options.find(
      (opt) => opt.id === selectedOptionId
    );
    if (!selectedOption) return;

    Object.entries(selectedOption.scores).forEach(([key, value]) => {
      scores[key] = (scores[key] || 0) + value;
    });
  });

  const matchedProfiles = profiles.filter((profile) =>
    evaluateRule(profile.rule, scores)
  );

  if (matchedProfiles.length > 0) {
    const priority = [
      "idea-explosion",
      "execution-master",
      "vision-designer",
      "analytical-innovator",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준
  const maxScore = Math.max(...Object.values(scores));
  const topScores = Object.entries(scores)
    .filter(([_, value]) => value === maxScore)
    .map(([key]) => key);

  if (topScores.includes("divergent") && topScores.includes("abstract")) {
    return profiles.find((p) => p.id === "idea-explosion") || profiles[0];
  }
  if (topScores.includes("convergent") && topScores.includes("concrete")) {
    return profiles.find((p) => p.id === "execution-master") || profiles[0];
  }
  if (topScores.includes("divergent")) {
    return profiles.find((p) => p.id === "vision-designer") || profiles[0];
  }
  if (topScores.includes("convergent")) {
    return profiles.find((p) => p.id === "analytical-innovator") || profiles[0];
  }

  return profiles[0];
}
