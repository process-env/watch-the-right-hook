interface HookCardProps {
  name: string;
  signature: string;
  description: string;
  category?: "state" | "effect" | "ref" | "context" | "performance" | "form" | "identity" | "transition";
}

const categoryConfig: Record<string, { border: string; bg: string; label: string }> = {
  state: {
    border: "border-tenenbaum-red",
    bg: "bg-[#fdf5f3]",
    label: "STATE MANAGEMENT",
  },
  effect: {
    border: "border-tenenbaum-sage",
    bg: "bg-[#f7faf0]",
    label: "SIDE EFFECTS",
  },
  ref: {
    border: "border-tenenbaum-brown",
    bg: "bg-[#faf8f5]",
    label: "REFERENCES",
  },
  context: {
    border: "border-tenenbaum-mustard",
    bg: "bg-[#fdf8e7]",
    label: "CONTEXT & DATA",
  },
  performance: {
    border: "border-tenenbaum-camel",
    bg: "bg-[#faf5f0]",
    label: "PERFORMANCE",
  },
  form: {
    border: "border-tenenbaum-headband",
    bg: "bg-[#fdfbf7]",
    label: "FORMS & ACTIONS",
  },
  identity: {
    border: "border-tenenbaum-sage",
    bg: "bg-[#f7faf0]",
    label: "IDENTITY",
  },
  transition: {
    border: "border-tenenbaum-mustard",
    bg: "bg-[#fdf8e7]",
    label: "TRANSITIONS",
  },
};

const defaultConfig = {
  border: "border-tenenbaum-camel",
  bg: "bg-[#faf5f0]",
  label: "HOOK",
};

export function HookCard({
  name,
  signature,
  description,
  category = "state",
}: HookCardProps) {
  const config = categoryConfig[category] || defaultConfig;

  return (
    <div className={`my-8 ${config.bg} border-[3px] border-double ${config.border} text-center`}>
      {/* Hook Name Header */}
      <div className={`border-b-2 ${config.border} py-4 px-6`}>
        <h3 className="font-mono text-xl tracking-[0.15em] text-tenenbaum-brown m-0">
          {name}
        </h3>
      </div>

      {/* Category Label */}
      <div className={`border-b ${config.border} py-2 px-6`}>
        <span className="text-xs tracking-[0.2em] text-tenenbaum-brown/70">
          {config.label}
        </span>
      </div>

      {/* Signature Block */}
      <div className={`border-b ${config.border} py-4 px-6 bg-surface`}>
        <code className="text-sm font-mono text-tenenbaum-brown block">
          {signature}
        </code>
      </div>

      {/* Description */}
      <div className="py-4 px-6">
        <p className="text-sm text-tenenbaum-brown/90 m-0 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
