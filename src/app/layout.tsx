import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const YekanBakhFont = localFont({
  src: "../../public/fonts/Farsi Numerals/Webfonts/woff/YekanBakhFaNum-Light.woff",
  variable: "--font-yekanbakh",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "هلدینگ ودود",
  description: "هلدینگ ودود",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-ir" dir="rtl">
      <body className={YekanBakhFont.className}>{children}</body>
    </html>
  );
}
