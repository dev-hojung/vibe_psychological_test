"use client";

import { useState, useMemo } from "react";

type QuizOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

type QuizProfile = {
  id: string;
  label: string;
  caption: string;
  description?: string;
  characteristics?: string[];
  [key: string]: unknown;
};

type QuizTheme = {
  progressGradient: string;
  headerGradient: string;
  optionActiveClass: string;
  bulletColor: string;
  shareButtonClass: string;
};

type GenericQuizTest = {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  resultProfiles: QuizProfile[];
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  test: GenericQuizTest;
  findProfile: (
    answers: Record<string, string>,
    questions: any[],
    profiles: any[]
  ) => QuizProfile | null;
  theme?: Partial<QuizTheme>;
  renderExtra?: (profile: QuizProfile) => React.ReactNode;
};

const defaultTheme: QuizTheme = {
  progressGradient: "from-indigo-500 to-purple-500",
  headerGradient: "from-indigo-600 to-purple-600",
  optionActiveClass: "border-indigo-500 bg-indigo-50 text-indigo-700",
  bulletColor: "bg-indigo-500",
  shareButtonClass: "bg-indigo-600 hover:bg-indigo-700",
};

export default function GenericQuizRunner({
  test,
  findProfile,
  theme: themeOverride,
  renderExtra,
}: Props) {
  const theme = { ...defaultTheme, ...themeOverride };
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = test.questions[currentQ];
  const totalQ = test.questions.length;
  const progress = Math.round((Object.keys(answers).length / totalQ) * 100);

  const profile = useMemo(() => {
    if (!showResult) return null;
    return findProfile(answers, test.questions, test.resultProfiles);
  }, [showResult, answers, test, findProfile]);

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
    if (currentQ < totalQ - 1) {
      setTimeout(() => setCurrentQ((c) => c + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQ(0);
    setShowResult(false);
  };

  if (showResult && profile) {
    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Result Header */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${theme.headerGradient} p-6 sm:p-8 text-center text-white`}
        >
          <p className="text-sm font-medium text-white/80 mb-2">
            당신의 유형은...
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
            {profile.label}
          </h2>
          <p className="text-white/90">{profile.caption}</p>
        </div>

        {/* Description */}
        {profile.description && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">유형 설명</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {profile.description}
            </p>
          </div>
        )}

        {/* Characteristics */}
        {profile.characteristics && profile.characteristics.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">주요 특성</h3>
            <ul className="space-y-2">
              {profile.characteristics.map((c: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bulletColor}`}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Extra content rendered by parent */}
        {renderExtra && renderExtra(profile)}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            다시 하기
          </button>
          <button
            onClick={async () => {
              const shareUrl = window.location.href.replace(/\/take\/?$/, "");
              const shareText = `[${test.title}] 내 결과: ${profile.label}`;
              try {
                if (navigator.share) {
                  await navigator.share({ title: test.title, text: shareText, url: shareUrl });
                } else {
                  await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                  alert("링크가 복사되었습니다!");
                }
              } catch (e) {
                if ((e as DOMException).name !== "AbortError") {
                  try {
                    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                    alert("링크가 복사되었습니다!");
                  } catch {
                    prompt("아래 링크를 복사해주세요:", shareUrl);
                  }
                }
              }
            }}
            className={`flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-colors ${theme.shareButtonClass}`}
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
          <span className="font-medium text-gray-700">
            {currentQ + 1} / {totalQ}
          </span>
          <span className="text-gray-500">{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${theme.progressGradient} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center py-4">
        <p className="text-xl font-bold text-gray-900">{question.text}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleAnswer(opt.id)}
            className={`w-full rounded-xl border-2 p-5 text-left text-base font-medium transition-all ${
              answers[question.id] === opt.id
                ? `${theme.optionActiveClass} shadow-md`
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            <span className="inline-flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  answers[question.id] === opt.id
                    ? "border-current bg-current text-white"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {opt.id.toUpperCase()}
              </span>
              {opt.text}
            </span>
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
        <span className="text-xs text-gray-400">
          {currentQ + 1} / {totalQ}
        </span>
        <div className="w-16" />
      </div>
    </div>
  );
}
