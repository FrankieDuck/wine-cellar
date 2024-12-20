import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
require('dotenv').config()


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wine Cellar",
  description: "Log your wines",
  icons: {
    icon: "/images/wine-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
