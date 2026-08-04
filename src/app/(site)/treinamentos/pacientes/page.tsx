import type { Metadata } from "next";
import TrainingCatalogPage, {
  type TrainingProduct,
} from "@/components/training-catalog-page";

export const metadata: Metadata = {
  title: "Treinamentos para pacientes",
  description:
    "Treinamentos, livros e materiais educativos para ajudar pacientes a compreender sintomas, tratamentos e possibilidades de cuidado.",
};

const products: TrainingProduct[] = [
  {
    category: "Dor crônica e qualidade de vida",
    title: "Programa Fibromialgia",
    description:
      "Uma jornada educativa para compreender a fibromialgia, reconhecer fatores que influenciam os sintomas e construir uma relação mais segura com o próprio corpo.",
    format: "Treinamento online",
    access: "Imediato",
    href: "/treinamentos/pacientes/fibromialgia",
    status: "available",
    featured: true,
    buttonLabel: "Conhecer treinamento",
    highlights: [
      "Compreensão da dor",
      "Orientações para o cotidiano",
      "Linguagem acessível",
      "Aulas no seu ritmo",
    ],
  },

  {
    category: "Livro digital",
    title: "Porquê Depois dos “Enta”",
    description:
      "Uma leitura sobre as mudanças que aparecem depois dos 40 e como hábitos, escolhas e sobrecargas acumuladas ao longo da vida podem influenciar nossa saúde.",
    format: "Livro digital",
    access: "Imediato",
    href: "/livros/depois-dos-enta",
    status: "available",
    buttonLabel: "Conhecer o livro",
    highlights: [
      "Saúde depois dos 40",
      "Hábitos e qualidade de vida",
      "Linguagem acessível",
      "Leitura no seu ritmo",
    ],
  },

  {
    category: "Guia educativo",
    title: "Fibromialgia, Ansiedade e Depressão",
    description:
      "Um kit educativo digital para compreender a relação entre dor crônica, saúde emocional e bem-estar, com ebook, Chek List e aula bônus.",
    format: "Ebook + bônus",
    access: "Imediato",
    href: "/treinamentos/pacientes/fibromialgia/guia",
    status: "available",
    buttonLabel: "Conhecer o guia",
    highlights: [
      "Ebook",
      "Chek List de bem-estar",
      "Aula bônus O SISTEMA",
      "Acesso imediato",
    ],
  },

  {
    category: "Guia educativo",
    title: "7 Passos para Aliviar a Dor Lombar",
    description:
      "Um guia prático para compreender melhor a dor lombar e conhecer exercícios, estratégias de autocuidado e medidas de prevenção para o dia a dia.",
    format: "Ebook digital",
    access: "Imediato",
    href: "/treinamentos/pacientes/dor-lombar/guia",
    status: "available",
    buttonLabel: "Conhecer o guia",
    highlights: [
      "Guia com 7 capítulos",
      "Exercícios terapêuticos",
      "Estratégias de autocuidado",
      "Prevenção da dor lombar",
    ],
  },

  {
    category: "Coluna vertebral",
    title: "Hérnia de Disco Sem Medo",
    description:
      "Um treinamento educativo para compreender a hérnia de disco, interpretar melhor exames, conhecer os tratamentos e recuperar confiança para se movimentar.",
    format: "Treinamento online",
    access: "Em preparação",
    href: "/treinamentos/pacientes/hernia-de-disco",
    status: "soon",
    buttonLabel: "Entrar na lista de espera",
    highlights: [
      "Compreensão do diagnóstico",
      "Exames sem alarmismo",
      "Tratamentos e possibilidades",
      "Movimento com mais confiança",
    ],
  },

  {
    category: "Dor no ombro",
    title: "Protocolo para Dor no Ombro",
    description:
      "Um treinamento educativo e prático para compreender melhor a dor no ombro, recuperar confiança no movimento e conhecer estratégias de cuidado.",
    format: "Treinamento online",
    access: "Em preparação",
    href: "/treinamentos/pacientes/dor-no-ombro",
    status: "soon",
    buttonLabel: "Entrar na lista de espera",
    highlights: [
      "Compreensão da dor",
      "Movimento e função",
      "Exercícios e estratégias",
      "Orientação para o cotidiano",
    ],
  },

  {
    category: "Dor cervical",
    title: "Cuidados com a coluna cervical",
    description:
      "Uma jornada para compreender dores cervicais, tensão muscular e fatores relacionados ao cotidiano.",
    format: "Treinamento online",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },

  {
    category: "Articulação temporomandibular",
    title: "Dor na ATM e tensão facial",
    description:
      "Informações sobre tensão mandibular, bruxismo, dor de cabeça e desconfortos cervicais.",
    format: "Treinamento online",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },
];

const benefits = [
  {
    number: "01",
    title: "Mais clareza",
    description:
      "Entenda melhor seus sintomas e participe das decisões relacionadas ao seu cuidado.",
  },
  {
    number: "02",
    title: "Menos medo",
    description:
      "Informação confiável ajuda a reduzir interpretações alarmistas e inseguranças desnecessárias.",
  },
  {
    number: "03",
    title: "Mais autonomia",
    description:
      "Aprenda caminhos práticos para cuidar da saúde com responsabilidade no cotidiano.",
  },
];

export default function PatientTrainingsPage() {
  return (
    <TrainingCatalogPage
      audienceLabel="Para pacientes"
      title="Conhecimento para você"
      highlightedTitle="cuidar melhor da sua saúde."
      description="Treinamentos, livros e materiais educativos criados para ajudar você a compreender sintomas, tratamentos e possibilidades de cuidado sem promessas milagrosas ou informações alarmistas."
      primaryActionLabel="Ver conteúdos disponíveis"
      primaryActionHref="#catalogo"
      secondaryActionLabel="Conhecer o consultório"
      secondaryActionHref="/consultorio"
      productsTitle="Informação para transformar sua relação com a saúde."
      productsDescription="Escolha entre treinamentos, livros e guias educativos ou entre para a lista de espera dos próximos conteúdos."
      products={products}
      benefits={benefits}
      finalTitle="Cuidar melhor começa por compreender melhor."
      finalDescription="Escolha um conteúdo, avance no seu ritmo e transforme informação em atitudes mais conscientes."
    />
  );
}