import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageSchema from "@/components/schema/PageSchema";

export const metadata: Metadata = {
  title: "FisioClinic | Sistema para Consultórios de Fisioterapia",
  description:
    "Organize agenda, prontuário, avaliações, evoluções clínicas, documentos, financeiro e relacionamento com pacientes. Teste grátis por 14 dias.",
  alternates: {
    canonical: "/tecnologia/fisioclinic",
  },
  openGraph: {
    title: "FisioClinic | Sistema para Fisioterapeutas",
    description:
      "Um sistema simples para organizar seu consultório, acompanhar pacientes e ter mais controle sobre sua rotina profissional.",
    url: "/tecnologia/fisioclinic",
    type: "website",
    locale: "pt_BR",
  },
};

const cadastroUrl = "https://fisioclinic-delta.vercel.app/cadastro";

const resources = [
  {
    title: "Cadastro de pacientes",
    description:
      "Mantenha os dados dos seus pacientes organizados e acessíveis em um único ambiente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2.5-7 6-7s6 3 6 7" />
        <path d="M17 8h4" />
        <path d="M19 6v4" />
      </svg>
    ),
  },
  {
    title: "Prontuário eletrônico",
    description:
      "Registre informações clínicas com mais clareza, segurança e organização.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3.5h6V7H9z" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Avaliações fisioterapêuticas",
    description:
      "Organize avaliações, registros e informações relevantes para o atendimento.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M8 17h3" />
      </svg>
    ),
  },
  {
    title: "Evoluções clínicas",
    description:
      "Acompanhe a evolução dos pacientes ao longo do tratamento de forma estruturada.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 18 9 13l3 3 7-8" />
        <path d="M15 8h4v4" />
      </svg>
    ),
  },
  {
    title: "Agenda semanal",
    description:
      "Visualize seus horários, atendimentos e compromissos em uma agenda simples.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M3 10h18" />
        <path d="M8 14h3" />
      </svg>
    ),
  },
  {
    title: "Controle financeiro",
    description:
      "Acompanhe entradas, saídas, saldo, ticket médio e resultados do consultório.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19V3" />
      </svg>
    ),
  },
  {
    title: "Documentos",
    description:
      "Centralize documentos importantes e reduza a dependência de arquivos espalhados.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h5" />
      </svg>
    ),
  },
  {
    title: "Relacionamento",
    description:
      "Mantenha o acompanhamento dos pacientes mais organizado e profissional.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 5h16v12H8l-4 4z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
];

const problems = [
  "Fichas de papel difíceis de encontrar",
  "Informações espalhadas em vários lugares",
  "Agenda sem visão clara da semana",
  "Financeiro controlado por anotações",
  "Documentos salvos em pastas diferentes",
  "Tempo perdido com tarefas repetitivas",
];

const audiences = [
  {
    title: "Fisioterapeutas autônomos",
    description:
      "Para quem atende sozinho e precisa de organização sem usar um sistema complexo.",
  },
  {
    title: "Consultórios individuais",
    description:
      "Para profissionais que desejam centralizar a rotina clínica e administrativa.",
  },
  {
    title: "Profissionais recém-formados",
    description:
      "Para começar a carreira com uma estrutura mais organizada e profissional.",
  },
  {
    title: "Pequenas clínicas",
    description:
      "Para operações enxutas que precisam acompanhar pacientes, agenda e financeiro.",
  },
];

const faq = [
  {
    question: "O FisioClinic é gratuito?",
    answer:
      "Você pode utilizar o sistema gratuitamente durante 14 dias. Depois desse período, a assinatura custa R$ 7,90 por mês.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não. O FisioClinic funciona online e pode ser acessado pelo navegador, sem necessidade de instalação.",
  },
  {
    question: "O sistema é indicado para fisioterapeutas autônomos?",
    answer:
      "Sim. O FisioClinic foi pensado especialmente para profissionais autônomos, consultórios individuais e pequenas clínicas.",
  },
  {
    question: "Posso organizar meus pacientes e evoluções clínicas?",
    answer:
      "Sim. O sistema permite cadastrar pacientes, registrar avaliações, acompanhar evoluções clínicas e manter as informações organizadas.",
  },
  {
    question: "O FisioClinic possui controle financeiro?",
    answer:
      "Sim. Você pode acompanhar entradas, saídas, saldo, ticket médio e outros indicadores da rotina financeira.",
  },
  {
    question: "Existe fidelidade?",
    answer:
      "Não. A proposta é oferecer uma assinatura simples, acessível e sem complicação.",
  },
];

export default function FisioClinicPage() {
  return (
    <>
      <PageSchema
        title="FisioClinic | Sistema para Consultórios de Fisioterapia"
        description="Organize agenda, prontuário, avaliações, evoluções clínicas, documentos, financeiro e relacionamento com pacientes."
        path="/tecnologia/fisioclinic"
        breadcrumb={[
          { name: "Início", url: "/" },
          { name: "Tecnologia", url: "/tecnologia" },
          {
            name: "FisioClinic",
            url: "/tecnologia/fisioclinic",
          },
        ]}
      />

      <main className="min-h-screen bg-white text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-slate-950"
            >
              Dr. Frank Eduardo
            </Link>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex"
            >
              <Link href="/" className="transition hover:text-blue-700">
                Início
              </Link>

              <Link href="/sobre" className="transition hover:text-blue-700">
                Sobre
              </Link>

              <Link
                href="/consultorio"
                className="transition hover:text-blue-700"
              >
                Consultório
              </Link>

              <Link
                href="/treinamentos"
                className="transition hover:text-blue-700"
              >
                Treinamentos
              </Link>

              <Link
                href="/tecnologia"
                className="font-semibold text-blue-700"
              >
                Tecnologia
              </Link>
            </nav>

            <a
              href={cadastroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Testar gratuitamente
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 opacity-50"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.55), transparent 34%), radial-gradient(circle at 90% 75%, rgba(14,165,233,0.3), transparent 35%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
                Sistema para fisioterapeutas
              </span>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Organize seu consultório. Atenda melhor. Fature com mais
                controle.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Agenda, prontuário eletrônico, avaliações, evoluções clínicas,
                documentos, financeiro e relacionamento com pacientes em um
                sistema simples, criado para fisioterapeutas.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={cadastroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
                >
                  Começar gratuitamente
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>

                <a
                  href="#recursos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Conhecer os recursos
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  14 dias grátis
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Apenas R$ 7,90/mês
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Sem instalação
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-10 rounded-full bg-blue-600/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-2 shadow-2xl shadow-blue-950/60">
                <Image
                  src="/images/fisioclinic/dashboard.png"
                  alt="Dashboard do FisioClinic mostrando visão geral do consultório"
                  width={1400}
                  height={900}
                  priority
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center sm:grid-cols-3 lg:px-8">
            <div>
              <strong className="text-2xl font-bold text-blue-700">
                14 dias
              </strong>
              <p className="mt-1 text-sm text-slate-500">para testar grátis</p>
            </div>

            <div className="border-slate-200 sm:border-x">
              <strong className="text-2xl font-bold text-blue-700">
                R$ 7,90
              </strong>
              <p className="mt-1 text-sm text-slate-500">por mês</p>
            </div>

            <div>
              <strong className="text-2xl font-bold text-blue-700">
                100% online
              </strong>
              <p className="mt-1 text-sm text-slate-500">
                acesso sem instalação
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Chega de desorganização
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Seu consultório cresce, mas a organização não acompanha?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Quando pacientes, agenda, prontuários e financeiro ficam
                separados, tarefas simples começam a consumir tempo demais.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12" />
                      <path d="M18 6 6 18" />
                    </svg>
                  </span>

                  <span className="font-medium leading-6 text-slate-700">
                    {problem}
                  </span>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-950 px-7 py-10 text-center shadow-xl sm:px-12">
              <p className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                O FisioClinic reúne sua rotina clínica e administrativa em um
                único ambiente.
              </p>
            </div>
          </div>
        </section>

        <section id="recursos" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Tudo em um só lugar
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Recursos para organizar sua rotina profissional
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Menos tempo procurando informações. Mais tempo atendendo seus
                pacientes e acompanhando seu consultório.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <article
                  key={resource.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    {resource.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-slate-950 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Visão geral
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Acompanhe seu consultório desde o primeiro acesso.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                O painel inicial reúne informações importantes para que você
                tenha uma visão mais clara da sua rotina, dos seus pacientes e
                dos resultados do consultório.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Resumo das informações principais",
                  "Acesso rápido aos recursos",
                  "Visualização simples e objetiva",
                  "Rotina clínica mais organizada",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
                src="/images/fisioclinic/dashboard.png"
                alt="Painel principal do FisioClinic"
                width={1400}
                height={900}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div className="order-2 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xl lg:order-1">
              <Image
                src="/images/fisioclinic/agenda.png"
                alt="Agenda semanal do FisioClinic"
                width={1400}
                height={900}
                className="h-auto w-full rounded-2xl border border-slate-200"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Agenda
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Visualize sua semana com mais clareza.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Organize horários e atendimentos sem depender de agendas de
                papel, mensagens antigas ou anotações espalhadas.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Visão semanal dos atendimentos",
                  "Organização dos horários",
                  "Acesso rápido às informações",
                  "Mais praticidade na rotina",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Financeiro
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Entenda melhor os resultados do seu consultório.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Acompanhe entradas, saídas e indicadores financeiros sem
                depender de planilhas difíceis ou cálculos feitos manualmente.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Entradas",
                  "Saídas",
                  "Saldo",
                  "Ticket médio",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
              <Image
                src="/images/fisioclinic/financeiro.png"
                alt="Controle financeiro do FisioClinic"
                width={1400}
                height={900}
                className="h-auto w-full rounded-2xl border border-slate-200"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Para quem é
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Um sistema pensado para uma rotina clínica mais simples.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <article
                  key={audience.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                    ✓
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {audience.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {audience.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Um investimento acessível
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Organize seu consultório por menos do que você imagina.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Comece sem pagar nada, conheça os recursos e decida depois do
                período gratuito.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Acesso aos recursos do sistema",
                  "Uso online, sem instalação",
                  "14 dias para testar gratuitamente",
                  "Assinatura simples e acessível",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-white p-8 text-center shadow-xl sm:p-10">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                14 dias grátis
              </span>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Depois do período gratuito
              </p>

              <div className="mt-3 flex items-end justify-center gap-2">
                <span className="pb-2 text-xl font-semibold text-slate-600">
                  R$
                </span>
                <strong className="text-6xl font-bold tracking-tight text-slate-950">
                  7,90
                </strong>
                <span className="pb-2 text-slate-500">/mês</span>
              </div>

              <a
                href={cadastroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                Criar conta gratuita
              </a>

              <p className="mt-4 text-sm text-slate-500">
                Sem instalação e sem complicação.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Dúvidas frequentes
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Perguntas sobre o FisioClinic
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                    {item.question}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pr-10 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              Comece agora
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mais organização para o consultório. Mais tempo para seus
              pacientes.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Crie sua conta e conheça o FisioClinic gratuitamente durante 14
              dias.
            </p>

            <a
              href={cadastroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Testar gratuitamente
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>

            <p className="mt-4 text-sm text-blue-200">
              Depois, apenas R$ 7,90 por mês.
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <strong className="text-base text-white">
                Dr. Frank Eduardo
              </strong>
              <p className="mt-1">
                Educação, saúde, atendimento e tecnologia.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link href="/" className="transition hover:text-white">
                Início
              </Link>

              <Link href="/sobre" className="transition hover:text-white">
                Sobre
              </Link>

              <Link href="/consultorio" className="transition hover:text-white">
                Consultório
              </Link>

              <Link
                href="/treinamentos"
                className="transition hover:text-white"
              >
                Treinamentos
              </Link>

              <Link href="/tecnologia" className="transition hover:text-white">
                Tecnologia
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}