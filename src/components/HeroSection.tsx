import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        {/* The LCP element on mobile. A real <img> can be preloaded and carries a
            srcset; a CSS background stays hidden until the JS bundle has run. */}
        <picture>
          <source
            type="image/webp"
            srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w, /images/hero-1366.webp 1366w"
            sizes="100vw"
          />
          <img
            src="/images/hero-960.jpg"
            srcSet="/images/hero-640.jpg 640w, /images/hero-960.jpg 960w, /images/hero-1366.jpg 1366w"
            sizes="100vw"
            alt=""
            width={1366}
            height={2048}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className='text-xs tracking-[0.4em] uppercase text-brand-cream mb-6'>Collection 2026</motion.p>
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.9,
        delay: 0.15
      }} className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6" style={{
        fontFamily: "'Playfair Display', Georgia, serif"
      }}>
          L'élégance masculine<br />dans sa forme la plus simple.
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Vêtements modernes conçus pour les hommes qui recherchent style, confort et simplicité.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.45
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/collection/" className="inline-flex items-center justify-center font-medium bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none px-8 h-12 text-xs tracking-widest uppercase transition-colors">
            Découvrir la collection
          </Link>
          <Link to="/contact/" className="inline-flex items-center justify-center font-medium border bg-transparent rounded-none px-8 h-12 text-xs tracking-widest uppercase border-white/40 text-white hover:bg-white/10 transition-colors">
            Nous contacter <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-white/40 uppercase">Défiler</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </motion.div>
    </section>;
}