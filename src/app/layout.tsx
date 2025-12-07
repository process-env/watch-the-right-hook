import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Display font for chapter titles and headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body font for prose content
const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Monospace font for code
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Watch the RIGHT Hook | A React Hooks Reference",
  description: "A comprehensive guide to React Hooks - from fundamentals to advanced patterns. Master useState, useEffect, useRef, and every hook in the React arsenal.",
  keywords: ["React", "Hooks", "useState", "useEffect", "useRef", "JavaScript", "TypeScript", "Frontend"],
  authors: [{ name: "Watch the RIGHT Hook" }],
  openGraph: {
    title: "Watch the RIGHT Hook",
    description: "A comprehensive guide to React Hooks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${crimson.variable} ${ibmPlexMono.variable} antialiased paper-texture`}
      >
        {children}
      </body>
    </html>
  );
}
