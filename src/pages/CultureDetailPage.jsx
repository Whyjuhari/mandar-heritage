import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import cultures from '../data/cultures'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailHero from '../components/detail/DetailHero'
import HeritageNarrative from '../components/detail/HeritageNarrative'
import TechnicalSection from '../components/detail/TechnicalSection'
import ArchivalGallery from '../components/detail/ArchivalGallery'
import QuickFacts from '../components/detail/QuickFacts'
import DetailQuote from '../components/detail/DetailQuote'
import KeepExploring from '../components/detail/KeepExploring'
import { fadeUp } from '../utils/animations'
import SEO from '../components/SEO'
import site from '../data/site'

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-surface">
        <div className="text-center max-w-md px-4">
          <span className="material-symbols-outlined text-6xl text-outline/40 mb-6 block">
            search_off
          </span>
          <h1 className="font-playfair text-3xl font-bold text-primary mb-3">
            Data Tidak Ditemukan
          </h1>
          <p className="text-on-surface-variant mb-8">
            Objek budaya yang Anda cari belum tersedia dalam arsip digital ini.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Kembali ke Beranda
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

function CultureDetailPage() {
  const { slug } = useParams()
  const culture = cultures.find((c) => c.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!culture) return <NotFound />

  const others = cultures.filter((c) => c.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO
        title={`${culture.detailTitle} | ${site.name}`}
        description={culture.shortDescription}
        path={`/culture/${culture.slug}`}
        image={culture.heroImage}
        type="article"
      />
      <Navbar />
      <main>
        <DetailHero culture={culture} />

        {/* Main content + sidebar */}
        <div className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-16 py-16">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Konten utama — 8 kolom */}
              <motion.div
                className="lg:col-span-8 flex flex-col gap-16"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <HeritageNarrative culture={culture} />
                <TechnicalSection culture={culture} />
                <ArchivalGallery culture={culture} />
              </motion.div>

              {/* Sidebar — 4 kolom */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <QuickFacts culture={culture} />
              </motion.div>
            </div>
          </div>
        </div>

        <DetailQuote culture={culture} />
        <KeepExploring others={others} />
      </main>
      <Footer />
    </>
  )
}

export default CultureDetailPage
