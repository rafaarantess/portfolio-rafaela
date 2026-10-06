import Link from "next/link";
import { projects } from "./projects";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
const names=["ANDERSON GLITZ","LETICIA · CANACAJU","MARCELO LEITE","LARISSA"];
const services=[
  ["Marca & identidade","Posicionamento visual, sistemas de identidade e direção criativa."],
  ["Conteúdo & social","Estratégia, campanhas e conteúdo que traduzem a voz da marca."],
  ["Experiências digitais","Materiais editoriais, landing pages e comunicação para o digital."],
];
export default function Home(){return <main><SiteHeader/>
  <section className="premiumHero"><div><p className="eyebrow">Estratégia · identidade · conteúdo</p><h1>Sou <em>Rafaela Arantes.</em></h1><p>Ajudo marcas e profissionais a transformarem ideias em identidades e experiências digitais claras, estratégicas e memoráveis.</p><div className="heroActions"><Link className="button" href="/projetos">Ver meu trabalho →</Link><a className="button secondaryButton" href="#sobre">Sobre mim</a></div></div><div className="heroPortrait"><img src="/rafaela-arantes.png" alt="Retrato de Rafaela Arantes"/></div></section>
  <section className="section" id="projetos"><div className="sectionHeading"><p className="eyebrow">Trabalhos selecionados</p><h2>Projetos que transformam intenção em presença.</h2><Link className="textLink projectsCta" href="/projetos">Ver todos →</Link></div><div className="projectMasonry homeMasonry">{projects.filter(x=>x.featured).map(project=><Link className="masonryTile" href={`/projetos/${project.slug}`} key={project.slug}><img src={project.cover} alt={`Projeto ${project.title}`}/><span><strong>{project.title}</strong><small>{project.category}</small><b>↗</b></span></Link>)}</div></section>
  <section className="section aboutPremium textureIvory" id="sobre"><div><p className="eyebrow">Sobre mim</p><img src="/rafaela-arantes.png" alt="Rafaela Arantes"/></div><div><h2>Um olhar que une comportamento, marca e estética.</h2><p>Minha formação em Marketing Digital e Psicologia amplia meu olhar sobre percepção e comunicação. Cada projeto começa pela compreensão do que a marca precisa expressar — antes de decidir como ela deve parecer.</p><p>Desde 2022, atuo entre projetos independentes e ambientes institucionais, conectando design, conteúdo e estratégia em português e inglês.</p><Link className="button" href="/formacao">Minha trajetória →</Link></div></section>
  <section className="servicesEditorial"><header><p className="eyebrow">Como posso ajudar</p><h2>Uma visão integrada para construir presença.</h2></header><div>{services.map((service,index)=><article className="serviceRow" key={service[0]}><span>{String(index+1).padStart(2,"0")}</span><h3>{service[0]}</h3><p>{service[1]}</p></article>)}</div></section>
  <section className="testimonialShowcase"><div><p className="eyebrow">Depoimentos</p><h2>Palavras de quem viveu o processo.</h2>{names.map(x=><span key={x}>{x}</span>)}<Link href="/depoimentos">Ver todos os depoimentos →</Link></div><blockquote>“Rafaela Arantes é uma excelente profissional. Atendeu a demanda antes do prazo final, mostrou-se muito comprometida e atenciosa.”<small>ANDERSON GLITZ</small></blockquote></section>
  <section className="contactClean"><p className="eyebrow">Um novo projeto</p><h2>Vamos criar algo que represente você ou sua marca de verdade.</h2><a href="mailto:rafaaranteswork@gmail.com">rafaaranteswork@gmail.com ↗</a></section><SiteFooter/>
</main>}
