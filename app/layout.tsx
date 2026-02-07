import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Yadav | Frontend Product Engineer",
  description:
    "Frontend Product Engineer building scalable React and React Native applications for global teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          bg-white text-neutral-900
          dark:bg-neutral-950 dark:text-neutral-100
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
