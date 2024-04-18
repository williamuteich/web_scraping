import Footer from "@/components/footer/footer";
import Menulateral from "@/components/menuLateral/page";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br" >
      <Head />
      <body>
        <div className="flex  w-full h-auto box-sh">
          <div className="pt-0 pl-1 text-lg relative text-corSecundaria  bg-[var(--corPrincipal)]" style={{ position: 'relative', width: 'calc(100% - 85%)', height: '100vh' }}>
            <Menulateral />
          </div>
          <div className="pt-4 pb-4 w-full pl-4 pr-4 flex flex-col gap-8">
              <Main />
              <Footer/>
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
