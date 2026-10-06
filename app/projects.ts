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
    images:["/cases/aiuruotrek/brochure-front.png","/cases/aiuruotrek/brochure-open.png","/cases/aiuruotrek/folder.png"],
    testimonial:{quote:"Conseguiu traduzir exatamente minhas ideias. A forma que colocou as informações ficou clara e com a estética que eu buscava.",name:"Felipe Augusto · Aiurotrek"}
  },
  {
    slug:"pendulum-web", title:"Pendulum — Banners para website", category:"Campanha digital para website", year:"2025", featured:true,
    summary:"Uma campanha adaptada para desktop e celular com impacto e leitura clara.",
    challenge:"Manter a força da campanha e a leitura das ofertas em formatos digitais com proporções diferentes.",
    role:"Design das peças e adaptação responsiva da campanha. O site e a identidade da marca não fazem parte do escopo.",
    deliverables:["Aplicação no website","Banner desktop","Banner mobile"], cover:"/cases/pendulum/computer.png",
    images:["/cases/pendulum/computer.png","/cases/pendulum/desktop.png","/cases/pendulum/mobile.png"]
  },
  {
    slug:"pendulum-instagram", title:"Pendulum — Instagram", category:"Conteúdo para redes sociais", year:"2025", featured:true,
    summary:"Direção visual sofisticada para a presença da marca no Instagram.",
    challenge:"Traduzir a campanha promocional para uma peça social clara, desejável e coerente com a marca.",
    role:"Design da peça e adaptação da campanha para Instagram.",
    deliverables:["Peça para Instagram","Adaptação da campanha"], cover:"/projects/pendulum-social.png",
    images:["/projects/pendulum-social.png","/cases/pendulum/instagram.png"]
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
  {
    slug:"doctomatic", title:"Doctomatic", category:"Social media", year:"2023",
    summary:"Conteúdo visual em espanhol para apresentar uma plataforma de monitoramento remoto de pacientes.",
    challenge:"Traduzir funcionalidades de tecnologia em saúde em peças claras, acessíveis e coerentes com a identidade visual da marca.",
    role:"Design das peças, composição visual e organização do conteúdo para redes sociais.",
    deliverables:["Posts institucionais","Conteúdo informativo","Peça sazonal","Apresentação de funcionalidades"], cover:"/projects/doctomatic.png",
    images:["/projects/doctomatic.png"]
  },
  {
    slug:"biodose-natural", title:"Biodose Natural", category:"Conteúdo para redes sociais", year:"2026", featured:true,
    summary:"Um sistema de conteúdo que apresenta produtos naturais com clareza, consistência e apelo visual.",
    challenge:"Organizar benefícios, ingredientes e contextos de uso em uma presença social informativa, leve e reconhecível.",
    role:"Direção visual, composição, hierarquia de conteúdo e design das peças para Instagram.",
    deliverables:["Direção visual","Grid para Instagram","Posts educativos","Apresentação de produtos"],
    cover:"/projects/biodose-natural.png", images:["/projects/biodose-natural.png"]
  },
  {
    slug:"comunicacao-delivery", title:"Comunicação Delivery", category:"Conteúdo para redes sociais", year:"2026", featured:true,
    summary:"Comunicação direta e dinâmica para um serviço de entregas ágil, seguro e próximo.",
    challenge:"Transformar os diferenciais do serviço em uma sequência visual fácil de entender e adequada ao ritmo das redes sociais.",
    role:"Conceito visual, organização das mensagens, composição e design da campanha social.",
    deliverables:["Campanha para Instagram","Sistema de posts","Conteúdo informativo","Chamadas para conversão"],
    cover:"/projects/comunicacao-delivery.png", images:["/projects/comunicacao-delivery.png"]
  },
  {
    slug:"ensinar-transforma", title:"Ensinar Transforma", category:"Identidade visual", year:"2025", featured:false,
    summary:"Uma identidade acessível e coerente para uma iniciativa ligada à educação.",
    challenge:"Criar uma linguagem visual acolhedora, reconhecível e simples de aplicar em diferentes pontos de contato.",
    role:"Conceito, identidade visual, paleta, tipografia e aplicações.",
    deliverables:["Logo e variações","Paleta cromática","Tipografia","Aplicações da marca"], cover:"/cases/ensinar-transforma/identidade.pdf", coverKind:"pdf",
    documents:[{label:"Ver apresentação da identidade",url:"/cases/ensinar-transforma/identidade.pdf"}],
    testimonial:{quote:"Profissional excelente! Me atendeu de forma rápida, tirou minhas dúvidas e executou o projeto como eu gostaria.",name:"Camila Costa"}
  },
];

export const getProject = (slug: string) => projects.find(project => project.slug === slug);
