import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./header";
import Footer from "./footer";
export const metadata: Metadata = {
  title: "Lauryn Robson",
  description: "This is the official website of Lauryn Robson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
