import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weoley Castle Muay Thai | Birmingham",
  description:
    "Weoley Castle Muay Thai, Birmingham. Head coach Zak Garbett. Discipline. Respect. Strength. Honour.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
