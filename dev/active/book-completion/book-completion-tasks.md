# Book Completion - Task Checklist

**Last Updated: 2025-12-05**

---

## Phase 1: Site Structure (Critical)

### 1.1 Create Book Layout Component
- [ ] Create `src/components/layout/BookLayout.tsx`
- [ ] Add header with book title
- [ ] Add sidebar container
- [ ] Add main content area
- [ ] Add footer

### 1.2 Build Table of Contents Data
- [ ] Create `src/lib/toc.ts` with chapter metadata
- [ ] Define Part and Chapter types
- [ ] Export ordered list of all chapters
- [ ] Include titles, slugs, and part groupings

### 1.3 Implement Navigation Sidebar
- [ ] Create `src/components/layout/Sidebar.tsx`
- [ ] Show parts as collapsible sections
- [ ] Highlight current chapter
- [ ] Make scrollable if too tall

### 1.4 Add Prev/Next Navigation
- [ ] Create `src/components/layout/ChapterNav.tsx`
- [ ] Add previous chapter link
- [ ] Add next chapter link
- [ ] Handle first/last chapters

### 1.5 Create Proper Homepage
- [ ] Replace default `src/app/page.tsx`
- [ ] Add book title and tagline
- [ ] Add brief description
- [ ] Add "Start Reading" CTA
- [ ] Add table of contents preview

### 1.6 Add Mobile Navigation
- [ ] Create hamburger menu button
- [ ] Add slide-out sidebar for mobile
- [ ] Handle body scroll lock
- [ ] Add close button/overlay

### 1.7 Cleanup
- [ ] Remove `content/` directory (duplicate MDX)
- [ ] Remove unused assets

---

## Phase 2: Interactive Features

### 2.1 Sandpack Templates
- [ ] Create base React template
- [ ] Create hook-specific templates
- [ ] Configure theme options
- [ ] Test in isolated environment

### 2.2 Wire Up Code Playgrounds
- [ ] Identify chapters needing playgrounds
- [ ] Add `<CodePlayground>` with actual code
- [ ] Test each playground works
- [ ] Add reset button

### 2.3 Search Functionality
- [ ] Install flexsearch
- [ ] Build search index at build time
- [ ] Create search component
- [ ] Add keyboard shortcut (Cmd/Ctrl + K)
- [ ] Show results with chapter links

### 2.4 Dark Mode
- [ ] Install next-themes
- [ ] Add ThemeProvider
- [ ] Create toggle component
- [ ] Persist preference

### 2.5 Copy to Clipboard
- [ ] Add copy button to code blocks
- [ ] Show success feedback
- [ ] Handle clipboard API

---

## Phase 3: Polish & Styling

### 3.1 Typography System
- [ ] Choose heading font
- [ ] Choose body font
- [ ] Choose code font (monospace)
- [ ] Define size scale
- [ ] Define line heights

### 3.2 Color Palette
- [ ] Define primary color
- [ ] Define accent colors
- [ ] Define code block colors
- [ ] Define callout colors
- [ ] Test contrast ratios

### 3.3 Code Block Styling
- [ ] Install rehype-highlight
- [ ] Choose syntax theme
- [ ] Style line numbers (optional)
- [ ] Style inline code
- [ ] Add language badge

### 3.4 MDX Component Styling
- [ ] Style Callout variants (tip, warning, info)
- [ ] Style HookCard
- [ ] Style tables
- [ ] Style lists
- [ ] Style blockquotes

### 3.5 Responsive Design
- [ ] Test on mobile (320px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1024px+)
- [ ] Fix any layout issues
- [ ] Test navigation at all sizes

### 3.6 Diagrams (Optional)
- [ ] Identify chapters needing diagrams
- [ ] Create hook lifecycle diagram
- [ ] Create state flow diagrams
- [ ] Add to relevant chapters

### 3.7 Print Stylesheet
- [ ] Hide navigation in print
- [ ] Optimize typography for print
- [ ] Handle page breaks

---

## Phase 4: Deployment

### 4.1 Vercel Setup
- [ ] Connect GitHub repo to Vercel
- [ ] Configure build settings
- [ ] Verify build succeeds
- [ ] Check preview deployment

### 4.2 Meta Tags
- [ ] Add `<title>` template
- [ ] Add description meta
- [ ] Add OpenGraph image
- [ ] Add Twitter card tags
- [ ] Test social previews

### 4.3 Sitemap
- [ ] Install/configure next-sitemap
- [ ] Generate sitemap.xml
- [ ] Add robots.txt

### 4.4 Branding
- [ ] Create favicon
- [ ] Create apple-touch-icon
- [ ] Add manifest.json

### 4.5 Analytics (Optional)
- [ ] Choose provider (Vercel/Plausible)
- [ ] Add tracking script
- [ ] Verify data collection

### 4.6 Domain (Optional)
- [ ] Purchase/configure domain
- [ ] Update Vercel settings
- [ ] Verify SSL

---

## Quick Reference

### Effort Legend
- **S** = Small (< 30 min)
- **M** = Medium (30 min - 2 hours)
- **L** = Large (2+ hours)
- **XL** = Extra Large (4+ hours)

### Priority Order
1. ⭐ Phase 1.1-1.5 (Navigation)
2. ⭐ Phase 4.1-4.2 (Deploy)
3. Phase 3.1-3.4 (Styling)
4. Phase 2.1-2.2 (Playgrounds)
5. Everything else

### Commands to Run After Changes
```bash
npm run build   # Verify build
npm run dev     # Test locally
```

---

## Progress Tracking

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1 | Not Started | 0% |
| Phase 2 | Not Started | 0% |
| Phase 3 | Not Started | 0% |
| Phase 4 | Not Started | 0% |

**Overall Progress**: Content complete, infrastructure pending
