import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://xn--lgancebyclark-9gbb.com";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    el = selector.startsWith("link")
      ? Object.assign(document.createElement("link"), { rel: "canonical" })
      : document.createElement("meta");
    if (el instanceof HTMLMetaElement) {
      const name = selector.match(/\[(?:name|property)="([^"]+)"\]/)?.[1] ?? "";
      if (selector.includes("property")) el.setAttribute("property", name);
      else el.setAttribute("name", name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Gives each route its own title, description and canonical URL. */
export function useSeo(title: string, description: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cloudflare serves every route with a trailing slash; match it, or the
    // canonical disagrees with the URL the crawler was actually given.
    const url = SITE + (pathname === "/" ? "/" : pathname.replace(/\/?$/, "/"));

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [title, description, pathname]);
}
