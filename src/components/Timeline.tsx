import ScrollReveal from "./ui/ScrollReveal";

const events = [
  {
    time: "12:00",
    label: "Iglesia",
    description: "Ceremonia religiosa",
    icon: (
      <svg viewBox="0 0 36 44" fill="none" className="w-9 h-11 text-gold">
        {/* Cruz */}
        <line x1="18" y1="1" x2="18" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="13" y1="4.5" x2="23" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        {/* Techo */}
        <path d="M2 16 L18 7 L34 16" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Cuerpo */}
        <rect x="6" y="16" width="24" height="26" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.04" />
        {/* Puerta arqueada */}
        <path d="M13 42 L13 30 Q18 25 23 30 L23 42" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
        {/* Ventanas */}
        <rect x="8" y="20" width="6" height="8" rx="3" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" />
        <rect x="22" y="20" width="6" height="8" rx="3" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" />
      </svg>
    ),
  },
  {
    time: "14:30",
    label: "Civil",
    description: "Ceremonia civil",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-gold">
        {/* Dos anillos entrelazados */}
        <circle cx="13" cy="18" r="9" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.04" />
        <circle cx="23" cy="18" r="9" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.04" />
        {/* Zona de intersección sutil */}
        <path d="M18 10.5 Q22 14 22 18 Q22 22 18 25.5 Q14 22 14 18 Q14 14 18 10.5Z" fill="currentColor" fillOpacity="0.06" />
        {/* Destellos */}
        <circle cx="10" cy="11" r="1" fill="currentColor" fillOpacity="0.4" />
        <circle cx="26" cy="11" r="1" fill="currentColor" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    time: "22:00",
    label: "Cierre de la celebración",
    description: "Brindis final",
    icon: (
      <svg viewBox="0 0 36 44" fill="none" className="w-9 h-11 text-gold">
        {/* Copa izquierda */}
        <path d="M4 4 L14 4 L11 20 L9 24" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.05" strokeLinejoin="round" />
        <line x1="6" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        {/* Copa derecha */}
        <path d="M22 4 L32 4 L29 20 L27 24" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.05" strokeLinejoin="round" />
        <line x1="24" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        {/* Contacto de copas (brindis) */}
        <line x1="14" y1="4" x2="22" y2="4" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="1.5 2" />
        {/* Burbujas */}
        <circle cx="9" cy="10" r="0.7" fill="currentColor" fillOpacity="0.45" />
        <circle cx="7" cy="15" r="0.5" fill="currentColor" fillOpacity="0.35" />
        <circle cx="27" cy="10" r="0.7" fill="currentColor" fillOpacity="0.45" />
        <circle cx="29" cy="15" r="0.5" fill="currentColor" fillOpacity="0.35" />
        {/* Destello superior */}
        <line x1="18" y1="1" x2="18" y2="3.5" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="15.5" y1="1.8" x2="18" y2="3.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="20.5" y1="1.8" x2="18" y2="3.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.4" />
        {/* Pie / base */}
        <line x1="9" y1="24" x2="9" y2="30" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="6" y1="30" x2="12" y2="30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="27" y1="24" x2="27" y2="30" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="24" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Timeline() {
  return (
    <section className="bg-ivory overflow-hidden" style={{ paddingTop: "clamp(40px, 6vw, 72px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
      <div className="section-container">

        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="gold-divider mb-6" />
          <h2 className="section-title mb-4">El gran día</h2>
          <p className="font-sans text-sm text-warm/60 font-light max-w-sm mx-auto leading-relaxed">
            Así viviremos juntos cada momento de esta celebración.
          </p>
        </ScrollReveal>

        {/* ── DESKTOP: timeline horizontal ── */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-4 max-w-3xl mx-auto">

            {/* Línea continua de fondo */}
            <div className="absolute top-[52px] left-[calc(16.66%)] right-[calc(16.66%)] h-px">
              <div className="w-full h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" />
            </div>

            {events.map((event, i) => (
              <ScrollReveal
                key={i}
                delay={i * 180}
                direction="scale"
                className="flex-1 flex flex-col items-center text-center gap-5"
              >
                {/* Nodo con ícono */}
                <div className="relative flex flex-col items-center">
                  {/* Círculo exterior */}
                  <div className="w-[104px] h-[104px] rounded-full border border-gold/25 flex items-center justify-center bg-ivory relative z-10">
                    {/* Círculo interior */}
                    <div className="w-20 h-20 rounded-full border border-gold/15 bg-champagne-100 flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  {/* Punto conector sobre la línea */}
                  <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold/60 z-20" />
                </div>

                {/* Hora */}
                <p className="font-display text-3xl italic text-warm-deeper leading-none">
                  {event.time}
                  <span className="font-sans text-xs not-italic font-light text-warm/50 ml-1 tracking-wider">hs</span>
                </p>

                {/* Nombre del momento */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-px bg-gold/40 mx-auto" />
                  <p className="font-sans text-xs font-light tracking-widest text-warm/60 uppercase mt-1">
                    {event.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── MOBILE: timeline vertical ── */}
        <div className="md:hidden max-w-xs mx-auto">
          <div className="relative flex flex-col gap-0">

            {/* Línea vertical continua */}
            <div className="absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-gold/15 via-gold/40 to-gold/15" />

            {events.map((event, i) => (
              <ScrollReveal
                key={i}
                delay={i * 150}
                direction="left"
                className="flex items-start gap-6 pb-12 last:pb-0"
              >
                {/* Nodo */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-20 h-20 rounded-full border border-gold/25 bg-ivory flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-gold/15 bg-champagne-100 flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  {/* Punto conector */}
                  <div className="absolute top-1/2 -right-[13px] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-2 pt-5">
                  <p className="font-display text-3xl italic text-warm-deeper leading-none">
                    {event.time}
                    <span className="font-sans text-xs not-italic font-light text-warm/50 ml-1 tracking-wider">hs</span>
                  </p>
                  <div className="w-5 h-px bg-gold/40" />
                  <p className="font-sans text-xs font-light tracking-widest text-warm/60 uppercase">
                    {event.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
