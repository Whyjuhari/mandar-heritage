import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, viewport } from '../utils/animations'
import { getOptimizedSrcSet, imageSizes } from '../utils/images'

function QREducationSection() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'

  return (
    <section id="qr" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <motion.div
          className="bg-primary text-on-primary rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl"
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left — text content */}
          <motion.div
            className="p-12 lg:w-3/5 flex flex-col justify-center"
            variants={slideLeft}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary-fixed text-xs font-semibold uppercase tracking-widest mb-6 border border-white/10 self-start">
              Education Bridge
            </div>

            <h2 className="font-playfair text-[40px] leading-12 font-bold mb-6">
              QR Code Pendidikan Budaya
            </h2>

            <p className="text-lg leading-7 text-on-primary-container mb-12 opacity-90">
              Menghubungkan ruang publik dan sekolah langsung ke arsip digital. Cukup pindai kode
              QR pada artefak atau lokasi bersejarah untuk mendapatkan informasi mendalam, video
              dokumenter, dan narasi sejarah yang akurat secara instan di perangkat pintar Anda.
            </p>

            <div className="flex items-start gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed shrink-0 flex items-center justify-center text-primary shadow-lg">
                <span className="material-symbols-outlined text-3xl">qr_code_2</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                Modernisasi kurikulum muatan lokal melalui aksesibilitas digital yang inklusif
                untuk generasi masa depan.
              </p>
            </div>
          </motion.div>

          {/* Right — QR visual */}
          <motion.div
            className="lg:w-2/5 relative min-h-100 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden"
            variants={slideRight}
          >
            {/* Background image */}
            <img
              src="/images/optimized/qr-code-1024.webp"
              srcSet={getOptimizedSrcSet('/images/optimized/qr-code-1024.webp')}
              sizes={imageSizes.qrPanel}
              alt="QR Code"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-30 absolute inset-0"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/40 to-transparent"></div>

            {/* QR mockup card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl flex flex-col items-center -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-40 h-40 bg-primary/5 rounded-2xl flex items-center justify-center border-4 border-primary/10 border-dashed mb-4">
                  <span className="material-symbols-outlined text-7xl text-primary/40">qr_code_scanner</span>
                </div>
                <p className="text-primary font-bold text-sm tracking-widest uppercase">SCAN FOR ARCHIVE</p>
                <p className="text-on-surface-variant text-xs mt-1">v.1.0 Protocol</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default QREducationSection
