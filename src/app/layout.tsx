import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import HeaderLayout from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Pixel Palace",
  description: "App videogames",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" />
        {/* @ts-ignore */}
        <title>{metadata?.title}</title>
      </head>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <SessionAuthProvider>
        <HeaderLayout />
         {children}
        </SessionAuthProvider>
      </body>
    </html>
  );
}
