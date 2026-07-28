import type { Metadata } from "next";
import Link from "next/link";

import styles from "./artigos.module.css";

const siteUrl = "https://www.frankeduardo.com.br";

export const metadata: Metadata = {
  title: "Artigos sobre dor, movimento e qualidade de vida",
  description:
    "Conteúdos sobre fisioterapia, osteopatia, dor, coluna, movimento e qualidade de vida escritos pelo Dr. Frank Eduardo.",
  keywords: [
    "artigos de fisioterapia",
    "dor nas costas",
    "dor na coluna",
    "osteopatia",
    "quiropraxia",
    "notalgia parestésica",
    "fibromialgia",
    "qualidade de vida",
    "saúde e movimento",
  ],
  alternates: {
    canonical: "/artigos",
  },
  openGraph: {
    title: "Artigos | Dr. Frank Eduardo",
    description:
      "Informação clara para compreender melhor o corpo, a dor e o movimento.",
    url: `${siteUrl}/artigos`,
    siteName: "Dr. Frank Eduardo",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Artigos do Dr. Frank Eduardo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artigos | Dr. Frank Eduardo",
    description:
      "Informação clara para compreender melhor o corpo, a dor e o movimento.",
    images: ["/og-image.png"],
  },
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className={styles.arrowIcon}
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className={styles.searchIcon}
  >
    <circle
      cx="11"
      cy="11"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="m16 16 4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const articles = [
  {
    slug: "notalgia-parestesica",
    category: "Dor e coluna",
    title:
      "Notalgia Parestésica: o que é, sintomas, diagnóstico e tratamento",
    description:
      "Entenda por que aquela coceira persistente entre as escápulas pode estar relacionada a uma alteração sensitiva de origem neuropática.",
    readingTime: "8 min de leitura",
    date: "28 jul 2026",
    featured: true,
    index: "01",
  },
];

const upcomingArticles = [
  {
    category: "Fibromialgia",
    title: "Fibromialgia: uma doença sem saída?",
    description:
      "Uma visão clara sobre sintomas, diagnóstico, tratamento e possibilidades reais de melhora.",
    index: "02",
  },
  {
    category: "Coluna",
    title: "Hérnia de disco: quando a imagem não conta toda a história",
    description:
      "Por que exames precisam ser interpretados junto com a avaliação clínica.",
    index: "03",
  },
  {
    category: "Dor ciática",
    title: "Ciático inflamado ou comprimido? Entenda a diferença",
    description:
      "Os sinais mais comuns, possíveis causas e quando procurar avaliação.",
    index: "04",
  },
];

const categories = [
  "Todos",
  "Dor",
  "Coluna",
  "Osteopatia",
  "Fibromialgia",
  "Exercícios",
  "Qualidade de vida",
];

export default function ArticlesPage() {
  const featuredArticle = articles[0];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artigos do Dr. Frank Eduardo",
    description:
      "Conteúdos sobre fisioterapia, osteopatia, dor, movimento e qualidade de vida.",
    url: `${siteUrl}/artigos`,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: "Dr. Frank Eduardo",
      url: siteUrl,
    },
    author: {
      "@type": "Person",
      name: "Dr. Frank Eduardo",
      url: siteUrl,
      jobTitle: "Fisioterapeuta",
    },
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-content">
          <Link href="/" className="brand" aria-label="Ir para a página inicial">
            <span className="brand-mark">FE</span>

            <span className="brand-copy">
              <strong>Dr. Frank Eduardo</strong>
              <small>Educação em saúde</small>
            </span>
          </Link>

          <nav className="desktop-navigation" aria-label="Navegação principal">
            <Link href="/">Início</Link>
            <Link href="/artigos" aria-current="page">
              Artigos
            </Link>
            <Link href="/treinamentos">Treinamentos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>

          <Link href="/treinamentos" className="header-cta">
            Ver treinamentos
          </Link>

          <details className="mobile-navigation">
            <summary aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </summary>

            <nav className="mobile-menu" aria-label="Navegação para celular">
              <Link href="/">Início</Link>
              <Link href="/artigos">Artigos</Link>
              <Link href="/treinamentos">Treinamentos</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/treinamentos" className="mobile-menu-cta">
                Ver treinamentos
              </Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCircleOne} />
          <div className={styles.heroCircleTwo} />

          <div className={`container ${styles.heroContent}`}>
            <nav className="breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span>/</span>
              <strong>Artigos</strong>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className="eyebrow">Conteúdo e conhecimento</span>

                <h1>
                  Informação para entender melhor{" "}
                  <span>o seu corpo.</span>
                </h1>

                <p>
                  Artigos sobre dor, movimento, fisioterapia, osteopatia e
                  qualidade de vida, escritos a partir da experiência clínica e
                  traduzidos para uma linguagem simples.
                </p>
              </div>

              <aside className={styles.heroEditorial}>
                <span>Editorial</span>
                <strong>Menos medo. Mais compreensão.</strong>
                <p>
                  Conhecer o que acontece com o corpo ajuda você a participar
                  melhor das decisões sobre a própria saúde.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.categorySection}>
          <div className={`container ${styles.categoryBar}`}>
            <div className={styles.categories} aria-label="Categorias">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={index === 0 ? styles.categoryActive : ""}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.searchPlaceholder}>
              <SearchIcon />
              <span>Busque por um tema</span>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <div>
                <span className="eyebrow">Artigo em destaque</span>
                <h2>Comece por aqui</h2>
              </div>

              <p>
                Um conteúdo completo para esclarecer uma condição pouco
                conhecida, mas que pode causar coceira, queimação e alteração
                de sensibilidade nas costas.
              </p>
            </div>

            <article className={styles.featuredCard}>
              <Link
                href={`/artigos/${featuredArticle.slug}`}
                className={styles.featuredVisual}
                aria-label={`Ler: ${featuredArticle.title}`}
              >
                <div className={styles.visualTexture} />
                <span className={styles.visualLabel}>Região interescapular</span>
                <strong>NP</strong>
                <small>{featuredArticle.index}</small>
              </Link>

              <div className={styles.featuredContent}>
                <div className={styles.articleMeta}>
                  <span>{featuredArticle.category}</span>
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readingTime}</span>
                </div>

                <h2>
                  <Link href={`/artigos/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p>{featuredArticle.description}</p>

                <div className={styles.authorRow}>
                  <div className={styles.authorMark}>FE</div>

                  <div>
                    <strong>Dr. Frank Eduardo</strong>
                    <span>Fisioterapeuta e osteopata</span>
                  </div>
                </div>

                <Link
                  href={`/artigos/${featuredArticle.slug}`}
                  className={styles.readLink}
                >
                  Ler artigo completo
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.librarySection}>
          <div className="container">
            <div className={styles.libraryHeading}>
              <div>
                <span className="eyebrow">Biblioteca de saúde</span>
                <h2>Próximos conteúdos</h2>
              </div>

              <p>
                A biblioteca será ampliada com artigos conectados entre si,
                formando um caminho de aprendizagem sobre dor, movimento e
                envelhecimento.
              </p>
            </div>

            <div className={styles.upcomingGrid}>
              {upcomingArticles.map((article) => (
                <article key={article.index} className={styles.upcomingCard}>
                  <div className={styles.upcomingTop}>
                    <span>{article.category}</span>
                    <strong>{article.index}</strong>
                  </div>

                  <div className={styles.upcomingBody}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>

                  <span className={styles.soonBadge}>Em preparação</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutEditorial}>
          <div className={`container ${styles.aboutEditorialGrid}`}>
            <div className={styles.aboutEditorialNumber}>17+</div>

            <div>
              <span className="eyebrow">Experiência clínica</span>
              <h2>Conteúdo escrito por quem vive a prática todos os dias.</h2>
            </div>

            <p>
              Os textos são produzidos pelo Dr. Frank Eduardo, fisioterapeuta
              com atuação em osteopatia, quiropraxia e terapia manual. O
              objetivo é orientar sem alarmismo e aproximar o conhecimento
              técnico da vida real.
            </p>
          </div>
        </section>

        <section className={styles.youtubeSection}>
          <div className={`container ${styles.youtubeCard}`}>
            <div>
              <span>Professor Fisio no YouTube</span>
              <h2>Prefere aprender assistindo?</h2>
              <p>
                Aprofunde os temas do blog com aulas, explicações clínicas e
                conteúdos sobre fisioterapia, dor e movimento.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@professorfisio"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              Acessar o canal
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand brand-footer">
                <span className="brand-mark">FE</span>

                <span className="brand-copy">
                  <strong>Dr. Frank Eduardo</strong>
                  <small>Educação em saúde</small>
                </span>
              </Link>

              <p>
                Educação em saúde para quem quer viver melhor, atender melhor e
                transformar mais vidas.
              </p>
            </div>

            <div className="footer-column">
              <strong>Conteúdo</strong>
              <Link href="/artigos">Artigos</Link>
              <Link href="/treinamentos">Treinamentos</Link>
              <a
                href="https://www.youtube.com/@professorfisio"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>

            <div className="footer-column">
              <strong>Institucional</strong>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
            </div>

            <div className="footer-column">
              <strong>Para você</strong>
              <Link href="/treinamentos/pacientes">Pacientes</Link>
              <Link href="/treinamentos/fisioterapeutas">
                Fisioterapeutas
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Dr. Frank Eduardo. Todos os direitos reservados.</p>
            <p>Conteúdo educacional. Não substitui avaliação individual.</p>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
