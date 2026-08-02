import Link from "next/link";
import { projects } from "./projects";

const previewTestimonials = [
  { quote:"Muito competente, responsável e dedicada. Trabalho perfeito. Recomendo muito.", name:"Leticia", project:"Canacaju" },
  { quote:"Profissional acima da média. Pontual, aberta a melhorias e comunicativa.", name:"Larissa", project:"Cliente Workana" },
  { quote:"Cumpriu todos os requisitos e entregou o trabalho antes do tempo previsto.", name:"Marcelo Leite", project:"Cliente Workana" },
];

function Header() {
  return <header className="siteHeader">
    <Link className="wordmark" href="/">Rafaela Arantes</Link>
    <nav aria-label="Navegação principal">
      <Link href="/projetos">Projetos</Link>
      <a href="#sobre">Sobre</a>
      <Link href="/formacao">Formação</Link>
      <Link href="/depoimentos">Depoimentos</Link>
      <a href="mailto:rafaela.arantes.rj@gmail.com">Contato</a>
    </nav>
  </header>;
}

export default function Home() {
  return <main>
    <Header />

    <section className="heroClean">
      <p className="eyebrow">Estratégia de marca · design · conteúdo</p>
      <h1>Transformo ideias em marcas claras, relevantes e memoráveis.</h1>
      <div className="heroIntro">
        <p>Estratégia, design e conteúdo para marcas que querem comunicar com clareza e personalidade.</p>
        <a className="button" href="#projetos">Conheça meu trabalho</a>
      </div>
    </section>

    <section className="section" id="projetos">
      <div className="sectionHeading">
        <p className="eyebrow">Projetos selecionados</p>
        <h2>Trabalho com intenção, da estratégia à entrega.</h2>
      </div>
      <div className="projectGrid">
        {projects.filter(project=>project.featured).map((project, index) => <Link className="projectCard" href={`/projetos/${project.slug}`} key={project.title}>
          <div className="projectVisual">{project.coverKind==="pdf"?<iframe src={`${project.cover}#page=1&view=Fit&zoom=page-fit&toolbar=0`} title={`Prévia do projeto ${project.title}`} tabIndex={-1}/>:<img src={project.cover} alt={`Projeto ${project.title}`}/>}<span className="viewProject">Ver case ↗</span></div>
          <div className="projectInfo">
            <span>{String(index + 1).padStart(2, "0")} · {project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
        </Link>)}
      </div>
      <div className="sectionAction"><Link className="button" href="/projetos">Ver todos os 7 projetos</Link></div>
    </section>

    <section className="section servicesClean">
      <div className="sectionHeading">
        <p className="eyebrow">Como posso ajudar</p>
        <h2>Uma visão integrada para construir presença.</h2>
      </div>
      <div className="simpleRows">
        <article><span>01</span><h3>Marca & identidade</h3><p>Posicionamento visual, sistemas de identidade e direção criativa.</p></article>
        <article><span>02</span><h3>Conteúdo & social</h3><p>Estratégia, campanhas e conteúdo que traduzem a voz da marca.</p></article>
        <article><span>03</span><h3>Experiências digitais</h3><p>Materiais editoriais, landing pages e comunicação para o digital.</p></article>
      </div>
    </section>

    <section className="section aboutClean" id="sobre">
      <div>
        <p className="eyebrow">Sobre mim</p>
        <h2>Estratégia com sensibilidade. Criação com método.</h2>
      </div>
      <div className="bodyCopy">
        <p>Sou Rafaela Arantes, profissional de marca e presença digital. Minha formação em Marketing Digital e Psicologia me ajuda a enxergar marcas como sistemas de percepção, comunicação e experiência — não apenas como estética.</p>
        <p>Desde 2022, atuo entre projetos independentes e ambientes institucionais, conectando design, conteúdo e estratégia em português e inglês.</p>
        <div className="aboutLinks"><Link className="textLink" href="/formacao">Ver formação & credenciais ↗</Link><a className="textLink" href="https://linkedin.com/in/rafaelaamelo">Ver trajetória no LinkedIn ↗</a></div>
      </div>
    </section>

    <section className="section testimonialPreview">
      <div className="sectionHeading testimonialHeading">
        <p className="eyebrow">Depoimentos</p>
        <h2>Confiança construída em cada projeto.</h2>
        <p>Feedbacks reais de clientes, com links para as avaliações originais.</p>
      </div>
      <div className="previewGrid">
        {previewTestimonials.map(item => <article key={item.name}>
          <blockquote>“{item.quote}”</blockquote>
          <footer><strong>{item.name}</strong><span>{item.project}</span></footer>
        </article>)}
      </div>
      <Link className="button buttonLight" href="/depoimentos">Ver todos os 14 depoimentos</Link>
    </section>

    <section className="contactClean">
      <p className="eyebrow">Vamos conversar</p>
      <h2>Tem uma ideia ou oportunidade em mente?</h2>
      <a href="mailto:rafaela.arantes.rj@gmail.com">rafaela.arantes.rj@gmail.com ↗</a>
    </section>

    <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><span>Marca · Design · Conteúdo</span></footer>
  </main>;
}
