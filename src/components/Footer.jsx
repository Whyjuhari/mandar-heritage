import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeIn, viewport } from '../utils/animations'
import site from '../data/site'

function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? 'visible' : 'hidden'
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : site.url

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: site.name,
          text: site.shareText,
          url: shareUrl,
        })
        return
      }

      await navigator.clipboard?.writeText(shareUrl)
    } catch {
      // Share cancellation should keep the footer quiet.
    }
  }

  return (
    <motion.footer
      className="bg-surface-container-highest border-t border-primary/10 py-20 w-full"
      variants={fadeIn}
      initial={initial}
      whileInView="visible"
      viewport={viewport}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 max-w-7xl mx-auto gap-6">
        {/* Logo + copyright */}
        <div>
          <div className="font-playfair text-[28px] leading-9 font-semibold text-primary mb-1 tracking-tight">
            Mandar Digital Heritage
          </div>
          <p className="text-xs font-semibold text-on-surface-variant max-w-sm leading-relaxed">
            © {new Date().getFullYear()} Mandar Digital Heritage. Arsip Digital Budaya Sulawesi Barat.
            Dikembangkan untuk kemajuan kebudayaan Mandar.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-6">
          <a href="/#about" className="text-on-surface-variant hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-wide">
            About
          </a>
          <Link to="/privacy" className="text-on-surface-variant hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-wide">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-on-surface-variant hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-wide">
            Contact
          </Link>
        </nav>

        {/* Social icons */}
        <div className="flex gap-6">
          <button
            type="button"
            aria-label="Share"
            onClick={handleShare}
            className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </button>
          <a
            href={`mailto:${site.contactEmail}?subject=Mandar%20Digital%20Heritage`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
