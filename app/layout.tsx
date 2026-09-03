import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./experience.css";
import "./media.css";
import "./pages.css";
import "./work.css";
import "./interactions.css";
import "./polish.css";
import "./case-study.css";
import "./navigation.css";
import "./engineering-map.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarun Kumar Sahu | Software Engineer",
  description:
    "Portfolio of Tarun Kumar Sahu — software engineering, AI systems, backend development, robotics and connected hardware.",
  keywords: [
    "Tarun Kumar Sahu",
    "Software Engineer",
    "AI Developer",
    "Backend Developer",
    "Robotics",
    "IoT",
  ],
  authors: [{ name: "Tarun Kumar Sahu" }],
  creator: "Tarun Kumar Sahu",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
