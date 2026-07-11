import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const leftLinks = [
  { label: "Accueil", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "Nouveautés", href: "/nouveautes" },
];

const rightLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const linkClass = (href: string) =>
    `text-xs tracking-widest transition-colors uppercase ${
      location.pathname === href ? "text-brand-cream" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="w-full px-4 md:px-8 h-16 grid grid-cols-3 items-center">

        {/* Left: mobile menu button, desktop links */}
        <div className="flex items-center justify-start">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {leftLinks.map(({ label, href }) => (
              <Link key={label} to={href} className={linkClass(href)}>{label}</Link>
            ))}
          </nav>
        </div>

        {/* Center logo */}
        <div className="flex justify-center">
          <Link to="/" className="block">
            <img
              src="/logo.jpg"
              alt="Élégance by Clark"
              className="h-10 w-auto object-contain rounded-sm"
            />
          </Link>
        </div>

        {/* Right links + cart */}
        <div className="flex items-center justify-end gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {rightLinks.map(({ label, href }) => (
              <Link key={label} to={href} className={linkClass(href)}>{label}</Link>
            ))}
          </nav>

          <Link to="/panier" className="relative" aria-label="Panier">
            <ShoppingBag className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-cream text-brand-dark text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col items-center text-center gap-4">
          {[...leftLinks, ...rightLinks].map(({ label, href }) => (
            <Link key={label} to={href} className={linkClass(href)}>{label}</Link>
          ))}
          <Link to="/panier" className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Panier {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </header>
  );
}