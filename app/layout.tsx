import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";

export const metadata: Metadata = {
  title: "Rafaela Arantes — Estratégia de Marca & Presença Digital",
  description: "Identidade, conteúdo e experiência digital para marcas claras, coerentes e memoráveis.",
  metadataBase: new URL("https://portfolio-rafaela-xi.vercel.app"),
  openGraph: { title:"Rafaela Arantes — Estratégia de Marca & Presença Digital", description:"Cases de marca, design editorial, conteúdo e experiências digitais.", url:"/", siteName:"Rafaela Arantes", locale:"pt_BR", type:"website", images:[{url:"/og.png",width:1733,height:909,alt:"Rafaela Arantes — Estratégia de Marca & Presença Digital"}] },
  twitter: { card:"summary_large_image", title:"Rafaela Arantes — Estratégia de Marca & Presença Digital", description:"Cases de marca, design editorial, conteúdo e experiências digitais.", images:["/og.png"] },
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
