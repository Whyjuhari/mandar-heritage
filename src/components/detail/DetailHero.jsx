import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { getOptimizedSrcSet, imageSizes } from '../../utils/images'

function DetailHero({ culture }) {
  const { detailTitle, subtitle, heroImage, category, region, status } = culture

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Hero image */}
      <img
        src={heroImage}
        srcSet={getOptimizedSrcSet(heroImage)}
        sizes={imageSizes.detailHero}
        alt={detailTitle}
        decoding="async"
        fetchPriority="high"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content — anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 md:px-16 pb-16 max-w-7xl mx-auto w-full">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold mb-6 transition-colors group uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Archive
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-playfair text-4xl md:text-[56px] md:leading-[64px] font-bold text-white mb-2 max-w-3xl"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
        >
          {detailTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl italic text-secondary-fixed font-medium mb-8"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.12 }}
        >
          {subtitle}
        </motion.p>

        {/* Glass card badges */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {/* Category */}
          <div className="bg-white/90 backdrop-blur-[8px] px-4 py-2.5 rounded-xl flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl">sailing</span>
            <div>
              <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest leading-none mb-0.5">
                Category
              </p>
              <p className="text-sm font-bold text-primary leading-none">{category}</p>
            </div>
          </div>

          {/* Region */}
          <div className="bg-white/90 backdrop-blur-[8px] px-4 py-2.5 rounded-xl flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
            <div>
              <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest leading-none mb-0.5">
                Region
              </p>
              <p className="text-sm font-bold text-primary leading-none">{region}</p>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white/90 backdrop-blur-[8px] px-4 py-2.5 rounded-xl flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl">info</span>
            <div>
              <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest leading-none mb-0.5">
                Status
              </p>
              <p className="text-sm font-bold text-primary leading-none">{status}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DetailHero
