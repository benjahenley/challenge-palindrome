import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const switzer = localFont({
  src: "./fonts/Switzer-Variable.ttf",
  variable: "--font-switzer",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Palindrome Checker",
  description: "Check if a word is a palindrome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${switzer.variable} h-full w-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
