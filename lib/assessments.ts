export type LikertScale = {
  value: number;
  label: string;
};

export type AssessmentQuestion = {
  id: string;
  prompt: string;
  dimension: string;
  helper?: string;
  reverse?: boolean;
};

export type DimensionInterpretation = {
  min: number;
  max: number;
  label: string;
  description: string;
};

export type AssessmentDimension = {
  id: string;
  label: string;
  description: string;
  interpretations: DimensionInterpretation[];
};

export type Assessment = {
  slug: string;
  title: string;
  intro: string;
  instructions: string;
  scale: LikertScale[];
  questions: AssessmentQuestion[];
  dimensions: AssessmentDimension[];
  resultNote: string;
};

const defaultScale: LikertScale[] = [
  { value: 1, label: "전혀 그렇지 않다" },
  { value: 2, label: "그렇지 않은 편이다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "대체로 그렇다" },
  { value: 5, label: "매우 그렇다" },
];

export const assessments: Assessment[] = [
  {
    slug: "stress-balance-check",
    title: "스트레스 레벨 체크 — 4영역 진단",
    intro:
      "최근 한 달간의 스트레스 반응을 신체, 정서, 인지, 회복 전략 네 가지 요소로 나누어 살펴봅니다.",
    instructions:
      "한 달 동안의 평균적인 상태를 떠올리며 응답하세요. 스스로 느끼는 정도를 솔직하게 표시할수록 결과가 도움이 됩니다.",
    scale: defaultScale,
    questions: [
      // BODY 축 - 5문항
      {
        id: "body1",
        prompt: "긴장을 풀기 어려운 근육 뭉침이나 통증을 자주 느낍니다.",
        dimension: "BODY",
      },
      {
        id: "body2",
        prompt: "수면 시간이 충분해도 피로가 쉽게 가시지 않습니다.",
        dimension: "BODY",
      },
      {
        id: "body3",
        prompt: "두통이나 소화불량 같은 신체 증상이 자주 나타납니다.",
        dimension: "BODY",
      },
      {
        id: "body4",
        prompt: "스트레스를 받으면 심장이 빨리 뛰거나 숨이 가빠지는 느낌이 듭니다.",
        dimension: "BODY",
      },
      {
        id: "body5",
        prompt: "목이나 어깨가 자주 뻐근하고 결려있는 느낌입니다.",
        dimension: "BODY",
      },
      // EMOTION 축 - 5문항
      {
        id: "emotion1",
        prompt: "사소한 일에도 짜증이나 불안이 커집니다.",
        dimension: "EMOTION",
      },
      {
        id: "emotion2",
        prompt: "감정 기복이 잦아 스스로도 컨트롤하기 어렵습니다.",
        dimension: "EMOTION",
      },
      {
        id: "emotion3",
        prompt: "평소보다 쉽게 우울하거나 무기력한 기분이 듭니다.",
        dimension: "EMOTION",
      },
      {
        id: "emotion4",
        prompt: "화가 나거나 좌절감을 느낄 때 감정을 잘 표현하지 못합니다.",
        dimension: "EMOTION",
      },
      {
        id: "emotion5",
        prompt: "불안하거나 걱정스러운 생각이 하루 종일 떠나지 않습니다.",
        dimension: "EMOTION",
      },
      // COGNITION 축 - 5문항
      {
        id: "cognition1",
        prompt: "중요 업무 중에도 집중력이 자주 흐트러집니다.",
        dimension: "COGNITION",
      },
      {
        id: "cognition2",
        prompt: "부정적인 생각이 반복되어 머릿속이 복잡합니다.",
        dimension: "COGNITION",
      },
      {
        id: "cognition3",
        prompt: "기억력이 예전보다 떨어진 것 같고 잊어버리는 일이 많아졌습니다.",
        dimension: "COGNITION",
      },
      {
        id: "cognition4",
        prompt: "결정을 내리는 것이 어렵고 망설이는 경우가 많습니다.",
        dimension: "COGNITION",
      },
      {
        id: "cognition5",
        prompt: "생각이 산만하고 한 가지 일에 오래 집중하기 어렵습니다.",
        dimension: "COGNITION",
      },
      // COPING 축 - 5문항
      {
        id: "coping1",
        prompt: "스트레스를 느낄 때 바로 실행하는 회복 루틴이 있습니다.",
        dimension: "COPING",
        reverse: true,
      },
      {
        id: "coping2",
        prompt: "지지해 줄 사람에게 상황을 공유하고 도움을 요청합니다.",
        dimension: "COPING",
        reverse: true,
      },
      {
        id: "coping3",
        prompt: "규칙적인 운동이나 신체 활동으로 스트레스를 해소합니다.",
        dimension: "COPING",
        reverse: true,
      },
      {
        id: "coping4",
        prompt: "취미나 여가 활동을 통해 스트레스를 관리합니다.",
        dimension: "COPING",
        reverse: true,
      },
      {
        id: "coping5",
        prompt: "충분한 휴식과 수면을 통해 컨디션을 회복하려 노력합니다.",
        dimension: "COPING",
        reverse: true,
      },
    ],
    dimensions: [
      {
        id: "BODY",
        label: "신체 반응",
        description: "피로, 통증, 수면 등 신체 컨디션의 부담 정도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "안정",
            description: "무리 없이 균형을 유지하고 있습니다. 현재 루틴을 꾸준히 유지해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "주의",
            description: "피로가 누적되고 있습니다. 수면, 식습관 등 기본 회복 루틴을 강화해 주세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "경고",
            description: "스트레스 신호가 강하게 나타납니다. 전문 상담 또는 건강검진을 권장드립니다.",
          },
        ],
      },
      {
        id: "EMOTION",
        label: "정서 반응",
        description: "감정 기복과 심리적 안정감 수준",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "안정",
            description: "정서가 비교적 안정적입니다. 감정 기록을 꾸준히 유지하면 도움이 됩니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "주의",
            description: "감정 기복이 잦습니다. 호흡이나 명상 등 짧은 회복 루틴을 일상에 넣어보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "지원 필요",
            description: "정서적 부담이 큽니다. 가까운 사람과의 대화 또는 전문 상담을 검토해 주세요.",
          },
        ],
      },
      {
        id: "COGNITION",
        label: "인지 반응",
        description: "집중력, 사고 패턴, 부정 생각의 정도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "선명",
            description: "생각이 비교적 맑고 집중력이 유지됩니다. 작은 스트레스 요인만 관리하면 됩니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "흐림",
            description: "주의가 분산되고 있습니다. Pomodoro 등 집중 루틴을 도입해 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "과부하",
            description: "인지 과부하가 크게 느껴집니다. 업무량 조정이나 휴식 계획이 필요합니다.",
          },
        ],
      },
      {
        id: "COPING",
        label: "회복 전략",
        description: "스트레스 해소를 위한 자원 활용 정도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "회복 루틴 구축 필요",
            description: "즉각적인 회복 행동이 부족합니다. 작은 루틴부터 설계해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "기본 루틴 보유",
            description: "기본적인 대처 전략이 있습니다. 주기적으로 리마인드하며 활용도를 높여 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "회복 전략 우수",
            description: "효과적인 회복 루틴을 잘 활용하고 있습니다. 주변 사람과 노하우를 공유해 보세요.",
          },
        ],
      },
    ],
    resultNote:
      "스트레스 신호가 높게 나타난 영역은 전문 상담, 의료 검진 등 추가 지원을 고려해 주세요. 본 결과는 자가 점검용으로 활용하시길 권장합니다.",
  },
  {
    slug: "career-values-assessment",
    title: "진로 가치관 탐색 — 우선순위 진단",
    intro:
      "일과 삶에서 중요한 가치가 무엇인지 6개 축을 통해 정리합니다. 향후 커리어 방향성 설정에 참고하세요.",
    instructions:
      "최근 1~2년 간의 커리어 경험을 돌이켜 보며, 본인에게 더 중요한 항목을 선택한다는 마음으로 응답해 주세요.",
    scale: defaultScale,
    questions: [
      // GROWTH 축 - 10문항
      {
        id: "growth1",
        prompt: "새로운 역량을 빠르게 배우고 적용할 수 있는 환경이 중요합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth2",
        prompt: "장기적인 커리어 목표를 향해 단계적으로 성장하고 싶습니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth3",
        prompt: "어려운 도전 과제를 해결하는 과정에서 성취감을 느낍니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth4",
        prompt: "정기적인 교육과 훈련 기회가 제공되는 직장을 선호합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth5",
        prompt: "책임 범위가 점점 확장되는 경력 경로를 원합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth6",
        prompt: "멘토나 선배로부터 배울 수 있는 기회가 중요합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth7",
        prompt: "혁신적인 프로젝트나 최신 기술에 도전하는 일을 좋아합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth8",
        prompt: "실패를 통해 배우고 성장하는 것이 중요합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth9",
        prompt: "다양한 업무 경험을 쌓을 수 있는 기회를 중시합니다.",
        dimension: "GROWTH",
      },
      {
        id: "growth10",
        prompt: "자기 개발에 투자할 수 있는 시간과 지원이 중요합니다.",
        dimension: "GROWTH",
      },
      // STABILITY 축 - 10문항
      {
        id: "stability1",
        prompt: "예측 가능한 일정과 보상이 커리어 만족도를 높입니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability2",
        prompt: "위험 요소가 적은 안정적인 직무를 선호합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability3",
        prompt: "장기 근속이 가능하고 해고 위험이 적은 조직을 선호합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability4",
        prompt: "정기적인 급여 인상과 복리후생이 보장되는 환경이 중요합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability5",
        prompt: "변화가 적고 잘 정립된 업무 프로세스를 선호합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability6",
        prompt: "경제적 안정성을 우선적으로 고려합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability7",
        prompt: "예측 가능한 근무 시간과 업무량을 선호합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability8",
        prompt: "퇴직금과 연금 제도가 잘 갖춰진 회사를 선호합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability9",
        prompt: "급격한 조직 변화나 리스크가 적은 환경을 원합니다.",
        dimension: "STABILITY",
      },
      {
        id: "stability10",
        prompt: "안정적인 업계나 직종을 선택하는 것이 중요합니다.",
        dimension: "STABILITY",
      },
      // IMPACT 축 - 10문항
      {
        id: "impact1",
        prompt: "내가 하는 일이 사회나 조직에 미치는 영향을 체감하고 싶습니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact2",
        prompt: "사람들에게 긍정적인 변화를 주는 일을 선호합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact3",
        prompt: "사회적 가치나 공익에 기여하는 일이 중요합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact4",
        prompt: "다른 사람의 삶을 개선하는 일에서 보람을 느낍니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact5",
        prompt: "업무의 결과를 명확히 볼 수 있는 일을 선호합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact6",
        prompt: "의미 있는 변화를 만들어내는 것이 동기부여가 됩니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact7",
        prompt: "조직의 목표와 개인의 가치가 일치하는 일을 원합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact8",
        prompt: "타인에게 도움을 주거나 기여하는 역할을 좋아합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact9",
        prompt: "사회적으로 인정받는 일에 참여하는 것이 중요합니다.",
        dimension: "IMPACT",
      },
      {
        id: "impact10",
        prompt: "업무의 의미와 목적이 명확한 일을 선호합니다.",
        dimension: "IMPACT",
      },
      // BALANCE 축 - 10문항
      {
        id: "balance1",
        prompt: "일과 생활이 균형 잡힌 상태를 유지해야 동기부여가 됩니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance2",
        prompt: "자기 돌봄, 가족, 취미 등을 놓치지 않는 커리어가 중요합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance3",
        prompt: "야근이나 주말 근무가 적은 일을 선호합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance4",
        prompt: "가족이나 개인 시간을 위한 유연한 근무 형태가 중요합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance5",
        prompt: "업무 스트레스가 개인 생활에 영향을 주지 않는 환경을 원합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance6",
        prompt: "여행이나 취미 활동을 위한 충분한 휴가가 가능한 직장을 선호합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance7",
        prompt: "업무와 개인 생활의 경계가 명확한 일을 선호합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance8",
        prompt: "재택근무나 원격근무가 가능한 환경을 선호합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance9",
        prompt: "개인적인 목표와 가치를 추구할 시간이 보장되는 일이 중요합니다.",
        dimension: "BALANCE",
      },
      {
        id: "balance10",
        prompt: "건강하고 지속 가능한 업무 환경이 가장 중요합니다.",
        dimension: "BALANCE",
      },
    ],
    dimensions: [
      {
        id: "GROWTH",
        label: "성장 가치",
        description: "도전, 학습, 역량 확장에 대한 욕구",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "성장 보완",
            description: "현재는 안정과 균형을 더 선호합니다. 성장 기회가 과한 환경은 부담이 될 수 있습니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "중간",
            description: "성장도 중요하지만 다른 가치와 균형을 맞추고자 합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "성장 우선",
            description: "새로운 도전과 학습이 큰 동기부여가 됩니다. 스스로 학습경로를 설계해 보세요.",
          },
        ],
      },
      {
        id: "STABILITY",
        label: "안정 가치",
        description: "일정, 보상, 구조적 안전에 대한 요구",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "변화 선호",
            description: "다양한 변화를 즐기고 안정성보다 도전성을 중시합니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형",
            description: "안정적인 구조와 변화 사이에서 적절한 조화를 찾고자 합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "안정 우선",
            description: "예측 가능한 환경과 장기적 보장이 중요한 의사결정 기준입니다.",
          },
        ],
      },
      {
        id: "IMPACT",
        label: "영향력 가치",
        description: "일이 타인과 조직에 주는 영향의 중요도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "내부 집중",
            description: "내부 성장이나 안정이 우선입니다. 영향력은 부가적인 요소로 봅니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형",
            description: "의미 있는 영향은 중요하지만 상황에 따라 유연하게 접근합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "의미 우선",
            description: "일의 의미와 사회적 영향에서 큰 만족을 느낍니다.",
          },
        ],
      },
      {
        id: "BALANCE",
        label: "균형 가치",
        description: "일과 삶의 조화에 대한 중요도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "몰입 지향",
            description: "일에 높은 몰입을 원하며 일시적인 불균형도 받아들일 수 있습니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "상황 조절",
            description: "필요에 따라 균형과 몰입을 조절하고자 합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "균형 우선",
            description: "일과 개인 생활의 조화를 반드시 지키고 싶어 합니다.",
          },
        ],
      },
    ],
    resultNote:
      "상위 점수를 받은 가치 2~3가지를 중심으로 커리어 결정을 설계해 보세요. 낮은 점수 영역은 최소 조건으로 정의해두면 도움이 됩니다.",
  },
  {
    slug: "attachment-style-check",
    title: "애착 유형 테스트 — 관계 패턴 탐색",
    intro:
      "친밀한 관계에서 반복되는 감정과 행동 패턴을 측정하여 안정형, 불안형, 회피형 성향을 가늠합니다.",
    instructions:
      "연인, 친구, 가족 등 가까운 관계에서 자주 보이는 행동을 떠올리며 응답하세요. 과거 경험보다 현재 경향에 집중해 주세요.",
    scale: defaultScale,
    questions: [
      // SECURE 축 - 7문항
      {
        id: "secure1",
        prompt: "상대와 갈등이 생겨도 대화를 통해 해결할 수 있다고 믿습니다.",
        dimension: "SECURE",
      },
      {
        id: "secure2",
        prompt: "감정을 솔직하게 표현해도 관계가 안전하다고 느낍니다.",
        dimension: "SECURE",
      },
      {
        id: "secure3",
        prompt: "상대방이 나를 떠날지 걱정하지 않고 관계를 즐깁니다.",
        dimension: "SECURE",
      },
      {
        id: "secure4",
        prompt: "상대방의 독립적인 시간과 공간을 존중할 수 있습니다.",
        dimension: "SECURE",
      },
      {
        id: "secure5",
        prompt: "감정적 지원이 필요할 때 상대방에게 도움을 요청하는 것이 편합니다.",
        dimension: "SECURE",
      },
      {
        id: "secure6",
        prompt: "상대방과의 관계에서 자신감을 가지고 소통합니다.",
        dimension: "SECURE",
      },
      {
        id: "secure7",
        prompt: "문제가 생겼을 때 함께 해결책을 찾으려고 노력합니다.",
        dimension: "SECURE",
      },
      // ANXIOUS 축 - 7문항
      {
        id: "anxious1",
        prompt: "상대가 나를 떠날까 걱정이 들어 마음이 불안해집니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious2",
        prompt: "메시지 답장이 늦으면 내가 뭘 잘못했나 생각이 많아집니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious3",
        prompt: "상대방의 감정 변화에 매우 민감하게 반응합니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious4",
        prompt: "상대방이 나에게 관심을 덜 보이면 거부당한 느낌이 듭니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious5",
        prompt: "상대방의 반응을 확인하기 위해 자주 연락하고 싶어집니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious6",
        prompt: "관계에서 거절당하는 것이 두렵고 불안합니다.",
        dimension: "ANXIOUS",
      },
      {
        id: "anxious7",
        prompt: "상대방이 나 없이도 잘 지내는 것 같으면 외로움을 느낍니다.",
        dimension: "ANXIOUS",
      },
      // AVOIDANT 축 - 7문항
      {
        id: "avoidant1",
        prompt: "상대가 너무 가까이 다가오면 거리감을 두고 싶어집니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant2",
        prompt: "힘든 일이 있으면 혼자 해결하려고 하며 도움을 요청하지 않습니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant3",
        prompt: "감정을 드러내는 것보다 논리적으로 문제를 해결하는 편입니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant4",
        prompt: "깊은 친밀감보다는 독립성을 유지하는 것이 중요합니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant5",
        prompt: "상대방이 감정적 지지를 원할 때 불편함을 느낍니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant6",
        prompt: "개인적인 문제를 상대방과 공유하는 것을 어려워합니다.",
        dimension: "AVOIDANT",
      },
      {
        id: "avoidant7",
        prompt: "상대방이 의존적이 되면 거리를 두고 싶어집니다.",
        dimension: "AVOIDANT",
      },
      // MIXED 축 - 7문항
      {
        id: "mixed1",
        prompt: "상대에게 매달리다가도 갑자기 차갑게 선을 긋고 싶을 때가 있습니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed2",
        prompt: "상대에게 마음이 기울었다가도 다시 밀어내는 행동을 반복합니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed3",
        prompt: "가까워지고 싶지만 동시에 상대방에게 상처받을까 두렵습니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed4",
        prompt: "관계에서 일관되지 않은 감정을 경험합니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed5",
        prompt: "상대방과의 거리 조절이 어렵고 혼란스럽습니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed6",
        prompt: "감정이 극단적으로 오락가락하는 경향이 있습니다.",
        dimension: "MIXED",
      },
      {
        id: "mixed7",
        prompt: "관계에 대한 불안과 회피가 동시에 나타납니다.",
        dimension: "MIXED",
      },
    ],
    dimensions: [
      {
        id: "SECURE",
        label: "안정형",
        description: "안전한 관계 형성과 감정 표현 능력",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "강화 필요",
            description: "안전한 관계 경험을 더 만드는 것이 도움이 됩니다. 감정 표현 연습을 해보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "부분 안정",
            description: "상대에 따라 안정감을 느끼기도 하지만 때로는 불안이 올라올 수 있습니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "안정 기반",
            description: "감정 표현과 갈등 해결이 비교적 안정적입니다. 현재 전략을 유지해 보세요.",
          },
        ],
      },
      {
        id: "ANXIOUS",
        label: "불안형",
        description: "거절과 이별에 대한 민감도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "불안 낮음",
            description: "상대의 반응에 크게 흔들리지 않고 관계를 유지합니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "주의",
            description: "때때로 불안이 높아집니다. 감정 기록과 자기 확언 루틴이 도움이 됩니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "불안 높음",
            description: "상대 반응에 민감하게 반응합니다. 관계 협상 스킬과 자기 돌봄이 필요합니다.",
          },
        ],
      },
      {
        id: "AVOIDANT",
        label: "회피형",
        description: "친밀감에 대한 거리 조절",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "회피 낮음",
            description: "필요할 때 자연스럽게 가까워질 수 있습니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "주의",
            description: "어느 정도 거리두기를 선호합니다. 안정감을 느낄 수 있는 환경을 함께 설계해 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "회피 높음",
            description: "지나치게 거리를 둘 때가 있습니다. 소통 계획을 세우고 작은 노출부터 시도해 보세요.",
          },
        ],
      },
      {
        id: "MIXED",
        label: "혼재형 경향",
        description: "감정 기복과 관계 전략의 일관성 수준",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "일관성 높음",
            description: "관계 전략이 비교적 일관되고 안정적입니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "부분 혼재",
            description: "상황에 따라 전략이 달라집니다. 감정 인식 훈련이 도움됩니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "혼재 경향",
            description: "불안과 회피가 번갈아 나타날 수 있습니다. 전문 상담과 회복 루틴을 권장드립니다.",
          },
        ],
      },
    ],
    resultNote:
      "애착 성향은 고정된 것이 아니라 경험에 따라 변합니다. 신뢰 관계를 꾸준히 쌓으며 안정감을 확장해 보세요.",
  },
  {
    slug: "leadership-style-diagnosis",
    title: "리더십 스타일 진단 — 4스타일 프로파일",
    intro:
      "상황적 리더십 관점에서 과업 중심, 관계 중심, 지원, 위임 스타일을 측정하여 현재 리더십 밸런스를 확인합니다.",
    instructions:
      "팀을 이끌거나 협업을 주도했던 최근 경험을 떠올리며 응답하세요. 이상적 모습이 아닌 실제 행동에 가깝게 표시해 주세요.",
    scale: defaultScale,
    questions: [
      // DIRECTIVE 축 - 8문항
      {
        id: "directive1",
        prompt: "목표 달성을 위해 구체적인 지시와 기준을 제시합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive2",
        prompt: "성과가 저조하면 즉시 계획을 재정비하고 지침을 전달합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive3",
        prompt: "명확한 역할과 책임을 할당하여 업무를 체계화합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive4",
        prompt: "기한과 우선순위를 명확히 제시하여 진행 상황을 관리합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive5",
        prompt: "업무 수행 방법에 대한 구체적인 가이드라인을 제공합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive6",
        prompt: "문제가 발생하면 즉시 개입하여 해결 방안을 제시합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive7",
        prompt: "성과 기준과 평가 방법을 명확하게 정의합니다.",
        dimension: "DIRECTIVE",
      },
      {
        id: "directive8",
        prompt: "구성원들이 따라야 할 절차와 규칙을 명확히 전달합니다.",
        dimension: "DIRECTIVE",
      },
      // COACHING 축 - 8문항
      {
        id: "coaching1",
        prompt: "팀원의 잠재력을 끌어내기 위해 코칭 질문을 자주 활용합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching2",
        prompt: "실수나 실패 상황에서도 학습 기회를 만들어줍니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching3",
        prompt: "팀원 스스로 해결책을 찾도록 질문으로 안내합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching4",
        prompt: "정기적인 피드백 세션을 통해 성장을 지원합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching5",
        prompt: "개인의 강점과 개발 영역을 함께 탐색합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching6",
        prompt: "학습 목표를 설정하고 진척 상황을 점검합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching7",
        prompt: "역량 개발을 위한 교육 기회를 적극적으로 제공합니다.",
        dimension: "COACHING",
      },
      {
        id: "coaching8",
        prompt: "실무 경험을 통해 배울 수 있는 기회를 만들어줍니다.",
        dimension: "COACHING",
      },
      // SUPPORTIVE 축 - 8문항
      {
        id: "supportive1",
        prompt: "팀원의 감정 상태를 파악하고 필요한 지원을 제공합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive2",
        prompt: "업무 외적인 고민도 경청하며 신뢰 관계를 유지합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive3",
        prompt: "팀원들의 의견과 제안을 적극적으로 수용합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive4",
        prompt: "어려운 상황에서 감정적 지지와 격려를 제공합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive5",
        prompt: "팀원들의 개인적 필요를 고려하여 일정을 조정합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive6",
        prompt: "팀 내 분위기와 인간관계를 긍정적으로 유지합니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive7",
        prompt: "구성원들이 편안하게 의사표현할 수 있는 환경을 만듭니다.",
        dimension: "SUPPORTIVE",
      },
      {
        id: "supportive8",
        prompt: "개인적 성취와 기여를 인정하고 축하합니다.",
        dimension: "SUPPORTIVE",
      },
      // DELEGATING 축 - 8문항
      {
        id: "delegating1",
        prompt: "구성원에게 권한을 위임하고 자율적으로 의사결정하도록 합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating2",
        prompt: "최종 결과만 확인하고 과정은 구성원이 주도하도록 맡깁니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating3",
        prompt: "팀원들이 자신의 방식으로 업무를 수행하도록 허용합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating4",
        prompt: "상세한 지시 없이 전체적인 방향만 제시합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating5",
        prompt: "구성원들의 자율성과 독립성을 존중합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating6",
        prompt: "과도한 간섭 없이 팀원들이 스스로 문제를 해결하도록 합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating7",
        prompt: "책임을 나눠 갖고 각자 맡은 부분을 수행하도록 합니다.",
        dimension: "DELEGATING",
      },
      {
        id: "delegating8",
        prompt: "팀원들의 전문성과 판단을 신뢰합니다.",
        dimension: "DELEGATING",
      },
    ],
    dimensions: [
      {
        id: "DIRECTIVE",
        label: "지시형 리더십",
        description: "과업 중심으로 명확한 기준과 방향을 제시하는 경향",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "지시 낮음",
            description: "구성원의 자율성을 중시합니다. 명확한 기준 제시가 필요할 때 보완해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형 유지",
            description: "상황에 따라 적절히 방향을 제시하고 조정합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "지시 강함",
            description: "명확한 목표 설정에 강점이 있습니다. 구성원 참여 기회를 함께 설계하면 균형이 좋아집니다.",
          },
        ],
      },
      {
        id: "COACHING",
        label: "코칭형 리더십",
        description: "성장 피드백과 역량 개발 지원 정도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "코칭 낮음",
            description: "기술적 지원에 집중할 가능성이 있습니다. 질문 기반 대화를 계획해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형 유지",
            description: "필요 시 코칭 접근을 활용합니다. 지속적인 학습 구조를 고민해 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "코칭 강함",
            description: "구성원의 성장을 돕는 환경을 잘 만듭니다. 과업 관리와 균형을 맞추면 더욱 효과적입니다.",
          },
        ],
      },
      {
        id: "SUPPORTIVE",
        label: "지원형 리더십",
        description: "정서적 지지와 신뢰 관계 형성 수준",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "지원 낮음",
            description: "실무 중심으로 소통할 가능성이 있습니다. 정기적인 감정 체크인을 시도해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형 유지",
            description: "상황에 따라 감정 지원을 제공합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "지원 강함",
            description: "심리적 안전감을 조성하는 데 강점이 있습니다. 의사결정 속도와의 균형을 고민해 보세요.",
          },
        ],
      },
      {
        id: "DELEGATING",
        label: "위임형 리더십",
        description: "권한 위임과 자율성 보장 수준",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "위임 낮음",
            description: "세부 관리에 집중하는 편입니다. 구성원의 자율성을 키울 전략을 설계해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형 유지",
            description: "필요에 따라 위임과 관여를 조정합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "위임 강함",
            description: "구성원의 자율성을 존중합니다. 필요 시 명확한 체크포인트를 설정해 균형을 유지하세요.",
          },
        ],
      },
    ],
    resultNote:
      "상위 점수 스타일이 현재 강점입니다. 낮은 점수 영역은 팀 상황에 따라 의도적으로 강화 전략을 세워보세요.",
  },
  {
    slug: "learning-habits-check",
    title: "학습 성향 체크 — 몰입 루틴 진단",
    intro:
      "학습 목표 설정부터 집중, 피드백, 회복 전략까지 학습 효과를 좌우하는 네 가지 영역을 점검합니다.",
    instructions:
      "최근 학습 또는 준비 중인 시험/프로젝트를 떠올리며 실제 행동에 기반해 응답해 주세요.",
    scale: defaultScale,
    questions: [
      // PLANNING 축 - 5문항
      {
        id: "plan1",
        prompt: "주간·일간 목표를 구체적으로 설정합니다.",
        dimension: "PLANNING",
      },
      {
        id: "plan2",
        prompt: "필요한 학습 리소스를 미리 정리하고 준비합니다.",
        dimension: "PLANNING",
      },
      {
        id: "plan3",
        prompt: "학습 일정을 시간 단위로 세분화하여 계획합니다.",
        dimension: "PLANNING",
      },
      {
        id: "plan4",
        prompt: "단기 목표와 장기 목표를 연결하여 학습 경로를 설계합니다.",
        dimension: "PLANNING",
      },
      {
        id: "plan5",
        prompt: "학습 우선순위를 정하고 중요한 것부터 집중합니다.",
        dimension: "PLANNING",
      },
      // FOCUS 축 - 5문항
      {
        id: "focus1",
        prompt: "집중이 흐트러져도 빠르게 몰입 상태로 돌아옵니다.",
        dimension: "FOCUS",
      },
      {
        id: "focus2",
        prompt: "방해 요소를 차단하기 위한 환경을 의도적으로 만듭니다.",
        dimension: "FOCUS",
      },
      {
        id: "focus3",
        prompt: "학습 시간 동안 다른 일을 하지 않고 온전히 집중합니다.",
        dimension: "FOCUS",
      },
      {
        id: "focus4",
        prompt: "학습 전에 명확한 의도를 세우고 시작합니다.",
        dimension: "FOCUS",
      },
      {
        id: "focus5",
        prompt: "깊이 있게 한 가지 주제에 집중하는 것을 선호합니다.",
        dimension: "FOCUS",
      },
      // FEEDBACK 축 - 4문항
      {
        id: "feedback1",
        prompt: "학습 결과를 정리하고 피드백을 적극적으로 적용합니다.",
        dimension: "FEEDBACK",
      },
      {
        id: "feedback2",
        prompt: "주기적으로 진척 상황을 점검하며 방향을 조정합니다.",
        dimension: "FEEDBACK",
      },
      {
        id: "feedback3",
        prompt: "틀린 부분이나 부족한 영역을 기록하고 복습합니다.",
        dimension: "FEEDBACK",
      },
      {
        id: "feedback4",
        prompt: "학습 효과를 측정할 수 있는 방법을 활용합니다.",
        dimension: "FEEDBACK",
      },
      // RECOVERY 축 - 4문항
      {
        id: "recovery1",
        prompt: "피로가 쌓이면 휴식 루틴을 실행해 컨디션을 회복합니다.",
        dimension: "RECOVERY",
      },
      {
        id: "recovery2",
        prompt: "학습과 휴식을 균형 있게 배치하여 지속 가능성을 높입니다.",
        dimension: "RECOVERY",
      },
      {
        id: "recovery3",
        prompt: "충분한 수면과 건강 관리를 통해 학습 효율을 유지합니다.",
        dimension: "RECOVERY",
      },
      {
        id: "recovery4",
        prompt: "학습 중간에 짧은 휴식을 취하여 집중력을 복원합니다.",
        dimension: "RECOVERY",
      },
    ],
    dimensions: [
      {
        id: "PLANNING",
        label: "계획력",
        description: "목표 설정과 준비 과정의 체계성",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "보완 필요",
            description: "목표를 명확히 정의하고 작은 단위로 쪼개는 연습이 필요합니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "기본 확보",
            description: "필요한 계획은 세우지만 실행력을 높이기 위한 점검이 필요합니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "체계적",
            description: "명확한 목표와 준비로 학습 효율을 높이고 있습니다.",
          },
        ],
      },
      {
        id: "FOCUS",
        label: "몰입력",
        description: "집중 환경 설계 및 유지 능력",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "집중 방해",
            description: "몰입이 자주 깨집니다. 방해 요소를 줄이는 환경 설계가 필요합니다.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형",
            description: "집중이 잘될 때와 아닌 때가 번갈아 나타납니다. 몰입 루틴을 정교화해 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "높은 몰입",
            description: "환경 통제와 몰입 전략을 잘 활용하고 있습니다.",
          },
        ],
      },
      {
        id: "FEEDBACK",
        label: "피드백 활용",
        description: "학습 결과 점검과 개선 계획 수립 능력",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "활용 낮음",
            description: "결과 기록과 피드백 적용이 미흡합니다. 정기 리뷰 시간을 확보해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "기본 활용",
            description: "필요할 때 피드백을 적용합니다. 객관적 지표를 추가하면 좋습니다.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "활용 우수",
            description: "피드백을 체계적으로 반영하여 개선 주기를 만들고 있습니다.",
          },
        ],
      },
      {
        id: "RECOVERY",
        label: "회복력",
        description: "휴식, 자기 돌봄, 지속 가능성 확보 정도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "회복 부족",
            description: "휴식 전략이 부족합니다. 미니 회복 루틴을 추가해 보세요.",
          },
          {
            min: 2.6,
            max: 3.6,
            label: "균형 시도",
            description: "휴식과 학습을 조율하려 노력합니다. 일정에 회복 시간을 고정해 보세요.",
          },
          {
            min: 3.6,
            max: 5.1,
            label: "회복 우수",
            description: "지속 가능한 학습 구조를 잘 유지하고 있습니다.",
          },
        ],
      },
    ],
    resultNote:
      "점수가 낮은 영역부터 작은 실천 목표를 설정해 보세요. 계획 → 몰입 → 피드백 → 회복 순환을 구축하면 학습 효율이 높아집니다.",
  },
  {
    slug: "travel-train",
    title: "여행 스타일 동물열차",
    intro:
      "계획/즉흥 · 도시/자연 · 미식/액티비티 · 솔로/함께 4축으로 나의 여행 성향을 파악하고 동물 열차를 배정받습니다.",
    instructions:
      "각 질문에 대해 본인의 여행 스타일에 가장 가까운 선택지를 선택해 주세요. 솔직하게 답변할수록 정확한 결과를 얻을 수 있습니다.",
    scale: defaultScale,
    questions: [
      {
        id: "q1",
        prompt: "여행 준비 과정은?",
        dimension: "PLAN_SPONT",
        helper: "상세 일정표와 예약 풀세트 (plan), 현지에서 느낌대로 (spont)",
      },
      {
        id: "q2",
        prompt: "선호하는 목적지 무드",
        dimension: "CITY_NATURE",
        helper: "야경·미술관·카페 투어(도시) (city), 숲길·바다·호젓한 숙소(자연) (nature)",
      },
      {
        id: "q3",
        prompt: "테마를 고르자면",
        dimension: "FOODIE_ACTIVE",
        helper: "현지 맛집 리스트 정복 (foodie), 하이킹·스포츠·체험 (active)",
      },
      {
        id: "q4",
        prompt: "동행 스타일",
        dimension: "SOLO_TOGETHER",
        helper: "단짝/가족과 함께 (together), 혼자만의 리듬이 좋아 (solo)",
      },
      {
        id: "q5",
        prompt: "숙소 선택 기준",
        dimension: "MIXED",
        helper: "접근성·후기·편의시설 (plan/city), 뷰·로컬 감성·유니크함 (spont/nature)",
      },
      {
        id: "q6",
        prompt: "사진 앨범을 보면",
        dimension: "MIXED",
        helper: "음식·카페 사진 다수 (foodie/city), 풍경·활동 인증샷 다수 (active/nature)",
      },
      {
        id: "q7",
        prompt: "예상치 못한 변수!",
        dimension: "PLAN_SPONT",
        helper: "대처 매뉴얼 꺼내 조정 (plan), 새로운 모험으로 전환 (spont)",
      },
      {
        id: "q8",
        prompt: "하루 동선 길이는?",
        dimension: "MIXED",
        helper: "핵심만 알차게 (plan/together), 체력 가는 데까지 (spont/active)",
      },
      {
        id: "q9",
        prompt: "이 중 더 설레는 한마디는?",
        dimension: "PLAN_SPONT",
        helper: "예약 완료! (plan), 지금 가볼까? (spont)",
      },
    ],
    dimensions: [
      {
        id: "PLAN_SPONT",
        label: "계획형 ↔ 즉흥형",
        description: "여행 준비와 일정 관리 방식",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "즉흥형",
            description: "현지에서 느낌대로 여행하는 스타일입니다. 예상치 못한 모험을 즐깁니다.",
          },
          {
            min: 2.6,
            max: 3.4,
            label: "균형형",
            description: "계획과 즉흥을 적절히 조합하는 스타일입니다.",
          },
          {
            min: 3.4,
            max: 5.1,
            label: "계획형",
            description: "상세한 일정표와 예약을 선호하는 스타일입니다. 체계적인 여행을 즐깁니다.",
          },
        ],
      },
      {
        id: "CITY_NATURE",
        label: "도시형 ↔ 자연형",
        description: "선호하는 목적지의 분위기",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "자연형",
            description: "숲길, 바다, 호젓한 숙소를 선호합니다. 자연 속에서 휴식을 찾습니다.",
          },
          {
            min: 2.6,
            max: 3.4,
            label: "균형형",
            description: "도시와 자연을 모두 즐기는 스타일입니다.",
          },
          {
            min: 3.4,
            max: 5.1,
            label: "도시형",
            description: "야경, 미술관, 카페 투어를 즐깁니다. 도시의 문화와 분위기를 사랑합니다.",
          },
        ],
      },
      {
        id: "FOODIE_ACTIVE",
        label: "미식형 ↔ 액티비티형",
        description: "여행의 주요 테마",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "액티비티형",
            description: "하이킹, 스포츠, 체험 활동을 즐깁니다. 활동적인 여행을 선호합니다.",
          },
          {
            min: 2.6,
            max: 3.4,
            label: "균형형",
            description: "미식과 액티비티를 모두 즐기는 스타일입니다.",
          },
          {
            min: 3.4,
            max: 5.1,
            label: "미식형",
            description: "현지 맛집 리스트 정복을 즐깁니다. 음식이 여행의 하이라이트입니다.",
          },
        ],
      },
      {
        id: "SOLO_TOGETHER",
        label: "혼자 ↔ 함께",
        description: "동행 선호도",
        interpretations: [
          {
            min: 1,
            max: 2.6,
            label: "혼자",
            description: "혼자만의 리듬으로 여행하는 것을 좋아합니다. 자유로운 여행을 선호합니다.",
          },
          {
            min: 2.6,
            max: 3.4,
            label: "균형형",
            description: "상황에 따라 혼자 또는 함께 여행하는 것을 즐깁니다.",
          },
          {
            min: 3.4,
            max: 5.1,
            label: "함께",
            description: "단짝이나 가족과 함께 여행하는 것을 좋아합니다. 함께하는 추억을 중시합니다.",
          },
        ],
      },
    ],
    resultNote:
      "여행 스타일은 상황에 따라 달라질 수 있습니다. 결과를 참고하여 다양한 여행 방식을 시도해보세요.",
  },
];

export function getAssessmentBySlug(slug: string) {
  return assessments.find((assessment) => assessment.slug === slug);
}
