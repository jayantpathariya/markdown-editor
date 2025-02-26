import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeSwitch } from "@/components/shared/theme-switch";

import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Markdown Editor",
  description: "A simple markdown editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
