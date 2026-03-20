// 대인관계 갈등 대처 유형 테스트 데이터

export type ConflictStyleOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type ConflictStyleQuestion = {
  id: string;
  text: string;
  options: ConflictStyleOption[];
};

export type ConflictStyleProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  conflictStyle?: string;
  strengths?: string[];
  growthAreas?: string[];
};

export type ConflictStyleTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: ConflictStyleQuestion[];
  resultProfiles: ConflictStyleProfile[];
  scoringNote: string;
};

export const conflictStyleTest: ConflictStyleTest = {
  id: "conflict-style",
  title: "대인관계 갈등 대처 유형",
  description:
    "주장/양보 · 직면/회피 2축 10문항으로 나의 갈등 대처 스타일을 진단합니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, conflict resolution theme, ",
  questions: [
    {
      id: "q1",
      text: "친구와 의견이 충돌했을 때?",
      options: [
        { id: "a", text: "내 의견이 맞다면 끝까지 주장한다", scores: { assert: 2 } },
        { id: "b", text: "상대 의견을 존중하고 한발 물러선다", scores: { yield: 2 } },
      ],
    },
    {
      id: "q2",
      text: "불만이 있는 상황에서?",
      options: [
        { id: "a", text: "직접 대면해서 이야기를 나눈다", scores: { confront: 2 } },
        { id: "b", text: "시간이 지나면 해결될 거라 기다린다", scores: { avoid: 2 } },
      ],
    },
    {
      id: "q3",
      text: "팀 프로젝트에서 역할 분배가 불공평할 때?",
      options: [
        { id: "a", text: "불공평한 점을 지적하고 재조정을 요구", scores: { assert: 2, confront: 1 } },
        { id: "b", text: "일단 맡은 부분을 열심히 한다", scores: { yield: 2, avoid: 1 } },
      ],
    },
    {
      id: "q4",
      text: "연인이나 가까운 사람과 다툴 때?",
      options: [
        { id: "a", text: "문제를 바로 이야기하고 해결한다", scores: { confront: 2 } },
        { id: "b", text: "일단 거리를 두고 감정을 정리한다", scores: { avoid: 2 } },
      ],
    },
    {
      id: "q5",
      text: "누군가가 나에게 무례하게 행동하면?",
      options: [
        { id: "a", text: "바로 불쾌함을 표현하고 선을 긋는다", scores: { assert: 1, confront: 1 } },
        { id: "b", text: "참고 넘기거나 자리를 피한다", scores: { yield: 1, avoid: 1 } },
      ],
    },
    {
      id: "q6",
      text: "회의에서 내 아이디어가 무시당했을 때?",
      options: [
        { id: "a", text: "다시 한번 명확하게 설명하고 주장한다", scores: { assert: 1 } },
        { id: "b", text: "다른 사람의 의견에 맞추어 간다", scores: { yield: 1 } },
      ],
    },
    {
      id: "q7",
      text: "오래된 갈등이 해결되지 않았을 때?",
      options: [
        { id: "a", text: "적극적으로 대화의 자리를 만든다", scores: { confront: 1 } },
        { id: "b", text: "그냥 덮어두고 다른 것에 집중한다", scores: { avoid: 1 } },
      ],
    },
    {
      id: "q8",
      text: "타협이 필요한 상황에서?",
      options: [
        { id: "a", text: "내가 원하는 조건을 먼저 제시한다", scores: { assert: 1 } },
        { id: "b", text: "상대방이 원하는 것을 먼저 묻는다", scores: { yield: 1 } },
      ],
    },
    {
      id: "q9",
      text: "뒷담화를 듣게 되었을 때?",
      options: [
        { id: "a", text: "당사자에게 직접 확인한다", scores: { confront: 1, assert: 1 } },
        { id: "b", text: "모른 척하고 넘어간다", scores: { avoid: 1, yield: 1 } },
      ],
    },
    {
      id: "q10",
      text: "갈등 후 관계 회복에 대해?",
      options: [
        { id: "a", text: "먼저 연락해서 대화를 시도한다", scores: { confront: 1 } },
        { id: "b", text: "상대방이 먼저 연락하길 기다린다", scores: { avoid: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "competing",
      label: "경쟁형",
      rule: "assert >= yield + 2 && confront >= avoid",
      caption: "나의 입장을 분명히 하고 당당하게 맞서는 전사!",
      imagePrompt: "determined warrior character with shield, bold stance background",
      imagePath: "/conflict/competing.png",
      description:
        "자기 입장을 강하게 주장하며 갈등에 정면으로 맞서는 타입입니다. 자신의 권리와 의견을 지키는 데 주저하지 않으며, 승부욕이 강합니다. 빠른 결정이 필요한 상황에서 힘을 발휘합니다.",
      characteristics: [
        "강한 자기 주장력",
        "갈등에 정면 대응",
        "빠르고 결단력 있는 행동",
        "자신의 권리를 명확히 표현",
        "경쟁 상황에서의 추진력",
      ],
      conflictStyle:
        "갈등을 회피하지 않고, 자신의 입장을 논리적으로 또는 강하게 관철시킵니다. 결과 중심적이며, 목표를 위해 타협하기보다 자신의 방향을 밀어붙입니다.",
      strengths: [
        "위기 상황에서의 강한 리더십",
        "명확한 입장 표명",
        "빠른 의사 결정",
        "자신감 있는 태도",
      ],
      growthAreas: [
        "상대방의 감정과 입장도 경청해 보세요",
        "모든 갈등에서 이기려 하지 않아도 됩니다",
        "장기적 관계를 위해 유연성을 연습해 보세요",
        "협력의 가치를 인식하면 더 큰 성과를 낼 수 있습니다",
      ],
    },
    {
      id: "collaborating",
      label: "협력형",
      rule: "assert >= yield && confront >= avoid && (assert - yield) <= 3",
      caption: "윈윈을 추구하며 함께 최선의 답을 찾는 협력가!",
      imagePrompt: "collaborative character with puzzle pieces connecting, teamwork background",
      imagePath: "/conflict/collaborating.png",
      description:
        "갈등 상황에서 양측 모두가 만족하는 해결책을 찾으려 노력하는 타입입니다. 적극적으로 문제에 접근하면서도 상대방의 의견을 존중합니다. 시간이 걸리더라도 최선의 합의를 이끌어냅니다.",
      characteristics: [
        "윈윈 해결책 추구",
        "적극적인 대화와 소통",
        "상대방 의견에 대한 열린 태도",
        "창의적인 문제 해결",
        "장기적 관계를 고려한 접근",
      ],
      conflictStyle:
        "갈등의 본질을 파악하고 양측의 필요를 모두 충족시키는 해결책을 찾습니다. 직접 대면하되, 공격적이지 않고 건설적인 대화를 이끕니다.",
      strengths: [
        "복잡한 갈등의 근본 원인 파악",
        "모두가 만족하는 해결책 도출",
        "팀 내 신뢰 구축",
        "장기적으로 건강한 관계 유지",
      ],
      growthAreas: [
        "모든 상황에서 윈윈이 가능하지 않을 수 있습니다",
        "빠른 결정이 필요한 때는 과감해져 보세요",
        "과도한 협의 과정이 비효율을 낳을 수 있습니다",
        "때로는 타협으로 충분한 상황도 있습니다",
      ],
    },
    {
      id: "compromising",
      label: "타협형",
      rule: "(assert - yield) <= 2 && (assert - yield) >= -2 && (confront - avoid) <= 2 && (confront - avoid) >= -2",
      caption: "적절한 양보와 주장으로 합의점을 찾는 조율사!",
      imagePrompt: "balanced negotiator character with handshake, middle ground background",
      imagePath: "/conflict/compromising.png",
      description:
        "양측이 적당히 양보하여 합의점을 찾는 현실적인 타입입니다. 완벽한 해결보다 실현 가능한 타협을 선호하며, 효율적으로 갈등을 해소합니다. 균형 감각이 뛰어나고 실용적입니다.",
      characteristics: [
        "현실적인 합의점 탐색",
        "적절한 양보와 주장의 균형",
        "효율적인 갈등 해소",
        "실용적이고 유연한 태도",
        "빠른 합의 도출 능력",
      ],
      conflictStyle:
        "서로 조금씩 양보하여 중간 지점에서 만나는 것을 선호합니다. 완벽하지 않더라도 양측이 수용 가능한 합리적 수준의 해결책을 빠르게 찾습니다.",
      strengths: [
        "갈등의 효율적 해소",
        "현실적이고 실용적인 접근",
        "양측을 만족시키는 능력",
        "시간과 에너지 절약",
      ],
      growthAreas: [
        "중요한 문제에서는 자신의 입장을 더 강하게 표현해 보세요",
        "타협이 아닌 협력으로 더 좋은 해결책을 찾을 수도 있습니다",
        "매번 양보만 하면 불만이 쌓일 수 있으니 균형을 살펴보세요",
        "근본적 문제 해결이 필요한 때를 구분해 보세요",
      ],
    },
    {
      id: "accommodating",
      label: "수용형",
      rule: "yield >= assert && confront >= avoid",
      caption: "관계를 소중히 여기며 따뜻한 양보를 실천하는 배려인!",
      imagePrompt: "gentle caring character offering olive branch, warm heart background",
      imagePath: "/conflict/accommodating.png",
      description:
        "관계를 위해 자신의 입장을 양보하는 따뜻한 타입입니다. 갈등 상황에서도 상대방의 입장을 먼저 생각하며, 조화로운 관계 유지를 최우선으로 여깁니다. 대면하되 부드럽게 풀어가는 방식을 선호합니다.",
      characteristics: [
        "관계 중심의 갈등 해소",
        "상대방의 필요를 우선시",
        "부드럽고 배려 있는 태도",
        "조화와 화합 추구",
        "자기 희생적 양보",
      ],
      conflictStyle:
        "상대방의 감정과 입장을 우선 배려하며, 관계가 손상되는 것을 가장 꺼립니다. 갈등을 피하지는 않지만, 자신이 양보함으로써 상황을 해결하려 합니다.",
      strengths: [
        "관계의 조화 유지",
        "상대방에 대한 깊은 배려",
        "팀 분위기 안정화",
        "갈등 후 빠른 관계 회복",
      ],
      growthAreas: [
        "자신의 필요와 감정도 표현하는 연습을 하세요",
        "지나친 양보는 내면의 불만을 키울 수 있습니다",
        "중요한 가치에 대해서는 단호해질 필요가 있습니다",
        "건강한 경계 설정도 관계를 위한 것임을 기억하세요",
      ],
    },
    {
      id: "avoiding",
      label: "회피형",
      rule: "yield >= assert && avoid >= confront",
      caption: "평화를 사랑하며 갈등의 파도를 조용히 넘기는 평화주의자!",
      imagePrompt: "peaceful character behind cloud, serene quiet landscape background",
      imagePath: "/conflict/avoiding.png",
      description:
        "갈등 상황 자체를 피하려는 평화주의자 타입입니다. 대립이나 충돌이 불편하고, 시간이 해결해줄 것이라 믿습니다. 조용하고 평화로운 관계를 선호하며, 불필요한 갈등을 만들지 않으려 합니다.",
      characteristics: [
        "갈등 상황 자체를 회피",
        "평화롭고 조용한 관계 선호",
        "감정을 내면에 담아두는 경향",
        "시간에 의한 자연 해소를 기대",
        "대립 상황에서의 불편함",
      ],
      conflictStyle:
        "갈등이 생기면 거리를 두거나 화제를 바꾸는 방식으로 대처합니다. 직접적인 대립을 피하며, 문제가 자연스럽게 사라지기를 바랍니다.",
      strengths: [
        "불필요한 갈등 예방",
        "감정적 상황에서의 냉각 시간 확보",
        "사소한 문제의 자연 해소",
        "평화로운 분위기 유지",
      ],
      growthAreas: [
        "중요한 문제는 시간이 해결해주지 않을 수 있습니다",
        "작은 갈등부터 대면하는 연습을 해보세요",
        "억눌린 감정이 쌓이면 더 큰 문제가 될 수 있습니다",
        "자신의 의견을 말하는 것은 갈등이 아니라 소통입니다",
      ],
    },
  ],
  scoringNote:
    "2축(assert/yield, confront/avoid) 합산. Thomas-Kilmann 갈등 대처 모델에 기반. 경쟁형(assert 높음+confront), 협력형(assert+confront 균형), 타협형(전체 균형), 수용형(yield+confront), 회피형(yield+avoid).",
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
export function findConflictProfile(
  answers: Record<string, string>,
  questions: ConflictStyleQuestion[],
  profiles: ConflictStyleProfile[]
): ConflictStyleProfile | null {
  const scores: Record<string, number> = {
    assert: 0,
    yield: 0,
    confront: 0,
    avoid: 0,
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
      "competing",
      "collaborating",
      "compromising",
      "accommodating",
      "avoiding",
    ];
    for (const id of priority) {
      const match = matchedProfiles.find((p) => p.id === id);
      if (match) return match;
    }
    return matchedProfiles[0];
  }

  // 규칙 매칭 실패 시 최대 점수 기준
  if (scores.assert > scores.yield && scores.confront > scores.avoid) {
    return profiles.find((p) => p.id === "competing") || profiles[0];
  }
  if (scores.assert >= scores.yield && scores.confront >= scores.avoid) {
    return profiles.find((p) => p.id === "collaborating") || profiles[0];
  }
  if (scores.yield > scores.assert && scores.avoid > scores.confront) {
    return profiles.find((p) => p.id === "avoiding") || profiles[0];
  }
  if (scores.yield > scores.assert) {
    return profiles.find((p) => p.id === "accommodating") || profiles[0];
  }

  return profiles.find((p) => p.id === "compromising") || profiles[0];
}
