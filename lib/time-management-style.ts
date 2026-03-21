// 시간 관리 유형 테스트 데이터

export type TimeManagementOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type TimeManagementQuestion = {
  id: string;
  text: string;
  options: TimeManagementOption[];
};

export type TimeManagementProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  timeStyle?: string;
  productivityTips?: string[];
};

export type TimeManagementTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: TimeManagementQuestion[];
  resultProfiles: TimeManagementProfile[];
  scoringNote: string;
};

export const timeManagementTest: TimeManagementTest = {
  id: "time-management-style",
  title: "시간 관리 유형 테스트",
  description:
    "나의 시간 관리 성향을 알아보세요",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, ",
  questions: [
    {
      id: "q1",
      text: "새로운 프로젝트를 시작할 때 당신은?",
      options: [
        {
          id: "a",
          text: "상세한 계획표와 마일스톤을 먼저 만든다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "바로 시작하면서 방향을 잡아간다",
          scores: { flex: 2, spread: 1 },
        },
      ],
    },
    {
      id: "q2",
      text: "오늘 할 일이 갑자기 늘어났을 때?",
      options: [
        {
          id: "a",
          text: "우선순위를 재정리하고 계획을 수정한다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "일단 급한 것부터 치우면서 흘러간다",
          scores: { flex: 2, spread: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "업무 중 집중이 잘 되는 환경은?",
      options: [
        {
          id: "a",
          text: "조용하고 방해받지 않는 개인 공간",
          scores: { focus: 2, plan: 1 },
        },
        {
          id: "b",
          text: "약간의 소음과 활기가 있는 열린 공간",
          scores: { spread: 2, flex: 1 },
        },
      ],
    },
    {
      id: "q4",
      text: "마감 기한을 앞두고 당신의 모습은?",
      options: [
        {
          id: "a",
          text: "마감 전에 미리 완료해서 여유 있게 검토한다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "마감 직전 압박감이 오히려 집중력을 높여준다",
          scores: { flex: 1, spread: 2 },
        },
      ],
    },
    {
      id: "q5",
      text: "하루 일과를 시작하는 방식은?",
      options: [
        {
          id: "a",
          text: "오늘 할 일 목록을 작성하고 우선순위를 정한다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "그날 기분과 상황에 따라 유동적으로 시작한다",
          scores: { flex: 2, spread: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "업무 중 예상치 못한 중요한 연락이 왔을 때?",
      options: [
        {
          id: "a",
          text: "하던 일을 마무리한 후 확인한다",
          scores: { focus: 2, plan: 1 },
        },
        {
          id: "b",
          text: "바로 전환해서 확인하고 대응한다",
          scores: { spread: 2, flex: 1 },
        },
      ],
    },
    {
      id: "q7",
      text: "여러 업무가 동시에 주어졌을 때?",
      options: [
        {
          id: "a",
          text: "하나씩 완료하고 다음으로 넘어간다",
          scores: { focus: 2, plan: 1 },
        },
        {
          id: "b",
          text: "여러 업무를 번갈아가며 동시에 진행한다",
          scores: { spread: 2, flex: 1 },
        },
      ],
    },
    {
      id: "q8",
      text: "새로운 기술이나 지식을 배울 때?",
      options: [
        {
          id: "a",
          text: "커리큘럼을 정하고 순서대로 체계적으로 배운다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "흥미로운 부분부터 자유롭게 탐색하며 배운다",
          scores: { flex: 2, spread: 1 },
        },
      ],
    },
    {
      id: "q9",
      text: "휴식 시간을 갖는 방식은?",
      options: [
        {
          id: "a",
          text: "정해진 시간에 규칙적으로 휴식을 취한다",
          scores: { plan: 1, focus: 2 },
        },
        {
          id: "b",
          text: "필요하다고 느낄 때 자유롭게 휴식한다",
          scores: { flex: 1, spread: 2 },
        },
      ],
    },
    {
      id: "q10",
      text: "주간 계획을 세울 때 당신의 스타일은?",
      options: [
        {
          id: "a",
          text: "요일별로 할 일을 상세히 배분해 놓는다",
          scores: { plan: 2, focus: 1 },
        },
        {
          id: "b",
          text: "큰 목표만 정해두고 세부 사항은 그때그때 결정한다",
          scores: { flex: 2, spread: 1 },
        },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "strategic-planner",
      label: "전략적 플래너",
      rule: "plan >= flex + 2 && focus >= spread",
      caption: "체계적인 계획과 집중력의 달인",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, organized planner character with calendar and checklist, desk and clock theme",
      imagePath: "/time-management/strategic-planner.png",
      description:
        "철저한 계획을 세우고 하나씩 집중해서 완수하는 타입. 우선순위를 명확히 하고 시간을 효율적으로 배분합니다.",
      characteristics: [
        "체계적인 일정 관리를 즐긴다",
        "하나의 일에 깊이 몰입하는 편이다",
        "마감 기한을 철저히 지킨다",
        "예상치 못한 변화에 스트레스를 받을 수 있다",
      ],
      timeStyle:
        "당신은 시간을 자원처럼 관리하는 전략가입니다. 일정표와 투두리스트가 당신의 무기이며, 계획대로 진행될 때 최고의 성과를 냅니다.",
      productivityTips: [
        "예상치 못한 일을 위한 버퍼 시간을 확보하세요",
        "완벽한 계획보다 유연한 프레임워크를 만들어보세요",
        "가끔은 계획 없는 자유 시간을 즐겨보세요",
      ],
    },
    {
      id: "adaptive-multitasker",
      label: "적응형 멀티태스커",
      rule: "flex >= plan + 2 && spread >= focus",
      caption: "변화에 강한 멀티플레이어",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, energetic character juggling multiple tasks, colorful multitasking theme",
      imagePath: "/time-management/adaptive-multitasker.png",
      description:
        "여러 일을 동시에 유연하게 처리하는 타입. 변화하는 상황에 빠르게 적응하고 다양한 업무를 넘나듭니다.",
      characteristics: [
        "여러 프로젝트를 동시에 진행할 수 있다",
        "갑작스러운 변화에도 잘 대처한다",
        "다양한 분야에 관심이 많다",
        "하나에 오래 집중하기 어려울 수 있다",
      ],
      timeStyle:
        "당신은 유연성과 적응력이 뛰어난 멀티태스커입니다. 정해진 틀보다 흐름에 따라 움직일 때 창의적인 결과를 만들어냅니다.",
      productivityTips: [
        "가장 중요한 일 3가지를 매일 아침 정해보세요",
        "포모도로 기법으로 집중 시간을 만들어보세요",
        "멀티태스킹 중에도 '딥워크' 시간을 확보하세요",
      ],
    },
    {
      id: "focused-executor",
      label: "집중형 실행가",
      rule: "focus >= spread + 2 && (plan - flex) <= 2 && (plan - flex) >= -2",
      caption: "깊은 몰입의 실행가",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, focused character in deep concentration with headphones, spotlight theme",
      imagePath: "/time-management/focused-executor.png",
      description:
        "하나의 일에 깊이 몰입하여 높은 퀄리티를 만들어내는 타입. 계획 여부와 관계없이 집중력이 뛰어납니다.",
      characteristics: [
        "한 가지 일에 깊이 빠져드는 편이다",
        "방해받지 않는 환경을 선호한다",
        "퀄리티에 대한 기준이 높다",
        "여러 일을 동시에 하면 효율이 떨어진다",
      ],
      timeStyle:
        "당신은 깊은 몰입을 통해 탁월한 결과를 만드는 실행가입니다. 조용한 환경에서 하나에 집중할 때 최고의 생산성을 발휘합니다.",
      productivityTips: [
        "'방해 금지' 시간을 정기적으로 설정하세요",
        "비슷한 성격의 업무를 묶어서 처리해보세요",
        "멀티태스킹이 필요할 때는 시간 블록으로 나누세요",
      ],
    },
    {
      id: "free-explorer",
      label: "자유로운 탐험가",
      rule: "flex >= plan && spread >= focus && (flex - plan) <= 3",
      caption: "영감을 따라가는 자유인",
      imagePrompt:
        "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, adventurous character with lightbulb and compass, exploration and creativity theme",
      imagePath: "/time-management/free-explorer.png",
      description:
        "정해진 틀 없이 흥미와 영감에 따라 움직이는 타입. 자유로운 환경에서 창의적인 아이디어를 발휘합니다.",
      characteristics: [
        "정해진 루틴보다 자유로운 흐름을 좋아한다",
        "새로운 것에 호기심이 많다",
        "영감이 떠오르면 바로 실행한다",
        "마감 압박이 오히려 동기부여가 된다",
      ],
      timeStyle:
        "당신은 자유와 영감을 먹고 자라는 탐험가입니다. 엄격한 스케줄보다 유연한 환경에서 독창적인 결과물을 만들어냅니다.",
      productivityTips: [
        "최소한의 구조(주간 목표 등)를 설정해보세요",
        "영감 노트를 활용해 아이디어를 포착하세요",
        "데드라인을 역으로 활용하는 전략을 세워보세요",
      ],
    },
  ],
  scoringNote:
    "2축(plan/flex, focus/spread) 합산. 규칙 매칭 우선순위: 전략적 플래너 > 적응형 멀티태스커 > 집중형 실행가 > 자유로운 탐험가. 자유로운 탐험가는 flex >= plan && spread >= focus 조건에서 매칭.",
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
export function findTimeManagementProfile(
  answers: Record<string, string>,
  questions: TimeManagementQuestion[],
  profiles: TimeManagementProfile[]
): TimeManagementProfile | null {
  const scores: Record<string, number> = {
    plan: 0,
    flex: 0,
    focus: 0,
    spread: 0,
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
      "strategic-planner",
      "adaptive-multitasker",
      "focused-executor",
      "free-explorer",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준
  const isPlan = scores.plan >= scores.flex;
  const isFocus = scores.focus >= scores.spread;

  if (isPlan && isFocus) {
    return profiles.find((p) => p.id === "strategic-planner") || profiles[0];
  }
  if (!isPlan && !isFocus) {
    return profiles.find((p) => p.id === "adaptive-multitasker") || profiles[0];
  }
  if (isFocus) {
    return profiles.find((p) => p.id === "focused-executor") || profiles[0];
  }

  return profiles.find((p) => p.id === "free-explorer") || profiles[0];
}
