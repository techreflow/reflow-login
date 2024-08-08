import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reflow Tech",
  description: "we enhance process industries using  <br />advanced industrial iot 4.0 technologies",
  icons: {
    icon: "/lname.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={inter.className}>
        {children}
        <Toaster />
        </body>
       
      </SessionProvider>
    </html>
  )
}