interface FloralDividerProps {
  variant?: "default" | "light";
}

export default function FloralDivider({ variant = "default" }: FloralDividerProps) {
  const bg = variant === "light" ? "bg-ivory-200" : "bg-beige-100";

  return (
    <div className={`${bg} py-10 flex items-center justify-center gap-4 overflow-hidden`}>
      {/* Línea izquierda */}
      <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-gold/40" />

      {/* Motivo floral SVG central */}
      <svg
        viewBox="0 0 120 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-8 text-gold opacity-70"
      >
        {/* Pétalo izquierdo */}
        <path
          d="M20 16 C14 10, 6 10, 4 16 C6 22, 14 22, 20 16Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {/* Pétalo derecho */}
        <path
          d="M100 16 C106 10, 114 10, 116 16 C114 22, 106 22, 100 16Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {/* Hoja izquierda */}
        <path
          d="M38 16 C34 8, 28 8, 26 12 C30 12, 36 14, 38 16Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <path
          d="M38 16 C34 24, 28 24, 26 20 C30 20, 36 18, 38 16Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        {/* Hoja derecha */}
        <path
          d="M82 16 C86 8, 92 8, 94 12 C90 12, 84 14, 82 16Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <path
          d="M82 16 C86 24, 92 24, 94 20 C90 20, 84 18, 82 16Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        {/* Ramita izquierda */}
        <path d="M38 16 L55 16" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6" />
        <path d="M44 16 L42 11" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M50 16 L48 11" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M44 16 L42 21" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        {/* Ramita derecha */}
        <path d="M82 16 L65 16" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6" />
        <path d="M76 16 L78 11" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M70 16 L72 11" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M76 16 L78 21" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
        {/* Flor central */}
        <circle cx="60" cy="16" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="60" cy="16" r="1.5" fill="currentColor" fillOpacity="0.6" />
        <path d="M60 10 C61 12, 61 14, 60 16 C59 14, 59 12, 60 10Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M60 22 C61 20, 61 18, 60 16 C59 18, 59 20, 60 22Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M54 16 C56 15, 58 15, 60 16 C58 17, 56 17, 54 16Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M66 16 C64 15, 62 15, 60 16 C62 17, 64 17, 66 16Z" fill="currentColor" fillOpacity="0.4" />
        {/* Puntos decorativos */}
        <circle cx="42" cy="11" r="1" fill="currentColor" fillOpacity="0.5" />
        <circle cx="48" cy="11" r="1" fill="currentColor" fillOpacity="0.5" />
        <circle cx="78" cy="11" r="1" fill="currentColor" fillOpacity="0.5" />
        <circle cx="72" cy="11" r="1" fill="currentColor" fillOpacity="0.5" />
        <circle cx="42" cy="21" r="1" fill="currentColor" fillOpacity="0.5" />
        <circle cx="78" cy="21" r="1" fill="currentColor" fillOpacity="0.5" />
      </svg>

      {/* Línea derecha */}
      <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
