import type { Metadata } from "next";
import Link from "next/link";
import { projectsEn } from "../../projects-en";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
export const metadata: Metadata = { title:"Projects — Rafaela Arantes", description:"Selected branding, editorial, content and digital communication work." };
export default function ProjectsPage(){return <main><SiteHeader locale="en"/><section className="pageHero projectsHero"><p className="eyebrow">Complete portfolio</p><h1>Projects made for real contexts.</h1><p>Identity, content, editorial assets and digital communication presented clearly and without distraction.</p></section><section className="projectMasonry">{projectsEn.map(project=><Link className="masonryTile" href={`/en/projects/${project.slug}`} key={project.slug}>{project.coverKind==="pdf"?<iframe src={`${project.cover}#page=1&view=Fit&zoom=page-fit&toolbar=0`} title={`${project.title} preview`} tabIndex={-1}/>:<img src={project.cover} alt={`${project.title} project cover`}/>}<span><strong>{project.title}</strong><small>{project.category}</small><b>↗</b></span></Link>)}</section><SiteFooter locale="en"/></main>}
