import Image from "next/image";
import Link from "next/link";
import PageSchema from "@/components/schema/PageSchema";

const articles = [
  {
    category: "Dor e movimento",
    title: "Fibromialgia: por que a dor pode aparecer em várias regiões?",
    description:
      "Entenda como a fibromialgia afeta o organismo e quais caminhos podem ajudar no controle dos sintomas.",
    href: "/artigos/fibromialgia",
  },
  {
    category: "Coluna",
    title: "Hérnia de disco: o exame explica toda a sua dor?",
    description:
      "Descubra por que alterações encontradas na ressonância nem sempre representam a intensidade dos sintomas.",
    href: "/artigos/hernia-de-disco",
  },
  {
    category: "Ombro",
    title: "Dor no ombro: quando é hora de procurar ajuda?",
    description:
      "Conheça alguns sinais de atenção e entenda por que uma boa avaliação faz diferença.",
    href: "/artigos/dor-no-ombro",
  },
];

const authorityItems = [
  {
    value: "+15",
    label: "anos de experiência clínica",
  },
  {
    value: "2009",
    label: "ano de início da atuação profissional",
  },
  {
    value: "+2 mil",
    label: "pessoas acompanhando o canal",
  },
  {
    value: "Saúde",
    label: "conteúdo acessível e responsável",
  },
];

const trainingPaths = [
  {
    eyebrow: "Para pacientes",
    title: "Entenda sua condição e participe melhor do seu cuidado",
    description:
      "Programas educativos para ajudar você a compreender sintomas, tratamentos e possibilidades para viver com mais segurança.",
    button: "Ver treinamentos para pacientes",
    href: "/treinamentos/pacientes",
  },
  {
    eyebrow: "Para fisioterapeutas",
    title: "Aprimore sua prática clínica e desenvolva sua carreira",
    description:
      "Cursos, formações e mentorias para profissionais que desejam atender melhor e crescer com organização.",
    button: "Ver treinamentos profissionais",
    href: "/treinamentos/fisioterapeutas",
  },
];

const technologyItems = [
  {
    name: "FisioClinic",
    audience: "Para fisioterapeutas",
    title: "Organização clínica para quem trabalha de forma autônoma",
    description:
      "Agenda, prontuário, financeiro, documentos e relacionamento com pacientes em um único sistema.",
    href: "/tecnologia/fisioclinic",
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

export default function Home() {
    return (
      <>
        <PageSchema
        title="Dr. Frank Eduardo | Educação em Saúde"
        description="Conteúdos, treinamentos, atendimento e tecnologia para pacientes, fisioterapeutas, famílias e cuidadores."
        path="/"
        breadcrumb={[
          { name: "Início", url: "/" }
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
              <span className="eyebrow">Conhecimento que transforma vidas</span>

              <h1>
                Educação em saúde para quem quer{" "}
                <span>viver melhor, atender melhor</span> e transformar mais
                vidas.
              </h1>

              <p>
                Conteúdos confiáveis, treinamentos, atendimento e tecnologia
                para pacientes, fisioterapeutas, famílias e cuidadores.
              </p>

              <div className="hero-actions">
                <Link
                  href="/treinamentos/pacientes"
                  className="button button-primary"
                >
                  Quero cuidar da minha saúde
                  <ArrowIcon />
                </Link>

                <Link
                  href="/treinamentos/fisioterapeutas"
                  className="button button-secondary"
                >
                  Sou fisioterapeuta
                </Link>
              </div>

              <div className="hero-trust">
                <div>
                  <CheckIcon />
                  Informação acessível
                </div>

                <div>
                  <CheckIcon />
                  Experiência clínica real
                </div>

                <div>
                  <CheckIcon />
                  Sem promessas milagrosas
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-panel">
                <span className="hero-panel-label">Um ecossistema completo</span>

                <h2>Cuidado, conhecimento e tecnologia conectados.</h2>

                <div className="ecosystem-list">
                  <div className="ecosystem-item">
                    <span>01</span>
                    <div>
                      <strong>Conteúdo</strong>
                      <p>Artigos e vídeos gratuitos para começar.</p>
                    </div>
                  </div>

                  <div className="ecosystem-item">
                    <span>02</span>
                    <div>
                      <strong>Treinamentos</strong>
                      <p>Jornadas estruturadas para pacientes e profissionais.</p>
                    </div>
                  </div>

                  <div className="ecosystem-item">
                    <span>03</span>
                    <div>
                      <strong>Atendimento</strong>
                      <p>Avaliação e acompanhamento individualizados.</p>
                    </div>
                  </div>

                  <div className="ecosystem-item">
                    <span>04</span>
                    <div>
                      <strong>Tecnologia</strong>
                      <p>Soluções que ajudam pessoas a cuidar melhor.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <span>Para pacientes</span>
                <strong>Mais clareza. Menos medo.</strong>
              </div>

              <div className="floating-card floating-card-bottom">
                <span>Para profissionais</span>
                <strong>Mais conhecimento. Mais evolução.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="authority-strip">
          <div className="container authority-grid">
            {authorityItems.map((item) => (
              <div className="authority-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-white" id="artigos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Artigos e orientações</span>
                <h2>Conhecimento para ajudar você a tomar melhores decisões.</h2>
              </div>

              <Link href="/artigos" className="text-link">
                Ver todos os artigos
                <ArrowIcon />
              </Link>
            </div>

            <div className="article-grid">
              {articles.map((article, index) => (
                <article className="article-card" key={article.title}>
                  <div className={`article-visual article-visual-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="article-content">
                    <span className="article-category">{article.category}</span>

                    <h3>{article.title}</h3>

                    <p>{article.description}</p>

                    <Link href={article.href}>
                      Ler artigo
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section training-section">
          <div className="container">
            <div className="centered-heading">
              <span className="eyebrow">Treinamentos</span>
              <h2>Escolha o caminho mais adequado para você.</h2>
              <p>
                Conteúdos estruturados para quem busca cuidar melhor da própria
                saúde ou evoluir profissionalmente.
              </p>
            </div>

            <div className="training-grid">
              {trainingPaths.map((path, index) => (
                <article
                  className={`training-card training-card-${index + 1}`}
                  key={path.title}
                >
                  <span className="training-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="training-eyebrow">{path.eyebrow}</span>

                  <h3>{path.title}</h3>

                  <p>{path.description}</p>

                  <Link href={path.href} className="button training-button">
                    {path.button}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="section-heading technology-heading">
              <div>
                <span className="eyebrow">Tecnologia em saúde</span>
                <h2>Soluções criadas para simplificar o cuidado.</h2>
              </div>

              <p>
                Projetos que transformam necessidades reais em ferramentas
                acessíveis para famílias, cuidadores e profissionais.
              </p>
            </div>

            <div className="technology-grid">
              {technologyItems.map((item, index) => (
                <article className="technology-card" key={item.name}>
                  <div className={`technology-icon technology-icon-${index + 1}`}>
                    F
                  </div>

                  <div className="technology-content">
                    <span>{item.audience}</span>
                    <h3>{item.name}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>

                    <Link href={item.href}>
                      Conhecer o projeto
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="container about-grid">
            <div className="relative min-h-[540px] overflow-hidden rounded-[34px] border border-white/15 bg-[#10261f] shadow-2xl shadow-black/20 sm:min-h-[620px]">
              <Image
                src="/images/frank-eduardo-sobre.jpg"
                alt="Dr. Frank Eduardo, fisioterapeuta, educador e desenvolvedor de soluções em saúde"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className="object-cover object-[center_38%]"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0d211a] via-[#0d211a]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9">
                <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Desde 2009
                </span>

                <strong className="mt-4 block text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Frank Eduardo
                </strong>

                <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                  Fisioterapeuta • Educador • Tecnologia em saúde
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                  <div>
                    <strong className="block text-2xl font-semibold text-white">
                      17+
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-white/65 sm:text-sm">
                      anos de experiência
                    </span>
                  </div>

                  <div>
                    <strong className="block text-2xl font-semibold text-white">
                      20 mil+
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-white/65 sm:text-sm">
                      pacientes atendidos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">Sobre o Dr. Frank Eduardo</span>

              <h2>
                Experiência clínica transformada em conhecimento acessível.
              </h2>

              <p>
                Fisioterapeuta desde 2009, Frank Eduardo atua no cuidado de
                pessoas com dor e alterações do movimento, unindo experiência
                clínica, terapia manual e educação em saúde.
              </p>

              <p>
                Seu trabalho também se estende à formação profissional, criação
                de conteúdos, desenvolvimento de tecnologias e construção de
                soluções que ajudam pacientes, famílias e fisioterapeutas.
              </p>

              <Link href="/sobre" className="button button-secondary">
                Conhecer minha trajetória
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-content">
            <span>Conhecimento que transforma vidas</span>

            <h2>
              O primeiro passo para cuidar melhor começa pela informação.
            </h2>

            <p>
              Explore os conteúdos, conheça os treinamentos ou encontre o
              caminho mais adequado para você.
            </p>

            <div className="final-cta-actions">
              <Link href="/artigos" className="button button-light">
                Explorar artigos
              </Link>

              <Link href="/treinamentos" className="button button-outline-light">
                Conhecer treinamentos
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