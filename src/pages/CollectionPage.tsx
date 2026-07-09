import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Layout from "@/components/Layout";

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
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

export default function CollectionPage() {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 flex items-end justify-center pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/nq9P8LbMwcSiALkvGHm4vq/pasted-image-1773049767420.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Élégance by Clark</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Notre Collection</h1>
        </motion.div>
      </section>
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}