import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type_second } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>{children}</body>
    </html>
  );
}
