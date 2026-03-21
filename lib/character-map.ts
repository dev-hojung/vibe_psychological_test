// Character mapping for all psychological test result profiles
// Each key is "testSlug:profileId" -> CharacterConfig

export type CharacterConfig = {
  emoji: string;
  label: string;
  gradientFrom: string; // hex color
  gradientTo: string;   // hex color
  bgClass: string;      // tailwind gradient class for bg
};

// Map: "testSlug:profileId" -> CharacterConfig
export const CHARACTER_MAP: Record<string, CharacterConfig> = {

  // ── travel-train ──────────────────────────────────────────────────────────
  "travel-train:planner-cat": {
    emoji: "🐱",
    label: "기관사 고양이",
    gradientFrom: "#0EA5E9",
    gradientTo: "#6366F1",
    bgClass: "from-sky-500 to-indigo-500",
  },
  "travel-train:wander-rabbit": {
    emoji: "🐰",
    label: "즉흥 토끼",
    gradientFrom: "#F472B6",
    gradientTo: "#FB923C",
    bgClass: "from-pink-400 to-orange-400",
  },
  "travel-train:foodie-panda": {
    emoji: "🐼",
    label: "미식 판다",
    gradientFrom: "#4ADE80",
    gradientTo: "#22D3EE",
    bgClass: "from-green-400 to-cyan-400",
  },
  "travel-train:explorer-raccoon": {
    emoji: "🦝",
    label: "탐험 너구리",
    gradientFrom: "#F59E0B",
    gradientTo: "#10B981",
    bgClass: "from-amber-400 to-emerald-400",
  },
  "travel-train:healing-bear": {
    emoji: "🐻",
    label: "힐링 곰",
    gradientFrom: "#A78BFA",
    gradientTo: "#34D399",
    bgClass: "from-violet-400 to-emerald-400",
  },

  // ── love-style-test ───────────────────────────────────────────────────────
  "love-style-test:passionate-flame": {
    emoji: "🔥",
    label: "열정의 불꽃",
    gradientFrom: "#EF4444",
    gradientTo: "#F97316",
    bgClass: "from-red-500 to-orange-500",
  },
  "love-style-test:caring-stable": {
    emoji: "🌸",
    label: "안정의 돌봄",
    gradientFrom: "#F9A8D4",
    gradientTo: "#FDE68A",
    bgClass: "from-pink-300 to-yellow-200",
  },
  "love-style-test:independent-partner": {
    emoji: "⭐",
    label: "독립 파트너",
    gradientFrom: "#38BDF8",
    gradientTo: "#818CF8",
    bgClass: "from-sky-400 to-indigo-400",
  },
  "love-style-test:romantic-emotional": {
    emoji: "🦋",
    label: "로맨틱 감성",
    gradientFrom: "#E879F9",
    gradientTo: "#818CF8",
    bgClass: "from-fuchsia-500 to-indigo-400",
  },

  // ── color-psychology ──────────────────────────────────────────────────────
  "color-psychology:red-leader": {
    emoji: "🌋",
    label: "레드 리더",
    gradientFrom: "#DC2626",
    gradientTo: "#F97316",
    bgClass: "from-red-600 to-orange-500",
  },
  "color-psychology:blue-helper": {
    emoji: "🌊",
    label: "블루 조력자",
    gradientFrom: "#2563EB",
    gradientTo: "#06B6D4",
    bgClass: "from-blue-600 to-cyan-500",
  },
  "color-psychology:yellow-communicator": {
    emoji: "☀️",
    label: "옐로우 소통가",
    gradientFrom: "#EAB308",
    gradientTo: "#F97316",
    bgClass: "from-yellow-500 to-orange-400",
  },
  "color-psychology:green-healer": {
    emoji: "🌿",
    label: "그린 치유자",
    gradientFrom: "#16A34A",
    gradientTo: "#10B981",
    bgClass: "from-green-600 to-emerald-400",
  },
  "color-psychology:purple-dreamer": {
    emoji: "🔮",
    label: "퍼플 몽상가",
    gradientFrom: "#7C3AED",
    gradientTo: "#DB2777",
    bgClass: "from-violet-600 to-pink-600",
  },
  "color-psychology:orange-adventurer": {
    emoji: "🧡",
    label: "오렌지 모험가",
    gradientFrom: "#EA580C",
    gradientTo: "#EAB308",
    bgClass: "from-orange-600 to-yellow-500",
  },

  // ── mbti-simple ───────────────────────────────────────────────────────────
  "mbti-simple:istj": {
    emoji: "🦫",
    label: "ISTJ",
    gradientFrom: "#1E40AF",
    gradientTo: "#0E7490",
    bgClass: "from-blue-800 to-cyan-700",
  },
  "mbti-simple:isfj": {
    emoji: "🐘",
    label: "ISFJ",
    gradientFrom: "#BE185D",
    gradientTo: "#9333EA",
    bgClass: "from-pink-700 to-purple-600",
  },
  "mbti-simple:infj": {
    emoji: "🦉",
    label: "INFJ",
    gradientFrom: "#4C1D95",
    gradientTo: "#1E3A5F",
    bgClass: "from-violet-900 to-blue-900",
  },
  "mbti-simple:intj": {
    emoji: "🐦‍⬛",
    label: "INTJ",
    gradientFrom: "#111827",
    gradientTo: "#1E40AF",
    bgClass: "from-gray-900 to-blue-800",
  },
  "mbti-simple:istp": {
    emoji: "🦊",
    label: "ISTP",
    gradientFrom: "#92400E",
    gradientTo: "#B45309",
    bgClass: "from-amber-800 to-amber-600",
  },
  "mbti-simple:isfp": {
    emoji: "🦋",
    label: "ISFP",
    gradientFrom: "#DB2777",
    gradientTo: "#F97316",
    bgClass: "from-pink-600 to-orange-500",
  },
  "mbti-simple:infp": {
    emoji: "🦄",
    label: "INFP",
    gradientFrom: "#7C3AED",
    gradientTo: "#EC4899",
    bgClass: "from-violet-600 to-pink-500",
  },
  "mbti-simple:intp": {
    emoji: "🐙",
    label: "INTP",
    gradientFrom: "#0F766E",
    gradientTo: "#1D4ED8",
    bgClass: "from-teal-700 to-blue-700",
  },
  "mbti-simple:estp": {
    emoji: "🐆",
    label: "ESTP",
    gradientFrom: "#DC2626",
    gradientTo: "#F59E0B",
    bgClass: "from-red-600 to-amber-500",
  },
  "mbti-simple:esfp": {
    emoji: "🦜",
    label: "ESFP",
    gradientFrom: "#F97316",
    gradientTo: "#FBBF24",
    bgClass: "from-orange-500 to-yellow-400",
  },
  "mbti-simple:enfp": {
    emoji: "🌈",
    label: "ENFP",
    gradientFrom: "#F59E0B",
    gradientTo: "#10B981",
    bgClass: "from-amber-500 to-emerald-400",
  },
  "mbti-simple:entp": {
    emoji: "🐺",
    label: "ENTP",
    gradientFrom: "#6366F1",
    gradientTo: "#06B6D4",
    bgClass: "from-indigo-500 to-cyan-500",
  },
  "mbti-simple:estj": {
    emoji: "🦁",
    label: "ESTJ",
    gradientFrom: "#B45309",
    gradientTo: "#DC2626",
    bgClass: "from-amber-600 to-red-600",
  },
  "mbti-simple:esfj": {
    emoji: "🐬",
    label: "ESFJ",
    gradientFrom: "#0891B2",
    gradientTo: "#059669",
    bgClass: "from-cyan-600 to-emerald-600",
  },
  "mbti-simple:enfj": {
    emoji: "🦅",
    label: "ENFJ",
    gradientFrom: "#D97706",
    gradientTo: "#7C3AED",
    bgClass: "from-amber-500 to-violet-600",
  },
  "mbti-simple:entj": {
    emoji: "🐉",
    label: "ENTJ",
    gradientFrom: "#7C3AED",
    gradientTo: "#DC2626",
    bgClass: "from-violet-600 to-red-600",
  },

  // ── communication-style ───────────────────────────────────────────────────
  "communication-style:analyst-communicator": {
    emoji: "🔬",
    label: "분석형 소통가",
    gradientFrom: "#0369A1",
    gradientTo: "#0F766E",
    bgClass: "from-sky-700 to-teal-700",
  },
  "communication-style:empathy-listener": {
    emoji: "💬",
    label: "공감형 리스너",
    gradientFrom: "#EC4899",
    gradientTo: "#F9A8D4",
    bgClass: "from-pink-500 to-pink-300",
  },
  "communication-style:driving-leader": {
    emoji: "🎙️",
    label: "추진형 리더",
    gradientFrom: "#EF4444",
    gradientTo: "#F97316",
    bgClass: "from-red-500 to-orange-500",
  },
  "communication-style:mediator-coordinator": {
    emoji: "🤝",
    label: "조율형 중재자",
    gradientFrom: "#16A34A",
    gradientTo: "#0891B2",
    bgClass: "from-green-600 to-cyan-600",
  },

  // ── money-sense ───────────────────────────────────────────────────────────
  "money-sense:thorough-manager": {
    emoji: "🏦",
    label: "철저한 관리자",
    gradientFrom: "#1D4ED8",
    gradientTo: "#065F46",
    bgClass: "from-blue-700 to-emerald-800",
  },
  "money-sense:strategic-investor": {
    emoji: "📊",
    label: "전략적 투자자",
    gradientFrom: "#D97706",
    gradientTo: "#059669",
    bgClass: "from-amber-600 to-emerald-600",
  },
  "money-sense:emotional-spender": {
    emoji: "🛍️",
    label: "감성적 소비자",
    gradientFrom: "#EC4899",
    gradientTo: "#F97316",
    bgClass: "from-pink-500 to-orange-500",
  },
  "money-sense:balanced-pragmatist": {
    emoji: "⚖️",
    label: "균형 실용주의자",
    gradientFrom: "#0891B2",
    gradientTo: "#7C3AED",
    bgClass: "from-cyan-600 to-violet-600",
  },

  // ── conflict-style ────────────────────────────────────────────────────────
  "conflict-style:competing": {
    emoji: "⚔️",
    label: "경쟁형",
    gradientFrom: "#DC2626",
    gradientTo: "#7C3AED",
    bgClass: "from-red-600 to-violet-600",
  },
  "conflict-style:collaborating": {
    emoji: "🤝",
    label: "협력형",
    gradientFrom: "#059669",
    gradientTo: "#0891B2",
    bgClass: "from-emerald-600 to-cyan-600",
  },
  "conflict-style:compromising": {
    emoji: "🌀",
    label: "타협형",
    gradientFrom: "#6366F1",
    gradientTo: "#0891B2",
    bgClass: "from-indigo-500 to-cyan-600",
  },
  "conflict-style:accommodating": {
    emoji: "🕊️",
    label: "수용형",
    gradientFrom: "#F9A8D4",
    gradientTo: "#A5F3FC",
    bgClass: "from-pink-300 to-cyan-200",
  },
  "conflict-style:avoiding": {
    emoji: "🏔️",
    label: "회피형",
    gradientFrom: "#94A3B8",
    gradientTo: "#64748B",
    bgClass: "from-slate-400 to-slate-500",
  },

  // ── creativity-type ───────────────────────────────────────────────────────
  "creativity-type:idea-explosion": {
    emoji: "💡",
    label: "아이디어 폭발형",
    gradientFrom: "#FBBF24",
    gradientTo: "#F97316",
    bgClass: "from-yellow-400 to-orange-500",
  },
  "creativity-type:execution-master": {
    emoji: "🔧",
    label: "실행 장인형",
    gradientFrom: "#374151",
    gradientTo: "#0369A1",
    bgClass: "from-gray-700 to-sky-700",
  },
  "creativity-type:vision-designer": {
    emoji: "🎨",
    label: "비전 설계자형",
    gradientFrom: "#7C3AED",
    gradientTo: "#F97316",
    bgClass: "from-violet-600 to-orange-500",
  },
  "creativity-type:analytical-innovator": {
    emoji: "🔭",
    label: "분석 혁신가형",
    gradientFrom: "#0F766E",
    gradientTo: "#1D4ED8",
    bgClass: "from-teal-700 to-blue-700",
  },

  // ── time-management-style ─────────────────────────────────────────────────
  "time-management-style:strategic-planner": {
    emoji: "⏰",
    label: "전략적 플래너",
    gradientFrom: "#1D4ED8",
    gradientTo: "#0F766E",
    bgClass: "from-blue-700 to-teal-700",
  },
  "time-management-style:adaptive-multitasker": {
    emoji: "🎯",
    label: "적응형 멀티태스커",
    gradientFrom: "#F97316",
    gradientTo: "#EAB308",
    bgClass: "from-orange-500 to-yellow-500",
  },
  "time-management-style:focused-executor": {
    emoji: "🔥",
    label: "집중형 실행가",
    gradientFrom: "#DC2626",
    gradientTo: "#7C3AED",
    bgClass: "from-red-600 to-violet-600",
  },
  "time-management-style:free-explorer": {
    emoji: "🌿",
    label: "자유로운 탐험가",
    gradientFrom: "#16A34A",
    gradientTo: "#0891B2",
    bgClass: "from-green-600 to-cyan-600",
  },

  // ── friendship-style ──────────────────────────────────────────────────────
  "friendship-style:social-leader": {
    emoji: "👑",
    label: "소셜 리더",
    gradientFrom: "#D97706",
    gradientTo: "#F97316",
    bgClass: "from-amber-600 to-orange-500",
  },
  "friendship-style:deep-companion": {
    emoji: "💫",
    label: "깊은 동반자",
    gradientFrom: "#7C3AED",
    gradientTo: "#1D4ED8",
    bgClass: "from-violet-600 to-blue-700",
  },
  "friendship-style:wide-harmonizer": {
    emoji: "🌸",
    label: "넓은 조화러",
    gradientFrom: "#EC4899",
    gradientTo: "#F9A8D4",
    bgClass: "from-pink-500 to-pink-300",
  },
  "friendship-style:core-supporter": {
    emoji: "🛡️",
    label: "핵심 조력자",
    gradientFrom: "#065F46",
    gradientTo: "#1D4ED8",
    bgClass: "from-emerald-800 to-blue-700",
  },

  // ── decision-making-style ─────────────────────────────────────────────────
  "decision-making-style:analytic-strategist": {
    emoji: "🧠",
    label: "분석적 전략가",
    gradientFrom: "#1D4ED8",
    gradientTo: "#0F766E",
    bgClass: "from-blue-700 to-teal-700",
  },
  "decision-making-style:intuitive-actor": {
    emoji: "⚡",
    label: "직관적 행동파",
    gradientFrom: "#EAB308",
    gradientTo: "#EF4444",
    bgClass: "from-yellow-500 to-red-500",
  },
  "decision-making-style:careful-empath": {
    emoji: "💝",
    label: "신중한 공감가",
    gradientFrom: "#DB2777",
    gradientTo: "#9333EA",
    bgClass: "from-pink-600 to-purple-600",
  },
  "decision-making-style:quick-logician": {
    emoji: "🎯",
    label: "빠른 논리가",
    gradientFrom: "#0891B2",
    gradientTo: "#6366F1",
    bgClass: "from-cyan-600 to-indigo-500",
  },

  // ── pet-personality-match ─────────────────────────────────────────────────
  "pet-personality-match:energetic-dog": {
    emoji: "🐶",
    label: "활동적 강아지",
    gradientFrom: "#D97706",
    gradientTo: "#F97316",
    bgClass: "from-amber-600 to-orange-500",
  },
  "pet-personality-match:independent-cat": {
    emoji: "🐱",
    label: "독립적 고양이",
    gradientFrom: "#7C3AED",
    gradientTo: "#EC4899",
    bgClass: "from-violet-600 to-pink-500",
  },
  "pet-personality-match:relaxed-turtle": {
    emoji: "🐢",
    label: "느긋한 거북이",
    gradientFrom: "#16A34A",
    gradientTo: "#0F766E",
    bgClass: "from-green-600 to-teal-700",
  },
  "pet-personality-match:social-parrot": {
    emoji: "🦜",
    label: "사교적 앵무새",
    gradientFrom: "#DC2626",
    gradientTo: "#EAB308",
    bgClass: "from-red-600 to-yellow-500",
  },
  "pet-personality-match:loyal-rabbit": {
    emoji: "🐰",
    label: "충실한 토끼",
    gradientFrom: "#F9A8D4",
    gradientTo: "#C4B5FD",
    bgClass: "from-pink-300 to-violet-300",
  },
  "pet-personality-match:free-fish": {
    emoji: "🐠",
    label: "자유로운 물고기",
    gradientFrom: "#0891B2",
    gradientTo: "#06B6D4",
    bgClass: "from-cyan-600 to-cyan-400",
  },

  // ── social-energy ─────────────────────────────────────────────────────────
  "social-energy:energy-station": {
    emoji: "☀️",
    label: "에너지 충전소",
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
    bgClass: "from-amber-500 to-red-500",
  },
  "social-energy:quiet-observer": {
    emoji: "🌙",
    label: "조용한 관찰자",
    gradientFrom: "#1E3A5F",
    gradientTo: "#4C1D95",
    bgClass: "from-blue-900 to-violet-900",
  },
  "social-energy:selective-socializer": {
    emoji: "⚡",
    label: "선택적 사교가",
    gradientFrom: "#7C3AED",
    gradientTo: "#0891B2",
    bgClass: "from-violet-600 to-cyan-600",
  },
  "social-energy:stable-connector": {
    emoji: "🌿",
    label: "안정적 연결자",
    gradientFrom: "#059669",
    gradientTo: "#0891B2",
    bgClass: "from-emerald-600 to-cyan-600",
  },
};

export function getCharacter(testSlug: string, profileId: string): CharacterConfig {
  return (
    CHARACTER_MAP[`${testSlug}:${profileId}`] ?? {
      emoji: "✨",
      label: "",
      gradientFrom: "#6366f1",
      gradientTo: "#a855f7",
      bgClass: "from-indigo-500 to-purple-500",
    }
  );
}
