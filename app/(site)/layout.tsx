"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "../context/ToastContext";

// Load Inter font globally
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // ensures smooth font loading
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          <ToasterContext />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
