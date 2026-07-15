import ScrollReveal from "./ui/ScrollReveal";

const FORM_LINK = "https://forms.gle/9dsSvSh1498hxqw66";

export default function RSVP() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #2E5040 0%, #1C3428 35%, #162A20 65%, #243C30 100%)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
      }}
    >
      {/* Decoraciones de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(107,144,128,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(138,174,190,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(200,221,212,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Elementos florales esquinas */}
      <div className="absolute top-0 left-0 w-56 h-56 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold">
          <path d="M0 0 Q80 20 60 80 Q40 140 0 100 Q-40 60 0 0Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M30 10 L25 40 Q40 55 55 45 Q50 30 30 10Z" fill="currentColor" fillOpacity="0.3" />
          <circle cx="55" cy="45" r="4" fill="currentColor" fillOpacity="0.5" />
          <circle cx="25" cy="40" r="3" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-56 h-56 opacity-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold">
          <path d="M0 0 Q80 20 60 80 Q40 140 0 100 Q-40 60 0 0Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M30 10 L25 40 Q40 55 55 45 Q50 30 30 10Z" fill="currentColor" fillOpacity="0.3" />
          <circle cx="55" cy="45" r="4" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Decoración superior */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-2 h-2 rotate-45 border border-gold/40" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory-100 font-light mb-6">
              ¿Nos acompañás?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-sans text-base text-ivory-100/60 font-light leading-relaxed max-w-sm mx-auto">
              Nos encantaría compartir este día tan especial con vos.
              <br /><br />
              Por favor confirmá tu asistencia antes del{" "}
              <span className="text-gold/90 font-semibold">25 de agosto de 2026</span>.
            </p>
          </ScrollReveal>

          {/* CTA principal */}
          <ScrollReveal delay={450} className="mt-12">
            <div className="flex flex-col items-center gap-6">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gold text-ivory-100 font-sans text-sm font-light tracking-widest uppercase transition-all duration-500 hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-95"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </span>
                <svg
                  className="w-4 h-4 relative z-10 transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="relative z-10">Confirmar asistencia</span>
              </a>

              <p className="font-sans text-xs text-ivory-100/30 tracking-widest uppercase">
                · fecha límite: <span className="font-semibold">25 de agosto</span> ·
              </p>
            </div>
          </ScrollReveal>

          {/* Decoración inferior */}
          <ScrollReveal delay={550} className="mt-14">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gold/30" />
              <span className="font-display text-3xl italic text-gold/30 font-light">N & M</span>
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
