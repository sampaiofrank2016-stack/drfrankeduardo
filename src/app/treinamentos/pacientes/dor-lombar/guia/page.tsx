import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CHECKOUT_URL = "https://pay.hotmart.com/Y84090252C";

export const metadata: Metadata = {
  title: "7 Passos para Aliviar a Dor Lombar",
  description:
    "Conheça estratégias práticas, exercícios terapêuticos e orientações educativas para compreender melhor a dor lombar e cuidar da saúde da sua coluna.",
  keywords: [
    "dor lombar",
    "aliviar dor lombar",
    "exercícios para dor lombar",
    "ebook dor lombar",
    "cuidados com a coluna",
    "coluna lombar",
  ],
  openGraph: {
    title: "7 Passos para Aliviar a Dor Lombar",
    description:
      "Um guia educativo com estratégias práticas, exercícios terapêuticos e cuidados para a saúde da coluna lombar.",
    type: "website",
  },
};

const benefits = [
  {
    number: "01",
    title: "Compreender a dor lombar",
    description:
      "Conheça fatores que podem estar relacionados ao surgimento e à persistência do desconforto na região lombar.",
  },
  {
    number: "02",
    title: "Conhecer estratégias práticas",
    description:
      "Aprenda orientações de autocuidado que podem ser incorporadas à sua rotina com mais consciência.",
  },
  {
    number: "03",
    title: "Cuidar melhor da coluna",
    description:
      "Entenda como movimento, hábitos e prevenção podem contribuir para a saúde da região lombar.",
  },
];

const chapters = [
  {
    number: "01",
    title: "Introdução",
    description:
      "Uma visão inicial sobre a dor lombar, seus impactos na rotina e a importância de compreender melhor essa condição.",
  },
  {
    number: "02",
    title: "Entendendo a dor lombar",
    description:
      "Fatores relacionados à postura, sedentarismo, excesso de peso, lesões, envelhecimento e estresse.",
  },
  {
    number: "03",
    title: "Diagnóstico e avaliação",
    description:
      "A importância da história clínica, do exame físico e da avaliação profissional individualizada.",
  },
  {
    number: "04",
    title: "Exercícios terapêuticos",
    description:
      "Alongamentos, movimentos de mobilidade e exercícios de fortalecimento apresentados de forma educativa.",
  },
  {
    number: "05",
    title: "Abordagens complementares",
    description:
      "Informações sobre recursos e estratégias que podem fazer parte de um plano de cuidado.",
  },
  {
    number: "06",
    title: "Prevenção e manutenção",
    description:
      "Hábitos relacionados à atividade física, sono, alimentação, peso corporal e qualidade de vida.",
  },
  {
    number: "07",
    title: "Aplicação das estratégias",
    description:
      "Uma recapitulação para ajudar você a transformar conhecimento em atitudes mais conscientes.",
  },
];

const includedItems = [
  "Ebook digital com 26 páginas",
  "Conteúdo dividido em 7 capítulos",
  "Exercícios terapêuticos ilustrados",
  "Orientações sobre avaliação e diagnóstico",
  "Estratégias de autocuidado",
  "Cuidados para prevenção da dor lombar",
  "Acesso digital imediato após a compra",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
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
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function LowBackPainGuidePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "7 Passos para Aliviar a Dor Lombar",
    description:
      "Ebook educativo com estratégias práticas, exercícios terapêuticos e orientações para compreender melhor a dor lombar.",
    brand: {
      "@type": "Brand",
      name: "Dr. Frank Eduardo",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "4.99",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex min-h-20 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white">
              FE
            </span>

            <span className="flex flex-col">
              <strong className="text-sm">Dr. Frank Eduardo</strong>
              <small className="text-xs text-slate-500">
                Educação em saúde
              </small>
            </span>
          </Link>

          <Link
            href="/treinamentos/pacientes"
            className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-950"
          >
            Voltar aos treinamentos
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-emerald-950 py-16 text-white md:py-24">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-800/40" />
          <div className="absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-emerald-700/30" />

          <div className="container relative mx-auto grid items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-emerald-100">
                <Link href="/">Início</Link>
                <span>/</span>
                <Link href="/treinamentos">Treinamentos</Link>
                <span>/</span>
                <Link href="/treinamentos/pacientes">Pacientes</Link>
                <span>/</span>
                <strong>Guia de dor lombar</strong>
              </div>

              <span className="mb-5 inline-flex rounded-full border border-emerald-400/40 bg-emerald-800/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">
                Guia educativo digital
              </span>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                7 Passos para Aliviar a Dor Lombar
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-emerald-100">
                Entenda por que sua coluna dói e conheça estratégias práticas
                para cuidar melhor da região lombar.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85 md:text-lg">
                Um ebook educativo com informações sobre causas da dor
                lombar, avaliação, exercícios terapêuticos, autocuidado e
                prevenção.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 font-bold !text-emerald-950 transition hover:-translate-y-0.5"
                >
                  Quero meu ebook por R$ 4,99
                  <ArrowIcon />
                </a>

                <a
                  href="#conteudo"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 px-8 font-bold text-white transition hover:bg-white/10"
                >
                  Ver o que vou aprender
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-emerald-100">
                <span>✓ Acesso imediato</span>
                <span>✓ Ebook digital</span>
                <span>✓ Leitura no seu ritmo</span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="relative">
                <div className="absolute inset-10 rounded-full bg-emerald-400/20 blur-3xl" />
                <Image
                  src="/images/ebook-7-passos-dor-lombar.png"
                  alt="Capa do ebook 7 Passos para Aliviar a Dor Lombar"
                  width={1100}
                  height={1500}
                  priority
                  className="relative h-auto w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Você se identifica?
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                A dor lombar pode gerar insegurança até nas tarefas mais simples.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Quando falta informação, é comum surgir medo de se movimentar,
                dúvidas sobre exames e incerteza sobre o que fazer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "A dor aparece ao levantar, caminhar ou permanecer muito tempo sentado.",
                "Você sente receio de realizar exercícios e piorar o desconforto.",
                "As crises melhoram por alguns dias, mas voltam com frequência.",
                "Você já fez exames, porém ainda não entende claramente a origem da dor.",
                "Não sabe quais hábitos podem ajudar ou prejudicar a região lombar.",
                "Deseja compreender melhor quando é necessário procurar atendimento.",
              ].map((item, index) => (
                <article
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-sm font-bold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="conteudo" className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  O método do guia
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                  Os 7 passos que conduzem o conteúdo.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  O material foi organizado para levar você da compreensão da dor
                  até atitudes práticas de autocuidado e prevenção.
                </p>
              </div>

              <div className="grid gap-4">
                {chapters.map((chapter) => (
                  <article
                    key={chapter.number}
                    className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-[50px_1fr]"
                  >
                    <span className="font-bold text-emerald-700">
                      {chapter.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold">{chapter.title}</h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {chapter.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Conteúdo prático
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Exercícios apresentados de maneira visual e educativa.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                O guia apresenta exemplos de alongamentos, mobilidade e
                fortalecimento, incluindo exercícios para glúteos, tronco,
                coluna, musculatura abdominal e estabilização lombar.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <strong className="text-amber-950">
                  Orientação importante
                </strong>

                <p className="mt-2 leading-7 text-amber-900">
                  Os exercícios são educativos e não substituem uma avaliação
                  individual. Dor intensa, piora dos sintomas ou limitações
                  importantes exigem orientação profissional.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Alongamentos",
                "Mobilidade",
                "Fortalecimento",
                "Estabilização",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex min-h-44 flex-col justify-between rounded-3xl p-6 ${
                    index === 0
                      ? "bg-emerald-900 text-white"
                      : "border border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="text-xl">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-white md:py-24">
          <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                O que você recebe
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Um material direto, acessível e feito para acompanhar você.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-100">
                Leia pelo celular, computador ou tablet e consulte as
                orientações sempre que precisar.
              </p>
            </div>

            <div className="grid gap-4">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <span className="text-emerald-300">
                    <CheckIcon />
                  </span>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Este guia é para você que
              </span>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Convive com episódios de dor na região lombar",
                  "Deseja compreender melhor os fatores relacionados à dor",
                  "Procura estratégias educativas para cuidar da coluna",
                  "Quer conhecer exercícios e hábitos de prevenção",
                  "Deseja participar mais ativamente do próprio cuidado",
                  "Busca informação sem promessas milagrosas",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <span className="mt-0.5 text-emerald-700">
                      <CheckIcon />
                    </span>

                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="checkout"
          className="bg-slate-100 py-16 md:py-24"
        >
          <div className="container mx-auto px-5">
            <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 md:p-12">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Comece agora
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                  Dê o primeiro passo para compreender melhor sua dor lombar.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Informação não substitui tratamento, mas pode ajudar você a
                  tomar decisões mais conscientes e buscar o cuidado
                  adequado.
                </p>
              </div>

              <div className="flex flex-col justify-center bg-emerald-950 p-8 text-white md:p-12">
                <span className="text-sm text-emerald-200">
                  Acesso ao ebook completo
                </span>

                <div className="mt-4">
                  <small className="text-emerald-100">
                    Pagamento único de
                  </small>

                  <div className="mt-1 text-5xl font-bold">R$ 4,99</div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 font-bold text-emerald-950 transition hover:-translate-y-0.5"
                >
                  Comprar e acessar agora
                  <ArrowIcon />
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-emerald-200">
                  Você será direcionado para o ambiente seguro de pagamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-72 items-center justify-center rounded-[2rem] bg-emerald-950 text-white">
              <div className="text-center">
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/30 text-2xl font-bold">
                  FE
                </span>

                <strong className="mt-5 block text-xl">
                  Dr. Frank Eduardo
                </strong>

                <small className="mt-2 block text-emerald-200">
                  Fisioterapeuta e educador em saúde
                </small>
              </div>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Por que escrevi este ebook
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Experiência clínica transformada em educação acessível.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Sou Frank Eduardo, fisioterapeuta, especialista em Osteopatia e
                Quiropraxia, com mais de 17 anos de experiência clínica no
                atendimento de pessoas com dores musculoesqueléticas.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Ao longo da prática clínica percebi que muitas pessoas convivem
                não apenas com a dor, mas também com dúvidas, medo de se
                movimentar e dificuldade para compreender o próprio quadro.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Este guia foi criado para traduzir informações importantes em
                uma linguagem clara, prática e responsável.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Perguntas frequentes
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Tire suas principais dúvidas.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                ["O que receberei após a compra?", "Você receberá o ebook digital 7 Passos para Aliviar a Dor Lombar, com 26 páginas, exercícios ilustrados e orientações de autocuidado e prevenção."],
                ["Como receberei o acesso?", "Após a confirmação do pagamento, a Hotmart enviará as informações de acesso para o e-mail utilizado na compra."],
                ["O acesso é imediato?", "Sim. Depois que o pagamento for confirmado, você poderá acessar o material digital."],
                ["Posso acessar pelo celular?", "Sim. O ebook pode ser acessado pelo celular, tablet ou computador."],
                ["Este ebook substitui consulta ou tratamento?", "Não. O conteúdo possui finalidade educativa e não substitui avaliação, diagnóstico, prescrição ou acompanhamento individualizado."],
              ].map(([question, answer], index) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="text-sm font-bold text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="flex-1">{question}</strong>
                    <span className="text-2xl text-emerald-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 pl-10 leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-center text-white md:py-24">
          <div className="container mx-auto max-w-4xl px-5">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Seu primeiro passo pode começar hoje
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Sua coluna acompanha você todos os dias.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
              Invista alguns minutos para compreender melhor a dor lombar e
              conhecer estratégias mais conscientes de cuidado.
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 font-bold !text-emerald-950 transition hover:-translate-y-0.5"
            >
              Quero acessar por R$ 4,99
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto flex flex-col gap-4 px-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Frank Eduardo. Todos os direitos
            reservados.
          </p>

          <p>
            Este conteúdo é educativo e não substitui avaliação
            individualizada.
          </p>
        </div>
      </footer>
    </div>
  );
}