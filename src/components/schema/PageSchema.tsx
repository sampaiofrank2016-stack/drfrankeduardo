const BASE_URL = "https://www.frankeduardo.com.br";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageSchemaProps {
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";

  title: string;
  description: string;
  path: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageSchema({
  type = "WebPage",
  title,
  description,
  path,
  breadcrumb,
}: PageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${BASE_URL}${path}#webpage`,
        url: `${BASE_URL}${path}`,
        name: title,
        description,
        inLanguage: "pt-BR",

        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },

        about: {
          "@id": `${BASE_URL}/#person`,
        },

        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },

        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/og-image.jpg`,
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}${path}#breadcrumb`,
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${BASE_URL}${item.url}`,
        })),
      },
    ],
  };

  return (
    <script
      id="page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}