// 우정 스타일 테스트 데이터

export type FriendshipStyleOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type FriendshipStyleQuestion = {
  id: string;
  text: string;
  options: FriendshipStyleOption[];
};

export type FriendshipStyleProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  friendshipStyle?: string;
  relationshipTips?: string[];
};

export type FriendshipStyleTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: FriendshipStyleQuestion[];
  resultProfiles: FriendshipStyleProfile[];
  scoringNote: string;
};

export const friendshipStyleTest: FriendshipStyleTest = {
  id: "friendship-style",
  title: "우정 스타일 테스트",
  description:
    "주도/조화 · 넓은관계/깊은관계 2축 10문항으로 나의 우정 스타일을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, friendship theme, ",
  questions: [
    {
      id: "q1",
      text: "새로운 사람들이 많은 모임에 가게 된다면?",
      options: [
        {
          id: "a",
          text: "먼저 다가가서 말을 걸고 분위기를 띄운다",
          scores: { lead: 2 },
        },
        {
          id: "b",
          text: "기존에 아는 사람 곁에 있으면서 천천히 적응한다",
          scores: { harmony: 2 },
        },
      ],
    },
    {
      id: "q2",
      text: "친구 관계에서 더 중요하게 생각하는 것은?",
      options: [
        {
          id: "a",
          text: "다양한 사람들과 두루두루 좋은 관계 유지하기",
          scores: { wide: 2 },
        },
        {
          id: "b",
          text: "소수의 친구와 깊고 진실된 관계 만들기",
          scores: { deep: 2 },
        },
      ],
    },
    {
      id: "q3",
      text: "친구들 모임을 계획할 때 나는?",
      options: [
        {
          id: "a",
          text: "날짜, 장소, 활동을 내가 먼저 정하고 제안한다",
          scores: { lead: 2 },
        },
        {
          id: "b",
          text: "다수가 원하는 것에 맞춰 함께 결정한다",
          scores: { harmony: 2 },
        },
      ],
    },
    {
      id: "q4",
      text: "연락처에 저장된 친구들의 수는?",
      options: [
        {
          id: "a",
          text: "다양한 인연들이 많이 있는 편이다",
          scores: { wide: 2 },
        },
        {
          id: "b",
          text: "자주 연락하는 몇 명만 있는 편이다",
          scores: { deep: 2 },
        },
      ],
    },
    {
      id: "q5",
      text: "친구가 고민을 털어놓을 때 나의 반응은?",
      options: [
        {
          id: "a",
          text: "해결책을 찾아주고 적극적으로 도움을 준다",
          scores: { lead: 1, deep: 1 },
        },
        {
          id: "b",
          text: "끝까지 들어주고 공감해 주는 것이 먼저다",
          scores: { harmony: 1, deep: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "친구 사이에서 갈등이 생겼을 때?",
      options: [
        {
          id: "a",
          text: "먼저 이야기를 꺼내서 해결하려 한다",
          scores: { lead: 2 },
        },
        {
          id: "b",
          text: "상대방의 기분을 살피며 자연스럽게 풀리길 기다린다",
          scores: { harmony: 2 },
        },
      ],
    },
    {
      id: "q7",
      text: "오랜만에 시간이 생겼을 때 친구와의 계획은?",
      options: [
        {
          id: "a",
          text: "여러 친구들을 불러 함께 즐기는 시간을 만든다",
          scores: { wide: 2, lead: 1 },
        },
        {
          id: "b",
          text: "한두 명의 친한 친구와 조용히 이야기를 나눈다",
          scores: { deep: 2, harmony: 1 },
        },
      ],
    },
    {
      id: "q8",
      text: "오랫동안 연락이 없던 친구에게 나는?",
      options: [
        {
          id: "a",
          text: "먼저 연락해서 안부를 묻는 편이다",
          scores: { lead: 1, wide: 1 },
        },
        {
          id: "b",
          text: "서로 연락할 때가 되면 자연스럽게 연락이 온다고 생각한다",
          scores: { harmony: 1, deep: 1 },
        },
      ],
    },
    {
      id: "q9",
      text: "친구에게 솔직한 내 속마음을 꺼내는 것이?",
      options: [
        {
          id: "a",
          text: "자연스럽게 잘 표현하는 편이다",
          scores: { deep: 2 },
        },
        {
          id: "b",
          text: "상황에 따라 조심스럽게 결정하는 편이다",
          scores: { wide: 1, harmony: 1 },
        },
      ],
    },
    {
      id: "q10",
      text: "SNS에서 친구들과의 관계는?",
      options: [
        {
          id: "a",
          text: "다양한 사람들과 활발하게 소통하는 것이 즐겁다",
          scores: { wide: 2, lead: 1 },
        },
        {
          id: "b",
          text: "가까운 사람들과만 조용히 소통하는 것이 편하다",
          scores: { deep: 2, harmony: 1 },
        },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "social-leader",
      label: "소셜 리더",
      rule: "lead >= harmony + 2 && wide >= deep",
      caption: "모임의 중심에 서는 리더",
      imagePrompt:
        "cheerful character holding a flag surrounded by many friend icons, colorful party background",
      imagePath: "/friendship/social-leader.png",
      description:
        "넓은 인맥을 주도적으로 이끄는 타입. 모임을 만들고 사람들을 연결하며, 다양한 친구들과 활발한 관계를 유지합니다.",
      characteristics: [
        "모임을 주도적으로 기획한다",
        "새로운 사람을 만나는 것을 좋아한다",
        "친구들 사이에서 리더 역할을 한다",
        "넓은 인맥을 관리하는 능력이 있다",
      ],
      friendshipStyle:
        "당신은 사교적 에너지가 넘치는 소셜 리더입니다. 다양한 모임을 만들고 사람들을 연결하는 것에서 기쁨을 느끼며, 넓은 네트워크를 자연스럽게 유지합니다.",
      relationshipTips: [
        "깊은 1:1 시간도 의식적으로 만들어보세요",
        "모든 모임을 주도하지 않아도 괜찮아요",
        "가까운 친구에게 속마음을 나눠보세요",
      ],
    },
    {
      id: "deep-companion",
      label: "깊은 동반자",
      rule: "harmony >= lead + 2 && deep >= wide",
      caption: "마음을 나누는 깊은 친구",
      imagePrompt:
        "two cute characters sitting close together sharing a heart, warm cozy background",
      imagePath: "/friendship/deep-companion.png",
      description:
        "소수의 친구와 깊은 유대를 형성하는 타입. 진심 어린 대화와 정서적 교감을 중시하며, 오래 지속되는 우정을 만듭니다.",
      characteristics: [
        "소수의 절친과 깊은 관계를 유지한다",
        "친구의 고민을 잘 들어준다",
        "진솔한 대화를 중요하게 생각한다",
        "새로운 사람보다 기존 관계를 깊게 한다",
      ],
      friendshipStyle:
        "당신은 진정한 마음의 교류를 추구하는 깊은 동반자입니다. 많은 친구보다 함께 울고 웃을 수 있는 소수의 친구를 소중히 여기며, 오랜 시간 함께하는 우정을 만듭니다.",
      relationshipTips: [
        "새로운 만남에도 열린 마음을 가져보세요",
        "다양한 관계에서 에너지를 얻는 경험을 해보세요",
        "혼자만의 시간과 함께하는 시간의 균형을 찾으세요",
      ],
    },
    {
      id: "wide-harmonizer",
      label: "넓은 조화러",
      rule: "harmony >= lead && wide >= deep && (harmony - lead) <= 3",
      caption: "모든 사람과 잘 어울리는 조화로운 친구",
      imagePrompt:
        "cheerful character in the center of a circle of diverse friend characters, rainbow background",
      imagePath: "/friendship/wide-harmonizer.png",
      description:
        "다양한 사람들과 조화롭게 어울리는 타입. 갈등을 중재하고 분위기를 좋게 만들며, 누구에게나 편안한 존재입니다.",
      characteristics: [
        "다양한 그룹에 자연스럽게 어울린다",
        "갈등 상황을 잘 중재한다",
        "누구에게나 편안한 분위기를 만든다",
        "때로는 자신의 의견을 양보하는 편이다",
      ],
      friendshipStyle:
        "당신은 어디서든 자연스럽게 어우러지는 조화의 달인입니다. 다양한 성격의 사람들과 편안하게 소통하며, 그룹의 분위기 메이커 역할을 합니다.",
      relationshipTips: [
        "자신의 의견을 더 적극적으로 표현해보세요",
        "모든 관계에서 '좋은 사람'이 되려 하지 않아도 돼요",
        "나를 위한 시간도 충분히 확보하세요",
      ],
    },
    {
      id: "core-supporter",
      label: "핵심 조력자",
      rule: "lead >= harmony && deep >= wide && (lead - harmony) <= 3",
      caption: "핵심 관계의 든든한 조력자",
      imagePrompt:
        "strong character standing behind a smaller friend with arms open protectively, warm sunset background",
      imagePath: "/friendship/core-supporter.png",
      description:
        "가까운 친구들에게 적극적으로 도움을 주는 타입. 소수의 관계에서 주도적으로 나서며, 신뢰할 수 있는 든든한 존재입니다.",
      characteristics: [
        "가까운 친구의 일을 적극 도와준다",
        "약속과 의리를 중요하게 생각한다",
        "필요할 때 먼저 나서는 편이다",
        "관계에서 책임감을 강하게 느낀다",
      ],
      friendshipStyle:
        "당신은 가까운 사람들에게 든든한 버팀목이 되는 핵심 조력자입니다. 넓은 인맥보다 깊은 신뢰를 바탕으로 한 관계를 중시하며, 친구가 어려울 때 가장 먼저 달려갑니다.",
      relationshipTips: [
        "도움을 줄 때 자신의 에너지도 챙기세요",
        "때로는 친구가 스스로 해결하도록 기다려보세요",
        "새로운 인연에도 마음을 열어보세요",
      ],
    },
  ],
  scoringNote:
    "2축(lead/harmony, wide/deep) 합산. 규칙 매칭 우선순위: 소셜 리더 > 깊은 동반자 > 넓은 조화러 > 핵심 조력자. 조화러/조력자는 축 간 차이 3 이하일 때 매칭.",
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
export function findFriendshipProfile(
  answers: Record<string, string>,
  questions: FriendshipStyleQuestion[],
  profiles: FriendshipStyleProfile[]
): FriendshipStyleProfile | null {
  const scores: Record<string, number> = {
    lead: 0,
    harmony: 0,
    wide: 0,
    deep: 0,
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
      "social-leader",
      "deep-companion",
      "wide-harmonizer",
      "core-supporter",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준
  const leadHarmony = scores.lead >= scores.harmony ? "lead" : "harmony";
  const wideDeep = scores.wide >= scores.deep ? "wide" : "deep";

  if (leadHarmony === "lead" && wideDeep === "wide") {
    return profiles.find((p) => p.id === "social-leader") || profiles[0];
  }
  if (leadHarmony === "harmony" && wideDeep === "deep") {
    return profiles.find((p) => p.id === "deep-companion") || profiles[0];
  }
  if (leadHarmony === "harmony" && wideDeep === "wide") {
    return profiles.find((p) => p.id === "wide-harmonizer") || profiles[0];
  }

  return profiles.find((p) => p.id === "core-supporter") || profiles[0];
}
