import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import regions from '../data/regions'
import { slideRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

const InteractiveMap = lazy(() => import('./InteractiveMap'))

function MapFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-surface-container to-surface-container-high">
      <div className="text-center">
        <span className="material-symbols-outlined text-7xl text-outline/40 mb-4 block">map</span>
        <p className="text-sm text-on-surface-variant font-medium">Memuat peta interaktif</p>
        <p className="text-xs text-outline">Pemetaan budaya Sulawesi Barat</p>
      </div>
    </div>
  )
}

function MappingSection() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="mapping" className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left — region cards */}
        <motion.div
          className="order-2 lg:order-1"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-2 gap-6">
            {regions.map((region) => (
              <motion.div
                key={region.id}
                className="bg-surface-container-lowest p-6 rounded-xl card-shadow border border-primary/5 hover:border-secondary transition-all group"
                variants={staggerItem}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                  <h4 className="text-xl font-semibold text-primary leading-snug">{region.name}</h4>
                </div>
                <p className="text-xs font-semibold text-on-surface-variant ml-4 uppercase tracking-wide">
                  {region.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — heading + map placeholder */}
        <motion.div
          className="order-1 lg:order-2"
          variants={slideRight}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="font-playfair text-[40px] leading-12 font-bold text-primary mb-6">
            Pemetaan Budaya Digital
          </h2>
          <p className="text-lg leading-7 text-on-surface-variant mb-12">
            Mengintegrasikan data geografis dengan kekayaan budaya di setiap kabupaten di Sulawesi
            Barat untuk menciptakan visualisasi persebaran warisan leluhur yang komprehensif dan
            mudah diakses.
          </p>

          {/* Interactive map */}
          <div className="aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-xl relative group bg-surface-container-high">
            <Suspense fallback={<MapFallback />}>
              <InteractiveMap />
            </Suspense>
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-medium shadow-lg">
              <span className="material-symbols-outlined text-sm">explore</span>
              Interactive Map
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MappingSection
