import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=(p)=>readFileSync(new URL(`../${p}`,import.meta.url),"utf8");
test("education keeps logos, credential links and premium texture",()=>{
  for(const p of ["app/formacao/page.tsx","app/en/education/page.tsx"]){const s=read(p);assert.match(s,/credentials\/logos/);assert.match(s,/https?:\/\//);assert.match(s,/textureWine/);assert.match(s,/SiteHeader/)}
});
test("contact exposes email WhatsApp and LinkedIn actions",()=>{
  for(const p of ["app/contato/page.tsx","app/en/contact/page.tsx"]){const s=read(p);assert.match(s,/mailto:rafaaranteswork@gmail\.com/);assert.match(s,/wa\.me\/5521998406836/);assert.match(s,/linkedin\.com\/in\/rafaelaamelo/);assert.match(s,/SiteHeader/)}
});
