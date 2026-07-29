import type { Metadata } from "next";
import TrainingCatalogPage, {
  type TrainingProduct,
} from "@/components/training-catalog-page";

export const metadata: Metadata = {
  title: "Treinamentos para fisioterapeutas",
  description:
    "Cursos, formações e conteúdos para fisioterapeutas que desejam aprimorar sua prática clínica e desenvolver sua carreira.",
};

const products: TrainingProduct[] = [
  {
  category: "Avaliação, biomecânica e terapia manual",
  title: "Terapia Manual Aplicada ao Ombro",
  description:
    "Formação completa com mais de 130 videoaulas sobre anatomia, biomecânica, avaliação, raciocínio clínico e técnicas de terapia manual.",
  format: "Treinamento online",
  access: "12 meses",
  price: "R$ 97,00",
  href: "/treinamentos/fisioterapeutas/ombro",
  status: "available",
  featured: true,
  highlights: [
    "+130 videoaulas",
    "Certificado de 30 horas",
    "Aulas práticas",
    "11 módulos completos",
  ],
},
  
  {
    category: "Material clínico",
    title: "Guia prático de avaliação do ombro",
    description:
      "Material objetivo para apoiar estudantes e fisioterapeutas durante avaliações clínicas e estudos.",
    format: "Guia digital",
    access: "Imediato",
    price: "R$ 1,00",
    href: "/treinamentos/fisioterapeutas/guia-ombro",
    status: "available",
    highlights: [
      "Consulta rápida",
      "Organização clínica",
      "Material digital",
      "Aplicação prática",
    ],
  },
  {
    category: "Gestão profissional",
    title: "Consultório organizado e rentável",
    description:
      "Conteúdo sobre organização, processos, precificação, relacionamento e crescimento sustentável.",
    format: "Treinamento online",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },
  {
    category: "Raciocínio clínico",
    title: "Avaliação da coluna cervical",
    description:
      "Formação voltada à avaliação funcional e à construção do raciocínio clínico na coluna cervical.",
    format: "Curso online",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },
  {
    category: "Carreira",
    title: "Mentoria Consultório 10K",
    description:
      "Acompanhamento para fisioterapeutas que desejam estruturar posicionamento, captação, atendimento e gestão.",
    format: "Mentoria",
    access: "Em breve",
    href: "#",
    status: "soon",
    highlights: [],
  },
];

const benefits = [
  {
    number: "01",
    title: "Aplicação clínica",
    description:
      "Conteúdos conectados aos desafios encontrados durante avaliações e atendimentos reais.",
  },
  {
    number: "02",
    title: "Raciocínio profissional",
    description:
      "Mais do que decorar técnicas, o objetivo é compreender como organizar decisões clínicas.",
  },
  {
    number: "03",
    title: "Desenvolvimento sustentável",
    description:
      "Conhecimento técnico aliado à organização, posicionamento e evolução da carreira.",
  },
];

export default function PhysiotherapistTrainingsPage() {
  return (
    <TrainingCatalogPage
      audienceLabel="Para fisioterapeutas"
      title="Conhecimento para você"
      highlightedTitle="atender melhor e crescer."
      description="Cursos, formações e materiais para fisioterapeutas que desejam fortalecer o raciocínio clínico, aplicar conhecimentos com segurança e desenvolver uma carreira mais organizada."
      primaryActionLabel="Ver formações disponíveis"
      primaryActionHref="#catalogo"
      secondaryActionLabel="Conhecer o FisioClinic"
      secondaryActionHref="/tecnologia/fisioclinic"
      productsTitle="Formação clínica conectada à prática profissional."
      productsDescription="Comece com materiais objetivos e avance para treinamentos mais completos conforme sua necessidade."
      products={products}
      benefits={benefits}
      finalTitle="Sua evolução profissional também depende do próximo passo."
      finalDescription="Escolha uma formação, aprimore sua prática e construa uma carreira baseada em conhecimento e organização."
    />
  );
}