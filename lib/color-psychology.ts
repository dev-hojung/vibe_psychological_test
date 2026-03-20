// 색깔 심리 테스트 데이터

export type ColorOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type ColorQuestion = {
  id: string;
  text: string;
  options: ColorOption[];
};

export type ColorProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  colorHex: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  personality?: string;
  recommendedActivities?: string[];
  colorTips?: string[];
};

export type ColorTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: ColorQuestion[];
  resultProfiles: ColorProfile[];
  scoringNote: string;
};

export const colorTest: ColorTest = {
  id: "color-psychology",
  title: "색깔 심리 테스트",
  description:
    "따뜻함/차가움 · 밝음/깊음 · 활동적/차분함 3축으로 나를 대표하는 색깔을 찾아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, color splash theme, ",
  questions: [
    {
      id: "q1",
      text: "스트레스를 받을 때 나의 해소 방법은?",
      options: [
        { id: "a", text: "친구와 수다 떨며 에너지 발산", scores: { warm: 2, active: 1 } },
        { id: "b", text: "조용한 공간에서 혼자 정리", scores: { cool: 2, calm: 1 } },
      ],
    },
    {
      id: "q2",
      text: "주말 오후 자유 시간이 생기면?",
      options: [
        { id: "a", text: "밖에 나가 새로운 것을 체험", scores: { active: 2, bright: 1 } },
        { id: "b", text: "집에서 영화나 독서로 재충전", scores: { calm: 2, deep: 1 } },
      ],
    },
    {
      id: "q3",
      text: "선호하는 대화 스타일은?",
      options: [
        { id: "a", text: "유머와 에너지가 넘치는 대화", scores: { warm: 1, bright: 2 } },
        { id: "b", text: "차분하고 깊이 있는 대화", scores: { cool: 1, deep: 2 } },
      ],
    },
    {
      id: "q4",
      text: "내가 편안함을 느끼는 공간은?",
      options: [
        { id: "a", text: "햇살 가득한 밝고 따뜻한 공간", scores: { warm: 1, bright: 1 } },
        { id: "b", text: "은은한 조명의 아늑한 공간", scores: { cool: 1, deep: 1 } },
      ],
    },
    {
      id: "q5",
      text: "새로운 프로젝트를 시작할 때 나는?",
      options: [
        {
          id: "a",
          text: "빠르게 실행하며 결과를 만들어간다",
          scores: { active: 2 },
        },
        {
          id: "b",
          text: "충분히 계획하고 신중하게 시작한다",
          scores: { calm: 2 },
        },
      ],
    },
    {
      id: "q6",
      text: "사람들이 나에게 자주 하는 말은?",
      options: [
        { id: "a", text: "넌 에너지가 넘쳐 / 분위기 메이커야", scores: { warm: 1, active: 1 } },
        { id: "b", text: "넌 차분하고 믿음직해", scores: { cool: 1, calm: 1 } },
      ],
    },
    {
      id: "q7",
      text: "감동받는 순간은?",
      options: [
        { id: "a", text: "함께 웃고 즐기는 활기찬 순간", scores: { bright: 1, active: 1 } },
        { id: "b", text: "조용히 마음이 울리는 깊은 순간", scores: { deep: 1, calm: 1 } },
      ],
    },
    {
      id: "q8",
      text: "나를 한 단어로 표현하면?",
      options: [
        { id: "a", text: "열정 또는 밝음", scores: { warm: 1, bright: 1 } },
        { id: "b", text: "지혜 또는 신비", scores: { cool: 1, deep: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "red-leader",
      label: "레드 - 열정의 리더",
      rule: "warm >= cool && active >= calm && bright >= deep",
      caption: "불타는 열정으로 세상을 이끄는 리더!",
      colorHex: "#E74C3C",
      imagePrompt:
        "energetic character surrounded by red flames and stars, confident leader pose",
      imagePath: "/color-types/red-leader.png",
      description:
        "에너지가 넘치고 행동력이 뛰어난 당신은 레드입니다. 목표를 향해 강하게 돌진하며, 주변 사람들에게 동기를 부여하는 타고난 리더입니다. 열정적이고 결단력 있는 성격으로 어떤 상황에서도 주도적으로 움직입니다.",
      characteristics: [
        "강한 추진력과 결단력",
        "도전을 두려워하지 않는 용기",
        "주변을 이끄는 리더십",
        "직접적이고 솔직한 소통",
        "높은 에너지와 열정",
      ],
      personality:
        "목표 지향적이며 행동이 빠릅니다. 경쟁적인 상황에서 더욱 빛나며, 포기하지 않는 끈기가 있습니다. 다만 때로는 성급해질 수 있으니 주변의 의견에도 귀 기울여 보세요.",
      recommendedActivities: [
        "리더십이 필요한 팀 프로젝트",
        "경쟁적인 스포츠 활동",
        "목표 달성 챌린지",
        "새로운 분야 도전",
      ],
      colorTips: [
        "열정을 유지하되, 때로는 속도를 줄여 주변을 살펴보세요",
        "빨간색 소품으로 에너지를 충전해 보세요",
        "도전적인 목표를 설정하면 더 큰 성취감을 느낄 수 있습니다",
        "명상이나 호흡법으로 에너지 균형을 맞춰 보세요",
      ],
    },
    {
      id: "blue-helper",
      label: "블루 - 신뢰의 조력자",
      rule: "cool >= warm && calm >= active && deep >= bright",
      caption: "깊은 신뢰와 안정감을 주는 존재.",
      colorHex: "#3498DB",
      imagePrompt:
        "calm character surrounded by blue waves and clouds, peaceful and trustworthy pose",
      imagePath: "/color-types/blue-helper.png",
      description:
        "차분하고 신뢰감 있는 당신은 블루입니다. 깊은 사고와 안정된 판단력으로 주변 사람들에게 믿음을 줍니다. 감정보다는 이성으로 상황을 바라보며, 어떤 혼란 속에서도 중심을 잡아주는 존재입니다.",
      characteristics: [
        "차분하고 안정적인 성격",
        "깊은 사고력과 분석력",
        "신뢰감을 주는 일관된 태도",
        "경청과 공감 능력",
        "인내심과 끈기",
      ],
      personality:
        "조용하지만 깊이 있는 사람입니다. 말보다 행동으로 신뢰를 쌓으며, 어려운 상황에서 냉정하게 판단할 수 있습니다. 가끔은 자신의 감정도 표현하면 관계가 더 풍요로워집니다.",
      recommendedActivities: [
        "명상과 마인드풀니스",
        "독서나 글쓰기 활동",
        "전략적 사고가 필요한 보드게임",
        "자연 속 산책이나 하이킹",
      ],
      colorTips: [
        "파란색 계열의 공간에서 집중력이 높아집니다",
        "가끔은 머리보다 마음의 소리에 귀 기울여 보세요",
        "신뢰하는 사람에게 감정을 공유하면 마음이 한결 가벼워집니다",
        "물가나 하늘을 바라보며 마음을 정리하는 시간을 가져 보세요",
      ],
    },
    {
      id: "yellow-communicator",
      label: "옐로우 - 낙관의 소통가",
      rule: "warm >= cool && bright >= deep && active >= calm",
      caption: "밝은 에너지로 모두를 연결하는 소통가!",
      colorHex: "#F1C40F",
      imagePrompt:
        "cheerful character surrounded by yellow sunlight and speech bubbles, happy social pose",
      imagePath: "/color-types/yellow-communicator.png",
      description:
        "밝고 긍정적인 에너지의 당신은 옐로우입니다. 어디서든 분위기를 밝히는 존재이며, 뛰어난 소통 능력으로 사람들을 자연스럽게 연결합니다. 낙관적인 시선으로 세상을 바라보며, 주변에 웃음과 활력을 전파합니다.",
      characteristics: [
        "밝고 긍정적인 에너지",
        "뛰어난 소통 능력",
        "유머 감각과 친화력",
        "새로운 아이디어가 풍부",
        "낙관적인 세계관",
      ],
      personality:
        "사교적이고 활발하며, 누구와도 쉽게 어울립니다. 창의적인 발상이 뛰어나고, 어려운 상황에서도 긍정적인 면을 찾아냅니다. 다만 가끔은 깊이 있는 성찰의 시간도 필요합니다.",
      recommendedActivities: [
        "그룹 활동이나 워크숍 참여",
        "창의적인 취미 활동 (그림, 음악 등)",
        "봉사활동이나 커뮤니티 참여",
        "여행이나 새로운 문화 체험",
      ],
      colorTips: [
        "밝은 노란색 소품으로 일상에 활력을 더해 보세요",
        "소통 에너지를 충전하려면 사람들과의 모임을 정기적으로 가져 보세요",
        "혼자만의 시간도 가지면서 내면의 목소리에 귀 기울여 보세요",
        "해바라기나 밝은 꽃을 가까이 두면 기분이 좋아집니다",
      ],
    },
    {
      id: "green-healer",
      label: "그린 - 조화의 치유자",
      rule: "cool >= warm && calm >= active && bright >= deep",
      caption: "자연처럼 편안하게 마음을 치유합니다.",
      colorHex: "#2ECC71",
      imagePrompt:
        "gentle character surrounded by green leaves and flowers, peaceful healing pose",
      imagePath: "/color-types/green-healer.png",
      description:
        "평화롭고 조화를 중시하는 당신은 그린입니다. 자연처럼 편안한 분위기로 주변 사람들의 마음을 치유하며, 균형 잡힌 시선으로 갈등을 해소합니다. 공감 능력이 뛰어나며, 있는 그대로의 모습을 존중하는 포용력을 가지고 있습니다.",
      characteristics: [
        "평화롭고 조화로운 성격",
        "뛰어난 공감과 치유 능력",
        "균형 잡힌 판단력",
        "자연과 환경에 관심",
        "포용적이고 수용적인 태도",
      ],
      personality:
        "갈등을 싫어하고 조화를 추구합니다. 주변 사람들의 이야기를 잘 들어주며, 그 존재만으로 안정감을 줍니다. 때로는 자신의 의견을 더 적극적으로 표현하면 관계가 더 깊어질 수 있습니다.",
      recommendedActivities: [
        "요가나 명상 프로그램",
        "정원 가꾸기나 식물 키우기",
        "자연 속 힐링 여행",
        "봉사활동이나 돌봄 활동",
      ],
      colorTips: [
        "초록색 식물을 가까이 두면 마음이 편안해집니다",
        "자연 속에서 보내는 시간을 주기적으로 가져 보세요",
        "자신의 감정과 욕구도 중요하게 다뤄 주세요",
        "허브티나 아로마 테라피로 일상에 힐링을 더해 보세요",
      ],
    },
    {
      id: "purple-dreamer",
      label: "퍼플 - 창의의 몽상가",
      rule: "deep >= bright && ((warm >= cool && cool + 1 >= warm) || (cool >= warm && warm + 1 >= cool))",
      caption: "상상력의 세계에서 새로운 가능성을 봅니다.",
      colorHex: "#9B59B6",
      imagePrompt:
        "dreamy character surrounded by purple stars and galaxies, creative mystical pose",
      imagePath: "/color-types/purple-dreamer.png",
      description:
        "신비롭고 창의적인 당신은 퍼플입니다. 풍부한 상상력과 직관력으로 남들이 보지 못하는 것을 발견합니다. 예술적 감각이 뛰어나며, 깊은 내면 세계를 가지고 있습니다. 독창적인 시선으로 세상에 새로운 가치를 만들어냅니다.",
      characteristics: [
        "풍부한 상상력과 창의성",
        "뛰어난 직관력",
        "예술적 감각",
        "깊은 내면 세계",
        "독창적인 시선과 관점",
      ],
      personality:
        "남다른 감수성과 직관으로 세상을 바라봅니다. 혼자만의 시간에 영감을 얻으며, 창작 활동에서 큰 만족을 느낍니다. 현실과 이상 사이에서 균형을 잡으면 더 큰 성취를 이룰 수 있습니다.",
      recommendedActivities: [
        "예술 창작 활동 (그림, 글쓰기, 음악)",
        "미술관이나 전시회 관람",
        "명상이나 직관력 훈련",
        "영화나 문학 감상",
      ],
      colorTips: [
        "창작 활동을 위한 나만의 공간을 만들어 보세요",
        "보라색 계열의 아이템으로 영감을 불러일으켜 보세요",
        "꿈이나 영감을 기록하는 노트를 가까이 두세요",
        "현실적인 목표도 함께 세우면 상상을 현실로 만들 수 있습니다",
      ],
    },
    {
      id: "orange-adventurer",
      label: "오렌지 - 활력의 모험가",
      rule: "warm >= cool && active >= calm && bright >= deep",
      caption: "멈추지 않는 활력으로 모험을 즐깁니다!",
      colorHex: "#E67E22",
      imagePrompt:
        "adventurous character with orange backpack and compass, energetic explorer pose",
      imagePath: "/color-types/orange-adventurer.png",
      description:
        "활기차고 모험을 사랑하는 당신은 오렌지입니다. 새로운 경험에 대한 호기심이 강하며, 어디에서든 즐거움을 찾아냅니다. 자유로운 영혼으로 틀에 박힌 것을 싫어하며, 매 순간을 즐기며 살아갑니다.",
      characteristics: [
        "강한 호기심과 모험심",
        "자유롭고 유연한 사고",
        "낙관적이고 활기찬 성격",
        "새로운 경험 추구",
        "즐거움을 나누는 성격",
      ],
      personality:
        "매일이 새로운 모험이라고 생각합니다. 변화를 두려워하지 않으며, 실패해도 금방 다시 일어납니다. 자유를 사랑하지만, 가끔은 한 곳에 집중하는 연습도 필요합니다.",
      recommendedActivities: [
        "여행이나 아웃도어 활동",
        "새로운 취미 도전",
        "요리나 음식 탐험",
        "즉흥적인 소규모 이벤트",
      ],
      colorTips: [
        "주황색 소품으로 일상에 활력을 불어넣어 보세요",
        "새로운 경험을 기록하는 모험 일지를 만들어 보세요",
        "가끔은 느긋하게 쉬는 시간도 모험의 일부입니다",
        "한 가지 일에 깊이 파고드는 경험도 시도해 보세요",
      ],
    },
  ],
  scoringNote:
    "세 축(warm/cool, bright/deep, active/calm) 합산. 규칙 다중 충족 시 (1) 온도(warm vs cool), (2) 톤(bright vs deep), (3) 활동(active vs calm) 순으로 결정. 레드와 옐로우·오렌지가 동시 매칭 시, active가 높으면 레드, bright가 높으면 옐로우, 나머지는 오렌지.",
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
export function findColorProfile(
  answers: Record<string, string>,
  questions: ColorQuestion[],
  profiles: ColorProfile[]
): ColorProfile | null {
  const scores: Record<string, number> = {
    warm: 0,
    cool: 0,
    bright: 0,
    deep: 0,
    active: 0,
    calm: 0,
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
    // 우선순위: red > yellow > orange > green > purple > blue
    // 레드와 옐로우·오렌지 동시 매칭 처리
    const priority = [
      "red-leader",
      "yellow-communicator",
      "orange-adventurer",
      "green-healer",
      "purple-dreamer",
      "blue-helper",
    ];

    // 레드, 옐로우, 오렌지가 동시에 매칭되면 세부 점수로 구분
    const warmActives = matchedProfiles.filter((p) =>
      ["red-leader", "yellow-communicator", "orange-adventurer"].includes(p.id)
    );
    if (warmActives.length > 1) {
      if (scores.active > scores.bright) {
        const red = matchedProfiles.find((p) => p.id === "red-leader");
        if (red) return red;
      }
      if (scores.bright > scores.active) {
        const yellow = matchedProfiles.find(
          (p) => p.id === "yellow-communicator"
        );
        if (yellow) return yellow;
      }
      const orange = matchedProfiles.find((p) => p.id === "orange-adventurer");
      if (orange) return orange;
    }

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

  if (topScores.includes("warm") && topScores.includes("active")) {
    return profiles.find((p) => p.id === "red-leader") || profiles[0];
  }
  if (topScores.includes("warm") && topScores.includes("bright")) {
    return profiles.find((p) => p.id === "yellow-communicator") || profiles[0];
  }
  if (topScores.includes("cool") && topScores.includes("calm")) {
    return profiles.find((p) => p.id === "blue-helper") || profiles[0];
  }
  if (topScores.includes("cool") && topScores.includes("bright")) {
    return profiles.find((p) => p.id === "green-healer") || profiles[0];
  }
  if (topScores.includes("deep")) {
    return profiles.find((p) => p.id === "purple-dreamer") || profiles[0];
  }

  return profiles[0];
}
