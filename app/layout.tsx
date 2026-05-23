import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "../components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Mateus Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}