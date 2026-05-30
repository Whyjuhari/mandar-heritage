import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

function QuickFacts({ culture }) {
  const { quickFacts, note, status } = culture

  return (
    <div className="sticky top-28">
      <motion.div
        className="bg-white rounded-xl p-8 border border-primary/5"
        style={{ boxShadow: '0px 4px 20px rgba(75, 54, 33, 0.06)' }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header */}
        <motion.h3
          className="text-lg font-semibold text-primary mb-6 pb-3 border-b border-primary/10 flex items-center gap-2"
          variants={staggerItem}
        >
          <span className="material-symbols-outlined text-secondary text-xl">analytics</span>
          Quick Facts
        </motion.h3>

        {/* Facts list */}
        <div className="space-y-6 mb-6">
          {quickFacts.map((fact, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              variants={staggerItem}
            >
              <div className="p-2 bg-secondary/10 rounded-full shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl">{fact.icon}</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm font-bold text-primary">{fact.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <motion.div
          className="bg-secondary-container/30 rounded-xl px-4 py-3 mb-5 flex items-center gap-2"
          variants={staggerItem}
        >
          <span className="material-symbols-outlined text-secondary text-base">info</span>
          <div>
            <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">
              Status Arsip
            </p>
            <p className="text-sm font-bold text-on-secondary-container">{status}</p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-xs text-on-surface-variant italic leading-relaxed"
          variants={staggerItem}
        >
          {note}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default QuickFacts
