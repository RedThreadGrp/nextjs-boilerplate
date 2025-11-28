import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cost of Care Project",
  description:
    "Independent research on healthcare pricing, claims integrity, and ASO transparency.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="site-header">
          <div className="site-header-inner">

            <nav className="site-nav">
              <Link href="/" className="site-nav-link">
                Home
              </Link>
              <Link href="/research" className="site-nav-link">
                Research
              </Link>
              <Link href="/about" className="site-nav-link">
                About
              </Link>
              <Link href="/privacy" className="site-nav-link">
                Privacy
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
