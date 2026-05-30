import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../utils/animations'

function DetailQuote({ culture }) {
  const { quote, quoteSource } = culture

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
        <motion.blockquote
          className="font-playfair text-3xl leading-10 sm:text-[40px] sm:leading-12 italic text-primary px-6 sm:px-12 md:px-16 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Opening quote mark */}
          <span className="text-secondary/30 absolute -top-4 left-0 text-7xl font-serif leading-none select-none">
            "
          </span>

          {quote}

          {/* Closing quote mark */}
          <span className="text-secondary/30 absolute -bottom-12 right-0 text-7xl font-serif leading-none rotate-180 select-none">
            "
          </span>
        </motion.blockquote>

        <motion.cite
          className="block mt-12 text-xs sm:text-sm font-semibold text-on-surface-variant not-italic uppercase tracking-[0.14em] sm:tracking-[0.2em]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.15 }}
        >
          — {quoteSource} —
        </motion.cite>
      </div>
    </section>
  )
}

export default DetailQuote
