import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageSchema from "@/components/schema/PageSchema";

export const metadata: Metadata = {
  title: "Tecnologia para Fisioterapeutas | Dr. Frank Eduardo",
  description:
    "Soluções digitais criadas para organizar consultórios, facilitar a rotina clínica e ajudar fisioterapeutas a atender melhor.",
  alternates: {
    canonical: "/tecnologia",
  },
  openGraph: {
    title: "Tecnologia para Fisioterapeutas | Dr. Frank Eduardo",
    description:
      "Conheça soluções digitais desenvolvidas para facilitar a rotina de fisioterapeutas e consultórios.",
    url: "/tecnologia",
    type: "website",
    locale: "pt_BR",
  },
};

const cadastroUrl = "https://fisioclinic-delta.vercel.app/cadastro";

const benefits = [
  {
    title: "Mais organização",
    description:
      "Centralize pacientes, prontuários, evoluções, documentos, agenda e financeiro.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    title: "Mais controle",
    description:
      "Acompanhe os dados do consultório e tome decisões com mais segurança.",
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
    title: "Mais tempo para atender",
    description:
      "Reduza tarefas repetitivas e mantenha as informações clínicas sempre acessíveis.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const features = [
  "Cadastro de pacientes",
  "Prontuário eletrônico",
  "Avaliações fisioterapêuticas",
  "Evoluções clínicas",
  "Agenda semanal",
  "Controle financeiro",
  "Documentos",
  "Relacionamento com pacientes",
];

export default function TecnologiaPage() {
  return (
    <>
      <PageSchema
        title="Tecnologia para Fisioterapeutas | Dr. Frank Eduardo"
        description="Soluções digitais criadas para organizar consultórios, facilitar a rotina clínica e ajudar fisioterapeutas a atender melhor."
        path="/tecnologia"
        type="CollectionPage"
        breadcrumb={[
          { name: "Início", url: "/" },
          { name: "Tecnologia", url: "/tecnologia" },
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

              <Link href="/tecnologia" className="font-semibold text-blue-700">
                Tecnologia
              </Link>
            </nav>

            <a
              href={cadastroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Testar FisioClinic
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.55), transparent 35%), radial-gradient(circle at 85% 70%, rgba(14,165,233,0.32), transparent 35%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
                Tecnologia aplicada à fisioterapia
              </span>

              <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Soluções digitais para uma prática profissional mais organizada.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Tecnologia criada a partir da experiência clínica para
                simplificar a rotina de fisioterapeutas, melhorar a organização
                e proporcionar mais controle sobre o consultório.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/tecnologia/fisioclinic"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                >
                  Conhecer o FisioClinic
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
                </Link>

                <a
                  href={cadastroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Começar 14 dias grátis
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                Teste gratuito por 14 dias. Depois, apenas R$ 7,90 por mês.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full bg-blue-600/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-blue-950/50">
                <Image
                  src="/images/fisioclinic/dashboard.png"
                  alt="Dashboard do sistema FisioClinic para gestão de consultórios de fisioterapia"
                  width={1280}
                  height={720}
                  priority
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    {benefit.icon}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-950">
                    {benefit.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Solução disponível
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  FisioClinic
                </h2>

                <p className="mt-2 text-lg font-medium text-blue-700">
                  Prontuário eletrônico para fisioterapeutas
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Um sistema simples para profissionais autônomos e consultórios
                  que desejam substituir fichas, planilhas e informações
                  espalhadas por uma rotina mais organizada.
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  O FisioClinic reúne os principais recursos da gestão clínica
                  em um só ambiente, permitindo que o fisioterapeuta acompanhe
                  pacientes, atendimentos e resultados financeiros com mais
                  facilidade.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
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

                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/tecnologia/fisioclinic"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
                  >
                    Ver todos os recursos
                  </Link>

                  <a
                    href={cadastroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-6 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    Criar conta grátis
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-slate-200/60 sm:p-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/images/fisioclinic/financeiro.png"
                    alt="Painel financeiro do FisioClinic com entradas, saídas, saldo e ticket médio"
                    width={1280}
                    height={720}
                    className="h-auto w-full"
                  />
                </div>

                <div className="grid gap-4 pt-5 sm:grid-cols-3">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <strong className="block text-2xl text-blue-700">
                      14 dias
                    </strong>
                    <span className="mt-1 block text-xs text-slate-500">
                      gratuitos
                    </span>
                  </div>

                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <strong className="block text-2xl text-blue-700">
                      R$ 7,90
                    </strong>
                    <span className="mt-1 block text-xs text-slate-500">
                      por mês
                    </span>
                  </div>

                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <strong className="block text-2xl text-blue-700">
                      Online
                    </strong>
                    <span className="mt-1 block text-xs text-slate-500">
                      sem instalação
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              Experimente na prática
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Organize seu consultório sem complicação.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Crie sua conta, conheça todos os recursos e use o FisioClinic
              gratuitamente durante 14 dias.
            </p>

            <a
              href={cadastroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
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

            <p className="mt-4 text-sm text-blue-200">
              Depois do período gratuito, apenas R$ 7,90 por mês.
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <strong className="text-base text-white">Dr. Frank Eduardo</strong>
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
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}