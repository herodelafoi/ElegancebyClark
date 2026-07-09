import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function AboutBrand() {
  return <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/uv1U1QhqPmictneSn2SZxg/pasted-image-1778071934317-zkhpihnt.jpeg" alt="About FORMA" className='w-full h-full object-cover' />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-cream/30 hidden md:block" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
            <p className="text-xs tracking-[0.4em] uppercase text-brand-cream">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-light leading-snug" style={{
            fontFamily: "'Playfair Display', Georgia, serif"
          }}>
              Notre vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chez Élégance by Clark, nous croyons que l’élégance est un héritage, une signature et une manière
              de s’affirmer avec assurance. Notre vision est de bâtir une maison de mode africaine de prestige,
              capable de rivaliser avec les plus grandes références internationales, tout en valorisant notre
              identité et notre savoir-faire. Chaque création est pensée comme une œuvre où le raffinement,
              l’exigence et le souci du détail se rencontrent pour révéler le meilleur de celui ou celle qui la porte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous ne créons pas simplement des vêtements : nous façonnons une image, une présence et une expérience.
              À travers des collections intemporelles, des finitions irréprochables et un service d’exception, nous
              souhaitons inspirer une génération qui choisit l’excellence sans compromis. Notre ambition est de faire
              d’Élégance by Clark un symbole de distinction, d’innovation et de luxe, reconnu en Côte d’Ivoire, en
              Afrique et sur les plus grandes scènes internationales. Porter Élégance by Clark, c’est choisir une
              identité où la confiance, le prestige et l’élégance deviennent une évidence.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center font-medium border bg-transparent rounded-none w-fit px-8 h-12 text-xs tracking-widest uppercase border-foreground/30 text-foreground hover:bg-foreground/5 transition-colors">
              Nous contacter <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
}