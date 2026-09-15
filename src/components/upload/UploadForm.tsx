"use client";

import { useCallback, useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { uploadToCloudinary } from "@/lib/cloudinaryUpload";

type QueueItem = {
  id: string;
  file: File;
  previewUrl: string;
  progress: number;
  status: "pending" | "compressing" | "uploading" | "done" | "error";
  error?: string;
};

const NAME_STORAGE_KEY = "wedding_guest_name";
const MAX_CONCURRENT_UPLOADS = 3;

function makeId() {
  return Math.random().toString(36).slice(2);
}

async function compress(file: File): Promise<File> {
  try {
    return await imageCompression(file, {
      maxWidthOrHeight: 2000,
      maxSizeMB: 2,
      useWebWorker: true,
      fileType: file.type === "image/png" ? "image/png" : "image/jpeg",
      initialQuality: 0.82,
    });
  } catch {
    // If compression fails for any reason, fall back to the original file
    // rather than blocking the guest from uploading their photo at all.
    return file;
  }
}

export default function UploadForm() {
  const [guestName, setGuestName] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(NAME_STORAGE_KEY) ?? "";
  });
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedCount, setUploadedCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (value: string) => {
    setGuestName(value);
    window.localStorage.setItem(NAME_STORAGE_KEY, value);
  };

  const processFile = useCallback(
    async (item: QueueItem) => {
      setQueue((q) => q.map((i) => (i.id === item.id ? { ...i, status: "compressing" } : i)));
      const compressed = await compress(item.file);

      setQueue((q) => q.map((i) => (i.id === item.id ? { ...i, status: "uploading" } : i)));

      try {
        const result = await uploadToCloudinary(compressed, (percent) => {
          setQueue((q) => q.map((i) => (i.id === item.id ? { ...i, progress: percent } : i)));
        });

        const metaRes = await fetch("/api/photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            guestName: guestName.trim() || null,
          }),
        });

        if (!metaRes.ok) {
          // The image reached Cloudinary but we couldn't record it, so as far
          // as the guest is concerned this upload did not succeed — show an
          // error rather than a false "done", or the photo would silently
          // never appear in the gallery.
          throw new Error("No se pudo guardar la foto, intentá de nuevo");
        }

        setQueue((q) => q.map((i) => (i.id === item.id ? { ...i, status: "done", progress: 100 } : i)));
        setUploadedCount((c) => c + 1);
      } catch (err) {
        setQueue((q) =>
          q.map((i) =>
            i.id === item.id
              ? { ...i, status: "error", error: err instanceof Error ? err.message : "Error al subir" }
              : i
          )
        );
      }
    },
    [guestName]
  );

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const imageFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
      if (imageFiles.length === 0) return;

      const items: QueueItem[] = imageFiles.map((file) => ({
        id: makeId(),
        file,
        previewUrl: URL.createObjectURL(file),
        progress: 0,
        status: "pending",
      }));

      setQueue((q) => [...q, ...items]);

      // Simple concurrency-limited processing so a burst of 20 photos
      // doesn't open 20 simultaneous uploads on venue wifi.
      let index = 0;
      const runNext = () => {
        if (index >= items.length) return;
        const item = items[index];
        index += 1;
        processFile(item).finally(runNext);
      };
      for (let i = 0; i < MAX_CONCURRENT_UPLOADS; i++) runNext();
    },
    [processFile]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const retryItem = (item: QueueItem) => {
    setQueue((q) => q.map((i) => (i.id === item.id ? { ...i, status: "pending", error: undefined } : i)));
    processFile(item);
  };

  const removeItem = (id: string) => {
    setQueue((q) => q.filter((i) => i.id !== id));
  };

  const allDone = queue.length > 0 && queue.every((i) => i.status === "done");
  const hasError = queue.some((i) => i.status === "error");
  const isBusy = queue.some((i) => i.status === "compressing" || i.status === "uploading");

  return (
    <div className="w-full max-w-md mx-auto">
      {allDone && !isBusy ? (
        <div className="card-elegant p-8 text-center animate-fade-up">
          <div className="w-14 h-14 rounded-full bg-sage-lighter flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="font-display italic text-2xl text-warm-deeper mb-3">¡Misión recibida! 🤍</h2>
          <p className="font-sans text-sm text-warm-deeper/70 leading-relaxed mb-1">
            Gracias por compartir estos momentos con nosotros.
          </p>
          <p className="font-sans text-sm text-warm-deeper/70 leading-relaxed mb-4">
            Tus fotos están guardadas y permanecerán en secreto hasta mañana.
          </p>
          <p className="font-sans text-xs text-warm-deeper/50 leading-relaxed">
            Si sacaste más fotos, podés seguir subiendo todas las que quieras.
          </p>
          <div className="flex flex-col items-center gap-3 mt-6">
            <button
              onClick={() => setQueue([])}
              className="btn-outline text-xs"
            >
              Subir más fotos
            </button>
            <a href="/" className="font-sans text-xs text-warm-deeper/40 underline">
              Volver
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <label className="section-label block mb-2">¿Cómo te llamás? (opcional)</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Ej: Male"
              maxLength={60}
              className="w-full px-4 py-3 bg-white border border-beige-300 font-sans text-sm text-warm-deeper placeholder:text-warm-deeper/30 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`cursor-pointer border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center text-center px-6 py-12 ${
              isDragging ? "border-gold bg-champagne-100" : "border-beige-300 bg-white hover:border-gold/50"
            }`}
          >
            <svg className="w-9 h-9 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
            <p className="font-sans text-sm text-warm-deeper font-medium mb-1">
              Subir fotos
            </p>
            <p className="font-sans text-xs text-warm-deeper/50">
              tocá para elegir o arrastrá tus fotos acá
            </p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleInputChange}
              className="hidden"
            />
          </div>

          <p className="font-display italic text-base text-warm text-center leading-snug mt-6">
            ¡Y no te limites solo a tu misión!
            <br />
            Subí tantas fotos como quieras.
            <br />
            <span className="text-sm">
              Nos encantaría descubrir nuestra boda desde tu punto de vista.
            </span>
          </p>

          {queue.length > 0 && (
            <div className="mt-6 space-y-3">
              {queue.map((item) => (
                <div key={item.id} className="flex items-center gap-3 bg-white border border-beige-200 p-2">
                  <div className="w-14 h-14 shrink-0 overflow-hidden bg-beige-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.previewUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs text-warm-deeper/70 truncate mb-1">{item.file.name}</p>
                    {item.status === "error" ? (
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs text-red-600">{item.error ?? "Error"}</span>
                        <button
                          onClick={() => retryItem(item)}
                          className="font-sans text-xs text-gold underline"
                        >
                          Reintentar
                        </button>
                      </div>
                    ) : item.status === "done" ? (
                      <span className="font-sans text-xs text-warm">Listo ✓</span>
                    ) : (
                      <div className="w-full h-1.5 bg-beige-200 overflow-hidden">
                        <div
                          className="h-full bg-gold transition-all duration-300"
                          style={{
                            width: item.status === "compressing" ? "10%" : `${Math.max(item.progress, 5)}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {item.status !== "uploading" && item.status !== "compressing" && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 text-warm-deeper/30 hover:text-warm-deeper p-1"
                      aria-label="Quitar"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}

              {hasError && !isBusy && (
                <p className="font-sans text-xs text-warm-deeper/50 text-center pt-2">
                  Revisá tu conexión y tocá &ldquo;Reintentar&rdquo; en las fotos que fallaron.
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
