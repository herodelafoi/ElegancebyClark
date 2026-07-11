import { motion } from "framer-motion";
import { useSeo } from "@/hooks/useSeo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const nouveautes = [
  { img: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/xpR9ma9kXxWm2R8ReAb8jS/pasted-image-1773050077778.jpg", label: "Kimono - Orange", badge: "Nouveau" },
  { img: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/mVyXsvQ27YzCtTDPrBNLpa/pasted-image-1777573117308.jpg", label: "Ensemble Noir", badge: "Bientôt" },
  { img: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/mTyfEMjgBvTqQUPYHHH2bZ/pasted-image-1773050439435.jpg", label: "Look Casual Été", badge: "Bientôt" },
];

export default function NouveautesPage() {
  useSeo(
    "Nouveautés | Élégance by Clark",
    "Les dernières pièces Élégance by Clark : blazers signature, kimonos et ensembles pour hommes. Nouveautés à découvrir à Abidjan."
  );

  return (
    <Layout>
      <section className="relative h-64 md:h-80 flex items-end justify-center pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/nq9P8LbMwcSiALkvGHm4vq/pasted-image-1773049767420.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Collection 2026</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Nouveautés</h1>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nouveautes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 text-xs tracking-widest uppercase px-3 py-1 bg-brand-cream text-brand-dark">{item.badge}</span>
                </div>
                <h3 className="text-sm font-medium tracking-wide">{item.label}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/collection">
              <Button className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-12 px-10 text-xs tracking-widest uppercase">
                Voir toute la collection <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}