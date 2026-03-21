// 반려동물 성격 매칭 테스트 데이터

export type PetOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type PetQuestion = {
  id: string;
  text: string;
  options: PetOption[];
};

export type PetProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  petStyle?: string;
  careTips?: string[];
};

export type PetPersonalityTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: PetQuestion[];
  resultProfiles: PetProfile[];
  scoringNote: string;
};

export const petPersonalityTest: PetPersonalityTest = {
  id: "pet-personality-match",
  title: "반려동물 성격 매칭",
  description:
    "활동적/차분함 · 유대형/독립형 · 야외형/실내형 3축 10문항으로 나와 어울리는 반려동물 유형을 알아보세요",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute ",
  questions: [
    {
      id: "q1",
      text: "이상적인 주말을 보낸다면?",
      options: [
        {
          id: "a",
          text: "친구들과 등산이나 야외 활동을 즐긴다",
          scores: { active: 2, bond: 1, outdoor: 1 },
        },
        {
          id: "b",
          text: "집에서 혼자 영화를 보며 쉰다",
          scores: { calm: 2, independent: 1, indoor: 1 },
        },
      ],
    },
    {
      id: "q2",
      text: "새로운 사람을 만났을 때 나는?",
      options: [
        {
          id: "a",
          text: "먼저 다가가 적극적으로 이야기를 건넨다",
          scores: { bond: 2, active: 1 },
        },
        {
          id: "b",
          text: "상대가 다가올 때까지 기다리며 관찰한다",
          scores: { independent: 2, calm: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "혼자 있는 시간이 길어지면?",
      options: [
        {
          id: "a",
          text: "금방 심심해지고 누군가와 함께하고 싶다",
          scores: { bond: 2, active: 1 },
        },
        {
          id: "b",
          text: "오히려 재충전이 되어 편안하다",
          scores: { independent: 2, calm: 1 },
        },
      ],
    },
    {
      id: "q4",
      text: "운동이나 신체 활동에 대한 나의 태도는?",
      options: [
        {
          id: "a",
          text: "땀 흘리는 운동을 즐기고 자주 한다",
          scores: { active: 2, outdoor: 1 },
        },
        {
          id: "b",
          text: "가벼운 스트레칭이나 산책 정도면 충분하다",
          scores: { calm: 2, indoor: 1 },
        },
      ],
    },
    {
      id: "q5",
      text: "여행을 간다면 어떤 스타일을 선호하나요?",
      options: [
        {
          id: "a",
          text: "자연 속 캠핑이나 액티비티가 가득한 여행",
          scores: { outdoor: 2, active: 1 },
        },
        {
          id: "b",
          text: "아늑한 숙소에서 여유롭게 쉬는 힐링 여행",
          scores: { indoor: 2, calm: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "친한 친구와의 관계에서 나는?",
      options: [
        {
          id: "a",
          text: "자주 연락하고 만남을 적극적으로 추진한다",
          scores: { bond: 2, active: 1 },
        },
        {
          id: "b",
          text: "자주 못 봐도 만날 때 깊이 있는 시간을 보낸다",
          scores: { independent: 1, calm: 2 },
        },
      ],
    },
    {
      id: "q7",
      text: "퇴근 후 저녁 시간 나는 주로?",
      options: [
        {
          id: "a",
          text: "동네 산책이나 운동을 하러 밖으로 나간다",
          scores: { outdoor: 2, active: 1 },
        },
        {
          id: "b",
          text: "집에서 독서나 취미 활동을 즐긴다",
          scores: { indoor: 2, calm: 1 },
        },
      ],
    },
    {
      id: "q8",
      text: "그룹 활동에서 나의 역할은?",
      options: [
        {
          id: "a",
          text: "분위기를 이끌고 모두와 활발하게 어울린다",
          scores: { bond: 2, active: 1 },
        },
        {
          id: "b",
          text: "자신의 역할에 집중하며 조용히 기여한다",
          scores: { independent: 2, calm: 1 },
        },
      ],
    },
    {
      id: "q9",
      text: "좋아하는 취미 활동은?",
      options: [
        {
          id: "a",
          text: "자전거, 클라이밍, 수영 등 역동적인 활동",
          scores: { active: 2, outdoor: 1 },
        },
        {
          id: "b",
          text: "독서, 그림 그리기, 퍼즐 등 정적인 활동",
          scores: { calm: 2, indoor: 1 },
        },
      ],
    },
    {
      id: "q10",
      text: "나에게 가장 중요한 가치는?",
      options: [
        {
          id: "a",
          text: "함께하는 즐거움과 따뜻한 유대감",
          scores: { bond: 2, outdoor: 1 },
        },
        {
          id: "b",
          text: "나만의 시간과 자유로운 독립성",
          scores: { independent: 2, indoor: 1 },
        },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "energetic-dog",
      label: "활동적 강아지형",
      rule: "active >= calm + 2 && bond >= independent",
      caption: "함께 뛰어노는 에너지 넘치는 강아지",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute golden retriever puppy running happily",
      imagePath: "/pet/energetic-dog.png",
      description:
        "활동적이고 사람과의 유대를 중시하는 타입. 함께 산책하고 놀이하며 에너지를 나누는 것을 좋아합니다.",
      characteristics: [
        "활발한 야외 활동을 즐긴다",
        "함께하는 시간을 소중히 여긴다",
        "충성스럽고 애정이 넘친다",
        "혼자 있는 것을 싫어한다",
      ],
      petStyle:
        "당신은 함께 뛰어놀 때 가장 행복한 활동적 강아지형입니다! 사람들과 어울리며 에너지를 나누고, 야외 활동에서 생기를 얻습니다.",
      careTips: [
        "매일 충분한 운동과 산책 시간이 필요해요",
        "혼자 있는 시간에 대한 훈련도 중요해요",
        "다양한 놀이를 통해 에너지를 발산하세요",
      ],
    },
    {
      id: "independent-cat",
      label: "독립적 고양이형",
      rule: "calm >= active && independent >= bond + 2",
      caption: "우아하고 독립적인 고양이",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute elegant cat sitting gracefully",
      imagePath: "/pet/independent-cat.png",
      description:
        "자신만의 공간과 시간을 소중히 여기는 타입. 독립적이면서도 때때로 다가오는 애정을 가지고 있습니다.",
      characteristics: [
        "혼자만의 시간이 중요하다",
        "선택적으로 애정을 표현한다",
        "깔끔하고 정돈된 환경을 선호한다",
        "자신만의 루틴이 있다",
      ],
      petStyle:
        "당신은 자유롭고 독립적인 고양이형입니다. 자신만의 공간에서 평온한 시간을 보내며, 원할 때만 사람들에게 다가가는 매력적인 타입이에요.",
      careTips: [
        "개인 공간을 존중해주는 것이 중요해요",
        "강요하지 않는 자연스러운 소통이 좋아요",
        "안정적인 환경과 루틴을 유지해주세요",
      ],
    },
    {
      id: "relaxed-turtle",
      label: "느긋한 거북이형",
      rule: "calm >= active + 2 && indoor >= outdoor",
      caption: "느긋하고 평화로운 거북이",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute tiny turtle relaxing peacefully",
      imagePath: "/pet/relaxed-turtle.png",
      description:
        "천천히 자신의 페이스로 움직이는 타입. 편안한 실내 환경에서 안정적인 일상을 즐깁니다.",
      characteristics: [
        "서두르지 않는 여유로운 성격이다",
        "안정적인 환경을 선호한다",
        "인내심이 강하다",
        "급격한 변화를 좋아하지 않는다",
      ],
      petStyle:
        "당신은 여유로운 거북이형입니다. 급하지 않게 자신의 속도로 세상을 탐험하며, 안정적이고 평화로운 일상에서 행복을 찾습니다.",
      careTips: [
        "변화가 필요할 때는 천천히 단계적으로 도입하세요",
        "가끔은 새로운 경험에 도전해보세요",
        "편안한 환경을 유지하되 적절한 자극도 필요해요",
      ],
    },
    {
      id: "social-parrot",
      label: "사교적 앵무새형",
      rule: "bond >= independent + 2 && active >= calm",
      caption: "수다스럽고 사교적인 앵무새",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute colorful parrot chatting cheerfully",
      imagePath: "/pet/social-parrot.png",
      description:
        "소통과 교류를 사랑하는 타입. 다양한 사람들과 활발하게 어울리며 대화하는 것을 즐깁니다.",
      characteristics: [
        "대화와 소통을 즐긴다",
        "사교적이고 밝은 성격이다",
        "새로운 것을 빠르게 배운다",
        "혼자 있으면 금방 심심해한다",
      ],
      petStyle:
        "당신은 소통의 달인 앵무새형입니다! 사람들과의 대화와 교류에서 에너지를 얻으며, 밝고 활기찬 분위기를 만들어내는 사교의 천재예요.",
      careTips: [
        "다양한 사회적 활동에 참여하세요",
        "경청하는 연습도 함께 해보세요",
        "가끔은 조용한 시간도 즐겨보세요",
      ],
    },
    {
      id: "loyal-rabbit",
      label: "충실한 토끼형",
      rule: "bond >= independent && calm >= active && indoor >= outdoor && (bond - independent) <= 3",
      caption: "다정하고 충실한 토끼",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute fluffy bunny cuddling warmly",
      imagePath: "/pet/loyal-rabbit.png",
      description:
        "가까운 사람들에게 다정하고 충실한 타입. 편안한 환경에서 소중한 사람과 함께하는 시간을 가장 좋아합니다.",
      characteristics: [
        "가까운 사람에게 매우 다정하다",
        "편안한 실내 활동을 즐긴다",
        "예민하지만 따뜻한 성격이다",
        "신뢰를 쌓는 데 시간이 걸린다",
      ],
      petStyle:
        "당신은 따뜻하고 충실한 토끼형입니다. 안전한 환경에서 소중한 사람들과 함께할 때 가장 행복하며, 부드럽고 다정한 성격으로 주변 사람들에게 편안함을 줍니다.",
      careTips: [
        "안전하고 편안한 환경을 만들어주세요",
        "신뢰를 쌓는 데 시간을 충분히 들이세요",
        "가끔 야외 활동으로 새로운 경험을 해보세요",
      ],
    },
    {
      id: "free-fish",
      label: "자유로운 물고기형",
      rule: "independent >= bond && (active - calm) <= 2 && (active - calm) >= -2",
      caption: "자유롭게 흐르는 물고기",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, cute fish swimming freely in bubbles",
      imagePath: "/pet/free-fish.png",
      description:
        "자유롭게 자신의 세계를 탐험하는 타입. 구속받지 않고 자신만의 리듬으로 삶을 즐깁니다.",
      characteristics: [
        "자유로운 흐름을 좋아한다",
        "자기만의 세계가 있다",
        "관찰력이 뛰어나다",
        "구속받는 것을 싫어한다",
      ],
      petStyle:
        "당신은 자유로운 물고기형입니다. 자신만의 리듬과 세계를 가지고 있으며, 흐르는 물처럼 자연스럽게 삶을 살아가는 독특한 매력의 소유자예요.",
      careTips: [
        "자유를 즐기되 인간관계도 놓치지 마세요",
        "깊은 관계를 맺는 연습을 해보세요",
        "자신만의 공간과 취미를 발전시키세요",
      ],
    },
  ],
  scoringNote:
    "3축(active/calm, bond/independent, outdoor/indoor) 합산. 규칙 매칭 우선순위: energetic-dog > independent-cat > relaxed-turtle > social-parrot > loyal-rabbit > free-fish. 규칙 불일치 시 최고 점수 축 기준으로 폴백.",
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
export function findPetPersonalityProfile(
  answers: Record<string, string>,
  questions: PetQuestion[],
  profiles: PetProfile[]
): PetProfile | null {
  const scores: Record<string, number> = {
    active: 0,
    calm: 0,
    bond: 0,
    independent: 0,
    outdoor: 0,
    indoor: 0,
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
      "energetic-dog",
      "independent-cat",
      "relaxed-turtle",
      "social-parrot",
      "loyal-rabbit",
      "free-fish",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준 폴백
  if (scores.active >= scores.calm && scores.bond >= scores.independent) {
    return profiles.find((p) => p.id === "energetic-dog") || profiles[0];
  }
  if (scores.calm >= scores.active && scores.independent >= scores.bond) {
    return profiles.find((p) => p.id === "independent-cat") || profiles[0];
  }
  if (scores.calm >= scores.active && scores.indoor >= scores.outdoor) {
    return profiles.find((p) => p.id === "relaxed-turtle") || profiles[0];
  }
  if (scores.bond >= scores.independent && scores.active >= scores.calm) {
    return profiles.find((p) => p.id === "social-parrot") || profiles[0];
  }
  if (scores.indoor >= scores.outdoor) {
    return profiles.find((p) => p.id === "loyal-rabbit") || profiles[0];
  }

  return profiles.find((p) => p.id === "free-fish") || profiles[0];
}
