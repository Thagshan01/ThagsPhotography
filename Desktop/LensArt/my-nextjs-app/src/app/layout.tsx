import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thagshan Arulsivam | Photographer Portfolio",
  description: "Explore the stunning portfolio of Thagshan Arulsivam, a talented photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
