import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("shared premium site chrome and brand assets exist", () => {
  const header = read("app/components/SiteHeader.tsx");
  const layout = read("app/layout.tsx");
  const css = read("app/globals.css");
  assert.match(header, /Rafaela Arantes/);
  assert.match(header, /<i>R<\/i><b>A<\/b>/);
  assert.match(header, /Projetos/);
  assert.match(header, /data-menu-toggle/);
  assert.match(layout, /icon/);
  assert.match(css, /--wine:\s*#68152d/i);
  assert.match(css, /@media\s*\(max-width:\s*600px\)/i);
  assert.ok(existsSync(new URL("../public/textures/wine-satin.webp", import.meta.url)));
  assert.ok(existsSync(new URL("../public/textures/wine-fur.webp", import.meta.url)));
});
