"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold text-gray-900"
        >
          <span className="text-2xl">🧠</span>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            심심풀이 심리테스트
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            홈
          </Link>
          <Link
            href="/tests"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            테스트 목록
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="메뉴 열기"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            홈
          </Link>
          <Link
            href="/tests"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            테스트 목록
          </Link>
        </div>
      )}
    </header>
  );
}
