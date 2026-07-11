import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Yann K.",
    role: "Architecte, Cocody",
    text: "J'ai porté l'Ensemble Signature Noir à un mariage : le kimono tombe parfaitement et le pantalon garde sa ligne toute la soirée. On m'a demandé la marque trois fois.",
    stars: 5,
  },
  {
    name: "Serge A.",
    role: "Consultant, Plateau",
    text: "Le Blazer Signature Rouge Carmin ne passe pas inaperçu, et c'est exactement ce que je cherchais. Bien coupé, il se porte aussi bien sur un jean que sur un pantalon habillé.",
    stars: 5,
  },
  {
    name: "Ibrahim T.",
    role: "Photographe, Marcory",
    text: "Le Kimono Signature Terracotta est devenu ma pièce préférée. La couleur est encore plus belle en vrai, et la ceinture permet de l'ajuster comme on veut.",
    stars: 5,
  },
  {
    name: "Franck D.",
    role: "Entrepreneur, Yamoussoukro",
    text: "Le Blazer Signature Bleu Ciel est parfait pour mes rendez-vous : chic sans être guindé. Les rayures font tout le travail.",
    stars: 5,
  },
  {
    name: "Aristide N.",
    role: "Directeur commercial, Grand-Bassam",
    text: "J'hésitais sur le caramel, j'ai eu raison de me lancer. La teinte réchauffe immédiatement une tenue claire et la coupe est impeccable.",
    stars: 5,
  },
  {
    name: "Cédric O.",
    role: "Ingénieur, Bouaké",
    text: "Commande passée sur WhatsApp le matin, livrée le lendemain. Le service est aussi soigné que les vêtements.",
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