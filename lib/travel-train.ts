// 여행 스타일 동물열차 테스트 데이터

export type TravelTrainOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type TravelTrainQuestion = {
  id: string;
  text: string;
  options: TravelTrainOption[];
};

export type TravelTrainProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  travelStyle?: string;
  recommendedDestinations?: string[];
  travelTips?: string[];
};

export type TravelTrainTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: TravelTrainQuestion[];
  resultProfiles: TravelTrainProfile[];
  scoringNote: string;
};

export const travelTrainTest: TravelTrainTest = {
  id: "travel-train",
  title: "여행 스타일 동물열차",
  description:
    "계획/즉흥 · 도시/자연 · 미식/액티비티 · 솔로/함께 4축으로 나의 여행 차량을 배정!",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, tiny train carriage theme, ",
  questions: [
    {
      id: "q1",
      text: "여행 준비 과정은?",
      options: [
        { id: "a", text: "상세 일정표와 예약 풀세트", scores: { plan: 2 } },
        { id: "b", text: "현지에서 느낌대로", scores: { spont: 2 } },
      ],
    },
    {
      id: "q2",
      text: "선호하는 목적지 무드",
      options: [
        { id: "a", text: "야경·미술관·카페 투어(도시)", scores: { city: 2 } },
        { id: "b", text: "숲길·바다·호젓한 숙소(자연)", scores: { nature: 2 } },
      ],
    },
    {
      id: "q3",
      text: "테마를 고르자면",
      options: [
        { id: "a", text: "현지 맛집 리스트 정복", scores: { foodie: 2 } },
        { id: "b", text: "하이킹·스포츠·체험", scores: { active: 2 } },
      ],
    },
    {
      id: "q4",
      text: "동행 스타일",
      options: [
        { id: "a", text: "단짝/가족과 함께", scores: { together: 2 } },
        { id: "b", text: "혼자만의 리듬이 좋아", scores: { solo: 2 } },
      ],
    },
    {
      id: "q5",
      text: "숙소 선택 기준",
      options: [
        { id: "a", text: "접근성·후기·편의시설", scores: { plan: 1, city: 1 } },
        {
          id: "b",
          text: "뷰·로컬 감성·유니크함",
          scores: { spont: 1, nature: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "사진 앨범을 보면",
      options: [
        {
          id: "a",
          text: "음식·카페 사진 다수",
          scores: { foodie: 1, city: 1 },
        },
        {
          id: "b",
          text: "풍경·활동 인증샷 다수",
          scores: { active: 1, nature: 1 },
        },
      ],
    },
    {
      id: "q7",
      text: "예상치 못한 변수!",
      options: [
        { id: "a", text: "대처 매뉴얼 꺼내 조정", scores: { plan: 1 } },
        { id: "b", text: "새로운 모험으로 전환", scores: { spont: 1 } },
      ],
    },
    {
      id: "q8",
      text: "하루 동선 길이는?",
      options: [
        { id: "a", text: "핵심만 알차게", scores: { plan: 1, together: 1 } },
        { id: "b", text: "체력 가는 데까지", scores: { spont: 1, active: 1 } },
      ],
    },
    {
      id: "q9",
      text: "이 중 더 설레는 한마디는?",
      options: [
        { id: "a", text: "예약 완료!", scores: { plan: 1 } },
        { id: "b", text: "지금 가볼까?", scores: { spont: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "planner-cat",
      label: "기관사 고양이(플래너)",
      rule: "plan >= spont && ((city + foodie) >= (nature + active))",
      caption: "정교한 루트와 체크리스트—당신이 이 열차의 기관사!",
      imagePrompt:
        "conductor cat driving a tiny city-themed train, schedule clipboard, small cafe icons",
      imagePath: "/travel-animals/conductor-cat.png",
      description:
        "모든 것을 계획하고 정리하는 것을 좋아하는 당신은 여행의 기관사입니다. 상세한 일정표와 예약 완료 상태를 확인하며, 도시 속 미식 탐험을 즐깁니다.",
      characteristics: [
        "여행 전 상세 일정표 작성",
        "모든 예약 사전 완료",
        "도시 문화와 미식 탐험 선호",
        "효율적인 시간 활용",
        "후기와 추천 리스트 활용",
      ],
      travelStyle:
        "정돈된 여행을 선호하며, 계획대로 진행되는 것을 좋아합니다. 도시의 명소와 맛집을 체계적으로 탐방하며, 소셜미디어에 공유할 만한 멋진 경험을 추구합니다.",
      recommendedDestinations: [
        "도쿄, 서울, 방콕 등 대도시",
        "미식 투어가 활발한 지역",
        "미술관과 카페가 많은 도시",
        "대중교통이 발달한 곳",
      ],
      travelTips: [
        "여행 전 미리 가고 싶은 곳과 맛집 리스트를 작성하세요",
        "예약 필수 맛집은 미리 예약을 완료하세요",
        "지하철 패스나 교통카드를 미리 구매하세요",
        "일정에 여유를 두어 예상치 못한 상황에 대비하세요",
      ],
    },
    {
      id: "wander-rabbit",
      label: "즉흥 토끼",
      rule: "spont > plan",
      caption: "지금, 여기, 설렘을 향해 점프!",
      imagePrompt:
        "free-spirited rabbit on open-air carriage, fluttering map, wind stream",
      imagePath: "/travel-animals/wander-rabbit.png",
      description:
        "계획보다는 느낌대로 떠나는 당신은 자유로운 영혼입니다. 현지에서 만나는 사람들과의 대화, 길에서 발견하는 숨겨진 장소가 여행의 묘미입니다.",
      characteristics: [
        "계획보다 즉흥적인 여행 선호",
        "현지인과의 소통 즐김",
        "숨겨진 장소 발견 선호",
        "유연한 일정 조율",
        "예상치 못한 경험 추구",
      ],
      travelStyle:
        "계획에 얽매이지 않고, 상황에 따라 유연하게 움직입니다. 현지의 냄새와 분위기를 느끼며, 우연한 만남과 발견을 즐깁니다.",
      recommendedDestinations: [
        "자유롭게 돌아다닐 수 있는 작은 도시",
        "워킹홀리데이 가능한 지역",
        "길거리 음식이 발달한 곳",
        "자연과 도시가 공존하는 지역",
      ],
      travelTips: [
        "너무 많은 계획은 피하고 핵심만 정리하세요",
        "현지인에게 추천받은 곳을 꼭 가보세요",
        "길에서 발견한 작은 가게들을 탐방하세요",
        "예상치 못한 상황도 여행의 일부로 받아들이세요",
      ],
    },
    {
      id: "foodie-panda",
      label: "미식 판다",
      rule: "foodie >= active && foodie >= city && foodie >= nature",
      caption: "한 입마다 스토리—여정의 하이라이트는 맛.",
      imagePrompt:
        "panda chef hat holding tiny dishes on train table, steam and aroma hearts",
      imagePath: "/travel-animals/foodie-panda.png",
      description:
        "여행의 목적은 바로 맛입니다. 현지 음식과 맛집 탐방이 여행의 핵심이며, 한 끼도 소홀히 할 수 없는 당신은 진정한 미식가입니다.",
      characteristics: [
        "음식 중심의 여행 계획",
        "로컬 맛집 리스트 수집",
        "음식 사진과 리뷰 작성",
        "다양한 음식 문화 경험 추구",
        "먹기 위해 여행하는 타입",
      ],
      travelStyle:
        "식사를 중심으로 일정을 짜며, 현지의 대표 음식부터 길거리 음식까지 모두 경험하고 싶어 합니다. 맛집 후기와 추천을 철저히 조사합니다.",
      recommendedDestinations: [
        "미식 도시 (도쿄, 방콕, 타이베이 등)",
        "특산 음식이 유명한 지역",
        "야시장과 길거리 음식이 발달한 곳",
        "요리 클래스가 있는 지역",
      ],
      travelTips: [
        "미리 맛집 리스트를 만들되, 우연한 발견도 즐기세요",
        "현지인들에게 추천받은 맛집을 꼭 가보세요",
        "길거리 음식도 과감하게 도전해보세요",
        "음식 사진과 기록을 남겨 소중한 추억으로 남기세요",
      ],
    },
    {
      id: "explorer-raccoon",
      label: "탐험 너구리",
      rule: "active > foodie && nature >= city",
      caption: "지형지물? 오히려 좋아—발로 쓰는 지도!",
      imagePrompt:
        "raccoon with backpack, tiny pickaxe, nature carriage with leaves",
      imagePath: "/travel-animals/explorer-raccoon.png",
      description:
        "활동적인 여행을 즐기는 당신은 진정한 탐험가입니다. 하이킹, 래프팅, 스쿠버다이빙 등 다양한 액티비티와 자연 속에서의 모험이 여행의 즐거움입니다.",
      characteristics: [
        "액티비티 중심의 여행",
        "자연 속에서의 체험 선호",
        "체력 소모가 큰 활동 즐김",
        "인증샷과 기록 중시",
        "일상에서 벗어난 모험 추구",
      ],
      travelStyle:
        "도시보다는 자연 속에서 땀을 흘리며 새로운 도전을 즐깁니다. 하이킹, 수상 스포츠, 등반 등 몸을 움직이는 활동을 좋아합니다.",
      recommendedDestinations: [
        "자연이 풍부한 지역 (네팔, 칠레, 아이슬란드 등)",
        "하이킹 코스가 발달한 곳",
        "해양 스포츠가 가능한 지역",
        "트레킹과 캠핑이 좋은 곳",
      ],
      travelTips: [
        "체력 관리를 위해 충분한 준비 운동을 하세요",
        "액티비티 예약은 미리 해두는 것이 좋습니다",
        "안전 장비와 장비 준비를 철저히 하세요",
        "활동 후 충분한 휴식과 영양 섭취를 잊지 마세요",
      ],
    },
    {
      id: "healing-bear",
      label: "힐링 곰",
      rule: "nature > city && plan <= spont + 1 && foodie <= active + 1 && active <= foodie + 1",
      caption: "쉬어가기 위해 떠나는 여행, 템포를 낮춰요.",
      imagePrompt:
        "relaxed bear sipping tea on forest carriage, soft blanket, pinecones",
      imagePath: "/travel-animals/healing-bear.png",
      description:
        "휴식과 힐링이 목적인 당신은 여행으로 에너지를 충전합니다. 자연 속에서 느긋하게 시간을 보내며, 일상의 스트레스에서 벗어나 마음을 달래는 여행을 즐깁니다.",
      characteristics: [
        "휴식 중심의 느긋한 여행",
        "자연 속에서의 힐링 선호",
        "과도한 일정 회피",
        "몸과 마음의 회복 추구",
        "여유로운 시간 활용",
      ],
      travelStyle:
        "빠르게 움직이기보다는 한 곳에 머물며 주변을 천천히 탐방합니다. 숲, 바다, 산 등 자연 속에서 편안하게 시간을 보냅니다.",
      recommendedDestinations: [
        "온천과 리조트 지역",
        "자연 속 힐링 리트리트",
        "조용한 해변 마을",
        "산중턱 휴양지",
      ],
      travelTips: [
        "너무 많은 일정을 잡지 말고 여유를 두세요",
        "숙소에서 하루 종일 쉬는 것도 좋은 여행입니다",
        "자연 속 산책과 명상을 즐기세요",
        "일상의 생각을 잠시 내려놓고 현재를 즐기세요",
      ],
    },
  ],
  scoringNote:
    "네 축(plan/spont, city/nature, foodie/active, solo/together) 합산. 규칙 다중 충족 시 (1) 주축(plan vs spont) 우선, (2) 테마(foodie vs active), (3) 배경(city vs nature) 순으로 결정. 미정이면 최댓값 2개 듀얼 일러스트 지원.",
};

// 규칙 평가 함수
export function evaluateRule(
  rule: string,
  scores: Record<string, number>
): boolean {
  try {
    // 규칙 문자열을 JavaScript 표현식으로 변환
    let expr = rule;

    // 변수 치환
    Object.keys(scores).forEach((key) => {
      const regex = new RegExp(`\\b${key}\\b`, "g");
      expr = expr.replace(regex, String(scores[key] || 0));
    });

    // 안전한 평가 (기본적인 수학 연산만)
    // 실제 프로덕션에서는 더 엄격한 파서를 사용해야 함
    return Function(`"use strict"; return ${expr}`)();
  } catch (error) {
    console.error("Rule evaluation error:", error);
    return false;
  }
}

// 결과 프로파일 찾기
export function findTravelProfile(
  answers: Record<string, string>,
  questions: TravelTrainQuestion[],
  profiles: TravelTrainProfile[]
): TravelTrainProfile | null {
  // 점수 계산
  const scores: Record<string, number> = {
    plan: 0,
    spont: 0,
    city: 0,
    nature: 0,
    foodie: 0,
    active: 0,
    solo: 0,
    together: 0,
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

  // 모든 매칭되는 프로파일 찾기
  const matchedProfiles = profiles.filter((profile) =>
    evaluateRule(profile.rule, scores)
  );

  // 매칭된 프로파일이 있으면 점수 기반 우선순위로 선택
  // 우선순위: planner-cat > foodie-panda > healing-bear > explorer-raccoon > wander-rabbit
  if (matchedProfiles.length > 0) {
    // 1. planner-cat이 매칭되면 우선 (plan 기반, 도시+미식 중심)
    const plannerCat = matchedProfiles.find((p) => p.id === "planner-cat");
    if (plannerCat) {
      return plannerCat;
    }

    // 2. foodie-panda가 매칭되면 우선 (foodie가 가장 높을 때)
    const foodiePanda = matchedProfiles.find((p) => p.id === "foodie-panda");
    if (foodiePanda) {
      return foodiePanda;
    }

    // 3. healing-bear가 매칭되면 우선 (nature 기반, 힐링 중심)
    const healingBear = matchedProfiles.find((p) => p.id === "healing-bear");
    if (healingBear) {
      return healingBear;
    }

    // 4. explorer-raccoon이 매칭되면 우선 (active > foodie && nature 중심)
    const explorerRaccoon = matchedProfiles.find((p) => p.id === "explorer-raccoon");
    if (explorerRaccoon) {
      return explorerRaccoon;
    }

    // 5. wander-rabbit이 매칭되면 선택 (spont > plan)
    const wanderRabbit = matchedProfiles.find((p) => p.id === "wander-rabbit");
    if (wanderRabbit) {
      return wanderRabbit;
    }

    // 첫 번째 매칭된 프로파일 반환
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 기본 로직 (최대 점수 기준)
  const maxScore = Math.max(...Object.values(scores));
  const topScores = Object.entries(scores)
    .filter(([_, value]) => value === maxScore)
    .map(([key]) => key);

  // 우선순위에 따라 결정
  if (topScores.includes("plan") && scores.plan >= scores.spont) {
    return profiles.find((p) => p.id === "planner-cat") || profiles[0];
  }
  if (topScores.includes("spont") && scores.spont > scores.plan) {
    return profiles.find((p) => p.id === "wander-rabbit") || profiles[0];
  }
  if (topScores.includes("foodie")) {
    return profiles.find((p) => p.id === "foodie-panda") || profiles[0];
  }
  if (topScores.includes("active")) {
    return profiles.find((p) => p.id === "explorer-raccoon") || profiles[0];
  }

  return profiles[0];
}

