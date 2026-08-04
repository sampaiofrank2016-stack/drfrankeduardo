import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.frankeduardo.com.br";
const pageUrl = `${siteUrl}/treinamentos/pacientes/hernia-de-disco`;

export const metadata: Metadata = {
  title: "Hérnia de Disco Sem Medo | Lista de Espera",
  description:
    "Entre para a lista de espera do treinamento Hérnia de Disco Sem Medo e seja avisado quando o conteúdo estiver disponível.",
  alternates: {
    canonical: "/treinamentos/pacientes/hernia-de-disco",
  },
  openGraph: {
    title: "Hérnia de Disco Sem Medo",
    description:
      "Entenda seu diagnóstico, diminua o medo e conheça caminhos mais seguros para lidar com a hérnia de disco.",
    url: pageUrl,
    siteName: "Dr. Frank Eduardo",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      width="20"
      height="20"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      width="18"
      height="18"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HerniaDeDiscoWaitlistPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hérnia de Disco Sem Medo",
    description:
      "Lista de espera para o treinamento educativo Hérnia de Disco Sem Medo.",
    url: pageUrl,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Dr. Frank Eduardo",
      url: siteUrl,
      jobTitle: "Fisioterapeuta",
    },
  };

  return (
    <>
      <main>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "72px 0 90px",
            background:
              "linear-gradient(135deg, #f4f8f6 0%, #ffffff 52%, #eef5f2 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "rgba(19, 84, 69, 0.055)",
              right: "-170px",
              top: "-170px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "rgba(19, 84, 69, 0.04)",
              left: "-100px",
              bottom: "-120px",
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <nav
              className="breadcrumb"
              aria-label="Navegação estrutural"
              style={{ marginBottom: "48px" }}
            >
              <Link href="/">Início</Link>
              <span>/</span>
              <Link href="/treinamentos/pacientes">Para pacientes</Link>
              <span>/</span>
              <strong>Hérnia de Disco Sem Medo</strong>
            </nav>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: "64px",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "#e4f0ec",
                    color: "#15594b",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Novo treinamento • Em preparação
                </span>

                <h1
                  style={{
                    maxWidth: "680px",
                    margin: "24px 0 0",
                    fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.058em",
                    color: "#14231f",
                  }}
                >
                  Hérnia de Disco{" "}
                  <span style={{ color: "#15594b" }}>Sem Medo.</span>
                </h1>

                <p
                  style={{
                    maxWidth: "620px",
                    margin: "28px 0 0",
                    fontSize: "1.13rem",
                    lineHeight: 1.75,
                    color: "#5c6863",
                  }}
                >
                  Um treinamento educativo criado para ajudar você a compreender
                  o diagnóstico, interpretar melhor exames, conhecer os
                  tratamentos e recuperar a confiança para se movimentar.
                </p>

                <div
                  style={{
                    marginTop: "34px",
                    display: "grid",
                    gap: "16px",
                  }}
                >
                  {[
                    "Entenda o que realmente significa ter uma hérnia de disco",
                    "Aprenda a interpretar exames sem transformar a imagem em uma sentença",
                    "Conheça os principais caminhos de tratamento",
                    "Reduza o medo de se movimentar e volte a confiar no seu corpo",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        color: "#34443e",
                      }}
                    >
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          minWidth: "28px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#15594b",
                          color: "#ffffff",
                        }}
                      >
                        <CheckIcon />
                      </span>

                      <span
                        style={{
                          paddingTop: "3px",
                          lineHeight: 1.55,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <aside
                id="lista-espera"
                style={{
                  padding: "34px",
                  borderRadius: "28px",
                  background: "#ffffff",
                  border: "1px solid rgba(21, 89, 75, 0.12)",
                  boxShadow: "0 24px 70px rgba(20, 45, 37, 0.10)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#15594b",
                  }}
                >
                  Lista de espera
                </span>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.04em",
                    color: "#14231f",
                  }}
                >
                  Seja avisado quando o treinamento estiver disponível.
                </h2>

                <p
                  style={{
                    margin: "16px 0 24px",
                    lineHeight: 1.7,
                    color: "#64706b",
                  }}
                >
                  Cadastre seu e-mail gratuitamente. Você estará entre os
                  primeiros a receber informações sobre o lançamento.
                </p>

                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "18px",
                  }}
                >
                  <iframe
                    title="Lista de espera - Hérnia de Disco Sem Medo"
                    width="540"
                    height="305"
                    src="https://75530604.sibforms.com/v2/serve/MUIFALMTIxg4E0HgqTxm_zkToKIWtBkK-V8ODLg3TOa4jP43FwER7SeSeFXmgNxW0Rkf1S3G4gJyZBe4BeVM4SG-1bdHk0qwfeyqJvzBDD046Bk0KgZqanzDZ0itJpw1cEv7YYh3w2nvyeTdqE1qWe6E6Gnq0PzQJB66WfLmJdg7deBAoJ7gPIHJwqaaVFt-vc5o2eeOMsje6HY2CQ=="
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{
                      display: "block",
                      width: "100%",
                      maxWidth: "100%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      border: 0,
                    }}
                  />
                </div>

                <p
                  style={{
                    margin: "18px 0 0",
                    fontSize: "0.78rem",
                    lineHeight: 1.5,
                    color: "#89928e",
                  }}
                >
                  Sem spam. Você poderá cancelar o recebimento das mensagens
                  quando quiser.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "88px 0",
            background: "#ffffff",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "900px",
            }}
          >
            <span className="eyebrow">Por que este treinamento?</span>

            <h2
              style={{
                maxWidth: "760px",
                marginTop: "14px",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
                color: "#14231f",
              }}
            >
              O diagnóstico não precisa transformar movimento em medo.
            </h2>

            <p
              style={{
                maxWidth: "760px",
                marginTop: "24px",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#65706c",
              }}
            >
              Muitas pessoas recebem um laudo de ressonância e passam a enxergar
              a coluna como algo frágil. O objetivo deste treinamento será
              oferecer informação acessível para compreender melhor o problema,
              conhecer as possibilidades de cuidado e participar de forma mais
              segura das decisões sobre o tratamento.
            </p>

            <div
              style={{
                marginTop: "42px",
                padding: "26px",
                borderRadius: "22px",
                background: "#f4f8f6",
                border: "1px solid rgba(21, 89, 75, 0.1)",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontSize: "1.05rem",
                  color: "#14231f",
                }}
              >
                O conteúdo ainda está em desenvolvimento.
              </strong>

              <p
                style={{
                  margin: "8px 0 0",
                  lineHeight: 1.7,
                  color: "#65706c",
                }}
              >
                O cadastro na lista de espera não representa uma compra ou
                obrigação futura. Ele serve para que você seja informado quando
                o treinamento estiver disponível.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "80px 0",
            background: "#123e34",
            color: "#ffffff",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "850px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Enquanto o treinamento não chega
            </span>

            <h2
              style={{
                margin: "14px auto 0",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
              }}
            >
              Continue aprendendo sobre dor e saúde.
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "30px",
              }}
            >
              <Link
                href="/artigos"
                className="button button-light"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Explorar artigos
                <ArrowIcon />
              </Link>

              <Link
                href="/treinamentos/pacientes"
                className="button button-outline-light"
              >
                Ver outros treinamentos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}