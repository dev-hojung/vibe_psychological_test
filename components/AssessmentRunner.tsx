"use client";

import { useMemo, useState } from "react";
import type {
  Assessment,
  AssessmentQuestion,
  AssessmentDimension,
  LikertScale,
} from "@/lib/assessments";

type AnswerState = Record<string, number>;

type DimensionScore = {
  dimension: AssessmentDimension;
  average: number;
  interpretation: AssessmentDimension["interpretations"][number];
};

type AssessmentRunnerProps = {
  assessment: Assessment;
};

const formatNumber = (value: number) => value.toFixed(1);

const QUESTION_CARD_CLASS =
  "rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900/70";

function getEffectiveValue(question: AssessmentQuestion, value: number) {
  return question.reverse ? 6 - value : value;
}

function findInterpretation(score: number, interpretations: AssessmentDimension["interpretations"]) {
  return (
    interpretations.find((interpretation) => score >= interpretation.min && score < interpretation.max) ??
    interpretations[interpretations.length - 1]
  );
}

function buildOverallSummary(slug: string, scores: DimensionScore[]) {
  if (!scores.length) {
    return null;
  }

  switch (slug) {
    case "stress-balance-check": {
      const alerts = scores.filter((score) => score.interpretation.label === "경고" || score.interpretation.label === "지원 필요" || score.interpretation.label === "과부하");
      if (!alerts.length) {
        return {
          title: "전반적으로 균형이 양호합니다",
          description:
            "각 영역에서 심각한 경고 신호는 나타나지 않았습니다. 지속적으로 컨디션을 기록하며 루틴을 유지해 보세요.",
        };
      }
      const alertLabels = alerts.map((alert) => alert.dimension.label).join(", ");
      return {
        title: "집중 관리가 필요한 영역",
        description: `${alertLabels} 영역에서 스트레스 신호가 높게 나타났습니다. 전문 지원이나 휴식 계획을 우선순위에 두는 것을 권장합니다.`,
      };
    }
    case "career-values-assessment": {
      const sorted = [...scores].sort((a, b) => b.average - a.average);
      const topTwo = sorted.slice(0, 2);
      return {
        title: "최우선 커리어 가치",
        description: topTwo
          .map((item) => `${item.dimension.label} (${formatNumber(item.average)})`)
          .join(", "),
      };
    }
    case "attachment-style-check": {
      const sorted = [...scores].sort((a, b) => b.average - a.average);
      const [top] = sorted;
      if (!top) {
        return null;
      }
      return {
        title: `주요 성향: ${top.dimension.label}`,
        description: `${top.interpretation.description} 다른 유형 점수와의 차이를 참고하여 관계 전략을 조정해 보세요.`,
      };
    }
    case "leadership-style-diagnosis": {
      const sorted = [...scores].sort((a, b) => b.average - a.average);
      const [top, second] = sorted;
      if (!top) {
        return null;
      }
      const description = second
        ? `${top.dimension.label} 스타일이 가장 강하게 나타났고, ${second.dimension.label}이(가) 그 뒤를 잇습니다. 팀 상황에 따라 두 스타일을 조합해 보세요.`
        : `${top.dimension.label} 스타일이 두드러집니다.`;
      return {
        title: `핵심 리더십 스타일: ${top.dimension.label}`,
        description,
      };
    }
    case "learning-habits-check": {
      const strengths = scores.filter((score) => score.average >= 3.6);
      const focus = scores.filter((score) => score.average <= 2.6);
      const parts: string[] = [];
      if (strengths.length) {
        parts.push(
          `강점 영역: ${strengths.map((item) => item.dimension.label).join(", ")}`
        );
      }
      if (focus.length) {
        parts.push(
          `보완 필요: ${focus.map((item) => item.dimension.label).join(", ")}`
        );
      }
      return {
        title: "학습 루틴 요약",
        description: parts.length
          ? parts.join(" · ")
          : "모든 영역에서 균형 잡힌 성향이 나타났습니다. 지속 가능한 루틴을 유지해 보세요.",
      };
    }
    default:
      return null;
  }
}

function QuestionScale({
  question,
  scale,
  selectedValue,
  onSelect,
  showError,
}: {
  question: AssessmentQuestion;
  scale: LikertScale[];
  selectedValue?: number;
  onSelect: (value: number) => void;
  showError: boolean;
}) {
  return (
    <div className="mt-5">
      <div className="grid gap-3 sm:grid-cols-5">
        {scale.map((option) => {
          const id = `${question.id}-${option.value}`;
          const checked = selectedValue === option.value;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-4 text-center text-xs font-medium shadow-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 ${
                checked
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400/80 dark:bg-indigo-500/20 dark:text-indigo-100"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <input
                id={id}
                name={question.id}
                type="radio"
                value={option.value}
                checked={checked}
                onChange={() => onSelect(option.value)}
                className="sr-only"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      {showError ? (
        <p className="mt-2 text-xs font-medium text-rose-500">
          항목을 선택해 주세요.
        </p>
      ) : null}
    </div>
  );
}

export function AssessmentRunner({ assessment }: AssessmentRunnerProps) {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const totalQuestions = assessment.questions.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === totalQuestions;

  const dimensionScores = useMemo<DimensionScore[]>(() => {
    if (!isComplete) {
      return [];
    }

    const totals: Record<string, { sum: number; count: number }> = {};

    assessment.questions.forEach((question) => {
      const rawValue = answers[question.id];
      if (!rawValue) {
        return;
      }
      const effectiveValue = getEffectiveValue(question, rawValue);
      const target = totals[question.dimension] ?? { sum: 0, count: 0 };
      totals[question.dimension] = {
        sum: target.sum + effectiveValue,
        count: target.count + 1,
      };
    });

    return assessment.dimensions.map((dimension) => {
      const total = totals[dimension.id] ?? { sum: 0, count: 0 };
      const average = total.count > 0 ? total.sum / total.count : 0;
      return {
        dimension,
        average,
        interpretation: findInterpretation(average, dimension.interpretations),
      };
    });
  }, [answers, assessment.dimensions, assessment.questions, isComplete]);

  const overallSummary = useMemo(
    () => (submitted && isComplete ? buildOverallSummary(assessment.slug, dimensionScores) : null),
    [assessment.slug, dimensionScores, isComplete, submitted]
  );

  const handleSelect = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (!isComplete) {
      setShowValidation(true);
      return;
    }
    setSubmitted(true);
    setShowValidation(false);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowValidation(false);
  };

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {assessment.title}
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{assessment.intro}</p>
        <div className="mt-6 grid gap-4 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/80 p-6 text-sm text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-100">
          <p className="font-semibold">진행 방법</p>
          <p>{assessment.instructions}</p>
          <div className="flex flex-wrap gap-2 text-xs text-indigo-600 dark:text-indigo-200">
            {assessment.scale.map((item) => (
              <span
                key={item.value}
                className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 font-medium dark:bg-indigo-500/20"
              >
                {item.value}. {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              문항에 응답해 주세요
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              현재 {answeredCount} / {totalQuestions} 문항 완료
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              총 {totalQuestions} 문항
            </span>
          </div>
        </header>

        <div className="grid gap-6">
          {assessment.questions.map((question, index) => {
            const value = answers[question.id];
            const showError = showValidation && value == null;
            return (
              <div key={question.id} className={QUESTION_CARD_CLASS}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                      Q{index + 1}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                      {question.prompt}
                    </h3>
                    {question.helper ? (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{question.helper}</p>
                    ) : null}
                  </div>
                </div>
                <QuestionScale
                  question={question}
                  scale={assessment.scale}
                  selectedValue={value}
                  onSelect={(selected) => handleSelect(question.id, selected)}
                  showError={showError}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            결과 확인하기
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            다시 시작
          </button>
        </div>
        {!isComplete && showValidation ? (
          <p className="text-sm font-medium text-rose-500">모든 문항 응답 후 결과를 확인할 수 있습니다.</p>
        ) : null}
      </section>

      {submitted && isComplete ? (
        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/70">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              영역별 결과
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {dimensionScores.map((score) => (
                <div
                  key={score.dimension.id}
                  className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                        {score.dimension.label}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {score.dimension.description}
                      </p>
                    </div>
                    <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                      {formatNumber(score.average)}
                    </span>
                  </div>
                  <div className="mt-3 rounded-2xl bg-slate-100/80 p-4 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
                    <p className="font-semibold text-indigo-600 dark:text-indigo-300">
                      {score.interpretation.label}
                    </p>
                    <p className="mt-1 text-sm">{score.interpretation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {overallSummary ? (
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-8 text-indigo-800 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-100">
              <h3 className="text-lg font-semibold">{overallSummary.title}</h3>
              <p className="mt-2 text-sm">{overallSummary.description}</p>
            </div>
          ) : null}

          <div className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-slate-100">참고 안내</p>
            <p className="mt-2">{assessment.resultNote}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
