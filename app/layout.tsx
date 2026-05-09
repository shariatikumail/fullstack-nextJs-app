import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-black">
        
        {/* Header */}
        <header className="border-b p-4">
          <nav className="max-w-5xl mx-auto flex gap-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t p-4 text-center text-sm text-gray-500">
          © 2026 My App
        </footer>

      </body>
    </html>
  );
}