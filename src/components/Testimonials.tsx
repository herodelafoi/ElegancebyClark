import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexandre M.",
    role: "Designer, Paris",
    text: "La qualité du tissu est exceptionnelle. Je porte le Hoodie Signature depuis 6 mois et il est toujours impeccable.",
    stars: 5,
  },
  {
    name: "Thomas B.",
    role: "Entrepreneur, Lyon",
    text: "Style élégant et coupe parfaite. La Chemise Premium est devenue mon indispensable pour les réunions professionnelles.",
    stars: 5,
  },
  {
    name: "Julien R.",
    role: "Architecte, Bordeaux",
    text: "Un confort incroyable au quotidien. Ces vêtements sont exactement ce que je cherchais : simples, élégants, durables.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Avis clients</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ils portent déjà la marque
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-border hover:border-brand-cream/30 transition-colors text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-cream text-brand-cream" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">“{t.text}”</p>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}