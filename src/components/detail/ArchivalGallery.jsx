import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../../utils/animations'
import { getOptimizedSrcSet, imageSizes } from '../../utils/images'

function ArchivalGallery({ culture }) {
  const { gallery, name } = culture
  const isSingle = gallery.length === 1

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-6"
        variants={staggerItem}
      >
        Archival Gallery
      </motion.h2>

      <motion.div
        className={isSingle ? '' : 'grid grid-cols-2 md:grid-cols-3 gap-4'}
        variants={staggerItem}
      >
        {gallery.map((src, i) => (
          <div
            key={src}
            className="group relative overflow-hidden rounded-xl h-48 cursor-pointer"
          >
            <img
              src={src}
              srcSet={getOptimizedSrcSet(src)}
              sizes={imageSizes.gallery}
              alt={`${name} - foto ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[32px]">zoom_in</span>
            </div>
          </div>
        ))}
      </motion.div>

      {isSingle && (
        <motion.p
          className="text-xs text-outline italic mt-3"
          variants={staggerItem}
        >
          * Galeri akan diperluas melalui dokumentasi lapangan bersama komunitas budaya lokal.
        </motion.p>
      )}
    </motion.div>
  )
}

export default ArchivalGallery
