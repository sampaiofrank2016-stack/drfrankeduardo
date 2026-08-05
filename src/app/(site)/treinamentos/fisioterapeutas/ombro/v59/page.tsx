import type { Metadata } from "next";
import Image from "next/image";

const checkoutUrl = "https://pay.hotmart.com/H39460015D?off=lwmf2736";

export const metadata: Metadata = {
  title: "Terapia Manual Aplicada ao Ombro | Curso para Fisioterapeutas",
  description:
    "Curso online de Terapia Manual Aplicada ao Ombro com avaliação, raciocínio clínico, anatomia, biomecânica e técnicas práticas de tratamento.",
  alternates: {
    canonical: "/treinamentos/fisioterapeutas/terapia-manual-ombro",
  },
};

const benefits = [
  "Avaliar o complexo articular do ombro com mais segurança",
  "Melhorar o raciocínio clínico",
  "Escolher técnicas de tratamento com mais critério",
  "Diminuir tentativas aleatórias durante o atendimento",
  "Construir resultados clínicos mais consistentes",
  "Aumentar a percepção de valor do seu atendimento",
];

const modules = [
  ["Módulo 1 — Introdução", ["Complexo Articular do Ombro"]],
  ["Módulo 2 — Sistema Ósseo", ["Introdução", "Sistema ósseo", "Funções do sistema ósseo", "Úmero", "Escápula", "Clavícula"]],
  ["Módulo 3 — Sistema Articular", ["Introdução", "Funções da articulação", "Classificação das articulações", "Articulação esternoclavicular", "Articulação acromioclavicular", "Articulação glenoumeral", "Articulação escapulotorácica", "Espaço subacromial"]],
  ["Módulo 4 — Sistema Nervoso", ["Introdução", "Plexo braquial", "Dermátomos", "Correlações clínicas", "Raciocínio clínico"]],
  ["Módulo 5 — Sistema Vascular", ["Anatomia e relações clínicas do sistema vascular"]],
  ["Módulo 6 — Sistema Muscular", ["Serrátil anterior", "Trapézio", "Elevador da escápula", "Romboides", "Grande dorsal", "Peitoral maior", "Peitoral menor", "Subclávio", "Deltóide", "Supraespinhal", "Infraespinhal", "Redondo menor", "Redondo maior", "Subescapular", "Manguito rotador"]],
  ["Módulo 7 — Biomecânica", ["Introdução", "Macrofisiologia", "Microfisiologia", "Movimentos globais do ombro", "Elevação e depressão da escápula", "Abdução e adução da escápula", "Báscula medial e lateral da escápula", "Flexão e extensão", "Abdução e adução", "Rotação externa e interna", "Abdução e adução horizontal", "Circundução"]],
  ["Módulo 8 — Técnicas de Tratamento da Clavícula", ["Testes de mobilidade e avaliação acromioclavicular", "Mobilização para disfunções anterior e posterior da acromioclavicular", "Testes de mobilidade esternoclavicular", "Mobilizações em superioridade e inferioridade", "Avaliação de rotação anterior e posterior da clavícula", "Técnicas específicas para correção das disfunções encontradas"]],
  ["Módulo 9 — Técnicas de Tratamento da Escápula", ["Teste de assistência escapular", "Teste de apoio escapular", "Avaliação da escápula", "Técnicas de mobilização da escápula"]],
  ["Módulo 10 — Técnicas de Tratamento do Úmero", ["Descrição e palpação estática", "Avaliação das disfunções em superioridade e inferioridade", "Avaliação das disfunções em anterioridade e posterioridade", "Testes de mobilidade", "Mobilizações específicas", "Mobilização glenoumeral"]],
  ["Módulo 11 — Técnicas de Tratamento das Disfunções Miofasciais", ["Stretching para elevador da escápula", "Stretching para trapézio", "Traços miofasciais para supraespinhal", "Stretching para infraespinhal", "Stretching para deltóide", "Inibição do subescapular", "Stretching para romboides", "Stretching para peitoral maior e menor", "Stretching para redondos", "Stretching para grande dorsal e serrátil"]],
] as const;

const testimonials = [
  ["Curso excelente com abordagem completa das estruturas e tratamento. Parabéns aos envolvidos.", "Dr. Pablo A. Ayub"],
  ["O passo a passo do curso e o raciocínio clínico exposto torna o entendimento do tema muito fácil. Tudo que um profissional da saúde pode buscar em um curso.", "Dr. Marco Antônio M. Batista"],
  ["Um curso extraordinário, super indico.", "Dr. Iria T. Wasniewski"],
  ["Curso excelente, com uma estrutura perfeita desde a anatomia até o tratamento do ombro.", "Dra. Camila Graziela Leal"],
] as const;

const faq = [
  ["Qual a carga horária do curso?", "Carga horária de 30 horas certificadas, considerando videoaulas, estudo do material e treinamento prático."],
  ["Qual o objetivo do curso?", "Desenvolver habilidades para avaliação, raciocínio clínico e aplicação de técnicas de terapia manual no complexo articular do ombro."],
  ["Quem pode realizar o curso?", "O conteúdo é destinado a profissionais e estudantes da área da saúde. A aplicação clínica deve respeitar as competências de cada conselho profissional."],
  ["Quanto tempo tenho acesso?", "O acesso é realizado pela Hotmart conforme as condições vigentes apresentadas no momento da compra."],
  ["Como funciona o certificado?", "O certificado é disponibilizado conforme os critérios de conclusão definidos dentro da plataforma do curso."],
  ["Em qual plataforma vou acessar?", "O acesso ao curso é realizado pela Hotmart."],
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
      ✓
    </span>
  );
}

function BuyButton({ label = "Quero me matricular" }: { label?: string }) {
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 text-base font-bold text-white shadow-lg shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-emerald-800"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

export default function TerapiaManualOmbroPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#0e241d] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Curso online para profissionais da saúde
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Terapia Manual Aplicada ao Ombro
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                Pare de sofrer usando &quot;choquinho&quot; nos seus pacientes,
                aprenda técnicas realmente eficazes no tratamento do complexo
                articular do ombro.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
                <span className="rounded-full border border-white/15 px-4 py-2">100% online</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Certificado</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Teoria + prática</span>
              </div>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                <BuyButton />
                <div>
                  <span className="block text-sm text-white/55">Investimento atual</span>
                  <strong className="text-3xl font-bold text-white">R$ 59,90</strong>
                </div>
              </div>
            </div>

            <div className="relative min-h-[390px] sm:min-h-[460px] lg:min-h-[520px]">
              <Image
                src="/terapia-manual-ombro-capa.png"
                alt="Curso Terapia Manual Aplicada ao Ombro"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container grid gap-6 py-10 sm:grid-cols-3">
          {[["30h", "carga horária certificada"], ["11", "módulos de conteúdo"], ["4", "bônus complementares"]].map(([value, label]) => (
            <div key={label} className="text-center sm:text-left">
              <strong className="block text-3xl font-bold text-emerald-800">{value}</strong>
              <span className="mt-1 block text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Formação completa
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Curso de capacitação para profissionais e estudantes com
              videoaulas teóricas e práticas demonstrativas.
            </h2>

            <div className="mx-auto mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A Terapia Manual é uma das ferramentas de tratamento mais
                eficientes para tratar as patologias do sistema
                musculoesquelético. Aprender a avaliar e dominar essas técnicas
                de tratamento é um grande diferencial na carreira de qualquer
                fisioterapeuta.
              </p>

              <p>
                Neste curso iremos abordar anatomia, biomecânica e técnicas de
                tratamento, com um vasto conhecimento teórico e prático para
                você aprender de vez como ter resultados efetivos no tratamento
                do complexo articular do ombro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Benefícios</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">O que você poderá desenvolver com o curso</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="font-semibold leading-6 text-slate-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center"><BuyButton /></div>
        </div>
      </section>

      <section className="bg-[#0f281f] py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Conteúdo programático</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Do fundamento à aplicação clínica</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {modules.map(([title, items]) => (
              <details key={title} className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold">{title}</summary>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-white/70">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center"><BuyButton /></div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Bônus</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Além de todo o conteúdo, você recebe mais 4 bônus.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ["Bônus 01", "Introdução à Terapia Manual"],
              ["Bônus 02", "Diagnóstico Diferencial"],
              ["Bônus 03", "Técnica para Cervical + Integração dos Sistemas"],
              ["Bônus 04", "Conteúdo complementar em dor e integração clínica"],
            ].map(([n, title]) => (
              <article key={n} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">{n}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image src="/images/frank-eduardo-sobre.jpg" alt="Dr. Frank Eduardo" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Sobre o docente</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Experiência clínica aplicada ao ensino.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Frank Eduardo é fisioterapeuta, com atuação em terapia manual, osteopatia e quiropraxia. Sua experiência clínica é a base para transformar conceitos técnicos em raciocínio aplicável ao atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0f281f] py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Prova social</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">O que alunos já disseram sobre o curso</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map(([quote, author]) => (
              <blockquote key={author} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
                <p className="text-lg leading-8 text-white/80">“{quote}”</p>
                <footer className="mt-5 font-bold text-emerald-200">{author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 text-center"><BuyButton /></div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[12px] border-amber-400 bg-slate-950 text-center text-white shadow-xl">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.12em] text-amber-300">Garantia</span>
              <strong className="mt-1 block text-4xl">7 dias</strong>
              <span className="mt-1 block text-xs uppercase">Risco zero</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Compra protegida</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Você tem 7 dias para conhecer o curso.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Caso o conteúdo não corresponda às suas expectativas, você poderá solicitar o reembolso dentro do prazo de garantia aplicável à compra realizada pela plataforma.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Dúvidas frequentes</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Antes de se matricular</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none font-bold text-slate-900">{q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e241d] py-20 text-white">
        <div className="container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Terapia Manual Aplicada ao Ombro</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Desenvolva uma abordagem mais organizada para avaliar e tratar o ombro.
          </h2>
          <div className="mt-8"><BuyButton label="Quero acessar o curso" /></div>
          <p className="mt-8 text-xs leading-6 text-white/45">
            A aplicação de técnicas e recursos depende das resoluções, competências e autorizações de cada conselho profissional. Em caso de dúvida, consulte o seu conselho de classe.
          </p>
        </div>
      </section>
    </main>
  );
}