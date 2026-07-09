import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4] mb-4">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none text-xs tracking-widest uppercase px-6 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
            Voir le produit
          </Button>
        </div>
        <h3 className="text-sm font-medium tracking-wide text-center md:text-left">{product.name}</h3>
        <p className="text-sm text-brand-cream mt-1 text-center md:text-left">{product.price}</p>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Sélection</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Nos pièces incontournables
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}