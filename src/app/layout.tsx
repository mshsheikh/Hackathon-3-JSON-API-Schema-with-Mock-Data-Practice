import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";
import { createClient } from "@/utils/supabase/client";
import { Providers } from "../redux/provider";

const poppinssemibold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppinssemibold",
});

const interbold = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-interbold",
});

const poppinsregular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppinsregular",
});

const poppinsmedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppinsmedium",
});

export const metadata: Metadata = {
  title: "Exclusive Ecommerce App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${poppinssemibold.variable}${poppinsregular.variable}${interbold.variable} ${poppinsmedium.variable} font-poppinsregular`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}