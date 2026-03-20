import Link from "next/link";

type TestCardProps = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  questionCount: number;
  tags: string[];
};

const categoryColors: Record<string, string> = {
  "정서 관리": "bg-rose-100 text-rose-700",
  "커리어 개발": "bg-blue-100 text-blue-700",
  대인관계: "bg-purple-100 text-purple-700",
  "조직 리더십": "bg-amber-100 text-amber-700",
  "자기 개발": "bg-emerald-100 text-emerald-700",
  라이프스타일: "bg-cyan-100 text-cyan-700",
};

export default function TestCard({
  slug,
  title,
  tagline,
  category,
  duration,
  questionCount,
  tags,
}: TestCardProps) {
  const colorClass = categoryColors[category] || "bg-gray-100 text-gray-700";

  return (
    <Link href={`/tests/${slug}`} className="group block">
      <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colorClass}`}
          >
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tagline}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {questionCount}문항
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-50 px-2 py-0.5 text-xs text-gray-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
