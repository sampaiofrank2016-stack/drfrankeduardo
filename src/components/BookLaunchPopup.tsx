"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CAMPAIGN = {
  id: "livro-depois-dos-enta-lancamento-2026",
  title: "Depois dos Enta",
  headline: "Por que seu corpo começou a doer?",
  description:
    "Um livro para compreender como hábitos, escolhas e sobrecargas acumuladas ao longo da vida influenciam a saúde depois dos 40.",
  image: "/images/depois-dos-enta-capa.png",
  href: "/livros/depois-dos-enta",
  button: "Conhecer o livro",
  activeUntil: "2026-08-28T23:59:59-03:00",
  delayInMilliseconds: 2200,
  daysUntilShowAgain: 3,
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  }
}

export default function BookLaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const storageKey = `campaign-popup:${CAMPAIGN.id}`;

  useEffect(() => {
    const campaignEnd = new Date(CAMPAIGN.activeUntil).getTime();
    const now = Date.now();

    if (Number.isNaN(campaignEnd) || now > campaignEnd) {
      return;
    }

    const lastClosedAt = window.localStorage.getItem(storageKey);
    const showAgainAfter =
      CAMPAIGN.daysUntilShowAgain * 24 * 60 * 60 * 1000;

    if (
      lastClosedAt &&
      now - Number(lastClosedAt) < showAgainAfter
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, CAMPAIGN.delayInMilliseconds);

    return () => window.clearTimeout(timer);
  }, [storageKey]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function closePopup() {
    window.localStorage.setItem(storageKey, String(Date.now()));
    setIsOpen(false);
  }

  function registerBookClick() {
    window.gtag?.("event", "book_popup_click", {
      campaign_id: CAMPAIGN.id,
      destination: CAMPAIGN.href,
    });

    window.localStorage.setItem(storageKey, String(Date.now()));
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-popup-title"
      aria-describedby="book-popup-description"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-white/20 md:grid-cols-[0.82fr_1.18fr]">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Fechar divulgação do livro"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-2xl leading-none text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-950"
        >
          ×
        </button>

        <div className="relative min-h-[260px] overflow-hidden bg-emerald-950 sm:min-h-[320px] md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.28),transparent_42%)]"
            aria-hidden="true"
          />

          <div className="relative flex h-full items-center justify-center p-8 sm:p-10">
            <div className="relative w-full max-w-[250px] rotate-[-2deg] overflow-hidden rounded-xl shadow-2xl shadow-black/40 ring-1 ring-white/20 transition duration-500 hover:rotate-0 hover:scale-[1.02]">
              <Image
                src={CAMPAIGN.image}
                alt="Capa do livro Depois dos Enta, de Frank Eduardo"
                width={1200}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Novo livro
          </span>

          <h2
            id="book-popup-title"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {CAMPAIGN.title}
          </h2>

          <h3 className="mt-3 text-xl font-semibold leading-snug text-emerald-800 sm:text-2xl">
            {CAMPAIGN.headline}
          </h3>

          <p
            id="book-popup-description"
            className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            {CAMPAIGN.description}
          </p>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
              ✓
            </span>

            <p className="text-sm leading-6 text-emerald-950">
              Uma leitura acessível para quem deseja compreender melhor o
              próprio corpo e construir novos caminhos de cuidado.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={CAMPAIGN.href}
              onClick={registerBookClick}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-emerald-900 px-6 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              {CAMPAIGN.button}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={closePopup}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Agora não
            </button>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-400 sm:text-left">
            Ao fechar, esta divulgação só aparecerá novamente após 3 dias.
          </p>
        </div>
      </div>
    </div>
  );
}