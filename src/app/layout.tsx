import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noe & Mariano · 10.10.2026",
  description:
    "Celebremos juntos el amor, la alegría y el comienzo de nuestra historia para siempre. Nos casamos el 10 de octubre de 2026.",
  openGraph: {
    title: "Noe & Mariano · 10.10.2026",
    description: "Estás invitado a nuestra boda. 10 de octubre de 2026, Cabalango, Córdoba.",
    type: "website",
    locale: "es_AR",
  },
  themeColor: "#FDFAF5",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerifDisplay.variable} ${montserrat.variable}`}>
      <body className="bg-ivory text-warm-deeper antialiased">{children}</body>
    </html>
  );
}
