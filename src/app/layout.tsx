import type { Metadata } from "next";
import "./globals.css";
import { oswald, firaSans } from "@/utils/fonts";
export const metadata: Metadata = {
  title: "Peoukraine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
