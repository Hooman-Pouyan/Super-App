import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const YekanBakhFontLight = localFont({
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
      <head>
        <link rel="icon" href="./favicon.webp" sizes="any" />
      </head>
      <body className={YekanBakhFontLight.className}>{children}</body>
    </html>
  );
}
