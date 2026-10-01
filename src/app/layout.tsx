import type { Metadata } from "next";

import { Inter, Rubik } from "next/font/google";

import "@/src/styles/globals.css";
import "@/src/styles/themes.css";
import "@/src/styles/animations.css";

import SmoothScroll from "@/src/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNSEEN - AN UNIFIED APPLICATION",
  description: "Made with love by devs for everyone",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${rubik.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
      <div className="crt">
        <SmoothScroll>{children}</SmoothScroll>
      </div>
    </body>
    </html>
  );
}