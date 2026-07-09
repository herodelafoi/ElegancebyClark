import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Comment passer une commande ?",
    a: "Vous pouvez passer commande directement via notre boutique en ligne ou nous contacter sur WhatsApp. Nous vous accompagnons à chaque étape.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Les commandes sont expédiées sous 24h. La livraison est effectuée en 2 à 4 jours ouvrables selon votre localisation.",
  },
  {
    q: "Puis-je retourner un article ?",
    a: "Oui, vous disposez de 30 jours après réception pour retourner un article non porté, dans son emballage d'origine.",
  },
  {
    q: "Les tailles sont-elles standard ?",
    a: "Nos vêtements suivent les tailles européennes standard (XS à XXL). Un guide des tailles est disponible sur chaque fiche produit.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons les paiements par carte bancaire, Mobile Money (Orange Money, Wave, MTN) et en espèces pour les livraisons en main propre.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-border/50 last:border-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-sm font-medium group-hover:text-brand-cream transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-brand-cream shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}
          className="text-sm text-muted-foreground leading-relaxed pb-5 text-center md:text-left"
        >
          {a}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/nq9P8LbMwcSiALkvGHm4vq/pasted-image-1773049767420.jpg')" }}
      />
      <div className="absolute inset-0 backdrop-blur-md bg-card/80" />

      <div className="relative z-10 container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Questions fréquentes</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Tout ce que vous devez savoir
          </h2>
        </motion.div>

        <div>
          {faqs.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} index={i} />)}
        </div>
      </div>
    </section>
  );
}