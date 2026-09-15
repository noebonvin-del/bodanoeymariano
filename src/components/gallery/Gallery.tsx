"use client";

import { useState } from "react";

export type GalleryPhoto = {
  id: string;
  url: string;
  width: number | null;
  height: number | null;
  guestName: string | null;
  createdAt: string;
};

function downloadUrlFor(url: string) {
  // Cloudinary delivery URLs accept transformation flags inline; fl_attachment
  // forces a "Save As" download instead of opening the image in-browser.
  return url.replace("/upload/", "/upload/fl_attachment/");
}

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (photos.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-sans text-sm text-warm-deeper/50">
          Todavía no hay fotos para mostrar.
        </p>
      </div>
    );
  }

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-square overflow-hidden bg-beige-100 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.url}
              alt={photo.guestName ? `Foto de ${photo.guestName}` : "Foto de la boda"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-warm-deeper/95 flex flex-col items-center justify-center px-4 py-6"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 text-ivory-100/80 hover:text-ivory-100 p-2"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.url}
            alt=""
            className="max-w-full max-h-[75vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="flex items-center gap-6 mt-6" onClick={(e) => e.stopPropagation()}>
            {active.guestName && (
              <span className="font-sans text-xs text-ivory-100/60 uppercase tracking-widest">
                {active.guestName}
              </span>
            )}
            <a
              href={downloadUrlFor(active.url)}
              className="font-sans text-xs text-gold-light uppercase tracking-widest underline"
            >
              Descargar
            </a>
          </div>

          {photos.length > 1 && (
            <div className="flex items-center gap-8 mt-8" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveIndex((activeIndex! - 1 + photos.length) % photos.length)}
                className="text-ivory-100/70 hover:text-ivory-100 p-2"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex! + 1) % photos.length)}
                className="text-ivory-100/70 hover:text-ivory-100 p-2"
                aria-label="Siguiente"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
