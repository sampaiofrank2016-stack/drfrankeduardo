import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treinamentos",
  description:
    "Treinamentos em saúde para pacientes e formações para fisioterapeutas.",
};

const paths = [
  {
    number: "01",
    label: "Para pacientes",
    title: "Entenda melhor sua saúde e participe do seu tratamento.",
    description:
      "Programas educativos para ajudar você a compreender sintomas, tratamentos e caminhos possíveis para cuidar melhor do próprio corpo.",
    href: "/treinamentos/pacientes",
    button: "Quero cuidar da minha saúde",
    features: [
      "Linguagem acessível",
      "Conteúdo baseado em experiência clínica",
      "Orientações práticas para o dia a dia",
      "Acesso no seu próprio ritmo",
    ],
    className: "training-choice-patient",
  },
  {
    number: "02",
    label: "Para fisioterapeutas",
    title: "Evolua sua prática clínica e desenvolva sua carreira.",
    description:
      "Cursos, formações e conteúdos para fisioterapeutas que desejam aprimorar o raciocínio clínico, o atendimento e a organização profissional.",
    href: "/treinamentos/fisioterapeutas",
    button: "Quero evoluir profissionalmente",
    features: [
      "Aplicação clínica",
      "Raciocínio e avaliação",
      "Experiência prática",
      "Desenvolvimento profissional",
    ],
    className: "training-choice-professional",
  },
];

const products = [
  {
    audience: "Pacientes",
    title: "Programa Fibromialgia",
    description:
      "Uma jornada educativa para compreender melhor a dor, os sintomas e as possibilidades de cuidado.",
    href: "/treinamentos/pacientes",
    status: "Disponível",
  },
  {
    audience: "Fisioterapeutas",
    title: "Formação Clínica em Ombro",
    description:
      "Conteúdo voltado à avaliação, ao raciocínio clínico e à condução de pacientes com alterações no ombro.",
    href: "/treinamentos/fisioterapeutas",
    status: "Disponível",
  },
  {
    audience: "Conteúdo de entrada",
    title: "Guias educativos",
    description:
      "Materiais objetivos para quem deseja começar a aprender sobre saúde de forma simples e acessível.",
    href: "/treinamentos/pacientes",
    status: "Em breve",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="arrow-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="check-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function TrainingsPage() {
  return (
    <div className="site-shell">
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

      <main>
        <section className="trainings-hero">
          <div className="trainings-hero-decoration trainings-circle-one" />
          <div className="trainings-hero-decoration trainings-circle-two" />

          <div className="container trainings-hero-content">
            <div className="breadcrumb">
              <Link href="/">Início</Link>
              <span>/</span>
              <strong>Treinamentos</strong>
            </div>

            <span className="eyebrow">Educação que gera transformação</span>

            <h1>
              Conhecimento para quem quer cuidar melhor ou{" "}
              <span>atender melhor.</span>
            </h1>

            <p>
              Escolha o caminho mais adequado para você e encontre conteúdos
              estruturados para transformar informação em ação.
            </p>
          </div>
        </section>

        <section className="training-choice-section">
          <div className="container">
            <div className="training-choice-heading">
              <span>Por onde você deseja começar?</span>
              <h2>Escolha seu caminho.</h2>
            </div>

            <div className="training-choice-grid">
              {paths.map((path) => (
                <article
                  className={`training-choice-card ${path.className}`}
                  key={path.title}
                >
                  <span className="training-choice-number">{path.number}</span>

                  <div className="training-choice-content">
                    <span className="training-choice-label">{path.label}</span>

                    <h3>{path.title}</h3>

                    <p>{path.description}</p>

                    <div className="training-choice-features">
                      {path.features.map((feature) => (
                        <div key={feature}>
                          <CheckIcon />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={path.href} className="training-choice-button">
                      {path.button}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-training-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Conteúdos em destaque</span>
                <h2>Treinamentos que já fazem parte do ecossistema.</h2>
              </div>

              <p className="featured-training-intro">
                A plataforma crescerá gradualmente, com novos programas,
                formações e materiais educativos.
              </p>
            </div>

            <div className="featured-training-grid">
              {products.map((product, index) => (
                <article className="featured-training-card" key={product.title}>
                  <div className="featured-training-top">
                    <span className="featured-training-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`featured-training-status ${
                        product.status === "Em breve"
                          ? "featured-training-status-soon"
                          : ""
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <span className="featured-training-audience">
                    {product.audience}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <Link href={product.href}>
                    Conhecer
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="training-method-section">
          <div className="container training-method-grid">
            <div className="training-method-heading">
              <span className="eyebrow">Nossa forma de ensinar</span>

              <h2>Conteúdo claro, aplicável e conectado à vida real.</h2>
            </div>

            <div className="training-method-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Compreender</h3>
                  <p>
                    Antes de tomar decisões, você precisa entender o problema,
                    o contexto e as possibilidades.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Aplicar</h3>
                  <p>
                    O conhecimento deve ajudar você a agir com mais segurança
                    no cotidiano ou na prática clínica.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Transformar</h3>
                  <p>
                    Educação em saúde só faz sentido quando contribui para
                    mudanças reais e sustentáveis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="training-final-cta">
          <div className="container training-final-cta-content">
            <span>Seu próximo passo começa aqui</span>

            <h2>Qual transformação você está buscando?</h2>

            <div className="training-final-actions">
              <Link
                href="/treinamentos/pacientes"
                className="button button-light"
              >
                Quero cuidar da minha saúde
              </Link>

              <Link
                href="/treinamentos/fisioterapeutas"
                className="button button-outline-light"
              >
                Sou fisioterapeuta
              </Link>
            </div>
          </div>
        </section>
      </main>

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
            <Link href="/treinamentos/pacientes">Para pacientes</Link>
            <Link href="/treinamentos/fisioterapeutas">
              Para fisioterapeutas
            </Link>
          </div>

          <div className="footer-column">
            <strong>Soluções</strong>
            <Link href="/consultorio">Consultório</Link>
            <Link href="/tecnologia/amparo-care">Amparo Care</Link>
            <Link href="/tecnologia/fisioclinic">FisioClinic</Link>
          </div>

          <div className="footer-column">
            <strong>Institucional</strong>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <a
              href="https://www.youtube.com/@professorfisio"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Dr. Frank Eduardo. Todos os direitos
            reservados.
          </p>

          <p>
            O conteúdo deste site é educativo e não substitui avaliação
            individualizada.
          </p>
        </div>
      </footer>
    </div>
  );
}