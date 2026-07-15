"use client";

import { useEffect, useState } from "react";

const CALENDAR_URL =
  "https://www.google.com/calendar/render?action=TEMPLATE" +
  "&text=Boda+Noe+%26+Mariano" +
  "&dates=20261010T150000Z%2F20261011T030000Z" +
  "&details=Ceremonia+de+casamiento+de+Noe+y+Mariano.+Luego+festejaremos+en+Sauron+Adventure%2C+Villa+Carlos+Paz%2C+C%C3%B3rdoba." +
  "&location=Parroquia+San+Cayetano%2C+S429%2C+Cabalango%2C+C%C3%B3rdoba";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #FDFAF5 0%, #F2E8D8 60%, #EDE0CC 100%)" }} />

      {/* Textura sutil superpuesta */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, rgba(184,149,106,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(201,169,110,0.10) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 10%, rgba(247,231,206,0.5) 0%, transparent 40%)
          `,
        }}
      />

      {/* Elemento decorativo floral - esquina superior izquierda */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold">
          <path d="M0 0 Q80 20 60 80 Q40 140 0 100 Q-40 60 0 0Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M10 0 Q90 30 70 90 Q50 150 10 110 Q-30 70 10 0Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
          <path d="M30 10 L25 40 Q40 55 55 45 Q50 30 30 10Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M50 30 L45 60 Q60 75 75 65 Q70 50 50 30Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="55" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
          <circle cx="75" cy="65" r="3" fill="currentColor" fillOpacity="0.4" />
          <circle cx="30" cy="75" r="2" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Elemento decorativo floral - esquina inferior derecha */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-sage">
          <path d="M0 0 Q80 20 60 80 Q40 140 0 100 Q-40 60 0 0Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M30 10 L25 40 Q40 55 55 45 Q50 30 30 10Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="55" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        <div className="mb-10" />

        {/* Línea decorativa */}
        <div
          className={`hero-line mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />

        {/* Iniciales */}
        <div
          className={`flex items-center gap-4 sm:gap-6 mb-4 transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="font-display text-7xl sm:text-8xl lg:text-9xl font-light tracking-wide" style={{ color: "#3D3228" }}>
            N
          </span>
          <span className="font-display text-5xl sm:text-6xl lg:text-7xl italic font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#B8956A" }}>
            &
          </span>
          <span className="font-display text-7xl sm:text-8xl lg:text-9xl font-light tracking-wide" style={{ color: "#3D3228" }}>
            M
          </span>
        </div>

        {/* Nombres */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light italic tracking-wide" style={{ color: "#7A6A5A" }}>
            Noe y Mariano
          </p>
        </div>

        {/* Línea decorativa */}
        <div
          className={`hero-line mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        />

        {/* Fecha */}
        <div
          className={`mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="font-display text-2xl sm:text-3xl text-gold italic tracking-widest">10 · 10 · 26</p>
        </div>

        {/* Frase */}
        <div
          className={`mb-12 max-w-xl transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <p className="font-display text-lg sm:text-xl font-light italic leading-relaxed" style={{ color: "#7A6A5A" }}>
            Después de 20 años juntos...
            <br />
            creemos que era hora de hacer una fiesta.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1300ms" }}
        >
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Agendar fecha
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1600ms" }}
      >
        <span className="section-label text-[10px]">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
