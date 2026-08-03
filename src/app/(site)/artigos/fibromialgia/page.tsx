import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "../notalgia-parestesica/artigo.module.css";

const siteUrl = "https://www.frankeduardo.com.br";
const articleUrl = `${siteUrl}/artigos/fibromialgia`;
const trainingUrl = "/treinamentos/pacientes/fibromialgia";
const youtubeUrl = "https://www.youtube.com/@professorfisio";

export const metadata: Metadata = {
  title: "Fibromialgia tem cura? Sintomas, diagnóstico e tratamento",
  description:
    "Fibromialgia tem cura? Entenda os sintomas, como é feito o diagnóstico e quais estratégias podem ajudar no controle da dor e na qualidade de vida.",
  keywords: [
    "fibromialgia",
    "o que é fibromialgia",
    "sintomas da fibromialgia",
    "tratamento da fibromialgia",
    "diagnóstico da fibromialgia",
    "fibromialgia tem cura",
    "dor no corpo todo",
    "dor crônica",
    "sensibilização central",
    "dor nociplástica",
    "fisioterapia para fibromialgia",
    "exercícios para fibromialgia",
    "qualidade de vida na fibromialgia",
    "síndrome da fibromialgia",
  ],
  alternates: {
    canonical: "/artigos/fibromialgia",
  },
  openGraph: {
    title: "Fibromialgia tem cura? Sintomas, diagnóstico e tratamento",
    description:
      "A fibromialgia é crônica, mas isso não significa viver sem perspectiva. Entenda sintomas, diagnóstico e possibilidades de tratamento.",
    url: articleUrl,
    siteName: "Dr. Frank Eduardo",
    locale: "pt_BR",
    type: "article",
    publishedTime: "2026-08-03T12:00:00-03:00",
    modifiedTime: "2026-08-03T12:00:00-03:00",
    authors: [siteUrl],
    section: "Fibromialgia",
    tags: [
      "fibromialgia",
      "dor crônica",
      "dor generalizada",
      "fisioterapia",
      "exercício físico",
      "qualidade de vida",
    ],
    images: [
      {
        url: "/fibromialgia-capa.png",
        width: 1200,
        height: 1200,
        alt: "Fibromialgia: informação, tratamento e qualidade de vida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibromialgia tem cura? Sintomas, diagnóstico e tratamento",
    description:
      "Entenda a fibromialgia, seus principais sintomas, como é feito o diagnóstico e quais estratégias fazem parte do tratamento.",
    images: ["/fibromialgia-capa.png"],
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
  { id: "o-que-e", label: "O que é fibromialgia?" },
  { id: "sintomas", label: "Quais são os sintomas?" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "tem-cura", label: "Fibromialgia tem cura?" },
  { id: "tratamento", label: "Qual é o tratamento?" },
  { id: "exercicios", label: "Exercícios para fibromialgia" },
  { id: "fisioterapia", label: "O papel da fisioterapia" },
  { id: "sono-estresse", label: "Sono, estresse e saúde emocional" },
  { id: "informacao", label: "O papel da informação" },
];

const faqItems = [
  {
    question: "Fibromialgia tem cura?",
    answer:
      "Até o momento, não existe uma cura definitiva reconhecida para a fibromialgia. Isso, porém, não significa que os sintomas permaneçam sempre intensos. Com acompanhamento adequado e estratégias individualizadas, muitas pessoas conseguem reduzir a dor, melhorar a função e recuperar qualidade de vida.",
  },
  {
    question: "Existe exame específico para confirmar fibromialgia?",
    answer:
      "Não existe um exame de sangue, radiografia, tomografia ou ressonância que, isoladamente, confirme a fibromialgia. O diagnóstico é clínico e considera a história, a distribuição da dor, a duração dos sintomas, manifestações associadas e a avaliação de outras condições quando necessário.",
  },
  {
    question: "Exercício físico é indicado para quem tem fibromialgia?",
    answer:
      "Em geral, sim. Exercícios aeróbicos, fortalecimento e outras formas de atividade física adaptada fazem parte das estratégias com melhor suporte para o manejo da fibromialgia. A intensidade e a progressão devem respeitar a condição e a tolerância de cada pessoa.",
  },
  {
    question: "A fisioterapia pode ajudar na fibromialgia?",
    answer:
      "Sim. A fisioterapia pode contribuir com orientação, exercícios terapêuticos, progressão de atividade, melhora da mobilidade e estratégias para reduzir o impacto da dor no cotidiano. Recursos passivos podem ser usados em alguns casos como complemento, mas não substituem uma abordagem ativa e individualizada.",
  },
];

export default function FibromialgiaArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline:
      "Fibromialgia: uma doença sem saída? Descubra por que a resposta é não",
    description:
      "Entenda o que é fibromialgia, seus principais sintomas, como é feito o diagnóstico e quais estratégias fazem parte do tratamento.",
    url: articleUrl,
    inLanguage: "pt-BR",
    datePublished: "2026-08-03",
    dateModified: "2026-08-03",
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
    image: `${siteUrl}/fibromialgia-capa.png`,
    about: {
      "@type": "MedicalCondition",
      name: "Fibromialgia",
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
        name: "Fibromialgia",
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
              <strong>Fibromialgia</strong>
            </nav>

            <div className={styles.articleCategory}>Fibromialgia</div>

            <h1>
              Fibromialgia: uma doença sem saída? Descubra por que a resposta é
              não.
            </h1>

            <p className={styles.articleLead}>
              Receber o diagnóstico de fibromialgia pode gerar medo e muitas
              dúvidas. A condição é crônica, mas isso não significa viver sem
              perspectiva: existem estratégias capazes de reduzir o impacto dos
              sintomas e melhorar a qualidade de vida.
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
                  <strong>3 de agosto de 2026</strong>
                </div>

                <div>
                  <span>Tempo de leitura</span>
                  <strong>9 minutos</strong>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className={styles.coverVisual}>
            <Image
              src="/fibromialgia-capa.png"
              alt="Fibromialgia: informação, tratamento e qualidade de vida"
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
                A fibromialgia ainda é cercada por dúvidas, preconceitos e
                informações desencontradas. Muitas pessoas passam anos
                convivendo com dor em diferentes regiões do corpo, fadiga,
                alterações do sono e dificuldade para explicar o que sentem até
                finalmente receberem um diagnóstico.
              </p>

              <p>
                Depois disso, surge outra dúvida frequente:{" "}
                <strong>fibromialgia tem cura?</strong> Para algumas pessoas, a
                ausência de uma cura definitiva é interpretada como ausência de
                possibilidades. São coisas diferentes. A fibromialgia pode ser
                manejada, e muitas pessoas conseguem reduzir significativamente
                o impacto dos sintomas quando recebem orientação adequada e
                participam ativamente do tratamento.
              </p>
            </section>

            <section id="o-que-e">
              <h2>O que é fibromialgia?</h2>

              <p>
                A fibromialgia é uma condição crônica caracterizada
                principalmente por dor generalizada, frequentemente acompanhada
                de fadiga, sono não reparador, alterações cognitivas e outros
                sintomas.
              </p>

              <p>
                Atualmente, a compreensão da fibromialgia envolve alterações na
                forma como o sistema nervoso processa e modula os sinais
                relacionados à dor. Conceitos como sensibilização central e dor
                nociplástica ajudam a explicar parte desse fenômeno, mas não
                significam que exista uma única causa para todos os pacientes.
              </p>

              <p>
                Fatores biológicos, genéticos, psicológicos, ambientais, sono,
                atividade física, experiências de vida e condições associadas
                podem influenciar a intensidade dos sintomas de maneiras
                diferentes em cada pessoa.
              </p>

              <div className={styles.definitionBox}>
                <span>Em termos simples</span>
                <p>
                  A dor da fibromialgia é real. O problema não é um “desgaste
                  generalizado” dos músculos ou das articulações, mas uma
                  condição complexa em que o sistema de dor pode se tornar mais
                  sensível e produzir sintomas persistentes.
                </p>
              </div>
            </section>

            <section id="sintomas">
              <h2>Quais são os sintomas da fibromialgia?</h2>

              <p>
                A dor é o sintoma mais conhecido, mas está longe de ser o único.
                A apresentação varia bastante de uma pessoa para outra.
              </p>

              <ul>
                <li>Dor em diferentes regiões do corpo por meses;</li>
                <li>Sensibilidade aumentada ao toque ou à pressão;</li>
                <li>Fadiga persistente;</li>
                <li>Sono não reparador;</li>
                <li>Rigidez, especialmente ao acordar;</li>
                <li>
                  Dificuldade de concentração e raciocínio, muitas vezes chamada
                  de “fibro fog”;
                </li>
                <li>Dificuldades de memória;</li>
                <li>Dor de cabeça ou enxaqueca em algumas pessoas;</li>
                <li>Alterações de humor, ansiedade ou sintomas depressivos;</li>
                <li>
                  Sintomas gastrointestinais, incluindo síndrome do intestino
                  irritável em alguns pacientes;
                </li>
                <li>Formigamentos e outras alterações sensitivas.</li>
              </ul>

              <p>
                É justamente essa combinação de sintomas que torna a
                fibromialgia tão individual. Duas pessoas com o mesmo
                diagnóstico podem apresentar necessidades bastante diferentes.
              </p>
            </section>

            <section id="diagnostico">
              <h2>Como é feito o diagnóstico da fibromialgia?</h2>

              <p>
                Não existe um exame de sangue, radiografia, tomografia ou
                ressonância magnética capaz de, isoladamente, confirmar a
                fibromialgia.
              </p>

              <p>
                O diagnóstico é clínico. Ele considera a história do paciente, a
                distribuição e duração da dor, a intensidade de sintomas como
                fadiga e sono não reparador e os achados da avaliação.
              </p>

              <p>
                Exames complementares podem ser utilizados quando a história ou
                o exame clínico levantam a possibilidade de outras condições
                que precisam ser investigadas. Isso é diferente de dizer que a
                fibromialgia só pode ser diagnosticada depois de “excluir tudo”.
              </p>

              <div className={styles.warningBox}>
                <strong>Importante</strong>
                <p>
                  Dor generalizada pode ter diferentes causas. O diagnóstico não
                  deve ser feito apenas com base em uma lista de sintomas
                  encontrada na internet.
                </p>
              </div>
            </section>

            <section id="tem-cura">
              <h2>Fibromialgia tem cura?</h2>

              <p>
                Até o momento, não existe uma cura definitiva reconhecida para a
                fibromialgia. Mas essa resposta precisa ser interpretada com
                cuidado.
              </p>

              <p>
                Uma condição ser crônica não significa que os sintomas terão
                sempre a mesma intensidade ou que nada possa ser feito. O
                objetivo do tratamento é reduzir o impacto da dor, melhorar o
                sono, recuperar função, ampliar tolerância às atividades e
                devolver mais autonomia para a vida cotidiana.
              </p>

              <p>
                Existem pessoas que passam a conviver com sintomas muito mais
                leves, retomam atividades que haviam abandonado e constroem uma
                rotina com muito mais qualidade de vida. A resposta é
                individual, e não existe uma fórmula única aplicável a todos.
              </p>
            </section>

            <section id="tratamento">
              <h2>Qual é o melhor tratamento para fibromialgia?</h2>

              <p>
                Não existe um único tratamento considerado ideal para todas as
                pessoas. A fibromialgia costuma exigir uma abordagem
                individualizada e, muitas vezes, multidisciplinar.
              </p>

              <h3>Educação sobre a condição</h3>

              <p>
                Compreender o que está acontecendo pode reduzir medo,
                catastrofização e comportamentos de proteção excessiva.
                Informação de qualidade também ajuda o paciente a participar
                melhor das decisões sobre o próprio cuidado.
              </p>

              <h3>Atividade física e exercício</h3>

              <p>
                O exercício físico é uma das estratégias mais importantes no
                manejo da fibromialgia. A progressão precisa respeitar a
                tolerância individual e, em muitos casos, começar em níveis
                menores do que a pessoa gostaria.
              </p>

              <h3>Qualidade do sono</h3>

              <p>
                Sono e dor influenciam um ao outro. Quando o sono é ruim, a
                percepção dolorosa pode aumentar; quando a dor está intensa,
                dormir também pode se tornar mais difícil. Identificar e tratar
                problemas relacionados ao sono faz parte do cuidado.
              </p>

              <h3>Saúde emocional e manejo do estresse</h3>

              <p>
                Ansiedade e estresse não são explicações simplistas para a
                fibromialgia, mas podem modular a intensidade dos sintomas.
                Psicoterapia e outras estratégias de manejo emocional podem ser
                úteis quando indicadas.
              </p>

              <h3>Medicamentos</h3>

              <p>
                Alguns medicamentos podem ser utilizados pelo médico para
                modular dor, sono ou sintomas associados. Eles podem fazer parte
                do tratamento, mas não substituem as demais estratégias quando
                estas são necessárias.
              </p>
            </section>

            <section id="exercicios">
              <h2>Quais exercícios são indicados para fibromialgia?</h2>

              <p>
                A melhor modalidade costuma ser aquela que a pessoa consegue
                praticar com regularidade e progredir de forma segura. Não existe
                um exercício obrigatório para todas as pessoas com
                fibromialgia.
              </p>

              <p>Entre as possibilidades estão:</p>

              <ul>
                <li>Caminhada;</li>
                <li>Bicicleta;</li>
                <li>Exercícios aeróbicos de baixo impacto;</li>
                <li>Fortalecimento ou musculação adaptada;</li>
                <li>Exercícios na água;</li>
                <li>Exercícios de mobilidade;</li>
                <li>Alongamentos quando fizerem sentido para o caso.</li>
              </ul>

              <p>
                Um erro comum é tentar compensar anos de inatividade com uma
                carga elevada logo no início. Na fibromialgia, consistência,
                adaptação e progressão gradual costumam ser mais importantes do
                que intensidade.
              </p>
            </section>

            <section id="fisioterapia">
              <h2>Qual é o papel da fisioterapia na fibromialgia?</h2>

              <p>
                A fisioterapia pode ajudar a reconstruir confiança no movimento,
                recuperar capacidade física e orientar uma progressão adequada
                de exercícios e atividades.
              </p>

              <p>
                Dependendo da avaliação, podem ser trabalhados mobilidade,
                força, condicionamento, exposição gradual ao movimento,
                estratégias de autogerenciamento e educação em dor.
              </p>

              <p>
                Terapias manuais e outros recursos passivos podem ser utilizados
                em situações específicas para auxiliar no controle temporário
                dos sintomas, mas devem ser encarados como complementos quando
                o objetivo é construir resultados mais sustentáveis.
              </p>
            </section>

            <section id="sono-estresse">
              <h2>Sono, estresse e saúde emocional fazem diferença?</h2>

              <p>
                Sim. Fibromialgia não é simplesmente consequência de ansiedade
                ou estresse, mas esses fatores podem interferir na intensidade
                da dor, na fadiga e na capacidade de recuperação.
              </p>

              <p>
                Uma rotina de sono mais organizada, manejo adequado de demandas
                diárias, períodos de recuperação, suporte psicológico quando
                necessário e uma relação mais equilibrada com atividade e
                descanso podem fazer parte do tratamento.
              </p>
            </section>

            <section id="informacao">
              <h2>O papel da informação na recuperação</h2>

              <p>
                Um dos maiores desafios depois do diagnóstico é separar
                informação confiável de promessas exageradas. De um lado,
                existem mensagens de que “não há nada a fazer”. Do outro,
                aparecem métodos que prometem uma cura rápida e universal.
              </p>

              <p>
                Nenhum desses extremos ajuda. A fibromialgia exige compreensão,
                acompanhamento adequado e construção de estratégias compatíveis
                com a realidade de cada pessoa.
              </p>

              <p>
                Quanto melhor você compreende a condição, mais preparado fica
                para conversar com os profissionais que acompanham seu caso,
                reconhecer fatores que agravam os sintomas e participar
                ativamente das decisões.
              </p>
            </section>

            <aside className={styles.bookCta}>
              <div>
                <span>Treinamento para pacientes</span>
                <h2>Fibromialgia: Da Compreensão à Transformação</h2>
                <p>
                  Um treinamento educativo para ajudar você a compreender melhor
                  a fibromialgia, reduzir o medo e participar de forma mais ativa
                  do próprio tratamento.
                </p>
              </div>

              <Link href={trainingUrl}>
                Conhecer o treinamento
                <ArrowIcon />
              </Link>
            </aside>

            <section>
              <h2>Conclusão</h2>

              <p>
                A fibromialgia não é uma doença sem saída. Embora ainda não
                exista uma cura definitiva, existem caminhos para reduzir o
                impacto dos sintomas e recuperar qualidade de vida.
              </p>

              <p>
                Educação, atividade física, fisioterapia, atenção ao sono,
                manejo de fatores emocionais e acompanhamento profissional
                adequado podem fazer parte desse processo. O plano precisa ser
                individualizado e construído de acordo com as necessidades de
                cada pessoa.
              </p>

              <p>
                O primeiro passo é abandonar tanto a ideia de que “nada pode ser
                feito” quanto a busca por soluções milagrosas. Conhecimento,
                consistência e participação ativa no tratamento são ferramentas
                importantes para conviver melhor com a fibromialgia.
              </p>
            </section>

            <aside className={styles.youtubeCta}>
              <div className={styles.youtubeIcon}>▶</div>

              <div>
                <span>Continue aprendendo gratuitamente</span>
                <h2>Conteúdos sobre fibromialgia no Professor Fisio</h2>
                <p>
                  Acompanhe vídeos sobre dor, fibromialgia, coluna, exercício e
                  reabilitação em linguagem acessível.
                </p>
              </div>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir para o YouTube
                <ArrowIcon />
              </a>
            </aside>

            <section className={styles.faqSection}>
              <span className="eyebrow">Perguntas frequentes</span>
              <h2>Dúvidas sobre fibromialgia</h2>

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
                avaliação, diagnóstico, prescrição ou tratamento
                individualizado.
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
                <span>Dor e coluna</span>
                <h3>Notalgia Parestésica: sintomas e tratamento</h3>
                <p>
                  Entenda a coceira, queimação e alteração de sensibilidade na
                  região entre a coluna e a escápula.
                </p>
                <Link href="/artigos/notalgia-parestesica">
                  Ler artigo
                  <ArrowIcon />
                </Link>
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
                  As diferenças, os principais sinais e quando procurar ajuda.
                </p>
                <small>Em preparação</small>
              </article>
            </div>
          </div>
        </section>
      </article>

      {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </main>
  );
}