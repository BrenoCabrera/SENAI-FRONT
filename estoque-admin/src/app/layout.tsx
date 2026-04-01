"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>Painel Administrativo</h1>
        </header>

        <nav>
          <ul>
            <li className={pathname === "/" ? "active" : ""}>
              <Link href="/">Início</Link>
            </li>
            <li className={pathname.startsWith("/telas/categoria") ? "active" : ""}>
              <Link href="/telas/categoria/lista">Categoria</Link>
            </li>
            <li className={pathname.startsWith("/telas/unidadeMedida") ? "active" : ""}>
              <Link href="/telas/unidadeMedida/lista">Unidade de Medida</Link>
            </li>
            <li className={pathname.startsWith("/telas/produto") ? "active" : ""}>
              <Link href="/telas/produto/pesquisa">Produto</Link>
            </li>
          </ul>
        </nav>

        <main>
          {children}
        </main>

        <footer>
          <p>Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}