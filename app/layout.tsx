import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TABERU朗読会協力店 募集｜文学×食で店のファンを育てる",
  description:
    "貸切ができるレストラン・カフェ・居酒屋向け。物語に登場する一皿を朗読とともに味わう「TABERU朗読会」の協力店を募集しています。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
