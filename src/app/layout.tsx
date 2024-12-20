import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

import { Devtools } from "@/components/(devtools)";
import { Providers } from "@/components/providers";

import "./styles/globals.css";
import { cn } from "@/lib/utils";
import { Background } from "@/components/background";
import { Nav } from "@/components/layout/nav";

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
  title: "ivojr-website",
  description: "ivojr-website",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased h-screen w-screen", geistSans.variable, geistMono.variable)}>
        <div className="flex flex-col min-h-screen">
          <Providers>
            <Background.SmallSquares>
              <div className="flex flex-col min-h-screen w-full">
                <Nav />
                {children}
              </div>
            </Background.SmallSquares>
          </Providers>
        </div>
        <Devtools.FloatingAdmin />
      </body>
    </html>
  );
}
