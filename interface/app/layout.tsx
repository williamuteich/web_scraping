import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menulateral from "@/components/menuLateral/page";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-black  ${inter.className}`}>
        <body>
        <div className="flex  w-full h-auto box-sh">
          <div className="pt-0 pl-1 text-lg relative text-corSecundaria  bg-[var(--corPrincipal)]" style={{ position: 'relative', width: 'calc(100% - 85%)', height: '100vh' }}>
            <Menulateral />
          </div>
          <div className="pt-4 pb-4 w-full pl-4 pr-4 flex flex-col gap-8">
              {children}
              <Footer/>
          </div>
        </div>
      </body>
      </body>
    </html>
  );
}