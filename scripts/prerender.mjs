/**
 * Writes a real HTML file per route into dist/.
 *
 * The app is client-rendered, so the HTML Vite ships has an empty <body> — a
 * crawler that does not execute JavaScript sees nothing at all. This fills each
 * route's #root with the text that route actually displays, and gives it its own
 * title, description and canonical URL. React replaces the markup on mount, so
 * what a crawler reads is what a visitor reads.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = "https://xn--lgancebyclark-9gbb.com";

const products = JSON.parse(readFileSync(join(root, "src/data/products.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const nav = `
  <nav>
    <a href="/">Accueil</a>
    <a href="/collection">Collection</a>
    <a href="/nouveautes">Nouveautés</a>
    <a href="/a-propos">À propos</a>
    <a href="/contact">Contact</a>
  </nav>`;

const productList = products
  .map(
    (p) => `
    <li>
      <a href="/product/${p.id}">
        <img src="${p.img}" alt="${esc(p.name)}" width="300" />
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.price)}</p>
      </a>
    </li>`
  )
  .join("");

const routes = [
  {
    path: "/",
    title: "Élégance by Clark | Vêtements modernes pour hommes à Abidjan",
    description:
      "Élégance by Clark habille l'homme moderne : kimonos, blazers signature et ensembles, casual chic et intemporels. Commande via WhatsApp, livraison à Abidjan.",
    body: `
      <h1>L'élégance masculine dans sa forme la plus simple.</h1>
      <p>Vêtements modernes conçus pour les hommes qui recherchent style, confort et simplicité.</p>
      <h2>Collection 2026</h2>
      <ul>${productList}</ul>
      ${nav}`,
  },
  {
    path: "/collection",
    title: "Collection | Élégance by Clark",
    description:
      "Découvrez la collection Élégance by Clark : kimonos, blazers signature et ensembles pour hommes, à Abidjan. Commande simple via WhatsApp.",
    body: `
      <h1>La Collection</h1>
      <ul>${productList}</ul>
      ${nav}`,
  },
  ...products.map((p) => ({
    path: `/product/${p.id}`,
    title: `${p.name} | Élégance by Clark`,
    description: `${p.name} — ${p.price}. ${p.description.split("\n")[0]}`,
    image: `${SITE}${p.img}`,
    body: `
      <h1>${esc(p.name)}</h1>
      <p>${esc(p.price)}</p>
      <img src="${p.img}" alt="${esc(p.name)}" width="600" />
      <p>${esc(p.description).replace(/\n+/g, "</p><p>")}</p>
      <h2>Détails</h2>
      <ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
      <h2>Tailles</h2>
      <ul>${p.sizes.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      ${nav}`,
  })),
];

for (const route of routes) {
  // Cloudflare serves dist/x/index.html at /x/ and 308s /x to it, so the
  // canonical has to carry the trailing slash or Google sees two URLs per page.
  const url = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}/`;
  const image = route.image ?? null;

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${esc(route.description)}">`
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${esc(route.title)}">`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${esc(route.description)}">`
    )
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`)
    .replace('<div id="root"></div>', `<div id="root">${route.body}</div>`);

  if (image) {
    html = html.replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${image}">`
    );
  }

  const dir = route.path === "/" ? dist : join(dist, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerendered ${route.path}`);
}

console.log(`prerendered ${routes.length} routes`);
