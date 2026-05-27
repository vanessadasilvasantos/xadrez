import type { Metadata } from "next";
import { Inter, Unica_One } from 'next/font/google'
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: '500',
});

const unicaOne = Unica_One({
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unica'
});

export const metadata: Metadata = {
  title: "Xadrez",
  description: "Aprenda sobre xadrez - tabuleiro, peças e regras",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${unicaOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
