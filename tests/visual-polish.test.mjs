import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const css = fs.readFileSync("app/globals.css", "utf8");
const ptHome = fs.readFileSync("app/page.tsx", "utf8");
const enHome = fs.readFileSync("app/en/page.tsx", "utf8");
const ptContact = fs.readFileSync("app/contato/page.tsx", "utf8");
const enContact = fs.readFileSync("app/en/contact/page.tsx", "utf8");

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
