import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function PanierPage() {
  usePageTitle("Panier | Élégance by Clark");

  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const formatPrice = (num: number) =>
    new Intl.NumberFormat("fr-FR").format(num) + " FCFA";

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite commander :\n${items
      .map((i) => `- ${i.name} (Taille: ${i.size}) x${i.quantity} = ${formatPrice(i.priceNum * i.quantity)}`)
      .join("\n")}\n\nTotal : ${formatPrice(totalPrice)}`
  );
  const whatsappUrl = `https://wa.me/2250779084394?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <Header />

      <div className="container mx-auto max-w-5xl px-6 pt-28 pb-20">
        {/* Back */}
        <Link
          to="/collection"
          className="flex w-full justify-center md:inline-flex md:w-auto md:justify-start items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Continuer les achats
        </Link>

        <h1
          className="text-3xl md:text-4xl font-light mb-2 text-center md:text-left"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Mon Panier
        </h1>
        <p className="text-sm text-muted-foreground mb-10 text-center md:text-left">
          {totalItems === 0
            ? "Votre panier est vide"
            : `${totalItems} article${totalItems > 1 ? "s" : ""}`}
        </p>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map((item, i) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-5 border-b border-border pb-6"
                >
                  <Link to={`/product/${item.id}`} className="shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-32 object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-light text-base hover:text-brand-cream transition-colors"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                          Taille : {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-brand-cream font-light text-sm">
                        {formatPrice(item.priceNum * item.quantity)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="self-center md:self-start text-xs text-muted-foreground hover:text-destructive transition-colors tracking-wider uppercase underline underline-offset-4"
              >
                Vider le panier
              </button>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="border border-border p-6 sticky top-28">
                <h2 className="text-sm tracking-[0.25em] uppercase mb-6 text-center md:text-left">
                  Récapitulatif
                </h2>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Livraison</span>
                    <span className="text-brand-cream">En Inbox</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-light text-base mb-6">
                  <span>Total</span>
                  <span className="text-brand-cream">{formatPrice(totalPrice)}</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-12 text-xs tracking-widest uppercase flex items-center justify-center transition-colors"
                >
                  Commander via WhatsApp
                </a>
                <p className="text-[11px] text-muted-foreground text-center mt-3 leading-relaxed">
                  Vous serez redirigé vers WhatsApp pour finaliser votre commande.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-24 gap-6"
    >
      <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center">
        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="text-center">
        <p className="text-lg font-light mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Votre panier est vide
        </p>
        <p className="text-sm text-muted-foreground">
          Découvrez notre collection et ajoutez vos pièces favorites.
        </p>
      </div>
      <Link to="/collection">
        <Button className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-11 px-8 text-xs tracking-widest uppercase">
          Voir la collection
        </Button>
      </Link>
    </motion.div>
  );
}