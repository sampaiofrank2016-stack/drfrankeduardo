type CourseStructuredDataProps = {
  name: string;
  description: string;
  pathname: string;
  image: string;
  price: string;
  checkoutUrl: string;
  audience: string;
};

const BASE_URL = "https://frankeduardo.com.br";

export default function CourseStructuredData({
  name,
  description,
  pathname,
  image,
  price,
  checkoutUrl,
  audience,
}: CourseStructuredDataProps) {
  const courseUrl = `${BASE_URL}${pathname}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${courseUrl}/#course`,
    name,
    description,
    url: courseUrl,
    image: `${BASE_URL}${image}`,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Dr. Frank Eduardo",
      url: BASE_URL,
    },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Dr. Frank Eduardo",
    },
    inLanguage: "pt-BR",
    educationalLevel: audience,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: checkoutUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(courseSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}