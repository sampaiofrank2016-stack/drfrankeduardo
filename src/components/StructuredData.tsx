const BASE_URL = "https://www.frankeduardo.com.br";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Dr. Frank Eduardo",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#person-image`,
        url: `${BASE_URL}/og-image.jpg`,
        contentUrl: `${BASE_URL}/og-image.jpg`,
        caption: "Dr. Frank Eduardo",
      },
      jobTitle: "Fisioterapeuta",
      description:
        "Fisioterapeuta com atuação em osteopatia, quiropraxia, microfisioterapia, educação em saúde e desenvolvimento de soluções para profissionais, pacientes, famílias e cuidadores.",
      knowsAbout: [
        "Fisioterapia",
        "Osteopatia",
        "Quiropraxia",
        "Microfisioterapia",
        "Terapia Manual",
        "Dor",
        "Reabilitação",
        "Educação em Saúde",
      ],
      sameAs: [
        "https://www.youtube.com/@professorfisio",
        "https://www.instagram.com/frank_fisioterapeuta/"
      ],
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Frank Eduardo",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        contentUrl: `${BASE_URL}/logo.png`,
        caption: "Dr. Frank Eduardo",
      },
      image: {
        "@id": `${BASE_URL}/#person-image`,
      },
      description:
        "Ecossistema de educação em saúde, treinamentos, atendimento e tecnologia para pacientes, fisioterapeutas, famílias e cuidadores.",
      founder: {
        "@id": `${BASE_URL}/#person`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dr. Frank Eduardo",
      description:
        "Conteúdos, treinamentos, atendimento e tecnologia em saúde.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      about: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "pt-BR",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      id="global-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}