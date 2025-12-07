import type { MDXComponents } from "mdx/types";
import { Callout, CodePlayground, HookCard } from "@/components/mdx";
import { Divider, Ornament, ChapterPlate } from "@/components/decorative";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // MDX content components
    Callout,
    CodePlayground,
    HookCard,
    // Decorative components
    Divider,
    Ornament,
    ChapterPlate,
    ...components,
  };
}
