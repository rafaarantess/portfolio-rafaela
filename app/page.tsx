const projects = [
  { n:"01", title:"Canacaju", tag:"Design editorial", text:"Direção visual e diagramação de catálogos para três coleções de moda praia.", image:"/projects/canacaju.png", tone:"coral" },
  { n:"02", title:"Aiurotrek", tag:"Comunicação de marca", text:"Um folder de expedição que transforma informação complexa em uma experiência clara.", image:"/projects/aiurotrek.png", tone:"blue" },
  { n:"03", title:"Micaela Castaldi", tag:"Identidade visual", text:"Um sistema de marca sensível e expressivo para uma profissional de Psicologia.", image:"/projects/micaela.png", tone:"lime" },
  { n:"04", title:"Narayane Martins", tag:"Design de proposta", text:"Apresentação comercial com linguagem visual coerente, elegante e direta.", image:"/projects/narayane.png", tone:"violet" },
];

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="logo" href="#top">RA<span>®</span></a>
      <div className="navCenter"><a href="#work">Projetos</a><a href="#about">Sobre</a><a href="#services">Serviços</a></div>
      <a className="navCta" href="mailto:rafaela.arantes.rj@gmail.com">Vamos conversar ↗</a>
    </nav>

    <section className="hero" id="top">
      <div className="heroTop"><span>Estratégia de marca</span><span>Design & conteúdo</span><span>Rio de Janeiro · PT/EN</span></div>
      <h1>Marcas com<br/><span>clareza,</span> presença<br/>e personalidade.</h1>
      <div className="heroBottom">
        <p>Estratégia, identidade e comunicação digital reunidas para transformar boas ideias em marcas que as pessoas entendem e lembram.</p>
        <a className="roundButton" href="#work">Explorar projetos <b>↓</b></a>
      </div>
      <div className="orb"><span>Brand<br/>thinking</span></div>
    </section>

    <div className="ticker"><div>MARCA ✦ CONTEÚDO ✦ DESIGN ✦ EXPERIÊNCIA DIGITAL ✦ COMPORTAMENTO ✦ MARCA ✦ CONTEÚDO ✦ DESIGN ✦</div></div>

    <section className="work" id="work">
      <header className="blockTitle"><span>01 / Projetos selecionados</span><h2>Trabalho que<br/>fala por si.</h2><p>Uma seleção de projetos que conecta pensamento estratégico, cuidado visual e comunicação clara.</p></header>
      <div className="projectList">
        {projects.map(p=><article className={`project ${p.tone}`} key={p.title}>
          <div className="projectMeta"><span>{p.n}</span><span>{p.tag}</span></div>
          <div className="projectImage"><img src={p.image} alt={`Projeto ${p.title}`}/></div>
          <div className="projectCopy"><h3>{p.title}</h3><p>{p.text}</p><span className="arrow">↗</span></div>
        </article>)}
      </div>
    </section>

    <section className="numbers">
      <div><strong>30+</strong><span>clientes atendidos</span></div>
      <div><strong>14</strong><span>depoimentos</span></div>
      <div><strong>04</strong><span>anos de experiência</span></div>
      <div><strong>PT/EN</strong><span>comunicação bilíngue</span></div>
    </section>

    <section className="services" id="services">
      <header><span>02 / O que eu faço</span><h2>Da ideia ao ponto<br/>de contato.</h2></header>
      <div className="serviceRows">
        <div><b>01</b><h3>Marca & identidade</h3><p>Posicionamento visual, sistemas de identidade e direção criativa.</p><i>↗</i></div>
        <div><b>02</b><h3>Conteúdo & social</h3><p>Estratégia, campanhas e conteúdo que traduzem a voz da marca.</p><i>↗</i></div>
        <div><b>03</b><h3>Experiências digitais</h3><p>Materiais editoriais, landing pages e comunicação para o digital.</p><i>↗</i></div>
      </div>
    </section>

    <section className="about" id="about">
      <span className="sectionTag">03 / Sobre</span>
      <div className="aboutLead"><p>Marketing encontra Psicologia.</p><h2>Estratégia com<br/><em>sensibilidade.</em><br/>Criação com método.</h2></div>
      <div className="aboutText">
        <p>Sou Rafaela Arantes, profissional de marca e presença digital. Minha formação em Marketing Digital e Psicologia me ajuda a enxergar marcas como sistemas de percepção, comunicação e experiência — não apenas como estética.</p>
        <p>Desde 2022, atuo entre projetos independentes e ambientes institucionais, conectando design, conteúdo e estratégia em português e inglês.</p>
        <a href="https://linkedin.com/in/rafaelaamelo">Ver trajetória no LinkedIn ↗</a>
      </div>
    </section>

    <section className="quote">
      <span>Depoimento · Aiurotrek</span>
      <blockquote>“Conseguiu traduzir exatamente minhas ideias e o que eu queria transmitir. O projeto me surpreendeu positivamente.”</blockquote>
      <p>Felipe Augusto — cliente</p>
    </section>

    <section className="contact" id="contact">
      <span>Tem uma ideia?</span><h2>Vamos dar<br/>forma a ela.</h2>
      <div><a href="mailto:rafaela.arantes.rj@gmail.com">rafaela.arantes.rj@gmail.com ↗</a><a href="https://linkedin.com/in/rafaelaamelo">LinkedIn ↗</a></div>
    </section>
    <footer><span>Rafaela Arantes © 2026</span><span>Marca · Design · Conteúdo</span><a href="#top">Voltar ao topo ↑</a></footer>
  </main>
}
