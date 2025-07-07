import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mi app con next",
  description: "App desarrollada por Hiram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body>{children}</body>
    </html>
  );
}
