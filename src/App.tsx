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
import { usePageTitle } from "@/hooks/usePageTitle";

function Home() {
  usePageTitle("Élégance by Clark");

  return (
    <div className="min-h-screen bg-background text-foreground">
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