"use client";

import { useEffect, useState, useRef } from "react";

const FORM_LINK = "https://forms.gle/9dsSvSh1498hxqw66";
const VIDEO_ID = "yHOfLbXJruo";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if ((window as any).YT) { initPlayer(); return; }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    (window as any).onYouTubeIframeAPIReady = () => initPlayer();
    return () => { (window as any).onYouTubeIframeAPIReady = undefined; };
  }, []);

  function initPlayer() {
    if (!containerRef.current) return;
    playerRef.current = new (window as any).YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: VIDEO_ID, rel: 0 },
      events: { onReady: () => setReady(true) },
    });
  }

  function toggleMusic() {
    if (!ready || !playerRef.current) return;
    if (playing) { playerRef.current.pauseVideo(); } else { playerRef.current.playVideo(); }
    setPlaying(!playing);
  }

  return (
    <>
      {/* YouTube iframe oculto */}
      <div style={{ position: "fixed", top: "-9999px", left: "-9999px", width: "1px", height: "1px" }} aria-hidden>
        <div ref={containerRef} />
      </div>

      {/* Contenedor flex con ambos botones */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Botón música */}
        <button
          onClick={toggleMusic}
          title={playing ? "Pausar música" : "Reproducir música"}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(253, 250, 245, 0.95)",
            border: "1px solid rgba(184, 149, 106, 0.5)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8956A">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
          {playing && (
            <span style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              border: "1px solid rgba(184,149,106,0.35)",
              animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
            }} />
          )}
        </button>

        {/* Botón confirmar asistencia */}
        <a
          href={FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3 bg-gold text-ivory-100 font-sans text-xs font-light tracking-widest uppercase shadow-lg shadow-warm-deeper/20 hover:bg-gold-dark hover:shadow-xl transition-all duration-400 hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Confirmar asistencia
        </a>
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}
