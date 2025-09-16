import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--montserrat-font'
})

export const metadata: Metadata = {
  title: "KopiKita - Coffe Shop",
  description: "Welcome to KopiKita, the best coffe shop in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
