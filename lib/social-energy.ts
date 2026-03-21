// 사회적 에너지 유형 테스트 데이터

export type SocialEnergyOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type SocialEnergyQuestion = {
  id: string;
  text: string;
  options: SocialEnergyOption[];
};

export type SocialEnergyProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  socialStyle?: string;
  energyTips?: string[];
};

export type SocialEnergyTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: SocialEnergyQuestion[];
  resultProfiles: SocialEnergyProfile[];
  scoringNote: string;
};

export const socialEnergyTest: SocialEnergyTest = {
  id: "social-energy",
  title: "사회적 에너지 테스트",
  description:
    "내부/외부 충전 · 에너지 절약/방출 2축 10문항으로 나의 사회적 에너지 패턴을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, ",
  questions: [
    {
      id: "q1",
      text: "주말 계획을 세울 때 나는?",
      options: [
        {
          id: "a",
          text: "집에서 조용히 쉬며 혼자만의 시간을 보낸다",
          scores: { internal: 2 },
        },
        {
          id: "b",
          text: "친구들과 만나거나 모임에 참여한다",
          scores: { external: 2 },
        },
      ],
    },
    {
      id: "q2",
      text: "일을 할 때 에너지가 가장 잘 나오는 상황은?",
      options: [
        {
          id: "a",
          text: "혼자 집중해서 작업할 때",
          scores: { internal: 2, conserve: 1 },
        },
        {
          id: "b",
          text: "팀원들과 활발히 소통하며 협업할 때",
          scores: { external: 2, expend: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "파티나 큰 모임에 갔을 때 나는?",
      options: [
        {
          id: "a",
          text: "처음에는 어색하고 에너지가 소모된다",
          scores: { internal: 1, conserve: 2 },
        },
        {
          id: "b",
          text: "사람들과 어울리며 점점 신이 난다",
          scores: { external: 1, expend: 2 },
        },
      ],
    },
    {
      id: "q4",
      text: "피곤할 때 에너지를 회복하는 방법은?",
      options: [
        {
          id: "a",
          text: "혼자 조용한 공간에서 쉰다",
          scores: { internal: 2, conserve: 1 },
        },
        {
          id: "b",
          text: "가까운 사람들과 이야기하며 기운을 얻는다",
          scores: { external: 2, expend: 1 },
        },
      ],
    },
    {
      id: "q5",
      text: "팀 프로젝트에서 선호하는 역할은?",
      options: [
        {
          id: "a",
          text: "조용히 자료를 분석하고 깊이 있는 결과물을 만든다",
          scores: { internal: 1, conserve: 2 },
        },
        {
          id: "b",
          text: "아이디어를 활발히 제안하며 분위기를 이끈다",
          scores: { external: 1, expend: 2 },
        },
      ],
    },
    {
      id: "q6",
      text: "갈등이나 긴장된 상황에서 나는?",
      options: [
        {
          id: "a",
          text: "혼자 생각을 정리하고 에너지를 아낀다",
          scores: { internal: 2, conserve: 2 },
        },
        {
          id: "b",
          text: "적극적으로 대화하며 상황을 해결한다",
          scores: { external: 2, expend: 2 },
        },
      ],
    },
    {
      id: "q7",
      text: "퇴근 후 저녁 시간을 어떻게 보내고 싶은가?",
      options: [
        {
          id: "a",
          text: "혼자 책을 읽거나 취미 활동을 한다",
          scores: { internal: 2 },
        },
        {
          id: "b",
          text: "동료나 친구와 저녁 약속을 잡는다",
          scores: { external: 2 },
        },
      ],
    },
    {
      id: "q8",
      text: "소통할 때 선호하는 방식은?",
      options: [
        {
          id: "a",
          text: "문자나 메시지로 천천히 생각해서 답한다",
          scores: { internal: 1, conserve: 2 },
        },
        {
          id: "b",
          text: "직접 만나거나 전화로 활발하게 이야기한다",
          scores: { external: 1, expend: 2 },
        },
      ],
    },
    {
      id: "q9",
      text: "여행을 떠난다면 선호하는 방식은?",
      options: [
        {
          id: "a",
          text: "조용한 자연 속에서 혼자 또는 소수와 여유롭게",
          scores: { internal: 2, conserve: 1 },
        },
        {
          id: "b",
          text: "여러 명과 함께 다양한 활동을 즐기며 활발하게",
          scores: { external: 2, expend: 1 },
        },
      ],
    },
    {
      id: "q10",
      text: "새로운 환경에 처음 적응할 때 나는?",
      options: [
        {
          id: "a",
          text: "관찰하며 천천히 적응하고 에너지를 아낀다",
          scores: { internal: 1, conserve: 2 },
        },
        {
          id: "b",
          text: "먼저 사람들에게 다가가 빠르게 친해진다",
          scores: { external: 1, expend: 2 },
        },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "energy-station",
      label: "에너지 충전소",
      rule: "external >= internal + 2 && expend >= conserve",
      caption: "사람들에게 에너지를 주고받는 충전소",
      imagePrompt:
        "cheerful glowing character radiating light and energy, surrounded by happy people and sparkles, vibrant social scene",
      imagePath: "/social-energy/energy-station.png",
      description:
        "사람들과의 교류에서 에너지를 얻고 적극적으로 소비하는 타입. 모임과 대화를 통해 활력을 얻으며, 주변에 긍정 에너지를 전파합니다.",
      characteristics: [
        "사람을 만나면 에너지가 충전된다",
        "적극적으로 모임에 참여한다",
        "대화를 통해 아이디어를 얻는다",
        "혼자 오래 있으면 답답하다",
      ],
      socialStyle:
        "당신은 사교적 에너지의 원천인 에너지 충전소형입니다! 다양한 사람들을 만나고 대화할 때 가장 빛나며, 주변에 활력과 긍정 에너지를 나눠줍니다.",
      energyTips: [
        "에너지를 과도하게 소비하지 않도록 쉬는 날을 정하세요",
        "깊은 관계에도 시간을 투자하세요",
        "혼자만의 회복 시간도 중요합니다",
      ],
    },
    {
      id: "quiet-observer",
      label: "조용한 관찰자",
      rule: "internal >= external + 2 && conserve >= expend",
      caption: "내면에서 에너지를 찾는 관찰자",
      imagePrompt:
        "calm serene character sitting alone under a tree reading a book, peaceful nature background, soft light",
      imagePath: "/social-energy/quiet-observer.png",
      description:
        "혼자만의 시간에서 에너지를 충전하고 절약적으로 사용하는 타입. 깊은 사색과 관찰을 통해 내면의 풍요로움을 쌓습니다.",
      characteristics: [
        "혼자만의 시간이 에너지원이다",
        "관찰력과 통찰력이 뛰어나다",
        "깊이 있는 사고를 즐긴다",
        "사교 모임 후 충분한 혼자 시간이 필요하다",
      ],
      socialStyle:
        "당신은 내면의 깊이를 가진 조용한 관찰자입니다. 고요한 시간 속에서 에너지를 충전하고, 깊은 관찰과 사색을 통해 독특한 통찰력을 발휘합니다.",
      energyTips: [
        "소규모 모임부터 사회적 참여를 시작해보세요",
        "관찰한 것을 가까운 사람과 나눠보세요",
        "너무 고립되지 않도록 정기적 만남을 유지하세요",
      ],
    },
    {
      id: "selective-socializer",
      label: "선택적 사교가",
      rule: "internal >= external && expend >= conserve && (internal - external) <= 3",
      caption: "선택적으로 에너지를 발산하는 사교가",
      imagePrompt:
        "confident character choosing between paths, surrounded by select group of friends, strategic aura",
      imagePath: "/social-energy/selective-socializer.png",
      description:
        "내면에서 충전하되 원할 때 적극적으로 에너지를 발산하는 타입. 선택적으로 사교하며, 에너지를 전략적으로 사용합니다.",
      characteristics: [
        "참여할 모임을 신중하게 선택한다",
        "마음이 맞는 사람과는 활발하게 소통한다",
        "에너지 관리에 능숙하다",
        "양질의 사교를 추구한다",
      ],
      socialStyle:
        "당신은 전략적 에너지 관리의 달인 선택적 사교가입니다. 모든 모임에 참석하기보다 자신에게 의미 있는 만남을 선택하고, 그 자리에서 최대한의 에너지를 발휘합니다.",
      energyTips: [
        "새로운 유형의 모임도 가끔 도전해보세요",
        "에너지 낭비가 아닌 투자로 사교를 바라보세요",
        "자신의 에너지 패턴을 기록해보세요",
      ],
    },
    {
      id: "stable-connector",
      label: "안정적 연결자",
      rule: "external >= internal && conserve >= expend && (external - internal) <= 3",
      caption: "꾸준히 관계를 유지하는 연결자",
      imagePrompt:
        "warm steady character at center of a small cozy friend group, connected by gentle glowing threads, harmonious atmosphere",
      imagePath: "/social-energy/stable-connector.png",
      description:
        "사람과의 교류를 즐기되 에너지를 절약적으로 쓰는 타입. 꾸준하고 안정적인 관계를 유지하며, 깊은 신뢰를 쌓습니다.",
      characteristics: [
        "적은 에너지로 관계를 유지하는 능력이 있다",
        "정기적인 만남을 선호한다",
        "신뢰 기반의 관계를 중시한다",
        "갑작스러운 큰 모임은 부담스러울 수 있다",
      ],
      socialStyle:
        "당신은 에너지 효율이 높은 안정적 연결자입니다. 많은 에너지를 소모하지 않으면서도 꾸준히 사람들과 연결되어 있으며, 깊고 안정적인 관계를 만들어갑니다.",
      energyTips: [
        "가끔은 새로운 사람을 만나보세요",
        "관계의 질을 높이기 위한 깊은 대화를 시도하세요",
        "에너지가 넘칠 때 적극적으로 활동해보세요",
      ],
    },
  ],
  scoringNote:
    "2축(internal/external, conserve/expend) 합산. 규칙 매칭 우선순위: 에너지 충전소 > 조용한 관찰자 > 선택적 사교가 > 안정적 연결자. 선택적 사교가와 안정적 연결자는 축 간 차이 3 이하일 때 매칭.",
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
export function findSocialEnergyProfile(
  answers: Record<string, string>,
  questions: SocialEnergyQuestion[],
  profiles: SocialEnergyProfile[]
): SocialEnergyProfile | null {
  const scores: Record<string, number> = {
    internal: 0,
    external: 0,
    conserve: 0,
    expend: 0,
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
      "energy-station",
      "quiet-observer",
      "selective-socializer",
      "stable-connector",
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

  if (topScores.includes("external") && topScores.includes("expend")) {
    return profiles.find((p) => p.id === "energy-station") || profiles[0];
  }
  if (topScores.includes("internal") && topScores.includes("conserve")) {
    return profiles.find((p) => p.id === "quiet-observer") || profiles[0];
  }
  if (topScores.includes("expend")) {
    return profiles.find((p) => p.id === "selective-socializer") || profiles[0];
  }

  return profiles.find((p) => p.id === "stable-connector") || profiles[0];
}
