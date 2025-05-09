import type { Metadata } from "next";
import { Urbanist, Syne } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sofia Tuttolomondo | CV & Portfolio",
  description: "Curriculum Vitae e Portfolio di Sofia Tuttolomondo - Studentessa di Scienze delle Attività Motorie e Sportive",
  keywords: ["Sofia Tuttolomondo", "CV", "Portfolio", "Scienze delle Attività Motorie", "Palermo", "Marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
