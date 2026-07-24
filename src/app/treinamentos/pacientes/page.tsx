import type { Metadata } from "next";
import TrainingCatalogPage, {
  type TrainingProduct,
} from "@/components/training-catalog-page";

export const metadata: Metadata = {
  title: "Treinamentos para pacientes",
  description:
    "Programas educativos para ajudar pacientes a compreender sintomas, tratamentos e possibilidades de cuidado.",
};

const products: TrainingProduct[] = [
  {
    category: "Dor crônica e qualidade de vida",
    title: "Programa Fibromialgia",
    description:
      "Uma jornada educativa para compreender a fibromialgia, reconhecer fatores que influenciam os sintomas e construir uma relação mais segura com o próprio corpo.",
    format: "Treinamento Online",
    access: "Imediato",
    href: "/treinamentos/pacientes/fibromialgia",
    status: "available",
    featured: true,
    highlights: [
      "Compreensão da dor",
      "Orientações para o cotidiano",
      "Linguagem acessível",
      "Aulas no seu ritmo",
    ],
  },
  {
    category: "Guia educativo",
    title: "Fibromialgia, Ansiedade e Depressão",
    description: "Um kit educativo digital para compreender a relação entre dor crônica, saúde emocional e bem-estar, com ebook, Chek List e aula bônus.",
    format: "Ebook + bônus",
    access: "Imediato",
    href: "/treinamentos/pacientes/fibromialgia/guia",
    status: "available",
    highlights: [
    "Ebook",
    "Chek List de bem-estar",
    "Aula bônus O SISTEMA",
    "Acesso imediato",
    ],
  },
  {
    category: "Coluna vertebral",
    title: "Entendendo a hérnia de disco",
    description:
      "Conteúdo educativo sobre exames, sintomas, movimento e possibilidades de cuidado.",
    format: "Curso online",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },
  {
    category: "Dor cervical",
    title: "Cuidados com a coluna cervical",
    description:
      "Uma jornada para compreender dores cervicais, tensão muscular e fatores relacionados ao cotidiano.",
    format: "Curso online",
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
    format: "Curso online",
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
      description="Programas educativos criados para ajudar você a compreender sintomas, tratamentos e possibilidades de cuidado sem promessas milagrosas ou informações alarmistas."
      primaryActionLabel="Ver treinamentos disponíveis"
      primaryActionHref="#catalogo"
      secondaryActionLabel="Conhecer o consultório"
      secondaryActionHref="/consultorio"
      productsTitle="Informação para transformar sua relação com a saúde."
      productsDescription="Comece por um guia acessível ou avance para uma jornada mais completa de aprendizado."
      products={products}
      benefits={benefits}
      finalTitle="Cuidar melhor começa por compreender melhor."
      finalDescription="Escolha um conteúdo, avance no seu ritmo e transforme informação em atitudes mais conscientes."
    />
  );
}