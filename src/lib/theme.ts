/**
 * Royal Tenenbaums Theme
 *
 * A Wes Anderson-inspired design system featuring warm browns,
 * deep reds, and the aesthetic of a 1970s NYC library book.
 */

export const tenenbaumTheme = {
  colors: {
    // Primary palette (from the film)
    red: '#8B2500',        // Tenenbaum tracksuit red
    camel: '#D4A574',      // Margot's fur coat
    cream: '#FFF8E7',      // Vintage book pages
    brown: '#5D4037',      // Library wood
    sage: '#A7BA42',       // Margot's coat
    mustard: '#C9A227',    // 70s wallpaper accent
    headband: '#E8D4B8',   // Richie's headband beige
    dark: '#1A1A1A',       // Dalmatian spots

    // Semantic colors
    background: '#FFF8E7',
    surface: '#FDFBF7',
    text: '#5D4037',
    textMuted: '#8B7355',
    border: '#D4A574',
    accent: '#8B2500',
  },

  // Hook category colors (Tenenbaum family inspired)
  hookCategories: {
    state: '#8B2500',      // Red - Tenenbaum tracksuit
    effect: '#A7BA42',     // Sage - Margot's coat
    ref: '#5D4037',        // Brown - Library shelves
    context: '#C9A227',    // Mustard - 70s wallpaper
    performance: '#D4A574', // Camel - Margot's fur
    form: '#E8D4B8',       // Cream - Book pages
  },

  fonts: {
    display: '"Playfair Display", Georgia, serif',
    heading: '"Futura PT", "Century Gothic", sans-serif',
    body: '"Crimson Text", Georgia, serif',
    mono: '"IBM Plex Mono", "Courier New", monospace',
  },

  spacing: {
    symmetrical: '2rem',
    gutter: '3rem',
    ornamentPadding: '1.5rem',
  },

  borders: {
    frame: '3px double',
    ornate: '2px solid',
    subtle: '1px solid',
    radius: '2px',
  },

  decorations: {
    cornerOrnament: true,
    chapterPlates: true,
    dividers: 'ornate' as const,
  },
} as const;

export type TenenbaumTheme = typeof tenenbaumTheme;

// CSS custom property names
export const cssVars = {
  // Colors
  '--tenenbaum-red': tenenbaumTheme.colors.red,
  '--tenenbaum-camel': tenenbaumTheme.colors.camel,
  '--tenenbaum-cream': tenenbaumTheme.colors.cream,
  '--tenenbaum-brown': tenenbaumTheme.colors.brown,
  '--tenenbaum-sage': tenenbaumTheme.colors.sage,
  '--tenenbaum-mustard': tenenbaumTheme.colors.mustard,
  '--tenenbaum-headband': tenenbaumTheme.colors.headband,
  '--tenenbaum-dark': tenenbaumTheme.colors.dark,

  // Semantic
  '--background': tenenbaumTheme.colors.background,
  '--surface': tenenbaumTheme.colors.surface,
  '--text': tenenbaumTheme.colors.text,
  '--text-muted': tenenbaumTheme.colors.textMuted,
  '--border': tenenbaumTheme.colors.border,
  '--accent': tenenbaumTheme.colors.accent,

  // Fonts
  '--font-display': tenenbaumTheme.fonts.display,
  '--font-heading': tenenbaumTheme.fonts.heading,
  '--font-body': tenenbaumTheme.fonts.body,
  '--font-mono': tenenbaumTheme.fonts.mono,
} as const;

// Roman numeral converter for chapter numbers
export function toRomanNumeral(num: number): string {
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  let result = '';
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
