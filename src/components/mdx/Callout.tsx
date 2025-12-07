import { ReactNode } from "react";

type CalloutType = "tip" | "warning" | "info" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const styles: Record<CalloutType, { bg: string; border: string; accent: string; icon: string }> = {
  tip: {
    bg: "bg-[#f7faf0]",
    border: "border-tenenbaum-sage",
    accent: "text-tenenbaum-sage",
    icon: "TIP",
  },
  warning: {
    bg: "bg-[#fdf8e7]",
    border: "border-tenenbaum-mustard",
    accent: "text-tenenbaum-mustard",
    icon: "NOTE",
  },
  info: {
    bg: "bg-[#faf5f0]",
    border: "border-tenenbaum-camel",
    accent: "text-tenenbaum-camel",
    icon: "INFO",
  },
  danger: {
    bg: "bg-[#fdf5f3]",
    border: "border-tenenbaum-red",
    accent: "text-tenenbaum-red",
    icon: "CAUTION",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = styles[type];
  const displayTitle = title || style.icon;

  return (
    <div className={`my-8 ${style.bg} border-2 ${style.border} relative`}>
      {/* Top border ornament */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-inherit px-4">
        <span className={`text-xs font-semibold tracking-[0.2em] ${style.accent}`}>
          {displayTitle}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 pt-8 text-center">
        <div className="prose prose-sm max-w-none text-tenenbaum-brown [&>p]:mb-0">
          {children}
        </div>
      </div>

      {/* Corner ornaments */}
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${style.border}`} />
      <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${style.border}`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${style.border}`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${style.border}`} />
    </div>
  );
}
