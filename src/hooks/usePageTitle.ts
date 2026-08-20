import { useEffect } from "react";

/**
 * Sets the browser tab title for the current route.
 *
 * The app is a SPA: a client-side navigation never reloads the document, so the
 * title stays on whatever the first page set unless a route updates it itself.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
