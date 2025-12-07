"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tableOfContents, getChapterRoman } from "@/lib/toc";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/chapters/")[1];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-tenenbaum-dark/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 lg:top-16 left-0 z-40
          h-screen lg:h-[calc(100vh-4rem)]
          w-72 lg:w-64
          bg-tenenbaum-cream border-r-2 border-tenenbaum-camel
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
        `}
      >
        {/* Mobile close button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-tenenbaum-camel">
          <span className="text-sm tracking-[0.15em] text-tenenbaum-brown font-semibold uppercase">
            Contents
          </span>
          <button
            onClick={onClose}
            className="p-1 text-tenenbaum-brown hover:text-tenenbaum-red transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Table of Contents */}
        <nav className="p-4">
          <div className="hidden lg:block text-center mb-6 pb-4 border-b border-tenenbaum-camel">
            <span className="text-xs tracking-[0.2em] text-tenenbaum-brown/70 uppercase">
              Table of Contents
            </span>
          </div>

          {tableOfContents.map((part, partIndex) => (
            <div key={part.title} className="mb-6">
              {/* Part header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] tracking-[0.15em] text-tenenbaum-brown/50">
                  PART {getChapterRoman(partIndex + 1)}
                </span>
                <span className="flex-1 h-px bg-tenenbaum-camel/50" />
              </div>
              <h3 className="text-xs tracking-[0.15em] text-tenenbaum-brown font-semibold mb-2 uppercase">
                {part.title}
              </h3>

              {/* Chapters */}
              <ul className="space-y-1">
                {part.chapters.map((chapter) => {
                  const isActive = currentSlug === chapter.slug;
                  const isAppendix = chapter.slug.startsWith("appendix");

                  return (
                    <li key={chapter.slug}>
                      <Link
                        href={`/chapters/${chapter.slug}`}
                        onClick={onClose}
                        className={`
                          block py-1.5 px-3 text-sm rounded transition-colors
                          ${isActive
                            ? "bg-tenenbaum-red"
                            : "text-tenenbaum-brown hover:bg-tenenbaum-headband"
                          }
                        `}
                      >
                        <span className={`
                          text-[10px] inline-block w-5 flex-shrink-0
                          ${isActive ? "text-tenenbaum-cream/70" : "text-tenenbaum-brown/50"}
                        `}>
                          {isAppendix ? "" : `${chapter.number}.`}
                        </span>
                        <span className={isActive ? "text-tenenbaum-cream font-medium" : ""}>
                          {chapter.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
