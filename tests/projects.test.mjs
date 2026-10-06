import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("project data splits Pendulum and contains complete case media", () => {
  const pt = read("app/projects.ts");
  const en = read("app/projects-en.ts");
  assert.match(pt, /slug:"pendulum-web"/);
  assert.match(pt, /slug:"pendulum-instagram"/);
  assert.match(en, /slug:"pendulum-web"/);
  assert.match(en, /slug:"pendulum-instagram"/);
  assert.match(pt, /brochure-front\.png/);
  assert.match(pt, /brochure-open\.png/);
  assert.match(pt, /folder\.png/);
  assert.match(pt, /computer\.png/);
  assert.ok(existsSync(new URL("../public/cases/aiuruotrek/brochure-front.png", import.meta.url)));
  assert.ok(existsSync(new URL("../public/cases/pendulum/computer.png", import.meta.url)));
});

test("project indexes hide dates and use masonry gallery", () => {
  for (const path of ["app/projetos/page.tsx", "app/en/projects/page.tsx"]) {
    const page = read(path);
    assert.doesNotMatch(page, /project\.year/);
    assert.match(page, /projectMasonry/);
  }
});
