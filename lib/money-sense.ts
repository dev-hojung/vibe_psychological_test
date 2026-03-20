// 금전감각 유형 테스트 데이터

export type MoneySenseOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type MoneySenseQuestion = {
  id: string;
  text: string;
  options: MoneySenseOption[];
};

export type MoneySenseProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  moneyStyle?: string;
  financialTips?: string[];
};

export type MoneySenseTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: MoneySenseQuestion[];
  resultProfiles: MoneySenseProfile[];
  scoringNote: string;
};

export const moneySenseTest: MoneySenseTest = {
  id: "money-sense",
  title: "금전감각 유형 테스트",
  description:
    "저축/소비 · 계획/즉흥 · 투자/안정 3축 10문항으로 나의 금전 감각 유형을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, money finance theme, ",
  questions: [
    {
      id: "q1",
      text: "월급이 들어오면 가장 먼저 하는 것은?",
      options: [
        { id: "a", text: "정해진 금액을 저축 계좌로 이체", scores: { save: 2 } },
        { id: "b", text: "그동안 사고 싶었던 것을 구매", scores: { spend: 2 } },
      ],
    },
    {
      id: "q2",
      text: "큰 지출을 앞두고 있을 때?",
      options: [
        { id: "a", text: "미리 예산을 세우고 비교 분석한다", scores: { plan: 2 } },
        { id: "b", text: "마음에 들면 바로 결정한다", scores: { impulse: 2 } },
      ],
    },
    {
      id: "q3",
      text: "여유 자금이 생겼을 때?",
      options: [
        { id: "a", text: "주식이나 펀드에 투자한다", scores: { invest: 2 } },
        { id: "b", text: "안전한 예적금에 넣어둔다", scores: { safe: 2 } },
      ],
    },
    {
      id: "q4",
      text: "세일 기간에 나의 모습은?",
      options: [
        { id: "a", text: "필요한 것만 리스트에서 골라 산다", scores: { save: 1, plan: 1 } },
        { id: "b", text: "좋은 기회니까 일단 담아본다", scores: { spend: 1, impulse: 1 } },
      ],
    },
    {
      id: "q5",
      text: "가계부 작성에 대한 생각은?",
      options: [
        { id: "a", text: "꼼꼼히 기록하고 분석한다", scores: { plan: 2 } },
        { id: "b", text: "대략적으로만 파악하거나 안 쓴다", scores: { impulse: 2 } },
      ],
    },
    {
      id: "q6",
      text: "친구가 새로운 투자 상품을 소개해주면?",
      options: [
        { id: "a", text: "관심을 갖고 직접 공부해본다", scores: { invest: 1 } },
        { id: "b", text: "위험하니까 안전한 게 최고", scores: { safe: 1 } },
      ],
    },
    {
      id: "q7",
      text: "카페에서 음료를 고를 때?",
      options: [
        { id: "a", text: "가성비 좋은 메뉴를 고른다", scores: { save: 1 } },
        { id: "b", text: "먹고 싶은 걸 가격 상관없이 고른다", scores: { spend: 1 } },
      ],
    },
    {
      id: "q8",
      text: "경제 뉴스를 볼 때?",
      options: [
        { id: "a", text: "투자 기회를 찾아보며 관심 있게 본다", scores: { invest: 1, plan: 1 } },
        { id: "b", text: "크게 관심 없고 내 생활에 집중한다", scores: { safe: 1, impulse: 1 } },
      ],
    },
    {
      id: "q9",
      text: "목표를 위한 저축은?",
      options: [
        { id: "a", text: "구체적 금액과 기간을 정해 저축한다", scores: { save: 1, plan: 1 } },
        { id: "b", text: "여유가 있을 때 모으는 편이다", scores: { spend: 1, impulse: 1 } },
      ],
    },
    {
      id: "q10",
      text: "노후 준비에 대한 생각은?",
      options: [
        { id: "a", text: "지금부터 체계적으로 준비해야 한다", scores: { plan: 1, invest: 1 } },
        { id: "b", text: "지금을 즐기는 것도 중요하다", scores: { impulse: 1, spend: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "thorough-manager",
      label: "철저한 관리자",
      rule: "save >= spend && plan >= impulse && safe >= invest",
      caption: "한 푼도 허투루 쓰지 않는 재정 관리의 달인!",
      imagePrompt: "organized character with calculator and piggy bank, spreadsheet background",
      imagePath: "/money/thorough-manager.png",
      description:
        "체계적으로 돈을 관리하는 당신은 철저한 관리자입니다. 가계부를 꼼꼼히 쓰고, 저축 목표를 세우며, 안정적인 재정 운용을 선호합니다. 불필요한 지출을 줄이고 알뜰하게 살림을 꾸려나갑니다.",
      characteristics: [
        "꼼꼼한 가계부 작성",
        "체계적인 저축 계획",
        "불필요한 소비 절제",
        "안정적인 재정 운용 선호",
        "예산 내에서 효율적 소비",
      ],
      moneyStyle:
        "매월 고정 저축을 하고, 지출 내역을 꼼꼼히 관리합니다. 큰 지출 전에는 반드시 비교 분석을 하며, 안전한 금융 상품을 선호합니다.",
      financialTips: [
        "너무 아끼기만 하면 삶의 질이 떨어질 수 있으니 적절한 보상도 주세요",
        "안정적 자산 외에 소액 투자로 수익률을 높여 보세요",
        "가끔은 경험에 투자하는 것도 좋은 소비입니다",
        "비상금은 충분히 확보되어 있으니 장기 투자도 고려해 보세요",
      ],
    },
    {
      id: "strategic-investor",
      label: "전략적 투자자",
      rule: "save >= spend && plan >= impulse && invest >= safe",
      caption: "돈이 일하게 만드는 전략적 투자의 고수!",
      imagePrompt: "smart investor character with stock chart, growing money tree background",
      imagePath: "/money/strategic-investor.png",
      description:
        "체계적인 계획과 투자 감각을 겸비한 당신은 전략적 투자자입니다. 저축만으로는 부족하다는 것을 알고, 공부하며 자산을 불려가는 능동적인 재정 관리를 합니다.",
      characteristics: [
        "적극적인 투자 공부",
        "계획적인 포트폴리오 관리",
        "장기적 자산 증식 목표",
        "리스크 관리 능력",
        "경제 트렌드에 대한 관심",
      ],
      moneyStyle:
        "저축과 투자를 균형 있게 병행합니다. 경제 뉴스를 꾸준히 살피며, 분산 투자로 리스크를 관리하는 전략적 접근을 합니다.",
      financialTips: [
        "과도한 투자 집중은 리스크가 크니 분산을 유지하세요",
        "비상금은 안전 자산으로 따로 확보해 두세요",
        "수익률에만 집중하지 말고 삶의 균형도 챙기세요",
        "투자 실패도 배움의 과정으로 받아들이세요",
      ],
    },
    {
      id: "emotional-spender",
      label: "감성적 소비자",
      rule: "spend >= save && impulse >= plan",
      caption: "지금 이 순간의 행복을 소비로 만끽하는 타입!",
      imagePrompt: "happy shopping character with bags and sparkles, colorful store background",
      imagePath: "/money/emotional-spender.png",
      description:
        "현재의 행복과 만족을 중시하는 당신은 감성적 소비자입니다. 좋아하는 것에 과감히 투자하며, 소비를 통해 삶의 활력과 기쁨을 얻습니다. 경험과 감성에 가치를 두는 소비 패턴을 가지고 있습니다.",
      characteristics: [
        "감정에 따른 소비 경향",
        "경험과 가치에 투자",
        "현재의 행복을 중시",
        "트렌드에 민감한 소비",
        "자기 보상형 소비 선호",
      ],
      moneyStyle:
        "기분이 좋을 때도, 안 좋을 때도 소비로 기분을 전환합니다. 좋아하는 것에는 아낌없이 투자하며, 삶의 질을 높이는 소비를 합니다.",
      financialTips: [
        "월 소비 한도를 정해두고 그 안에서 즐기세요",
        "충동구매 전 24시간 냉각기를 가져 보세요",
        "소액이라도 자동 저축을 설정해 보세요",
        "소비 후 만족도를 돌아보며 진짜 필요한 소비를 구분해 보세요",
      ],
    },
    {
      id: "balanced-pragmatist",
      label: "균형 잡힌 실용주의자",
      rule: "(save - spend) <= 2 && (save - spend) >= -2 && (plan - impulse) <= 2 && (plan - impulse) >= -2",
      caption: "쓸 때 쓰고 모을 때 모으는 균형의 달인!",
      imagePrompt: "balanced character on seesaw with coin and heart, harmony background",
      imagePath: "/money/balanced-pragmatist.png",
      description:
        "저축과 소비의 균형을 잘 맞추는 당신은 실용주의자입니다. 필요한 곳에는 과감히 쓰되, 미래를 위한 준비도 게을리하지 않습니다. 합리적인 판단으로 돈을 다루는 능력이 있습니다.",
      characteristics: [
        "합리적인 소비 판단",
        "저축과 소비의 균형",
        "필요와 욕구를 구분하는 능력",
        "상황에 맞는 유연한 재정 관리",
        "실용적인 가치 중심 소비",
      ],
      moneyStyle:
        "기본적인 저축은 유지하면서도 삶의 질을 위한 적절한 소비를 합니다. 큰 지출은 계획적으로, 작은 소비는 유연하게 대처합니다.",
      financialTips: [
        "현재의 균형을 유지하면서 투자에도 관심을 가져 보세요",
        "장기적인 재정 목표를 더 구체적으로 세워 보세요",
        "자동화할 수 있는 저축과 투자를 설정해 보세요",
        "정기적으로 재정 상태를 점검하는 습관을 만들어 보세요",
      ],
    },
  ],
  scoringNote:
    "3축(save/spend, plan/impulse, invest/safe) 합산. 규칙 매칭 우선순위: 철저한 관리자 > 전략적 투자자 > 감성적 소비자 > 균형 잡힌 실용주의자. 균형형은 축 간 차이 2 이하일 때 매칭.",
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
export function findMoneySenseProfile(
  answers: Record<string, string>,
  questions: MoneySenseQuestion[],
  profiles: MoneySenseProfile[]
): MoneySenseProfile | null {
  const scores: Record<string, number> = {
    save: 0,
    spend: 0,
    plan: 0,
    impulse: 0,
    invest: 0,
    safe: 0,
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
      "thorough-manager",
      "strategic-investor",
      "emotional-spender",
      "balanced-pragmatist",
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

  if (topScores.includes("save") && topScores.includes("plan")) {
    return profiles.find((p) => p.id === "thorough-manager") || profiles[0];
  }
  if (topScores.includes("invest")) {
    return profiles.find((p) => p.id === "strategic-investor") || profiles[0];
  }
  if (topScores.includes("spend") || topScores.includes("impulse")) {
    return profiles.find((p) => p.id === "emotional-spender") || profiles[0];
  }

  return profiles.find((p) => p.id === "balanced-pragmatist") || profiles[0];
}
