const BASE_URL = "https://frankeduardo.com.br";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Dr. Frank Eduardo",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
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
  worksFor: {
    "@id": `${BASE_URL}/#organization`,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Dr. Frank Eduardo",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Ecossistema de educação em saúde, treinamentos, atendimento e tecnologia para pacientes, fisioterapeutas, famílias e cuidadores.",
  founder: {
    "@id": `${BASE_URL}/#person`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Dr. Frank Eduardo",
  description:
    "Conteúdos, treinamentos, atendimento e tecnologia em saúde.",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  inLanguage: "pt-BR",
};

export default function StructuredData() {
  const schemas = [personSchema, organizationSchema, websiteSchema];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}