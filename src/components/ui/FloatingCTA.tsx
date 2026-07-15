"use client";

import { useEffect, useState } from "react";

const FORM_LINK = "https://forms.gle/9dsSvSh1498hxqw66";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={FORM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-5 py-3 bg-gold text-ivory-100 font-sans text-xs font-light tracking-widest uppercase shadow-lg shadow-warm-deeper/20 hover:bg-gold-dark hover:shadow-xl transition-all duration-400 hover:-translate-y-0.5 active:scale-95"
      >
        <svg
          className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Confirmar asistencia
      </a>
    </div>
  );
}
