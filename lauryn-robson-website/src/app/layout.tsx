import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavLinks } from "./ui/nav-links";

export const metadata: Metadata = {
  title: "Lauryn Robson",
  description: "This is the offical website of Lauryn Robson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
