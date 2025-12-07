import { toRomanNumeral } from './theme';

export interface Chapter {
  slug: string;
  title: string;
  subtitle?: string;
  number: number;
}

export interface Part {
  title: string;
  chapters: Chapter[];
}

export const tableOfContents: Part[] = [
  {
    title: "FOUNDATIONS",
    chapters: [
      { slug: "01-fight-changed", title: "The Fight Has Changed", subtitle: "Why Hooks Won", number: 1 },
      { slug: "02-rules-of-ring", title: "Rules of the Ring", subtitle: "The Laws of Hooks", number: 2 },
      { slug: "03-choosing-right-hook", title: "Choosing the Right Hook", subtitle: "Selection Strategy", number: 3 },
    ],
  },
  {
    title: "STATE HOOKS",
    chapters: [
      { slug: "04-usestate", title: "useState", subtitle: "Local State Fundamentals", number: 4 },
      { slug: "05-usereducer", title: "useReducer", subtitle: "Complex State Logic", number: 5 },
      { slug: "06-usesyncexternalstore", title: "useSyncExternalStore", subtitle: "External State Sources", number: 6 },
      { slug: "07-optimistic-actions", title: "Optimistic Updates", subtitle: "useOptimistic & useActionState", number: 7 },
    ],
  },
  {
    title: "FORMS & ACTIONS",
    chapters: [
      { slug: "08-form-status", title: "useFormStatus", subtitle: "Form State Awareness", number: 8 },
      { slug: "09-form-patterns", title: "Form Patterns", subtitle: "Building Form Systems", number: 9 },
    ],
  },
  {
    title: "CONTEXT & DATA",
    chapters: [
      { slug: "10-usecontext", title: "useContext", subtitle: "Dependency Injection", number: 10 },
      { slug: "11-use-hook", title: "use", subtitle: "The Promise Hook", number: 11 },
    ],
  },
  {
    title: "EFFECTS",
    chapters: [
      { slug: "12-useeffect", title: "useEffect", subtitle: "Side Effects & Sync", number: 12 },
      { slug: "13-layout-insertion-effects", title: "Layout Effects", subtitle: "useLayoutEffect & useInsertionEffect", number: 13 },
      { slug: "14-effect-antipatterns", title: "Effect Antipatterns", subtitle: "What Not To Do", number: 14 },
    ],
  },
  {
    title: "REFS",
    chapters: [
      { slug: "15-useref", title: "useRef", subtitle: "Mutable References", number: 15 },
      { slug: "16-imperative-handle", title: "useImperativeHandle", subtitle: "Ref Customization", number: 16 },
    ],
  },
  {
    title: "PERFORMANCE",
    chapters: [
      { slug: "17-memo-callback", title: "useMemo & useCallback", subtitle: "Memoization Strategies", number: 17 },
      { slug: "18-transitions", title: "Transitions", subtitle: "useTransition & useDeferredValue", number: 18 },
      { slug: "19-useid", title: "useId", subtitle: "Stable Identifiers", number: 19 },
    ],
  },
  {
    title: "CUSTOM HOOKS",
    chapters: [
      { slug: "20-custom-hook-design", title: "Custom Hook Design", subtitle: "Composition Patterns", number: 20 },
      { slug: "21-domain-hooks", title: "Domain Hooks", subtitle: "Real-World Examples", number: 21 },
      { slug: "22-testing-hooks", title: "Testing Hooks", subtitle: "Verification Strategies", number: 22 },
    ],
  },
  {
    title: "PATTERNS & PRACTICES",
    chapters: [
      { slug: "23-hook-smells", title: "Hook Smells", subtitle: "Code Quality Indicators", number: 23 },
      { slug: "24-frameworks", title: "Framework Integration", subtitle: "Next.js, Remix & More", number: 24 },
      { slug: "25-legacy-migration", title: "Legacy Migration", subtitle: "Class to Hooks", number: 25 },
    ],
  },
  {
    title: "APPENDICES",
    chapters: [
      { slug: "appendix-a-matrix", title: "Appendix A", subtitle: "Which Hook Do I Need?", number: 26 },
      { slug: "appendix-b-reference", title: "Appendix B", subtitle: "Hook Reference Cards", number: 27 },
      { slug: "appendix-c-guides", title: "Appendix C", subtitle: "Migration & Style Guides", number: 28 },
    ],
  },
];

// Helper to get all chapters flat
export function getAllChapters(): Chapter[] {
  return tableOfContents.flatMap(part => part.chapters);
}

// Helper to get chapter by slug
export function getChapterBySlug(slug: string): Chapter | undefined {
  return getAllChapters().find(ch => ch.slug === slug);
}

// Helper to get prev/next chapters
export function getAdjacentChapters(slug: string): { prev?: Chapter; next?: Chapter } {
  const chapters = getAllChapters();
  const index = chapters.findIndex(ch => ch.slug === slug);

  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next: index < chapters.length - 1 ? chapters[index + 1] : undefined,
  };
}

// Helper to get part number for a chapter
export function getPartNumber(slug: string): number {
  for (let i = 0; i < tableOfContents.length; i++) {
    if (tableOfContents[i].chapters.some(ch => ch.slug === slug)) {
      return i + 1;
    }
  }
  return 0;
}

// Get chapter display number (Roman numeral)
export function getChapterRoman(number: number): string {
  return toRomanNumeral(number);
}
