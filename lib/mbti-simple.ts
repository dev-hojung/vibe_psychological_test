// MBTI 간이 성격 유형 테스트 데이터

export type MbtiSimpleOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type MbtiSimpleQuestion = {
  id: string;
  text: string;
  options: MbtiSimpleOption[];
};

export type MbtiSimpleProfile = {
  id: string;
  label: string;
  rule: string;
  caption: string;
  imagePrompt: string;
  imagePath: string;
  description?: string;
  characteristics?: string[];
  personalityStyle?: string;
  compatibleTypes?: string[];
};

export type MbtiSimpleTest = {
  id: string;
  title: string;
  description: string;
  promptTemplateBase: string;
  questions: MbtiSimpleQuestion[];
  resultProfiles: MbtiSimpleProfile[];
  scoringNote: string;
};

export const mbtiSimpleTest: MbtiSimpleTest = {
  id: "mbti-simple",
  title: "MBTI 간이 성격 유형",
  description:
    "E/I · S/N · T/F · J/P 4축 12문항으로 나의 MBTI 성격 유형을 간단히 알아봅니다.",
  promptTemplateBase:
    "kawaii, chibi, sticker, pastel, soft shading, big round eyes, centered, clean white background, personality type theme, ",
  questions: [
    {
      id: "q1",
      text: "에너지를 충전하는 방법은?",
      options: [
        { id: "a", text: "사람들과 어울리며 수다 떨기", scores: { E: 2 } },
        { id: "b", text: "혼자만의 조용한 시간 보내기", scores: { I: 2 } },
      ],
    },
    {
      id: "q2",
      text: "새로운 모임에 갔을 때 나는?",
      options: [
        { id: "a", text: "먼저 다가가서 말을 건다", scores: { E: 2 } },
        { id: "b", text: "누군가 말을 걸어주길 기다린다", scores: { I: 2 } },
      ],
    },
    {
      id: "q3",
      text: "주말에 가장 하고 싶은 것은?",
      options: [
        { id: "a", text: "친구들과 약속 잡기", scores: { E: 1 } },
        { id: "b", text: "집에서 나만의 취미 즐기기", scores: { I: 1 } },
      ],
    },
    {
      id: "q4",
      text: "정보를 받아들일 때 나는?",
      options: [
        { id: "a", text: "구체적인 사실과 데이터를 중시한다", scores: { S: 2 } },
        { id: "b", text: "전체적인 패턴과 가능성을 본다", scores: { N: 2 } },
      ],
    },
    {
      id: "q5",
      text: "길을 설명할 때 나는?",
      options: [
        { id: "a", text: "건물 이름, 거리 등 구체적으로 설명", scores: { S: 2 } },
        { id: "b", text: "대략적인 방향과 느낌으로 설명", scores: { N: 2 } },
      ],
    },
    {
      id: "q6",
      text: "관심이 가는 이야기는?",
      options: [
        { id: "a", text: "실제 경험담과 현실적인 이야기", scores: { S: 1 } },
        { id: "b", text: "상상력을 자극하는 미래 이야기", scores: { N: 1 } },
      ],
    },
    {
      id: "q7",
      text: "친구가 고민을 털어놓았을 때?",
      options: [
        { id: "a", text: "논리적으로 해결 방법을 제시한다", scores: { T: 2 } },
        { id: "b", text: "먼저 감정에 공감하고 위로한다", scores: { F: 2 } },
      ],
    },
    {
      id: "q8",
      text: "중요한 결정을 내릴 때?",
      options: [
        { id: "a", text: "장단점을 분석해 합리적으로 판단", scores: { T: 2 } },
        { id: "b", text: "내 마음과 주변 사람의 감정을 고려", scores: { F: 2 } },
      ],
    },
    {
      id: "q9",
      text: "팀 프로젝트에서 갈등이 생기면?",
      options: [
        { id: "a", text: "원칙과 기준에 따라 공정하게 판단", scores: { T: 1 } },
        { id: "b", text: "팀원들의 감정과 관계를 먼저 살핀다", scores: { F: 1 } },
      ],
    },
    {
      id: "q10",
      text: "여행 계획을 세울 때?",
      options: [
        { id: "a", text: "세부 일정을 미리 정해둔다", scores: { J: 2 } },
        { id: "b", text: "대략적인 방향만 정하고 유연하게", scores: { P: 2 } },
      ],
    },
    {
      id: "q11",
      text: "과제나 업무 처리 스타일은?",
      options: [
        { id: "a", text: "마감 전에 미리미리 끝내놓는다", scores: { J: 2 } },
        { id: "b", text: "마감 직전에 집중력을 발휘한다", scores: { P: 2 } },
      ],
    },
    {
      id: "q12",
      text: "일상생활에서 나는?",
      options: [
        { id: "a", text: "규칙적인 루틴을 선호한다", scores: { J: 1 } },
        { id: "b", text: "그때그때 기분에 따라 움직인다", scores: { P: 1 } },
      ],
    },
  ],
  resultProfiles: [
    {
      id: "istj",
      label: "ISTJ - 청렴결백한 논리주의자",
      rule: "I >= E && S >= N && T >= F && J >= P",
      caption: "신뢰와 책임의 아이콘, 한 번 맡으면 끝까지!",
      imagePrompt: "serious organized character with checklist, neat desk, structured background",
      imagePath: "/mbti/istj.png",
      description:
        "책임감이 강하고 성실한 당신은 맡은 일을 끝까지 해내는 사람입니다. 체계적이고 논리적인 사고로 주변 사람들에게 신뢰를 주며, 전통과 규칙을 중시합니다.",
      characteristics: [
        "강한 책임감과 성실함",
        "체계적인 계획 수립",
        "사실에 근거한 판단",
        "약속과 규칙을 중시",
        "조용하지만 든든한 존재",
      ],
      personalityStyle:
        "묵묵히 자신의 역할을 수행하며, 한 번 결정하면 흔들리지 않는 강단이 있습니다. 실질적이고 현실적인 접근 방식을 선호합니다.",
      compatibleTypes: ["ESFP", "ESTP"],
    },
    {
      id: "isfj",
      label: "ISFJ - 용감한 수호자",
      rule: "I >= E && S >= N && F >= T && J >= P",
      caption: "따뜻한 마음으로 소중한 사람들을 지키는 수호자!",
      imagePrompt: "gentle caring character with shield heart, warm home background",
      imagePath: "/mbti/isfj.png",
      description:
        "따뜻하고 헌신적인 당신은 주변 사람들을 세심하게 돌보는 수호자입니다. 조용하지만 깊은 관심으로 사람들의 마음을 챙기며, 안정적인 환경을 만들어갑니다.",
      characteristics: [
        "세심한 배려와 관찰력",
        "헌신적인 돌봄",
        "안정적인 환경 조성",
        "전통과 가치를 소중히 여김",
        "겸손하고 성실한 태도",
      ],
      personalityStyle:
        "겉으로 드러나지 않지만 누구보다 따뜻한 마음을 가지고 있습니다. 조용히 주변을 살피며 필요한 곳에 도움의 손길을 내밉니다.",
      compatibleTypes: ["ESTP", "ESFP"],
    },
    {
      id: "infj",
      label: "INFJ - 선의의 옹호자",
      rule: "I >= E && N >= S && F >= T && J >= P",
      caption: "깊은 통찰력으로 세상을 더 나은 곳으로 만드는 이상주의자!",
      imagePrompt: "mystical wise character with glowing book, starry background",
      imagePath: "/mbti/infj.png",
      description:
        "깊은 통찰력과 이상주의를 가진 당신은 남다른 직관으로 사람의 마음을 읽습니다. 조용하지만 강한 신념으로 세상에 긍정적 변화를 만들고자 합니다.",
      characteristics: [
        "뛰어난 직관력과 통찰력",
        "강한 이상주의와 신념",
        "깊은 공감 능력",
        "창의적인 비전 제시",
        "소수의 깊은 관계 선호",
      ],
      personalityStyle:
        "겉으로는 조용하지만 내면에 깊은 세계를 품고 있습니다. 사람들의 잠재력을 알아보고 영감을 주는 멘토 같은 존재입니다.",
      compatibleTypes: ["ENFP", "ENTP"],
    },
    {
      id: "intj",
      label: "INTJ - 용의주도한 전략가",
      rule: "I >= E && N >= S && T >= F && J >= P",
      caption: "모든 것을 계획하고 실행하는 전략의 달인!",
      imagePrompt: "strategic character with chess piece, blueprint background, sharp eyes",
      imagePath: "/mbti/intj.png",
      description:
        "독립적이고 전략적인 사고를 가진 당신은 높은 기준과 목표를 향해 나아갑니다. 논리적 분석력과 장기적 비전으로 효율적인 계획을 세우고 실행합니다.",
      characteristics: [
        "전략적 사고와 장기 계획",
        "독립적인 판단력",
        "높은 기준과 완벽주의",
        "효율성 추구",
        "지적 호기심과 깊은 분석력",
      ],
      personalityStyle:
        "혼자서도 충분히 해낼 수 있는 자립심이 강합니다. 감정보다 논리를 우선시하며, 비효율을 참지 못하는 성격입니다.",
      compatibleTypes: ["ENFP", "ENTP"],
    },
    {
      id: "istp",
      label: "ISTP - 만능 재주꾼",
      rule: "I >= E && S >= N && T >= F && P >= J",
      caption: "손재주와 논리로 무엇이든 척척 해결!",
      imagePrompt: "cool handy character with tools, mechanical gadgets background",
      imagePath: "/mbti/istp.png",
      description:
        "차분하고 관찰력이 뛰어난 당신은 논리적 사고와 뛰어난 손재주를 겸비한 실용주의자입니다. 위기 상황에서도 냉정하게 문제를 해결하는 능력이 있습니다.",
      characteristics: [
        "뛰어난 관찰력과 분석력",
        "실용적인 문제 해결",
        "위기 상황에서의 냉정함",
        "자유로운 탐험 정신",
        "논리적이고 효율적인 행동",
      ],
      personalityStyle:
        "말보다 행동으로 보여주는 타입입니다. 필요한 것만 간결하게 처리하며, 불필요한 규칙에 얽매이기 싫어합니다.",
      compatibleTypes: ["ESFJ", "ESTJ"],
    },
    {
      id: "isfp",
      label: "ISFP - 호기심 많은 예술가",
      rule: "I >= E && S >= N && F >= T && P >= J",
      caption: "감성과 자유로움으로 세상을 아름답게!",
      imagePrompt: "artistic character with paintbrush, colorful nature background",
      imagePath: "/mbti/isfp.png",
      description:
        "섬세한 감성과 자유로운 영혼을 가진 당신은 일상 속에서 아름다움을 발견하는 예술가입니다. 조용하지만 깊은 감정으로 자신만의 세계를 표현합니다.",
      characteristics: [
        "섬세한 감성과 미적 감각",
        "자유롭고 유연한 생활 방식",
        "현재를 즐기는 태도",
        "겸손하고 배려심 깊음",
        "내면의 가치를 중시",
      ],
      personalityStyle:
        "남들의 시선보다 자신의 가치관을 따르며, 조용히 자신의 길을 걸어갑니다. 감각적이고 예술적인 표현을 즐깁니다.",
      compatibleTypes: ["ENFJ", "ESFJ"],
    },
    {
      id: "infp",
      label: "INFP - 열정적인 중재자",
      rule: "I >= E && N >= S && F >= T && P >= J",
      caption: "이상과 감성으로 세상을 따뜻하게 만드는 몽상가!",
      imagePrompt: "dreamy character with floating books, rainbow cloud background",
      imagePath: "/mbti/infp.png",
      description:
        "풍부한 상상력과 깊은 감성을 가진 당신은 자신만의 이상 세계를 꿈꾸는 낭만주의자입니다. 진정성 있는 관계와 의미 있는 삶을 추구합니다.",
      characteristics: [
        "풍부한 상상력과 창의성",
        "깊은 감정과 공감 능력",
        "진정성과 진심을 중시",
        "이상주의적 가치관",
        "자기 표현에 대한 열망",
      ],
      personalityStyle:
        "겉으로는 조용하지만 내면은 열정으로 가득합니다. 의미 없는 일에 시간을 쓰기 싫어하며, 자신이 믿는 가치를 위해서는 강한 의지를 보입니다.",
      compatibleTypes: ["ENFJ", "ENTJ"],
    },
    {
      id: "intp",
      label: "INTP - 논리적인 사색가",
      rule: "I >= E && N >= S && T >= F && P >= J",
      caption: "끝없는 호기심으로 세상의 원리를 탐구하는 사색가!",
      imagePrompt: "thinking character with floating equations, galaxy brain background",
      imagePath: "/mbti/intp.png",
      description:
        "논리적 사고와 지적 호기심이 넘치는 당신은 세상의 원리를 탐구하는 사색가입니다. 독창적인 아이디어와 분석력으로 복잡한 문제의 본질을 꿰뚫습니다.",
      characteristics: [
        "끝없는 지적 호기심",
        "독창적인 사고방식",
        "논리적 분석과 이론 구축",
        "독립적인 탐구 정신",
        "객관적이고 중립적인 관점",
      ],
      personalityStyle:
        "머릿속에서 항상 무언가를 분석하고 있습니다. 관습적인 방식에 의문을 제기하며, 자신만의 논리 체계로 세상을 이해합니다.",
      compatibleTypes: ["ENTJ", "ENFJ"],
    },
    {
      id: "estp",
      label: "ESTP - 모험을 즐기는 사업가",
      rule: "E >= I && S >= N && T >= F && P >= J",
      caption: "지금 이 순간을 최대한 즐기는 행동파!",
      imagePrompt: "adventurous character with sunglasses, action pose, urban background",
      imagePath: "/mbti/estp.png",
      description:
        "에너지 넘치고 현실적인 당신은 행동으로 결과를 만들어내는 실천가입니다. 위험을 두려워하지 않고, 순간의 기회를 놓치지 않는 사업가적 기질을 가지고 있습니다.",
      characteristics: [
        "뛰어난 순발력과 적응력",
        "현실적이고 실용적인 판단",
        "위험을 감수하는 대담함",
        "사교적이고 유머러스",
        "즉각적인 문제 해결 능력",
      ],
      personalityStyle:
        "이론보다 실천을 중시하며, 몸으로 부딪혀가며 배웁니다. 지루함을 참지 못하고 항상 새로운 자극을 찾아다닙니다.",
      compatibleTypes: ["ISFJ", "ISTJ"],
    },
    {
      id: "esfp",
      label: "ESFP - 자유로운 연예인",
      rule: "E >= I && S >= N && F >= T && P >= J",
      caption: "어디에서든 분위기를 밝히는 에너자이저!",
      imagePrompt: "cheerful performer character with sparkles, stage lights background",
      imagePath: "/mbti/esfp.png",
      description:
        "밝고 긍정적인 에너지의 당신은 어디에서든 분위기를 밝히는 무드메이커입니다. 현재를 즐기고 사람들과 함께하는 것을 사랑하며, 삶을 축제처럼 살아갑니다.",
      characteristics: [
        "밝고 긍정적인 에너지",
        "뛰어난 사교성과 친화력",
        "현재 순간을 즐기는 능력",
        "감각적이고 즐거움 추구",
        "다른 사람을 즐겁게 하는 재능",
      ],
      personalityStyle:
        "삶을 즐기는 것이 최우선입니다. 사람들 속에서 에너지를 얻으며, 감각적인 경험과 재미를 추구합니다.",
      compatibleTypes: ["ISFJ", "ISTJ"],
    },
    {
      id: "enfp",
      label: "ENFP - 재기발랄한 활동가",
      rule: "E >= I && N >= S && F >= T && P >= J",
      caption: "열정과 상상력으로 무한한 가능성을 탐험!",
      imagePrompt: "enthusiastic character with lightbulbs, rainbow energy background",
      imagePath: "/mbti/enfp.png",
      description:
        "열정적이고 창의적인 당신은 무한한 가능성을 탐험하는 활동가입니다. 사람들과의 연결을 소중히 여기며, 새로운 아이디어와 경험에 항상 열려 있습니다.",
      characteristics: [
        "넘치는 열정과 에너지",
        "풍부한 창의력과 상상력",
        "따뜻한 공감 능력",
        "새로운 가능성에 대한 호기심",
        "자유롭고 유연한 사고방식",
      ],
      personalityStyle:
        "아이디어가 끊이지 않고, 모든 것에서 가능성을 발견합니다. 사람들에게 영감을 주고 분위기를 이끄는 리더십이 있습니다.",
      compatibleTypes: ["INFJ", "INTJ"],
    },
    {
      id: "entp",
      label: "ENTP - 뜨거운 논쟁을 즐기는 변론가",
      rule: "E >= I && N >= S && T >= F && P >= J",
      caption: "지적 도전과 토론으로 새로운 길을 개척!",
      imagePrompt: "debating character with speech bubbles, innovative lab background",
      imagePath: "/mbti/entp.png",
      description:
        "날카로운 지성과 재치를 가진 당신은 기존의 틀을 깨는 혁신가입니다. 지적 토론을 즐기며, 불가능해 보이는 것에 도전하여 새로운 해결책을 찾아냅니다.",
      characteristics: [
        "날카로운 지적 능력",
        "창의적인 문제 해결",
        "토론과 논쟁을 즐김",
        "유연하고 적응력 있는 사고",
        "도전적이고 혁신적",
      ],
      personalityStyle:
        "관습적인 것에 의문을 던지고, 새로운 관점을 제시하는 것을 즐깁니다. 아이디어 생산은 뛰어나지만 마무리는 싫어할 수 있습니다.",
      compatibleTypes: ["INFJ", "INTJ"],
    },
    {
      id: "estj",
      label: "ESTJ - 엄격한 관리자",
      rule: "E >= I && S >= N && T >= F && J >= P",
      caption: "원칙과 질서로 조직을 이끄는 리더!",
      imagePrompt: "authoritative leader character with gavel, organized office background",
      imagePath: "/mbti/estj.png",
      description:
        "강한 리더십과 조직력을 가진 당신은 원칙과 질서를 중시하는 관리자입니다. 효율적으로 목표를 달성하며, 맡은 역할에 책임감을 가지고 성실히 수행합니다.",
      characteristics: [
        "강한 리더십과 추진력",
        "체계적인 조직 관리",
        "원칙과 규칙 중시",
        "실용적이고 현실적",
        "책임감 있는 의사 결정",
      ],
      personalityStyle:
        "목표를 정하면 곧장 실행에 옮기는 추진력이 있습니다. 명확한 기준과 규칙 속에서 효율을 극대화하는 것을 좋아합니다.",
      compatibleTypes: ["ISFP", "ISTP"],
    },
    {
      id: "esfj",
      label: "ESFJ - 사교적인 외교관",
      rule: "E >= I && S >= N && F >= T && J >= P",
      caption: "사람들을 연결하고 조화를 만드는 화합의 리더!",
      imagePrompt: "friendly diplomatic character with handshake, community background",
      imagePath: "/mbti/esfj.png",
      description:
        "따뜻하고 사교적인 당신은 사람들 사이에서 조화를 만들어가는 외교관입니다. 주변 사람들의 필요를 세심하게 파악하고, 모두가 편안한 분위기를 만들기 위해 노력합니다.",
      characteristics: [
        "뛰어난 사교성과 친화력",
        "세심한 배려와 돌봄",
        "조화와 화합 추구",
        "책임감 있는 행동",
        "전통과 관습을 존중",
      ],
      personalityStyle:
        "모임의 중심에서 사람들을 연결하는 역할을 자연스럽게 맡습니다. 다른 사람의 행복이 곧 나의 행복이라 생각합니다.",
      compatibleTypes: ["ISFP", "ISTP"],
    },
    {
      id: "enfj",
      label: "ENFJ - 정의로운 사회운동가",
      rule: "E >= I && N >= S && F >= T && J >= P",
      caption: "사람들을 이끌고 영감을 주는 카리스마 리더!",
      imagePrompt: "charismatic leader character with megaphone heart, crowd background",
      imagePath: "/mbti/enfj.png",
      description:
        "카리스마 넘치는 리더십과 깊은 공감 능력을 가진 당신은 사람들에게 영감을 주는 사회운동가입니다. 타인의 성장을 돕는 것에서 큰 보람을 느끼며, 더 나은 세상을 만들기 위해 행동합니다.",
      characteristics: [
        "카리스마 있는 리더십",
        "깊은 공감과 이해력",
        "타인의 성장을 돕는 멘토",
        "강한 사명감과 책임감",
        "뛰어난 소통 능력",
      ],
      personalityStyle:
        "사람들의 잠재력을 발견하고 이끌어내는 재능이 있습니다. 갈등 상황에서도 모두의 의견을 조율하며 최선의 결과를 만들어냅니다.",
      compatibleTypes: ["INFP", "ISFP"],
    },
    {
      id: "entj",
      label: "ENTJ - 대담한 통솔자",
      rule: "E >= I && N >= S && T >= F && J >= P",
      caption: "비전과 전략으로 세상을 움직이는 통솔자!",
      imagePrompt: "commanding character with crown and map, empire building background",
      imagePath: "/mbti/entj.png",
      description:
        "강력한 의지와 전략적 사고를 가진 당신은 큰 비전을 실현하는 통솔자입니다. 효율적인 시스템을 구축하고 목표를 향해 팀을 이끄는 타고난 리더입니다.",
      characteristics: [
        "강력한 리더십과 카리스마",
        "전략적 사고와 비전 제시",
        "효율적인 목표 달성",
        "자신감 있는 의사 결정",
        "도전적이고 야심찬 목표 설정",
      ],
      personalityStyle:
        "불가능이란 없다는 신념으로 도전합니다. 장기적인 비전을 세우고, 그것을 실현하기 위한 전략을 치밀하게 수립합니다.",
      compatibleTypes: ["INFP", "INTP"],
    },
  ],
  scoringNote:
    "4축(E/I, S/N, T/F, J/P) 각 3문항씩 합산. 각 축에서 높은 쪽의 알파벳을 조합하여 16가지 유형 결정. 동점일 경우 첫 번째 선택지(E, S, T, J) 우선.",
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
export function findMbtiProfile(
  answers: Record<string, string>,
  questions: MbtiSimpleQuestion[],
  profiles: MbtiSimpleProfile[]
): MbtiSimpleProfile | null {
  const scores: Record<string, number> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
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

  // MBTI 유형 문자열 생성
  const mbtiType = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
  ].join("");

  // 해당 유형의 프로파일 찾기
  const directMatch = profiles.find(
    (p) => p.id === mbtiType.toLowerCase()
  );
  if (directMatch) return directMatch;

  // 규칙 기반 매칭
  const matchedProfiles = profiles.filter((profile) =>
    evaluateRule(profile.rule, scores)
  );

  if (matchedProfiles.length > 0) {
    return matchedProfiles[0];
  }

  return profiles[0];
}
