# 심심풀이 심리테스트

무료 심리 테스트와 성격 테스트를 제공하는 웹 서비스입니다. 스트레스 체크, 진로 탐색, 애착 유형, 리더십 진단 등 다양한 온라인 심리 검사를 즐길 수 있습니다.

## 주요 기능

- **6종 심리 테스트** - 스트레스 레벨 체크, 진로 가치관 탐색, 애착 유형 테스트, 리더십 스타일 진단, 학습 성향 체크, 여행 스타일 동물열차
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 최적화 (모바일 우선)
- **Google AdSense** - 광고 배너 통합
- **SEO 최적화** - JSON-LD 구조화 데이터, Open Graph, sitemap, robots.txt
- **정적 사이트 생성(SSG)** - 빠른 로딩 속도

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 |
| UI 라이브러리 | React 19 |
| 스타일링 | Tailwind CSS 4 |
| 언어 | TypeScript 5 |
| 분석 | Vercel Analytics, Speed Insights |

## 프로젝트 구조

```
app/
├── page.tsx                    # 홈페이지 (히어로 + 테스트 그리드)
├── layout.tsx                  # 루트 레이아웃 (AdSense 스크립트)
├── globals.css                 # 글로벌 스타일
├── robots.ts                   # robots.txt 생성
├── sitemap.ts                  # sitemap.xml 생성
└── tests/
    ├── page.tsx                # 전체 테스트 목록
    └── [slug]/
        ├── page.tsx            # 테스트 상세 페이지
        └── take/
            └── page.tsx        # 테스트 진행 페이지

components/
├── Header.tsx                  # 반응형 헤더 (모바일 메뉴)
├── Footer.tsx                  # 푸터
├── TestCard.tsx                # 테스트 카드 컴포넌트
├── AdBanner.tsx                # AdSense 배너 컴포넌트
├── AssessmentRunner.tsx        # Likert 척도 테스트 러너
└── TravelTrainRunner.tsx       # 여행 스타일 테스트 러너

lib/
├── tests.ts                    # 테스트 메타데이터
├── assessments.ts              # Likert 척도 문항 데이터
├── travel-train.ts             # 여행 스타일 테스트 데이터 + 채점 로직
└── seo.ts                      # JSON-LD 스키마 생성 유틸
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
npm run start
```

### 환경 변수

| 변수 | 설명 | 기본값 |
|------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | 사이트 URL (SEO, sitemap 등에 사용) | `https://psychology-lab.example` |

## 테스트 목록

| 테스트 | 카테고리 | 문항 수 | 소요시간 |
|--------|----------|---------|---------|
| 스트레스 레벨 체크 | 정서 관리 | 20문항 | 7분 |
| 진로 가치관 탐색 | 커리어 개발 | 40문항 | 12분 |
| 애착 유형 테스트 | 대인관계 | 28문항 | 8분 |
| 리더십 스타일 진단 | 조직 리더십 | 32문항 | 10분 |
| 학습 성향 체크 | 자기 개발 | 18문항 | 6분 |
| 여행 스타일 동물열차 | 라이프스타일 | 9문항 | 5분 |

## 배포

Vercel에 배포하는 것을 권장합니다.

```bash
npx vercel
```

## 라이선스

Private
