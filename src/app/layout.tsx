import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const YekanBakhFontBold = localFont({
  src: "../../public/fonts/Farsi Numerals/Webfonts/woff/YekanBakhFaNum-bold.woff",
  variable: "--font-yekanbakh",
  display: "swap",
  weight: "400",
});
export const YekanBakhFontLight = localFont({
  src: "../../public/fonts/Farsi Numerals/Webfonts/woff/YekanBakhFaNum-regular.woff",
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
      <header>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </header>
      <body className={YekanBakhFontLight.className}>{children}</body>
    </html>
  );
}
