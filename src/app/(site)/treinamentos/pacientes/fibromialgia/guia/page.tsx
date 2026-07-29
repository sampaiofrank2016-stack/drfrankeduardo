import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fibromialgia, Ansiedade e Depressão | Guia Educativo",
  description:
    "Guia educativo sobre fibromialgia, ansiedade e depressão, acompanhado de Chek List e aula bônus. Acesso imediato por R$ 4,99.",
  alternates: {
    canonical: "/treinamentos/fibromialgia/guia",
  },
  openGraph: {
    title: "Fibromialgia, Ansiedade e Depressão",
    description:
      "Guia educativo com ebook, Chek List e aula bônus por R$ 4,99.",
    url: "/treinamentos/fibromialgia/guia",
    type: "website",
    images: [
      {
        url: "/images/guia-fibromialgia-capa.png",
        width: 1200,
        height: 630,
        alt: "Fibromialgia, Ansiedade e Depressão — Caminhos para o Bem Estar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibromialgia, Ansiedade e Depressão",
    description:
      "Guia educativo com ebook, Chek List e aula bônus por R$ 4,99.",
    images: ["/images/guia-fibromialgia-capa.png"],
  },
};

const checkoutUrl = "https://pay.hotmart.com/V88283104J";

const learningTopics = [
  {
    number: "01",
    title: "Fibromialgia e saúde emocional",
    description:
      "Compreenda como a dor crônica pode se relacionar com a ansiedade, a depressão e a qualidade de vida.",
  },
  {
    number: "02",
    title: "Abordagens de cuidado",
    description:
      "Conheça diferentes possibilidades de cuidado e a importância de uma abordagem integrada e multidisciplinar.",
  },
  {
    number: "03",
    title: "Saúde mental no cotidiano",
    description:
      "Aprenda estratégias relacionadas ao estresse, ao relaxamento, ao sono e à organização da rotina.",
  },
  {
    number: "04",
    title: "Apoio e autocuidado",
    description:
      "Entenda o papel da rede de apoio, da comunicação e de pequenas ações diárias na busca pelo bem-estar.",
  },
];

const includedItems = [
  "Ebook Fibromialgia, Ansiedade e Depressão",
  "Chek List de ações para o bem-estar",
  "Acesso à aula O SISTEMA",
  "Material em formato digital",
  "Acesso imediato pela Hotmart",
];

const frequentlyAskedQuestions = [
  {
    question: "O que receberei após a compra?",
    answer:
      "Você receberá o ebook Fibromialgia, Ansiedade e Depressão — Caminhos para o Bem Estar, o Chek List — Desafio de Bem-Estar: Ação em Direção ao Bem-Estar e o acesso à aula O SISTEMA: ISSO IMPEDE A SUA MELHORA.",
  },
  {
    question: "Como receberei o acesso?",
    answer:
      "Após a confirmação do pagamento, a Hotmart enviará as informações de acesso para o e-mail utilizado na compra.",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "Sim. Depois que o pagamento for confirmado, você poderá acessar os materiais digitais.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. Os materiais podem ser acessados pelo celular, tablet ou computador.",
  },
  {
    question: "Este material substitui consulta ou tratamento?",
    answer:
      "Não. O conteúdo possui finalidade educativa e não substitui avaliação, diagnóstico, prescrição ou acompanhamento individualizado.",
  },
  {
    question: "Preciso ter conhecimento na área da saúde?",
    answer:
      "Não. O conteúdo foi desenvolvido em linguagem acessível para pessoas que desejam compreender melhor esses temas.",
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
      className="fibro-check-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CheckoutButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function FibromyalgiaGuidePage() {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Fibromialgia, Ansiedade e Depressão — Caminhos para o Bem Estar",
    description:
      "Guia educativo digital sobre a relação entre fibromialgia, ansiedade, depressão e bem-estar, acompanhado de Chek List e aula bônus.",
    image:
      "https://www.frankeduardo.com.br/images/guia-fibromialgia-capa.png",
    brand: {
      "@type": "Brand",
      name: "Dr. Frank Eduardo",
    },
    offers: {
      "@type": "Offer",
      url: checkoutUrl,
      priceCurrency: "BRL",
      price: "4.99",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
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

            <nav
              className="desktop-navigation"
              aria-label="Navegação principal"
            >
              <Link href="/">Início</Link>
              <Link href="/artigos">Artigos</Link>
              <Link href="/treinamentos">Treinamentos</Link>
              <Link href="/tecnologia">Tecnologia</Link>
              <Link href="/consultorio">Consultório</Link>
              <Link href="/sobre">Sobre</Link>
            </nav>

            <CheckoutButton className="header-cta">
              Comprar por R$ 4,99
            </CheckoutButton>

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

                <CheckoutButton className="mobile-menu-cta">
                  Comprar por R$ 4,99
                </CheckoutButton>
              </div>
            </details>
          </div>
        </header>

        <main>
          <section className="fibro-hero">
            <div className="fibro-hero-circle fibro-hero-circle-one" />
            <div className="fibro-hero-circle fibro-hero-circle-two" />

            <div className="container fibro-hero-grid">
              <div className="fibro-hero-content">
                <div className="breadcrumb">
                  <Link href="/">Início</Link>
                  <span>/</span>
                  <Link href="/treinamentos/pacientes">Treinamentos</Link>
                  <span>/</span>
                  <strong>Guia Educativo</strong>
                </div>

                <span className="eyebrow">Guia educativo digital</span>

                <h1>
                  Fibromialgia, Ansiedade e Depressão:{" "}
                  <span>Caminhos para o Bem Estar.</span>
                </h1>

                <p className="fibro-hero-description">
                  Um material educativo para ajudar você a compreender melhor
                  a relação entre dor crônica, emoções, saúde mental,
                  autocuidado e qualidade de vida.
                </p>

                <div className="fibro-hero-benefits">
                  <div>
                    <CheckIcon />
                    <span>Acesso imediato</span>
                  </div>

                  <div>
                    <CheckIcon />
                    <span>Material digital</span>
                  </div>

                  <div>
                    <CheckIcon />
                    <span>Dois conteúdos bônus</span>
                  </div>
                </div>

                <div className="fibro-hero-offer">
                  <div>
                    <span>Investimento único</span>
                    <strong>R$ 4,99</strong>
                  </div>

                  <CheckoutButton className="button button-primary fibro-primary-button">
                    Quero meu guia
                    <ArrowIcon />
                  </CheckoutButton>
                </div>

                <small className="fibro-secure-purchase">
                  Compra segura e acesso pela plataforma Hotmart.
                </small>
              </div>

              <div className="fibro-cover-wrapper">
                <div className="fibro-cover-glow" />

                <div className="fibro-cover-card">
                  <Image
                    src="/images/guia-fibromialgia-capa.png"
                    alt="Capa do ebook Fibromialgia, Ansiedade e Depressão — Caminhos para o Bem Estar"
                    width={800}
                    height={1100}
                    priority
                  />
                </div>

                <div className="fibro-cover-badge">
                  <strong>31 páginas</strong>
                  <span>de conteúdo educativo</span>
                </div>
              </div>
            </div>
          </section>

          <section className="fibro-identification-section">
            <div className="container fibro-identification-grid">
              <div className="fibro-identification-heading">
                <span className="eyebrow">Compreender é o primeiro passo</span>

                <h2>
                  A fibromialgia pode afetar muito mais do que o corpo.
                </h2>

                <p>
                  A convivência com dor, fadiga, alterações no sono e
                  limitações na rotina também pode influenciar profundamente o
                  estado emocional.
                </p>
              </div>

              <div className="fibro-identification-list">
                {[
                  "Você convive com dor e percebe que o estresse pode intensificar os sintomas.",
                  "Sente ansiedade diante da incerteza sobre as dores e o cansaço.",
                  "Percebe mudanças no sono, no humor ou na disposição.",
                  "Deseja compreender melhor a relação entre corpo e emoções.",
                  "Procura ações práticas para cuidar melhor da própria rotina.",
                  "Quer se sentir mais preparado para conversar com seus profissionais de saúde.",
                ].map((item, index) => (
                  <article key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="fibro-transformation-section">
            <div className="container">
              <div className="centered-heading fibro-transformation-heading">
                <span className="eyebrow">O que você encontrará</span>

                <h2>
                  Informação organizada para compreender e colocar em prática.
                </h2>
              </div>

              <div className="fibro-transformation-grid">
                {learningTopics.map((item) => (
                  <article key={item.number}>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="fibro-authority-section">
            <div className="container fibro-authority-grid">
              <div className="fibro-authority-numbers">
                <article>
                  <strong>31</strong>
                  <span>páginas no ebook</span>
                </article>

                <article>
                  <strong>2</strong>
                  <span>conteúdos bônus</span>
                </article>

                <article>
                  <strong>R$ 4,99</strong>
                  <span>investimento único</span>
                </article>
              </div>

              <div className="fibro-authority-content">
                <span className="eyebrow">Conhecimento acessível</span>

                <h2>
                  Um guia educativo construído para ajudar você a dar os
                  primeiros passos.
                </h2>

                <p>
                  O material apresenta a relação entre fibromialgia, ansiedade
                  e depressão, além de abordar possibilidades de cuidado,
                  estratégias para o cotidiano, apoio emocional, autocuidado e
                  bem-estar.
                </p>

                <p>
                  O objetivo é ajudar você a organizar as informações e
                  participar de maneira mais consciente da sua própria jornada
                  de cuidado.
                </p>
              </div>
            </div>
          </section>

          <section className="fibro-bonuses-section">
            <div className="container">
              <div className="fibro-bonuses-intro">
                <span className="eyebrow">Kit digital completo</span>

                <h2>Você receberá três conteúdos.</h2>

                <p>
                  Um conjunto educativo para compreender, refletir e iniciar
                  ações em direção ao bem-estar.
                </p>
              </div>

              <div className="fibro-bonuses-grid">
                <article>
                  <span className="fibro-bonus-label">Conteúdo principal</span>

                  <h3>
                    Fibromialgia, Ansiedade e Depressão — Caminhos para o Bem
                    Estar
                  </h3>

                  <p>
                    Ebook digital com conteúdos sobre saúde emocional,
                    estratégias de cuidado, apoio, autocuidado e qualidade de
                    vida.
                  </p>
                </article>

                <article>
                  <span className="fibro-bonus-label">Bônus 01</span>

                  <h3>
                    Chek List — Desafio de Bem-Estar: Ação em Direção ao
                    Bem-Estar
                  </h3>

                  <p>
                    Uma lista de ações para transformar o conhecimento em
                    pequenas atitudes práticas no cotidiano.
                  </p>
                </article>

                <article>
                  <span className="fibro-bonus-label">Bônus 02</span>

                  <h3>O SISTEMA: ISSO IMPEDE A SUA MELHORA</h3>

                  <p>
                    Acesso a uma aula em vídeo para ampliar sua compreensão
                    sobre fatores que podem interferir na sua melhora.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="fibro-audience-section">
            <div className="container fibro-audience-grid">
              <article className="fibro-audience-card fibro-audience-positive">
                <span>Este guia é para você que...</span>

                <h2>
                  Deseja compreender melhor a fibromialgia e sua relação com a
                  saúde emocional.
                </h2>

                <div>
                  {[
                    "Foi diagnosticado com fibromialgia.",
                    "Está investigando sintomas relacionados à condição.",
                    "Convive com ansiedade, tristeza, estresse ou alterações no sono.",
                    "É familiar ou cuidador de uma pessoa com fibromialgia.",
                    "Deseja aprender ações de autocuidado para o cotidiano.",
                    "Procura informação educativa em linguagem acessível.",
                  ].map((item) => (
                    <p key={item}>
                      <CheckIcon />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="fibro-audience-card fibro-audience-negative">
                <span>Este guia não foi criado para...</span>

                <h2>
                  Substituir avaliação, diagnóstico ou acompanhamento
                  profissional.
                </h2>

                <div>
                  {[
                    "Quem procura uma promessa de cura imediata.",
                    "Quem deseja interromper tratamentos sem orientação.",
                    "Quem busca prescrição individualizada.",
                    "Quem espera uma solução única para todas as pessoas.",
                  ].map((item) => (
                    <p key={item}>
                      <span className="fibro-negative-mark">×</span>
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="fibro-offer-section">
            <div className="container fibro-offer-grid">
              <div className="fibro-offer-content">
                <span className="eyebrow">Acesso completo</span>

                <h2>
                  Comece agora sua jornada em direção ao bem-estar.
                </h2>

                <p>
                  Receba o ebook, o Chek List e a aula bônus em um único kit
                  digital.
                </p>

                <div className="fibro-offer-includes">
                  {includedItems.map((item) => (
                    <div key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fibro-price-card">
                <span className="fibro-price-label">Investimento único</span>

                <div className="fibro-price">
                  <small>R$</small>
                  <strong>4,99</strong>
                </div>

                <p>
                  Um investimento acessível para começar a compreender melhor a
                  fibromialgia e sua relação com a saúde emocional.
                </p>

                <CheckoutButton className="fibro-checkout-button">
                  Quero meu guia
                  <ArrowIcon />
                </CheckoutButton>

                <small>
                  Pagamento e acesso realizados com segurança pela Hotmart.
                </small>
              </div>
            </div>
          </section>

          <section className="fibro-faq-section">
            <div className="container fibro-faq-grid">
              <div className="fibro-faq-heading">
                <span className="eyebrow">Perguntas frequentes</span>

                <h2>Tire suas principais dúvidas.</h2>

                <p>
                  Veja como funcionam a compra, o acesso e o conteúdo do kit
                  digital.
                </p>
              </div>

              <div className="fibro-faq-list">
                {frequentlyAskedQuestions.map((item, index) => (
                  <details key={item.question}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item.question}</strong>
                      <span className="fibro-faq-plus">+</span>
                    </summary>

                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="fibro-final-cta">
            <div className="container fibro-final-cta-content">
              <span>Seu primeiro passo pode começar hoje</span>

              <h2>
                Compreender melhor o que você sente pode transformar a forma
                como você participa do próprio cuidado.
              </h2>

              <p>
                Tenha acesso ao ebook, ao Chek List e à aula bônus por um
                investimento único de R$ 4,99.
              </p>

              <CheckoutButton className="button button-light fibro-final-button">
                Comprar agora por R$ 4,99
                <ArrowIcon />
              </CheckoutButton>
            </div>
          </section>

          <section className="fibro-ethical-section">
            <div className="container">
              <p>
                <strong>Aviso importante:</strong> este material possui
                finalidade exclusivamente educativa. O conteúdo não substitui
                consulta, diagnóstico, prescrição, tratamento ou
                acompanhamento individualizado realizado por profissionais
                habilitados.
              </p>
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
                Conteúdo, atendimento, treinamentos e tecnologia para
                transformar a forma como pessoas cuidam da saúde.
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