import { motion, useReducedMotion } from 'framer-motion'
import cultures from '../data/cultures'
import CultureCard from './CultureCard'
import { fadeUp, staggerContainer, viewport } from '../utils/animations'

function CultureObjects() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="objects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
        >
          <div className="max-w-2xl">
            <h2 className="font-playfair text-[40px] leading-12 font-bold text-primary mb-3">
              Objek Budaya Unggulan
            </h2>
            <p className="text-base text-on-surface-variant">
              Jelajahi keragaman pusaka budaya Sulawesi Barat melalui katalog digital yang dikurasi
              untuk standar akademik dan pelestarian.
            </p>
          </div>
        </motion.div>

        {/* Grid — stagger container triggers card entrance one by one */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cultures.map((culture) => (
            <CultureCard key={culture.id} culture={culture} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CultureObjects
