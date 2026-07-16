import ScrollReveal from "./ui/ScrollReveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Cayetano+S429+Cabalango+C%C3%B3rdoba+Argentina";

function ChurchIcon() {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-16 text-gold mx-auto"
    >
      {/* Cruz minimalista */}
      <line x1="24" y1="2" x2="24" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="17" y1="7" x2="31" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Cuerpo */}
      <rect x="8" y="20" width="32" height="40" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.04" />
      {/* Techo */}
      <path d="M4 22 L24 10 L44 22" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {/* Puerta arqueada */}
      <path d="M19 60 L19 44 Q24 39 29 44 L29 60" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" />
      {/* Ventanas minimalistas */}
      <rect x="11" y="30" width="8" height="10" rx="4" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <rect x="29" y="30" width="8" height="10" rx="4" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
    </svg>
  );
}

export default function Ceremony() {
  return (
    <section className="section-gap bg-ivory">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Decoración visual */}
          <ScrollReveal direction="left" className="hidden lg:block">
            <div
              className="relative h-96 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #E4EDE6 0%, #D8E6EC 50%, #C8DDD4 100%)",
              }}
            >
              {/* Borde interior */}
              <div className="absolute inset-4 border border-gold/20" />

              {/* Contenido decorativo */}
              <div className="flex flex-col items-center gap-6 relative z-10">
                <ChurchIcon />
                <div className="text-center">
                  <p className="font-display text-5xl font-light text-warm-deeper">12:00</p>
                  <p className="font-sans text-xs font-light text-warm/40 mt-1 tracking-wider">hs</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/40" />
                  <span className="font-display text-sm italic text-gold font-light">10.10.26</span>
                  <div className="w-8 h-px bg-gold/40" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Información */}
          <ScrollReveal direction="right" delay={150}>
            <div className="flex flex-col gap-6">
              {/* Ícono visible solo en mobile */}
              <div className="flex flex-col items-center gap-3 lg:hidden pb-2">
                <ChurchIcon />
                <p className="font-display text-4xl font-light text-warm-deeper">12:00 hs</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/40" />
                  <span className="font-display text-sm italic text-gold font-light">10.10.26</span>
                  <div className="w-8 h-px bg-gold/40" />
                </div>
              </div>
              <div className="gold-divider-left" />
              <h2 className="section-title">Ceremonia Religiosa</h2>

              <p className="font-sans text-sm text-warm/70 font-light leading-relaxed tracking-wide">
                Te esperamos el 10/10 a las 12:00 hs en
              </p>

              <div className="border-l-2 border-gold/30 pl-6 flex flex-col gap-2 py-2">
                <p className="font-display text-2xl sm:text-3xl font-light text-warm-deeper">
                  Parroquia San Cayetano
                </p>
                <p className="font-sans text-sm text-warm font-light">
                  S429, Cabalango, Córdoba
                </p>
                <p className="font-sans text-xs text-warm/50 font-light tracking-wide mt-1">
                  Cabalango · Córdoba · Argentina
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

        </div>
      </div>
    </section>
  );
}
