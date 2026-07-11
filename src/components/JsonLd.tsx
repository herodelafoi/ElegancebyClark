import { useEffect } from "react";

/**
 * Injects a schema.org block so Google can read the page as a product or a
 * store rather than as prose. Keyed by `id` so a route swap replaces its own
 * block instead of stacking a second one.
 */
export default function JsonLd({ id, data }: { id: string; data: object }) {
  const json = JSON.stringify(data);

  useEffect(() => {
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = json;

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, json]);

  return null;
}
