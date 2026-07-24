import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";

import StructuredData from "@/components/StructuredData";
import MetaPixel from "@/components/MetaPixel";

import "./globals.css";

const siteUrl = "https://www.frankeduardo.com.br";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Dr. Frank Eduardo",

  title: {
    default: "Dr. Frank Eduardo | Educação em Saúde",
    template: "%s | Dr. Frank Eduardo",
  },

  description:
    "Conteúdos, treinamentos, atendimento e tecnologia para pacientes, fisioterapeutas, famílias, cuidadores e profissionais da saúde.",

  keywords: [
    "educação em saúde",
    "fisioterapia",
    "fisioterapeuta",
    "osteopatia",
    "quiropraxia",
    "terapia manual",
    "dor",
    "reabilitação",
    "saúde e movimento",
    "treinamentos para pacientes",
    "cursos para fisioterapeutas",
    "consultório de fisioterapia",
    "fisioterapia em Itumbiara",
  ],

  authors: [
    {
      name: "Dr. Frank Eduardo",
      url: siteUrl,
    },
  ],

  creator: "Dr. Frank Eduardo",
  publisher: "Dr. Frank Eduardo",

  category: "Saúde e educação",

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },

  openGraph: {
    title: "Dr. Frank Eduardo | Educação em Saúde",
    description:
      "Conhecimento para viver melhor, atender melhor e transformar mais vidas.",
    url: "/",
    siteName: "Dr. Frank Eduardo",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Frank Eduardo - Educação em Saúde",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Frank Eduardo | Educação em Saúde",
    description:
      "Conteúdos, treinamentos, atendimento e tecnologia para pacientes e fisioterapeutas.",
    images: ["/og-image.png"],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}

        <StructuredData />

        <MetaPixel />

        <GoogleAnalytics gaId="G-WT98NR722X" />
      </body>
    </html>
  );
}