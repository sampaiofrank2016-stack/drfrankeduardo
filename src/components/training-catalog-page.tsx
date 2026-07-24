import Link from "next/link";

export type TrainingProduct = {
  category: string;
  title: string;
  description: string;
  format: string;
  access: string;
  price?: string;
  oldPrice?: string;
  href: string;
  status: "available" | "soon";
  featured?: boolean;
  highlights: string[];
  buttonLabel: string;
};

type TrainingCatalogPageProps = {
  audienceLabel: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  productsTitle: string;
  productsDescription: string;
  products: TrainingProduct[];
  benefits: {
    number: string;
    title: string;
    description: string;
  }[];
  finalTitle: string;
  finalDescription: string;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="arrow-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="catalog-check-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function TrainingCatalogPage({
  audienceLabel,
  title,
  highlightedTitle,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  productsTitle,
  productsDescription,
  products,
  benefits,
  finalTitle,
  finalDescription,
}: TrainingCatalogPageProps) {
  const availableProducts = products.filter(
    (product) => product.status === "available",
  );

  const comingSoonProducts = products.filter(
    (product) => product.status === "soon",
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-content">
          <Link href="/" className="brand" aria-label="Página inicial">
            <span className="brand-mark">FE</span>

            <span className="brand-copy">
              <strong>Dr. Frank Eduardo</strong>
              <small>Educação em saúde</small>
            </span>
          </Link>

          <nav className="desktop-navigation" aria-label="Navegação principal">
            <Link href="/">Início</Link>
            <Link href="/artigos">Artigos</Link>
            <Link href="/treinamentos">Treinamentos</Link>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/consultorio">Consultório</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>

          <Link href="/consultorio" className="header-cta">
            Agendar consulta
          </Link>

          <details className="mobile-navigation">
            <summary aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </summary>

            <div className="mobile-menu">
              <Link href="/">Início</Link>
              <Link href="/artigos">Artigos</Link>
              <Link href="/treinamentos">Treinamentos</Link>
              <Link href="/tecnologia">Tecnologia</Link>
              <Link href="/consultorio">Consultório</Link>
              <Link href="/sobre">Sobre</Link>

              <Link href="/consultorio" className="mobile-menu-cta">
                Agendar consulta
              </Link>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section className="catalog-hero">
          <div className="catalog-hero-circle catalog-hero-circle-one" />
          <div className="catalog-hero-circle catalog-hero-circle-two" />

          <div className="container catalog-hero-grid">
            <div className="catalog-hero-content">
              <div className="breadcrumb">
                <Link href="/">Início</Link>
                <span>/</span>
                <Link href="/treinamentos">Treinamentos</Link>
                <span>/</span>
                <strong>{audienceLabel}</strong>
              </div>

              <span className="eyebrow">{audienceLabel}</span>

              <h1>
                {title} <span>{highlightedTitle}</span>
              </h1>

              <p>{description}</p>

              <div className="catalog-hero-actions">
                <Link
                  href={primaryActionHref}
                  className="button button-primary"
                >
                  {primaryActionLabel}
                  <ArrowIcon />
                </Link>

                <Link
                  href={secondaryActionHref}
                  className="button button-secondary"
                >
                  {secondaryActionLabel}
                </Link>
              </div>
            </div>

            <div className="catalog-hero-card">
              <span className="catalog-hero-card-label">
                Formação com propósito
              </span>

              <h2>Aprender para compreender, aplicar e transformar.</h2>

              <div className="catalog-hero-card-list">
                <div>
                  <span>01</span>
                  <p>Conteúdo estruturado e direto ao ponto.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Acesso digital para estudar no seu ritmo.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Conhecimento conectado a situações reais.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-products-section" id="catalogo">
          <div className="container">
            <div className="section-heading catalog-products-heading">
              <div>
                <span className="eyebrow">Treinamentos disponíveis</span>
                <h2>{productsTitle}</h2>
              </div>

              <p>{productsDescription}</p>
            </div>

            <div className="catalog-products-grid">
              {availableProducts.map((product, index) => (
                <article
                  className={`catalog-product-card ${
                    product.featured ? "catalog-product-featured" : ""
                  }`}
                  key={product.title}
                >
                  <div className="catalog-product-header">
                    <span className="catalog-product-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="catalog-product-status">Disponível</span>
                  </div>

                  <span className="catalog-product-category">
                    {product.category}
                  </span>

                  <h3>{product.title}</h3>

                  <p className="catalog-product-description">
                    {product.description}
                  </p>

                  <div className="catalog-product-highlights">
                    {product.highlights.map((highlight) => (
                      <div key={highlight}>
                        <CheckIcon />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="catalog-product-details">
                    <div>
                      <span>Formato</span>
                      <strong>{product.format}</strong>
                    </div>

                    <div>
                      <span>Acesso</span>
                      <strong>{product.access}</strong>
                    </div>
                  </div>

                  {product.price && (
                    <div className="catalog-product-price">
                      {product.oldPrice && <del>{product.oldPrice}</del>}
                      <strong>{product.price}</strong>
                    </div>
                  )}

                  <Link href={product.href} className="catalog-product-button">
                    {product.buttonLabel}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>

            {comingSoonProducts.length > 0 && (
              <div className="catalog-coming-soon">
                <div className="catalog-coming-soon-heading">
                  <span className="eyebrow">Próximos conteúdos</span>
                  <h2>O ecossistema continuará crescendo.</h2>
                </div>

                <div className="catalog-coming-soon-grid">
                  {comingSoonProducts.map((product) => (
                    <article
                      className="catalog-soon-card"
                      key={product.title}
                    >
                      <div>
                        <span>{product.category}</span>
                        <strong>Em breve</strong>
                      </div>

                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="catalog-benefits-section">
          <div className="container">
            <div className="centered-heading">
              <span className="eyebrow">Por que aprender aqui?</span>
              <h2>Conhecimento criado para gerar mudança real.</h2>
            </div>

            <div className="catalog-benefits-grid">
              {benefits.map((benefit) => (
                <article key={benefit.number}>
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-final-cta">
          <div className="container catalog-final-cta-content">
            <span>Seu próximo passo</span>

            <h2>{finalTitle}</h2>

            <p>{finalDescription}</p>

            <div className="catalog-final-actions">
              <Link href={primaryActionHref} className="button button-light">
                {primaryActionLabel}
              </Link>

              <Link
                href="/treinamentos"
                className="button button-outline-light"
              >
                Voltar aos treinamentos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand brand-footer">
              <span className="brand-mark">FE</span>

              <span className="brand-copy">
                <strong>Dr. Frank Eduardo</strong>
                <small>Educação em saúde</small>
              </span>
            </Link>

            <p>
              Conteúdo, atendimento, treinamentos e tecnologia para transformar
              a forma como pessoas cuidam da saúde.
            </p>
          </div>

          <div className="footer-column">
            <strong>Conteúdo</strong>
            <Link href="/artigos">Artigos</Link>
            <Link href="/treinamentos/pacientes">Para pacientes</Link>
            <Link href="/treinamentos/fisioterapeutas">
              Para fisioterapeutas
            </Link>
          </div>

          <div className="footer-column">
            <strong>Soluções</strong>
            <Link href="/consultorio">Consultório</Link>
            <Link href="/tecnologia/amparo-care">Amparo Care</Link>
            <Link href="/tecnologia/fisioclinic">FisioClinic</Link>
          </div>

          <div className="footer-column">
            <strong>Institucional</strong>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>

            <a
              href="https://www.youtube.com/@professorfisio"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Dr. Frank Eduardo. Todos os direitos
            reservados.
          </p>

          <p>
            O conteúdo deste site é educativo e não substitui avaliação
            individualizada.
          </p>
        </div>
      </footer>
    </div>
  );
}