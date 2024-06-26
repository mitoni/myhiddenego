import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { CirclePointer } from "@/components/CirclePointer";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "My Hidden Ego",
  description: "MHE - PROJECT",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CirclePointer />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
