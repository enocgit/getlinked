import { Providers } from "@/providers";
import "./globals.css";
import "./clash-display.css";
import "./animation.css";
import type { Metadata } from "next";
import { Montserrat, Unica_One } from "next/font/google";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "GetLinked",
  description: "Generated by Get Linked",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} bg-secondary`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
