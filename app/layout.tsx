import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NavBar } from "@/components/nav-bar";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

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
  title: "MCP.run - Model Context Protocol Server Registry",
  description: "cp.run is a service built on XTP by the team at Dylibso. Our registry enables seamless integration between AI models and applications through WebAssembly-powered plugins.",
  keywords: ["MCP", "Model Context Protocol", "LLM", "AI", "Machine Learning", "API", "Integration"],
  icons: {
    icon: '/favicon.ico',
  }
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
        <div className="fixed inset-0 -z-10">
          <AnimatedGridPattern
            numSquares={200}
            width={100}
            height={100}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          />
        </div>
        <NavBar />
        <main className="flex-grow relative overflow-hidden mt-12">
          {children}
        </main>
        <footer className="relative h-32">
          <div className="absolute inset-0 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p>Made with 💙 in cold Berlin</p>
              <p className="text-sm">donew,inc © 2025</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
