import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseStructuredData from "@/components/CourseStructuredData";

export const metadata: Metadata = {
  title: "Fibromialgia: Da Compreensão à Transformação",
  description:
    "Treinamento online para pessoas que desejam compreender melhor a fibromialgia, a dor, o exercício, o sono, as emoções e o estilo de vida.",
};

const checkoutUrl = "https://pay.hotmart.com/Q88302121W";

const modules = [
  {
    number: "01",
    title: "Introdução à Fibromialgia",
    description:
      "Entenda o que é a fibromialgia, suas principais características, sintomas e as diferentes formas como ela pode se manifestar.",
    topics: [
      "Definição e características",
      "Sintomas mais comuns",
      "Variações entre pessoas",
    ],
  },
  {
    number: "02",
    title: "Causas e Fatores de Risco",
    description:
      "Conheça possíveis fatores relacionados ao desenvolvimento e à intensificação dos sintomas.",
    topics: [
      "Possíveis causas",
      "Fatores associados",
      "Fatores de risco",
    ],
  },
  {
    number: "03",
    title: "Diagnóstico e Tratamento",
    description:
      "Compreenda como acontece o processo diagnóstico e conheça possibilidades convencionais de tratamento.",
    topics: [
      "Processo de diagnóstico",
      "Avaliação profissional",
      "Opções de tratamento",
    ],
  },
  {
    number: "04",
    title: "Gestão da Dor",
    description:
      "Aprenda estratégias para lidar melhor com a dor crônica e reduzir seu impacto sobre a rotina.",
    topics: [
      "Compreensão da dor",
      "Estratégias de manejo",
      "Organização da rotina",
    ],
  },
  {
    number: "05",
    title: "Exercícios e Atividades Físicas",
    description:
      "Descubra por que o movimento é importante e como a atividade física pode participar do cuidado.",
    topics: [
      "Importância do exercício",
      "Movimento com segurança",
      "Regularidade e adaptação",
    ],
  },
  {
    number: "06",
    title: "Aspectos Psicológicos",
    description:
      "Compreenda a relação entre fibromialgia, emoções, estresse, ansiedade e qualidade de vida.",
    topics: [
      "Impacto emocional",
      "Estresse e ansiedade",
      "Estratégias de enfrentamento",
    ],
  },
  {
    number: "07",
    title: "Nutrição e Estilo de Vida",
    description:
      "Conheça hábitos que podem contribuir para uma rotina mais equilibrada e consciente.",
    topics: [
      "Alimentação equilibrada",
      "Hábitos cotidianos",
      "Receitas Low Carb",
    ],
  },
  {
    number: "08",
    title: "Aplicação no Dia a Dia",
    description:
      "Aprenda com situações práticas e compreenda como aplicar o conhecimento à vida real.",
    topics: [
      "Casos reais",
      "Intervenções realizadas",
      "Lições práticas",
    ],
  },
];

const bonuses = [
  {
    number: "01",
    title: "Fibromialgia, Ansiedade e Depressão",
    description:
      "Caminhos para compreender a relação entre saúde emocional, dor e bem-estar.",
  },
  {
    number: "02",
    title: "10 Hábitos que Pioram a Fibromialgia",
    description:
      "Identifique comportamentos cotidianos que podem aumentar o impacto dos sintomas.",
  },
  {
    number: "03",
    title: "7 Passos para Aliviar a Dor Lombar",
    description:
      "Orientações educativas para compreender e manejar melhor o desconforto lombar.",
  },
  {
    number: "04",
    title: "Como Melhorar o Sono",
    description:
      "Estratégias para organizar a rotina e favorecer uma melhor qualidade do sono.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Para quem é este treinamento?",
    answer:
      "Para pessoas diagnosticadas com fibromialgia, pessoas em processo de investigação, familiares e cuidadores que desejam compreender melhor a condição.",
  },
  {
    question: "Preciso ter conhecimento na área da saúde?",
    answer:
      "Não. O conteúdo foi organizado em linguagem acessível para pessoas comuns, sem necessidade de formação prévia.",
  },
  {
    question: "Como receberei o acesso?",
    answer:
      "Após a confirmação da compra, o acesso será enviado pela Hotmart para o e-mail utilizado durante o pagamento.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer:
      "Sim. O treinamento pode ser acessado pelo celular, tablet ou computador com conexão à internet.",
  },
  {
    question: "O treinamento substitui uma consulta ou tratamento?",
    answer:
      "Não. O conteúdo tem finalidade educativa e não substitui avaliação, diagnóstico, prescrição ou acompanhamento individualizado.",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "Sim. Depois da confirmação do pagamento, você poderá iniciar o treinamento pela plataforma Hotmart.",
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

export default function FibromyalgiaTrainingPage() {
  return (
    <>
      <CourseStructuredData
        name="Fibromialgia: Da Compreensão à Transformação"
        description="Treinamento em educação em saúde desenvolvido para ajudar pessoas com fibromialgia a compreender melhor a condição e adotar estratégias relacionadas à dor, ao movimento, ao sono, às emoções e ao estilo de vida."
        pathname="/treinamentos/fibromialgia"
        image="/fibromialgia-capa.png"
        price="39.90"
        checkoutUrl={checkoutUrl}
        audience="Pacientes, familiares e cuidadores interessados em educação em saúde"
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

          <CheckoutButton className="header-cta">
            Começar treinamento
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
                Começar treinamento
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
                <strong>Fibromialgia</strong>
              </div>

              <span className="eyebrow">Treinamento online</span>

              <h1>
                Fibromialgia: Da Compreensão à{" "}
                <span>Transformação.</span>
              </h1>

              <p className="fibro-hero-description">
                Entenda melhor a fibromialgia, reconheça fatores que podem
                influenciar seus sintomas e conheça estratégias relacionadas à
                dor, ao movimento, ao sono, às emoções e ao estilo de vida.
              </p>

              <div className="fibro-hero-benefits">
                <div>
                  <CheckIcon />
                  <span>Acesso imediato</span>
                </div>

                <div>
                  <CheckIcon />
                  <span>100% online</span>
                </div>

                <div>
                  <CheckIcon />
                  <span>Assista no seu ritmo</span>
                </div>
              </div>

              <div className="fibro-hero-offer">
                <div>
                  <span>Investimento único</span>
                  <strong>R$ 39,90</strong>
                </div>

                <CheckoutButton className="button button-primary fibro-primary-button">
                  Começar treinamento
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
                  src="/fibromialgia-capa.png"
                  alt="Capa do treinamento Fibromialgia: Da Compreensão à Transformação"
                  width={600}
                  height={600}
                  priority
                />
              </div>

              <div className="fibro-cover-badge">
                <strong>+17 anos</strong>
                <span>de experiência clínica</span>
              </div>
            </div>
          </div>
        </section>

        <section className="fibro-identification-section">
          <div className="container fibro-identification-grid">
            <div className="fibro-identification-heading">
              <span className="eyebrow">Talvez você se reconheça</span>

              <h2>
                Conviver com a fibromialgia pode ser cansativo e confuso.
              </h2>

              <p>
                Especialmente quando os sintomas mudam, os exames não explicam
                tudo e diferentes informações parecem entrar em conflito.
              </p>
            </div>

            <div className="fibro-identification-list">
              {[
                "Você acorda cansado mesmo depois de uma noite inteira de sono.",
                "Sente dores em diferentes regiões e não entende por que elas mudam.",
                "Já ouviu que seus exames estão normais, apesar de continuar sentindo dor.",
                "Tem receio de realizar exercícios e piorar os sintomas.",
                "Percebe que estresse, ansiedade e sono ruim afetam o seu corpo.",
                "Sente que as pessoas ao seu redor não compreendem completamente o que você vive.",
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
              <span className="eyebrow">Da informação à autonomia</span>

              <h2>
                Compreender o que acontece com seu corpo pode mudar a forma como
                você enfrenta a condição.
              </h2>
            </div>

            <div className="fibro-transformation-grid">
              {[
                {
                  number: "01",
                  title: "Compreenda",
                  description:
                    "Entenda a fibromialgia, os sintomas e os fatores que podem influenciar a intensidade da dor.",
                },
                {
                  number: "02",
                  title: "Reconheça",
                  description:
                    "Identifique padrões relacionados ao sono, ao estresse, à atividade física e ao estilo de vida.",
                },
                {
                  number: "03",
                  title: "Participe",
                  description:
                    "Converse com mais segurança com os profissionais que acompanham seu tratamento.",
                },
                {
                  number: "04",
                  title: "Transforme",
                  description:
                    "Aplique o conhecimento à rotina e construa uma participação mais ativa no próprio cuidado.",
                },
              ].map((item) => (
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
                <strong>+17</strong>
                <span>anos de experiência clínica</span>
              </article>

              <article>
                <strong>+20 mil</strong>
                <span>pacientes atendidos</span>
              </article>

              <article>
                <strong>2009</strong>
                <span>início da atuação profissional</span>
              </article>
            </div>

            <div className="fibro-authority-content">
              <span className="eyebrow">Experiência transformada em educação</span>

              <h2>
                Um treinamento construído a partir da realidade do consultório.
              </h2>

              <p>
                Ao longo de mais de 17 anos de atuação clínica e mais de 20 mil
                pacientes atendidos, tornou-se evidente que muitas pessoas
                convivem com dor, medo e informações desencontradas.
              </p>

              <p>
                Este treinamento nasceu para organizar esse conhecimento de
                forma acessível e ajudar pessoas com fibromialgia a compreender
                melhor a condição e participar de maneira mais consciente do
                próprio cuidado.
              </p>
            </div>
          </div>
        </section>

        <section className="fibro-modules-section">
          <div className="container">
            <div className="section-heading fibro-modules-heading">
              <div>
                <span className="eyebrow">Conteúdo do treinamento</span>
                <h2>Uma jornada organizada em oito módulos.</h2>
              </div>

              <p>
                O conteúdo avança desde os fundamentos da fibromialgia até sua
                aplicação prática no cotidiano.
              </p>
            </div>

            <div className="fibro-modules-grid">
              {modules.map((module) => (
                <article className="fibro-module-card" key={module.number}>
                  <div className="fibro-module-top">
                    <span>Módulo</span>
                    <strong>{module.number}</strong>
                  </div>

                  <h3>{module.title}</h3>
                  <p>{module.description}</p>

                  <div className="fibro-module-topics">
                    {module.topics.map((topic) => (
                      <div key={topic}>
                        <CheckIcon />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fibro-bonuses-section">
          <div className="container">
            <div className="fibro-bonuses-intro">
              <span className="eyebrow">Conteúdos complementares</span>
              <h2>Você também receberá quatro bônus.</h2>
              <p>
                Materiais para aprofundar temas que podem influenciar
                diretamente a qualidade de vida.
              </p>
            </div>

            <div className="fibro-bonuses-grid">
              {bonuses.map((bonus) => (
                <article key={bonus.number}>
                  <span className="fibro-bonus-label">Bônus {bonus.number}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fibro-audience-section">
          <div className="container fibro-audience-grid">
            <article className="fibro-audience-card fibro-audience-positive">
              <span>Este treinamento é para você que...</span>

              <h2>Deseja compreender e participar mais do próprio cuidado.</h2>

              <div>
                {[
                  "Foi diagnosticado com fibromialgia.",
                  "Está investigando sintomas relacionados à condição.",
                  "Convive com dor, fadiga e alterações no sono.",
                  "Deseja entender melhor as possibilidades de cuidado.",
                  "É familiar ou cuidador de uma pessoa com fibromialgia.",
                  "Procura informação responsável e sem promessas milagrosas.",
                ].map((item) => (
                  <p key={item}>
                    <CheckIcon />
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="fibro-audience-card fibro-audience-negative">
              <span>Este treinamento não foi criado para...</span>

              <h2>Substituir avaliação, diagnóstico ou tratamento profissional.</h2>

              <div>
                {[
                  "Quem procura uma promessa de cura imediata.",
                  "Quem deseja interromper tratamentos sem orientação.",
                  "Quem busca uma prescrição individualizada.",
                  "Quem espera um protocolo universal para todas as pessoas.",
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
                Comece agora sua jornada da compreensão à transformação.
              </h2>

              <p>
                Tenha acesso ao treinamento completo, aos oito módulos e a
                todos os conteúdos complementares.
              </p>

              <div className="fibro-offer-includes">
                {[
                  "Treinamento 100% online",
                  "Oito módulos de conteúdo",
                  "Quatro bônus complementares",
                  "Acesso imediato pela Hotmart",
                  "Assista no celular, tablet ou computador",
                ].map((item) => (
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
                <strong>39,90</strong>
              </div>

              <p>
                Um investimento acessível em conhecimento, compreensão e
                participação mais ativa no seu cuidado.
              </p>

              <CheckoutButton className="fibro-checkout-button">
                Começar treinamento
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
                As informações abaixo ajudam você a entender como funcionam a
                compra e o acesso.
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
            <span>Seu próximo passo pode começar hoje</span>

            <h2>
              Você não precisa continuar enfrentando a fibromialgia sem
              compreender o que acontece com seu corpo.
            </h2>

            <p>
              Comece o treinamento, avance no seu ritmo e transforme informação
              em uma participação mais consciente no próprio cuidado.
            </p>

            <CheckoutButton className="button button-light fibro-final-button">
              Começar treinamento por R$ 39,90
              <ArrowIcon />
            </CheckoutButton>
          </div>
        </section>

        <section className="fibro-ethical-section">
          <div className="container">
            <p>
              <strong>Aviso importante:</strong> este treinamento possui
              finalidade exclusivamente educativa. O conteúdo não substitui
              consulta, diagnóstico, prescrição, tratamento ou acompanhamento
              individualizado realizado por profissionais habilitados.
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