import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato — Rafaela Arantes",
  description: "Entre em contato com Rafaela Arantes por e-mail ou WhatsApp.",
};

function EnvelopeIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="13" width="52" height="38" rx="2"/><path d="m8 17 24 20 24-20"/></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M53 30a21 21 0 0 1-31 18L10 52l4-12A21 21 0 1 1 53 30Z"/><path d="M24 20c1-1 3-1 4 1l3 6c1 1 0 2-1 3l-2 2c3 6 7 9 13 12l2-3c1-1 2-1 3 0l6 3c2 1 2 3 1 4-2 4-6 6-10 5-13-3-23-13-27-26-1-3 1-6 3-7Z"/></svg>;
}

export default function Contato() {
  return <main>
    <header className="siteHeader">
      <Link className="wordmark" href="/">Rafaela Arantes</Link>
      <nav aria-label="Navegação principal"><Link href="/projetos">Projetos</Link><Link href="/#sobre">Sobre</Link><Link href="/formacao">Formação</Link><Link href="/depoimentos">Depoimentos</Link><Link href="/contato">Contato</Link><Link className="languageSwitch" href="/en/contact">EN</Link></nav>
    </header>
    <section className="contactPage">
      <div className="contactPageIntro"><h1>Vamos conversar?</h1><p>Escolha como prefere entrar em contato.</p></div>
      <div className="contactOptions">
        <a className="contactOption" href="mailto:rafaaranteswork@gmail.com"><span className="contactIcon"><EnvelopeIcon/></span><h2>E-mail</h2><span>rafaaranteswork@gmail.com</span><strong className="contactCta">Escrever mensagem ↗</strong></a>
        <a className="contactOption" href="https://wa.me/5521998406836" target="_blank" rel="noreferrer"><span className="contactIcon"><WhatsAppIcon/></span><h2>WhatsApp</h2><span>+55 21 99840-6836</span><strong className="contactCta">Iniciar conversa ↗</strong></a>
      </div>
    </section>
    <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/">Voltar ao início ↑</Link></footer>
  </main>;
}
