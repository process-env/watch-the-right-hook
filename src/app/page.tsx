import Link from "next/link";
import { tableOfContents, getChapterRoman } from "@/lib/toc";

export default function Home() {
  return (
    <div className="min-h-screen bg-tenenbaum-cream">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative border */}
        <div className="absolute inset-4 border-[3px] border-double border-tenenbaum-camel pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-8 py-20 sm:py-28 text-center">
          {/* Ornamental header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-16 bg-tenenbaum-camel" />
            <span className="text-[10px] tracking-[0.3em] text-tenenbaum-brown/60 uppercase">
              A Technical Reference
            </span>
            <span className="h-px w-16 bg-tenenbaum-camel" />
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.08em] text-tenenbaum-brown mb-6 font-[family-name:var(--font-playfair)]">
            WATCH THE
            <br />
            <span className="text-tenenbaum-red">RIGHT HOOK</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-tenenbaum-brown/80 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-crimson)] italic">
            A comprehensive guide to React Hooks—from fundamentals to advanced patterns
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-12 bg-tenenbaum-camel" />
            <span className="text-tenenbaum-camel">◆</span>
            <span className="h-px w-12 bg-tenenbaum-camel" />
          </div>

          {/* CTA */}
          <Link
            href="/chapters/01-fight-changed"
            className="inline-block px-8 py-4 bg-tenenbaum-red font-semibold tracking-[0.1em] uppercase text-sm hover:bg-tenenbaum-brown transition-colors border-none shadow-md"
            style={{ color: '#FFFFFF' }}
          >
            Begin Reading
          </Link>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-tenenbaum-brown font-[family-name:var(--font-playfair)]">25</div>
              <div className="text-xs tracking-[0.15em] text-tenenbaum-brown/60 uppercase">Chapters</div>
            </div>
            <div className="h-8 w-px bg-tenenbaum-camel" />
            <div>
              <div className="text-3xl font-bold text-tenenbaum-brown font-[family-name:var(--font-playfair)]">15+</div>
              <div className="text-xs tracking-[0.15em] text-tenenbaum-brown/60 uppercase">React Hooks</div>
            </div>
            <div className="h-8 w-px bg-tenenbaum-camel" />
            <div>
              <div className="text-3xl font-bold text-tenenbaum-brown font-[family-name:var(--font-playfair)]">X</div>
              <div className="text-xs tracking-[0.15em] text-tenenbaum-brown/60 uppercase">Parts</div>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-[0.1em] text-tenenbaum-brown uppercase mb-4 font-[family-name:var(--font-playfair)]">
            Table of Contents
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-tenenbaum-camel" />
            <span className="text-tenenbaum-camel">◇</span>
            <span className="h-px w-20 bg-tenenbaum-camel" />
          </div>
        </div>

        {/* Parts grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {tableOfContents.map((part, partIndex) => (
            <div
              key={part.title}
              className="border-2 border-tenenbaum-camel p-6 bg-surface"
            >
              {/* Part header */}
              <div className="text-center mb-4 pb-4 border-b border-tenenbaum-camel">
                <span className="text-[10px] tracking-[0.2em] text-tenenbaum-brown/50 block mb-1">
                  PART {getChapterRoman(partIndex + 1)}
                </span>
                <h3 className="text-sm tracking-[0.15em] text-tenenbaum-brown font-semibold uppercase">
                  {part.title}
                </h3>
              </div>

              {/* Chapters */}
              <ul className="space-y-2">
                {part.chapters.map((chapter) => (
                  <li key={chapter.slug}>
                    <Link
                      href={`/chapters/${chapter.slug}`}
                      className="flex items-center gap-3 py-1 text-tenenbaum-brown hover:text-tenenbaum-red transition-colors group"
                    >
                      <span className="text-xs text-tenenbaum-brown/40 w-6 group-hover:text-tenenbaum-red/60">
                        {chapter.number <= 25 ? `${chapter.number}.` : ""}
                      </span>
                      <span className="text-sm">{chapter.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-tenenbaum-camel py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-tenenbaum-camel" />
            <span className="text-[10px] tracking-[0.2em] text-tenenbaum-brown/50 uppercase">
              A React Hooks Reference
            </span>
            <span className="h-px w-8 bg-tenenbaum-camel" />
          </div>
          <p className="text-xs text-tenenbaum-brown/50">
            Built with Next.js • Styled with Tailwind CSS • Inspired by Wes Anderson
          </p>
        </div>
      </footer>
    </div>
  );
}
