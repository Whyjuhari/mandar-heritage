import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../../utils/animations'
import { getOptimizedSrcSet, imageSizes } from '../../utils/images'

function KeepExploring({ others }) {
  const explorationKey = others.map((culture) => culture.id).join('-')

  return (
    <section className="bg-surface-container-low py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned with link on right */}
        <motion.div
          className="flex justify-between items-end mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <h2 className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-1">
              Keep Exploring
            </h2>
            <p className="text-base text-on-surface-variant">
              Temukan lebih banyak kekayaan budaya dari Sulawesi Barat.
            </p>
          </div>
          <Link
            to="/"
            className="hidden md:flex items-center gap-1 text-sm font-bold text-primary hover:gap-3 transition-all duration-300"
          >
            View All Archives
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </Link>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={explorationKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {others.map((culture) => (
            <motion.div key={culture.id} variants={staggerItem}>
              <Link
                to={`/culture/${culture.slug}`}
                className="group block bg-white rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                style={{ boxShadow: '0px 4px 20px rgba(75, 54, 33, 0.06)' }}
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={culture.image}
                    srcSet={getOptimizedSrcSet(culture.image)}
                    sizes={imageSizes.relatedCard}
                    alt={culture.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge top-right */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs px-3 py-1 rounded-full font-semibold">
                    {culture.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {culture.name}
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                    {culture.desc}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[18px]">east</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Contribute to the Archive card */}
          <motion.div variants={staggerItem}>
            <div
              className="bg-primary rounded-xl p-8 flex flex-col justify-center items-center text-center text-white h-full min-h-80"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
                  add_circle
                </span>
              </div>
              <h4 className="font-playfair text-[28px] leading-9 font-semibold mb-4">
                Contribute to the Archive
              </h4>
              <p className="text-base text-white/80 mb-6 leading-relaxed">
                Miliki foto, cerita, atau data budaya Mandar? Bantu kami melestarikannya untuk generasi berikutnya.
              </p>
              <Link
                to="/"
                className="bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-lg text-sm font-bold hover:scale-105 transition-transform"
              >
                Kembali ke Arsip
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeepExploring
