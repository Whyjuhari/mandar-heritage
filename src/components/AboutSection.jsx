import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../utils/animations'

function AboutSection() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="about" className="bg-surface-container-low py-20 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-16 text-center relative z-10"
        variants={staggerContainer}
        initial={initial}
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          className="font-playfair text-[40px] leading-12 font-bold text-primary mb-6"
          variants={fadeUp}
        >
          Menjaga Warisan untuk Masa Depan
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg leading-7 text-on-surface-variant mb-12"
            variants={fadeUp}
          >
            Proyek ini merupakan purwarupa arsip digital awal yang didedikasikan untuk mendokumentasikan
            dan membagikan pengetahuan budaya lokal kepada generasi muda. Kami percaya bahwa teknologi
            digital adalah jembatan paling efisien untuk memastikan nilai-nilai luhur Mandar tetap
            relevan di era modern.
          </motion.p>

          <motion.div
            className="bg-surface-container-lowest p-12 border-l-8 border-secondary rounded-xl shadow-sm italic"
            variants={fadeUp}
          >
            <p className="font-playfair text-[28px] leading-9 text-primary">
              &ldquo;Budaya bukan sekadar sisa masa lalu, melainkan kompas untuk menentukan arah masa depan.&rdquo;
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Hull-shape decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-surface hull-shape"></div>
    </section>
  )
}

export default AboutSection
