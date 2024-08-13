import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import { storeDescription, storeName } from "@/utils/data";
import Header from "@/components/header";
import AnimationProvider from "@/providers/animation";
import CartProvider from "@/providers/cart";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: storeName,
  description: storeDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <AnimationProvider>
            <div className="w-full h-screen relative bg-cusgray">
              <Header />
              {children}
              <ToastContainer />
              <Analytics />
            </div>
          </AnimationProvider>
        </CartProvider>
      </body>
    </html>
  );
}
