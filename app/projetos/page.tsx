import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../projects";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
export const metadata: Metadata = { title:"Projetos — Rafaela Arantes", description:"Cases de marca, design editorial, conteúdo e comunicação digital." };
export default function ProjectsPage(){return <main><SiteHeader/><section className="pageHero projectsHero"><p className="eyebrow">Portfólio completo</p><h1>Projetos feitos para contextos reais.</h1><p>Identidade, conteúdo, materiais editoriais e comunicação digital apresentados com clareza e sem distrações.</p></section><section className="projectMasonry portfolioGrid">{projects.map(project=><Link className="masonryTile" href={`/projetos/${project.slug}`} key={project.slug}>{project.coverKind==="pdf"?<iframe src={`${project.cover}#page=1&view=Fit&zoom=page-fit&toolbar=0`} title={`Prévia de ${project.title}`} tabIndex={-1}/>:<img src={project.cover} alt={`Capa do projeto ${project.title}`}/>}<span><strong>{project.title}</strong><small>{project.category}</small><b>↗</b></span></Link>)}</section><SiteFooter/></main>}
