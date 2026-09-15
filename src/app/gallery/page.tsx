import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getRevealState } from "@/lib/reveal";
import RevealPlaceholder from "@/components/gallery/RevealPlaceholder";
import Gallery from "@/components/gallery/Gallery";

export const metadata: Metadata = {
  title: "Galería · Noe & Mariano",
  description: "Las fotos que sacaron los invitados en la boda de Noe y Mariano.",
};

// Never statically cache this page: the reveal check must run against the
// real clock/DB on every request, otherwise a stale build could keep
// serving a revealed (or hidden) state past the moment it changes.
export const dynamic = "force-dynamic";

function ErrorState() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-6 text-center">
      <div className="max-w-sm mx-auto">
        <span className="font-display text-2xl italic text-gold/60 block mb-6">N &amp; M</span>
        <p className="font-sans text-sm text-warm-deeper/60 leading-relaxed">
          No pudimos cargar la galería en este momento.
          <br />
          Volvé a intentar en un ratito.
        </p>
      </div>
    </main>
  );
}

export default async function GalleryPage() {
  let state;
  try {
    state = await getRevealState();
  } catch {
    return <ErrorState />;
  }

  if (!state.isRevealed) {
    return <RevealPlaceholder scheduledAt={state.scheduledAt?.toISOString() ?? null} />;
  }

  let photos;
  try {
    photos = await prisma.photo.findMany({
      where: { status: "VISIBLE" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        url: true,
        width: true,
        height: true,
        guestName: true,
        createdAt: true,
      },
    });
  } catch {
    return <ErrorState />;
  }

  return (
    <main className="min-h-screen bg-ivory px-3 py-10 sm:px-6 sm:py-14">
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-10 h-px bg-gold/40" />
          <span className="font-display text-2xl italic text-gold/60">N &amp; M</span>
          <div className="w-10 h-px bg-gold/40" />
        </div>
        <h1 className="font-display italic text-3xl sm:text-4xl text-warm-deeper mb-2">
          Misión cumplida.
        </h1>
        <p className="font-sans text-sm text-warm-deeper/60 mb-1">
          Ahora sí… veamos nuestra boda a través de sus ojos.
        </p>
        <p className="font-sans text-xs text-warm-deeper/40">
          {photos.length} {photos.length === 1 ? "foto compartida" : "fotos compartidas"} por los invitados
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Gallery
          photos={photos.map((p) => ({ ...p, createdAt: p.createdAt.toISOString() }))}
        />
      </div>
    </main>
  );
}
