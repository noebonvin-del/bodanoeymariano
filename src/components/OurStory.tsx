"use client";

import ScrollReveal from "./ui/ScrollReveal";

const photos = [
  { id: "01", src: "/images/foto-01.jpg", alt: "Noe y Mariano" },
  { id: "02", src: "/images/foto-02.jpg", alt: "Noe y Mariano" },
  { id: "03", src: "/images/foto-03.jpg", alt: "Noe y Mariano" },
  { id: "04", src: "/images/foto-04.jpg", alt: "Noe y Mariano" },
  { id: "05", src: "/images/foto-05.jpg", alt: "Noe y Mariano" },
  { id: "06", src: "/images/foto-06.jpg", alt: "Noe y Mariano" },
  { id: "07", src: "/images/foto-07.jpg", alt: "Noe y Mariano" },
  { id: "08", src: "/images/foto-08.jpg", alt: "Noe y Mariano" },
  { id: "09", src: "/images/foto-09.jpg", alt: "Noe y Mariano" },
];

function Photo({ src, alt, height, position = "center center", fit = "cover" }: {
  src: string; alt: string; height: number;
  position?: string; fit?: "cover" | "contain";
}) {
  return (
    <div style={{ width: "100%", height: `${height}px`, overflow: "hidden", position: "relative", background: "#F2E8D8" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: fit,
          objectPosition: position,
          display: "block",
        }}
      />
    </div>
  );
}

export default function OurStory() {
  return (
    <section className="section-gap" style={{ background: "linear-gradient(160deg, #FDFAF5 0%, #F5EDE0 100%)" }}>
      <div className="section-container">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="gold-divider mb-6" />
          <h2 className="section-title mb-6">
            20 años compartiendo la vida
          </h2>
          <p className="font-display text-xl sm:text-2xl text-warm font-light italic leading-relaxed max-w-2xl mx-auto">
            Desde aquel primer beso, en septiembre de 2006, comenzamos a escribir una historia que ya lleva casi 20 años. Estas son algunas de las páginas más lindas de ese camino.
          </p>
        </ScrollReveal>

        {/* Grid desktop */}
        <div className="hidden md:flex flex-col gap-3 mb-8">
          {/* Fila 1: 4 fotos iguales */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { photo: photos[0], pos: "center center" },
              { photo: photos[1], pos: "center bottom" },
              { photo: photos[2], pos: "center center" },
              { photo: photos[3], pos: "center top" },
            ].map(({ photo, pos }) => (
              <div key={photo.id} style={{ height: "360px", overflow: "hidden" }}>
                <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
              </div>
            ))}
          </div>

          {/* Foto central full width */}
          <div style={{ height: "380px", overflow: "hidden" }}>
            <img src={photos[4].src} alt={photos[4].alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>

          {/* Fila 3: 4 fotos iguales */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { photo: photos[5], pos: "center center" },
              { photo: photos[6], pos: "center center" },
              { photo: photos[7], pos: "center top" },
              { photo: photos[8], pos: "center top" },
            ].map(({ photo, pos }) => (
              <div key={photo.id} style={{ height: "360px", overflow: "hidden" }}>
                <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Grid mobile: misma estructura que desktop */}
        <div className="md:hidden flex flex-col gap-2 mb-8">
          {/* Fila 1: 2x2 */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { photo: photos[0], pos: "center center" },
              { photo: photos[1], pos: "center bottom" },
              { photo: photos[2], pos: "center center" },
              { photo: photos[3], pos: "center top" },
            ].map(({ photo, pos }) => (
              <div key={photo.id} style={{ height: "160px", overflow: "hidden" }}>
                <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
              </div>
            ))}
          </div>

          {/* Foto central full width */}
          <div style={{ height: "200px", overflow: "hidden" }}>
            <img src={photos[4].src} alt={photos[4].alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>

          {/* Fila 3: 2x2 */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { photo: photos[5], pos: "center center" },
              { photo: photos[6], pos: "center center" },
              { photo: photos[7], pos: "center top" },
              { photo: photos[8], pos: "center top" },
            ].map(({ photo, pos }) => (
              <div key={photo.id} style={{ height: "160px", overflow: "hidden" }}>
                <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12" delay={100}>
          <div className="gold-divider mb-8" />
          <p className="font-display text-xl sm:text-2xl text-warm font-light italic leading-relaxed">
            Hoy, después de tantos años eligiéndonos cada día, queremos dar el "sí" y celebrar este momento junto a las personas que más queremos.
          </p>
          <div className="gold-divider mt-8" />
        </ScrollReveal>

      </div>
    </section>
  );
}
