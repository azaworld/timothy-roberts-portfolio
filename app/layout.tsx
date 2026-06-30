import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Munro Roberts — Technology Founder · Enterprise Architect · AI Platform Designer",
  description:
    "For more than three decades, Timothy Munro Roberts has built the infrastructure that powers digital business — from the commercial Internet and enterprise cloud to digital commerce and AI-powered enterprise operating systems. CEO & CTO of Platformz, COO & CTO of FUR4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="grain">
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
