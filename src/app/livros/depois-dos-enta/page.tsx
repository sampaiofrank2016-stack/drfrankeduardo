import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CHECKOUT_URL = "https://pay.hotmart.com/U103436037K";

export const metadata: Metadata = {
  title: "Depois dos Enta | Por que seu corpo começou a doer?",
  description:
    "Um livro para compreender por que o corpo muda depois dos 40 e como hábitos, sobrecargas e escolhas diárias influenciam a saúde ao longo do tempo.",
  keywords: [
    "dores depois dos 40",
    "dor depois dos quarenta",
    "envelhecimento saudável",
    "livro sobre dores",
    "saúde depois dos 40",
    "qualidade de vida",
  ],
  alternates: {
    canonical: "/livros/depois-dos-enta",
  },
  openGraph: {
    title: "Depois dos Enta",
    description:
      "Por que seu corpo começou a doer — e o que ainda pode ser feito para mudar essa história.",
    url: "/livros/depois-dos-enta",
    type: "website",
    images: [
      {
        url: "/images/depois-dos-enta-capa.png",
        width: 1200,
        height: 1200,
        alt: "Capa do livro Depois dos Enta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Depois dos Enta",
    description:
      "Por que seu corpo começou a doer — e o que ainda pode ser feito para mudar essa história.",
    images: ["/images/depois-dos-enta-capa.png"],
  },
};

const identificationItems = [
  "Parece que tudo começou depois dos quarenta.",
  "Antes eu fazia isso sem problema.",
  "Minha coluna nunca mais foi a mesma.",
  "Meu joelho começou a reclamar.",
  "Achei que sentir dor fazia parte da idade.",
  "Hoje meu corpo não responde como antes.",
];

const discoveries = [
  {
    number: "01",
    title: "Por que o corpo muda com o tempo",
    description:
      "Compreenda como envelhecimento, rotina, sono, alimentação, estresse e movimento influenciam a forma como você se sente.",
  },
  {
    number: "02",
    title: "Como o passado aparece no presente",
    description:
      "Entenda por que pequenas escolhas repetidas por anos podem resultar em limitações, dores e perda de capacidade física.",
  },
  {
    number: "03",
    title: "O papel dos hábitos diários",
    description:
      "Perceba como sedentarismo, excesso de carga, falta de recuperação e pouca atenção ao corpo podem cobrar seu preço.",
  },
  {
    number: "04",
    title: "Quando a dor merece atenção",
    description:
      "Aprenda a diferenciar sinais comuns de situações que exigem avaliação e acompanhamento profissional.",
  },
  {
    number: "05",
    title: "O que ainda pode ser mudado",
    description:
      "Descubra por que envelhecer não significa aceitar passivamente a dor, a limitação e a perda de autonomia.",
  },
  {
    number: "06",
    title: "Como construir os próximos anos",
    description:
      "Reflita sobre atitudes práticas capazes de melhorar a relação com o corpo, a saúde e o movimento.",
  },
];

const includedItems = [
  "Livro digital completo",
  "Leitura em linguagem simples e acessível",
  "Reflexões baseadas na experiência clínica",
  "Conteúdo sobre hábitos, dor e envelhecimento",
  "Acesso imediato após a compra",
  "Leitura pelo celular, tablet ou computador",
];

const audienceItems = [
  "Começou a sentir mais dores depois dos 35 ou 40 anos.",
  "Percebe que o corpo já não responde como antes.",
  "Deseja compreender melhor a origem das próprias limitações.",
  "Quer envelhecer com mais autonomia e consciência.",
  "Procura informação sem promessas milagrosas.",
  "Deseja construir hábitos melhores para os próximos anos.",
];

const notForItems = [
  "Quem procura uma fórmula de cura imediata.",
  "Quem deseja substituir avaliação profissional por um livro.",
  "Quem busca uma prescrição individualizada.",
  "Quem espera resultados sem qualquer mudança de atitude.",
];

const faqs = [
  {
    question: "O livro é apenas para pessoas acima dos 40 anos?",
    answer:
      "Não. O conteúdo conversa principalmente com quem começou a perceber mudanças depois dos 35 ou 40 anos, mas também pode ajudar pessoas mais jovens que desejam compreender como hábitos e escolhas influenciam o corpo ao longo do tempo.",
  },
  {
    question: "O conteúdo é muito técnico?",
    answer:
      "Não. O livro foi escrito em linguagem acessível, com reflexões construídas a partir de situações comuns observadas no consultório.",
  },
  {
    question: "Como receberei o acesso?",
    answer:
      "Após a confirmação do pagamento, você receberá as informações de acesso no e-mail utilizado durante a compra.",
  },
  {
    question: "Posso ler pelo celular?",
    answer:
      "Sim. O livro digital poderá ser acessado pelo celular, tablet ou computador.",
  },
  {
    question: "Este livro substitui consulta ou tratamento?",
    answer:
      "Não. O conteúdo tem finalidade educativa e não substitui avaliação, diagnóstico, prescrição ou acompanhamento individualizado.",
  },
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

function CheckoutButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function AfterFortyBookPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Depois dos Enta",
    alternateName: "Depois dos Enta: por que seu corpo começou a doer?",
    description:
      "Livro educativo sobre as mudanças do corpo ao longo do tempo e a influência de hábitos, escolhas e sobrecargas na saúde depois dos 40.",
    image:
      "https://www.frankeduardo.com.br/images/depois-dos-enta-capa.png",
    author: {
      "@type": "Person",
      name: "Frank Eduardo",
    },
    offers: {
      "@type": "Offer",
      url: CHECKOUT_URL,
      priceCurrency: "BRL",
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

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <Link href="/">Início</Link>
            <Link href="/artigos">Artigos</Link>
            <Link href="/treinamentos">Treinamentos</Link>
            <Link href="/consultorio">Consultório</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>

          <CheckoutButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-900 px-5 text-sm font-bold !text-white transition hover:-translate-y-0.5">
            Quero conhecer o livro
          </CheckoutButton>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-emerald-950 py-16 text-white md:py-24">
          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-700/25 blur-3xl" />
          <div className="absolute -bottom-44 -left-28 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />

          <div className="container relative mx-auto grid items-center gap-12 px-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-emerald-200">
                <Link href="/">Início</Link>
                <span>/</span>
                <strong>Livros</strong>
                <span>/</span>
                <strong>Depois dos Enta</strong>
              </div>

              <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-900/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">
                Livro digital
              </span>

              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.02] md:text-7xl">
                Depois dos Enta
              </h1>

              <p className="mt-5 max-w-2xl text-2xl font-semibold leading-9 text-emerald-100">
                Por que seu corpo começou a doer?
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 md:text-lg">
                Descubra como anos de hábitos, pequenas sobrecargas e escolhas
                diárias ajudaram a construir o corpo que você tem hoje — e o
                que ainda pode ser feito para mudar essa história.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CheckoutButton className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 font-bold !text-emerald-950 shadow-lg transition hover:-translate-y-0.5">
                  Quero ler agora
                  <ArrowIcon />
                </CheckoutButton>

                <a
                  href="#historia"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-bold !text-white transition hover:bg-white/10"
                >
                  Conhecer a proposta
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-emerald-100">
                {["Leitura digital", "Acesso imediato", "Linguagem acessível"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckIcon />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-10 rounded-full bg-emerald-300/15 blur-3xl" />

              <Image
                src="/images/depois-dos-enta-capa.png"
                alt="Capa do livro Depois dos Enta"
                width={1100}
                height={1500}
                priority
                className="relative h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="historia" className="py-16 md:py-24">
          <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Uma frase que se repete
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Você já disse alguma destas frases?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Há anos escuto pacientes descrevendo as mesmas sensações. A dor
                muda de lugar, mas a pergunta quase sempre é parecida:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {identificationItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-sm font-bold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-lg font-medium leading-8 text-slate-800">
                    “{item}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-20 text-white md:py-28">
          <div className="container mx-auto max-w-5xl px-5 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              A ideia central
            </span>

            <blockquote className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              “O hoje é o reflexo do passado.”
            </blockquote>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-emerald-100">
              O corpo que você tem hoje conta uma história. Movimento,
              sedentarismo, sono, alimentação, estresse, trabalho, pequenas
              lesões e anos de repetição deixaram marcas — mas a história ainda
              não terminou.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                O que você encontrará
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Uma nova forma de compreender o próprio corpo.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Mais do que explicar dores, o livro convida você a enxergar a
                relação entre passado, presente e futuro.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {discoveries.map((item, index) => (
                <article
                  key={item.number}
                  className={`rounded-3xl border p-7 ${
                    index === 0
                      ? "border-emerald-950 bg-emerald-950 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      index === 0 ? "text-emerald-300" : "text-emerald-700"
                    }`}
                  >
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

                  <p
                    className={`mt-3 leading-7 ${
                      index === 0 ? "text-emerald-100" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-emerald-950">
              <Image
                src="/images/frank-eduardo-profissional.png"
                alt="Frank Eduardo, fisioterapeuta e autor do livro Depois dos Enta"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Sobre o autor
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Há mais de 17 anos escuto praticamente a mesma frase.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Sou Frank Eduardo, fisioterapeuta, especialista em Osteopatia e
                Quiropraxia. Ao longo da prática clínica, acompanhei milhares de
                histórias marcadas por dor, limitações e dúvidas sobre o
                envelhecimento.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                “Parece que tudo começou depois dos enta...” tornou-se quase um
                bordão no consultório. Foi dessa repetição que nasceu a ideia
                deste livro.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Meu objetivo é ajudar você a compreender que o corpo não muda
                de um dia para o outro. Ele responde à história que viveu — e
                também às escolhas que você começa a fazer agora.
              </p>
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
                Uma leitura para compreender o passado e construir o futuro.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-100">
                Leia no seu ritmo, marque os trechos mais importantes e retorne
                às reflexões sempre que precisar.
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
          <div className="container mx-auto grid gap-6 px-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50/40 p-8 md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Este livro é para você que...
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Deseja compreender melhor as mudanças do corpo ao longo do
                tempo.
              </h2>

              <div className="mt-8 grid gap-4">
                {audienceItems.map((item) => (
                  <p key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <CheckIcon />
                    </span>
                    <span className="leading-7">{item}</span>
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                Este livro não foi criado para...
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Oferecer promessas rápidas ou substituir cuidado
                individualizado.
              </h2>

              <div className="mt-8 grid gap-4">
                {notForItems.map((item) => (
                  <p key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs">
                      ×
                    </span>
                    <span className="leading-7">{item}</span>
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="checkout" className="bg-slate-100 py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Comece sua leitura
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                  Talvez você não consiga voltar aos vinte anos.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Mas ainda pode compreender melhor o corpo que tem hoje e
                  construir uma relação diferente com os próximos vinte.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-emerald-700">
                        <CheckIcon />
                      </span>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center bg-emerald-950 p-8 text-white md:p-12">
                <span className="text-sm font-semibold text-emerald-200">
                  Acesso ao livro digital
                </span>

                <p className="mt-6 text-lg leading-8 text-emerald-100">
                  Defina o preço da oferta e substitua este texto pelo valor
                  final do livro.
                </p>

                <CheckoutButton className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 font-bold !text-emerald-950 transition hover:-translate-y-0.5">
                  Quero ler Depois dos Enta
                  <ArrowIcon />
                </CheckoutButton>

                <p className="mt-4 text-center text-xs leading-5 text-emerald-200">
                  Pagamento seguro e acesso pela plataforma de checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="text-sm font-bold text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong className="flex-1">{item.question}</strong>

                    <span className="text-2xl text-emerald-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pl-10 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-center text-white md:py-24">
          <div className="container mx-auto max-w-4xl px-5">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              A história ainda está sendo escrita
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Seu corpo conta a história do que você viveu.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
              E as escolhas que você faz hoje ajudam a escrever os próximos
              capítulos.
            </p>

            <CheckoutButton className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 font-bold !text-emerald-950 transition hover:-translate-y-0.5">
              Quero começar a leitura
              <ArrowIcon />
            </CheckoutButton>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-8">
          <div className="container mx-auto px-5">
            <p className="mx-auto max-w-5xl text-center text-sm leading-7 text-slate-500">
              <strong>Aviso importante:</strong> este livro possui finalidade
              educativa. O conteúdo não substitui consulta, diagnóstico,
              prescrição, tratamento ou acompanhamento individualizado
              realizado por profissional habilitado.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto flex flex-col gap-4 px-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Frank Eduardo. Todos os direitos
            reservados.
          </p>

          <p>Educação em saúde com responsabilidade e linguagem acessível.</p>
        </div>
      </footer>
    </div>
  );
}