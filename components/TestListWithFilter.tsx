"use client";

import { useState } from "react";
import TestCard from "./TestCard";

type TestItem = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  questionCount: number;
  tags: string[];
};

type Props = {
  tests: TestItem[];
  categories: string[];
};

export default function TestListWithFilter({ tests, categories }: Props) {
  const [selected, setSelected] = useState("전체");

  const filtered =
    selected === "전체"
      ? tests
      : tests.filter((t) => t.category === selected);

  return (
    <>
      {/* Category pills */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === selected
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tests Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((test) => (
            <TestCard
              key={test.slug}
              slug={test.slug}
              title={test.title}
              tagline={test.tagline}
              category={test.category}
              duration={test.duration}
              questionCount={test.questionCount}
              tags={test.tags}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            해당 카테고리에 테스트가 없습니다.
          </p>
        )}
      </section>
    </>
  );
}
