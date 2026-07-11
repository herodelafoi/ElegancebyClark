import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "/lookbook-kimono-terracotta-exterieur.jpg", alt: "Kimono terracotta porté sur un pantalon noir, en extérieur", tall: true },
  { src: "/lookbook-kimono-vert.jpg", alt: "Kimono vert porté ouvert sur un t-shirt blanc", tall: false },
  { src: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/48h4z5VfXx3rwv3XJfLP6H/pasted-image-1777573693486.jpg", alt: "Silhouette Élégance by Clark", tall: false },
  { src: "/lookbook-kimono-rouge-bureau.jpg", alt: "Kimono rouge à ceinture nouée, porté sur un pantalon noir", tall: true },
];

export default function Lookbook() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Lookbook</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Une collection pensée pour l’homme moderne.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-none px-10 h-12 text-xs tracking-widest uppercase border-foreground/30 text-foreground hover:bg-foreground/5">
            Voir toute la collection <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}