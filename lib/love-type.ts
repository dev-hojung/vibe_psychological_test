// 연애 유형 테스트 데이터

export type LoveTypeOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type LoveTypeQuestion = {
  id: string;
  text: string;
  options: LoveTypeOption[];
};

export type LoveTypeProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  loveStyle?: string;
  compatibleTypes?: string[];
  loveTips?: string[];
};

export type LoveTypeTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: LoveTypeQuestion[];
  resultProfiles: LoveTypeProfile[];
  scoringNote: string;
};

export const loveTypeTest: LoveTypeTest = {
  id: "love-style-test",
  title: "연애 유형 테스트",
  description:
    "열정/안정 · 표현/내향 · 독립/헌신 · 이성/감성 4축으로 나의 연애 유형을 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, romantic theme, ",
  questions: [
    {
      id: "q1",
      text: "연인과의 주말, 어떤 데이트가 더 좋아?",
      options: [
        { id: "a", text: "새로운 장소 탐험이나 깜짝 이벤트", scores: { passion: 2 } },
        { id: "b", text: "단골 카페에서 편안한 대화", scores: { stable: 2 } },
      ],
    },
    {
      id: "q2",
      text: "좋아하는 마음을 표현하는 방식은?",
      options: [
        { id: "a", text: "직접적인 말과 스킨십으로 표현", scores: { express: 2 } },
        { id: "b", text: "행동과 배려로 조용히 보여주기", scores: { reserve: 2 } },
      ],
    },
    {
      id: "q3",
      text: "연인과 갈등이 생겼을 때",
      options: [
        { id: "a", text: "각자 시간을 갖고 냉정하게 정리", scores: { independent: 2 } },
        { id: "b", text: "바로 대화해서 감정을 풀고 싶다", scores: { devoted: 2 } },
      ],
    },
    {
      id: "q4",
      text: "연애에서 더 중요한 것은?",
      options: [
        { id: "a", text: "서로의 성장과 개인 생활 존중", scores: { rational: 2 } },
        { id: "b", text: "함께하는 시간과 정서적 교감", scores: { emotional: 2 } },
      ],
    },
    {
      id: "q5",
      text: "기념일에 대한 생각은?",
      options: [
        {
          id: "a",
          text: "서프라이즈 준비가 설렌다",
          scores: { passion: 1, express: 1 },
        },
        {
          id: "b",
          text: "굳이 챙기지 않아도 괜찮다",
          scores: { stable: 1, rational: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "연인의 고민 상담, 나의 스타일은?",
      options: [
        {
          id: "a",
          text: "해결책을 함께 찾아주고 싶다",
          scores: { rational: 1, independent: 1 },
        },
        {
          id: "b",
          text: "일단 공감하고 위로해주고 싶다",
          scores: { emotional: 1, devoted: 1 },
        },
      ],
    },
    {
      id: "q7",
      text: "연인에게 가장 듣고 싶은 말은?",
      options: [
        { id: "a", text: "너와 함께라서 매일이 특별해", scores: { passion: 1, emotional: 1 } },
        { id: "b", text: "네 옆에 있으면 마음이 편해", scores: { stable: 1, reserve: 1 } },
      ],
    },
    {
      id: "q8",
      text: "연인과의 연락 빈도는?",
      options: [
        { id: "a", text: "틈틈이 자주 연락하고 싶다", scores: { devoted: 1, express: 1 } },
        { id: "b", text: "중요한 것만 간결하게", scores: { independent: 1, rational: 1 } },
      ],
    },
    {
      id: "q9",
      text: "이상적인 커플의 모습은?",
      options: [
        { id: "a", text: "서로의 꿈을 응원하는 동반자", scores: { independent: 1 } },
        { id: "b", text: "무엇이든 함께 나누는 소울메이트", scores: { devoted: 1 } },
      ],
    },
    {
      id: "q10",
      text: "사랑에 빠지는 순간은?",
      options: [
        { id: "a", text: "강렬한 설렘과 두근거림을 느낄 때", scores: { passion: 1 } },
        { id: "b", text: "오래 알아가며 신뢰가 쌓일 때", scores: { stable: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "passionate-flame",
      label: "열정적인 불꽃형",
      rule: "passion >= stable && express >= reserve",
      caption: "매 순간 불꽃처럼 타오르는 사랑을 추구합니다!",
      imagePrompt:
        "passionate character with flame heart, expressive eyes, firework background",
      imagePath: "/love-types/passionate-flame.png",
      description:
        "사랑에 빠지면 온 마음을 다해 표현하는 타입입니다. 연인과의 시간을 특별하게 만들고 싶어하며, 직접적인 애정 표현과 서프라이즈를 즐깁니다. 감정에 솔직하고 열정적인 만큼, 관계에 활력을 불어넣는 존재입니다.",
      characteristics: [
        "적극적인 감정 표현",
        "서프라이즈와 이벤트 좋아함",
        "새로운 경험을 함께 추구",
        "감정에 솔직하고 직접적",
        "연애 초반 강한 설렘 추구",
      ],
      loveStyle:
        "뜨겁고 직접적인 사랑 방식을 가지고 있습니다. 연인에게 매일 특별한 존재라는 것을 느끼게 해주며, 관계에 신선함을 유지하려 노력합니다.",
      compatibleTypes: ["안정적인 돌봄형", "로맨틱 감성형"],
      loveTips: [
        "열정이 식지 않도록 새로운 경험을 함께 만들어 가세요",
        "상대방의 표현 방식이 다를 수 있음을 이해하세요",
        "감정의 파도가 지나간 후에도 관계를 꾸준히 돌보세요",
        "가끔은 조용한 일상 속 소소한 행복도 즐겨보세요",
      ],
    },
    {
      id: "caring-stable",
      label: "안정적인 돌봄형",
      rule: "stable >= passion && devoted >= independent",
      caption: "따뜻한 보살핌과 변함없는 사랑을 드립니다.",
      imagePrompt:
        "warm caring character with soft blanket heart, cozy home background",
      imagePath: "/love-types/caring-stable.png",
      description:
        "한결같은 사랑과 세심한 배려로 연인을 돌보는 타입입니다. 관계의 안정성을 중요하게 여기며, 일상 속 작은 관심과 배려를 통해 사랑을 표현합니다. 연인에게 가장 든든한 존재입니다.",
      characteristics: [
        "한결같은 애정 표현",
        "세심한 배려와 관심",
        "연인의 일상에 관심을 갖고 챙김",
        "안정적인 관계 유지 선호",
        "갈등 시 대화로 해결하려 노력",
      ],
      loveStyle:
        "조용하지만 깊은 사랑을 합니다. 말보다는 행동으로 마음을 보여주며, 연인이 힘들 때 가장 먼저 곁에 있어주는 따뜻한 존재입니다.",
      compatibleTypes: ["열정적인 불꽃형", "독립적인 파트너형"],
      loveTips: [
        "가끔은 말로도 사랑을 직접 표현해 보세요",
        "상대방의 자유와 독립성도 존중해 주세요",
        "관계에 새로운 활력을 주는 이벤트를 시도해 보세요",
        "자신의 감정과 욕구도 솔직하게 이야기하세요",
      ],
    },
    {
      id: "independent-partner",
      label: "독립적인 파트너형",
      rule: "independent >= devoted && rational >= emotional",
      caption: "서로의 성장을 응원하는 멋진 동반자!",
      imagePrompt:
        "independent character with two balanced stars, clear sky background",
      imagePath: "/love-types/independent-partner.png",
      description:
        "서로의 개인 생활과 성장을 존중하는 성숙한 연애를 추구합니다. 감정보다는 이성적으로 관계를 바라보며, 건강한 거리감을 유지하면서도 깊은 신뢰로 연결됩니다.",
      characteristics: [
        "개인 시간과 공간 존중",
        "이성적이고 논리적인 소통",
        "서로의 성장을 응원",
        "건강한 거리감 유지",
        "감정보다 해결 중심 접근",
      ],
      loveStyle:
        "서로에게 의지하되 의존하지 않는 관계를 지향합니다. 각자의 삶을 충실히 살면서도 중요한 순간에는 든든한 파트너가 되어줍니다.",
      compatibleTypes: ["안정적인 돌봄형", "로맨틱 감성형"],
      loveTips: [
        "가끔은 감정적으로 다가가는 것도 연인에게 큰 위로가 됩니다",
        "독립성을 지키되, 함께하는 시간의 질을 높여 보세요",
        "상대방의 감정적 욕구에 귀 기울여 보세요",
        "논리보다 공감이 필요한 순간을 구분해 보세요",
      ],
    },
    {
      id: "romantic-emotional",
      label: "로맨틱 감성형",
      rule: "emotional >= rational && express >= reserve",
      caption: "사랑을 시(詩)처럼 느끼고 표현합니다.",
      imagePrompt:
        "romantic character with music notes and hearts, dreamy pastel background",
      imagePath: "/love-types/romantic-emotional.png",
      description:
        "감성이 풍부하고 사랑을 아름답게 표현하는 타입입니다. 연인과의 정서적 교감을 가장 중요하게 여기며, 분위기 있는 데이트와 감동적인 순간을 만들어가는 것을 좋아합니다.",
      characteristics: [
        "풍부한 감성 표현",
        "정서적 교감 중시",
        "분위기 있는 데이트 선호",
        "연인의 감정에 깊이 공감",
        "사랑을 예술처럼 표현",
      ],
      loveStyle:
        "마음으로 느끼고 말과 행동으로 표현하는 사랑을 합니다. 연인과의 감정적 교류가 관계의 원동력이며, 서로의 마음을 깊이 나누는 것을 가장 소중하게 여깁니다.",
      compatibleTypes: ["열정적인 불꽃형", "독립적인 파트너형"],
      loveTips: [
        "감정에 휩쓸리지 않고 냉정하게 볼 수 있는 시간도 가져 보세요",
        "상대방의 표현 방식이 나와 다를 수 있음을 인정하세요",
        "현실적인 부분도 함께 이야기하는 시간을 만들어 보세요",
        "자신의 감정을 돌보는 것도 건강한 사랑의 일부입니다",
      ],
    },
  ],
  scoringNote:
    "네 축(passion/stable, express/reserve, independent/devoted, rational/emotional) 합산. 규칙 다중 충족 시 (1) 주축(passion vs stable) 우선, (2) 표현(express vs reserve), (3) 독립(independent vs devoted) 순으로 결정.",
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
export function findLoveProfile(
  answers: Record<string, string>,
  questions: LoveTypeQuestion[],
  profiles: LoveTypeProfile[]
): LoveTypeProfile | null {
  const scores: Record<string, number> = {
    passion: 0,
    stable: 0,
    express: 0,
    reserve: 0,
    independent: 0,
    devoted: 0,
    rational: 0,
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
    // 우선순위: passionate-flame > caring-stable > independent-partner > romantic-emotional
    const priority = [
      "passionate-flame",
      "caring-stable",
      "independent-partner",
      "romantic-emotional",
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

  if (topScores.includes("passion")) {
    return profiles.find((p) => p.id === "passionate-flame") || profiles[0];
  }
  if (topScores.includes("stable")) {
    return profiles.find((p) => p.id === "caring-stable") || profiles[0];
  }
  if (topScores.includes("independent") || topScores.includes("rational")) {
    return profiles.find((p) => p.id === "independent-partner") || profiles[0];
  }
  if (topScores.includes("emotional") || topScores.includes("express")) {
    return profiles.find((p) => p.id === "romantic-emotional") || profiles[0];
  }

  return profiles[0];
}
