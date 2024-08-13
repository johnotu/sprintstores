import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { storeDescription, storeName } from "@/utils/data";
import Header from "@/components/header";
import AnimationProvider from "@/providers/animation";
import CartProvider from "@/providers/cart";

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
            </div>
          </AnimationProvider>
        </CartProvider>
      </body>
    </html>
  );
}
