import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../../utils/animations'

function HeritageNarrative({ culture }) {
  const { narrative } = culture

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {/* Overline with divider lines */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        variants={staggerItem}
      >
        <div className="h-px bg-secondary/30 grow" />
        <span className="text-xs font-semibold text-secondary uppercase tracking-widest whitespace-nowrap">
          Heritage Narrative
        </span>
        <div className="h-px bg-secondary/30 w-12" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="font-playfair text-[40px] leading-12 font-bold text-primary mb-6"
        variants={staggerItem}
      >
        Sejarah & Filosofi
      </motion.h2>

      {/* Paragraphs */}
      <div className="space-y-6">
        {narrative.map((para, i) => (
          <motion.p
            key={i}
            className="text-lg text-on-surface-variant leading-7"
            variants={staggerItem}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </motion.div>
  )
}

export default HeritageNarrative
