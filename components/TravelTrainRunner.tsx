"use client";

import { useMemo, useState } from "react";
import { travelTrainTest, findTravelProfile, type TravelTrainQuestion } from "@/lib/travel-train";

type AnswerState = Record<string, string>;

const QUESTION_CARD_CLASS =
  "rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900/70";

function QuestionChoice({
  question,
  selectedOptionId,
  onSelect,
  showError,
}: {
  question: TravelTrainQuestion;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
  showError: boolean;
}) {
  return (
    <div className="mt-5 space-y-3">
      {question.options.map((option) => {
        const id = `${question.id}-${option.id}`;
        const checked = selectedOptionId === option.id;
        return (
          <label
            key={option.id}
            htmlFor={id}
            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 shadow-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 ${
              checked
                ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400/80 dark:bg-indigo-500/20 dark:text-indigo-100"
                : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            <input
              id={id}
              name={question.id}
              type="radio"
              value={option.id}
              checked={checked}
              onChange={() => onSelect(option.id)}
              className="mt-1 h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
            />
            <span className="flex-1 text-sm font-medium leading-relaxed">{option.text}</span>
          </label>
        );
      })}
      {showError ? (
        <p className="text-xs font-medium text-rose-500">항목을 선택해 주세요.</p>
      ) : null}
    </div>
  );
}

export function TravelTrainRunner() {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const totalQuestions = travelTrainTest.questions.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === totalQuestions;
  const currentQuestion = travelTrainTest.questions[currentQuestionIndex];

  const resultProfile = useMemo(() => {
    if (!isComplete) {
      return null;
    }
    return findTravelProfile(answers, travelTrainTest.questions, travelTrainTest.resultProfiles);
  }, [answers, isComplete]);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: optionId };
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    setCurrentQuestionIndex(0);
    setGeneratedImageUrl(null);
  };

  const handleGenerateImage = async () => {
    if (!resultProfile) return;

    const fullPrompt = travelTrainTest.promptTemplateBase + resultProfile.imagePrompt;
    setGeneratingImage(true);
    setGeneratedImageUrl(null);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      const data = await response.json();

      if (response.ok && data.imageUrl) {
        setGeneratedImageUrl(data.imageUrl);
      } else {
        console.error("이미지 생성 실패:", data.error || data.message);
        alert(data.message || "이미지 생성에 실패했습니다. API 키가 설정되어 있는지 확인해주세요.");
      }
    } catch (error) {
      console.error("이미지 생성 에러:", error);
      alert("이미지 생성 중 오류가 발생했습니다.");
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleCopyPrompt = () => {
    if (!resultProfile) return;
    
    const fullPrompt = travelTrainTest.promptTemplateBase + resultProfile.imagePrompt;
    navigator.clipboard.writeText(fullPrompt);
    alert("프롬프트가 클립보드에 복사되었습니다!");
  };

  if (submitted && isComplete && resultProfile) {
    return (
      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 shadow-lg dark:border-slate-700 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm dark:bg-slate-900/60 dark:text-indigo-300">
              당신의 여행 열차
            </div>
            <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
              {resultProfile.label}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200">
              {resultProfile.caption}
            </p>
          </div>

          {resultProfile.imagePath && (
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/80 shadow-lg dark:bg-slate-900/60">
                <img
                  src={resultProfile.imagePath}
                  alt={resultProfile.label}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error("이미지 로드 실패:", resultProfile.imagePath);
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          )}

          {/* 상세 설명 */}
          <div className="mt-8 space-y-6">
            {resultProfile.description && (
              <div className="rounded-2xl bg-white/80 p-6 shadow-sm dark:bg-slate-900/60">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  나의 여행 스타일
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {resultProfile.description}
                </p>
              </div>
            )}

            {resultProfile.characteristics && resultProfile.characteristics.length > 0 && (
              <div className="rounded-2xl bg-white/80 p-6 shadow-sm dark:bg-slate-900/60">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  주요 특징
                </h3>
                <ul className="space-y-2">
                  {resultProfile.characteristics.map((char, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                      <span className="leading-relaxed">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resultProfile.travelStyle && (
              <div className="rounded-2xl bg-white/80 p-6 shadow-sm dark:bg-slate-900/60">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  여행 방식
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {resultProfile.travelStyle}
                </p>
              </div>
            )}

            {resultProfile.recommendedDestinations &&
              resultProfile.recommendedDestinations.length > 0 && (
                <div className="rounded-2xl bg-white/80 p-6 shadow-sm dark:bg-slate-900/60">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    추천 여행지
                  </h3>
                  <ul className="space-y-2">
                    {resultProfile.recommendedDestinations.map((dest, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                        <span className="leading-relaxed">{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {resultProfile.travelTips && resultProfile.travelTips.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm dark:from-indigo-900/20 dark:to-purple-900/20">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  여행 팁
                </h3>
                <ul className="space-y-2">
                  {resultProfile.travelTips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            다시 하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <header className="space-y-3 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {travelTrainTest.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {travelTrainTest.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>
            {answeredCount} / {totalQuestions} 완료
          </span>
        </div>
      </header>

      {/* 모바일: 한 문항씩 표시 */}
      <div className="block sm:hidden">
        <div className={QUESTION_CARD_CLASS}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                  Q{currentQuestionIndex + 1} / {totalQuestions}
                </p>
                <div className="flex h-2 flex-1 max-w-32 gap-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  {travelTrainTest.questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-full flex-1 rounded-full transition-colors ${
                        idx <= currentQuestionIndex
                          ? "bg-indigo-600 dark:bg-indigo-500"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {currentQuestion.text}
              </h3>
            </div>
          </div>
          <QuestionChoice
            question={currentQuestion}
            selectedOptionId={answers[currentQuestion.id]}
            onSelect={(optionId) => handleSelect(currentQuestion.id, optionId)}
            showError={showValidation && !answers[currentQuestion.id]}
          />
        </div>

        <div className="flex gap-3">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePrev}
              className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              이전
            </button>
          )}
          {currentQuestionIndex < totalQuestions - 1 && (
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="flex-1 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              다음
            </button>
          )}
          {isComplete && currentQuestionIndex === totalQuestions - 1 && (
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className="flex-1 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              결과 확인하기
            </button>
          )}
        </div>
      </div>

      {/* 데스크톱: 모든 문항 표시 */}
      <div className="hidden gap-6 sm:grid">
        {travelTrainTest.questions.map((question, index) => {
          const selectedOptionId = answers[question.id];
          const showError = showValidation && !selectedOptionId;
          return (
            <div key={question.id} className={QUESTION_CARD_CLASS}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                    Q{index + 1}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {question.text}
                  </h3>
                </div>
              </div>
              <QuestionChoice
                question={question}
                selectedOptionId={selectedOptionId}
                onSelect={(optionId) => handleSelect(question.id, optionId)}
                showError={showError}
              />
            </div>
          );
        })}
      </div>

      {/* 데스크톱: 제출 버튼 */}
      <section className="hidden sm:flex sm:flex-col sm:gap-3">
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          {isComplete ? "결과 확인하기" : `모든 질문에 답변해 주세요 (${totalQuestions - answeredCount}개 남음)`}
        </button>
      </section>
    </section>
  );
}

