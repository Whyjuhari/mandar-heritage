import { motion, useReducedMotion } from 'framer-motion'
import portfolioItems from '../data/portfolioItems'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

function PortfolioEvidence() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="font-playfair text-[40px] leading-12 font-bold text-primary mb-3">
            Komponen Portofolio Digital
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Infrastruktur digital komprehensif yang dikembangkan untuk mendukung ekosistem
            pelestarian budaya Sulawesi Barat.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${item.bg} ${item.colSpan === 2 ? 'md:col-span-2' : ''} p-6 lg:p-12 rounded-2xl border border-primary/5 hover:border-secondary transition-all shadow-sm group relative overflow-hidden ${item.id === 'field' ? 'shadow-xl' : ''}`}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.id === 'mapping' ? (
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-3/5">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-12`}>
                      <span className={`material-symbols-outlined text-3xl ${item.iconColor}`}>{item.icon}</span>
                    </div>
                    <h3 className={`text-xl font-semibold ${item.textColor} mb-2`}>{item.title}</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="md:w-2/5 bg-white/40 backdrop-blur-sm rounded-2xl h-48 w-full flex items-center justify-center border border-primary/10 group-hover:bg-white/60 transition-all">
                    <span className="material-symbols-outlined text-7xl text-primary/20">explore</span>
                  </div>
                </div>
              ) : item.id === 'field' ? (
                <>
                  <div className="relative z-10">
                    <h3 className={`text-xl font-semibold ${item.textColor} mb-2`}>{item.title}</h3>
                    <p className="text-base text-on-primary-container max-w-2xl leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10 scale-150">
                    <span className="material-symbols-outlined text-9xl">camera_outdoor</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-colors`}>
                      <span className={`material-symbols-outlined text-3xl ${item.iconColor} transition-colors`}>{item.icon}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${item.textColor} mb-2`}>{item.title}</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioEvidence
