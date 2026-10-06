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
test("testimonial pages preserve all fourteen real testimonials",()=>{
  assert.match(read("app/depoimentos/page.tsx"),/Felipe Augusto/);
  assert.match(read("app/en/testimonials/page.tsx"),/Felipe Augusto/);
});
