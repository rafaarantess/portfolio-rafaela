export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  role: string;
  deliverables: string[];
  cover: string;
  coverKind?: "image" | "pdf";
  images?: string[];
  documents?: { label: string; url: string }[];
  testimonial?: { quote: string; name: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug:"canacaju", title:"Canacaju", category:"Design editorial", year:"2024–2026", featured:true,
    summary:"Três temporadas traduzidas em catálogos claros, desejáveis e consistentes.",
    challenge:"Organizar coleções extensas de moda praia em materiais comerciais fáceis de consultar, preservando o desejo e a personalidade da marca.",
    role:"Direção visual, diagramação, hierarquia de informação e preparação dos catálogos.",
    deliverables:["Catálogo Summer 2024","Catálogo Summer 2025","Catálogo Summer 2026","Sistema editorial recorrente"],
    cover:"/projects/canacaju.png",
    images:["/projects/canacaju.png"],
    documents:[{label:"Ver amostra autorizada do catálogo",url:"/cases/canacaju/catalogo-2024.pdf"}],
    testimonial:{quote:"Muito competente, responsável e dedicada. Trabalho perfeito. Recomendo muito.",name:"Leticia · Canacaju"}
  },
  {
    slug:"aiurotrek", title:"Aiurotrek", category:"Comunicação de marca", year:"2026", featured:true,
    summary:"Informação complexa de uma expedição transformada em uma experiência clara.",
    challenge:"Estruturar roteiro, orientações e informações comerciais em um folder que fosse funcional e transmitisse a atmosfera da experiência.",
    role:"Interpretação do briefing, organização da informação, direção visual e diagramação.",
    deliverables:["Folder institucional","Hierarquia de conteúdo","Direção visual"], cover:"/projects/aiurotrek.png",
    images:["/projects/aiurotrek.png"],
    testimonial:{quote:"Conseguiu traduzir exatamente minhas ideias. A forma que colocou as informações ficou clara e com a estética que eu buscava.",name:"Felipe Augusto · Aiurotrek"}
  },
  {
    slug:"ensinar-transforma", title:"Ensinar Transforma", category:"Identidade visual", year:"2025", featured:true,
    summary:"Uma identidade acessível e coerente para uma iniciativa ligada à educação.",
    challenge:"Criar uma linguagem visual acolhedora, reconhecível e simples de aplicar em diferentes pontos de contato.",
    role:"Conceito, identidade visual, paleta, tipografia e aplicações.",
    deliverables:["Logo e variações","Paleta cromática","Tipografia","Aplicações da marca"], cover:"/cases/ensinar-transforma/identidade.pdf", coverKind:"pdf",
    documents:[{label:"Ver apresentação da identidade",url:"/cases/ensinar-transforma/identidade.pdf"}],
    testimonial:{quote:"Profissional excelente! Me atendeu de forma rápida, tirou minhas dúvidas e executou o projeto como eu gostaria.",name:"Camila Costa"}
  },
  {
    slug:"micaela-castaldi", title:"Micaela Castaldi", category:"Identidade visual", year:"2026", featured:true,
    summary:"Uma marca pessoal sensível e expressiva para uma profissional de Psicologia.",
    challenge:"Traduzir acolhimento e personalidade em um sistema visual profissional, sem recorrer aos clichês mais comuns da área.",
    role:"Estratégia visual, criação de identidade, paleta, tipografia e elementos gráficos.",
    deliverables:["Logo principal","Variações de marca","Paleta e tipografia","Elementos gráficos"], cover:"/projects/micaela.png",
    images:["/cases/micaela/identidade.png"]
  },
  {
    slug:"pendulum", title:"Pendulum", category:"Campanha multiformato", year:"2025",
    summary:"Um sistema de banners adaptado para desktop, mobile e Instagram.",
    challenge:"Manter a força da campanha e a leitura das ofertas em formatos com proporções e contextos diferentes.",
    role:"Design das peças e adaptação responsiva da campanha. O site e a identidade da marca não fazem parte do escopo.",
    deliverables:["Banner desktop","Banner mobile","Peça para Instagram"], cover:"/cases/pendulum/desktop.png",
    images:["/cases/pendulum/desktop.png","/cases/pendulum/mobile.png","/cases/pendulum/instagram.png"]
  },
  {
    slug:"narayane-martins", title:"Narayane Martins", category:"Design de proposta", year:"2025",
    summary:"Uma apresentação comercial direta, organizada e alinhada à imagem profissional.",
    challenge:"Transformar uma proposta de serviços em um material fácil de compreender e visualmente coerente.",
    role:"Direção visual e design da apresentação comercial.",
    deliverables:["Capa da proposta","Sistema editorial","Mockup de apresentação"], cover:"/projects/narayane.png",
    images:["/cases/narayane/mockup.png"],
    testimonial:{quote:"Super recomendo. Muito pontual. Amei o trabalho executado pela Rafaela.",name:"Narayane"}
  },
  {
    slug:"street-academia", title:"Street Academia", category:"Design promocional", year:"2025",
    summary:"Uma tabela de planos que organiza preços, condições e benefícios com leitura direta.",
    challenge:"Apresentar diferentes planos, taxas, horários e serviços em uma única peça promocional sem perder clareza nem impacto visual.",
    role:"Organização da informação, hierarquia visual, composição e design da tabela de preços.",
    deliverables:["Tabela de preços","Hierarquia de planos","Peça promocional"], cover:"/projects/street-academia.png",
    images:["/projects/street-academia.png"]
  },
];

export const getProject = (slug: string) => projects.find(project => project.slug === slug);
