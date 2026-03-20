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
  {
    slug: "self-esteem-check",
    title: "자존감 수준 체크 — 3영역 진단",
    intro:
      "자기수용, 자기효능감, 사회적 자존감 세 가지 영역을 통해 현재 자존감 수준을 살펴봅니다.",
    instructions:
      "최근 2~3주 동안의 평균적인 상태를 떠올리며 솔직하게 응답해 주세요. 정답은 없으며, 자신의 느낌에 가장 가까운 것을 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // ACCEPT 축 - 5문항
      {
        id: "accept1",
        prompt: "나의 장점과 단점을 모두 포함해 나 자신을 있는 그대로 받아들인다.",
        dimension: "ACCEPT",
      },
      {
        id: "accept2",
        prompt: "실수를 하더라도 스스로를 지나치게 비난하지 않는 편이다.",
        dimension: "ACCEPT",
      },
      {
        id: "accept3",
        prompt: "다른 사람과 비교하기보다 나만의 속도를 존중한다.",
        dimension: "ACCEPT",
      },
      {
        id: "accept4",
        prompt: "완벽하지 않아도 괜찮다고 느낀다.",
        dimension: "ACCEPT",
      },
      {
        id: "accept5",
        prompt: "거울을 볼 때 외모에 대해 대체로 편안한 마음이 든다.",
        dimension: "ACCEPT",
      },
      // EFFICACY 축 - 5문항
      {
        id: "efficacy1",
        prompt: "새로운 과제가 주어지면 '해낼 수 있다'는 생각이 먼저 든다.",
        dimension: "EFFICACY",
      },
      {
        id: "efficacy2",
        prompt: "어려운 상황에서도 해결 방법을 찾을 수 있다고 믿는다.",
        dimension: "EFFICACY",
      },
      {
        id: "efficacy3",
        prompt: "목표를 세우면 끝까지 해내는 편이다.",
        dimension: "EFFICACY",
      },
      {
        id: "efficacy4",
        prompt: "실패한 경험이 있어도 다시 도전할 의지가 생긴다.",
        dimension: "EFFICACY",
      },
      {
        id: "efficacy5",
        prompt: "내가 노력하면 결과가 달라질 수 있다고 생각한다.",
        dimension: "EFFICACY",
      },
      // SOCIAL 축 - 5문항
      {
        id: "social1",
        prompt: "모임이나 단체에서 나의 의견이 존중받는다고 느낀다.",
        dimension: "SOCIAL",
      },
      {
        id: "social2",
        prompt: "새로운 사람을 만나는 상황에서 크게 위축되지 않는다.",
        dimension: "SOCIAL",
      },
      {
        id: "social3",
        prompt: "친구나 동료 사이에서 나는 충분히 가치 있는 존재라고 느낀다.",
        dimension: "SOCIAL",
      },
      {
        id: "social4",
        prompt: "다른 사람의 평가에 크게 흔들리지 않는 편이다.",
        dimension: "SOCIAL",
      },
      {
        id: "social5",
        prompt: "갈등 상황에서도 나의 입장을 적절히 표현할 수 있다.",
        dimension: "SOCIAL",
      },
    ],
    dimensions: [
      {
        id: "ACCEPT",
        label: "자기수용",
        description: "자신의 모습을 있는 그대로 받아들이는 정도",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "자신에 대한 수용도가 낮은 편입니다. 자기 비판적 사고가 강할 수 있으며, 작은 실수에도 자책하는 경향이 있습니다. '나도 괜찮다'는 자기 확인 연습부터 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "상황에 따라 자기수용 수준이 변동합니다. 대체로 자신을 받아들이지만, 특정 상황에서 자기 비판이 강해질 수 있습니다. 자기 긍정 일기를 통해 일관성을 높여 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "자신을 있는 그대로 잘 받아들이고 있습니다. 단점도 성장의 일부로 여기는 건강한 태도를 가지고 있습니다. 이 태도를 유지하며 주변 사람에게도 공유해 보세요.",
          },
        ],
      },
      {
        id: "EFFICACY",
        label: "자기효능감",
        description: "도전과 과제를 해낼 수 있다는 믿음",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "새로운 도전에 대한 자신감이 부족한 상태입니다. 작은 성공 경험을 의도적으로 쌓아가며, 할 수 있는 일의 범위를 조금씩 넓혀 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "익숙한 영역에서는 자신감이 있지만, 새로운 상황에서 주저할 수 있습니다. 도전 일지를 작성하며 성취 경험을 기록해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "자기효능감이 높아 새로운 도전에도 적극적으로 임합니다. 이 에너지를 활용하여 더 큰 목표에 도전해 보세요.",
          },
        ],
      },
      {
        id: "SOCIAL",
        label: "사회적 자존감",
        description: "타인과의 관계에서 느끼는 자신의 가치",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "대인관계에서 자신의 가치를 낮게 평가하는 경향이 있습니다. 타인의 시선에 지나치게 민감할 수 있으므로, 신뢰할 수 있는 사람과의 소통을 늘려 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "관계 속에서 대체로 편안하지만, 특정 상황에서 위축될 수 있습니다. 자기 표현 연습을 통해 관계 속 자신감을 키워 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "관계에서 자신의 가치를 잘 인식하고 있습니다. 타인의 평가에 크게 흔들리지 않으며, 건강한 경계를 유지합니다.",
          },
        ],
      },
    ],
    resultNote:
      "자존감은 고정된 것이 아니라 경험과 노력으로 변화할 수 있습니다. 낮은 영역이 있다면 작은 실천부터 시작해 보세요. 지속적인 어려움이 있다면 전문 상담을 권장합니다.",
  },
  {
    slug: "eq-test",
    title: "감정 지능(EQ) 테스트 — 4영역 진단",
    intro:
      "자기인식, 자기조절, 공감능력, 관계관리 네 가지 영역을 통해 감정 지능 수준을 진단합니다.",
    instructions:
      "평소 자신의 행동과 감정 패턴을 떠올리며 솔직하게 응답해 주세요. 이상적인 모습이 아닌, 실제 자신의 모습에 가깝게 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // AWARE 축 - 5문항
      {
        id: "aware1",
        prompt: "나는 지금 어떤 감정을 느끼고 있는지 대부분 인지하고 있다.",
        dimension: "AWARE",
      },
      {
        id: "aware2",
        prompt: "감정이 격해질 때 그 원인이 무엇인지 파악할 수 있다.",
        dimension: "AWARE",
      },
      {
        id: "aware3",
        prompt: "기분이 좋거나 나쁠 때 신체 반응(가슴 두근거림, 어깨 긴장 등)을 알아차린다.",
        dimension: "AWARE",
      },
      {
        id: "aware4",
        prompt: "나의 감정이 의사결정에 미치는 영향을 이해하고 있다.",
        dimension: "AWARE",
      },
      {
        id: "aware5",
        prompt: "복잡한 감정(기쁨과 불안이 동시에 느껴지는 등)도 구분하여 인식할 수 있다.",
        dimension: "AWARE",
      },
      // REGULATE 축 - 5문항
      {
        id: "regulate1",
        prompt: "화가 나는 상황에서도 충동적으로 행동하지 않고 잠시 멈출 수 있다.",
        dimension: "REGULATE",
      },
      {
        id: "regulate2",
        prompt: "스트레스를 받으면 나만의 방법으로 감정을 가라앉힐 수 있다.",
        dimension: "REGULATE",
      },
      {
        id: "regulate3",
        prompt: "실망스러운 일이 생겨도 비교적 빠르게 평정심을 되찾는 편이다.",
        dimension: "REGULATE",
      },
      {
        id: "regulate4",
        prompt: "부정적인 감정에 오래 빠져있지 않고 전환할 수 있다.",
        dimension: "REGULATE",
      },
      {
        id: "regulate5",
        prompt: "감정적으로 힘든 상황에서도 해야 할 일에 집중할 수 있다.",
        dimension: "REGULATE",
      },
      // EMPATHY 축 - 5문항
      {
        id: "empathy1",
        prompt: "상대방의 표정이나 어조만으로도 감정 상태를 잘 파악한다.",
        dimension: "EMPATHY",
      },
      {
        id: "empathy2",
        prompt: "다른 사람이 힘들어할 때 그 마음을 진심으로 이해하려고 노력한다.",
        dimension: "EMPATHY",
      },
      {
        id: "empathy3",
        prompt: "나와 다른 입장이나 관점을 가진 사람의 감정도 존중할 수 있다.",
        dimension: "EMPATHY",
      },
      {
        id: "empathy4",
        prompt: "대화할 때 상대방이 진짜로 하고 싶은 말이 무엇인지 잘 캐치한다.",
        dimension: "EMPATHY",
      },
      {
        id: "empathy5",
        prompt: "누군가 슬퍼하거나 기뻐하면 나도 비슷한 감정을 느끼는 편이다.",
        dimension: "EMPATHY",
      },
      // RELATE 축 - 5문항
      {
        id: "relate1",
        prompt: "갈등이 생겼을 때 상대방과 대화로 풀어가려 노력한다.",
        dimension: "RELATE",
      },
      {
        id: "relate2",
        prompt: "팀이나 그룹에서 분위기가 어색해지면 자연스럽게 분위기를 풀 수 있다.",
        dimension: "RELATE",
      },
      {
        id: "relate3",
        prompt: "상대방에게 비판적 피드백을 줄 때도 감정을 배려하며 전달한다.",
        dimension: "RELATE",
      },
      {
        id: "relate4",
        prompt: "오래된 관계를 꾸준히 잘 유지하는 편이다.",
        dimension: "RELATE",
      },
      {
        id: "relate5",
        prompt: "처음 만난 사람과도 비교적 빨리 편안한 관계를 만들 수 있다.",
        dimension: "RELATE",
      },
    ],
    dimensions: [
      {
        id: "AWARE",
        label: "자기인식",
        description: "자신의 감정 상태를 인지하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "자신의 감정을 인식하는 것이 어려운 상태입니다. 감정 일기를 시작하거나, 하루에 3번 '지금 내 기분은?' 체크를 해보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 감정 인식은 가능하지만, 복잡한 감정 상황에서 혼란을 느낄 수 있습니다. 감정 어휘를 늘리면 인식 능력이 향상됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "자신의 감정을 섬세하게 인식하고 있습니다. 이 능력을 활용하여 감정의 원인을 분석하고 더 나은 의사결정에 연결해 보세요.",
          },
        ],
      },
      {
        id: "REGULATE",
        label: "자기조절",
        description: "감정을 적절히 조절하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "감정 조절에 어려움을 겪고 있습니다. 심호흡, 6초 멈추기 등 즉각적인 조절 기법부터 연습해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "일상적인 상황에서는 감정 조절이 가능하지만, 강한 스트레스 상황에서 어려움을 느낄 수 있습니다. 스트레스 대처 전략을 다양화해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "감정 조절 능력이 뛰어납니다. 어려운 상황에서도 침착하게 대처할 수 있으며, 이 능력은 리더십에도 큰 강점이 됩니다.",
          },
        ],
      },
      {
        id: "EMPATHY",
        label: "공감능력",
        description: "타인의 감정을 이해하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "타인의 감정을 파악하는 것이 어려운 편입니다. 대화할 때 상대방의 표정과 어조에 의식적으로 주의를 기울여 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "가까운 사람의 감정은 잘 파악하지만, 낯선 사람이나 미묘한 감정 변화에는 둔감할 수 있습니다. 적극적 경청 연습이 도움이 됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "타인의 감정을 깊이 이해하고 공감하는 능력이 뛰어납니다. 다만, 타인의 감정에 지나치게 몰입하지 않도록 건강한 경계도 유지하세요.",
          },
        ],
      },
      {
        id: "RELATE",
        label: "관계관리",
        description: "관계를 효과적으로 유지하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "대인관계 유지와 갈등 해결에 어려움을 느끼고 있습니다. 작은 관심 표현(안부 메시지, 감사 표현)부터 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 관계 유지는 잘 하지만, 갈등 상황이나 새로운 관계 형성에서 어려움을 느낄 수 있습니다. 비폭력대화(NVC) 방식을 참고해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "관계를 잘 형성하고 유지하며, 갈등 상황에서도 건설적으로 소통합니다. 이 능력을 활용하여 주변 사람들의 관계 개선도 도울 수 있습니다.",
          },
        ],
      },
    ],
    resultNote:
      "감정 지능은 타고나는 것이 아니라 연습과 경험을 통해 꾸준히 발전시킬 수 있는 역량입니다. 낮은 영역부터 하나씩 개선해 나가 보세요.",
  },
  {
    slug: "burnout-check",
    title: "번아웃 지수 체크 — 3영역 진단",
    intro:
      "정서적 소진, 냉소화, 효능감 저하 세 가지 영역을 통해 번아웃 수준을 점검합니다. 최근 한 달간의 상태를 기준으로 응답해 주세요.",
    instructions:
      "최근 한 달 동안의 업무·일상 경험을 떠올리며 솔직하게 응답해 주세요. 이상적인 모습이 아닌 실제 느낌에 가깝게 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // EXHAUST 축 - 5문항
      {
        id: "exhaust1",
        prompt: "퇴근 후에도 감정적으로 완전히 지쳐있는 느낌이 듭니다.",
        dimension: "EXHAUST",
      },
      {
        id: "exhaust2",
        prompt: "아침에 일어나면 벌써 하루가 버겁게 느껴집니다.",
        dimension: "EXHAUST",
      },
      {
        id: "exhaust3",
        prompt: "사람들과 대화하는 것 자체가 에너지를 많이 소모하는 일처럼 느껴집니다.",
        dimension: "EXHAUST",
      },
      {
        id: "exhaust4",
        prompt: "주말에 충분히 쉬어도 월요일이 되면 다시 탈진한 기분이 듭니다.",
        dimension: "EXHAUST",
        helper: "회복이 잘 되지 않는 느낌에 초점을 맞춰 주세요.",
      },
      {
        id: "exhaust5",
        prompt: "감정적으로 줄 수 있는 것이 더 이상 남아있지 않다고 느낍니다.",
        dimension: "EXHAUST",
      },
      // CYNICAL 축 - 5문항
      {
        id: "cynical1",
        prompt: "업무에 대한 열정이나 의미를 찾기 어렵습니다.",
        dimension: "CYNICAL",
      },
      {
        id: "cynical2",
        prompt: "동료나 고객의 이야기에 예전만큼 관심이 가지 않습니다.",
        dimension: "CYNICAL",
      },
      {
        id: "cynical3",
        prompt: "일을 그저 기계적으로 처리하고 있다는 생각이 듭니다.",
        dimension: "CYNICAL",
      },
      {
        id: "cynical4",
        prompt: "직장이나 조직에 대해 냉소적인 생각이 자주 듭니다.",
        dimension: "CYNICAL",
      },
      {
        id: "cynical5",
        prompt: "내가 하는 일이 정말 의미가 있는지 회의감이 듭니다.",
        dimension: "CYNICAL",
        helper: "일의 가치에 대한 의문에 초점을 맞춰 주세요.",
      },
      // EFFICACY 축 - 5문항 (reverse scored)
      {
        id: "bo_efficacy1",
        prompt: "업무에서 어려운 문제가 생겨도 해결할 수 있다는 자신감이 있습니다.",
        dimension: "EFFICACY",
        reverse: true,
      },
      {
        id: "bo_efficacy2",
        prompt: "내가 맡은 일에서 의미 있는 성과를 내고 있다고 느낍니다.",
        dimension: "EFFICACY",
        reverse: true,
      },
      {
        id: "bo_efficacy3",
        prompt: "동료나 팀에 긍정적인 영향을 주고 있다고 생각합니다.",
        dimension: "EFFICACY",
        reverse: true,
      },
      {
        id: "bo_efficacy4",
        prompt: "최근 한 달간 스스로 성장하고 있다는 느낌이 듭니다.",
        dimension: "EFFICACY",
        reverse: true,
        helper: "업무 역량이나 개인적 성장 모두 포함합니다.",
      },
      {
        id: "bo_efficacy5",
        prompt: "나의 업무 능력에 대해 전반적으로 만족합니다.",
        dimension: "EFFICACY",
        reverse: true,
      },
    ],
    dimensions: [
      {
        id: "EXHAUST",
        label: "정서적 소진",
        description: "감정적 에너지 고갈 정도",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음(양호)",
            description:
              "감정적 에너지가 비교적 잘 유지되고 있습니다. 현재의 회복 루틴을 꾸준히 유지해 주세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통(주의)",
            description:
              "감정적 피로가 쌓이고 있습니다. 의도적인 쉼과 감정 환기 시간을 확보해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음(위험)",
            description:
              "정서적 에너지가 심각하게 고갈된 상태입니다. 업무량 조정과 전문 상담을 적극 권장합니다.",
          },
        ],
      },
      {
        id: "CYNICAL",
        label: "냉소화",
        description: "업무나 관계에 대한 무관심/부정적 태도",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음(양호)",
            description:
              "업무와 관계에 대한 관심과 의미감이 유지되고 있습니다. 좋은 상태입니다.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통(주의)",
            description:
              "업무나 관계에 대한 거리감이 생기고 있습니다. 일의 의미를 재확인하고 동료와 소통을 늘려 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음(위험)",
            description:
              "냉소적 태도가 강하게 나타납니다. 이는 번아웃의 핵심 신호이므로 환경 변화나 전문 지원을 고려해 주세요.",
          },
        ],
      },
      {
        id: "EFFICACY",
        label: "효능감 저하",
        description: "성취감과 자기효능감 감소 (역채점)",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "높음(위험)",
            description:
              "자기효능감이 크게 저하된 상태입니다. 작은 성공 경험을 의도적으로 만들고, 성과를 기록하는 습관을 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통(주의)",
            description:
              "효능감이 불안정한 상태입니다. 자신의 기여와 성과를 정기적으로 돌아보는 시간을 가져 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "낮음(양호)",
            description:
              "업무에서의 성취감과 자기효능감이 잘 유지되고 있습니다. 이 긍정적 에너지를 활용해 주세요.",
          },
        ],
      },
    ],
    resultNote:
      "번아웃은 누적되는 과정입니다. '보통' 이상인 영역이 있다면 일상에서 의도적인 회복 루틴을 만들어보세요.",
  },
  {
    slug: "self-efficacy-test",
    title: "자기효능감 테스트 — 3영역 진단",
    intro:
      "일반적, 사회적, 과제 수행 세 가지 영역에서 자기효능감 수준을 파악합니다. 자신의 능력에 대한 믿음을 점검해 보세요.",
    instructions:
      "평소 자신의 행동과 생각을 떠올리며 솔직하게 응답해 주세요. 잘하고 싶은 모습이 아닌, 실제 느끼는 정도에 가깝게 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // GENERAL 축 - 5문항
      {
        id: "general1",
        prompt: "예상치 못한 상황이 닥쳐도 적절히 대처할 수 있다고 생각합니다.",
        dimension: "GENERAL",
      },
      {
        id: "general2",
        prompt: "어려운 문제에 부딪혀도 여러 가지 해결책을 찾아낼 수 있습니다.",
        dimension: "GENERAL",
      },
      {
        id: "general3",
        prompt: "새로운 도전이 주어지면 두렵기보다 해볼 만하다고 느낍니다.",
        dimension: "GENERAL",
        helper: "최근 경험을 떠올려 주세요.",
      },
      {
        id: "general4",
        prompt: "실패를 경험해도 다시 시도할 수 있는 힘이 있다고 느낍니다.",
        dimension: "GENERAL",
      },
      {
        id: "general5",
        prompt: "대부분의 상황에서 나는 잘 해낼 수 있다고 믿습니다.",
        dimension: "GENERAL",
      },
      // SOCIAL 축 - 5문항
      {
        id: "se_social1",
        prompt: "낯선 사람과도 자연스럽게 대화를 시작할 수 있습니다.",
        dimension: "SOCIAL",
      },
      {
        id: "se_social2",
        prompt: "모임이나 회의에서 내 의견을 자신 있게 말할 수 있습니다.",
        dimension: "SOCIAL",
      },
      {
        id: "se_social3",
        prompt: "갈등 상황에서도 상대방과 원만하게 소통할 수 있다고 생각합니다.",
        dimension: "SOCIAL",
      },
      {
        id: "se_social4",
        prompt: "도움이 필요할 때 주변 사람에게 편하게 요청할 수 있습니다.",
        dimension: "SOCIAL",
        helper: "실제로 도움을 요청했던 경험을 떠올려 보세요.",
      },
      {
        id: "se_social5",
        prompt: "새로운 집단에서도 비교적 빨리 적응하고 관계를 맺을 수 있습니다.",
        dimension: "SOCIAL",
      },
      // TASK 축 - 5문항
      {
        id: "task1",
        prompt: "복잡한 과제도 단계적으로 나누면 해낼 수 있다고 생각합니다.",
        dimension: "TASK",
      },
      {
        id: "task2",
        prompt: "마감 기한이 촉박해도 필요한 결과물을 완성할 수 있습니다.",
        dimension: "TASK",
      },
      {
        id: "task3",
        prompt: "새로운 기술이나 도구를 배워야 할 때 잘 해낼 수 있다고 느낍니다.",
        dimension: "TASK",
      },
      {
        id: "task4",
        prompt: "동시에 여러 과제를 처리해야 할 때도 잘 관리할 수 있습니다.",
        dimension: "TASK",
        helper: "멀티태스킹 상황을 떠올려 보세요.",
      },
      {
        id: "task5",
        prompt: "내가 잘 모르는 분야의 과제라도 학습하면 해결할 수 있다고 믿습니다.",
        dimension: "TASK",
      },
    ],
    dimensions: [
      {
        id: "GENERAL",
        label: "일반적 자기효능감",
        description: "전반적인 도전 대처 능력 믿음",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "전반적인 자신감이 부족한 상태입니다. 작은 목표부터 달성해 가며 성공 경험을 쌓아 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "상황에 따라 자신감이 달라집니다. 성공 경험을 기록하고 정기적으로 돌아보는 습관이 도움이 됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "도전에 대한 자신감이 높습니다. 이 에너지를 활용해 더 큰 목표에 도전해 보세요.",
          },
        ],
      },
      {
        id: "SOCIAL",
        label: "사회적 자기효능감",
        description: "대인관계에서의 자신감",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "대인관계에서 자신감이 부족합니다. 소규모 모임부터 참여하며 사회적 경험을 넓혀 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "친숙한 관계에서는 편안하지만 새로운 환경에서 위축될 수 있습니다. 의도적인 소통 연습이 도움이 됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "사회적 상황에서 자신감이 높습니다. 이 강점을 활용해 리더십이나 멘토링 역할도 시도해 보세요.",
          },
        ],
      },
      {
        id: "TASK",
        label: "과제 자기효능감",
        description: "구체적 과제 수행 능력에 대한 믿음",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "과제 수행에 대한 자신감이 낮습니다. 과제를 작은 단위로 나누고 하나씩 완료하는 연습을 해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "익숙한 과제는 잘 수행하지만 새로운 과제에서 불안감을 느낄 수 있습니다. 학습 계획을 세우면 도움이 됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "과제 수행에 대한 자신감이 높습니다. 더 복잡하고 도전적인 과제에도 적극적으로 임해 보세요.",
          },
        ],
      },
    ],
    resultNote:
      "자기효능감은 경험을 통해 강화됩니다. 작은 성공 경험을 의도적으로 쌓아가는 것이 핵심입니다.",
  },
  {
    slug: "focus-pattern-check",
    title: "집중력 패턴 진단 — 3영역 분석",
    intro:
      "지속적, 선택적, 전환적 집중력 세 가지 패턴을 통해 나의 집중 특성을 파악합니다.",
    instructions:
      "최근 2주간의 일상과 업무 경험을 떠올리며 응답해 주세요. 특별한 상황이 아닌 평소 패턴에 맞게 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // SUSTAIN 축 - 5문항
      {
        id: "sustain1",
        prompt: "한 가지 일에 30분 이상 몰입할 수 있습니다.",
        dimension: "SUSTAIN",
      },
      {
        id: "sustain2",
        prompt: "긴 글이나 보고서를 끝까지 집중해서 읽을 수 있습니다.",
        dimension: "SUSTAIN",
      },
      {
        id: "sustain3",
        prompt: "반복적인 작업도 꾸준히 집중력을 유지할 수 있습니다.",
        dimension: "SUSTAIN",
        helper: "단순 반복 업무 경험을 떠올려 보세요.",
      },
      {
        id: "sustain4",
        prompt: "시간이 지나도 작업의 정확도가 크게 떨어지지 않습니다.",
        dimension: "SUSTAIN",
      },
      {
        id: "sustain5",
        prompt: "집중이 필요한 일을 할 때 시간 가는 줄 모를 때가 많습니다.",
        dimension: "SUSTAIN",
      },
      // SELECT 축 - 5문항
      {
        id: "select1",
        prompt: "주변이 시끄러워도 해야 할 일에 집중할 수 있습니다.",
        dimension: "SELECT",
      },
      {
        id: "select2",
        prompt: "스마트폰 알림이 와도 하던 일을 계속 이어갈 수 있습니다.",
        dimension: "SELECT",
      },
      {
        id: "select3",
        prompt: "여러 가지 생각이 떠올라도 지금 할 일에 다시 집중할 수 있습니다.",
        dimension: "SELECT",
      },
      {
        id: "select4",
        prompt: "옆에서 대화가 들려도 내 작업에 방해받지 않는 편입니다.",
        dimension: "SELECT",
        helper: "사무실이나 카페 등의 환경을 떠올려 보세요.",
      },
      {
        id: "select5",
        prompt: "중요한 정보와 덜 중요한 정보를 빠르게 구분할 수 있습니다.",
        dimension: "SELECT",
      },
      // SWITCH 축 - 5문항
      {
        id: "switch1",
        prompt: "하나의 과제에서 다른 과제로 빠르게 전환할 수 있습니다.",
        dimension: "SWITCH",
      },
      {
        id: "switch2",
        prompt: "예상치 못한 요청이 들어와도 유연하게 대응할 수 있습니다.",
        dimension: "SWITCH",
      },
      {
        id: "switch3",
        prompt: "회의 후 바로 개인 업무에 집중하는 데 어려움이 없습니다.",
        dimension: "SWITCH",
      },
      {
        id: "switch4",
        prompt: "서로 다른 성격의 업무를 번갈아 해도 효율이 크게 떨어지지 않습니다.",
        dimension: "SWITCH",
        helper: "예를 들어 기획과 분석을 번갈아 하는 상황입니다.",
      },
      {
        id: "switch5",
        prompt: "중단된 일을 다시 시작할 때 빠르게 맥락을 되찾을 수 있습니다.",
        dimension: "SWITCH",
      },
    ],
    dimensions: [
      {
        id: "SUSTAIN",
        label: "지속적 집중",
        description: "한 가지에 오래 집중하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "장시간 집중이 어렵습니다. Pomodoro 기법(25분 집중 + 5분 휴식)부터 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 집중은 가능하지만 지속시간이 불안정합니다. 집중 환경을 최적화하면 개선될 수 있습니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "장시간 몰입이 가능합니다. 이 강점을 살려 깊은 사고가 필요한 업무에 활용해 보세요.",
          },
        ],
      },
      {
        id: "SELECT",
        label: "선택적 집중",
        description: "방해 요소를 걸러내는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "외부 방해에 쉽게 영향을 받습니다. 알림 차단, 조용한 공간 확보 등 환경 통제부터 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "어느 정도 방해를 걸러낼 수 있지만 강한 자극에는 흔들립니다. 집중 모드를 활용해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "방해 요소를 잘 걸러내고 필요한 것에 선택적으로 집중합니다. 복잡한 환경에서도 성과를 낼 수 있습니다.",
          },
        ],
      },
      {
        id: "SWITCH",
        label: "전환적 집중",
        description: "과제 간 유연하게 전환하는 능력",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "과제 전환 시 많은 에너지가 소모됩니다. 유사한 업무를 묶어서 처리하는 배칭(batching) 전략을 써 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 전환은 가능하지만 복잡한 전환에서 효율이 떨어집니다. 전환 시 짧은 리셋 시간을 두면 도움이 됩니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "과제 간 유연한 전환이 가능합니다. 다양한 업무를 동시에 관리해야 하는 역할에 적합합니다.",
          },
        ],
      },
    ],
    resultNote:
      "집중력은 근육과 같아 훈련할 수 있습니다. 자신의 집중 패턴을 이해하고 맞춤 전략을 세워보세요.",
  },
  {
    slug: "sleep-health-check",
    title: "수면 건강 체크 — 3영역 진단",
    intro:
      "수면의 질, 수면 습관, 일상 영향 세 가지 영역을 통해 수면 건강 상태를 점검합니다.",
    instructions:
      "최근 2주간의 수면 경험을 떠올리며 응답해 주세요. 특별히 좋거나 나빴던 날이 아닌, 평균적인 상태를 기준으로 선택해 주세요.",
    scale: defaultScale,
    questions: [
      // QUALITY 축 - 4문항
      {
        id: "quality1",
        prompt: "잠에서 깨면 개운하고 충분히 잤다는 느낌이 듭니다.",
        dimension: "QUALITY",
      },
      {
        id: "quality2",
        prompt: "잠들면 중간에 깨지 않고 아침까지 숙면합니다.",
        dimension: "QUALITY",
      },
      {
        id: "quality3",
        prompt: "꿈을 거의 꾸지 않거나, 꿔도 수면에 방해가 되지 않습니다.",
        dimension: "QUALITY",
        helper: "악몽이나 생생한 꿈으로 수면이 방해되는 경험을 떠올려 보세요.",
      },
      {
        id: "quality4",
        prompt: "잠자리에 누우면 20분 이내에 잠이 드는 편입니다.",
        dimension: "QUALITY",
      },
      // HABIT 축 - 4문항
      {
        id: "habit1",
        prompt: "매일 비슷한 시간에 잠들고 비슷한 시간에 일어납니다.",
        dimension: "HABIT",
      },
      {
        id: "habit2",
        prompt: "잠들기 전 1시간 이내에는 스마트폰이나 PC 사용을 줄입니다.",
        dimension: "HABIT",
      },
      {
        id: "habit3",
        prompt: "카페인 섭취를 오후 이전으로 제한하고 있습니다.",
        dimension: "HABIT",
      },
      {
        id: "habit4",
        prompt: "수면 환경(온도, 조명, 소음)을 쾌적하게 유지하려고 노력합니다.",
        dimension: "HABIT",
        helper: "침실 환경 관리에 초점을 맞춰 주세요.",
      },
      // IMPACT 축 - 4문항 (reverse scored - 높을수록 나쁨)
      {
        id: "impact1",
        prompt: "낮 동안 졸음 때문에 업무나 활동에 지장을 받습니다.",
        dimension: "IMPACT",
        reverse: true,
      },
      {
        id: "impact2",
        prompt: "수면 부족으로 집중력이 떨어지는 경우가 자주 있습니다.",
        dimension: "IMPACT",
        reverse: true,
      },
      {
        id: "impact3",
        prompt: "피로감 때문에 계획했던 활동을 포기한 적이 있습니다.",
        dimension: "IMPACT",
        reverse: true,
      },
      {
        id: "impact4",
        prompt: "수면 상태가 기분이나 감정에 부정적인 영향을 미칩니다.",
        dimension: "IMPACT",
        reverse: true,
        helper: "수면이 좋지 않은 날의 감정 변화를 떠올려 보세요.",
      },
    ],
    dimensions: [
      {
        id: "QUALITY",
        label: "수면 질",
        description: "수면의 깊이와 개운함",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "수면의 질이 낮은 상태입니다. 수면 환경 개선과 취침 전 루틴을 점검해 보세요. 지속되면 전문 상담을 권장합니다.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "수면의 질이 일정하지 않습니다. 규칙적인 수면 스케줄과 이완 기법을 도입해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "수면의 질이 양호합니다. 현재 수면 패턴을 잘 유지하고 계세요.",
          },
        ],
      },
      {
        id: "HABIT",
        label: "수면 습관",
        description: "규칙적인 수면 패턴 유지",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "수면 습관이 불규칙합니다. 일정한 취침/기상 시간부터 설정하고, 수면 위생 원칙을 하나씩 적용해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 수면 습관은 있으나 개선의 여지가 있습니다. 취침 전 루틴을 정립해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "건강한 수면 습관을 잘 유지하고 있습니다. 이 루틴을 꾸준히 이어가세요.",
          },
        ],
      },
      {
        id: "IMPACT",
        label: "일상 영향",
        description: "수면이 낮 활동에 미치는 영향 (역채점)",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음(양호)",
            description:
              "수면이 일상에 부정적 영향을 거의 주지 않고 있습니다. 현재 상태를 잘 유지하세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통(주의)",
            description:
              "수면 문제가 일상에 간헐적으로 영향을 주고 있습니다. 수면 질과 습관 개선을 병행해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음(개선필요)",
            description:
              "수면 문제가 일상 기능에 상당한 영향을 미치고 있습니다. 수면 전문 클리닉 방문을 고려해 보세요.",
          },
        ],
      },
    ],
    resultNote:
      "수면은 심신 건강의 기초입니다. 수면 질이 낮거나 일상 영향이 크다면 수면 위생 개선을 시작해보세요.",
  },
  {
    slug: "happiness-index",
    title: "행복 지수 측정 — 4영역 진단",
    intro:
      "삶의 만족, 긍정 정서, 삶의 의미, 관계 만족 네 가지 영역을 통해 행복 수준을 종합적으로 살펴봅니다.",
    instructions:
      "최근 한 달간의 전반적인 기분과 경험을 떠올리며 응답해 주세요. 특별한 사건이 아닌 평소 느끼는 정도에 가깝게 선택하면 됩니다.",
    scale: defaultScale,
    questions: [
      // LIFE 축 - 5문항
      {
        id: "life1",
        prompt: "전반적으로 나의 삶에 만족합니다.",
        dimension: "LIFE",
      },
      {
        id: "life2",
        prompt: "지금까지의 삶에서 원했던 중요한 것들을 이루었다고 생각합니다.",
        dimension: "LIFE",
      },
      {
        id: "life3",
        prompt: "다시 살더라도 현재와 비슷한 삶을 선택할 것입니다.",
        dimension: "LIFE",
        helper: "삶의 전반적인 방향에 대한 만족도를 떠올려 주세요.",
      },
      {
        id: "life4",
        prompt: "나의 생활 여건은 좋은 편이라고 생각합니다.",
        dimension: "LIFE",
      },
      {
        id: "life5",
        prompt: "현재 내 삶은 이상적인 모습에 가깝습니다.",
        dimension: "LIFE",
      },
      // EMOTION 축 - 5문항
      {
        id: "hp_emotion1",
        prompt: "일상에서 즐거움이나 기쁨을 자주 느낍니다.",
        dimension: "EMOTION",
      },
      {
        id: "hp_emotion2",
        prompt: "유머를 즐기고 자주 웃는 편입니다.",
        dimension: "EMOTION",
      },
      {
        id: "hp_emotion3",
        prompt: "작은 일에서도 감사함을 느끼는 편입니다.",
        dimension: "EMOTION",
      },
      {
        id: "hp_emotion4",
        prompt: "하루를 마무리할 때 긍정적인 기분인 날이 많습니다.",
        dimension: "EMOTION",
        helper: "일주일 중 긍정적인 기분으로 하루를 마감하는 날이 얼마나 되는지 생각해 보세요.",
      },
      {
        id: "hp_emotion5",
        prompt: "미래에 대해 희망적이고 기대되는 마음이 있습니다.",
        dimension: "EMOTION",
      },
      // MEANING 축 - 4문항
      {
        id: "meaning1",
        prompt: "내 삶에는 분명한 목적이나 방향이 있다고 느낍니다.",
        dimension: "MEANING",
      },
      {
        id: "meaning2",
        prompt: "내가 하는 일이나 활동이 의미 있다고 생각합니다.",
        dimension: "MEANING",
      },
      {
        id: "meaning3",
        prompt: "나의 존재가 주변에 긍정적인 영향을 준다고 느낍니다.",
        dimension: "MEANING",
      },
      {
        id: "meaning4",
        prompt: "삶에서 무엇이 중요한지 나만의 기준이 있습니다.",
        dimension: "MEANING",
        helper: "가치관이나 인생 철학에 대해 생각해 보세요.",
      },
      // RELATION 축 - 4문항
      {
        id: "relation1",
        prompt: "가까운 사람들과의 관계에서 행복감을 느낍니다.",
        dimension: "RELATION",
      },
      {
        id: "relation2",
        prompt: "힘들 때 기댈 수 있는 사람이 있습니다.",
        dimension: "RELATION",
      },
      {
        id: "relation3",
        prompt: "사람들과 함께하는 시간이 즐겁고 에너지를 줍니다.",
        dimension: "RELATION",
      },
      {
        id: "relation4",
        prompt: "나를 있는 그대로 받아들여 주는 사람이 있다고 느낍니다.",
        dimension: "RELATION",
        helper: "가족, 친구, 동료 등 누구든 해당됩니다.",
      },
    ],
    dimensions: [
      {
        id: "LIFE",
        label: "삶의 만족",
        description: "전반적인 삶에 대한 만족감",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "삶에 대한 만족도가 낮은 상태입니다. 현재 불만족의 원인을 구체적으로 파악하고, 변화 가능한 부분부터 개선해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "삶에 대해 어느 정도 만족하지만 아쉬운 부분이 있습니다. 감사 일기를 쓰며 긍정적 측면을 인식하는 연습을 해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "삶에 대한 만족도가 높습니다. 이 만족감을 유지하며, 주변 사람들과 긍정적 경험을 나눠 보세요.",
          },
        ],
      },
      {
        id: "EMOTION",
        label: "긍정 정서",
        description: "일상에서 느끼는 긍정적 감정 빈도",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "긍정적 감정을 느끼는 빈도가 낮습니다. 매일 작은 즐거움(산책, 음악, 취미)을 의도적으로 만들어 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "긍정적 감정이 간헐적으로 나타납니다. 즐거운 활동을 루틴화하면 긍정 정서의 빈도를 높일 수 있습니다.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "일상에서 긍정적 감정을 자주 느끼고 있습니다. 이 감정을 음미하고 기록하면 행복감이 더 오래 유지됩니다.",
          },
        ],
      },
      {
        id: "MEANING",
        label: "삶의 의미",
        description: "목적의식과 의미감",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "삶의 목적이나 의미를 찾기 어려운 상태입니다. 자신의 가치관과 강점을 탐색하는 시간을 가져 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "어느 정도 의미감이 있지만 더 깊은 목적의식을 원할 수 있습니다. 봉사활동이나 창작 등 의미 있는 활동을 시도해 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "삶에서 분명한 목적과 의미를 느끼고 있습니다. 이 의미감이 주변 사람들에게도 영감을 줄 수 있습니다.",
          },
        ],
      },
      {
        id: "RELATION",
        label: "관계 만족",
        description: "인간관계에서 느끼는 행복감",
        interpretations: [
          {
            min: 1,
            max: 2.1,
            label: "낮음",
            description:
              "관계에서 만족감이 부족합니다. 신뢰할 수 있는 한 사람과의 관계를 깊이 있게 가꿔 보는 것부터 시작해 보세요.",
          },
          {
            min: 2.1,
            max: 3.7,
            label: "보통",
            description:
              "기본적인 관계 만족은 있지만 더 깊은 연결을 원할 수 있습니다. 진솔한 대화와 함께하는 시간을 늘려 보세요.",
          },
          {
            min: 3.7,
            max: 5.1,
            label: "높음",
            description:
              "관계에서 높은 행복감을 느끼고 있습니다. 이 소중한 관계를 지속적으로 돌보며 유지해 주세요.",
          },
        ],
      },
    ],
    resultNote:
      "행복은 여러 요소가 조화를 이루는 상태입니다. 각 영역의 균형을 살펴보고, 상대적으로 낮은 영역부터 작은 변화를 시도해보세요.",
  },
];

export function getAssessmentBySlug(slug: string) {
  return assessments.find((assessment) => assessment.slug === slug);
}
