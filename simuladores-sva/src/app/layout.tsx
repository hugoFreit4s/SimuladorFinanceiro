import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DisableProvider } from "../../context/disableContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador SVA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DisableProvider>
        <body className={inter.className}>{children}</body>
      </DisableProvider>
    </html>
  );
}