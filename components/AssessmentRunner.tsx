"use client";

import { useState, useMemo } from "react";
import type { Assessment } from "@/lib/assessments";

type Props = { assessment: Assessment };

/* ── Theme config per assessment ── */
type AssessmentTheme = {
  gradient: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  icon: string;
  dimIcon: string;
  overallLevels: {
    low: { label: string; description: string; tips: string[] };
    mid: { label: string; description: string; tips: string[] };
    high: { label: string; description: string; tips: string[] };
  };
};

const themes: Record<string, AssessmentTheme> = {
  "stress-balance-check": {
    gradient: "from-rose-500 to-orange-500",
    accentColor: "rose",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    icon: "🧘",
    dimIcon: "💆",
    overallLevels: {
      low: {
        label: "안정 상태",
        description: "스트레스가 잘 관리되고 있어요. 현재 생활 패턴을 유지하면서 가끔 자가 점검을 해보세요.",
        tips: ["현재 루틴을 꾸준히 유지하세요", "주기적인 자가 점검으로 변화를 감지하세요", "주변 사람들의 스트레스 관리도 도와주세요"],
      },
      mid: {
        label: "주의 필요",
        description: "일부 영역에서 스트레스 신호가 감지됩니다. 집중적인 관리가 필요한 영역을 확인하세요.",
        tips: ["스트레스가 높은 영역부터 개선해보세요", "규칙적인 운동과 충분한 수면을 확보하세요", "신뢰할 수 있는 사람과 대화를 나눠보세요"],
      },
      high: {
        label: "적극적 관리 필요",
        description: "여러 영역에서 강한 스트레스 신호가 나타나고 있습니다. 전문가 상담을 권장합니다.",
        tips: ["전문 상담사와 상담을 고려해보세요", "당장 줄일 수 있는 스트레스 요인을 찾아보세요", "무리하지 말고 충분한 휴식을 취하세요"],
      },
    },
  },
  "career-values-assessment": {
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "blue",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    icon: "🧭",
    dimIcon: "📊",
    overallLevels: {
      low: {
        label: "가치관 탐색 초기",
        description: "아직 커리어 가치관이 명확하게 형성되지 않았을 수 있어요. 다양한 경험을 통해 자신만의 기준을 찾아보세요.",
        tips: ["다양한 직무 경험을 시도해보세요", "롤모델의 커리어 패스를 참고해보세요", "자기 성찰 일기를 써보세요"],
      },
      mid: {
        label: "가치관 형성 중",
        description: "어느 정도 방향성이 잡혀가고 있어요. 높은 점수의 가치를 중심으로 커리어를 설계해보세요.",
        tips: ["높은 가치 항목에 맞는 직무를 탐색하세요", "멘토링을 통해 방향성을 구체화하세요", "현재 업무에서 가치를 실현할 방법을 찾아보세요"],
      },
      high: {
        label: "뚜렷한 가치관",
        description: "커리어 가치관이 명확하게 형성되어 있어요. 이 기준을 바탕으로 의사결정을 내려보세요.",
        tips: ["가치관에 맞는 장기 목표를 세워보세요", "가치관을 실현할 수 있는 환경을 선택하세요", "주기적으로 가치관의 변화를 점검하세요"],
      },
    },
  },
  "attachment-style-check": {
    gradient: "from-pink-500 to-purple-500",
    accentColor: "pink",
    accentBg: "bg-pink-50",
    accentText: "text-pink-600",
    icon: "💝",
    dimIcon: "🤝",
    overallLevels: {
      low: {
        label: "안정적 애착",
        description: "관계에서 안정감을 느끼고 건강한 유대를 형성하고 있어요.",
        tips: ["현재의 건강한 관계 패턴을 유지하세요", "파트너와 열린 소통을 지속하세요", "자신의 감정을 솔직하게 표현하세요"],
      },
      mid: {
        label: "혼합 애착",
        description: "상황에 따라 다른 애착 패턴이 나타날 수 있어요. 자신의 패턴을 인식하는 것이 첫걸음입니다.",
        tips: ["불안할 때 자신의 반응 패턴을 관찰해보세요", "안전한 관계에서 연습해보세요", "전문 서적이나 워크숍을 활용해보세요"],
      },
      high: {
        label: "불안정 애착",
        description: "관계에서 불안감이나 회피 경향이 강하게 나타나고 있어요. 전문가의 도움으로 개선할 수 있습니다.",
        tips: ["전문 상담을 통해 애착 패턴을 이해해보세요", "자기 돌봄 시간을 확보하세요", "작은 신뢰 경험을 쌓아가세요"],
      },
    },
  },
  "leadership-style-diagnosis": {
    gradient: "from-amber-500 to-orange-600",
    accentColor: "amber",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    icon: "👑",
    dimIcon: "🎯",
    overallLevels: {
      low: {
        label: "리더십 개발 초기",
        description: "리더십 역량을 키워나갈 기회가 많아요. 작은 프로젝트부터 리더 역할을 경험해보세요.",
        tips: ["소규모 프로젝트 리더를 맡아보세요", "리더십 관련 책이나 강의를 접해보세요", "롤모델 리더를 관찰하고 배워보세요"],
      },
      mid: {
        label: "성장하는 리더",
        description: "기본적인 리더십 역량을 갖추고 있어요. 강점을 더 발전시키고 약점을 보완해보세요.",
        tips: ["강점 스타일을 더 강화해보세요", "약점 영역에 대한 피드백을 구해보세요", "다양한 리더십 상황을 경험해보세요"],
      },
      high: {
        label: "역량 있는 리더",
        description: "다양한 리더십 역량이 고르게 발달되어 있어요. 팀과 조직에 긍정적인 영향을 주고 있습니다.",
        tips: ["후배 리더를 멘토링해보세요", "새로운 리더십 도전을 시도해보세요", "팀의 성장을 위한 환경을 만들어보세요"],
      },
    },
  },
  "learning-habits-check": {
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "teal",
    accentBg: "bg-teal-50",
    accentText: "text-teal-600",
    icon: "📚",
    dimIcon: "🧠",
    overallLevels: {
      low: {
        label: "학습 습관 형성 필요",
        description: "체계적인 학습 루틴이 아직 자리잡지 않았어요. 작은 습관부터 만들어보세요.",
        tips: ["하루 15분 집중 학습부터 시작하세요", "학습 환경을 정리하세요", "구체적인 학습 목표를 세워보세요"],
      },
      mid: {
        label: "기본 학습 습관 보유",
        description: "기본적인 학습 패턴이 형성되어 있어요. 더 효율적인 방법을 찾아 발전시켜보세요.",
        tips: ["자신만의 최적 학습 시간대를 찾아보세요", "다양한 학습 방법을 실험해보세요", "학습 기록을 남겨 성장을 추적하세요"],
      },
      high: {
        label: "우수한 학습 습관",
        description: "효과적인 학습 전략을 잘 활용하고 있어요. 꾸준히 유지하며 심화해보세요.",
        tips: ["다른 사람에게 가르치며 더 깊이 학습하세요", "새로운 분야로 학습을 확장해보세요", "학습 커뮤니티에 참여해보세요"],
      },
    },
  },
  "self-esteem-check": {
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
    accentBg: "bg-violet-50",
    accentText: "text-violet-600",
    icon: "✨",
    dimIcon: "💎",
    overallLevels: {
      low: {
        label: "자존감 강화 필요",
        description: "스스로를 충분히 인정하지 못하고 있을 수 있어요. 작은 성취부터 인정해보세요.",
        tips: ["매일 감사 일기를 써보세요", "자신을 비교하는 습관을 줄여보세요", "전문 상담을 통해 자기 이해를 깊이 해보세요"],
      },
      mid: {
        label: "보통 수준의 자존감",
        description: "상황에 따라 자존감이 흔들리기도 해요. 자기 수용 연습을 통해 더 안정시킬 수 있어요.",
        tips: ["자신의 강점 목록을 작성해보세요", "부정적 자기 대화를 인식하고 바꿔보세요", "건강한 경계를 설정하는 연습을 하세요"],
      },
      high: {
        label: "건강한 자존감",
        description: "자신에 대한 긍정적인 인식과 수용이 잘 이루어지고 있어요.",
        tips: ["건강한 자존감을 유지하는 루틴을 지속하세요", "다른 사람의 자존감도 높여주세요", "새로운 도전을 통해 자신감을 넓혀보세요"],
      },
    },
  },
  "eq-test": {
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    icon: "🫀",
    dimIcon: "💭",
    overallLevels: {
      low: {
        label: "감정 지능 개발 단계",
        description: "감정을 인식하고 다루는 능력을 키울 여지가 많아요. 연습을 통해 크게 향상시킬 수 있습니다.",
        tips: ["감정 일기를 매일 써보세요", "타인의 감정에 관심을 기울여 보세요", "감정 관련 서적이나 강의를 참고해보세요"],
      },
      mid: {
        label: "보통 수준의 감정 지능",
        description: "기본적인 감정 인식과 조절 능력을 가지고 있어요. 공감 능력을 더 발전시켜보세요.",
        tips: ["적극적 경청 연습을 해보세요", "갈등 상황에서 감정을 먼저 인식해보세요", "다양한 관점에서 상황을 바라보는 연습을 하세요"],
      },
      high: {
        label: "높은 감정 지능",
        description: "감정을 잘 이해하고 효과적으로 활용하고 있어요. 주변 관계에 긍정적인 영향을 주고 있습니다.",
        tips: ["감정 코칭이나 멘토링에 도전해보세요", "팀의 감정적 건강을 이끌어보세요", "더 깊은 공감 능력을 개발해보세요"],
      },
    },
  },
  "burnout-check": {
    gradient: "from-red-500 to-rose-600",
    accentColor: "red",
    accentBg: "bg-red-50",
    accentText: "text-red-600",
    icon: "🔥",
    dimIcon: "⚡",
    overallLevels: {
      low: {
        label: "건강한 에너지 수준",
        description: "번아웃 위험이 낮아요. 현재의 워라밸을 잘 유지하고 있습니다.",
        tips: ["현재 생활 패턴을 유지하세요", "정기적으로 에너지 레벨을 점검하세요", "동료의 번아웃 신호에도 관심을 기울여보세요"],
      },
      mid: {
        label: "번아웃 주의",
        description: "일부 영역에서 소진 신호가 보이고 있어요. 지금 관리하면 회복할 수 있습니다.",
        tips: ["업무 우선순위를 재정리하세요", "확실한 퇴근 후 루틴을 만드세요", "주 1회 이상 완전한 휴식을 가지세요"],
      },
      high: {
        label: "번아웃 위험",
        description: "심각한 소진 상태에 가까워요. 즉각적인 휴식과 전문가 상담을 강력히 권합니다.",
        tips: ["가능하면 즉시 휴가를 계획하세요", "전문 상담을 예약하세요", "업무량 조정을 상사와 논의하세요"],
      },
    },
  },
  "self-efficacy-test": {
    gradient: "from-sky-500 to-blue-600",
    accentColor: "sky",
    accentBg: "bg-sky-50",
    accentText: "text-sky-600",
    icon: "💪",
    dimIcon: "🚀",
    overallLevels: {
      low: {
        label: "자기효능감 강화 필요",
        description: "자신의 능력에 대한 확신을 키워나갈 필요가 있어요. 작은 성공 경험이 큰 변화를 만듭니다.",
        tips: ["달성 가능한 작은 목표부터 세워보세요", "과거 성공 경험을 떠올려보세요", "자기 격려 습관을 만들어보세요"],
      },
      mid: {
        label: "보통 수준의 자기효능감",
        description: "기본적인 자신감은 있지만, 도전적인 상황에서 흔들릴 수 있어요.",
        tips: ["점진적으로 도전 난이도를 높여보세요", "성공 경험을 기록하고 돌아보세요", "역할 모델을 참고해보세요"],
      },
      high: {
        label: "높은 자기효능감",
        description: "어려운 상황에서도 자신감 있게 대처할 수 있어요. 이 강점을 다양한 영역에 활용해보세요.",
        tips: ["새로운 분야에 도전해보세요", "다른 사람의 자기효능감 향상을 도와주세요", "더 큰 목표에 도전해보세요"],
      },
    },
  },
  "focus-pattern-check": {
    gradient: "from-indigo-500 to-violet-600",
    accentColor: "indigo",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    icon: "🎯",
    dimIcon: "🔍",
    overallLevels: {
      low: {
        label: "집중력 개선 필요",
        description: "집중을 유지하기 어려운 상황이에요. 환경 개선과 습관 변화가 도움이 됩니다.",
        tips: ["디지털 디톡스 시간을 만들어보세요", "포모도로 기법을 활용해보세요", "작업 환경의 방해 요소를 제거하세요"],
      },
      mid: {
        label: "보통 수준의 집중력",
        description: "기본적인 집중은 가능하지만, 지속 시간과 깊이를 더 발전시킬 수 있어요.",
        tips: ["최적의 집중 시간대를 파악하세요", "멀티태스킹을 줄여보세요", "집중 시간을 점진적으로 늘려보세요"],
      },
      high: {
        label: "우수한 집중력",
        description: "높은 수준의 집중력을 유지하고 있어요. 이 능력을 활용해 더 깊은 몰입을 경험해보세요.",
        tips: ["딥워크 시간을 확보하세요", "창의적 활동에 집중력을 활용해보세요", "집중력 유지 노하우를 공유해보세요"],
      },
    },
  },
  "sleep-health-check": {
    gradient: "from-slate-600 to-indigo-800",
    accentColor: "indigo",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    icon: "🌙",
    dimIcon: "😴",
    overallLevels: {
      low: {
        label: "수면 건강 위험",
        description: "수면의 질이 많이 저하되어 있어요. 수면 습관 개선이 시급합니다.",
        tips: ["취침 1시간 전 스마트폰 사용을 줄이세요", "규칙적인 취침/기상 시간을 정하세요", "수면 전문의 상담을 고려해보세요"],
      },
      mid: {
        label: "수면 관리 필요",
        description: "수면 환경이나 습관에서 개선할 부분이 있어요. 작은 변화가 큰 차이를 만듭니다.",
        tips: ["침실 온도와 조명을 최적화하세요", "카페인 섭취 시간을 조절하세요", "이완 루틴을 만들어보세요"],
      },
      high: {
        label: "건강한 수면",
        description: "양질의 수면을 취하고 있어요. 현재의 좋은 수면 습관을 유지하세요.",
        tips: ["현재 수면 루틴을 꾸준히 유지하세요", "계절 변화에 맞춰 수면 환경을 조절하세요", "스트레스 관리로 수면 질을 보호하세요"],
      },
    },
  },
  "happiness-index": {
    gradient: "from-yellow-400 to-orange-500",
    accentColor: "amber",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    icon: "☀️",
    dimIcon: "🌈",
    overallLevels: {
      low: {
        label: "행복감 충전 필요",
        description: "현재 행복감이 낮은 상태에요. 작은 기쁨을 찾는 것부터 시작해보세요.",
        tips: ["감사 일기를 매일 3가지씩 써보세요", "좋아하는 활동에 시간을 투자하세요", "사회적 연결을 강화해보세요"],
      },
      mid: {
        label: "보통 수준의 행복감",
        description: "일상에서 적당한 만족감을 느끼고 있어요. 더 높은 행복을 위한 작은 변화를 시도해보세요.",
        tips: ["새로운 취미나 경험을 시도해보세요", "의미 있는 관계에 투자하세요", "자기 성장 활동에 참여해보세요"],
      },
      high: {
        label: "높은 행복감",
        description: "삶에 대한 만족도가 높고 긍정적인 에너지를 가지고 있어요!",
        tips: ["행복의 원천을 의식적으로 유지하세요", "주변 사람들과 긍정 에너지를 나누세요", "더 큰 의미와 목적을 탐색해보세요"],
      },
    },
  },
  "inner-child-check": {
    gradient: "from-purple-400 to-pink-400",
    accentColor: "purple",
    accentBg: "bg-purple-50",
    accentText: "text-purple-600",
    icon: "🧸",
    dimIcon: "🌈",
    overallLevels: {
      low: {
        label: "내면 아이 안정",
        description: "내면의 세 아이가 비교적 건강한 상태입니다. 현재의 자기돌봄을 유지하세요.",
        tips: ["자유로운 놀이 시간을 꾸준히 가지세요", "감정 표현을 억누르지 마세요", "자신을 있는 그대로 수용하는 연습을 하세요"],
      },
      mid: {
        label: "부분적 돌봄 필요",
        description: "일부 내면 아이에게 관심이 필요합니다. 높은 점수의 영역을 우선 돌봐주세요.",
        tips: ["상처받은 내면 아이에게 따뜻한 말을 건네보세요", "과도한 적응 대신 자기 욕구를 표현해보세요", "감정 일기를 써보세요"],
      },
      high: {
        label: "적극적 돌봄 필요",
        description: "내면 아이들이 많은 돌봄을 필요로 합니다. 전문 상담을 고려해주세요.",
        tips: ["전문 상담사와 내면 아이 작업을 시작해보세요", "자기 비판을 멈추고 자기 연민을 연습하세요", "안전한 환경에서 감정을 표현하는 시간을 가지세요"],
      },
    },
  },
  "emotional-resilience": {
    gradient: "from-teal-500 to-cyan-500",
    accentColor: "teal",
    accentBg: "bg-teal-50",
    accentText: "text-teal-600",
    icon: "🛡️",
    dimIcon: "💪",
    overallLevels: {
      low: {
        label: "회복력 취약",
        description: "감정 회복에 어려움을 겪고 있습니다. 기본적인 감정 조절 훈련부터 시작해보세요.",
        tips: ["호흡법과 마인드풀니스를 매일 연습하세요", "충동적 행동 대신 10초 멈춤 규칙을 적용하세요", "작은 성공 경험을 기록하며 긍정성을 키우세요"],
      },
      mid: {
        label: "보통 수준의 회복력",
        description: "기본적인 회복력은 있지만 강한 스트레스에 취약할 수 있습니다.",
        tips: ["자신만의 감정 회복 루틴을 강화하세요", "감정 일기를 통해 패턴을 파악하세요", "긍정적 리프레이밍 연습을 해보세요"],
      },
      high: {
        label: "높은 회복탄력성",
        description: "감정을 건강하게 다루고 빠르게 회복하는 능력이 뛰어납니다.",
        tips: ["이 능력을 유지하면서 주변에도 정서적 지지를 나눠주세요", "새로운 도전으로 회복력을 더 키워보세요", "멘토 역할을 통해 다른 사람에게도 도움을 주세요"],
      },
    },
  },
  "digital-detox-check": {
    gradient: "from-green-500 to-emerald-500",
    accentColor: "green",
    accentBg: "bg-green-50",
    accentText: "text-green-600",
    icon: "📱",
    dimIcon: "🌿",
    overallLevels: {
      low: {
        label: "건강한 디지털 습관",
        description: "디지털 기기를 건강하게 사용하고 있습니다. 현재 습관을 유지하세요.",
        tips: ["현재의 건강한 디지털 습관을 유지하세요", "주변 사람에게도 좋은 습관을 공유하세요", "오프라인 활동을 계속 즐기세요"],
      },
      mid: {
        label: "디지털 습관 주의",
        description: "디지털 습관이 일상에 부분적 영향을 미치고 있습니다. 의식적 관리가 필요합니다.",
        tips: ["하루 사용 시간을 기록해보세요", "취침 1시간 전 기기를 내려놓는 습관을 들이세요", "오프라인 취미 활동을 하나 시작해보세요"],
      },
      high: {
        label: "디지털 디톡스 필요",
        description: "디지털 기기 의존도가 높고 일상에 상당한 영향을 미치고 있습니다.",
        tips: ["30분 디지털 프리 타임부터 시작하세요", "앱 사용 시간 제한을 설정하세요", "대면 만남과 야외 활동을 의식적으로 늘리세요"],
      },
    },
  },
  "work-life-balance": {
    gradient: "from-sky-500 to-blue-500",
    accentColor: "sky",
    accentBg: "bg-sky-50",
    accentText: "text-sky-600",
    icon: "⚖️",
    dimIcon: "🏠",
    overallLevels: {
      low: {
        label: "워라밸 불균형",
        description: "일과 삶의 균형이 크게 흔들려 있습니다. 시급한 개선이 필요합니다.",
        tips: ["퇴근 후 업무 연락 차단 시간을 정하세요", "주 1회 이상 자기만의 시간을 반드시 확보하세요", "심각한 경우 상사나 HR과 업무량을 상의하세요"],
      },
      mid: {
        label: "부분적 균형",
        description: "기본적인 균형은 유지하고 있지만 일부 영역에서 개선이 필요합니다.",
        tips: ["시간 블록킹으로 개인 시간을 확보하세요", "주간 단위로 에너지 회복 시간을 계획하세요", "만족도가 낮은 영역에 집중적으로 변화를 시도하세요"],
      },
      high: {
        label: "건강한 워라밸",
        description: "일과 삶의 균형이 잘 잡혀 있습니다. 이 상태를 유지하세요.",
        tips: ["현재 패턴을 유지하면서 질적 향상을 추구하세요", "주변 동료에게도 워라밸 노하우를 공유하세요", "정기적인 점검으로 균형을 모니터링하세요"],
      },
    },
  },
  "anger-management": {
    gradient: "from-red-500 to-orange-500",
    accentColor: "red",
    accentBg: "bg-red-50",
    accentText: "text-red-600",
    icon: "🔥",
    dimIcon: "🧊",
    overallLevels: {
      low: {
        label: "분노 관리 어려움",
        description: "분노를 인식하고 표현하고 조절하는 전반적인 영역에서 어려움이 있습니다.",
        tips: ["화가 날 때 10초 멈추는 연습을 시작하세요", "감정 일기로 분노 패턴을 파악하세요", "전문 분노 관리 프로그램을 고려해보세요"],
      },
      mid: {
        label: "부분적 관리 가능",
        description: "기본적인 분노 관리는 되지만 특정 상황에서 어려울 수 있습니다.",
        tips: ["취약한 영역의 대처 전략을 미리 준비하세요", "'나-메시지' 표현법을 연습하세요", "심호흡이나 자리 비우기 등 진정 전략을 익히세요"],
      },
      high: {
        label: "건강한 분노 관리",
        description: "분노를 잘 인식하고 적절히 표현하며 효과적으로 조절하고 있습니다.",
        tips: ["이 능력을 유지하면서 성찰의 깊이를 더해보세요", "주변 사람들의 감정 관리도 도와주세요", "갈등 중재자 역할에 도전해보세요"],
      },
    },
  },
};

const defaultTheme: AssessmentTheme = {
  gradient: "from-indigo-500 to-purple-600",
  accentColor: "indigo",
  accentBg: "bg-indigo-50",
  accentText: "text-indigo-600",
  icon: "📋",
  dimIcon: "📊",
  overallLevels: {
    low: {
      label: "개선 영역 존재",
      description: "일부 영역에서 개선이 필요합니다. 아래 세부 결과를 확인해보세요.",
      tips: ["낮은 점수 영역부터 개선해보세요", "전문가 조언을 참고해보세요", "꾸준한 실천이 중요합니다"],
    },
    mid: {
      label: "보통 수준",
      description: "전반적으로 평균적인 수준을 보이고 있습니다. 강점을 살리고 약점을 보완해보세요.",
      tips: ["강점 영역을 더 발전시키세요", "약점 영역에 집중 투자하세요", "주기적으로 재검사해보세요"],
    },
    high: {
      label: "우수한 수준",
      description: "전반적으로 높은 수준을 보여주고 있습니다. 현재 상태를 유지하며 더 발전시켜보세요.",
      tips: ["현재 패턴을 유지하세요", "다른 사람에게 도움을 나눠보세요", "새로운 도전을 시도해보세요"],
    },
  },
};

/* ── Utility functions ── */
function getBarGradient(pct: number): string {
  if (pct <= 33) return "from-red-400 to-rose-500";
  if (pct <= 66) return "from-amber-400 to-yellow-500";
  return "from-emerald-400 to-green-500";
}

function getLevelEmoji(label: string): string {
  if (label.includes("낮음") || label.includes("낮은") || label.includes("필요") || label.includes("위험") || label.includes("경고")) return "⚠️";
  if (label.includes("높음") || label.includes("높은") || label.includes("우수") || label.includes("안정")) return "✅";
  return "💫";
}

function getDimCardStyle(pct: number): { bg: string; border: string; text: string; badgeBg: string; badgeText: string } {
  if (pct <= 33) return { bg: "bg-rose-50/50", border: "border-rose-200", text: "text-rose-700", badgeBg: "bg-rose-100", badgeText: "text-rose-700" };
  if (pct <= 66) return { bg: "bg-amber-50/50", border: "border-amber-200", text: "text-amber-700", badgeBg: "bg-amber-100", badgeText: "text-amber-700" };
  return { bg: "bg-emerald-50/50", border: "border-emerald-200", text: "text-emerald-700", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700" };
}

/* ── Component ── */
export default function AssessmentRunner({ assessment }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const theme = themes[assessment.slug] || defaultTheme;
  const question = assessment.questions[currentQ];
  const totalQ = assessment.questions.length;
  const progress = Math.round((Object.keys(answers).length / totalQ) * 100);

  const results = useMemo(() => {
    if (!showResult) return null;

    const dimScores: Record<string, { total: number; count: number }> = {};
    assessment.questions.forEach((q) => {
      if (answers[q.id] === undefined) return;
      if (!dimScores[q.dimension]) dimScores[q.dimension] = { total: 0, count: 0 };
      const raw = answers[q.id];
      const score = q.reverse ? assessment.scale.length + 1 - raw : raw;
      dimScores[q.dimension].total += score;
      dimScores[q.dimension].count += 1;
    });

    return assessment.dimensions.map((dim) => {
      const data = dimScores[dim.id] || { total: 0, count: 0 };
      const avg = data.count > 0 ? data.total / data.count : 0;
      const maxScore = assessment.scale.length;
      const pct = Math.round((avg / maxScore) * 100);
      const interp =
        dim.interpretations.find(
          (i) => data.total >= i.min && data.total <= i.max
        ) || dim.interpretations[dim.interpretations.length - 1];

      return { dim, total: data.total, avg: Math.round(avg * 10) / 10, pct, interp };
    });
  }, [showResult, answers, assessment]);

  const overallPct = useMemo(() => {
    if (!results) return 0;
    const sum = results.reduce((acc, r) => acc + r.pct, 0);
    return Math.round(sum / results.length);
  }, [results]);

  const overallLevel = useMemo(() => {
    if (overallPct <= 33) return theme.overallLevels.low;
    if (overallPct <= 66) return theme.overallLevels.mid;
    return theme.overallLevels.high;
  }, [overallPct, theme]);

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    if (currentQ < totalQ - 1) {
      setTimeout(() => setCurrentQ((c) => c + 1), 200);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < totalQ) return;
    setShowResult(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQ(0);
    setShowResult(false);
  };

  const handleShare = async () => {
    if (!results) return;
    const shareUrl = window.location.href.replace(/\/take\/?$/, "");
    const summary = results
      .map((r) => `${r.dim.label} ${r.interp?.label ?? ""}`)
      .join(", ");
    const shareText = `[${assessment.title}] 결과: ${summary}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: assessment.title, text: shareText, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("결과가 복사되었습니다!");
      }
    } catch (e) {
      if ((e as DOMException).name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
          alert("결과가 복사되었습니다!");
        } catch {
          prompt("아래 링크를 복사해주세요:", shareUrl);
        }
      }
    }
  };

  /* ── Result View ── */
  if (showResult && results) {
    // Find strongest and weakest dimensions
    const sorted = [...results].sort((a, b) => b.pct - a.pct);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    return (
      <div className="space-y-6">
        {/* Hero Header */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${theme.gradient} p-6 sm:p-8 text-center text-white animate-fade-in-up`}
        >
          <div className="flex justify-center mb-3">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg text-5xl"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                animation: "bounce 2s infinite",
              }}
            >
              <span className="drop-shadow-md select-none">{theme.icon}</span>
            </div>
          </div>
          <p className="text-sm font-medium text-white/70 mb-1">종합 결과</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
            {overallLevel.label}
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {overallLevel.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2">
            <span className="text-sm font-medium">종합 점수</span>
            <span className="text-lg font-bold">{overallPct}점</span>
          </div>
        </div>

        {/* Dimension Summary Strip */}
        <div
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>{theme.dimIcon}</span>
            영역별 요약
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map(({ dim, pct, interp }) => {
              const style = getDimCardStyle(pct);
              return (
                <div
                  key={dim.id}
                  className={`rounded-lg ${style.bg} border ${style.border} p-3 text-center`}
                >
                  <p className="text-xs text-gray-500 mb-1 truncate">{dim.label}</p>
                  <p className={`text-lg font-bold ${style.text}`}>{pct}%</p>
                  {interp && (
                    <span className={`inline-block mt-1 rounded-full ${style.badgeBg} ${style.badgeText} px-2 py-0.5 text-[10px] font-semibold`}>
                      {interp.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Strongest & Weakest */}
        {results.length >= 2 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm">💪</span>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">가장 높은 영역</p>
              </div>
              <p className="font-bold text-gray-900">{strongest.dim.label}</p>
              <p className="text-sm text-emerald-700 mt-1">{strongest.pct}% · {strongest.interp?.label}</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm">🔑</span>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">개선 포인트</p>
              </div>
              <p className="font-bold text-gray-900">{weakest.dim.label}</p>
              <p className="text-sm text-amber-700 mt-1">{weakest.pct}% · {weakest.interp?.label}</p>
            </div>
          </div>
        )}

        {/* Detailed Dimension Cards */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 text-lg">상세 분석</h3>
          {results.map(({ dim, avg, pct, interp }, idx) => {
            const style = getDimCardStyle(pct);
            return (
              <div
                key={dim.id}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
              >
                {/* Dimension header with colored top bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${getBarGradient(pct)}`}
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      {dim.label}
                    </h4>
                    <div className="flex items-center gap-2">
                      {interp && (
                        <span className={`rounded-full ${style.badgeBg} ${style.badgeText} px-2.5 py-0.5 text-xs font-semibold`}>
                          {getLevelEmoji(interp.label)} {interp.label}
                        </span>
                      )}
                      <span className="text-sm font-bold text-gray-600">{avg}점</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{dim.description}</p>

                  {/* Progress bar */}
                  <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden mb-4">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${getBarGradient(pct)} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  {/* Interpretation */}
                  {interp && (
                    <div className={`rounded-lg ${style.bg} border ${style.border} p-4`}>
                      <p className={`text-sm leading-relaxed ${style.text}`}>
                        {interp.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips Section */}
        <div
          className={`rounded-xl ${theme.accentBg} border border-gray-200 p-5 shadow-sm animate-fade-in-up`}
          style={{ animationDelay: `${0.2 + results.length * 0.08 + 0.1}s` }}
        >
          <h3 className={`font-bold ${theme.accentText} mb-3 flex items-center gap-2`}>
            <span>💡</span>
            맞춤 조언
          </h3>
          <ul className="space-y-2.5">
            {overallLevel.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.accentBg} ${theme.accentText} text-xs font-bold`}>
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Result Note */}
        <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 animate-fade-in-up">
          <p className="text-xs text-gray-500 leading-relaxed">
            📝 {assessment.resultNote}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            다시 하기
          </button>
          <button
            onClick={handleShare}
            className={`flex-1 rounded-xl bg-gradient-to-r ${theme.gradient} py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}
          >
            결과 공유하기
          </button>
        </div>
      </div>
    );
  }

  /* ── Question View ── */
  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">{currentQ + 1} / {totalQ}</span>
          <span className="text-gray-500">{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${theme.gradient} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm min-h-[200px] flex flex-col justify-center">
        <p className="text-lg font-semibold text-gray-900 text-center mb-2">{question.prompt}</p>
        {question.helper && (
          <p className="text-xs text-gray-400 text-center">{question.helper}</p>
        )}
      </div>

      {/* Scale buttons */}
      <div className="flex justify-center gap-2 sm:gap-3">
        {assessment.scale.map((s) => (
          <button
            key={s.value}
            onClick={() => handleAnswer(s.value)}
            className={`flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-3 sm:px-5 sm:py-4 transition-all ${
              answers[question.id] === s.value
                ? "border-indigo-500 bg-indigo-50 shadow-md scale-105"
                : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"
            }`}
          >
            <span
              className={`text-lg sm:text-xl font-bold ${
                answers[question.id] === s.value ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {s.value}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setCurrentQ((c) => Math.max(0, c - 1))}
          disabled={currentQ === 0}
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          이전
        </button>

        {currentQ === totalQ - 1 && Object.keys(answers).length === totalQ ? (
          <button
            onClick={handleSubmit}
            className={`rounded-lg bg-gradient-to-r ${theme.gradient} px-6 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity`}
          >
            결과 보기
          </button>
        ) : (
          <button
            onClick={() => setCurrentQ((c) => Math.min(totalQ - 1, c + 1))}
            disabled={!answers[question.id]}
            className="rounded-lg px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}
