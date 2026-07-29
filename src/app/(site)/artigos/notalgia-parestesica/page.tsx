import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./artigo.module.css";

const siteUrl = "https://www.frankeduardo.com.br";
const articleUrl = `${siteUrl}/artigos/notalgia-parestesica`;

export const metadata: Metadata = {
  title:
    "Notalgia Parestésica: sintomas, diagnóstico, tratamento e tem cura?",
  description:
    "Entenda o que é a notalgia parestésica, seus principais sintomas, possíveis causas, diagnóstico, tratamento e quando procurar ajuda.",
  keywords: [
    "notalgia parestésica",
    "notalgia parestésica sintomas",
    "notalgia parestésica tratamento",
    "notalgia parestésica tem cura",
    "coceira nas costas",
    "coceira entre as escápulas",
    "mancha nas costas",
    "dor entre as escápulas",
    "fisioterapia para notalgia parestésica",
    "osteopatia para notalgia parestésica",
  ],
  alternates: {
    canonical: "/artigos/notalgia-parestesica",
  },
  openGraph: {
    title:
      "Notalgia Parestésica: sintomas, diagnóstico, tratamento e tem cura?",
    description:
      "Coceira, queimação, formigamento e mancha nas costas podem estar relacionados à notalgia parestésica.",
    url: articleUrl,
    siteName: "Dr. Frank Eduardo",
    locale: "pt_BR",
    type: "article",
    publishedTime: "2026-07-28T12:00:00-03:00",
    modifiedTime: "2026-07-28T12:00:00-03:00",
    authors: [siteUrl],
    section: "Dor e coluna",
    tags: [
      "notalgia parestésica",
      "dor nas costas",
      "coceira nas costas",
      "fisioterapia",
      "osteopatia",
    ],
    images: [
      {
        url: "/images/artigos/notalgia-parestesica-artigo.png",
        width: 1536,
        height: 1024,
        alt: "Notalgia parestésica na região entre as escápulas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Notalgia Parestésica: sintomas, diagnóstico, tratamento e tem cura?",
    description:
      "Entenda por que a coceira persistente entre as escápulas pode ter origem neuropática.",
    images: ["/images/artigos/notalgia-parestesica-artigo.png"],
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

const articleSections = [
  { id: "o-que-e", label: "O que é notalgia parestésica?" },
  { id: "sintomas", label: "Principais sintomas" },
  { id: "causas", label: "Possíveis causas" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "tratamento", label: "Como é o tratamento?" },
  { id: "osteopatia", label: "A osteopatia pode ajudar?" },
  { id: "tem-cura", label: "Notalgia parestésica tem cura?" },
  { id: "envelhecimento", label: "Relação com o envelhecimento" },
  { id: "quando-procurar-ajuda", label: "Quando procurar ajuda?" },
];

const faqItems = [
  {
    question: "Notalgia parestésica é uma doença de pele?",
    answer:
      "Apesar de poder causar mancha e coceira na pele, a notalgia parestésica é considerada uma síndrome sensitiva de origem neuropática. A alteração cutânea costuma aparecer como consequência do atrito e da coçadura repetida.",
  },
  {
    question: "Qual médico ou profissional trata notalgia parestésica?",
    answer:
      "A avaliação pode envolver dermatologista, neurologista, ortopedista ou fisioterapeuta, dependendo dos sintomas e da suspeita clínica. O mais importante é investigar a origem do desconforto e descartar outras causas.",
  },
  {
    question: "Exame de imagem é sempre necessário?",
    answer:
      "Não. O diagnóstico costuma ser clínico. Exames podem ser solicitados quando existem sintomas neurológicos associados, dor importante, perda de força ou suspeita de outra condição.",
  },
  {
    question: "Notalgia parestésica pode melhorar com fisioterapia?",
    answer:
      "Em alguns casos, sim. Exercícios, mobilidade, alongamentos, terapia manual, correção de hábitos e recursos analgésicos podem ajudar a reduzir os sintomas, especialmente quando existem fatores musculoesqueléticos associados.",
  },
];

export default function NotalgiaParestesicaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline:
      "Notalgia Parestésica: sintomas, diagnóstico, tratamento e tem cura?",
    description:
      "Entenda o que é a notalgia parestésica, seus sintomas, possíveis causas, diagnóstico e tratamento.",
    url: articleUrl,
    inLanguage: "pt-BR",
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Person",
      name: "Dr. Frank Eduardo",
      url: siteUrl,
      jobTitle: "Fisioterapeuta",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Frank Eduardo",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
      },
    },
    image: `${siteUrl}/images/artigos/notalgia-parestesica-artigo.png`,
    about: {
      "@type": "MedicalCondition",
      name: "Notalgia parestésica",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: `${siteUrl}/artigos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Notalgia Parestésica",
        item: articleUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        <article>
          <header className={styles.articleHero}>
            <div className={styles.heroCircleOne} />
            <div className={styles.heroCircleTwo} />

            <div className={`container ${styles.articleHeroContent}`}>
              <nav className="breadcrumb" aria-label="Navegação estrutural">
                <Link href="/">Início</Link>
                <span>/</span>
                <Link href="/artigos">Artigos</Link>
                <span>/</span>
                <strong>Notalgia Parestésica</strong>
              </nav>

              <div className={styles.articleCategory}>Dor e coluna</div>

              <h1>
                Notalgia Parestésica: o que é, sintomas, diagnóstico,
                tratamento e tem cura?
              </h1>

              <p className={styles.articleLead}>
                Uma coceira persistente entre as escápulas, acompanhada de
                queimação, formigamento ou mancha escura, pode não ser apenas
                um problema de pele. Em alguns casos, esses sinais estão
                relacionados à notalgia parestésica.
              </p>

              <div className={styles.articleInfo}>
                <div className={styles.authorBlock}>
                  <div className={styles.authorAvatar}>FE</div>

                  <div>
                    <strong>Dr. Frank Eduardo</strong>
                    <span>Fisioterapeuta, osteopata e quiropraxista</span>
                  </div>
                </div>

                <div className={styles.metaBlock}>
                  <div>
                    <span>Publicado em</span>
                    <strong>28 de julho de 2026</strong>
                  </div>

                  <div>
                    <span>Tempo de leitura</span>
                    <strong>8 minutos</strong>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className={styles.coverVisual}>
              <Image
                src="/images/artigos/notalgia-parestesica-artigo.png"
                alt="Notalgia parestésica com destaque para a região entre a coluna e a escápula"
                fill
                priority
                sizes="(max-width: 680px) calc(100vw - 28px), 1180px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>

          <div className={`container ${styles.articleLayout}`}>
            <aside className={styles.articleSidebar}>
              <div className={styles.tableOfContents}>
                <span>Neste artigo</span>

                <nav aria-label="Sumário do artigo">
                  {articleSections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className={styles.articleBody}>
              <section className={styles.introduction}>
                <p>
                  A notalgia parestésica é uma condição pouco conhecida e,
                  muitas vezes, confundida com alergias, dermatites ou outras
                  alterações da pele. O sintoma mais comum é uma coceira
                  persistente em uma área específica das costas, geralmente
                  próxima à borda interna da escápula.
                </p>

                <p>
                  Embora a pele possa apresentar uma mancha escurecida, o
                  problema nem sempre começa nela. A origem pode estar
                  relacionada à irritação de pequenos ramos nervosos
                  responsáveis pela sensibilidade da região.
                </p>
              </section>

              <section id="o-que-e">
                <h2>O que é notalgia parestésica?</h2>

                <p>
                  A notalgia parestésica é uma síndrome sensitiva neuropática
                  que costuma atingir a região torácica das costas, com maior
                  frequência entre as vértebras T2 e T6. Normalmente, o
                  desconforto aparece de um dos lados e se concentra na região
                  entre a coluna e a escápula.
                </p>

                <p>
                  O nome tem origem grega: <em>notos</em> significa costas e{" "}
                  <em>algos</em> significa dor. Apesar do nome mencionar dor,
                  muitas pessoas relatam principalmente coceira, ardência,
                  dormência ou formigamento.
                </p>

                <div className={styles.definitionBox}>
                  <span>Em termos simples</span>
                  <p>
                    É uma alteração da sensibilidade nas costas que pode causar
                    coceira, queimação, formigamento, dor e mudança na coloração
                    da pele.
                  </p>
                </div>
              </section>

              <section id="sintomas">
                <h2>Quais são os principais sintomas?</h2>

                <p>
                  Os sintomas podem variar de intensidade e permanecer por
                  meses ou anos. Em alguns períodos, o quadro melhora; em
                  outros, volta a incomodar.
                </p>

                <ul>
                  <li>Coceira persistente entre a coluna e a escápula;</li>
                  <li>Queimação ou ardência;</li>
                  <li>Formigamento;</li>
                  <li>Dormência ou alteração de sensibilidade;</li>
                  <li>Dor localizada;</li>
                  <li>Sensação de picada ou choque;</li>
                  <li>Mancha escurecida na pele.</li>
                </ul>

                <h3>Por que aparece uma mancha nas costas?</h3>

                <p>
                  A hiperpigmentação pode surgir após coçar ou esfregar a mesma
                  região repetidamente. Com o tempo, esse atrito constante pode
                  alterar a coloração e a textura da pele.
                </p>

                <p>
                  Por isso, a mancha nem sempre representa a causa do problema.
                  Em muitos casos, ela é uma consequência do desconforto
                  sensitivo.
                </p>
              </section>

              <section id="causas">
                <h2>O que pode causar notalgia parestésica?</h2>

                <p>
                  A causa exata ainda não está completamente esclarecida.
                  Entretanto, uma das hipóteses mais aceitas envolve irritação
                  ou compressão dos ramos cutâneos dos nervos torácicos.
                </p>

                <p>Entre os fatores que podem estar associados estão:</p>

                <ul>
                  <li>Alterações degenerativas da coluna torácica;</li>
                  <li>Hérnias ou protrusões discais;</li>
                  <li>Redução de mobilidade da coluna e das costelas;</li>
                  <li>Tensão muscular persistente;</li>
                  <li>Alterações posturais;</li>
                  <li>Histórico de herpes-zóster;</li>
                  <li>Outras alterações neurológicas.</li>
                </ul>

                <p>
                  Isso não significa que toda pessoa com desgaste na coluna
                  terá notalgia parestésica. Alterações em exames de imagem são
                  comuns e precisam ser interpretadas junto com os sintomas e
                  o exame clínico.
                </p>
              </section>

              <section id="diagnostico">
                <h2>Como é feito o diagnóstico?</h2>

                <p>
                  O diagnóstico costuma ser clínico. O profissional analisa a
                  localização do sintoma, o tipo de sensação, a duração, a
                  presença de mancha e possíveis alterações na coluna ou na
                  sensibilidade.
                </p>

                <p>
                  Exames de imagem não são obrigatórios em todos os casos. Eles
                  podem ser solicitados quando existem sinais neurológicos,
                  dor intensa, perda de força, sintomas em outras regiões ou
                  suspeita de outra condição.
                </p>

                <div className={styles.warningBox}>
                  <strong>Atenção</strong>
                  <p>
                    Coceira e manchas nas costas também podem ocorrer em
                    doenças dermatológicas. Uma avaliação adequada é importante
                    para não atribuir todos os casos à notalgia parestésica.
                  </p>
                </div>
              </section>

              <section id="tratamento">
                <h2>Como é o tratamento da notalgia parestésica?</h2>

                <p>
                  O tratamento depende da intensidade dos sintomas e dos
                  fatores encontrados na avaliação. Como a condição pode ter
                  diferentes componentes, uma combinação de abordagens costuma
                  ser mais útil do que uma única técnica isolada.
                </p>

                <h3>Fisioterapia e exercícios</h3>

                <p>
                  O trabalho fisioterapêutico pode incluir mobilidade da coluna
                  torácica, alongamentos, fortalecimento, melhora do movimento
                  das escápulas, educação postural e redução de tensões
                  musculares.
                </p>

                <h3>Recursos para controle dos sintomas</h3>

                <p>
                  Dependendo do caso, podem ser utilizados massagem, TENS,
                  acupuntura, terapias manuais e estratégias para diminuir a
                  irritação local.
                </p>

                <h3>Medicamentos</h3>

                <p>
                  Medicamentos tópicos ou sistêmicos podem ser prescritos por
                  profissionais habilitados. Em alguns casos, são utilizados
                  fármacos voltados para dor neuropática, como a gabapentina.
                </p>

                <h3>Outras possibilidades</h3>

                <p>
                  Há relatos de uso de toxina botulínica e outros procedimentos,
                  mas os resultados ainda variam. A resposta ao tratamento não
                  é igual para todas as pessoas.
                </p>
              </section>

              <section id="osteopatia">
                <h2>A osteopatia pode ajudar?</h2>

                <p>
                  A osteopatia pode ser considerada quando a avaliação
                  identifica redução de mobilidade na coluna torácica, costelas,
                  cintura escapular ou tecidos ao redor da região sintomática.
                </p>

                <p>
                  O objetivo não é tratar apenas a mancha ou a coceira, mas
                  melhorar fatores mecânicos que possam contribuir para a
                  irritação local. A resposta varia e o tratamento deve ser
                  individualizado.
                </p>
              </section>

              <section id="tem-cura">
                <h2>Notalgia parestésica tem cura?</h2>

                <p>
                  Não existe uma resposta única. Algumas pessoas apresentam
                  grande melhora ou períodos longos sem sintomas. Outras
                  convivem com recaídas e precisam controlar os fatores que
                  agravam o quadro.
                </p>

                <p>
                  Ainda faltam estudos de longo prazo capazes de definir um
                  tratamento universal. Por isso, o foco costuma ser reduzir os
                  sintomas, recuperar mobilidade, controlar fatores associados e
                  melhorar a qualidade de vida.
                </p>
              </section>

              <aside className={styles.bookCta}>
                <div>
                  <span>Leitura recomendada</span>
                  <h2>Por que tantas dores parecem surgir depois dos “enta”?</h2>
                  <p>
                    O livro <strong>Por Que Depois dos Enta?</strong> mostra
                    como hábitos, envelhecimento, mobilidade e escolhas feitas
                    ao longo da vida podem ajudar a explicar o que o corpo
                    apresenta hoje.
                  </p>
                </div>

                <Link href="/livros/depois-dos-enta">
                  Conhecer o livro
                  <ArrowIcon />
                </Link>
              </aside>

              <section id="envelhecimento">
                <h2>
                  O que a notalgia parestésica tem a ver com o envelhecimento?
                </h2>

                <p>
                  Muitos pacientes perguntam por que um sintoma aparece
                  justamente agora, depois dos quarenta, cinquenta ou sessenta
                  anos. A resposta raramente está em um único acontecimento.
                </p>

                <p>
                  Ao longo do tempo, o corpo acumula adaptações: redução de
                  mobilidade, alterações posturais, períodos prolongados
                  sentado, perda de força, sobrecargas repetidas e mudanças
                  naturais da coluna.
                </p>

                <p>
                  Isso não significa que envelhecer seja sinônimo de dor. Mas
                  ajuda a entender por que determinadas condições podem se
                  tornar mais perceptíveis com o passar dos anos.
                </p>
              </section>

              <section id="quando-procurar-ajuda">
                <h2>Quando procurar ajuda?</h2>

                <p>Procure avaliação quando:</p>

                <ul>
                  <li>A coceira é persistente e sempre aparece no mesmo local;</li>
                  <li>Existe dor, queimação, dormência ou formigamento;</li>
                  <li>A mancha aumenta ou muda de aspecto;</li>
                  <li>Há perda de força ou alteração de sensibilidade;</li>
                  <li>Os sintomas prejudicam o sono ou as atividades diárias;</li>
                  <li>Tratamentos para a pele não resolvem o problema.</li>
                </ul>
              </section>

              <section>
                <h2>Conclusão</h2>

                <p>
                  A notalgia parestésica é uma condição pouco conhecida, mas
                  possui um conjunto de sintomas bastante característico.
                  Coceira, ardência, formigamento e mancha na região entre as
                  escápulas merecem avaliação, principalmente quando persistem
                  por muito tempo.
                </p>

                <p>
                  Entender o que acontece no corpo é uma parte importante do
                  tratamento. A partir de um diagnóstico adequado, é possível
                  construir uma estratégia para reduzir os sintomas e melhorar
                  a função.
                </p>
              </section>

              <aside className={styles.youtubeCta}>
                <div className={styles.youtubeIcon}>▶</div>

                <div>
                  <span>Assista também</span>
                  <h2>Aula sobre notalgia parestésica</h2>
                  <p>
                    Aprofunde o conteúdo com uma explicação em vídeo no canal
                    Professor Fisio.
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=O4NvDAJMNLw&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir para o YouTube
                  <ArrowIcon />
                </a>
              </aside>

              <section className={styles.faqSection}>
                <span className="eyebrow">Perguntas frequentes</span>
                <h2>Dúvidas sobre notalgia parestésica</h2>

                <div className={styles.faqList}>
                  {faqItems.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <div className={styles.disclaimer}>
                <strong>Informação importante</strong>
                <p>
                  Este conteúdo tem finalidade educacional e não substitui
                  avaliação, diagnóstico ou tratamento individualizado.
                </p>
              </div>
            </div>
          </div>

          <section className={styles.relatedSection}>
            <div className="container">
              <div className={styles.relatedHeading}>
                <div>
                  <span className="eyebrow">Continue aprendendo</span>
                  <h2>Artigos relacionados</h2>
                </div>

                <Link href="/artigos">
                  Ver todos os artigos
                  <ArrowIcon />
                </Link>
              </div>

              <div className={styles.relatedGrid}>
                <article>
                  <span>Fibromialgia</span>
                  <h3>Fibromialgia: uma doença sem saída?</h3>
                  <p>
                    Sintomas, diagnóstico, tratamento e possibilidades reais de
                    melhora.
                  </p>
                  <small>Em preparação</small>
                </article>

                <article>
                  <span>Coluna</span>
                  <h3>Hérnia de disco: quando a imagem não conta tudo</h3>
                  <p>
                    Entenda por que o exame precisa ser relacionado com a
                    avaliação clínica.
                  </p>
                  <small>Em preparação</small>
                </article>

                <article>
                  <span>Dor ciática</span>
                  <h3>Ciático inflamado ou comprimido?</h3>
                  <p>
                    As diferenças, os principais sinais e quando procurar
                    ajuda.
                  </p>
                  <small>Em preparação</small>
                </article>
              </div>
            </div>
          </section>
        </article>
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

      {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </div>
  );
}