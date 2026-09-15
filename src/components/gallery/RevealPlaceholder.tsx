const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

function isNextCalendarDay(date: Date): boolean {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return (
    date.getFullYear() === tomorrow.getFullYear() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getDate() === tomorrow.getDate()
  );
}

export default function RevealPlaceholder({ scheduledAt }: { scheduledAt: string | null }) {
  const date = scheduledAt ? new Date(scheduledAt) : null;
  const formattedDate = date ? new Intl.DateTimeFormat("es-AR", DATE_FORMAT).format(date) : null;
  const formattedTime = date ? new Intl.DateTimeFormat("es-AR", TIME_FORMAT).format(date) : null;

  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-6 py-20">
      <div className="max-w-sm mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-px bg-gold/40" />
          <span className="font-display text-2xl italic text-gold/60">N &amp; M</span>
          <div className="w-10 h-px bg-gold/40" />
        </div>

        <h1 className="font-display italic text-3xl text-warm-deeper mb-5">
          Galería bajo secreto 🤫
        </h1>

        <p className="font-sans text-sm text-warm-deeper/60 leading-relaxed mb-6">
          Queremos vivir hoy sin mirar el teléfono y descubrir mañana nuestra
          boda a través de sus ojos.
        </p>

        {formattedDate ? (
          <p className="font-sans text-sm text-warm-deeper/60 leading-relaxed">
            Las fotos se revelarán el
            <br />
            <span className="text-gold font-medium">
              {formattedDate} a las {formattedTime}
            </span>
          </p>
        ) : (
          <p className="font-sans text-sm text-warm-deeper/60 leading-relaxed">
            Muy pronto vamos a revelar todo lo que subieron nuestros invitados.
          </p>
        )}

        {date && isNextCalendarDay(date) && (
          <p className="font-sans text-xs text-warm-deeper/40 mt-8">
            Volvé mañana para descubrirlas con nosotros.
          </p>
        )}

        <a href="/upload" className="btn-outline mt-10 text-xs inline-flex">
          Subir más fotos
        </a>
      </div>
    </main>
  );
}
