const projects = [
  { title: "Canacaju", type: "Direção editorial · Moda", image: "/projects/canacaju.png", className: "wide" },
  { title: "Aiurotrek", type: "Design institucional · Turismo", image: "/projects/aiurotrek.png", className: "" },
  { title: "Micaela Castaldi", type: "Identidade visual · Marca pessoal", image: "/projects/micaela.png", className: "tall" },
  { title: "Narayane Martins", type: "Design de proposta · Consultoria", image: "/projects/narayane.png", className: "" },
];

const testimonials = [
  ["Conseguiu traduzir exatamente minhas ideias e o que queria transmitir.", "Felipe Augusto · Aiurotrek"],
  ["Muito competente, responsável e dedicada. Trabalho perfeito.", "Leticia · Canacaju"],
  ["Profissional acima da média. Pontual, comunicativa e aberta a melhorias.", "Larissa · Workana"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inicio">Rafaela Arantes</a>
        <div className="navlinks">
          <a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <p className="eyebrow">Estratégia de marca & presença digital</p>
        <h1>Ideias transformadas em marcas que <em>fazem sentido.</em></h1>
        <p className="intro">Uno identidade, conteúdo e experiência digital para construir marcas claras, coerentes e memoráveis — com uma abordagem criativa informada pela Psicologia.</p>
        <div className="actions"><a className="button" href="#projetos">Conheça os projetos</a><a className="textlink" href="#contato">Vamos conversar ↗</a></div>
        <span className="heroNumber">RA — 26</span>
      </section>

      <section className="proof">
        <span><strong>+30</strong> clientes atendidos</span>
        <span><strong>14</strong> depoimentos</span>
        <span><strong>PT · EN</strong> atuação profissional</span>
        <span><strong>2022—26</strong> trajetória em marketing</span>
      </section>

      <section className="section projects" id="projetos">
        <header className="sectionHeader"><div><p className="eyebrow">Trabalhos selecionados</p><h2>Projetos com intenção,<br/>clareza e personalidade.</h2></div><p>Uma seleção de identidades, projetos editoriais e materiais de comunicação construídos para diferentes marcas e momentos.</p></header>
        <div className="projectGrid">
          {projects.map((p, i) => <article className={`projectCard ${p.className}`} key={p.title}>
            <div className="imageWrap"><img src={p.image} alt={`Projeto ${p.title}`} /></div>
            <p className="index">0{i + 1}</p><h3>{p.title}</h3><p>{p.type}</p>
          </article>)}
        </div>
      </section>

      <section className="services" id="servicos">
        <p className="eyebrow">Como posso ajudar</p><h2>Uma visão integrada<br/>da sua presença de marca.</h2>
        <div className="serviceGrid">
          <div><b>01</b><h3>Marca & Identidade</h3><p>Posicionamento visual, identidade, direção criativa e materiais que dão consistência à marca.</p></div>
          <div><b>02</b><h3>Conteúdo & Comunicação</h3><p>Conteúdo estratégico, social media e campanhas que transformam mensagem em conexão.</p></div>
          <div><b>03</b><h3>Experiências Digitais</h3><p>Materiais editoriais, landing pages e pontos de contato pensados para informar e envolver.</p></div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div><p className="eyebrow">Sobre Rafaela</p><h2>Estratégia com sensibilidade. Criação com método.</h2></div>
        <div className="aboutCopy"><p>Sou formada em Marketing Digital e Psicologia. Essa combinação me ajuda a enxergar marcas para além da estética: como sistemas de percepção, comunicação e experiência.</p><p>Desde 2022, transito entre projetos independentes e ambientes institucionais, com experiência em design, conteúdo, social media e comunicação em português e inglês.</p><a className="textlink" href="https://linkedin.com/in/rafaelaamelo">Conheça minha trajetória ↗</a></div>
      </section>

      <section className="testimonials">
        <p className="eyebrow">O que dizem</p>
        <div className="quotes">{testimonials.map(([quote, name]) => <blockquote key={name}><p>“{quote}”</p><cite>{name}</cite></blockquote>)}</div>
      </section>

      <section className="contact" id="contato">
        <p className="eyebrow">Vamos conversar</p><h2>Uma marca mais clara<br/>começa por uma boa conversa.</h2>
        <p>Para projetos, parcerias ou oportunidades profissionais.</p>
        <div className="actions"><a className="button light" href="mailto:rafaela.arantes.rj@gmail.com">Enviar uma mensagem</a><a className="textlink lightText" href="https://linkedin.com/in/rafaelaamelo">LinkedIn ↗</a></div>
      </section>
      <footer><span>Rafaela Arantes Melo</span><span>Rio de Janeiro · Brasil</span><span>© 2026</span></footer>
    </main>
  );
}
