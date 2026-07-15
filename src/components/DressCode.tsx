import ScrollReveal from "./ui/ScrollReveal";

export default function DressCode() {
  return (
    <section className="section-gap bg-ivory">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <ScrollReveal className="text-center mb-14">
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-3">Vestimenta</h2>
            <p className="font-display text-2xl sm:text-3xl text-gold italic font-light">
              Formal Elegante
            </p>
          </ScrollReveal>

          {/* Caja única */}
          <ScrollReveal delay={150}>
            <div className="border border-gold/20 bg-champagne-100 relative p-8 sm:p-10">

              {/* Esquinas decorativas */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/30" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/30" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/30" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/30" />

              {/* Texto introductorio */}
              <p className="font-sans text-sm text-warm/70 font-light leading-loose text-center mb-10">
                Queremos que te sientas cómodo y disfrutes plenamente de este día con nosotros.
              </p>

              {/* Divisor */}
              <div className="w-12 h-px bg-gold/25 mx-auto mb-10" />

              {/* Tres bloques */}
              <div className="flex flex-col gap-8">

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold/70">
                      <path d="M12 2 C13 5.5 13 8.5 12 12 C11 8.5 11 5.5 12 2Z" fill="currentColor" />
                      <path d="M12 22 C13 18.5 13 15.5 12 12 C11 15.5 11 18.5 12 22Z" fill="currentColor" />
                      <path d="M2 12 C5.5 11 8.5 11 12 12 C8.5 13 5.5 13 2 12Z" fill="currentColor" />
                      <path d="M22 12 C18.5 11 15.5 11 12 12 C15.5 13 18.5 13 22 12Z" fill="currentColor" />
                      <path d="M5 5 C7.5 7.5 9.5 9.5 12 12 C9.5 9.5 7.5 7.5 5 5Z" fill="currentColor" fillOpacity="0.5" />
                      <path d="M19 19 C16.5 16.5 14.5 14.5 12 12 C14.5 14.5 16.5 16.5 19 19Z" fill="currentColor" fillOpacity="0.5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg text-warm-deeper italic font-light mb-2">
                      Celebración al aire libre
                    </p>
                    <p className="font-sans text-sm text-warm/65 font-light leading-relaxed">
                      La ceremonia y la celebración tendrán lugar en un entorno natural,
                      durante el día y sobre césped.
                    </p>
                    <p className="font-sans text-sm text-warm/65 font-light leading-relaxed mt-2">
                      Te recomendamos elegir un atuendo elegante y cómodo, junto con un
                      calzado adecuado para caminar sobre césped.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gold/15" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold/70">
                      <path d="M12 3 C13 6 13 9 12 12 C11 9 11 6 12 3Z" fill="currentColor" fillOpacity="0.4" />
                      <path d="M12 21 C13 18 13 15 12 12 C11 15 11 18 12 21Z" fill="currentColor" fillOpacity="0.4" />
                      <path d="M3 12 C6 11 9 11 12 12 C9 13 6 13 3 12Z" fill="currentColor" fillOpacity="0.4" />
                      <path d="M21 12 C18 11 15 11 12 12 C15 13 18 13 21 12Z" fill="currentColor" fillOpacity="0.4" />
                      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg text-warm-deeper italic font-light mb-2">
                      Para las damas
                    </p>
                    <p className="font-sans text-sm text-warm/65 font-light leading-relaxed">
                      En lo posible, les pedimos evitar prendas en tonos blanco (reservado
                      para la novia) y azul, para acompañar la propuesta estética.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gold/15" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold/70">
                      <rect x="7" y="4" width="10" height="14" rx="0.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.05" />
                      <rect x="9" y="5.5" width="6" height="2" rx="0.3" fill="currentColor" fillOpacity="0.2" />
                      <path d="M10 11 L11.2 12.6 L14 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.35" />
                      <line x1="9" y1="16.5" x2="15" y2="16.5" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.35" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg text-warm-deeper italic font-light mb-2">
                      Personal militar
                    </p>
                    <p className="font-sans text-sm text-warm/65 font-light leading-relaxed">
                      El uniforme social de invierno será bienvenido.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
