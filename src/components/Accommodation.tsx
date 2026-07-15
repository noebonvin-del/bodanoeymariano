import ScrollReveal from "./ui/ScrollReveal";

const accommodations = [
  {
    id: 1,
    name: "Hospedaje 1",
    address: "Dirección a completar",
    description: "Descripción breve del alojamiento",
    link: "#",
    gradientFrom: "from-champagne-100",
    gradientTo: "to-nude-200",
  },
  {
    id: 2,
    name: "Hospedaje 2",
    address: "Dirección a completar",
    description: "Descripción breve del alojamiento",
    link: "#",
    gradientFrom: "from-beige-100",
    gradientTo: "to-champagne-300",
  },
  {
    id: 3,
    name: "Hospedaje 3",
    address: "Dirección a completar",
    description: "Descripción breve del alojamiento",
    link: "#",
    gradientFrom: "from-nude-100",
    gradientTo: "to-beige-200",
  },
];

export default function Accommodation() {
  return (
    <section className="section-gap bg-beige-100">
      <div className="section-container">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="gold-divider mb-6" />
          <h2 className="section-title mb-6">
            Sugerencias de Hospedaje
          </h2>
          <p className="font-sans text-sm text-warm/70 font-light max-w-md mx-auto leading-relaxed">
            Te compartimos algunas opciones de hospedaje cercanas al lugar del evento.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {accommodations.map((place, i) => (
            <ScrollReveal key={place.id} delay={i * 150} direction="scale">
              <div className="card-elegant overflow-hidden group h-full flex flex-col">

                {/* Imagen placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${place.gradientFrom} ${place.gradientTo} relative overflow-hidden flex-shrink-0`}
                >
                  {/* Decoración interna */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 opacity-40">
                      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
                        <path d="M6 42 L6 22 L24 10 L42 22 L42 42 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
                        <path d="M18 42 L18 30 L30 30 L30 42" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
                        <rect x="20" y="20" width="8" height="7" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.15" />
                      </svg>
                      <p className="font-sans text-[10px] text-gold tracking-widest uppercase">
                        imagen
                      </p>
                    </div>
                  </div>
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-warm-deeper/0 group-hover:bg-warm-deeper/5 transition-all duration-500" />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-display text-xl text-warm-deeper font-light">
                      {place.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-warm/60 font-light flex items-start gap-1.5">
                    <svg className="w-3 h-3 flex-shrink-0 mt-0.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {place.address}
                  </p>
                  <p className="font-sans text-xs text-warm/50 font-light leading-relaxed flex-1">
                    {place.description}
                  </p>
                  <div className="pt-2 border-t border-beige-200">
                    <a
                      href={place.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs text-gold font-light tracking-widest uppercase transition-all duration-300 hover:gap-3 group/link"
                    >
                      Ver más
                      <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
