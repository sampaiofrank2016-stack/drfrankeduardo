import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro realizado",
  description:
    "Seu cadastro foi realizado com sucesso. Continue explorando conteúdos sobre saúde, movimento e qualidade de vida.",
  robots: {
    index: false,
    follow: true,
  },
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width="20"
    height="20"
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

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width="34"
    height="34"
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

export default function ThankYouPage() {
  return (
    <main>
      <section
        style={{
          minHeight: "72vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "90px 0",
          background:
            "linear-gradient(135deg, #f7faf9 0%, #ffffff 55%, #f2f7f5 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "rgba(21, 89, 75, 0.06)",
            top: "-170px",
            right: "-100px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(21, 89, 75, 0.04)",
            bottom: "-130px",
            left: "-70px",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "76px",
                height: "76px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
                background: "#15594b",
                color: "#ffffff",
                boxShadow: "0 14px 35px rgba(21, 89, 75, 0.18)",
              }}
            >
              <CheckIcon />
            </div>

            <span
              style={{
                display: "inline-block",
                marginBottom: "18px",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#15594b",
              }}
            >
              Cadastro realizado
            </span>

            <h1
              style={{
                margin: "0 auto",
                maxWidth: "700px",
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.055em",
                color: "#15231f",
              }}
            >
              Pronto. Você está na lista.
            </h1>

            <p
              style={{
                maxWidth: "620px",
                margin: "26px auto 0",
                fontSize: "1.08rem",
                lineHeight: 1.75,
                color: "#596560",
              }}
            >
              Seu cadastro foi realizado com sucesso. Quando houver novidades
              sobre o conteúdo que despertou seu interesse, você poderá receber
              as informações no e-mail cadastrado.
            </p>

            <div
              style={{
                maxWidth: "620px",
                margin: "34px auto 0",
                padding: "22px 26px",
                border: "1px solid rgba(21, 89, 75, 0.12)",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.78)",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: "#15231f",
                }}
              >
                Enquanto isso...
              </strong>

              <span
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#66716d",
                }}
              >
                Continue explorando conteúdos sobre dor, movimento, saúde e
                qualidade de vida.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "32px",
              }}
            >
              <Link
                href="/artigos"
                className="button button-primary"
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
                href="/treinamentos"
                className="button button-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Ver treinamentos
              </Link>
            </div>

            <a
              href="https://www.youtube.com/@professorfisio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "26px",
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "#15594b",
                textDecoration: "none",
              }}
            >
              Ou continue aprendendo no YouTube
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}