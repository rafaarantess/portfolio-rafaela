import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Rafaela Arantes",
  description: "Contact Rafaela Arantes by email or WhatsApp.",
};

function EnvelopeIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="13" width="52" height="38" rx="2"/><path d="m8 17 24 20 24-20"/></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M31.9 7.5a24.4 24.4 0 0 0-20.8 37.1L7.6 57.5l13.2-3.5a24.4 24.4 0 1 0 11.1-46.5Z"/><path d="M22 19c2 13 10 21 23 23l4-6-8-4-3 4c-5-2-8-5-10-10l4-3-4-8-6 4Z"/></svg>;
}

export default function Contact() {
  return <main>
    <header className="siteHeader">
      <Link className="wordmark" href="/en">Rafaela Arantes</Link>
      <nav aria-label="Main navigation"><Link href="/en/projects">Projects</Link><Link href="/en/#about">About</Link><Link href="/en/education">Education</Link><Link href="/en/testimonials">Testimonials</Link><Link href="/en/contact">Contact</Link><Link className="languageSwitch" href="/contato">PT</Link></nav>
    </header>
    <section className="contactPage">
      <div className="contactPageIntro"><h1>Let’s talk.</h1><p>Choose how you would prefer to get in touch.</p></div>
      <div className="contactOptions">
        <a className="contactOption" href="mailto:rafaaranteswork@gmail.com"><span className="contactIcon"><EnvelopeIcon/></span><h2>Email</h2><span>rafaaranteswork@gmail.com</span><strong className="contactCta">Write a message ↗</strong></a>
        <a className="contactOption" href="https://wa.me/5521998406836" target="_blank" rel="noreferrer"><span className="contactIcon"><WhatsAppIcon/></span><h2>WhatsApp</h2><span>+55 21 99840-6836</span><strong className="contactCta">Start a conversation ↗</strong></a>
      </div>
    </section>
    <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/en">Back to home ↑</Link></footer>
  </main>;
}
