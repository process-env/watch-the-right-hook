# Book Completion - Context Document

**Last Updated: 2025-12-05**

---

## Key Files

### Configuration
| File | Purpose |
|------|---------|
| `next.config.ts` | MDX configuration with @next/mdx |
| `mdx-components.tsx` | Custom MDX component mappings |
| `package.json` | Dependencies (Sandpack already installed) |
| `tailwind.config.ts` | Tailwind CSS configuration |

### Components
| File | Purpose |
|------|---------|
| `src/components/mdx/Callout.tsx` | Tip/warning/info callouts |
| `src/components/mdx/HookCard.tsx` | Hook reference cards |
| `src/components/mdx/CodePlayground.tsx` | Sandpack wrapper |
| `src/components/mdx/index.ts` | Component exports |

### Content Structure
```
src/app/chapters/
├── 01-fight-changed/page.mdx      # Part I: Foundations
├── 02-rules-of-ring/page.mdx
├── 03-choosing-right-hook/page.mdx
├── 04-usestate/page.mdx           # Part II: State Hooks
├── 05-usereducer/page.mdx
├── 06-usesyncexternalstore/page.mdx
├── 07-optimistic-actions/page.mdx
├── 08-form-status/page.mdx        # Part III: Forms
├── 09-form-patterns/page.mdx
├── 10-usecontext/page.mdx         # Part IV: Context & Data
├── 11-use-hook/page.mdx
├── 12-useeffect/page.mdx          # Part V: Effects
├── 13-layout-insertion-effects/page.mdx
├── 14-effect-antipatterns/page.mdx
├── 15-useref/page.mdx             # Part VI: Refs
├── 16-imperative-handle/page.mdx
├── 17-memo-callback/page.mdx      # Part VII: Performance
├── 18-transitions/page.mdx
├── 19-useid/page.mdx
├── 20-custom-hook-design/page.mdx # Part VIII: Custom Hooks
├── 21-domain-hooks/page.mdx
├── 22-testing-hooks/page.mdx
├── 23-hook-smells/page.mdx        # Part IX: Patterns
├── 24-frameworks/page.mdx
├── 25-legacy-migration/page.mdx
├── appendix-a-matrix/page.mdx     # Part X: Appendices
├── appendix-b-reference/page.mdx
└── appendix-c-guides/page.mdx
```

---

## Key Decisions Made

### 1. Framework Choice
- **Decision**: Next.js 15+ with App Router + custom MDX (not Nextra)
- **Rationale**: More control, simpler setup, no Nextra learning curve
- **Impact**: Need to build own navigation/layout

### 2. Content Style
- **Decision**: Light boxing theme (titles only, not metaphors in prose)
- **Rationale**: Technical audience prefers straightforward writing
- **Impact**: Title is "Watch the RIGHT Hook", content is technical

### 3. MDX Components
- **Decision**: Callout, HookCard, CodePlayground
- **Rationale**: Common patterns in technical docs
- **Impact**: Already implemented, just need styling

### 4. Code Examples
- **Decision**: Sandpack for interactive examples
- **Rationale**: Best-in-class React playground
- **Impact**: Already installed, needs wiring up

---

## Dependencies

### Installed
```json
{
  "next": "16.0.7",
  "@next/mdx": "^15.x",
  "@mdx-js/loader": "^3.x",
  "@mdx-js/react": "^3.x",
  "@codesandbox/sandpack-react": "^2.x",
  "tailwindcss": "^4.x",
  "react": "19.x",
  "typescript": "^5.x"
}
```

### Need to Add
```json
{
  "next-themes": "^0.4.x",          // Dark mode
  "flexsearch": "^0.7.x",           // Client-side search
  "rehype-highlight": "^7.x",       // Syntax highlighting
  "remark-gfm": "^4.x"              // Tables, strikethrough
}
```

---

## Design Decisions Pending

### Navigation
- [ ] Sidebar on left or right?
- [ ] Collapsible parts/chapters?
- [ ] Breadcrumbs?

### Styling
- [ ] Color scheme (currently using default Tailwind)
- [ ] Font choice (currently system fonts)
- [ ] Code block theme (dark/light)

### Features
- [ ] Reading progress indicator?
- [ ] Table of contents per chapter?
- [ ] Social share buttons?

---

## Technical Constraints

1. **Static Generation**: All pages are statically generated (good for performance)
2. **MDX Parsing**: Custom components must be registered in `mdx-components.tsx`
3. **Sandpack**: Each playground adds ~200KB to bundle (lazy load recommended)
4. **App Router**: Using React 19 with Server Components

---

## Content Patterns Used

### Chapter Structure
Every chapter follows this pattern:
```mdx
# Chapter Title

Introduction paragraph...

## Learning Outcomes
- Outcome 1
- Outcome 2

## Section 1
Content...

<Callout type="tip">
Helpful tip
</Callout>

## Summary
Key takeaways...

<HookCard
  name="hookName"
  signature="..."
  description="..."
  category="..."
/>

## Exercises
### Warm-up
### Core
### Stretch
```

### Code Example Pattern
```tsx
// ❌ Wrong: Anti-pattern
code...

// ✅ Right: Best practice
code...
```

---

## File Locations for Common Tasks

| Task | Location |
|------|----------|
| Add new chapter | `src/app/chapters/XX-name/page.mdx` |
| Modify MDX components | `src/components/mdx/` |
| Update MDX config | `mdx-components.tsx` |
| Add global styles | `src/app/globals.css` |
| Configure build | `next.config.ts` |

---

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Type check
npx tsc --noEmit
```
