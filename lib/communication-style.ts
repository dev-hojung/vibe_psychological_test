// 의사소통 스타일 진단 테스트 데이터

export type CommunicationStyleOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type CommunicationStyleQuestion = {
  id: string;
  text: string;
  options: CommunicationStyleOption[];
};

export type CommunicationStyleProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  communicationStyle?: string;
  strengthsInTeam?: string[];
  improvementTips?: string[];
};

export type CommunicationStyleTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: CommunicationStyleQuestion[];
  resultProfiles: CommunicationStyleProfile[];
  scoringNote: string;
};

export const communicationStyleTest: CommunicationStyleTest = {
  id: "communication-style",
  title: "의사소통 스타일 진단",
  description:
    "직접적/간접적 · 논리적/감성적 2축 10문항으로 나의 소통 유형을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, communication theme, ",
  questions: [
    {
      id: "q1",
      text: "회의에서 다른 의견이 있을 때?",
      options: [
        { id: "a", text: "바로 손을 들고 내 생각을 말한다", scores: { direct: 2 } },
        { id: "b", text: "분위기를 살피며 적절한 타이밍을 기다린다", scores: { indirect: 2 } },
      ],
    },
    {
      id: "q2",
      text: "상대방을 설득할 때 나의 방식은?",
      options: [
        { id: "a", text: "데이터와 근거를 제시하며 논리적으로", scores: { logical: 2 } },
        { id: "b", text: "공감과 감정에 호소하며 마음을 움직인다", scores: { emotional: 2 } },
      ],
    },
    {
      id: "q3",
      text: "친구가 실수했을 때?",
      options: [
        { id: "a", text: "솔직하게 잘못된 점을 알려준다", scores: { direct: 2 } },
        { id: "b", text: "돌려서 부드럽게 이야기한다", scores: { indirect: 2 } },
      ],
    },
    {
      id: "q4",
      text: "프레젠테이션을 할 때 강조하는 것은?",
      options: [
        { id: "a", text: "정확한 수치와 분석 자료", scores: { logical: 2 } },
        { id: "b", text: "생생한 스토리와 감동적인 사례", scores: { emotional: 2 } },
      ],
    },
    {
      id: "q5",
      text: "팀원이 힘들어 보일 때?",
      options: [
        { id: "a", text: "구체적인 도움 방법을 바로 제안한다", scores: { direct: 1, logical: 1 } },
        { id: "b", text: "먼저 감정을 읽고 공감해준다", scores: { indirect: 1, emotional: 1 } },
      ],
    },
    {
      id: "q6",
      text: "메신저로 대화할 때 나의 스타일은?",
      options: [
        { id: "a", text: "핵심만 간결하게 전달한다", scores: { direct: 1, logical: 1 } },
        { id: "b", text: "이모티콘과 함께 분위기를 살린다", scores: { indirect: 1, emotional: 1 } },
      ],
    },
    {
      id: "q7",
      text: "갈등 상황에서 나의 대화 방식은?",
      options: [
        { id: "a", text: "문제의 원인을 정확히 짚어낸다", scores: { direct: 1 } },
        { id: "b", text: "서로의 감정을 먼저 살핀다", scores: { emotional: 1 } },
      ],
    },
    {
      id: "q8",
      text: "누군가에게 부탁할 때?",
      options: [
        { id: "a", text: "명확하게 무엇을 원하는지 말한다", scores: { direct: 1 } },
        { id: "b", text: "상황을 설명하며 자연스럽게 유도한다", scores: { indirect: 1 } },
      ],
    },
    {
      id: "q9",
      text: "피드백을 줄 때 선호하는 방식은?",
      options: [
        { id: "a", text: "구체적인 개선점을 명시한다", scores: { logical: 1 } },
        { id: "b", text: "장점을 먼저 언급하고 부드럽게 제안", scores: { indirect: 1 } },
      ],
    },
    {
      id: "q10",
      text: "좋은 대화란 무엇이라 생각하나요?",
      options: [
        { id: "a", text: "명확한 결론과 합의에 도달하는 대화", scores: { logical: 1 } },
        { id: "b", text: "서로의 마음을 나누고 이해하는 대화", scores: { emotional: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "analyst-communicator",
      label: "분석형 소통가",
      rule: "direct >= indirect && logical >= emotional",
      caption: "명확한 논리로 핵심을 전달하는 소통의 달인!",
      imagePrompt: "analytical character with chart and magnifying glass, clear speech bubble",
      imagePath: "/communication/analyst-communicator.png",
      description:
        "명확하고 논리적인 소통을 선호하는 당신은 핵심을 빠르게 짚어내는 분석형 소통가입니다. 데이터와 근거를 바탕으로 설득력 있게 의견을 전달하며, 효율적인 대화를 이끕니다.",
      characteristics: [
        "핵심을 빠르게 파악하고 전달",
        "데이터와 근거 기반의 소통",
        "감정보다 사실 중심의 대화",
        "명확하고 간결한 표현 선호",
        "문제 해결 중심의 대화 방식",
      ],
      communicationStyle:
        "불필요한 수식어 없이 핵심을 전달합니다. 회의에서 논점을 정리하고 결론을 이끌어내는 능력이 뛰어납니다.",
      strengthsInTeam: [
        "복잡한 문제를 논리적으로 정리",
        "효율적인 회의 진행",
        "객관적인 피드백 제공",
        "명확한 목표 설정과 전달",
      ],
      improvementTips: [
        "상대방의 감정도 함께 살펴보세요",
        "때로는 결론보다 과정을 공유해 보세요",
        "부드러운 표현을 연습해 보세요",
        "경청의 시간을 의식적으로 늘려 보세요",
      ],
    },
    {
      id: "empathy-listener",
      label: "공감형 리스너",
      rule: "indirect >= direct && emotional >= logical",
      caption: "따뜻한 공감으로 마음의 문을 여는 경청가!",
      imagePrompt: "warm listening character with heart ears, soft hug background",
      imagePath: "/communication/empathy-listener.png",
      description:
        "감정에 섬세하게 반응하고 상대방의 마음을 읽는 당신은 공감형 리스너입니다. 부드러운 표현과 깊은 경청으로 사람들이 편안하게 마음을 열 수 있는 분위기를 만듭니다.",
      characteristics: [
        "뛰어난 경청 능력",
        "섬세한 감정 읽기",
        "부드럽고 배려 있는 표현",
        "상대방 중심의 대화",
        "비언어적 소통에 민감",
      ],
      communicationStyle:
        "말하기보다 듣기를 먼저 하며, 상대방이 충분히 이야기할 수 있도록 기다려줍니다. 감정적 안전감을 주는 대화를 만들어갑니다.",
      strengthsInTeam: [
        "팀원들의 심리적 안전감 조성",
        "갈등 상황에서의 중재 역할",
        "팀 분위기 관리",
        "소외된 의견까지 수렴",
      ],
      improvementTips: [
        "때로는 자신의 의견도 명확히 표현해 보세요",
        "논리적 근거를 함께 제시하면 설득력이 높아집니다",
        "거절이 필요할 때는 단호하게 말하는 연습을 해보세요",
        "감정에 치우치지 않고 객관적 판단도 연습해 보세요",
      ],
    },
    {
      id: "driving-leader",
      label: "추진형 리더",
      rule: "direct >= indirect && emotional >= logical",
      caption: "열정적인 에너지로 팀을 이끄는 추진력의 화신!",
      imagePrompt: "energetic leader character with megaphone and fire, team background",
      imagePath: "/communication/driving-leader.png",
      description:
        "직접적이면서도 열정적인 소통을 하는 당신은 추진형 리더입니다. 강한 에너지와 감정적 호소력으로 사람들을 움직이며, 목표를 향해 팀을 이끄는 힘이 있습니다.",
      characteristics: [
        "강한 추진력과 열정",
        "직접적이고 솔직한 표현",
        "감정을 담은 설득력",
        "빠른 의사 결정",
        "동기부여에 탁월",
      ],
      communicationStyle:
        "거침없이 자신의 생각을 표현하며, 열정적인 에너지로 상대방을 설득합니다. 행동을 이끌어내는 대화를 선호합니다.",
      strengthsInTeam: [
        "팀의 동기부여와 사기 진작",
        "빠른 의사 결정 촉진",
        "새로운 아이디어 제안",
        "팀원들의 열정 이끌어내기",
      ],
      improvementTips: [
        "다른 사람의 의견도 충분히 들어보세요",
        "감정이 앞설 때 한 박자 쉬어가세요",
        "논리적 근거도 함께 준비하면 더 효과적입니다",
        "조용한 팀원의 의견도 이끌어내 보세요",
      ],
    },
    {
      id: "mediator-coordinator",
      label: "조율형 중재자",
      rule: "indirect >= direct && logical >= emotional",
      caption: "균형 잡힌 시각으로 모든 의견을 조율하는 중재자!",
      imagePrompt: "balanced mediator character with scales, peaceful bridge background",
      imagePath: "/communication/mediator-coordinator.png",
      description:
        "논리적이면서도 부드러운 소통을 하는 당신은 조율형 중재자입니다. 다양한 의견을 균형 있게 수렴하고, 갈등 상황에서 합리적인 해결책을 찾아내는 능력이 뛰어납니다.",
      characteristics: [
        "균형 잡힌 시각과 판단",
        "부드럽지만 논리적인 소통",
        "다양한 관점 수렴 능력",
        "갈등 상황에서의 냉정함",
        "합리적인 중재와 조율",
      ],
      communicationStyle:
        "모든 사람의 이야기를 듣고 논리적으로 정리하여 최적의 합의점을 찾습니다. 강요하지 않으면서도 설득력 있는 대화를 이끕니다.",
      strengthsInTeam: [
        "팀 내 갈등 조율과 중재",
        "다양한 의견의 통합과 정리",
        "공정하고 객관적인 판단",
        "회의에서 합의 도출",
      ],
      improvementTips: [
        "때로는 자신의 입장을 명확히 밝혀 보세요",
        "모든 것을 중재하려 하지 않아도 됩니다",
        "감정적 표현도 소통의 중요한 부분입니다",
        "결단력 있게 방향을 제시해 보세요",
      ],
    },
  ],
  scoringNote:
    "2축(direct/indirect, logical/emotional) 합산. 각 축에서 높은 쪽을 조합하여 4가지 유형 결정. 동점 시 첫 번째 축(direct/indirect) 우선 판정.",
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
export function findCommunicationProfile(
  answers: Record<string, string>,
  questions: CommunicationStyleQuestion[],
  profiles: CommunicationStyleProfile[]
): CommunicationStyleProfile | null {
  const scores: Record<string, number> = {
    direct: 0,
    indirect: 0,
    logical: 0,
    emotional: 0,
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
      "analyst-communicator",
      "driving-leader",
      "mediator-coordinator",
      "empathy-listener",
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

  if (topScores.includes("direct") && topScores.includes("logical")) {
    return profiles.find((p) => p.id === "analyst-communicator") || profiles[0];
  }
  if (topScores.includes("indirect") && topScores.includes("emotional")) {
    return profiles.find((p) => p.id === "empathy-listener") || profiles[0];
  }
  if (topScores.includes("direct")) {
    return profiles.find((p) => p.id === "driving-leader") || profiles[0];
  }
  if (topScores.includes("indirect")) {
    return profiles.find((p) => p.id === "mediator-coordinator") || profiles[0];
  }

  return profiles[0];
}
