import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-lg">🧠</span>
            <span className="font-semibold">심심풀이 심리테스트</span>
          </div>
          <p className="text-xs text-gray-400 text-center sm:text-right">
            본 테스트는 심심풀이 목적으로 제공되며, 전문 심리 상담을 대체하지
            않습니다.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400">
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            소개
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
            개인정보처리방침
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms" className="hover:text-indigo-600 transition-colors">
            이용약관
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/faq" className="hover:text-indigo-600 transition-colors">
            FAQ
          </Link>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Psychological Test Lab. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
