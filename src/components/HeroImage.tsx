type Props = {
  /** Above the fold: fetched eagerly and given priority. Below it: lazy-loaded. */
  priority?: boolean;
  objectPosition?: string;
};

/**
 * The hero photo, in the widths and formats a browser can actually use.
 *
 * A real <img> rather than a CSS background: the preload scanner finds it while
 * the HTML is still parsing, whereas a background set from JSX only surfaces
 * once the bundle has run — which is what made it the slowest paint on mobile.
 */
export default function HeroImage({ priority = false, objectPosition }: Props) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w, /images/hero-1366.webp 1366w"
        sizes="100vw"
      />
      <img
        src="/images/hero-960.jpg"
        srcSet="/images/hero-640.jpg 640w, /images/hero-960.jpg 960w, /images/hero-1366.jpg 1366w"
        sizes="100vw"
        alt=""
        width={1366}
        height={2048}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </picture>
  );
}
