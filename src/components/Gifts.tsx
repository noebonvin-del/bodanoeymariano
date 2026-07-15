"use client";
import { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-11 text-gold mx-auto">
      <path
        d="M24 40 C24 40 4 26 4 14 C4 8 8.5 4 14 4 C18 4 21.5 6.5 24 10 C26.5 6.5 30 4 34 4 C39.5 4 44 8 44 14 C44 26 24 40 24 40Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
        strokeLinejoin="round"
      />
      {/* Luna de miel - avión minimalista dentro */}
      <path d="M16 22 L32 16 L28 22 L32 28 Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <line x1="22" y1="24" x2="26" y2="22" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Gifts() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-gap bg-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(107,144,128,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 50%, rgba(138,174,190,0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <ScrollReveal>
            <div className="gold-divider mb-8" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <HeartIcon />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-display text-4xl sm:text-5xl text-gold italic font-light leading-relaxed mt-8 mb-6">
              ¡Gracias!
            </p>
            <p className="font-sans text-sm text-warm/70 font-light leading-relaxed max-w-md mx-auto mb-3">
              Que nos acompañes en este día ya es un gran regalo para nosotros.
            </p>
            <p className="font-sans text-sm text-warm/70 font-light leading-relaxed max-w-md mx-auto">
              Si además te gustaría tener un detalle con nosotros, podés ayudarnos
              a hacer realidad nuestra luna de miel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400} className="mt-10">
            <button
              onClick={() => setOpen(!open)}
              className="btn-primary mx-auto"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              {open ? "Ocultar datos" : "Ver datos bancarios"}
            </button>

            {open && (
              <div className="w-full mt-6 p-8 border border-gold/20 bg-champagne-100 relative text-left">
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/30" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/30" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/30" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/30" />

                <p className="font-sans text-xs text-gold font-light tracking-widest uppercase text-center mb-6">Naranja X</p>

                {/* Pesos */}
                <p className="font-sans text-xs text-warm/40 font-light tracking-wider uppercase mb-3">Pesos</p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { label: "Titular", value: "Mariano Ezequiel Zuccoli" },
                    { label: "CUIL", value: "27-36706256-3" },
                    { label: "CBU", value: "4530000800015835425803" },
                    { label: "Alias", value: "BODANOEYMARIANO" },
                    { label: "Caja de ahorro en pesos", value: "1583542580" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gold/10 pb-3">
                      <span className="font-sans text-xs text-warm/50 font-light tracking-wider uppercase w-44 shrink-0">{label}</span>
                      <span className="font-sans text-sm text-warm-deeper font-light tracking-wide select-all">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Dólares */}
                <p className="font-sans text-xs text-warm/40 font-light tracking-wider uppercase mb-3">Dólares</p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Titular", value: "Mariano Ezequiel Zuccoli" },
                    { label: "CUIL", value: "27-36706256-3" },
                    { label: "CBU", value: "4530000800025374644865" },
                    { label: "Alias", value: "BODANOEYMARIANO.USD" },
                    { label: "Caja de ahorro en dólares", value: "2537464486" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gold/10 pb-3">
                      <span className="font-sans text-xs text-warm/50 font-light tracking-wider uppercase w-44 shrink-0">{label}</span>
                      <span className="font-sans text-sm text-warm-deeper font-light tracking-wide select-all">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
