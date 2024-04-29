"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Menulateral from "@/components/menuLateral/page";
import Footer from "@/components/footer/footer";

import MenuMobileSuspenso from "@/components/menuMobile/page";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [tamanhoTela, setTamanhoTela] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanhoTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <html lang="en">
      <body className={`text-black ${inter.className}`}>
        <div className="flex w-full h-auto box-sh relative">
        {tamanhoTela <= 1085 ? (
            <div className="fixed w-full bg-white border border-gray-200 shadow-lg top-0" style={{zIndex: '99'}}>
              <MenuMobileSuspenso/>
            </div>
          ) : (
            <div className="menuLateralDahsboard pt-0 pl-1 text-lg relative text-corSecundaria bg-[var(--corPrincipal)]" style={{ position: 'fixed', width: '14.8%', height: '100vh' }}>
              <Menulateral />
            </div>
          )}
          <div className={`${tamanhoTela <= 1085 ? 'mt-14' : 'menuContent'} pt-4 pb-4 w-full pl-4 pr-4 flex flex-col gap-8`} style={{ marginLeft: tamanhoTela <= 1085 ? 0 : '15%' }}>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
