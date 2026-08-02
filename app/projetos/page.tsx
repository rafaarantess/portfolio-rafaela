import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../projects";

export const metadata: Metadata = { title:"Projetos — Rafaela Arantes", description:"Cases e projetos selecionados de marca, design editorial, conteúdo e comunicação digital." };

export default function ProjectsPage(){return <main>
  <header className="siteHeader"><Link className="wordmark" href="/">Rafaela Arantes</Link><nav><Link href="/">Início</Link><Link href="/depoimentos">Depoimentos</Link><a href="mailto:rafaela.arantes.rj@gmail.com">Contato</a></nav></header>
  <section className="pageHero projectsHero"><p className="eyebrow">Portfólio</p><h1>Projetos que conectam estratégia, clareza e expressão visual.</h1><p>Explore cases completos e trabalhos selecionados. Clique em qualquer projeto para ver a arte e conhecer o raciocínio por trás da entrega.</p></section>
  <section className="projectsArchive">
    {projects.map((project,index)=><Link className="archiveCard" href={`/projetos/${project.slug}`} key={project.slug}>
      <div className="archiveImage"><img src={project.cover} alt={`Capa do projeto ${project.title}`}/><span>Ver projeto ↗</span></div>
      <div className="archiveInfo"><span>{String(index+1).padStart(2,"0")} · {project.category}</span><h2>{project.title}</h2><p>{project.summary}</p><small>{project.year}</small></div>
    </Link>)}
  </section>
  <section className="contactClean compactContact"><p className="eyebrow">Tem um projeto em mente?</p><h2>Vamos construir algo que faça sentido.</h2><a href="mailto:rafaela.arantes.rj@gmail.com">Entrar em contato ↗</a></section>
  <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/">Voltar ao início ↑</Link></footer>
</main>}
