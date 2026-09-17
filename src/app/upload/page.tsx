import type { Metadata } from "next";
import UploadForm from "@/components/upload/UploadForm";

export const metadata: Metadata = {
  title: "Espías de nuestra boda · Noe & Mariano",
  description: "Subí las fotos de tu misión y todas las que quieras compartir con Noe y Mariano.",
};

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-ivory px-5 py-10 sm:py-16">
      <div className="max-w-md mx-auto text-center mb-5">
        <p className="section-label mb-3">Espías de nuestra boda</p>
        <h1 className="font-display italic text-2xl sm:text-4xl text-warm-deeper mb-3 px-2">
          ¡Agente, llegaste al lugar correcto!
        </h1>
        <p className="font-sans text-sm text-warm-deeper/60 leading-relaxed max-w-sm mx-auto">
          Subí acá las fotos de tus misiones y todas las demás fotos que quieras
          compartir con nosotros.
        </p>
      </div>

      <UploadForm />
    </main>
  );
}
