import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerItem } from '../utils/animations'
import { getOptimizedSrcSet, imageSizes } from '../utils/images'

function CultureCard({ culture }) {
  const { name, badge, location, desc, image, slug } = culture
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={staggerItem}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/culture/${slug}`}
        className="block bg-surface-container-lowest rounded-xl overflow-hidden card-shadow group border border-primary/5 hover:border-secondary/30 transition-all duration-500 h-full"
      >
        {/* Image */}
        <div className="h-56 overflow-hidden relative">
          <img
            src={image}
            srcSet={getOptimizedSrcSet(image)}
            sizes={imageSizes.cultureCard}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 bg-tertiary/90 backdrop-blur-md text-on-tertiary text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-secondary transition-colors leading-snug">
            {name}
          </h3>
          <p className="text-xs font-bold text-secondary uppercase tracking-tight mb-2">
            {location}
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
            {desc}
          </p>
          <div className="flex items-center gap-1 text-xs font-semibold text-secondary group-hover:gap-2 transition-all duration-200">
            <span>Lihat Detail</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CultureCard
