"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Contraseña incorrecta");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Error de conexión, intentá de nuevo");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="text-center mb-8">
          <span className="font-display text-2xl italic text-gold/70">N &amp; M</span>
          <h1 className="font-sans text-xs uppercase tracking-widest text-warm-deeper/50 mt-3">
            Panel del anfitrión
          </h1>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          autoFocus
          className="w-full px-4 py-3 bg-white border border-beige-300 font-sans text-sm text-warm-deeper placeholder:text-warm-deeper/30 focus:outline-none focus:border-gold transition-colors mb-3"
        />

        {error && <p className="font-sans text-xs text-red-600 mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading || password.length === 0}
          className="btn-primary w-full justify-center text-xs disabled:opacity-40"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
