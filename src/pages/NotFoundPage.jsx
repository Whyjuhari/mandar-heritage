import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Halaman Tidak Ditemukan | Mandar Digital Heritage"
        description="Halaman yang Anda cari tidak tersedia di Mandar Digital Heritage."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-surface">
        <div className="text-center max-w-md px-4">
          <span className="material-symbols-outlined text-6xl text-outline/40 mb-6 block">
            search_off
          </span>
          <h1 className="font-playfair text-3xl font-bold text-primary mb-3">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-on-surface-variant mb-8">
            Tautan ini belum tersedia atau sudah berpindah dari arsip digital.
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

export default NotFoundPage
