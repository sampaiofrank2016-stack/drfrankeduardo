import Link from "next/link";
import PageSchema from "@/components/schema/PageSchema";

const specialties = [
  {
    title: "Osteopatia",
    description:
      "Avaliação global para compreender relações entre sintomas, mobilidade e funcionamento do corpo.",
  },
  {
    title: "Quiropraxia",
    description:
      "Técnicas manuais direcionadas à mobilidade articular e ao cuidado de alterações musculoesqueléticas.",
  },
  {
    title: "Microfisioterapia",
    description:
      "Abordagem manual complementar voltada à identificação de áreas de restrição e adaptação do organismo.",
  },
  {
    title: "Terapia manual",
    description:
      "Recursos individualizados para reduzir limitações, melhorar movimentos e favorecer a recuperação funcional.",
  },
];

const steps = [
  {
    number: "01",
    title: "Escuta e avaliação",
    description:
      "A consulta começa com uma conversa detalhada sobre seus sintomas, histórico e objetivos.",
  },
  {
    number: "02",
    title: "Exame individualizado",
    description:
      "São avaliados movimentos, limitações e possíveis relações entre diferentes regiões do corpo.",
  },
  {
    number: "03",
    title: "Plano de cuidado",
    description:
      "A conduta é definida de acordo com o que foi encontrado na avaliação, sem protocolos genéricos.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "A evolução é acompanhada ao longo das sessões, com ajustes conforme sua resposta ao tratamento.",
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

export default function ConsultorioPage() {
  return (
    <>
      <PageSchema
        title="Consultório de Fisioterapia em Itumbiara | Dr. Frank Eduardo"
        description="Atendimento fisioterapêutico individualizado em Itumbiara para pessoas com dor e alterações do movimento, com atuação em osteopatia, quiropraxia, microfisioterapia e terapia manual."
        path="/consultorio"
        breadcrumb={[
          { name: "Início", url: "/" },
          { name: "Consultório", url: "/consultorio" },
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

            <a
              href="https://wa.me/5564999999999"
              className="header-cta"
              target="_blank"
              rel="noreferrer"
            >
              Agendar consulta
            </a>

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
                <a
                  href="https://wa.me/5564999999999"
                  className="mobile-menu-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar consulta
                </a>
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
                <span className="eyebrow">
                  Fisioterapia em Itumbiara
                </span>

                <h1>
                  Um atendimento individualizado para compreender{" "}
                  <span>a origem da sua dor.</span>
                </h1>

                <p>
                  Avaliação detalhada e cuidado personalizado para pessoas com
                  dor, limitação de movimento e alterações musculoesqueléticas.
                </p>

                <div className="hero-actions">
                  <a
                    href="https://wa.me/5564999999999"
                    className="button button-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agendar pelo WhatsApp
                    <ArrowIcon />
                  </a>

                  <a href="#como-funciona" className="button button-secondary">
                    Entender o atendimento
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-panel">
                  <span className="hero-panel-label">
                    Atendimento com hora marcada
                  </span>

                  <h2>
                    Sessões individuais, com tempo para ouvir, avaliar e cuidar.
                  </h2>

                  <div className="ecosystem-list">
                    <div className="ecosystem-item">
                      <span>01</span>
                      <div>
                        <strong>Avaliação completa</strong>
                        <p>
                          Investigação do histórico, sintomas, movimentos e
                          limitações.
                        </p>
                      </div>
                    </div>

                    <div className="ecosystem-item">
                      <span>02</span>
                      <div>
                        <strong>Conduta personalizada</strong>
                        <p>
                          O tratamento é definido conforme a necessidade de cada
                          pessoa.
                        </p>
                      </div>
                    </div>

                    <div className="ecosystem-item">
                      <span>03</span>
                      <div>
                        <strong>Acompanhamento próximo</strong>
                        <p>
                          A resposta ao tratamento é observada e a estratégia é
                          ajustada ao longo das sessões.
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
              <div className="authority-item">
                <strong>Desde 2009</strong>
                <span>Experiência profissional</span>
              </div>

              <div className="authority-item">
                <strong>60 min</strong>
                <span>Tempo reservado por sessão</span>
              </div>

              <div className="authority-item">
                <strong>100%</strong>
                <span>Atendimento individual</span>
              </div>

              <div className="authority-item">
                <strong>Itumbiara</strong>
                <span>Atendimento presencial</span>
              </div>
            </div>
          </section>

          <section className="section section-white">
            <div className="container about-grid">
              <div className="about-visual">
                <div className="about-monogram">FE</div>

                <div className="about-detail">
                  <span>Avaliação</span>
                  <span>Tratamento</span>
                  <span>Acompanhamento</span>
                </div>
              </div>

              <div className="about-content">
                <span className="eyebrow">Cuidado individualizado</span>

                <h2>
                  O tratamento começa antes da técnica: começa entendendo você.
                </h2>

                <p>
                  A dor nem sempre está relacionada apenas ao local em que é
                  sentida. Por isso, a consulta considera seu histórico, sua
                  rotina, seus movimentos e as relações entre diferentes regiões
                  do corpo.
                </p>

                <p>
                  O objetivo é identificar limitações relevantes e construir uma
                  estratégia de cuidado coerente com suas necessidades, sem
                  aplicar protocolos iguais para todos.
                </p>

                <p>
                  Cada sessão é reservada exclusivamente para um paciente,
                  permitindo atenção, avaliação e acompanhamento durante todo o
                  atendimento.
                </p>
              </div>
            </div>
          </section>

          <section className="section training-section">
            <div className="container">
              <div className="centered-heading">
                <span className="eyebrow">Áreas de atuação</span>

                <h2>Abordagens que podem fazer parte do seu tratamento.</h2>

                <p>
                  As técnicas são escolhidas após a avaliação e utilizadas de
                  acordo com cada caso.
                </p>
              </div>

              <div className="training-grid">
                {specialties.map((specialty, index) => (
                  <article className="training-card" key={specialty.title}>
                    <span className="training-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{specialty.title}</h3>

                    <p>{specialty.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="section section-white"
            id="como-funciona"
          >
            <div className="container">
              <div className="section-heading technology-heading">
                <div>
                  <span className="eyebrow">Como funciona</span>

                  <h2>
                    Um processo claro desde a primeira consulta.
                  </h2>
                </div>

                <p>
                  Você entende o que está sendo avaliado, qual é a proposta de
                  tratamento e como sua evolução será acompanhada.
                </p>
              </div>

              <div className="training-grid">
                {steps.map((step) => (
                  <article className="training-card" key={step.number}>
                    <span className="training-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section training-section">
            <div className="container">
              <div className="centered-heading">
                <span className="eyebrow">Quando procurar atendimento</span>

                <h2>
                  Alguns sinais indicam que seu corpo precisa de atenção.
                </h2>
              </div>

              <div className="technology-grid">
                <article className="technology-card">
                  <div className="technology-icon technology-icon-1">D</div>

                  <div className="technology-content">
                    <span>Dor e desconforto</span>
                    <h3>Sintomas persistentes ou recorrentes</h3>
                    <p>
                      Dor cervical, lombar, nos ombros, quadris, joelhos,
                      articulação temporomandibular ou outras regiões do corpo.
                    </p>
                  </div>
                </article>

                <article className="technology-card">
                  <div className="technology-icon technology-icon-2">M</div>

                  <div className="technology-content">
                    <span>Movimento e função</span>
                    <h3>Limitações que afetam sua rotina</h3>
                    <p>
                      Dificuldade para movimentar-se, trabalhar, praticar
                      exercícios, dormir ou realizar atividades cotidianas.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="final-cta">
            <div className="container final-cta-content">
              <span>Atendimento em Itumbiara</span>

              <h2>Agende sua avaliação.</h2>

              <p>
                Entre em contato para consultar horários disponíveis e tirar
                dúvidas sobre o atendimento.
              </p>

              <div className="final-cta-actions">
                <a
                  href="https://wa.me/5564992721878"
                  className="button button-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar pelo WhatsApp
                </a>

                <Link
                  href="/sobre"
                  className="button button-outline-light"
                >
                  Conhecer o profissional
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