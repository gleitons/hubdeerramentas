import type { Metadata } from "next";
import "./globals.css";
import MenuLateral from "@/app/components/menu/MenuLateral";

export const metadata: Metadata = {
  title: "HUB DE FERRAMENTAS",
  description: "EM CONSTRUÇÃO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex fundo-apresentacao">
          <div className="md:w-[360px]">
            <MenuLateral />
          </div>
          <div >
            <div className="h-[40px] items-center p-2 justify-center text-white   bg-blue-400">
              <strong>
                HUB DE FERRAMENTAS - FERRAMENTAS DIGITAIS COM USO ILIMITADO
              </strong>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
