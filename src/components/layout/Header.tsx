"use client";

import Link from "next/link";

interface HeaderProps {
  onMenuToggle?: () => void;
  showMenuButton?: boolean;
}

export function Header({ onMenuToggle, showMenuButton = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-tenenbaum-cream border-b-2 border-tenenbaum-camel shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between min-h-[4rem] sm:min-h-[4.5rem] py-3">
          {/* Mobile menu button */}
          {showMenuButton && (
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 text-tenenbaum-brown hover:text-tenenbaum-red transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {/* Title */}
          <Link href="/" className="flex-1 flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h1 className="text-sm sm:text-lg lg:text-xl font-semibold tracking-[0.08em] sm:tracking-[0.1em] text-tenenbaum-brown uppercase m-0 font-[family-name:var(--font-playfair)] whitespace-nowrap leading-tight">
                Watch the RIGHT Hook
              </h1>
              <div className="hidden sm:flex items-center justify-center lg:justify-start gap-2 mt-0.5">
                <span className="h-px w-6 bg-tenenbaum-camel" />
                <span className="text-[10px] tracking-[0.2em] text-tenenbaum-brown/60 uppercase">
                  A React Hooks Reference
                </span>
                <span className="h-px w-6 bg-tenenbaum-camel" />
              </div>
            </div>
          </Link>

          {/* Right spacer for mobile symmetry */}
          {showMenuButton && <div className="w-10 lg:hidden" />}
        </div>
      </div>
    </header>
  );
}
