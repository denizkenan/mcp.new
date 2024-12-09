import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NavBar } from "@/components/nav-bar";
import { PixelClouds } from "@/components/pixel-clouds";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MCP.new - Model Context Protocol Server Registry",
  description: "Discover and share Model Context Protocol (MCP) servers. MCP standardizes how developers integrate Large Language Models with external tools and data sources.",
  keywords: ["MCP", "Model Context Protocol", "LLM", "AI", "Machine Learning", "API", "Integration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        <PixelClouds /> 
        <NavBar />
        <main className="flex-grow relative overflow-hidden mt-12">
          {children}
        </main>
        <footer className="relative h-32">
          <div className="absolute inset-0  to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p>Made with 💙 by DONEW</p>
              <p className="text-sm">DoNEW © 2024</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
