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
  title: "Palindromium | Check Palindromes Online",
  description:
    "Quickly check if a word or phrase is a palindrome with this free online tool by SurisCode",
  icons: {
    icon: "/logo-suris.png",
  },
  applicationName: "Palindromium",
  authors: [{ name: "SurisCode", url: "https://suriscode.com" }],
  keywords: ["palindrome", "checker", "word", "text", "tool", "SurisCode"],
  creator: "SurisCode Software Factory",
  publisher: "SurisCode",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  openGraph: {
    type: "website",
    title: "Palindromium by SurisCode",
    description:
      "Check if a word or phrase reads the same backwards as forwards",
    siteName: "Palindromium",
    images: [
      {
        url: "/logo-suris.png",
        width: 800,
        height: 800,
        alt: "SurisCode Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-full" suppressHydrationWarning>
      <body className={`${switzer.variable} h-full w-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
