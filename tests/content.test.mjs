import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=(p)=>readFileSync(new URL(`../${p}`,import.meta.url),"utf8");
test("home uses approved hero, portrait, masonry and premium testimonials",()=>{
  const page=read("app/page.tsx");
  assert.match(page,/Sou <em>Rafaela Arantes/);
  assert.match(page,/rafaela-arantes\.png/);
  assert.match(page,/projectMasonry/);
  assert.match(page,/testimonialShowcase/);
  assert.match(page,/Ver todos os depoimentos/);
});
test("home presents services and the bilingual 2022 introduction",()=>{
  const page=read("app/page.tsx");
  const pageEn=read("app/en/page.tsx");
  const css=read("app/globals.css");

  assert.match(page,/servicesEditorial/);
  assert.match(page,/Como posso ajudar/);
  assert.match(page,/Marca & identidade/);
  assert.match(page,/Conteúdo & social/);
  assert.match(page,/Experiências digitais/);
  assert.match(page,/Desde 2022, atuo entre projetos independentes e ambientes institucionais/);
  assert.match(pageEn,/servicesEditorial/);
  assert.match(pageEn,/How I can help/);
  assert.match(pageEn,/Since 2022, I have worked across independent projects and institutional environments/);
  assert.match(css,/\.servicesEditorial/);
  assert.match(css,/@media\(max-width:600px\)\{[^\n]*\.serviceRow\{/);
});
test("testimonial pages preserve all fourteen real testimonials",()=>{
  assert.match(read("app/depoimentos/page.tsx"),/Felipe Augusto/);
  assert.match(read("app/en/testimonials/page.tsx"),/Felipe Augusto/);
});
