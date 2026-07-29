import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link href="/" className="brand" aria-label="Página inicial">
          <span className="brand-mark">FE</span>
          <span className="brand-copy">
            <strong>Dr. Frank Eduardo</strong>
            <small>Educação em saúde</small>
          </span>
        </Link>

        <nav className="desktop-navigation" aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/artigos">Artigos</Link>
          <Link href="/livros/depois-dos-enta">Livros</Link>
          <Link href="/treinamentos">Treinamentos</Link>
          <Link href="/tecnologia">Tecnologia</Link>
          <Link href="/consultorio">Consultório</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>

        <Link href="/consultorio" className="header-cta">
          Agendar consulta
        </Link>

        <details className="mobile-navigation">
          <summary aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </summary>

          <div className="mobile-menu">
            <Link href="/">Início</Link>
            <Link href="/artigos">Artigos</Link>
            <Link href="/livros/depois-dos-enta">Livros</Link>
            <Link href="/treinamentos">Treinamentos</Link>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/consultorio">Consultório</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/consultorio" className="mobile-menu-cta">
              Agendar consulta
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}