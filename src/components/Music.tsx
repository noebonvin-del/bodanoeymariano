import ScrollReveal from "./ui/ScrollReveal";

const SPOTIFY_LINK = "https://open.spotify.com/playlist/0NQIrdw79zPrUGWGKHSJ1l?si=47020b92239b427f&pt=7bacaf3e6d18f2d9282551af993ac495";

const musicalNotes = ["♩", "♪", "♫", "♬"];

function NoteDecor({ note, className }: { note: string; className: string }) {
  return (
    <span
      className={`absolute font-display text-2xl text-gold/20 select-none pointer-events-none ${className}`}
      aria-hidden
    >
      {note}
    </span>
  );
}

export default function Music() {
  return (
    <section
      className="section-gap relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E4EDE6 0%, #EFF4EE 40%, #F8FAF7 70%, #E4EDE6 100%)",
      }}
    >
      {/* Notas musicales decorativas */}
      <NoteDecor note="♩" className="top-8 left-[8%] text-3xl rotate-[-15deg]" />
      <NoteDecor note="♪" className="top-16 left-[18%] text-xl rotate-[10deg]" />
      <NoteDecor note="♫" className="top-6 right-[12%] text-4xl rotate-[20deg]" />
      <NoteDecor note="♬" className="top-20 right-[22%] text-2xl rotate-[-8deg]" />
      <NoteDecor note="♩" className="bottom-12 left-[15%] text-2xl rotate-[12deg]" />
      <NoteDecor note="♪" className="bottom-8 right-[10%] text-3xl rotate-[-20deg]" />
      <NoteDecor note="♫" className="bottom-16 left-[30%] text-xl rotate-[5deg]" />
      <NoteDecor note="♬" className="bottom-10 right-[30%] text-2xl rotate-[-12deg]" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <ScrollReveal>
            <div className="gold-divider mb-8" />
          </ScrollReveal>

          {/* Ícono musical central */}
          <ScrollReveal delay={100}>
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="absolute inset-0 rounded-full border border-gold/30" />
              <div className="absolute inset-3 rounded-full border border-gold/20" />
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold relative z-10">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.8" fillOpacity="0" />
                <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.4" />
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="0.5" fillOpacity="0" strokeOpacity="0.5" />
                <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="0.4" fillOpacity="0" strokeOpacity="0.3" />
                <path d="M31 10 L31 20 L37 18 L37 8 Z" fill="currentColor" fillOpacity="0.3" />
                <line x1="31" y1="14" x2="37" y2="12" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="section-title mb-6">Música</h2>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="font-display text-xl sm:text-2xl text-warm italic font-light leading-relaxed mb-3">
              La fiesta la hacés vos! Recomendanos esa canción que no puede faltar.
            </p>
            <p className="font-sans text-sm text-warm/60 font-light">
              ¡Ayudanos a armar la playlist perfecta!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={350} className="mt-10">
            <a
              href={SPOTIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group"
            >
              {/* Ícono Spotify simplificado */}
              <svg
                className="w-4 h-4 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Sugerir canción
            </a>
          </ScrollReveal>

          {/* Waveform decorativo */}
          <ScrollReveal delay={450} className="mt-12">
            <div className="flex items-end justify-center gap-1 h-8 opacity-20">
              {[3, 6, 10, 7, 4, 8, 12, 9, 5, 11, 7, 4, 9, 6, 3, 8, 10, 5, 7, 4, 11, 8, 6, 3].map(
                (h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gold rounded-full"
                    style={{ height: `${h * 2.5}px` }}
                  />
                )
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
