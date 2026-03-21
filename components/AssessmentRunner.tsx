"use client";

import { useState, useMemo } from "react";
import type { Assessment } from "@/lib/assessments";

type Props = { assessment: Assessment };

function getBarGradient(pct: number): string {
  if (pct <= 33) return "from-red-400 to-rose-500";
  if (pct <= 66) return "from-amber-400 to-yellow-500";
  return "from-emerald-400 to-green-500";
}

function getLevelEmoji(label: string): string {
  if (label.includes("낮음") || label.includes("낮은")) return "⚡";
  if (label.includes("높음") || label.includes("높은")) return "✨";
  return "💫";
}

function getOverallBg(pct: number): string {
  if (pct <= 33) return "from-red-50 to-rose-100 border-red-200";
  if (pct <= 66) return "from-amber-50 to-yellow-100 border-amber-200";
  return "from-emerald-50 to-green-100 border-emerald-200";
}

function getOverallCircleColor(pct: number): string {
  if (pct <= 33) return "text-rose-500 border-rose-300";
  if (pct <= 66) return "text-amber-500 border-amber-300";
  return "text-emerald-500 border-emerald-300";
}

export default function AssessmentRunner({ assessment }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

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

  if (showResult && results) {
    return (
      <div className="space-y-6">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">검사 결과</h2>
          <p className="text-sm text-gray-500">{assessment.resultNote}</p>
        </div>

        {/* Overall score card */}
        <div
          className={`rounded-2xl border bg-gradient-to-br ${getOverallBg(overallPct)} p-5 animate-fade-in-up`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-5">
            <div
              className={`w-20 h-20 rounded-full border-4 flex items-center justify-center flex-shrink-0 bg-white ${getOverallCircleColor(overallPct)}`}
            >
              <span className={`text-2xl font-bold ${getOverallCircleColor(overallPct).split(" ")[0]}`}>
                {overallPct}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">전체 점수</p>
              <p className="text-lg font-bold text-gray-800">
                {overallPct <= 33 ? "개선이 필요한 영역이 있어요" : overallPct <= 66 ? "평균적인 수준이에요" : "전반적으로 높은 수준이에요"}
              </p>
              <p className="text-sm text-gray-600 mt-0.5">
                {results.length}개 차원 평균 {overallPct}점
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {results.map(({ dim, avg, pct, interp }, idx) => (
            <div
              key={dim.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">{dim.label}</h3>
                <span className="text-sm font-semibold text-indigo-600">{avg}점</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{dim.description}</p>
              <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getBarGradient(pct)} transition-all duration-700`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {interp && (
                <div
                  className={`rounded-lg p-3 ${
                    pct <= 33
                      ? "bg-rose-50"
                      : pct <= 66
                      ? "bg-amber-50"
                      : "bg-emerald-50"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      pct <= 33
                        ? "text-rose-700"
                        : pct <= 66
                        ? "text-amber-700"
                        : "text-emerald-700"
                    }`}
                  >
                    {getLevelEmoji(interp.label)} {interp.label}
                  </p>
                  <p
                    className={`text-xs ${
                      pct <= 33
                        ? "text-rose-600/80"
                        : pct <= 66
                        ? "text-amber-600/80"
                        : "text-emerald-600/80"
                    }`}
                  >
                    {interp.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            다시 하기
          </button>
          <button
            onClick={handleShare}
            className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            결과 공유하기
          </button>
        </div>
      </div>
    );
  }

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
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
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
            className="rounded-lg bg-indigo-600 px-6 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition-colors"
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
