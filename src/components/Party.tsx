import ScrollReveal from "./ui/ScrollReveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sauron+Adventure+Villa+Carlos+Paz+C%C3%B3rdoba+Argentina";

function CelebrationIcon() {
  return (
    <svg viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-14 text-ivory-100 mx-auto">
      {/* Copa izquierda minimalista */}
      <path d="M10 6 L18 28 L15 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.8" />
      <line x1="11" y1="34" x2="19" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M6 6 L22 6 L18 22 L10 22 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
      {/* Copa derecha minimalista */}
      <path d="M38 6 L30 28 L33 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.8" />
      <line x1="29" y1="34" x2="37" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M42 6 L26 6 L30 22 L38 22 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
      {/* Brindis - línea entre copas */}
      <line x1="18" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2" />
      {/* Burbujas simples */}
      <circle cx="14" cy="14" r="0.8" fill="currentColor" fillOpacity="0.5" />
      <circle cx="12" cy="10" r="0.6" fill="currentColor" fillOpacity="0.4" />
      <circle cx="34" cy="14" r="0.8" fill="currentColor" fillOpacity="0.5" />
      <circle cx="36" cy="10" r="0.6" fill="currentColor" fillOpacity="0.4" />
      {/* Destello central */}
      <line x1="24" y1="2" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="21" y1="3" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="27" y1="3" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Party() {
  return (
    <section className="section-gap bg-beige-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Información (primero en mobile) */}
          <ScrollReveal direction="left" delay={150}>
            <div className="flex flex-col gap-6">
              {/* Ícono visible solo en mobile */}
              <div className="flex flex-col items-center gap-3 lg:hidden pb-2">
                <svg viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-14 text-gold mx-auto">
                  <path d="M10 6 L18 28 L15 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.8" />
                  <line x1="11" y1="34" x2="19" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
                  <path d="M6 6 L22 6 L18 22 L10 22 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
                  <path d="M38 6 L30 28 L33 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.8" />
                  <line x1="29" y1="34" x2="37" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
                  <path d="M42 6 L26 6 L30 22 L38 22 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
                  <line x1="18" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2" />
                  <circle cx="14" cy="14" r="0.8" fill="currentColor" fillOpacity="0.5" />
                  <circle cx="12" cy="10" r="0.6" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="34" cy="14" r="0.8" fill="currentColor" fillOpacity="0.5" />
                  <circle cx="36" cy="10" r="0.6" fill="currentColor" fillOpacity="0.4" />
                  <line x1="24" y1="2" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" strokeLinecap="round" />
                  <line x1="21" y1="3" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" strokeLinecap="round" />
                  <line x1="27" y1="3" x2="24" y2="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" strokeLinecap="round" />
                </svg>
                <p className="font-display text-2xl font-light text-warm-deeper italic">¡A celebrar!</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/40" />
                  <span className="font-display text-sm italic text-gold font-light">Villa Carlos Paz</span>
                  <div className="w-8 h-px bg-gold/40" />
                </div>
              </div>
              <div className="gold-divider-left" />
              <h2 className="section-title">Fiesta</h2>

              <p className="font-sans text-sm text-warm/70 font-light leading-relaxed tracking-wide">
                Después de la ceremonia vamos a festejar en:
              </p>

              <div className="border-l-2 border-gold/30 pl-6 flex flex-col gap-2 py-2">
                <p className="font-display text-2xl sm:text-3xl font-light text-warm-deeper">
                  Sauron Adventure
                </p>
                <p className="font-sans text-sm text-warm font-light">
                  Cno. a Estancia Cáceres Comechingones 94
                </p>
                <p className="font-sans text-sm text-warm font-light">
                  X5152 Villa Carlos Paz, Córdoba
                </p>
                <p className="font-sans text-xs text-warm/50 font-light tracking-wide mt-1">
                  Villa Carlos Paz · Córdoba · Argentina
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Cómo llegar
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Decoración visual */}
          <ScrollReveal direction="right" className="hidden lg:block">
            <div
              className="relative h-96 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1C3428 0%, #2E5040 40%, #4A6B5A 100%)",
              }}
            >
              {/* Borde interior */}
              <div className="absolute inset-4 border border-gold/20" />

              {/* Contenido decorativo */}
              <div className="flex flex-col items-center gap-6 relative z-10 px-8 text-center">
                <CelebrationIcon />
                <p className="font-display text-3xl font-light text-ivory-100 leading-tight">
                  ¡A celebrar!
                </p>
                <p className="font-sans text-xs font-light text-gold/60 tracking-widest uppercase">
                  Después de la ceremonia
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/40" />
                  <span className="font-display text-sm italic text-gold/70 font-light">Villa Carlos Paz</span>
                  <div className="w-8 h-px bg-gold/40" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
