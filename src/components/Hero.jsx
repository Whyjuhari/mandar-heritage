import { motion, useReducedMotion } from 'framer-motion'

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative pt-20 pb-20 overflow-hidden bg-surface">
      {/* Weaving background */}
      <div className="absolute inset-0 weaving-bg -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 grid lg:grid-cols-12 gap-20 items-center">
        {/* Left column */}
        <motion.div
          className="lg:col-span-6 z-10"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold mb-6 uppercase tracking-widest border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Digital Archive Prototype
          </div>

          <h1 className="font-playfair text-[56px] leading-[64px] font-bold text-primary mb-3 tracking-tight">
            Mandar Digital Heritage
          </h1>

          <p className="font-playfair text-[28px] leading-9 italic text-on-surface-variant mb-6">
            Prototype Arsip Digital Budaya Sulawesi Barat
          </p>

          <p className="text-lg leading-7 text-on-surface-variant mb-12 max-w-xl">
            Portofolio awal yang didedikasikan untuk mendokumentasikan,
            mengarsipkan, dan menyebarluaskan kekayaan budaya Sulawesi Barat
            melalui medium teknologi digital modern.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#objects"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Lihat Objek Budaya
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </motion.a>
            <motion.a
              href="#plan"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-sm font-semibold hover:bg-secondary-container/20 transition-all"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Rencana Pengembangan
            </motion.a>
          </div>
        </motion.div>

        {/* Right column — single hero image with frame */}
        <motion.div
          className="lg:col-span-6 relative"
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:rotate-2 border-[12px] border-white/50 backdrop-blur-sm">
            <img
              src="/images/optimized/hero-512.webp"
              alt="Mandar Digital Heritage Archive Concept"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none"></div>
          </div>
          {/* Decorative blur */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
