import Link from "next/link";
import PageSchema from "@/components/schema/PageSchema";

const experienceItems = [
  {
    value: "2009",
    label: "Início da atuação profissional",
  },
  {
    value: "+15",
    label: "Anos de experiência clínica",
  },
  {
    value: "4",
    label: "Áreas conectadas no ecossistema",
  },
  {
    value: "+2 mil",
    label: "Pessoas acompanhando o canal",
  },
];

const pillars = [
  {
    number: "01",
    title: "Cuidado clínico",
    description:
      "Atendimento individualizado para pessoas com dor e alterações do movimento, com avaliação criteriosa e acompanhamento responsável.",
  },
  {
    number: "02",
    title: "Educação em saúde",
    description:
      "Conteúdos acessíveis para ajudar pacientes, famílias e cuidadores a compreender melhor sintomas, tratamentos e possibilidades de cuidado.",
  },
  {
    number: "03",
    title: "Formação profissional",
    description:
      "Cursos, treinamentos e mentorias para fisioterapeutas que desejam aprimorar a prática clínica e desenvolver a carreira.",
  },
  {
    number: "04",
    title: "Tecnologia",
    description:
      "Desenvolvimento de soluções digitais para organizar o cuidado, apoiar profissionais e facilitar a rotina de famílias e cuidadores.",
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

export default function SobrePage() {
  return (
    <>
      <PageSchema
        type="AboutPage"
        title="Sobre o Dr. Frank Eduardo"
        description="Conheça a trajetória de Frank Eduardo, fisioterapeuta desde 2009, com atuação em cuidado clínico, educação em saúde, formação profissional e tecnologia."
        path="/sobre"
        breadcrumb={[
          { name: "Início", url: "/" },
          { name: "Sobre", url: "/sobre" },
        ]}
      />

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
          <section className="hero">
            <div className="hero-decoration hero-decoration-one" />
            <div className="hero-decoration hero-decoration-two" />

            <div className="container hero-grid">
              <div className="hero-content">
                <span className="eyebrow">Sobre o Dr. Frank Eduardo</span>

                <h1>
                  Experiência clínica transformada em{" "}
                  <span>conhecimento, cuidado e inovação.</span>
                </h1>

                <p>
                  Fisioterapeuta desde 2009, Frank Eduardo construiu uma atuação
                  que conecta atendimento clínico, educação em saúde, formação
                  profissional e desenvolvimento de tecnologia.
                </p>

                <div className="hero-actions">
                  <Link href="/consultorio" className="button button-primary">
                    Conhecer o consultório
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/treinamentos"
                    className="button button-secondary"
                  >
                    Ver treinamentos
                  </Link>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-panel">
                  <span className="hero-panel-label">Uma trajetória conectada</span>

                  <h2>
                    Saúde, educação e tecnologia trabalhando para transformar
                    vidas.
                  </h2>

                  <div className="ecosystem-list">
                    <div className="ecosystem-item">
                      <span>01</span>
                      <div>
                        <strong>Fisioterapia</strong>
                        <p>
                          Cuidado individualizado para pessoas com dor e
                          alterações do movimento.
                        </p>
                      </div>
                    </div>

                    <div className="ecosystem-item">
                      <span>02</span>
                      <div>
                        <strong>Educação</strong>
                        <p>
                          Informação acessível para pacientes e formação para
                          profissionais.
                        </p>
                      </div>
                    </div>

                    <div className="ecosystem-item">
                      <span>03</span>
                      <div>
                        <strong>Tecnologia</strong>
                        <p>
                          Soluções criadas a partir de necessidades reais do
                          cuidado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="authority-strip">
            <div className="container authority-grid">
              {experienceItems.map((item) => (
                <div className="authority-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section section-white">
            <div className="container about-grid">
              <div className="about-visual">
                <div className="about-monogram">FE</div>

                <div className="about-detail">
                  <span>Fisioterapia</span>
                  <span>Educação</span>
                  <span>Tecnologia</span>
                </div>
              </div>

              <div className="about-content">
                <span className="eyebrow">Trajetória profissional</span>

                <h2>
                  Uma carreira construída entre o atendimento e a vontade de
                  ensinar.
                </h2>

                <p>
                  Frank Eduardo iniciou sua atuação como fisioterapeuta em 2009.
                  Ao longo dos anos, desenvolveu experiência no cuidado de
                  pessoas com dor e alterações do movimento, com atuação em
                  osteopatia, quiropraxia, microfisioterapia e terapia manual.
                </p>

                <p>
                  A experiência clínica também despertou a necessidade de
                  traduzir conhecimentos complexos para uma linguagem mais
                  simples, ajudando pacientes a compreender melhor o próprio
                  corpo e profissionais a aprimorar sua prática.
                </p>

                <p>
                  Dessa união entre cuidado, educação e inovação nasceu um
                  ecossistema que reúne conteúdos, treinamentos, atendimento e
                  soluções tecnológicas.
                </p>
              </div>
            </div>
          </section>

          <section className="section training-section">
            <div className="container">
              <div className="centered-heading">
                <span className="eyebrow">Pilares de atuação</span>

                <h2>Quatro frentes que fazem parte do mesmo propósito.</h2>

                <p>
                  Tornar o conhecimento em saúde mais acessível e criar soluções
                  que ajudem pessoas e profissionais a cuidar melhor.
                </p>
              </div>

              <div className="training-grid">
                {pillars.map((pillar) => (
                  <article className="training-card" key={pillar.title}>
                    <span className="training-number">{pillar.number}</span>

                    <h3>{pillar.title}</h3>

                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-white">
            <div className="container">
              <div className="section-heading technology-heading">
                <div>
                  <span className="eyebrow">Propósito</span>

                  <h2>
                    Educação em saúde para quem quer viver melhor, atender
                    melhor e transformar mais vidas.
                  </h2>
                </div>

                <p>
                  Cada conteúdo, treinamento, atendimento ou projeto nasce com
                  o objetivo de gerar mais clareza, segurança e autonomia.
                </p>
              </div>

              <div className="technology-grid">
                <article className="technology-card">
                  <div className="technology-icon technology-icon-1">P</div>

                  <div className="technology-content">
                    <span>Para pacientes</span>
                    <h3>Mais clareza no cuidado</h3>
                    <h4>
                      Informação para participar melhor das próprias decisões.
                    </h4>
                    <p>
                      Conteúdos e treinamentos que ajudam a compreender sintomas,
                      tratamentos e possibilidades de cuidado sem promessas
                      milagrosas.
                    </p>

                    <Link href="/treinamentos/pacientes">
                      Ver conteúdos para pacientes
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>

                <article className="technology-card">
                  <div className="technology-icon technology-icon-2">F</div>

                  <div className="technology-content">
                    <span>Para fisioterapeutas</span>
                    <h3>Mais evolução profissional</h3>
                    <h4>
                      Conhecimento clínico e organização para crescer com
                      responsabilidade.
                    </h4>
                    <p>
                      Formação, conteúdos e ferramentas para quem deseja atender
                      melhor, desenvolver a carreira e construir uma prática
                      mais organizada.
                    </p>

                    <Link href="/treinamentos/fisioterapeutas">
                      Ver conteúdos profissionais
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="final-cta">
            <div className="container final-cta-content">
              <span>Conhecimento que transforma vidas</span>

              <h2>Encontre o caminho mais adequado para você.</h2>

              <p>
                Conheça os conteúdos, treinamentos, projetos de tecnologia ou o
                atendimento clínico.
              </p>

              <div className="final-cta-actions">
                <Link href="/artigos" className="button button-light">
                  Explorar artigos
                </Link>

                <Link
                  href="/consultorio"
                  className="button button-outline-light"
                >
                  Conhecer o consultório
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
    </>
  );
}