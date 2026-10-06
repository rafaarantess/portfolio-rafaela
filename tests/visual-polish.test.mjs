import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const css = fs.readFileSync("app/globals.css", "utf8");
const ptHome = fs.readFileSync("app/page.tsx", "utf8");
const enHome = fs.readFileSync("app/en/page.tsx", "utf8");
const ptContact = fs.readFileSync("app/contato/page.tsx", "utf8");
const enContact = fs.readFileSync("app/en/contact/page.tsx", "utf8");
const projects = fs.readFileSync("app/projects.ts", "utf8");
const projectsEn = fs.readFileSync("app/projects-en.ts", "utf8");
const icons = fs.readFileSync("app/components/icons.tsx", "utf8");

test("contact uses the single approved texture and high contrast copy", () => {
  assert.match(ptContact, /textureWine/);
  assert.match(enContact, /textureWine/);
  assert.doesNotMatch(ptContact + enContact, /textureSatin|textureFur/);
  assert.match(css, /\.contactPageIntro h1[^}]*color:\s*(?:#fff|var\(--ivory\))/s);
  assert.match(css, /\.contactPageIntro p[^}]*color:\s*(?:#fff|var\(--ivory\))/s);
  assert.match(css, /\.contactPage\.texturedHero \.contactOption>span[^}]*color:\s*(?:#fff|var\(--ivory\))/s);
});

test("about uses an off-white texture with burgundy typography", () => {
  assert.match(ptHome, /aboutPremium textureIvory/);
  assert.match(enHome, /aboutPremium textureIvory/);
  assert.doesNotMatch(ptHome + enHome, /textureSatin|textureFur/);
  assert.match(css, /\.aboutPremium[^}]*color:\s*var\(--wine\)/s);
});

test("project metadata reveals on hover but remains visible on touch layouts", () => {
  assert.match(css, /\.masonryTile>span[^}]*opacity:\s*0/s);
  assert.match(css, /\.masonryTile:hover>span[^}]*opacity:\s*1/s);
  assert.match(css, /@media\(hover:none\)[\s\S]*\.masonryTile>span[^}]*opacity:\s*1/s);
});

test("section and contact links use complete pill button spacing", () => {
  assert.match(ptHome, /className="textLink projectsCta"/);
  assert.match(enHome, /className="textLink projectsCta"/);
  assert.match(css, /\.projectsCta[^}]*justify-self:\s*end/s);
  assert.match(css, /\.contactClean>a[^}]*padding:\s*[^;]+/s);
});

test("portfolio adds Biodose and Delivery in both languages", () => {
  for (const source of [projects, projectsEn]) {
    assert.match(source, /slug:"biodose-natural"/);
    assert.match(source, /slug:"comunicacao-delivery"/);
  }
  assert.ok(fs.existsSync("public/projects/biodose-natural.png"));
  assert.ok(fs.existsSync("public/projects/comunicacao-delivery.png"));
});

test("projects gallery is an off-white rounded textured panel", () => {
  assert.match(css, /\.portfolioGrid[^}]*background(?:-image)?:[^}]*(?:var\(--ivory\)|rgba\(247,242,237)/s);
  assert.match(css, /\.portfolioGrid[^}]*border-radius:\s*(?:2[4-9]|[3-9]\d)px/s);
  assert.match(css, /\.portfolioGrid[^}]*box-shadow:/s);
  assert.match(css, /\.portfolioGrid[^}]*grid-template-columns:\s*repeat\(/s);
  assert.match(css, /\.portfolioGrid \.masonryTile[^}]*aspect-ratio:\s*4\s*\/\s*3/s);
});

test("dark sections use white and blush copy with testimonial spacing", () => {
  assert.match(css, /\.testimonialShowcase \.eyebrow[^}]*color:\s*#fff/s);
  assert.match(css, /\.texturedHero>p:last-child[^}]*color:\s*var\(--blush\)/s);
  assert.match(css, /\.testimonialShowcase h2[^}]*margin-bottom:\s*[4-9]\dpx/s);
});

test("WhatsApp icon uses a recognisable handset path", () => {
  assert.match(icons, /M8\.1 6\.8/);
  assert.match(icons, /c\.4 2\.7 2\.4 4\.8 5\.2 5\.5/);
});
