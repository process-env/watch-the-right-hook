import { toRomanNumeral } from "@/lib/theme";

interface ChapterPlateProps {
  number: number;
  title: string;
  subtitle?: string;
}

export function ChapterPlate({ number, title, subtitle }: ChapterPlateProps) {
  const isAppendix = number > 25;
  const displayNumber = isAppendix
    ? ["A", "B", "C"][number - 26] || "A"
    : toRomanNumeral(number);

  return (
    <div className="text-center mb-12 py-8 border-[3px] border-double border-tenenbaum-camel bg-surface">
      {/* Chapter label */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-12 bg-tenenbaum-camel" />
        <span className="text-[10px] tracking-[0.3em] text-tenenbaum-brown/60 uppercase">
          {isAppendix ? "Appendix" : "Chapter"}
        </span>
        <span className="h-px w-12 bg-tenenbaum-camel" />
      </div>

      {/* Number */}
      <div className="text-4xl font-bold text-tenenbaum-brown mb-4 font-[family-name:var(--font-playfair)]">
        {displayNumber}
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="h-px w-8 bg-tenenbaum-camel" />
        <span className="text-tenenbaum-camel text-xs">◆</span>
        <span className="h-px w-8 bg-tenenbaum-camel" />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-[0.05em] text-tenenbaum-brown uppercase mb-2 font-[family-name:var(--font-playfair)]">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-tenenbaum-brown/70 italic font-[family-name:var(--font-crimson)]">
          &ldquo;{subtitle}&rdquo;
        </p>
      )}
    </div>
  );
}
