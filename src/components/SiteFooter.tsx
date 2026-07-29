import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer">
            <span className="brand-mark">FE</span>
            <span className="brand-copy">
              <strong>Dr. Frank Eduardo</strong>
              <small>Educação em saúde</small>
            </span>
          </Link>
          <p>
            Conteúdo, atendimento, treinamentos e tecnologia para transformar
            a forma como pessoas cuidam da saúde.
          </p>
        </div>

        <div className="footer-column">
          <strong>Conteúdo</strong>
          <Link href="/artigos">Artigos</Link>
          <Link href="/livros/depois-dos-enta">Livros</Link>
          <Link href="/treinamentos/pacientes">Para pacientes</Link>
          <Link href="/treinamentos/fisioterapeutas">Para fisioterapeutas</Link>
        </div>

        <div className="footer-column">
          <strong>Soluções</strong>
          <Link href="/consultorio">Consultório</Link>
          <Link href="/tecnologia/fisioclinic">FisioClinic</Link>
        </div>

        <div className="footer-column">
          <strong>Institucional</strong>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <a href="https://www.youtube.com/@professorfisio" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Dr. Frank Eduardo. Todos os direitos reservados.</p>
        <p>O conteúdo deste site é educativo e não substitui avaliação individualizada.</p>
      </div>
    </footer>
  );
}