"use client";

import { useState, ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ChapterNav } from "./ChapterNav";

interface BookLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function BookLayout({ children, showNav = true }: BookLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-tenenbaum-cream">
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        showMenuButton={true}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Content */}
            <div className="prose-tenenbaum">
              {children}
            </div>

            {/* Chapter navigation */}
            {showNav && <ChapterNav />}
          </article>
        </main>
      </div>
    </div>
  );
}
