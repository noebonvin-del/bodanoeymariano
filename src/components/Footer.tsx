export default function Footer() {
  return (
    <footer className="bg-ivory-200 py-16 px-6 text-center relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decoración floral sutil */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-5 pointer-events-none">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full text-gold">
          <circle cx="20" cy="20" r="60" stroke="currentColor" strokeWidth="1" fillOpacity="0" />
          <circle cx="20" cy="20" r="40" stroke="currentColor" strokeWidth="0.5" fillOpacity="0" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full text-gold">
          <circle cx="20" cy="20" r="60" stroke="currentColor" strokeWidth="1" fillOpacity="0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6">

        {/* Motivo floral */}
        <div className="opacity-50">
          <svg viewBox="0 0 80 40" fill="none" className="w-20 h-10 text-gold">
            <path d="M16 20 C14 14, 8 14, 6 20 C8 26, 14 26, 16 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
            <path d="M64 20 C66 14, 72 14, 74 20 C72 26, 66 26, 64 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
            <path d="M16 20 L34 20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M64 20 L46 20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
            <circle cx="40" cy="20" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="20" r="2" fill="currentColor" fillOpacity="0.4" />
            <path d="M40 13 C41 15.5, 41 17.5, 40 20 C39 17.5, 39 15.5, 40 13Z" fill="currentColor" fillOpacity="0.35" />
            <path d="M40 27 C41 24.5, 41 22.5, 40 20 C39 22.5, 39 24.5, 40 27Z" fill="currentColor" fillOpacity="0.35" />
            <path d="M33 20 C35.5 19, 37.5 19, 40 20 C37.5 21, 35.5 21, 33 20Z" fill="currentColor" fillOpacity="0.35" />
            <path d="M47 20 C44.5 19, 42.5 19, 40 20 C42.5 21, 44.5 21, 47 20Z" fill="currentColor" fillOpacity="0.35" />
          </svg>
        </div>

        {/* Iniciales */}
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-light text-warm-deeper">N</span>
          <span className="font-display text-3xl italic font-light text-gold">&</span>
          <span className="font-display text-5xl font-light text-warm-deeper">M</span>
        </div>

        {/* Nombres */}
        <p className="font-display text-xl italic font-light text-warm">
          Noe y Mariano
        </p>

        {/* Fecha */}
        <p className="section-label text-sm tracking-widest3">10 · 10 · 26</p>

        {/* Divisor */}
        <div className="w-16 h-px bg-gold/30" />

        {/* Frase final */}
        <p className="font-display text-base sm:text-lg text-warm/70 italic font-light leading-relaxed max-w-xs">
          Gracias por acompañarnos en uno de los días más importantes de nuestra vida.
        </p>

        {/* Copyright mínimo */}
        <p className="font-sans text-[10px] text-warm/30 font-light tracking-wider mt-4">
          © 2026 Noe & Mariano
        </p>

      </div>
    </footer>
  );
}
