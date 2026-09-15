/**
 * Writes a real HTML file per route into dist/.
 *
 * The app is client-rendered, so the HTML Vite ships has an empty <body> — a
 * crawler that does not execute JavaScript sees nothing at all. This fills each
 * route's #root with the text that route actually displays, and gives it its own
 * title, description, Open Graph and Twitter Card tags. React replaces the markup on mount, so
 * what a crawler reads is what a visitor reads.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const products = JSON.parse(readFileSync(join(root, "src/data/products.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const site = "https://www.elegancebyclark.com";

// What WhatsApp, Facebook and the like show when a page is shared: they read the
// served HTML and never run JavaScript.
const ogTags = (route) =>
  [
    ["og:title", route.title],
    ["og:description", route.description],
    ["og:url", site + route.path],
    ["og:image", site + route.image],
    ["og:type", "website"],
  ]
    .map(([property, content]) => `
    <meta property="${property}" content="${esc(content)}" />`)
    .join("");

// X reads its own tags; summary_large_image shows the shared image full width.
const twitterTags = (route) =>
  [
    ["twitter:card", "summary_large_image"],
    ["twitter:title", route.title],
    ["twitter:description", route.description],
    ["twitter:image", site + route.image],
  ]
    .map(([name, content]) => `
    <meta name="${name}" content="${esc(content)}" />`)
    .join("");

const nav = `
  <nav>
    <a href="/">Accueil</a>
    <a href="/collection/">Collection</a>
    <a href="/nouveautes/">Nouveautés</a>
    <a href="/a-propos/">À propos</a>
    <a href="/contact/">Contact</a>
  </nav>`;

const productList = products
  .map(
    (p) => `
    <li>
      <a href="/product/${p.id}/">
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
    image: "/images/og/accueil.jpg",
    title: "Vêtements Hommes Intemporels - Élégance by Clark",
    description:
      "Découvrez nos kimonos et blazers intemporels pour hommes. Vêtements chic et modernes, casual ou signature. Commande via WhatsApp - Livraison partout à Abidjan.",
    body: `
      <h1>L'élégance masculine dans sa forme la plus simple.</h1>
      <p>Vêtements modernes conçus pour les hommes qui recherchent style, confort et simplicité.</p>
      <h2>Collection 2026</h2>
      <ul>${productList}</ul>
      ${nav}`,
  },
  {
    path: "/collection/",
    image: "/images/og/collection.jpg",
    title: "Blazers, Kimonos & Ensembles - Élégance by Clark",
    description:
      "Collection exclusive de blazers, kimonos et ensembles pour hommes. Mode intemporelle, casual chic. Tous les styles en un seul endroit. Commande WhatsApp.",
    body: `
      <h1>La Collection</h1>
      <ul>${productList}</ul>
      ${nav}`,
  },
  {
    path: "/a-propos/",
    image: "/images/og/a-propos.jpg",
    title: "Qui sommes-nous ? - Élégance by Clark",
    description:
      "Découvrez l'histoire d'Élégance by Clark. Vêtements hommes intemporels, casual chic et de qualité. Notre mission : l'élégance accessible pour tous.",
    body: `
      <h1>À propos</h1>
      <h2>L'élégance masculine réinventée</h2>
      <p>Chez Élégance by Clark, nous croyons que l'élégance est un héritage, une signature et une manière de s'affirmer avec assurance. Notre vision est de bâtir une maison de mode africaine de prestige, capable de rivaliser avec les plus grandes références internationales, tout en valorisant notre identité et notre savoir-faire. Chaque création est pensée comme une œuvre où le raffinement, l'exigence et le souci du détail se rencontrent pour révéler le meilleur de celui ou celle qui la porte.</p>
      <p>Nous ne créons pas simplement des vêtements : nous façonnons une image, une présence et une expérience. À travers des collections intemporelles, des finitions irréprochables et un service d'exception, nous souhaitons inspirer une génération qui choisit l'excellence sans compromis. Notre ambition est de faire d'Élégance by Clark un symbole de distinction, d'innovation et de luxe, reconnu en Côte d'Ivoire, en Afrique et sur les plus grandes scènes internationales.</p>
      <ul>
        <li><h3>Qualité premium</h3><p>Tissus sélectionnés pour garantir confort et durabilité.</p></li>
        <li><h3>Style minimaliste</h3><p>Des pièces simples et élégantes adaptées à toutes les occasions.</p></li>
        <li><h3>Confort quotidien</h3><p>Coupes pensées pour un usage quotidien sans compromis.</p></li>
        <li><h3>Design intemporel</h3><p>Des vêtements qui restent élégants saison après saison.</p></li>
      </ul>
      ${nav}`,
  },
  {
    path: "/contact/",
    image: "/images/og/contact.jpg",
    title: "Commande & Support - Élégance by Clark",
    description:
      "Élégance by Clark Abidjan - Commandes WhatsApp +225 07 79 08 43 94. Email, visite Cocody. Questions, support. Nous répondons rapidement.",
    body: `
      <h1>Contact</h1>
      <h2>Prenons contact</h2>
      <ul>
        <li>Email : contact@elegancebyclark.com</li>
        <li>WhatsApp / Téléphone : +225 07 79 08 43 94</li>
        <li>Localisation : Cocody 2 Plateaux Vallon, Rue des Jardins</li>
      </ul>
      ${nav}`,
  },
  {
    path: "/nouveautes/",
    image: "/images/og/nouveautes.jpg",
    title: "Arrivages Récents - Élégance by Clark",
    description:
      "Arrivages récents chez Élégance by Clark. Nouveaux kimonos et pièces tendance. Découvrez les dernières collections 2026 pour l'homme moderne.",
    body: `
      <h1>Nouveautés</h1>
      <p>Collection 2026</p>
      <ul>
        <li><img src="/images/kimono-signature-terracotta.jpg" alt="Kimono - Orange" width="300" /><h3>Kimono - Orange</h3><p>Nouveau</p></li>
        <li><img src="/images/ensemble-signature-noir.jpg" alt="Ensemble Noir" width="300" /><h3>Ensemble Noir</h3><p>Bientôt</p></li>
        <li><img src="/images/nouveaute-look-casual-ete.jpg" alt="Look Casual Été" width="300" /><h3>Look Casual Été</h3><p>Bientôt</p></li>
      </ul>
      <a href="/collection/">Voir toute la collection</a>
      ${nav}`,
  },
  {
    // The cart's contents live in the browser: prerender only what holds for
    // every visitor, never "Votre panier est vide". A cart has no place in
    // search results, so the served HTML itself carries the noindex.
    path: "/panier/",
    image: "/images/og/accueil.jpg",
    robots: "noindex, follow",
    title: "Mon Panier - Élégance by Clark",
    description:
      "Mon Panier - Élégance by Clark. Consultez et finalisez votre commande. Paiement sécurisé, livraison rapide à Abidjan.",
    body: `
      <a href="/collection/">Continuer les achats</a>
      <h1>Mon Panier</h1>
      ${nav}`,
  },
  ...products.map((p) => ({
    path: `/product/${p.id}/`,
    image: p.img,
    title: `${p.name} - Élégance by Clark`,
    description: `${p.name} — ${p.price}. ${p.description.split("\n")[0]}`,
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
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${esc(route.description)}">` + ogTags(route) + twitterTags(route)
    )
    .replace(/<meta name="robots"[^>]*>/, (tag) =>
      route.robots ? `<meta name="robots" content="${esc(route.robots)}" />` : tag
    )
    .replace('<div id="root"></div>', `<div id="root">${route.body}</div>`);

  const dir = route.path === "/" ? dist : join(dist, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerendered ${route.path}`);
}

console.log(`prerendered ${routes.length} routes`);
