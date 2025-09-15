import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--poppins-font',
  subsets: ['latin']
})

// metadata -> untuk optimasi SEO (Search Engine Optimization)
// title -> judul tab browser
// description -> deskripsi singkat untuk search engine
// keywords -> kata kunci seperti hashtag di ig
// openGraph -> preview saat link website kita dishare ke sosmed (instagram, X, dll.)
export const metadata: Metadata = {
  title: "KopiKita - Coffe Shop",
  description: "Welcome to KopiKita, the best coffe shop in town",
  keywords: ['coffe shop', 'kopikita', 'best coffe', 'latte'],
  authors: [{ name: 'KopiKita Team' }],
  openGraph: {
    title: 'KopiKita Coffe Shop',
    description: 'Discover our delicious coffe and cozy atmosphere',
    url: 'https://kopikita.com',
    siteName: 'KopiKita'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
