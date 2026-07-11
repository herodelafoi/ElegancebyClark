import { Instagram, Facebook } from "lucide-react";

const socials = [
  {
    Icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/eleganceby_clark?igsh=MWdmYmRkeWc1cW9o&utm_source=qr",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/share/1DH57E3Xri/?mibextid=wwXIfr",
  },
];

const tiktokUrl = "https://www.tiktok.com/@elegance_.by.clark?_r=1&_t=ZS-97wSBPcNaTg";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 py-12">
      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">

        {/* Slogan */}
        <p className="text-sm text-muted-foreground tracking-widest uppercase text-center">
          L'élégance masculine dans sa forme la plus simple.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex gap-4">
          {socials.map(({ Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 border border-border flex items-center justify-center hover:border-brand-cream/50 transition-colors"
            >
              <Icon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          ))}
          {/* TikTok */}
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 border border-border flex items-center justify-center hover:border-brand-cream/50 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-muted-foreground fill-current">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">© 2026 Élégance by Clark. Tous droits réservés.</p>
      </div>
    </footer>
  );
}