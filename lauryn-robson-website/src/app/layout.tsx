import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavLinks } from "./ui/nav-links";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
