import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:"Formação & Credenciais — Rafaela Arantes",
  description:"Formação acadêmica, cursos e certificações de Rafaela Arantes em Psicologia, Marketing, Marca, Conteúdo e Experiência do Cliente.",
};

const education = [
  { title:"Bacharelado em Psicologia", institution:"Universidade Unigranrio", period:"2021 — 2025", logo:"/credentials/logos/unigranrio.jpg" },
  { title:"Marketing Digital", institution:"Universidade Veiga de Almeida", period:"2022 — 2025", logo:"/credentials/logos/uva.jpg" },
];

const credentials = [
  { title:"Marketing e vendas B2B: Fechando novos negócios", institution:"Universidade de São Paulo", date:"Março de 2025", logo:"/credentials/logos/usp.jpg", url:"/credentials/docs/usp-b2b.jpg" },
  { title:"English Certificate — C2 Proficient", institution:"EF SET", date:"Março de 2025", logo:"/credentials/logos/efset.jpg", url:"https://cert.efset.org/en/zPUoB1" },
  { title:"Foundations of Digital Marketing and E-commerce", institution:"Google", date:"Março de 2023", logo:"/credentials/logos/google.jpg", url:"/credentials/docs/google-marketing.jpg" },
  { title:"Branding Avançado: analisando a eficiência da sua marca", institution:"Conquer", date:"Agosto de 2023", logo:"/credentials/logos/conquer.jpg", url:"/credentials/docs/conquer-branding.jpg" },
  { title:"Customer Experience (CX)", institution:"Conquer", date:"Agosto de 2023", logo:"/credentials/logos/conquer.jpg", url:"/credentials/docs/conquer-cx.jpg" },
  { title:"Marketing Digital", institution:"Universidade de São Paulo", date:"Abril de 2022", logo:"/credentials/logos/usp.jpg", url:"/credentials/docs/usp-marketing-digital.jpeg" },
  { title:"Produto e Marca", institution:"FGV Online", date:"Formação complementar", logo:"/credentials/logos/fgv.jpg", url:"/credentials/docs/fgv-produto-marca.pdf" },
  { title:"Global Marketing: Building Iconic Brands", institution:"University of Illinois · Coursera", date:"Formação complementar", logo:"/credentials/logos/illinois.jpg", url:"/credentials/docs/illinois-global-marketing.pdf" },
];

export default function EducationPage(){return <main>
  <header className="siteHeader"><Link className="wordmark" href="/">Rafaela Arantes</Link><nav><Link href="/">Início</Link><Link href="/projetos">Projetos</Link><Link href="/depoimentos">Depoimentos</Link><a href="mailto:rafaela.arantes.rj@gmail.com">Contato</a><Link className="languageSwitch" href="/en/education">EN</Link></nav></header>

  <section className="pageHero educationHero"><p className="eyebrow">Formação & credenciais</p><h1>Repertório que conecta comportamento, estratégia e criação.</h1><p>Minha formação combina Psicologia e Marketing Digital, complementada por estudos em marca, negócios, experiência do cliente e comunicação.</p></section>

  <section className="educationSection">
    <header><p className="eyebrow">Formação acadêmica</p><span>Graduação</span></header>
    <div className="educationGrid">{education.map(item=><article key={item.title}>
      <img src={item.logo} alt={`Logo ${item.institution}`}/><div><h2>{item.title}</h2><p>{item.institution}</p><span>{item.period}</span></div>
    </article>)}</div>
  </section>

  <section className="credentialsSection">
    <header><p className="eyebrow">Cursos & certificações</p><span>{credentials.length} credenciais selecionadas</span></header>
    <div className="credentialRows">{credentials.map(item=><article key={item.title}>
      <img src={item.logo} alt={`Logo ${item.institution}`}/>
      <div className="credentialCopy"><h2>{item.title}</h2><p>{item.institution}</p><span>{item.date}</span></div>
      {item.url?<a href={item.url} target="_blank" rel="noreferrer">Exibir credencial ↗</a>:<span className="credentialStatus">Registrada no LinkedIn</span>}
    </article>)}</div>
  </section>

  <section className="contactClean compactContact"><p className="eyebrow">Além dos certificados</p><h2>Conheça como esse repertório aparece no trabalho.</h2><Link href="/projetos">Explorar projetos ↗</Link></section>
  <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/">Voltar ao início ↑</Link></footer>
</main>}
