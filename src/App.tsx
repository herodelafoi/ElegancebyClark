import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandValues from "@/components/BrandValues";
import FeaturedProducts from "@/components/FeaturedProducts";
import Lookbook from "@/components/Lookbook";
import ShopAdvantages from "@/components/ShopAdvantages";
import Testimonials from "@/components/Testimonials";
import AboutBrand from "@/components/AboutBrand";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductDetail from "@/pages/ProductDetail";
import CollectionPage from "@/pages/CollectionPage";
import NouveautesPage from "@/pages/NouveautesPage";
import AProposPage from "@/pages/AProposPage";
import ContactPage from "@/pages/ContactPage";
import PanierPage from "@/pages/PanierPage";
import { CartProvider } from "@/context/CartContext";
import { useSeo } from "@/hooks/useSeo";
import JsonLd from "@/components/JsonLd";

function Home() {
  useSeo(
    "Élégance by Clark | Vêtements modernes pour hommes à Abidjan",
    "Élégance by Clark habille l'homme moderne : kimonos, blazers signature et ensembles, casual chic et intemporels. Commande via WhatsApp, livraison à Abidjan."
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        id="ld-store"
        data={{
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Élégance by Clark",
          description: "Vêtements modernes pour hommes : kimonos, blazers signature et ensembles.",
          url: "https://xn--lgancebyclark-9gbb.com/",
          telephone: "+2250779084394",
          address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
          sameAs: [
            "https://www.instagram.com/eleganceby_clark",
            "https://www.facebook.com/share/1DH57E3Xri/",
            "https://www.tiktok.com/@elegance_.by.clark",
          ],
        }}
      />
      <Toaster position="top-center" />
      <Header />
      <main>
        <HeroSection />
        <BrandValues />
        <FeaturedProducts />
        <Lookbook />
        <ShopAdvantages />
        <Testimonials />
        <AboutBrand />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/nouveautes" element={<NouveautesPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/panier" element={<PanierPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}