"use client";

import { useState, useMemo } from "react";
import type { TravelTrainTest } from "@/lib/travel-train";
import { findTravelProfile } from "@/lib/travel-train";

type Props = { test: TravelTrainTest };

export default function TravelTrainRunner({ test }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = test.questions[currentQ];
  const totalQ = test.questions.length;
  const progress = Math.round((Object.keys(answers).length / totalQ) * 100);

  const profile = useMemo(() => {
    if (!showResult) return null;
    return findTravelProfile(answers, test.questions, test.resultProfiles);
  }, [showResult, answers, test]);

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
      <div className="space-y-6">
        {/* Result Header */}
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 sm:p-8 text-center text-white">
          <p className="text-sm font-medium text-white/80 mb-2">당신의 여행 열차는...</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{profile.label}</h2>
          <p className="text-white/90">{profile.caption}</p>
        </div>

        {/* Description */}
        {profile.description && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">프로필 설명</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{profile.description}</p>
          </div>
        )}

        {/* Travel Style */}
        {profile.travelStyle && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">여행 스타일</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{profile.travelStyle}</p>
          </div>
        )}

        {/* Characteristics */}
        {profile.characteristics && profile.characteristics.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">주요 특성</h3>
            <ul className="space-y-2">
              {profile.characteristics.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended Destinations */}
        {profile.recommendedDestinations && profile.recommendedDestinations.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">추천 여행지</h3>
            <div className="flex flex-wrap gap-2">
              {profile.recommendedDestinations.map((d, i) => (
                <span
                  key={i}
                  className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Travel Tips */}
        {profile.travelTips && profile.travelTips.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">여행 팁</h3>
            <ul className="space-y-2">
              {profile.travelTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-amber-500">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

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
            className="flex-1 rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition-colors"
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
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
            style={{
              width: `${((currentQ + (answers[question?.id] ? 1 : 0)) / totalQ) * 100}%`,
            }}
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
                ? "border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md"
                : "border-gray-200 bg-white text-gray-700 hover:border-cyan-300 hover:bg-cyan-50/50"
            }`}
          >
            <span className="inline-flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  answers[question.id] === opt.id
                    ? "border-cyan-500 bg-cyan-500 text-white"
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
        <div className="w-16" /> {/* Spacer */}
      </div>
    </div>
  );
}
