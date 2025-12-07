interface DividerProps {
  variant?: "simple" | "ornate" | "elaborate";
  className?: string;
}

export function Divider({ variant = "ornate", className = "" }: DividerProps) {
  if (variant === "simple") {
    return (
      <div className={`flex items-center justify-center my-8 ${className}`}>
        <span className="h-px flex-1 max-w-24 bg-tenenbaum-camel" />
      </div>
    );
  }

  if (variant === "elaborate") {
    return (
      <div className={`flex items-center justify-center gap-3 my-10 ${className}`}>
        <span className="h-px w-12 bg-tenenbaum-camel" />
        <span className="text-tenenbaum-camel text-sm">◆ ◇ ◆</span>
        <span className="h-px w-12 bg-tenenbaum-camel" />
      </div>
    );
  }

  // Default: ornate
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <span className="h-px w-16 bg-tenenbaum-camel" />
      <span className="text-tenenbaum-camel">◇</span>
      <span className="h-px w-16 bg-tenenbaum-camel" />
    </div>
  );
}
