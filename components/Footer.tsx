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
        <div className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Psychological Test Lab. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
