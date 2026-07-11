import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { products } from "@/data/products";
import { Toaster } from "@/components/ui/sonner";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const { addItem } = useCart();

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Produit introuvable.</p>
    </div>
  );

  const handleAdd = () => {
    if (!selectedSize) { toast.error("Veuillez sélectionner une taille."); return; }
    addItem({ id: product.id, name: product.name, price: product.price, priceNum: product.priceNum, img: product.img, size: selectedSize });
    toast.success(
      <span>
        {product.name} ({selectedSize}) ajouté au panier.{" "}
        <Link to="/panier" className="underline font-medium">Voir le panier →</Link>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <div className="container mx-auto max-w-6xl px-6 pt-24 pb-16">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center md:justify-start gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 w-full md:w-auto">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="aspect-[3/4] overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6 md:pt-4 text-center md:text-left">
            <p className="text-xs tracking-[0.4em] uppercase text-brand-cream">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{product.name}</h1>
            <p className="text-2xl text-brand-cream font-light">{product.price}</p>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>
            <div>
              <p className="text-xs tracking-widest uppercase mb-3">Taille</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {product.sizes.map((s) => (
                  <button key={s} onClick={() => setSelectedSize(s)}
                    className={`w-12 h-10 text-xs border transition-colors ${
                      selectedSize === s ? "border-brand-cream bg-brand-cream text-brand-dark" : "border-border text-muted-foreground hover:border-foreground"
                    }`}>{s}</button>
                ))}
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {product.details.map((d) => <li key={d} className="text-xs text-muted-foreground flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 rounded-full bg-brand-cream inline-block" />{d}</li>)}
            </ul>
            <Button onClick={handleAdd} className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-12 text-xs tracking-widest uppercase flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Ajouter au panier
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}