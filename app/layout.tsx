import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { StickyContactButtons } from "@/components/layout/sticky-contact-buttons";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
  description:
    "Licensed pest control and termite protection for homes and businesses across the UAE since 1991.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <StickyContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
