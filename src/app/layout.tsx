import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Swimming Course App",
  description: "Book swimming lessons and view coach info.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="w-full bg-white/80 backdrop-blur-md border-b border-[#e8ecf4] sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🏊‍♂️</span>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#111827'
              }}>
                Swim Coach
              </span>
            </div>
            <Navigation />
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-12 min-h-[80vh]">{children}</main>
        <footer className="w-full border-t border-[#e8ecf4] py-8 mt-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center text-sm text-[#64748b]">
            &copy; {new Date().getFullYear()} Swim Coach. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
