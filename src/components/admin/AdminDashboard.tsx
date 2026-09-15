"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Photo = {
  id: string;
  url: string;
  guestName: string | null;
  status: "VISIBLE" | "HIDDEN";
  createdAt: string;
};

type RevealState = {
  isRevealed: boolean;
  scheduledAt: string | null;
  revealedAt: string | null;
};

const REFRESH_MS = 15000;

function toDatetimeLocalValue(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(
    d.getMinutes()
  )}`;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [reveal, setReveal] = useState<RevealState | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [scheduleInput, setScheduleInput] = useState("");
  const [savingSchedule, setSavingSchedule] = useState(false);
  const [busyPhotoId, setBusyPhotoId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [photosRes, revealRes] = await Promise.all([
        fetch("/api/admin/photos", { cache: "no-store" }),
        fetch("/api/admin/reveal", { cache: "no-store" }),
      ]);

      if (photosRes.status === 401 || revealRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!photosRes.ok || !revealRes.ok) {
        setLoadError("No se pudo conectar con el servidor. Reintentando...");
        return;
      }

      const photosJson = await photosRes.json();
      const revealJson = await revealRes.json();
      setPhotos(photosJson.photos);
      setReveal(revealJson);
      setLoadError(null);
      setLoading(false);
    } catch {
      setLoadError("Sin conexión. Reintentando...");
    }
  }, [router]);

  useEffect(() => {
    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => clearInterval(interval);
  }, [load]);

  const stats = useMemo(() => {
    const total = photos.length;
    const visible = photos.filter((p) => p.status === "VISIBLE").length;

    const now = Date.now();
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const today = photos.filter((p) => new Date(p.createdAt).getTime() >= startOfToday.getTime()).length;
    const lastHour = photos.filter((p) => now - new Date(p.createdAt).getTime() <= 60 * 60 * 1000).length;

    return { total, visible, hidden: total - visible, today, lastHour };
  }, [photos]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const runRevealAction = async (action: string, extra?: Record<string, unknown>) => {
    setSavingSchedule(true);
    const res = await fetch("/api/admin/reveal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...extra }),
    });
    const json = await res.json();
    setReveal(json);
    setSavingSchedule(false);
  };

  const toggleVisibility = async (photo: Photo) => {
    setBusyPhotoId(photo.id);
    const nextStatus = photo.status === "VISIBLE" ? "HIDDEN" : "VISIBLE";
    const res = await fetch(`/api/admin/photos/${photo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    if (res.ok) {
      setPhotos((ps) => ps.map((p) => (p.id === photo.id ? { ...p, status: nextStatus } : p)));
    }
    setBusyPhotoId(null);
  };

  const deletePhoto = async (photo: Photo) => {
    if (!confirm("¿Eliminar esta foto para siempre? No se puede deshacer.")) return;
    setBusyPhotoId(photo.id);
    const res = await fetch(`/api/admin/photos/${photo.id}`, { method: "DELETE" });
    if (res.ok) {
      setPhotos((ps) => ps.filter((p) => p.id !== photo.id));
    }
    setBusyPhotoId(null);
  };

  if (loading || !reveal) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center px-6 text-center">
        <p className="font-sans text-sm text-warm-deeper/50">
          {loadError ?? "Cargando..."}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory pb-20">
      {loadError && (
        <div className="bg-red-50 border-b border-red-200 px-4 py-2 text-center">
          <p className="font-sans text-xs text-red-600">{loadError}</p>
        </div>
      )}
      <header className="sticky top-0 z-20 bg-ivory/95 backdrop-blur border-b border-beige-200 px-4 py-3 flex items-center justify-between">
        <span className="font-display text-lg italic text-gold/70">Panel del anfitrión</span>
        <button onClick={handleLogout} className="font-sans text-xs text-warm-deeper/50 underline">
          Salir
        </button>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="card-elegant text-center py-4">
            <p className="font-display text-2xl text-warm-deeper">{stats.total}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-warm-deeper/50">Total</p>
          </div>
          <div className="card-elegant text-center py-4">
            <p className="font-display text-2xl text-warm-deeper">{stats.visible}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-warm-deeper/50">Visibles</p>
          </div>
          <div className="card-elegant text-center py-4">
            <p className="font-display text-2xl text-warm-deeper">{stats.hidden}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-warm-deeper/50">Ocultas</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="card-elegant text-center py-4">
            <p className="font-display text-2xl text-warm-deeper">{stats.today}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-warm-deeper/50">Hoy</p>
          </div>
          <div className="card-elegant text-center py-4">
            <p className="font-display text-2xl text-warm-deeper">{stats.lastHour}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-warm-deeper/50">Última hora</p>
          </div>
        </div>

        {/* Reveal controls */}
        <div className="card-elegant p-5">
          <h2 className="section-label mb-4">Revelado de la galería</h2>

          <div className="flex items-center gap-2 mb-4">
            <span
              className={`w-2 h-2 rounded-full ${reveal.isRevealed ? "bg-sage" : "bg-beige-300"}`}
            />
            <p className="font-sans text-sm text-warm-deeper">
              {reveal.isRevealed
                ? reveal.revealedAt
                  ? "Revelada manualmente"
                  : "Revelada (llegó la fecha programada)"
                : "Todavía oculta"}
            </p>
          </div>

          <label className="font-sans text-xs text-warm-deeper/60 block mb-2">
            Fecha y hora programada
          </label>
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="datetime-local"
              value={scheduleInput || toDatetimeLocalValue(reveal.scheduledAt)}
              onChange={(e) => setScheduleInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-white border border-beige-300 font-sans text-sm text-warm-deeper focus:outline-none focus:border-gold"
            />
            <button
              disabled={savingSchedule || !(scheduleInput || reveal.scheduledAt)}
              onClick={() =>
                runRevealAction("schedule", {
                  scheduledAt: new Date(scheduleInput || toDatetimeLocalValue(reveal.scheduledAt)).toISOString(),
                })
              }
              className="btn-outline text-xs justify-center disabled:opacity-40"
            >
              Guardar
            </button>
          </div>
          {reveal.scheduledAt && (
            <button
              onClick={() => runRevealAction("clearSchedule")}
              className="font-sans text-xs text-warm-deeper/40 underline mb-4"
            >
              Quitar fecha programada
            </button>
          )}

          <div className="border-t border-beige-200 pt-4 mt-2 flex flex-col gap-2">
            {!reveal.revealedAt ? (
              <button
                onClick={() => {
                  if (confirm("¿Revelar la galería ahora mismo a todos los invitados?")) {
                    runRevealAction("revealNow");
                  }
                }}
                className="btn-primary justify-center text-xs"
              >
                Revelar ahora
              </button>
            ) : (
              <button
                onClick={() => runRevealAction("unreveal")}
                className="btn-outline justify-center text-xs"
              >
                Deshacer revelado manual
              </button>
            )}
          </div>
        </div>

        {/* Photos */}
        <div>
          <h2 className="section-label mb-4">Fotos subidas ({photos.length})</h2>
          {photos.length === 0 ? (
            <p className="font-sans text-sm text-warm-deeper/40">Todavía no hay fotos.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div key={photo.id} className="relative bg-white border border-beige-200">
                  <div className="aspect-square overflow-hidden bg-beige-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt=""
                      className={`w-full h-full object-cover ${photo.status === "HIDDEN" ? "opacity-40" : ""}`}
                    />
                  </div>
                  {photo.status === "HIDDEN" && (
                    <span className="absolute top-1.5 left-1.5 bg-warm-deeper/80 text-ivory-100 text-[9px] font-sans uppercase tracking-widest px-1.5 py-0.5">
                      Oculta
                    </span>
                  )}
                  <div className="p-2">
                    <p className="font-sans text-[11px] text-warm-deeper/60 truncate">
                      {photo.guestName || "Anónimo"}
                    </p>
                    <p className="font-sans text-[10px] text-warm-deeper/35 mb-2">
                      {new Date(photo.createdAt).toLocaleString("es-AR", {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={busyPhotoId === photo.id}
                        onClick={() => toggleVisibility(photo)}
                        className="font-sans text-[10px] text-gold underline disabled:opacity-40"
                      >
                        {photo.status === "VISIBLE" ? "Ocultar" : "Mostrar"}
                      </button>
                      <button
                        disabled={busyPhotoId === photo.id}
                        onClick={() => deletePhoto(photo)}
                        className="font-sans text-[10px] text-red-500/80 underline disabled:opacity-40"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
