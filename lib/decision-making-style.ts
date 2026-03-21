// 의사결정 유형 진단 테스트 데이터

export type DecisionMakingOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type DecisionMakingQuestion = {
  id: string;
  text: string;
  options: DecisionMakingOption[];
};

export type DecisionMakingProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  decisionStyle?: string;
  decisionTips?: string[];
};

export type DecisionMakingTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: DecisionMakingQuestion[];
  resultProfiles: DecisionMakingProfile[];
  scoringNote: string;
};

export const decisionMakingTest: DecisionMakingTest = {
  id: "decision-making-style",
  title: "의사결정 유형 진단",
  description:
    "논리/직관 · 신속/신중 2축 10문항으로 나의 의사결정 스타일을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, ",
  questions: [
    {
      id: "q1",
      text: "새로운 직장 제안을 받았을 때, 나는?",
      options: [
        {
          id: "a",
          text: "연봉, 복지, 성장 가능성 등 항목별로 꼼꼼히 비교해본다",
          scores: { logic: 2, careful: 1 },
        },
        {
          id: "b",
          text: "첫 느낌과 끌림으로 빠르게 결정한다",
          scores: { intuition: 2, swift: 1 },
        },
      ],
    },
    {
      id: "q2",
      text: "큰 금액의 제품을 구매할 때, 나는?",
      options: [
        {
          id: "a",
          text: "리뷰와 스펙을 충분히 조사한 후 결정한다",
          scores: { logic: 1, careful: 2 },
        },
        {
          id: "b",
          text: "마음에 들면 바로 구매한다",
          scores: { intuition: 1, swift: 2 },
        },
      ],
    },
    {
      id: "q3",
      text: "팀에서 의견 충돌이 생겼을 때, 나는?",
      options: [
        {
          id: "a",
          text: "각자의 주장을 데이터와 근거로 평가해 해결한다",
          scores: { logic: 2 },
        },
        {
          id: "b",
          text: "분위기와 감정 흐름을 파악해 직감적으로 중재한다",
          scores: { intuition: 2 },
        },
      ],
    },
    {
      id: "q4",
      text: "마감이 촉박한 상황에서 결정을 내려야 할 때, 나는?",
      options: [
        {
          id: "a",
          text: "시간이 부족해도 핵심 정보만 추려 논리적으로 판단한다",
          scores: { logic: 1, swift: 1 },
        },
        {
          id: "b",
          text: "직감을 믿고 빠르게 선택한다",
          scores: { intuition: 1, swift: 2 },
        },
      ],
    },
    {
      id: "q5",
      text: "새로운 사업 아이디어를 실행할지 고민할 때, 나는?",
      options: [
        {
          id: "a",
          text: "시장 조사와 수익성 분석을 철저히 한 후 결정한다",
          scores: { logic: 2, careful: 2 },
        },
        {
          id: "b",
          text: "가능성이 느껴지면 일단 시작해본다",
          scores: { intuition: 2, swift: 2 },
        },
      ],
    },
    {
      id: "q6",
      text: "친구의 조언과 내 생각이 다를 때, 나는?",
      options: [
        {
          id: "a",
          text: "친구의 의견도 포함해 다시 논리적으로 검토한다",
          scores: { logic: 1, careful: 1 },
        },
        {
          id: "b",
          text: "내 직감을 믿고 내 생각대로 밀고 나간다",
          scores: { intuition: 2, swift: 1 },
        },
      ],
    },
    {
      id: "q7",
      text: "늘 하던 방식 vs 새로운 방식 중 선택해야 할 때, 나는?",
      options: [
        {
          id: "a",
          text: "기존 방식의 효과를 분석해 변경 여부를 결정한다",
          scores: { logic: 2, careful: 1 },
        },
        {
          id: "b",
          text: "새로운 방식이 끌린다면 일단 시도해본다",
          scores: { intuition: 1, swift: 2 },
        },
      ],
    },
    {
      id: "q8",
      text: "복잡한 문제를 마주했을 때, 나는?",
      options: [
        {
          id: "a",
          text: "문제를 잘게 쪼개 원인과 해결책을 단계적으로 분석한다",
          scores: { logic: 2, careful: 2 },
        },
        {
          id: "b",
          text: "전체적인 그림을 보고 핵심 해결책을 직감적으로 포착한다",
          scores: { intuition: 2, swift: 1 },
        },
      ],
    },
    {
      id: "q9",
      text: "투자 결정을 앞두고 있을 때, 나는?",
      options: [
        {
          id: "a",
          text: "수익률, 리스크, 시장 상황을 충분히 공부한 후 결정한다",
          scores: { logic: 2, careful: 2 },
        },
        {
          id: "b",
          text: "좋은 기회라는 느낌이 오면 빠르게 투자한다",
          scores: { intuition: 2, swift: 2 },
        },
      ],
    },
    {
      id: "q10",
      text: "인생의 중요한 방향을 결정해야 할 때, 나는?",
      options: [
        {
          id: "a",
          text: "장단점 목록을 작성하고 충분히 고민한 후 결정한다",
          scores: { logic: 1, careful: 2 },
        },
        {
          id: "b",
          text: "내 마음이 가는 방향을 따라 결정한다",
          scores: { intuition: 2, careful: 1 },
        },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "analytic-strategist",
      label: "분석적 전략가",
      rule: "logic >= intuition + 2 && careful >= swift",
      caption: "데이터와 근거로 판단하는 전략가",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, analyst character with clipboard and charts, strategic planning theme",
      imagePath: "/decision/analytic-strategist.png",
      description:
        "논리적 분석과 신중한 검토를 통해 결정하는 타입. 데이터와 근거를 중시하며, 체계적인 의사결정을 합니다.",
      characteristics: [
        "결정 전에 충분한 자료를 수집한다",
        "장단점을 꼼꼼히 비교 분석한다",
        "감정보다 논리를 우선시한다",
        "시간이 걸리더라도 정확한 결정을 추구한다",
      ],
      decisionStyle:
        "당신은 데이터와 논리를 무기로 삼는 분석적 전략가입니다. 충분한 정보를 모으고 체계적으로 분석한 후에 결정을 내리며, 그 결정에 대한 확신이 강합니다.",
      decisionTips: [
        "때로는 직감도 중요한 정보임을 기억하세요",
        "분석 마비에 빠지지 않도록 결정 기한을 정하세요",
        "완벽한 정보가 없어도 결정할 수 있는 연습을 해보세요",
      ],
    },
    {
      id: "intuitive-actor",
      label: "직관적 행동파",
      rule: "intuition >= logic + 2 && swift >= careful",
      caption: "감각으로 빠르게 움직이는 행동파",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, energetic character running with lightning bolt, action theme",
      imagePath: "/decision/intuitive-actor.png",
      description:
        "직감과 경험을 바탕으로 빠르게 결정하는 타입. 복잡한 분석보다 느낌을 신뢰하며, 결정 후 빠르게 실행합니다.",
      characteristics: [
        "직감적으로 빠르게 결정한다",
        "경험과 느낌을 중요하게 여긴다",
        "결정 후 바로 행동으로 옮긴다",
        "지나치게 분석하는 것을 답답해한다",
      ],
      decisionStyle:
        "당신은 직감의 힘을 아는 직관적 행동파입니다. 복잡한 상황에서도 핵심을 빠르게 파악하고, 감각적 판단으로 기회를 포착합니다.",
      decisionTips: [
        "중요한 결정은 하루 정도 숙고해보세요",
        "직감의 근거를 한번 정리해보는 습관을 들이세요",
        "결정 후 복기하는 시간을 가져보세요",
      ],
    },
    {
      id: "careful-empath",
      label: "신중한 공감가",
      rule: "intuition >= logic && careful >= swift && (intuition - logic) <= 3",
      caption: "감성적이면서 신중한 결정자",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, gentle character with heart and thinking bubble, empathy theme",
      imagePath: "/decision/careful-empath.png",
      description:
        "감성과 공감을 바탕으로 신중하게 결정하는 타입. 사람들의 감정과 관계를 고려하며, 모두에게 좋은 결정을 찾으려 합니다.",
      characteristics: [
        "다른 사람의 입장을 먼저 생각한다",
        "결정이 주변에 미칠 영향을 고려한다",
        "공감 능력이 뛰어나다",
        "갈등을 피하려는 경향이 있다",
      ],
      decisionStyle:
        "당신은 사람과 관계를 중심으로 생각하는 신중한 공감가입니다. 결정이 모든 사람에게 미칠 영향을 세심하게 고려하며, 조화로운 결과를 만들어냅니다.",
      decisionTips: [
        "자신의 필요도 결정에 포함시키세요",
        "모든 사람을 만족시킬 수 없음을 받아들이세요",
        "가끔은 논리적 기준을 먼저 세워보세요",
      ],
    },
    {
      id: "quick-logician",
      label: "빠른 논리가",
      rule: "logic >= intuition && swift >= careful && (logic - intuition) <= 3",
      caption: "핵심을 빠르게 꿰뚫는 논리가",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, sharp character with speed lines and lightbulb, quick thinking theme",
      imagePath: "/decision/quick-logician.png",
      description:
        "논리적 사고를 빠르게 적용하는 타입. 핵심을 파악하고 즉시 합리적 결정을 내리며, 효율성을 최우선으로 합니다.",
      characteristics: [
        "문제의 핵심을 빠르게 파악한다",
        "효율적인 결정을 선호한다",
        "결정에 대한 근거를 간결하게 제시한다",
        "때로는 다른 사람의 감정을 놓칠 수 있다",
      ],
      decisionStyle:
        "당신은 빠른 분석력과 실행력을 겸비한 논리가입니다. 복잡한 상황에서도 핵심 논리를 빠르게 추출하고, 효율적인 결정을 즉시 내립니다.",
      decisionTips: [
        "빠른 결정이 항상 좋은 결정은 아님을 기억하세요",
        "팀원들의 의견을 들을 시간을 확보하세요",
        "감정적 측면도 결정의 중요한 요소임을 인식하세요",
      ],
    },
  ],
  scoringNote:
    "2축(logic/intuition, swift/careful) 합산. 규칙 매칭 우선순위: 분석적 전략가 > 직관적 행동파 > 신중한 공감가 > 빠른 논리가.",
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
export function findDecisionMakingProfile(
  answers: Record<string, string>,
  questions: DecisionMakingQuestion[],
  profiles: DecisionMakingProfile[]
): DecisionMakingProfile | null {
  const scores: Record<string, number> = {
    logic: 0,
    intuition: 0,
    swift: 0,
    careful: 0,
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
      "analytic-strategist",
      "intuitive-actor",
      "careful-empath",
      "quick-logician",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준
  const maxLogicIntuition =
    scores.logic >= scores.intuition ? "logic" : "intuition";
  const maxSwiftCareful = scores.swift >= scores.careful ? "swift" : "careful";

  if (maxLogicIntuition === "logic" && maxSwiftCareful === "careful") {
    return profiles.find((p) => p.id === "analytic-strategist") || profiles[0];
  }
  if (maxLogicIntuition === "intuition" && maxSwiftCareful === "swift") {
    return profiles.find((p) => p.id === "intuitive-actor") || profiles[0];
  }
  if (maxLogicIntuition === "intuition" && maxSwiftCareful === "careful") {
    return profiles.find((p) => p.id === "careful-empath") || profiles[0];
  }

  return profiles.find((p) => p.id === "quick-logician") || profiles[0];
}
