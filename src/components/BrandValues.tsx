import { motion } from "framer-motion";
import { Gem, Layers, Wind, Infinity } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Qualité premium",
    desc: "Tissus sélectionnés pour garantir confort et durabilité.",
  },
  {
    icon: Layers,
    title: "Style minimaliste",
    desc: "Des pièces simples et élégantes adaptées à toutes les occasions.",
  },
  {
    icon: Wind,
    title: "Confort quotidien",
    desc: "Coupes pensées pour un usage quotidien sans compromis.",
  },
  {
    icon: Infinity,
    title: "Design intemporel",
    desc: "Des vêtements qui restent élégants saison après saison.",
  },
];

export default function BrandValues() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Notre promesse</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Pourquoi choisir notre marque ?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-4 p-6 border border-border hover:border-brand-cream/40 transition-colors group"
            >
              <v.icon className="w-6 h-6 text-brand-cream" />
              <h3 className="text-base font-medium tracking-wide">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}