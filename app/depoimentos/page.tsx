import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Depoimentos — Rafaela Arantes",
  description: "Depoimentos e avaliações de clientes que trabalharam com Rafaela Arantes.",
};

const testimonials = [
  { name:"Anderson Glitz", quote:"Rafaela Arantes é uma excelente free. Atendeu a demanda antes do prazo final. Mostrou-se muito comprometida com a ideia e projeto. Super solícita e atenciosa. Precisa e muito capacitada. Recomendo o seu trabalho a todos que necessitam.", url:"https://www.workana.com/e/81d5c517a35449d394156e37c12e277f" },
  { name:"Leticia", project:"Canacaju", quote:"Muito competente, responsável, dedicada. Disponível em tempo integral. Gentil e muito atenciosa. Trabalho perfeito. Recomendo muito. Merece um elogio.", url:"https://www.workana.com/e/5d4732fff30f61ab914356a46500015a" },
  { name:"Marcelo Leite", quote:"Rafaela é uma profissional comprometida e muito paciente, cumpriu todos os requisitos solicitados e entregou o trabalho antes do tempo previsto. Fantástica profissional, recomendamos muito!", url:"https://www.workana.com/e/10c3c8fceaae5a52b951aeccc58a7143" },
  { name:"Larissa", quote:"Profissional acima da média. Pontual, aberta a melhorias dentro do projeto, e comunicativa. Parabéns pela condução e qualidade do trabalho.", url:"https://www.workana.com/e/d9163250b6f6d713f1acdac86b7f85df" },
  { name:"Fernand Stallone", project:"Identidade visual", quote:"Recomendo demais a Rafaela e seu trabalho, bem aberta às minhas modificações, muito ágil também — me entregou antes do prazo — e com certeza voltarei a contratar seus serviços novamente.", url:"https://www.workana.com/e/0e53e8c63c5673dd7ba3ec85b9cab5d3" },
  { name:"Camila Costa", project:"Ensinar Transforma", quote:"Profissional excelente! Me atendeu de forma rápida e tirou minhas dúvidas, além de executar o projeto como gostaria." },
  { name:"Narayane", quote:"Super recomendo. Muito pontual. Amei o trabalho executado pela Rafaela.", url:"https://www.workana.com/e/7900df6cb4ab4f2047ab82144b4f5e7a" },
  { name:"Mauricio Schiaveto", quote:"Excelente profissional, cumpriu com o combinado. Recomendo seu trabalho.", url:"https://www.workana.com/e/380c0670c723d1bdf6188834fd496fb2" },
  { name:"Elielton Fucks", quote:"Super atenciosa e comprometida com o trabalho.", url:"https://www.workana.com/e/0ca6ede2fc9fb36fc30d29114f834eaf" },
  { name:"Pablo Penna", quote:"Muito boa, material bastante completo e detalhado.", url:"https://www.workana.com/e/7d59681c1738f1d31b09fdccce5dfcb0" },
  { name:"Oriane Thaler", quote:"Trabalho muito bom, foi entregando o projeto aos poucos conforme necessidade até finalizar.", url:"https://www.workana.com/e/53530aef67a9f7d56c2534bce18e6619" },
  { name:"Kelly Aparecida de Andrade Silva", quote:"Muito bom o trabalho da Rafaela.", url:"https://www.workana.com/e/c36f8a864c17ee4553aa6d45d558d3cb" },
  { name:"Nathan Eugenio", quote:"Boa comunicação, recomendo.", url:"https://www.workana.com/e/8a20138d16673d5495969bca3e9d4573" },
  { name:"Felipe Augusto", project:"Aiurotrek", quote:"O projeto ficou do jeito que eu imaginava, conseguiu traduzir exatamente minhas ideias e o que queria transmitir. A forma que colocou as informações ficou clara e com a estética que eu buscava. Sou muito detalhista e esse projeto me surpreendeu positivamente. Conto com você para projetos futuros!" },
];

export default function TestimonialsPage() {
  return <main>
    <header className="siteHeader">
      <Link className="wordmark" href="/">Rafaela Arantes</Link>
      <nav aria-label="Navegação principal"><Link href="/">Início</Link><Link href="/#projetos">Projetos</Link><Link href="/#sobre">Sobre</Link><a href="mailto:rafaela.arantes.rj@gmail.com">Contato</a><Link className="languageSwitch" href="/en/testimonials">EN</Link></nav>
    </header>
    <section className="pageHero">
      <p className="eyebrow">Depoimentos de clientes</p>
      <h1>Experiências reais, contadas por quem confiou no meu trabalho.</h1>
      <p>Todos os depoimentos reunidos em um só lugar. Quando disponível, você pode abrir a avaliação original na Workana.</p>
    </section>
    <section className="allTestimonials">
      {testimonials.map((item, index) => <article key={item.name}>
        <span className="testimonialNumber">{String(index + 1).padStart(2, "0")}</span>
        <blockquote>“{item.quote}”</blockquote>
        <div className="testimonialPerson">
          <div><strong>{item.name}</strong>{item.project && <span>{item.project}</span>}</div>
          {item.url ? <a href={item.url} target="_blank" rel="noreferrer">Ver avaliação original ↗</a> : <span className="direct">Depoimento recebido diretamente</span>}
        </div>
      </article>)}
    </section>
    <section className="contactClean compactContact"><p className="eyebrow">Seu projeto pode ser o próximo</p><h2>Vamos trabalhar juntos?</h2><a href="mailto:rafaela.arantes.rj@gmail.com">Entrar em contato ↗</a></section>
    <footer className="siteFooter"><span>Rafaela Arantes © 2026</span><Link href="/">Voltar ao início ↑</Link></footer>
  </main>;
}
