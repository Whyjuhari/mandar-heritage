import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, fadeUp, viewport } from '../utils/animations'

function FeaturedQuote() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Weaving bg texture */}
      <div className="absolute inset-0 weaving-bg -z-10 opacity-20"></div>

      <motion.div
        className="max-w-3xl mx-auto px-4 text-center relative z-10"
        variants={staggerContainer}
        initial={initial}
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="flex flex-col items-center gap-1 mb-6" variants={fadeUp}>
          <span className="font-playfair text-8xl leading-none text-secondary-fixed-dim select-none">&ldquo;</span>
          <p className="font-playfair text-[40px] leading-12 italic text-primary px-12 -mt-12">
            Melestarikan budaya bukan sekadar menyimpan benda mati, melainkan menghidupkan kembali
            semangat yang membentuk identitas bangsa.
          </p>
          <span className="font-playfair text-8xl leading-none text-secondary-fixed-dim self-end -mt-4 select-none">&rdquo;</span>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
            — Mandar Digital Heritage Team
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedQuote
