import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FormProvider from "../store/form-context";

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
      <FormProvider>
        <body className={inter.className}>{children}</body>
      </FormProvider>
    </html>
  );
}