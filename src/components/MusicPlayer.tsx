"use client";

import { useState, useEffect, useRef } from "react";

const VIDEO_ID = "yHOfLbXJruo";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if ((window as any).YT) {
      initPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      (window as any).onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  function initPlayer() {
    if (!containerRef.current) return;
    playerRef.current = new (window as any).YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: VIDEO_ID,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: () => setReady(true),
      },
    });
  }

  function toggle() {
    if (!ready || !playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlaying(!playing);
  }

  return (
    <>
      {/* YouTube iframe oculto */}
      <div
        style={{ position: "fixed", top: "-9999px", left: "-9999px", width: "1px", height: "1px" }}
        aria-hidden
      >
        <div ref={containerRef} />
      </div>

      {/* Botón flotante */}
      <button
        onClick={toggle}
        title={playing ? "Pausar música" : "Reproducir música"}
        style={{
          position: "fixed",
          bottom: "88px",
          right: "20px",
          zIndex: 50,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(253, 250, 245, 0.92)",
          border: "1px solid rgba(184, 149, 106, 0.4)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {playing ? (
          /* Pausa */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#B8956A">
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          /* Play / nota musical */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}

        {/* Animación de ondas cuando suena */}
        {playing && (
          <span style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "1px solid rgba(184,149,106,0.3)",
            animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
          }} />
        )}
      </button>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}
