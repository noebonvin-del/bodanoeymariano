"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";

const WEDDING_DATE = new Date("2026-10-10T12:00:00-03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useCountdown(): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    }

    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

interface CountdownUnitProps {
  value: number;
  label: string;
  delay: number;
}

function CountdownUnit({ value, label, delay }: CountdownUnitProps) {
  return (
    <ScrollReveal delay={delay} direction="scale" className="flex flex-col items-center">
      <div className="relative">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 -m-3 border border-gold/20 rounded-sm" />
        <span className="countdown-digit font-display">
          {pad(value)}
        </span>
      </div>
      <span className="font-sans text-[10px] sm:text-xs font-light tracking-widest2 text-gold/70 uppercase mt-3">
        {label}
      </span>
    </ScrollReveal>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      className="section-gap relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1C3428 0%, #2E5040 40%, #1A3030 70%, #1C3428 100%)",
      }}
    >
      {/* Decoración fondo */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 50%, rgba(107,144,128,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, rgba(138,174,190,0.3) 0%, transparent 50%)
          `,
        }}
      />

      {/* Elementos florales decorativos */}
      <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-gold" fill="currentColor">
          <circle cx="40" cy="40" r="30" fillOpacity="0" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="20" fillOpacity="0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M40 10 L40 70 M10 40 L70 40" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.5" />
          <circle cx="40" cy="40" r="4" fillOpacity="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none rotate-45">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-gold" fill="currentColor">
          <circle cx="40" cy="40" r="30" fillOpacity="0" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="4" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="section-container relative z-10">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-100 font-light mb-4">
            Cuenta Regresiva
          </h2>
          <p className="font-display text-lg text-gold/70 italic font-light">
            10 de octubre de 2026 · 12:00 hs
          </p>
        </ScrollReveal>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-6 sm:gap-10 lg:gap-16">
          <CountdownUnit value={days} label="días" delay={100} />

          {/* Separador */}
          <div className="countdown-digit text-gold/30 self-start pt-1">:</div>

          <CountdownUnit value={hours} label="horas" delay={200} />

          <div className="countdown-digit text-gold/30 self-start pt-1">:</div>

          <CountdownUnit value={minutes} label="minutos" delay={300} />

          <div className="countdown-digit text-gold/30 self-start pt-1">:</div>

          <CountdownUnit value={seconds} label="segundos" delay={400} />
        </div>

        {/* Detalle inferior */}
        <ScrollReveal className="text-center mt-16" delay={500}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/30" />
            <span className="font-display text-base text-gold/50 italic font-light tracking-wide">
              N & M
            </span>
            <div className="w-16 h-px bg-gold/30" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
