"use client";

import { Sandpack } from "@codesandbox/sandpack-react";

interface CodePlaygroundProps {
  code: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodePlayground({
  code,
  showLineNumbers = true,
  title = "INTERACTIVE EXAMPLE",
}: CodePlaygroundProps) {
  return (
    <div className="my-8 border-[3px] border-double border-tenenbaum-camel bg-surface">
      {/* Header */}
      <div className="border-b-2 border-tenenbaum-camel py-3 px-4 text-center bg-tenenbaum-cream">
        <span className="text-xs tracking-[0.2em] text-tenenbaum-brown font-semibold">
          {title}
        </span>
      </div>

      {/* Sandpack Editor */}
      <div className="p-4">
        <Sandpack
          template="react-ts"
          theme={{
            colors: {
              surface1: "#FDFBF7",
              surface2: "#FFF8E7",
              surface3: "#E8D4B8",
              clickable: "#5D4037",
              base: "#5D4037",
              disabled: "#8B7355",
              hover: "#8B2500",
              accent: "#8B2500",
              error: "#8B2500",
              errorSurface: "#fdf5f3",
            },
            syntax: {
              plain: "#5D4037",
              comment: { color: "#8B7355", fontStyle: "italic" },
              keyword: "#8B2500",
              tag: "#8B2500",
              punctuation: "#5D4037",
              definition: "#A7BA42",
              property: "#C9A227",
              static: "#D4A574",
              string: "#A7BA42",
            },
            font: {
              body: '"IBM Plex Mono", "Courier New", monospace',
              mono: '"IBM Plex Mono", "Courier New", monospace',
              size: "14px",
              lineHeight: "1.6",
            },
          }}
          files={{
            "/App.tsx": code,
          }}
          options={{
            showLineNumbers,
            showNavigator: false,
            editorHeight: 320,
            classes: {
              "sp-wrapper": "rounded-none",
              "sp-layout": "rounded-none border border-tenenbaum-camel",
            },
          }}
        />
      </div>

      {/* Footer ornament */}
      <div className="flex items-center justify-center py-2 border-t border-tenenbaum-camel">
        <div className="flex items-center gap-3 text-tenenbaum-camel">
          <span className="h-px w-8 bg-current" />
          <span className="text-xs">Edit the code to see changes</span>
          <span className="h-px w-8 bg-current" />
        </div>
      </div>
    </div>
  );
}
