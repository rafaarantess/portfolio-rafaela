import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../projects";

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=getProject(slug);return project?{title:`${project.title} — Rafaela Arantes`,description:project.summary}:{}}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=getProject(slug); if(!project)notFound();
  const currentIndex=projects.findIndex(item=>item.slug===slug); const next=projects[(currentIndex+1)%projects.length];
  return <main>
    <header className="siteHeader"><Link className="wordmark" href="/">Rafaela Arantes</Link><nav><Link href="/projetos">Todos os projetos</Link><Link href="/depoimentos">Depoimentos</Link><a href="mailto:rafaela.arantes.rj@gmail.com">Contato</a></nav></header>
    <section className="caseHero"><div><p className="eyebrow">{project.category} · {project.year}</p><h1>{project.title}</h1></div><p>{project.summary}</p></section>
    <div className="caseCover">{project.coverKind==="pdf"?<iframe src={`${project.cover}#page=1&view=FitH&toolbar=0`} title={`Apresentação do projeto ${project.title}`}/>:<img src={project.cover} alt={`Projeto ${project.title}`}/>}</div>
    <section className="caseOverview"><div><p className="eyebrow">O projeto</p><h2>Clareza antes da forma.</h2></div><div className="caseText"><h3>Desafio</h3><p>{project.challenge}</p><h3>Meu papel</h3><p>{project.role}</p></div><div className="deliverables"><h3>Entregas</h3>{project.deliverables.map(item=><span key={item}>{item}</span>)}</div></section>
    {project.documents?.map(doc=><section className="documentShowcase" key={doc.url}><div><p className="eyebrow">Visualização do trabalho</p><h2>{doc.label}</h2><a className="button" href={doc.url} target="_blank" rel="noreferrer">Abrir em tela cheia ↗</a></div><iframe src={`${doc.url}#view=FitH`} title={doc.label}/></section>)}
    {project.images&&<section className={`caseGallery ${project.images.length===1?"singleGallery":""}`}>{project.images.map((image,index)=><a href={image} target="_blank" rel="noreferrer" key={image}><img src={image} alt={`${project.title}, visual ${index+1}`}/><span>Ampliar ↗</span></a>)}</section>}
    {project.testimonial&&<section className="caseQuote"><p className="eyebrow">Depoimento</p><blockquote>“{project.testimonial.quote}”</blockquote><span>{project.testimonial.name}</span></section>}
    <Link className="nextProject" href={`/projetos/${next.slug}`}><span>Próximo projeto</span><strong>{next.title} ↗</strong></Link>
    <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/projetos">Todos os projetos ↑</Link></footer>
  </main>
}
