"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl bg-white shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-900 text-sm sm:text-base">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
