/**
 * Schema.org data for the pages the prerender writes.
 *
 * Google reads JSON-LD straight from the served HTML, so these are baked in at
 * build time rather than injected once React has mounted.
 */

export const SITE = {
  url: "https://www.elegancebyclark.com",
  name: "Élégance by Clark",
  logo: "/images/logo.jpg",
  email: "contact@elegancebyclark.com",
  // E.164, the only form Google reads reliably.
  phone: "+2250779084394",
  street: "Rue des Jardins, Cocody 2 Plateaux Vallon",
  city: "Abidjan",
  country: "CI",
  social: [
    "https://www.instagram.com/eleganceby_clark",
    "https://www.tiktok.com/@elegance_.by.clark",
    "https://www.facebook.com/share/1DH57E3Xri/",
  ],
};

const absolute = (path) => SITE.url + path;

export const organization = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: absolute("/"),
  logo: absolute(SITE.logo),
  description:
    "Vêtements hommes intemporels : blazers, kimonos et ensembles, casual chic, à Abidjan.",
  email: SITE.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    areaServed: "CI",
    availableLanguage: "French",
  },
  sameAs: SITE.social,
});

export const localBusiness = () => ({
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE.name,
  url: absolute("/"),
  image: absolute(SITE.logo),
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressCountry: SITE.country,
  },
  sameAs: SITE.social,
});

export const product = (p) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description.split("\n")[0],
  image: absolute(p.img),
  sku: p.id,
  brand: { "@type": "Brand", name: SITE.name },
  offers: {
    "@type": "Offer",
    url: absolute(`/product/${p.id}/`),
    priceCurrency: "XOF",
    price: p.priceNum,
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: SITE.name },
  },
});

/** Trail entries are [label, path]; the path is relative to the site root. */
export const breadcrumb = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absolute(path),
  })),
});

/** Escapes "<" so a value can never close the script tag early. */
export const jsonLdScripts = (schemas = []) =>
  schemas
    .map(
      (schema) => `
    <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\u003c")}</script>`
    )
    .join("");
