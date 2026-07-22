import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Frank Eduardo | Educação em Saúde",
    template: "%s | Dr. Frank Eduardo",
  },
  description:
    "Conteúdos, treinamentos, atendimento e tecnologia para pacientes, fisioterapeutas, famílias e cuidadores.",
  keywords: [
    "educação em saúde",
    "fisioterapia",
    "osteopatia",
    "quiropraxia",
    "dor",
    "reabilitação",
    "treinamentos para pacientes",
    "cursos para fisioterapeutas",
  ],
  authors: [
    {
      name: "Dr. Frank Eduardo",
    },
  ],
  creator: "Dr. Frank Eduardo",
  openGraph: {
    title: "Dr. Frank Eduardo | Educação em Saúde",
    description:
      "Conhecimento para viver melhor, atender melhor e transformar mais vidas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Dr. Frank Eduardo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Frank Eduardo | Educação em Saúde",
    description:
      "Conteúdos, treinamentos, atendimento e tecnologia em saúde.",
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

        <MetaPixel />

        <GoogleAnalytics gaId="G-WT98NR722X" />
      </body>
    </html>
  );
}