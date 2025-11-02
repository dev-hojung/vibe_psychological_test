// 테스트 결과 검증 스크립트
import { assessments } from "@/lib/assessments";

type ValidationIssue = {
  test: string;
  dimension: string;
  issue: string;
  severity: "error" | "warning";
};

const issues: ValidationIssue[] = [];

// 1. 각 dimension의 interpretations 범위 검증
assessments.forEach((assessment) => {
  assessment.dimensions.forEach((dimension) => {
    const interpretations = dimension.interpretations.sort((a, b) => a.min - b.min);

    // 범위가 1부터 시작하는지 확인
    if (interpretations[0]?.min !== 1) {
      issues.push({
        test: assessment.slug,
        dimension: dimension.id,
        issue: `첫 번째 interpretation이 1부터 시작하지 않음 (현재: ${interpretations[0]?.min})`,
        severity: "error",
      });
    }

    // 범위가 연속적으로 커버되는지 확인
    for (let i = 0; i < interpretations.length; i++) {
      const current = interpretations[i];
      const next = interpretations[i + 1];

      if (next) {
        if (current.max !== next.min) {
          issues.push({
            test: assessment.slug,
            dimension: dimension.id,
            issue: `Interpretation 범위가 연속되지 않음: ${current.label}(${current.min}-${current.max}) 다음에 ${next.label}(${next.min}-${next.max})`,
            severity: "error",
          });
        }
      } else {
        // 마지막 interpretation이 5.1까지 커버하는지 확인
        if (current.max < 5.1) {
          issues.push({
            test: assessment.slug,
            dimension: dimension.id,
            issue: `마지막 interpretation이 5.1까지 커버하지 않음 (현재: ${current.max})`,
            severity: "error",
          });
        }
      }

      // min < max 확인
      if (current.min >= current.max) {
        issues.push({
          test: assessment.slug,
          dimension: dimension.id,
          issue: `Interpretation 범위가 잘못됨: ${current.label} (min: ${current.min}, max: ${current.max})`,
          severity: "error",
        });
      }
    }

    // 각 interpretation이 실제로 나올 수 있는지 확인 (테스트 케이스)
    const testScores = [1.0, 2.0, 2.6, 3.0, 3.6, 4.0, 5.0];
    testScores.forEach((score) => {
      const matched = interpretations.find(
        (interp) => score >= interp.min && score < interp.max
      );
      if (!matched) {
        issues.push({
          test: assessment.slug,
          dimension: dimension.id,
          issue: `점수 ${score}에 해당하는 interpretation이 없음`,
          severity: "error",
        });
      }
    });
  });
});

// 2. 각 테스트의 질문 수와 dimension 수 확인
assessments.forEach((assessment) => {
  const questionCounts: Record<string, number> = {};
  assessment.questions.forEach((q) => {
    questionCounts[q.dimension] = (questionCounts[q.dimension] || 0) + 1;
  });

  assessment.dimensions.forEach((dim) => {
    const count = questionCounts[dim.id] || 0;
    if (count === 0) {
      issues.push({
        test: assessment.slug,
        dimension: dim.id,
        issue: `해당 dimension에 대한 질문이 없음`,
        severity: "error",
      });
    }
  });
});

// 결과 출력
console.log("=== 테스트 결과 검증 ===\n");

if (issues.length === 0) {
  console.log("✅ 모든 테스트가 통과했습니다!\n");
} else {
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  console.log(`❌ 발견된 문제:\n`);
  console.log(`- 에러: ${errors.length}개`);
  console.log(`- 경고: ${warnings.length}개\n`);

  issues.forEach((issue) => {
    const icon = issue.severity === "error" ? "❌" : "⚠️";
    console.log(
      `${icon} [${issue.test}] ${issue.dimension}: ${issue.issue}`
    );
  });
}

// 각 테스트의 dimension별 interpretation 수 출력
console.log("\n=== 각 테스트의 결과 종류 ===\n");
assessments.forEach((assessment) => {
  console.log(`${assessment.title} (${assessment.slug})`);
  assessment.dimensions.forEach((dim) => {
    console.log(
      `  ${dim.label}: ${dim.interpretations.length}가지 결과`
    );
    dim.interpretations.forEach((interp) => {
      console.log(`    - ${interp.label} (${interp.min}-${interp.max})`);
    });
  });
  console.log("");
});

// 각 interpretation이 실제로 나올 수 있는지 확인 (중간값 테스트)
console.log("\n=== Interpretation 중간값 검증 ===\n");
assessments.forEach((assessment) => {
  assessment.dimensions.forEach((dimension) => {
    dimension.interpretations.forEach((interp) => {
      // 각 interpretation의 중간값 계산
      const midPoint = (interp.min + Math.min(interp.max, 5.1)) / 2;
      
      // findInterpretation 로직 시뮬레이션
      const matched = dimension.interpretations.find(
        (i) => midPoint >= i.min && midPoint < i.max
      );
      
      if (!matched || matched.label !== interp.label) {
        issues.push({
          test: assessment.slug,
          dimension: dimension.id,
          issue: `${interp.label}의 중간값 ${midPoint.toFixed(2)}가 다른 interpretation(${matched?.label})과 매칭됨`,
          severity: "error",
        });
      }
    });
  });
});

// 각 테스트별 총 결과 수 계산
console.log("\n=== 각 테스트별 총 결과 수 ===\n");
assessments.forEach((assessment) => {
  const totalResults = assessment.dimensions.reduce(
    (sum, dim) => sum + dim.interpretations.length,
    0
  );
  console.log(
    `${assessment.title}: ${assessment.dimensions.length}개 dimension, 총 ${totalResults}가지 결과`
  );
});

// 최종 결과
console.log("\n=== 최종 검증 결과 ===\n");
const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ 모든 검증이 통과했습니다!");
} else {
  console.log(`❌ 발견된 문제: 에러 ${errors.length}개, 경고 ${warnings.length}개`);
  if (errors.length > 0) {
    console.log("\n에러:");
    errors.forEach((issue) => {
      console.log(`  - [${issue.test}] ${issue.dimension}: ${issue.issue}`);
    });
  }
}

export {};

