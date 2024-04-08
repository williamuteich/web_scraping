<<<<<<< HEAD


import Menulateral from "@/components/menuLateral/page";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex gap-3  w-full h-screen box-sh">
          <div className="w-64 pt-0 pl-6 text-lg relative">
            <Menulateral />
          </div>
          <div className="pt-4 pb-4 w-full pl-8 pr-8">
              <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
=======


import Menulateral from "@/components/menuLateral/page";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex gap-3  w-full h-screen box-sh">
          <div className="w-64 pt-0 pl-6 text-lg relative">
            <Menulateral />
          </div>
          <div className="pt-4 pb-4 w-full pl-8 pr-8">
              <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
>>>>>>> cc0b112b7d6b5b1ba822c0d31a29adfc7e5bb211
