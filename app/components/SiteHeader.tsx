"use client";

import Link from "next/link";
import { useState } from "react";
import { BriefcaseIcon, EducationIcon, MailIcon, MenuIcon, MessageIcon, UserIcon } from "./icons";

export function SiteHeader({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const [open, setOpen] = useState(false);
  const en = locale === "en";
  const base = en ? "/en" : "";
  const items = [
    [en ? "Projects" : "Projetos", `${base}/${en ? "projects" : "projetos"}`, BriefcaseIcon],
    [en ? "About" : "Sobre", `${base}/#${en ? "about" : "sobre"}`, UserIcon],
    [en ? "Education" : "Formação", `${base}/${en ? "education" : "formacao"}`, EducationIcon],
    [en ? "Testimonials" : "Depoimentos", `${base}/${en ? "testimonials" : "depoimentos"}`, MessageIcon],
    [en ? "Contact" : "Contato", `${base}/${en ? "contact" : "contato"}`, MailIcon],
  ] as const;
  return <header className="premiumHeader">
    <Link className="premiumBrand" href={base || "/"} aria-label={en ? "Home" : "Início"}>
      <span className="monogram"><i>R</i><b>A</b></span><span>Rafaela Arantes</span>
    </Link>
    <nav className={open ? "premiumNav open" : "premiumNav"} aria-label={en ? "Main navigation" : "Navegação principal"}>
      {items.map(([label, href, Icon]) => <Link key={label} href={href} onClick={() => setOpen(false)}><Icon/>{label}</Link>)}
      <Link className="localeButton" href={en ? "/" : "/en"}>{en ? "PT" : "EN"}</Link>
      <button data-menu-toggle className="menuButton" aria-label={en ? "Open menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}><MenuIcon/></button>
    </nav>
  </header>;
}
