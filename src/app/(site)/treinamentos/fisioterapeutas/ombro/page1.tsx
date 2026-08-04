import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia Manual Aplicada ao Ombro",
  description:
    "Treinamento profissional com mais de 130 videoaulas sobre avaliação, biomecânica, raciocínio clínico e técnicas de terapia manual aplicadas ao ombro.",
};

const checkoutUrl = "https://pay.hotmart.com/H39460015D";

const outcomes = [
  "Avaliar o complexo articular do ombro com mais segurança.",
  "Compreender a anatomia e a biomecânica de forma integrada.",
  "Desenvolver um raciocínio clínico mais organizado.",
  "Selecionar técnicas de acordo com os achados da avaliação.",
  "Aplicar recursos manuais com maior precisão clínica.",
  "Conduzir atendimentos com mais confiança profissional.",
];

const modules = [
  {
    number: "01",
    title: "Introdução ao complexo articular do ombro",
    description:
      "Visão geral do treinamento e compreensão inicial das estruturas que formam o complexo do ombro.",
    topics: ["Organização do conteúdo", "Complexo articular", "Visão integrada"],
  },
  {
    number: "02",
    title: "Sistema ósseo",
    description:
      "Estudo das estruturas ósseas que participam da função e da mobilidade do ombro.",
    topics: ["Úmero", "Escápula", "Clavícula"],
  },
  {
    number: "03",
    title: "Sistema articular",
    description:
      "Compreensão funcional das articulações e de suas relações durante o movimento.",
    topics: [
      "Esternoclavicular",
      "Acromioclavicular",
      "Glenoumeral",
      "Escapulotorácica",
    ],
  },
  {
    number: "04",
    title: "Sistema nervoso e raciocínio clínico",
    description:
      "Integração entre plexo braquial, dermátomos, correlações clínicas e tomada de decisão.",
    topics: ["Plexo braquial", "Dermátomos", "Correlações clínicas"],
  },
  {
    number: "05",
    title: "Sistema vascular",
    description:
      "Fundamentos vasculares importantes para uma avaliação mais ampla e responsável.",
    topics: ["Anatomia vascular", "Relações clínicas", "Segurança"],
  },
  {
    number: "06",
    title: "Sistema muscular",
    description:
      "Estudo detalhado dos músculos envolvidos na estabilidade e no movimento do ombro.",
    topics: ["Manguito rotador", "Músculos escapulares", "Músculos torácicos"],
  },
  {
    number: "07",
    title: "Biomecânica do ombro",
    description:
      "Entenda os movimentos globais, a participação escapular e as relações entre as estruturas.",
    topics: ["Macro e microfisiologia", "Ritmo escapular", "Movimentos globais"],
  },
  {
    number: "08",
    title: "Técnicas para clavícula",
    description:
      "Avaliação de mobilidade e técnicas voltadas às disfunções claviculares.",
    topics: [
      "Acromioclavicular",
      "Esternoclavicular",
      "Rotações e translações",
    ],
  },
  {
    number: "09",
    title: "Técnicas para escápula",
    description:
      "Testes funcionais, avaliação escapular e técnicas de mobilização.",
    topics: ["Teste de assistência", "Teste de apoio", "Mobilização escapular"],
  },
  {
    number: "10",
    title: "Técnicas para úmero e glenoumeral",
    description:
      "Avaliação das principais disfunções e aplicação das técnicas correspondentes.",
    topics: ["Superioridade", "Inferioridade", "Anterioridade", "Posterioridade"],
  },
  {
    number: "11",
    title: "Disfunções miofasciais",
    description:
      "Técnicas de stretching e abordagem manual dos principais músculos relacionados ao ombro.",
    topics: ["Trapézio", "Manguito rotador", "Peitorais", "Grande dorsal"],
  },
];

const bonuses = [
  {
    number: "01",
    title: "Introdução à Terapia Manual",
    description:
      "Fundamentos para compreender os princípios e a aplicação dos recursos manuais.",
  },
  {
    number: "02",
    title: "Diagnóstico diferencial",
    description:
      "Conteúdo complementar para ampliar a capacidade de análise clínica.",
  },
  {
    number: "03",
    title: "Técnica para cervical e integração dos sistemas",
    description:
      "Abordagem complementar das relações entre região cervical, ombro e demais sistemas.",
  },
  {
    number: "04",
    title: "As cinco leis biológicas e dor no ombro",
    description:
      "Aulas complementares apresentando essa linha de interpretação e suas relações com o tema.",
  },
];

const testimonials = [
  {
    text: "Treinamento excelente, com abordagem completa das estruturas e do tratamento. Parabéns aos envolvidos.",
    author: "Pablo Antunes Ayub",
  },
  {
    text: "O passo a passo e o raciocínio clínico exposto tornam o entendimento do tema muito fácil.",
    author: "Marco Antônio M. Batista",
  },
  {
    text: "Um treinamento extraordinário. Super indico.",
    author: "Iria T. Wasniewski",
  },
  {
    text: "Estrutura perfeita desde a anatomia até o tratamento do ombro.",
    author: "Camila Graziela Leal",
  },
];

const faqs = [
  {
    question: "Qual é a carga horária?",
    answer:
      "O treinamento possui certificação de 30 horas, considerando as videoaulas, os estudos complementares e a prática realizada pelo aluno.",
  },
  {
    question: "Quem pode participar?",
    answer:
      "O treinamento é destinado a fisioterapeutas, estudantes de fisioterapia e outros profissionais da saúde, sempre respeitando as atribuições e autorizações de cada conselho profissional.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer:
      "O acesso fica disponível por 365 dias a partir da confirmação da matrícula.",
  },
  {
    question: "O treinamento possui certificado?",
    answer:
      "Sim. Após concluir as aulas e cumprir os critérios informados no ambiente de aprendizagem, o aluno poderá solicitar o certificado de 30 horas.",
  },
  {
    question: "Onde assistirei às aulas?",
    answer:
      "O acesso é realizado pela plataforma Hotmart, pelo celular, tablet ou computador.",
  },
  {
    question: "Quantas aulas estão disponíveis?",
    answer:
      "São mais de 130 videoaulas teóricas e práticas demonstrativas, distribuídas ao longo de 11 módulos.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. A compra possui garantia de 7 dias, conforme as regras apresentadas durante o checkout da Hotmart.",
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
      className="shoulder-check-icon"
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

export default function ShoulderTrainingPage() {
  return (
    <div className="site-shell">
      <header className="site-header shoulder-header">
        <div className="container header-content">
          <Link href="/" className="brand" aria-label="Página inicial">
            <span className="brand-mark">FE</span>

            <span className="brand-copy">
              <strong>Dr. Frank Eduardo</strong>
              <small>Educação e prática clínica</small>
            </span>
          </Link>

          <nav className="desktop-navigation" aria-label="Navegação principal">
            <Link href="/">Início</Link>
            <Link href="/artigos">Artigos</Link>
            <Link href="/treinamentos">Treinamentos</Link>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>

          <CheckoutButton className="header-cta">
            Fazer matrícula
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
              <Link href="/sobre">Sobre</Link>

              <CheckoutButton className="mobile-menu-cta">
                Fazer matrícula
              </CheckoutButton>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section className="shoulder-hero">
          <div className="container shoulder-hero-grid">
            <div className="shoulder-hero-content">
              <div className="breadcrumb shoulder-breadcrumb">
                <Link href="/">Início</Link>
                <span>/</span>
                <Link href="/treinamentos/fisioterapeutas">
                  Treinamentos
                </Link>
                <span>/</span>
                <strong>Ombro</strong>
              </div>

              <span className="shoulder-eyebrow">
                Formação clínica profissional
              </span>

              <h1>
                Terapia Manual Aplicada ao <span>Ombro.</span>
              </h1>

              <p>
                Domine a avaliação, o raciocínio clínico e as principais
                técnicas de terapia manual aplicadas ao complexo articular do
                ombro.
              </p>

              <div className="shoulder-hero-highlights">
                <div>
                  <CheckIcon />
                  <span>Mais de 130 videoaulas</span>
                </div>

                <div>
                  <CheckIcon />
                  <span>Certificado de 30 horas</span>
                </div>

                <div>
                  <CheckIcon />
                  <span>Acesso por 12 meses</span>
                </div>

                <div>
                  <CheckIcon />
                  <span>Aulas teóricas e práticas</span>
                </div>
              </div>

              <div className="shoulder-hero-offer">
                <div>
                  <span>Investimento único</span>
                  <strong>R$ 97,00</strong>
                </div>

                <CheckoutButton className="button shoulder-primary-button">
                  Fazer minha matrícula
                  <ArrowIcon />
                </CheckoutButton>
              </div>

              <small>
                Compra segura, acesso imediato e garantia de 7 dias pela
                Hotmart.
              </small>
            </div>

            <div className="shoulder-visual">
              <div className="shoulder-course-cover">
                <Image
                  src="/terapia-manual-ombro-capa.png"
                  alt="Capa do treinamento Terapia Manual Aplicada ao Ombro"
                  width={1102}
                  height={1376}
                  priority
                  sizes="(max-width: 1020px) 90vw, 500px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="shoulder-problem-section">
          <div className="container shoulder-problem-grid">
            <div>
              <span className="shoulder-eyebrow">O desafio clínico</span>

              <h2>
                Tratar o ombro exige mais do que conhecer técnicas isoladas.
              </h2>

              <p>
                A complexidade anatômica e biomecânica da região exige uma
                avaliação organizada, compreensão das estruturas e capacidade
                para relacionar os achados clínicos.
              </p>
            </div>

            <div className="shoulder-problem-list">
              {[
                "Dificuldade para identificar qual estrutura está envolvida.",
                "Insegurança para escolher o teste ou a técnica adequada.",
                "Protocolos genéricos que não consideram a avaliação individual.",
                "Pouca integração entre anatomia, biomecânica e tratamento.",
                "Dependência excessiva de recursos passivos e aparelhos.",
              ].map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shoulder-outcomes-section">
          <div className="container">
            <div className="centered-heading">
              <span className="shoulder-eyebrow">
                O que você desenvolverá
              </span>

              <h2>
                Mais segurança para avaliar, raciocinar e conduzir o
                tratamento.
              </h2>
            </div>

            <div className="shoulder-outcomes-grid">
              {outcomes.map((outcome, index) => (
                <article key={outcome}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shoulder-proof-section">
          <div className="container">
            <div className="shoulder-proof-heading">
              <span className="shoulder-eyebrow">Dados reais dos alunos</span>

              <h2>
                Uma formação validada por quem chegou até o final.
              </h2>

              <p>
                Os indicadores abaixo foram obtidos através do questionário de
                conclusão preenchido pelos próprios alunos.
              </p>
            </div>

            <div className="shoulder-proof-grid">
              <article>
                <strong>199</strong>
                <span>respostas após a conclusão</span>
              </article>

              <article>
                <strong>100%</strong>
                <span>disseram que recomendariam</span>
              </article>

              <article>
                <strong>193</strong>
                <span>relataram mudança na percepção clínica</span>
              </article>

              <article>
                <strong>135</strong>
                <span>avaliaram o treinamento como ótimo</span>
              </article>
            </div>
          </div>
        </section>

        <section className="shoulder-authority-section">
          <div className="container shoulder-authority-grid">
            <div className="shoulder-authority-stats">
              <article>
                <strong>+17</strong>
                <span>anos de experiência clínica</span>
              </article>

              <article>
                <strong>+20 mil</strong>
                <span>pacientes atendidos</span>
              </article>

              <article>
                <strong>+130</strong>
                <span>videoaulas na formação</span>
              </article>
            </div>

            <div className="shoulder-authority-content">
              <span className="shoulder-eyebrow">
                Experiência aplicada à formação
              </span>

              <h2>
                Conhecimento construído entre o consultório e a sala de aula.
              </h2>

              <p>
                Frank Eduardo é fisioterapeuta com mais de 17 anos de
                experiência clínica e mais de 20 mil pacientes atendidos.
                Atua especialmente com terapia manual, osteopatia e
                quiropraxia.
              </p>

              <p>
                Também possui experiência como docente e gestor de
                pós-graduação, reunindo prática clínica e didática para
                apresentar conteúdos complexos de forma clara e aplicável.
              </p>
            </div>
          </div>
        </section>

        <section className="shoulder-modules-section">
          <div className="container">
            <div className="section-heading shoulder-modules-heading">
              <div>
                <span className="shoulder-eyebrow">Conteúdo programático</span>
                <h2>Uma formação completa em 11 módulos.</h2>
              </div>

              <p>
                O conteúdo avança dos fundamentos anatômicos até a avaliação e
                aplicação prática das técnicas.
              </p>
            </div>

            <div className="shoulder-modules-grid">
              {modules.map((module) => (
                <article className="shoulder-module-card" key={module.number}>
                  <div className="shoulder-module-header">
                    <span>Módulo</span>
                    <strong>{module.number}</strong>
                  </div>

                  <h3>{module.title}</h3>
                  <p>{module.description}</p>

                  <div className="shoulder-module-topics">
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

        <section className="shoulder-bonuses-section">
          <div className="container">
            <div className="shoulder-bonuses-heading">
              <span className="shoulder-eyebrow">
                Conteúdos complementares
              </span>

              <h2>Quatro bônus incluídos na sua matrícula.</h2>
            </div>

            <div className="shoulder-bonuses-grid">
              {bonuses.map((bonus) => (
                <article key={bonus.number}>
                  <span>Bônus {bonus.number}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shoulder-testimonials-section">
          <div className="container">
            <div className="shoulder-testimonials-heading">
              <span className="shoulder-eyebrow">
                Relatos de quem participou
              </span>

              <h2>Experiências compartilhadas após a conclusão.</h2>

              <p>
                Os depoimentos foram enviados pelos próprios alunos através do
                formulário de conclusão do treinamento.
              </p>
            </div>

            <div className="shoulder-testimonials-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author}>
                  <div className="shoulder-stars">★★★★★</div>

                  <blockquote>“{testimonial.text}”</blockquote>

                  <strong>{testimonial.author}</strong>
                </article>
              ))}
            </div>

            <div className="shoulder-testimonials-note">
              <strong>Mais de 100 depoimentos escritos coletados.</strong>
              <span>
                A página apresenta apenas uma seleção dos relatos recebidos.
              </span>
            </div>
          </div>
        </section>

        <section className="shoulder-offer-section">
          <div className="container shoulder-offer-grid">
            <div className="shoulder-offer-content">
              <span className="shoulder-eyebrow">Sua matrícula inclui</span>

              <h2>
                Formação completa para transformar sua abordagem clínica do
                ombro.
              </h2>

              <div className="shoulder-offer-list">
                {[
                  "Mais de 130 videoaulas",
                  "11 módulos completos",
                  "Aulas teóricas e práticas demonstrativas",
                  "Certificado de 30 horas",
                  "Quatro bônus complementares",
                  "Acesso durante 12 meses",
                  "Atualizações incluídas durante o período",
                ].map((item) => (
                  <div key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shoulder-price-card">
              <span className="shoulder-price-label">
                Investimento único
              </span>

              <div className="shoulder-price">
                <small>R$</small>
                <strong>97,00</strong>
              </div>

              <p>
                Formação profissional completa com um investimento acessível
                para estudantes e profissionais.
              </p>

              <CheckoutButton className="shoulder-checkout-button">
                Fazer minha matrícula
                <ArrowIcon />
              </CheckoutButton>

              <div className="shoulder-guarantee">
                <strong>Garantia de 7 dias</strong>
                <span>Compra e acesso pela plataforma Hotmart.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="shoulder-faq-section">
          <div className="container shoulder-faq-grid">
            <div className="shoulder-faq-heading">
              <span className="shoulder-eyebrow">Perguntas frequentes</span>
              <h2>Tire suas dúvidas antes da matrícula.</h2>
            </div>

            <div className="shoulder-faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{faq.question}</strong>
                    <span className="shoulder-faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="shoulder-final-cta">
          <div className="container shoulder-final-content">
            <span>O próximo passo da sua evolução clínica</span>

            <h2>
              Pare de aplicar técnicas isoladas e comece a tratar o ombro com
              mais compreensão e raciocínio.
            </h2>

            <p>
              Acesse agora uma formação completa, avance no seu ritmo e
              desenvolva mais segurança na prática profissional.
            </p>

            <CheckoutButton className="button shoulder-final-button">
              Fazer matrícula por R$ 97,00
              <ArrowIcon />
            </CheckoutButton>
          </div>
        </section>

        <section className="shoulder-professional-notice">
          <div className="container">
            <p>
              <strong>Aviso profissional:</strong> a utilização das técnicas e
              recursos apresentados deve respeitar as resoluções, atribuições e
              autorizações do conselho profissional de cada participante. Este
              treinamento possui finalidade educacional e não amplia
              atribuições profissionais previstas em lei.
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
              a prática clínica e o cuidado em saúde.
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

          <p>Treinamento destinado a profissionais e estudantes da saúde.</p>
        </div>
      </footer>
    </div>
  );
}