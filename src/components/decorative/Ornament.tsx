interface OrnamentProps {
  type?: "corner" | "flourish" | "bullet";
  className?: string;
}

export function Ornament({ type = "flourish", className = "" }: OrnamentProps) {
  if (type === "corner") {
    return (
      <svg
        className={`w-6 h-6 text-tenenbaum-camel ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 3 L3 12 M3 3 L12 3" />
        <path d="M6 6 L6 9 M6 6 L9 6" />
      </svg>
    );
  }

  if (type === "bullet") {
    return (
      <span className={`text-tenenbaum-camel ${className}`}>◆</span>
    );
  }

  // Default: flourish
  return (
    <svg
      className={`w-16 h-4 text-tenenbaum-camel ${className}`}
      viewBox="0 0 64 16"
      fill="currentColor"
    >
      <circle cx="32" cy="8" r="3" />
      <path d="M0 8 Q16 0 28 8 M36 8 Q48 16 64 8" stroke="currentColor" fill="none" strokeWidth="1" />
    </svg>
  );
}
