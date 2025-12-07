"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAdjacentChapters, getChapterBySlug, getChapterRoman } from "@/lib/toc";

export function ChapterNav() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/chapters/")[1];

  if (!currentSlug) return null;

  const { prev, next } = getAdjacentChapters(currentSlug);
  const current = getChapterBySlug(currentSlug);

  return (
    <nav className="mt-16 pt-8 border-t-2 border-tenenbaum-camel">
      <div className="flex items-center justify-between gap-4">
        {/* Previous */}
        <div className="flex-1">
          {prev && (
            <Link
              href={`/chapters/${prev.slug}`}
              className="group block p-4 border-2 border-tenenbaum-camel hover:border-tenenbaum-red transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-tenenbaum-brown/50 group-hover:text-tenenbaum-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-[10px] tracking-[0.15em] text-tenenbaum-brown/50 uppercase">
                  Previous
                </span>
              </div>
              <div className="text-sm text-tenenbaum-brown group-hover:text-tenenbaum-red transition-colors font-semibold truncate">
                {prev.number <= 25 ? `Chapter ${getChapterRoman(prev.number)}: ` : ""}{prev.title}
              </div>
            </Link>
          )}
        </div>

        {/* Center page indicator */}
        {current && (
          <div className="hidden sm:flex flex-col items-center px-4">
            <span className="text-[10px] tracking-[0.2em] text-tenenbaum-brown/50 uppercase">
              Chapter
            </span>
            <span className="text-lg font-semibold text-tenenbaum-brown font-[family-name:var(--font-playfair)]">
              {current.number <= 25 ? getChapterRoman(current.number) : "A"}
            </span>
          </div>
        )}

        {/* Next */}
        <div className="flex-1">
          {next && (
            <Link
              href={`/chapters/${next.slug}`}
              className="group block p-4 border-2 border-tenenbaum-camel hover:border-tenenbaum-red transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-2 mb-1">
                <span className="text-[10px] tracking-[0.15em] text-tenenbaum-brown/50 uppercase">
                  Next
                </span>
                <svg className="w-4 h-4 text-tenenbaum-brown/50 group-hover:text-tenenbaum-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-sm text-tenenbaum-brown group-hover:text-tenenbaum-red transition-colors font-semibold truncate">
                {next.number <= 25 ? `Chapter ${getChapterRoman(next.number)}: ` : ""}{next.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
