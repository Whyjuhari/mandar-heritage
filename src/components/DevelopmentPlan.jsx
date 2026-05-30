import { motion, useReducedMotion } from 'framer-motion'
import developmentSteps from '../data/developmentSteps'
import { fadeUp, viewport } from '../utils/animations'

function DevelopmentPlan() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="plan" className="py-20 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            6-Step Roadmap
          </div>
          <h2 className="font-playfair text-[40px] leading-12 font-bold text-primary">
            Rencana Pengembangan Strategis
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto mt-4">
            Tahapan sistematis menuju ekosistem digital yang berdaulat, berkelanjutan, dan terpercaya
            bagi pelestarian budaya — kondisional sesuai ketersediaan pendanaan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-secondary/5 via-secondary/40 to-secondary/5 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {developmentSteps.map((step, index) => {
              const isEven = index % 2 === 1
              return (
                <motion.div
                  key={step.number}
                  className="flex flex-col md:flex-row items-center justify-between group"
                  variants={fadeUp}
                  initial={initial}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Left side */}
                  {isEven ? (
                    <div className="md:w-[45%] text-left bg-surface-container-lowest p-6 lg:p-12 rounded-2xl shadow-sm border border-primary/5 order-2 md:order-1 mt-6 md:mt-0 group-hover:border-secondary transition-all">
                      <div className="md:hidden mb-2">
                        <span className="text-xs font-bold text-secondary uppercase tracking-wide">{step.phase}</span>
                      </div>
                      <h3 className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="md:w-[45%] md:text-right hidden md:block">
                      <h4 className="text-xl font-semibold text-secondary mb-1">{step.phase}</h4>
                      <p className="text-on-surface-variant text-sm">{step.phaseDesc}</p>
                    </div>
                  )}

                  {/* Center circle */}
                  <div className={`w-16 h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center z-10 font-bold text-lg shadow-xl border-4 border-surface-container-low group-hover:scale-110 transition-transform duration-300 ${isEven ? 'order-1 md:order-2' : ''}`}>
                    {step.number}
                  </div>

                  {/* Right side */}
                  {isEven ? (
                    <div className="md:w-[45%] text-left hidden md:block order-3">
                      <h4 className="text-xl font-semibold text-secondary mb-1">{step.phase}</h4>
                      <p className="text-on-surface-variant text-sm">{step.phaseDesc}</p>
                    </div>
                  ) : (
                    <div className="md:w-[45%] text-left bg-surface-container-lowest p-6 lg:p-12 rounded-2xl shadow-sm border border-primary/5 mt-6 md:mt-0 group-hover:border-secondary transition-all">
                      <div className="md:hidden mb-2">
                        <span className="text-xs font-bold text-secondary uppercase tracking-wide">{step.phase}</span>
                      </div>
                      <h3 className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentPlan
