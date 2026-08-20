import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle("Contact | Élégance by Clark");

  return (
    <Layout>
      <section className="relative h-64 md:h-72 flex items-end justify-center pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Nous écrire</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Contact</h1>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-2xl flex flex-col items-center gap-12">

          {/* Coordonnées */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col items-center gap-6 text-center w-full">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Nos coordonnées</p>
              <h2 className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Prenons contact</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
              {[
                { icon: Mail, label: "Email", value: "contact@elegancebyclark.com" },
                { icon: Phone, label: "WhatsApp / Téléphone", value: "+225 07 79 08 43 94" },
                { icon: MapPin, label: "Localisation", value: "Cocody 2 Plateaux Vallon, Rue des Jardins" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 border border-brand-cream/30 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-cream" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
