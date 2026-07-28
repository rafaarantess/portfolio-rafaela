import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafaela Arantes — Estratégia de Marca & Presença Digital",
  description: "Identidade, conteúdo e experiência digital para marcas claras, coerentes e memoráveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
