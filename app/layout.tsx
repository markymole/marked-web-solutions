import type { Metadata } from "next";
import "./globals.css";

import { karla, outfit, oswald, montserrat, comfortaa } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "Marked: Web Solutions",
  description: "Providing excellent web solutions tailored for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${oswald.variable} ${karla.variable} ${montserrat.variable} ${comfortaa.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
