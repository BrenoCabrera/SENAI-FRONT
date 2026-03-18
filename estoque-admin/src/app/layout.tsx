import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>

        <header>
          <h1>Painel Administrativo</h1>
        </header>

        <nav>
          <ul>
      <Link href={"/"}>
        <li>Início</li>
      </Link>
      <Link href={"/telas/categoria/lista"}>
       <li>Categoria</li>
      </Link>
      <Link href={"/telas/unidadeMedida/lista"}>
        <li>Unidade de Medida</li>
      </Link>
      <Link href={"/telas/produto/pesquisa"}>
        <li>Produto</li>
      </Link>
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
