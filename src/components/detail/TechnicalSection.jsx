import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../../utils/animations'

function TechnicalSection({ culture }) {
  const { culturalAspects } = culture

  return (
    <motion.div
      className="bg-surface-container-low rounded-xl p-8 border border-primary/5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-8"
        variants={staggerItem}
      >
        Teknis & Konstruksi
      </motion.h2>

      {/* Grid aspects */}
      <div className="grid sm:grid-cols-2 gap-8">
        {culturalAspects.map((aspect, i) => (
          <motion.div
            key={i}
            className="flex gap-5"
            variants={staggerItem}
          >
            <span className="material-symbols-outlined text-secondary text-[32px] shrink-0 mt-0.5">
              {aspect.icon}
            </span>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1 leading-7">{aspect.title}</h4>
              <p className="text-base text-on-surface-variant leading-6">
                {aspect.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TechnicalSection
